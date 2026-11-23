import PanelShell, { Card, ErrorBox, NotConnected, Table } from "@/components/panel/PanelShell";
import { apolloConfigured, contactName, contactStages, searchContacts } from "@/lib/panel/apollo";
import { fmtDate, safe } from "@/lib/panel/safe";
import { addProspect, changeStage } from "./actions";

export const dynamic = "force-dynamic";

const input = "rounded-xl border border-slate-300 px-3 py-2 text-sm w-full";

export default async function ProspectsPage({ searchParams }: { searchParams: Promise<{ q?: string; m?: string }> }) {
  const { q = "", m } = await searchParams;
  if (!apolloConfigured()) return <PanelShell active="/panel/adaylar" title="Adaylar"><NotConnected what="Apollo" vars={["APOLLO_API_KEY"]} /></PanelShell>;
  const [stages, contacts] = await Promise.all([safe(contactStages), safe(() => searchContacts(q))]);
  const stageList = stages.ok ? stages.data : [];
  const stageName = (id?: string) => stageList.find((s) => s.id === id)?.name ?? "—";
  return (
    <PanelShell active="/panel/adaylar" title="Adaylar (Apollo)">
      {m && (m === "ok" ? <p role="status" className="mb-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm p-3">Kaydedildi.</p> : <ErrorBox message={m} />)}
      <Card title="Yeni aday ekle">
        <form action={addProspect} className="grid gap-3 sm:grid-cols-3">
          <label className="text-sm">Ad<input name="first_name" required className={input} /></label>
          <label className="text-sm">Soyad<input name="last_name" required className={input} /></label>
          <label className="text-sm">Şirket<input name="organization_name" className={input} /></label>
          <label className="text-sm">Unvan<input name="title" className={input} /></label>
          <label className="text-sm">E-posta<input name="email" type="email" className={input} /></label>
          <label className="text-sm">Aşama<select name="stage" className={input}><option value="">—</option>{stageList.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}</select></label>
          <label className="text-sm">İlk takip tarihi<input name="due" type="date" className={input} /></label>
          <label className="text-sm sm:col-span-2">Görev notu<input name="note" placeholder="Örn. LinkedIn bağlantı isteği gönder" className={input} /></label>
          <div className="sm:col-span-3"><button className="bg-[#d62839] hover:bg-[#c1121f] text-white rounded-full px-6 py-2 text-sm font-semibold">Apollo&apos;ya ekle</button></div>
        </form>
        <p className="text-xs text-slate-500 mt-3">Kişi ve (tarih girildiyse) görev doğrudan Apollo&apos;da oluşturulur. E-posta açma gibi kredi harcayan işlemler panelde yoktur.</p>
      </Card>
      <Card title={`Kişiler${contacts.ok ? ` (${contacts.data.total})` : ""}`}>
        <form className="flex gap-3 mb-4" role="search">
          <label htmlFor="q" className="sr-only">Ara</label>
          <input id="q" name="q" defaultValue={q} placeholder="İsim, şirket, unvan…" className={input} />
          <button className="bg-[#0b2545] text-white rounded-full px-5 py-2 text-sm font-semibold">Ara</button>
        </form>
        {contacts.ok ? (
          <Table
            head={["Kişi", "Şirket", "Unvan", "Aşama", "Son aktivite", "Aşama değiştir"]}
            rows={contacts.data.contacts.map((c) => [
              c.linkedin_url ? <a key="n" href={c.linkedin_url} target="_blank" rel="noopener noreferrer" className="underline">{contactName(c)}</a> : contactName(c),
              c.organization_name ?? "",
              c.title ?? "",
              stageName(c.contact_stage_id),
              fmtDate(c.last_activity_date),
              <form key="f" action={changeStage} className="flex gap-2">
                <input type="hidden" name="id" value={c.id} />
                <label className="sr-only" htmlFor={`st-${c.id}`}>Aşama</label>
                <select id={`st-${c.id}`} name="stage" defaultValue={c.contact_stage_id} className="rounded-lg border border-slate-300 px-2 py-1 text-xs">{stageList.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}</select>
                <button className="text-xs underline">Kaydet</button>
              </form>,
            ])}
            empty="Apollo'da kayıtlı kişi yok."
          />
        ) : <ErrorBox message={contacts.error} />}
      </Card>
    </PanelShell>
  );
}
