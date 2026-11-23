import PanelShell, { Card, ErrorBox, NotConnected, Table } from "@/components/panel/PanelShell";
import { field, formspreeConfigured, formspreeSubmissions } from "@/lib/panel/formspree";
import { fmtDate, safe } from "@/lib/panel/safe";

export const dynamic = "force-dynamic";

export default async function LeadsPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  if (!formspreeConfigured()) {
    return <PanelShell active="/panel/talepler" title="Gelen talepler"><NotConnected what="Formspree" vars={["FORMSPREE_API_KEY"]} /></PanelShell>;
  }
  const r = await safe(() => formspreeSubmissions(200));
  const needle = q.toLowerCase();
  const subs = r.ok ? r.data.filter((s) => !needle || JSON.stringify(s).toLowerCase().includes(needle)) : [];
  const rows = subs.map((s) => [
    fmtDate(field(s, "_date", "created_at", "date")),
    field(s, "form_id", "formId", "_form", "lead_type") || "teklif",
    field(s, "name", "ad", "full_name", "adSoyad"),
    field(s, "company", "sirket", "firma"),
    field(s, "email", "_replyto", "eposta"),
    field(s, "phone", "telefon", "whatsapp"),
    field(s, "services", "service", "hizmetler"),
    field(s, "from", "page", "utm_source"),
  ]);
  const csv = "data:text/csv;charset=utf-8," + encodeURIComponent(["Tarih,Form,Ad,Şirket,E-posta,Telefon,Hizmet,Kaynak", ...rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))].join("\n"));
  return (
    <PanelShell active="/panel/talepler" title="Gelen talepler">
      <Card>
        <form className="flex flex-wrap gap-3 mb-4" role="search">
          <label htmlFor="q" className="sr-only">Ara</label>
          <input id="q" name="q" defaultValue={q} placeholder="Ad, şirket, e-posta, hizmet…" className="pnl-input flex-1 min-w-[12rem]" />
          <button className="pnl-btn-primary">Ara</button>
          {rows.length > 0 && <a href={csv} download="londradepo-talepler.csv" className="pnl-btn-ghost">CSV indir</a>}
        </form>
        {r.ok ? <Table head={["Tarih", "Form", "Ad", "Şirket", "E-posta", "Telefon", "Hizmet", "Kaynak sayfa"]} rows={rows} empty="Henüz talep yok." /> : <ErrorBox message={r.error} />}
        <p className="text-xs text-slate-500 mt-3">Kaynak: Formspree (form {process.env.FORMSPREE_FORM_ID || "xoejvawy"}), son 200 kayıt, 5 dk önbellek.</p>
      </Card>
    </PanelShell>
  );
}
