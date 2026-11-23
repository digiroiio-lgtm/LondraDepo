import PanelShell, { Card, ErrorBox, NotConnected, Stat, Table } from "@/components/panel/PanelShell";
import CopyButton from "@/components/panel/CopyButton";
import { kvConfigured } from "@/lib/panel/kv";
import { fmtDate, safe } from "@/lib/panel/safe";
import { COLUMNS, COUNTRIES, SECTORS, SIZES, STATUSES, buildPrompt, targetFrom, type Lead, type Status } from "@/lib/panel/wizard";
import { allDomains, listLeads, listRuns } from "@/lib/panel/wizard-store";
import { changeStatus, importLeads, pushToApollo } from "./actions";

export const dynamic = "force-dynamic";

type SP = Record<string, string | string[] | undefined>;
const input = "rounded-xl border border-slate-300 px-3 py-2 text-sm w-full";
const btn = "bg-[#0b2545] text-white rounded-full px-5 py-2 text-sm font-semibold";
const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

function scoreClass(s: number) {
  return s >= 70 ? "bg-green-100 text-green-800" : s >= 50 ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-700";
}

const link = (href: string, text: string) =>
  /^https?:\/\//i.test(href) ? <a href={href} target="_blank" rel="noopener noreferrer nofollow" className="underline break-all">{text}</a> : null;

export default async function WizardPage({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams;
  const t = targetFrom((k) => sp[k]);
  const go = one(sp.go) === "1";
  const m = one(sp.m);
  const db = kvConfigured();

  const [leadsR, runsR, domainsR] = db ? await Promise.all([safe(() => listLeads()), safe(listRuns), go ? safe(allDomains) : Promise.resolve(null)]) : [null, null, null];
  const leads = leadsR?.ok ? leadsR.data : [];
  const prompt = go ? buildPrompt(t, domainsR?.ok ? domainsR.data : []) : "";

  // Filters for the list
  const fs = one(sp.fs) as Status | "";
  const fmin = Number(one(sp.fmin)) || 0;
  const fq = one(sp.fq).toLowerCase();
  const fr = one(sp.fr);
  const shown = leads
    .filter((l) => (!fs || l.status === fs) && l.score >= fmin && (!fr || l.region === fr))
    .filter((l) => !fq || [l.company, l.domain, l.sector, l.country, l.products, l.reason].join(" ").toLowerCase().includes(fq))
    .sort((a, b) => b.score - a.score);

  const hidden = (
    <>
      <input type="hidden" name="region" value={t.region} />
      <input type="hidden" name="size" value={t.size} />
      {t.sectors.map((s) => <input key={s} type="hidden" name="s" value={s} />)}
      {t.countries.map((c) => <input key={c} type="hidden" name="c" value={c} />)}
    </>
  );

  return (
    <PanelShell active="/panel/sihirbaz" title="Müşteri bulma sihirbazı">
      {m && (m.startsWith("ok:") ? <p role="status" className="mb-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm p-3">{m.slice(3)}</p> : <ErrorBox message={m} />)}

      {db && leadsR?.ok && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Stat label="Toplam aday şirket" value={leads.length} />
          <Stat label="Skor 70 ve üzeri" value={leads.filter((l) => l.score >= 70).length} />
          <Stat label="Apollo'ya aktarılan" value={leads.filter((l) => l.apollo_contact_id).length} />
          <Stat label="Olumlu dönüş" value={leads.filter((l) => l.status === "olumlu").length} />
        </div>
      )}
      {!db && (
        <div className="mb-6">
          <NotConnected what="Sihirbaz veritabanı (Upstash Redis)" vars={["KV_REST_API_URL", "KV_REST_API_TOKEN"]} />
          <p className="text-xs text-slate-500 mt-2">Görev metni üretimi veritabanı olmadan da çalışır; sonuçları kaydetmek için veritabanı gerekir.</p>
        </div>
      )}

      <Card title="1. Hedefi seç">
        <form method="get" className="grid gap-4">
          <input type="hidden" name="go" value="1" />
          <fieldset>
            <legend className="text-sm font-semibold mb-2">Bölge</legend>
            <div className="flex flex-wrap gap-4 text-sm">
              <label className="flex items-center gap-2"><input type="radio" name="region" value="tr" defaultChecked={t.region === "tr"} /> Türkiye → İngiltere (öncelikli)</label>
              <label className="flex items-center gap-2"><input type="radio" name="region" value="global" defaultChecked={t.region === "global"} /> Diğer ülkeler → İngiltere</label>
            </div>
          </fieldset>
          <fieldset>
            <legend className="text-sm font-semibold mb-2">Sektör (birden fazla seçilebilir)</legend>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
              {SECTORS.map((s) => (
                <label key={s.id} className="flex items-start gap-2"><input type="checkbox" name="s" value={s.id} defaultChecked={t.sectors.includes(s.id)} className="mt-1" /> {s.label}</label>
              ))}
            </div>
            <label className="text-sm block mt-3">Başka sektör (serbest metin)<input name="other" defaultValue={t.other} placeholder="Örn. bahçe mobilyası, oyuncak" className={input} /></label>
          </fieldset>
          <fieldset>
            <legend className="text-sm font-semibold mb-2">Ülkeler (yalnız &quot;Diğer ülkeler&quot; için)</legend>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {COUNTRIES.map((c) => (
                <label key={c} className="flex items-center gap-2"><input type="checkbox" name="c" value={c} defaultChecked={t.countries.includes(c)} /> {c}</label>
              ))}
            </div>
            <label className="text-sm block mt-3">Başka ülke (virgülle)<input name="cx" defaultValue={t.countries.filter((c) => !(COUNTRIES as readonly string[]).includes(c)).join(", ")} className={input} /></label>
          </fieldset>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="text-sm">Şirket büyüklüğü
              <select name="size" defaultValue={t.size} className={input}>{Object.entries(SIZES).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}</select>
            </label>
            <label className="text-sm">Kaç şirket
              <select name="n" defaultValue={String(t.count)} className={input}>{[25, 50, 100].map((n) => <option key={n} value={n}>{n}</option>)}</select>
            </label>
          </div>
          <label className="text-sm">Hariç tutulacak alan adları (mevcut müşteriler; boşluk veya virgülle)
            <textarea name="ex" defaultValue={t.exclude.join(", ")} rows={2} className={input} placeholder="ornekfirma.com, digerfirma.com.tr" />
            <span className="text-xs text-slate-500">Listede zaten olan şirketler otomatik olarak hariç tutulur.</span>
          </label>
          <div><button className={btn}>Görev metnini oluştur</button></div>
        </form>
      </Card>

      {go && (
        <Card title="2. Görev metnini ajana ver">
          <ol className="list-decimal pl-5 text-sm text-slate-700 mb-4 space-y-1">
            <li>Aşağıdaki metni <strong>Kopyala</strong> ile kopyalayın.</li>
            <li>ChatGPT&apos;de yeni sohbet açın, araçlardan <strong>Agent</strong> modunu seçin ve metni yapıştırıp gönderin.</li>
            <li>Ajan bitirince verdiği CSV&apos;nin tamamını (başlık satırı dahil) kopyalayın ve 3. adıma yapıştırın.</li>
          </ol>
          <label htmlFor="prompt" className="sr-only">Görev metni</label>
          <textarea id="prompt" readOnly value={prompt} rows={16} className={`${input} font-mono text-xs`} />
          <div className="mt-3"><CopyButton target="prompt" label="Görev metnini kopyala" /></div>
        </Card>
      )}

      <Card title="3. Sonucu içeri al">
        {db ? (
          <form action={importLeads} className="grid gap-3">
            {go && hidden}
            {!go && (
              <label className="text-sm">Bu sonuç hangi bölge için?
                <select name="region" defaultValue={t.region} className={input}><option value="tr">Türkiye → İngiltere</option><option value="global">Diğer ülkeler</option></select>
              </label>
            )}
            <label className="text-sm">Ajanın verdiği CSV (veya JSON)
              <textarea name="data" required rows={8} className={`${input} font-mono text-xs`} placeholder={COLUMNS.join(",")} />
            </label>
            <p className="text-xs text-slate-500">
              Panel skoru kendi kurallarıyla yeniden hesaplar. Listede zaten olan şirketleri atlar. Kaynağı olmayan e-postaları işaretler.
            </p>
            <div><button className={btn}>İçeri al</button></div>
          </form>
        ) : <p className="text-sm text-slate-500">Sonuçları kaydetmek için önce veritabanını bağlayın (yukarıdaki uyarı).</p>}
      </Card>

      <Card title={`4. Aday şirketler${db && leadsR?.ok ? ` (${shown.length})` : ""}`} className="scroll-mt-4">
        <div id="liste" />
        {!db ? <p className="text-sm text-slate-500">Veritabanı bağlı değil.</p> : !leadsR?.ok ? <ErrorBox message={leadsR?.error ?? "?"} /> : (
          <>
            <form method="get" className="grid sm:grid-cols-5 gap-3 mb-4 items-end" role="search">
              <label className="text-sm sm:col-span-2">Ara<input name="fq" defaultValue={fq} placeholder="Şirket, sektör, ülke, ürün…" className={input} /></label>
              <label className="text-sm">Durum<select name="fs" defaultValue={fs} className={input}><option value="">Tümü</option>{Object.entries(STATUSES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></label>
              <label className="text-sm">En düşük skor<select name="fmin" defaultValue={String(fmin)} className={input}>{[0, 50, 60, 70, 80].map((n) => <option key={n} value={n}>{n}</option>)}</select></label>
              <label className="text-sm">Bölge<select name="fr" defaultValue={fr} className={input}><option value="">Tümü</option><option value="tr">Türkiye</option><option value="global">Diğer</option></select></label>
              <div className="sm:col-span-5 flex flex-wrap gap-3">
                <button className={btn}>Filtrele</button>
                <a href="/api/panel/sihirbaz/csv" className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold">Tümünü CSV indir</a>
              </div>
            </form>

            <form id="bulk" action={pushToApollo} className="mb-3 flex flex-wrap items-center gap-3">
              <button className="bg-[#d62839] hover:bg-[#c1121f] text-white rounded-full px-5 py-2 text-sm font-semibold">Seçilenleri Apollo&apos;ya aktar</button>
              <span className="text-xs text-slate-500">Her biri için Apollo&apos;da kişi ve ertesi iş günü için &quot;ilk e-posta&quot; görevi açılır (en fazla 25; kredi harcamaz).</span>
            </form>

            <Table
              head={["Seç", "Skor", "Şirket", "E-posta", "Neden / İngiltere kanıtı", "Durum"]}
              rows={shown.slice(0, 300).map((l: Lead) => [
                l.apollo_contact_id ? <span key="a" title="Apollo'da">✓</span> : <input key="c" type="checkbox" name="d" value={l.domain} form="bulk" aria-label={`${l.company} seç`} />,
                <div key="s" className="min-w-[5rem]">
                  <span className={`inline-block rounded-full px-2 py-0.5 font-bold ${scoreClass(l.score)}`}>{l.score}</span>
                  {l.agent != null && <div className="text-xs text-slate-500 mt-1">ajan: {l.agent}</div>}
                  {l.flags.map((f) => <div key={f} className="text-xs text-amber-700 mt-1">⚠ {f}</div>)}
                </div>,
                <div key="co" className="min-w-[12rem]">
                  <div className="font-semibold">{link(l.website, l.company) ?? l.company}</div>
                  <div className="text-xs text-slate-500">{[l.city, l.country].filter(Boolean).join(", ")}{l.employees ? ` · ${l.employees} çalışan` : ""}</div>
                  <div className="text-xs text-slate-500">{[l.sector, l.products].filter(Boolean).join(" — ")}</div>
                  {l.contact_name && <div className="text-xs mt-1">{l.contact_name}{l.contact_title ? `, ${l.contact_title}` : ""}</div>}
                  <div className="text-xs mt-1 flex gap-2">{link(l.linkedin_url, "LinkedIn")}{link(l.ecommerce_url, "Mağaza")}</div>
                </div>,
                <div key="e" className="min-w-[10rem] text-xs">
                  {l.email ? <a href={`mailto:${l.email}`} className="underline break-all">{l.email}</a> : <span className="text-slate-400">—</span>}
                  {l.email_source_url && <div className="mt-1">{link(l.email_source_url, "kaynak")}</div>}
                  {l.phone && <div className="mt-1">{l.phone}</div>}
                </div>,
                <div key="r" className="min-w-[16rem] text-xs">
                  <p>{l.reason}</p>
                  {l.uk_evidence && <p className="mt-1 text-slate-600">🇬🇧 {l.uk_evidence} {link(l.uk_evidence_url, "↗")}</p>}
                  <p className="mt-1 text-slate-400">{fmtDate(l.added_at)}</p>
                </div>,
                <form key="st" action={changeStatus} className="flex gap-2 items-center">
                  <input type="hidden" name="d" value={l.domain} />
                  <label className="sr-only" htmlFor={`st-${l.domain}`}>Durum</label>
                  <select id={`st-${l.domain}`} name="status" defaultValue={l.status} className="rounded-lg border border-slate-300 px-2 py-1 text-xs">{Object.entries(STATUSES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select>
                  <button className="text-xs underline">Kaydet</button>
                </form>,
              ])}
              empty="Henüz aday yok. 1–3. adımlarla ilk listeyi oluşturun."
            />
            {shown.length > 300 && <p className="text-xs text-slate-500 mt-2">İlk 300 gösteriliyor; filtreleyin veya CSV indirin.</p>}
          </>
        )}
      </Card>

      <Card title="İlk e-posta şablonu">
        <p className="text-sm text-slate-600 mb-3">Apollo&apos;dan veya kendi e-postanızdan gönderin. Köşeli parantezleri doldurun. Her e-postada çıkma satırı kalsın.</p>
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-sm mb-1">Türkçe</h3>
            <textarea id="tpl-tr" readOnly rows={12} className={`${input} text-xs`} value={`Konu: İngiltere'de stok ve sevkiyat: Essex'teki depomuz

Merhaba [İsim / ekip],

[Şirket]'in İngiltere'ye [ürün] sattığını gördük. LondraDepo olarak Essex, Rayleigh'deki depomuzda (London Gateway limanına ~13 mil) Türk ve uluslararası markaların İngiltere stoğunu tutuyor, konteyner boşaltıyor, Amazon ve e-ticaret siparişlerini ve mağaza/toptancı sevkiyatlarını yönetiyoruz.

Palet depolama haftalık £3.50 + KDV'den başlar; asgari hacim yok, tek paletle deneyebilirsiniz. Nakliye ve gümrüklemeyi de Arca Trade Group üzerinden tek elden sağlıyoruz.

Uygunsa 15 dakikalık bir görüşmede mevcut İngiltere sevkiyatınızı konuşabiliriz: https://www.londradepo.com/teklif-al

Saygılarımızla,
[Ad Soyad] · LondraDepo · +44 7554 195190

Bu tür e-postalar almak istemiyorsanız "çıkar" yazmanız yeterli; tekrar yazmayız.`} />
            <div className="mt-2"><CopyButton target="tpl-tr" /></div>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-1">English</h3>
            <textarea id="tpl-en" readOnly rows={12} className={`${input} text-xs`} value={`Subject: UK stock and fulfilment from our Essex warehouse

Hi [Name / team],

I noticed [Company] sells [product] into the UK. LondraDepo runs a warehouse in Rayleigh, Essex (about 13 miles from London Gateway) where we hold UK stock for international brands, unload containers, and handle Amazon, ecommerce and store/wholesale deliveries.

Pallet storage starts from £3.50 + VAT per week, with no fixed minimum, so you can start with a single trial pallet. Freight and UK customs clearance are available through Arca Trade Group.

Would a 15-minute call to look at your current UK flow be useful? https://www.londradepo.com/en/request-a-quote

Best regards,
[Name] · LondraDepo · +44 7554 195190

If you'd rather not hear from us, just reply "remove" and we won't email again.`} />
            <div className="mt-2"><CopyButton target="tpl-en" /></div>
          </div>
        </div>
      </Card>

      {db && runsR?.ok && runsR.data.length > 0 && (
        <Card title="Son içe aktarmalar">
          <Table
            head={["Tarih", "Bölge", "Sektörler", "Eklenen", "Tekrar", "Okunamayan"]}
            rows={runsR.data.map((r) => [fmtDate(r.at), r.region === "tr" ? "Türkiye" : `Diğer${r.countries.length ? ` (${r.countries.join(", ")})` : ""}`, r.sectors.map((s) => SECTORS.find((x) => x.id === s)?.label ?? s).join(", ") || "—", r.added, r.duplicates, r.errors])}
          />
        </Card>
      )}
    </PanelShell>
  );
}
