import Link from "next/link";
import PanelShell, { Card, ErrorBox, Stat, Table } from "@/components/panel/PanelShell";
import { apolloConfigured, contactName, searchTasks } from "@/lib/panel/apollo";
import { field, formspreeConfigured, formspreeSubmissions } from "@/lib/panel/formspree";
import { eventFilter, ga4Configured, ga4Report } from "@/lib/panel/ga4";
import { fmtDate, safe } from "@/lib/panel/safe";
import { llmsStatus, sitemapUrls } from "@/lib/panel/seo";

export const dynamic = "force-dynamic";

const notSet = (what: string, href: string) => <p className="text-sm text-amber-800">{what} bağlı değil — <Link href={href} className="underline">ayrıntı</Link></p>;

export default async function PanelHome() {
  const [ga, leads, tasks, llms] = await Promise.all([
    ga4Configured()
      ? safe(() => ga4Report({ dateRanges: [{ startDate: "7daysAgo", endDate: "today", name: "w" }, { startDate: "28daysAgo", endDate: "today", name: "m" }], dimensions: [{ name: "eventName" }], metrics: [{ name: "eventCount" }], dimensionFilter: eventFilter(["session_start", "whatsapp_click", "phone_call", "generate_lead"]) }))
      : null,
    formspreeConfigured() ? safe(() => formspreeSubmissions(5)) : null,
    apolloConfigured() ? safe(searchTasks) : null,
    llmsStatus(),
  ]);
  // With two date ranges GA4 adds a "dateRange" dimension after the requested ones.
  const g = (ev: string, range: string) => (ga?.ok ? ga.data.rows.filter((r) => r.dims[0] === ev && r.dims[1] === range).reduce((a, r) => a + r.mets[0], 0) : 0);
  const openTasks = tasks?.ok ? tasks.data.filter((t) => t.status !== "completed") : [];
  const due = openTasks.filter((t) => t.due_at && new Date(t.due_at) <= new Date(new Date().setHours(23, 59, 59)));
  const llmsOk = llms.every((l) => l.missing === 0 && (l.ageDays ?? 99) <= 45);
  return (
    <PanelShell active="/panel" title="Özet">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-6">
        <Stat label="Oturum (7 / 28 gün)" value={ga?.ok ? `${g("session_start", "w")} / ${g("session_start", "m")}` : "—"} />
        <Stat label="WhatsApp tıklama (7 / 28 gün)" value={ga?.ok ? `${g("whatsapp_click", "w")} / ${g("whatsapp_click", "m")}` : "—"} />
        <Stat label="Form gönderimi (7 / 28 gün)" value={ga?.ok ? `${g("generate_lead", "w")} / ${g("generate_lead", "m")}` : "—"} />
        <Stat label="Bugün / geciken görev" value={tasks?.ok ? due.length : "—"} hint={tasks?.ok ? `${openTasks.length} açık görev` : undefined} />
      </div>
      {ga && !ga.ok && <ErrorBox message={ga.error} />}
      {!ga && notSet("Google Analytics", "/panel/performans")}
      <div className="grid gap-6 lg:grid-cols-2 mt-6">
        <Card title="Son talepler">
          {!leads ? notSet("Formspree", "/panel/talepler") : leads.ok ? (
            <Table head={["Tarih", "Ad", "Şirket", "Hizmet"]} rows={leads.data.map((s) => [fmtDate(field(s, "_date", "created_at")), field(s, "name", "ad"), field(s, "company", "sirket"), field(s, "services", "service")])} empty="Henüz talep yok." />
          ) : <ErrorBox message={leads.error} />}
          <Link href="/panel/talepler" className="text-sm underline mt-3 inline-block">Tüm talepler</Link>
        </Card>
        <Card title="Bugünkü takipler">
          {!tasks ? notSet("Apollo", "/panel/gorevler") : tasks.ok ? (
            <Table head={["Tarih", "Kişi", "Not"]} rows={due.slice(0, 8).map((t) => [fmtDate(t.due_at), contactName(t.contact), t.note ?? ""])} empty="Bugün takip yok." />
          ) : <ErrorBox message={tasks.error} />}
          <Link href="/panel/gorevler" className="text-sm underline mt-3 inline-block">Tüm görevler</Link>
        </Card>
      </div>
      <Card title="SEO durumu">
        <p className={`text-sm font-semibold ${llmsOk ? "text-green-700" : "text-amber-800"}`}>
          {llmsOk ? "✓" : "⚠"} {sitemapUrls().length} sayfa site haritasında · llms.txt {llms[0]?.updated ?? "okunamadı"}{llms[0] && llms[0].missing >= 0 ? ` (${llms[0].missing} eksik sayfa)` : ""}
        </p>
        <Link href="/panel/seo" className="text-sm underline mt-2 inline-block">SEO sağlığı</Link>
      </Card>
    </PanelShell>
  );
}
