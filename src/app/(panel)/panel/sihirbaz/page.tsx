import PanelShell, { Card, ErrorBox, NotConnected, Stat, Table } from "@/components/panel/PanelShell";
import CopyButton from "@/components/panel/CopyButton";
import TargetForm from "@/components/panel/TargetForm";
import { kvConfigured } from "@/lib/panel/kv";
import { fmtDate, safe } from "@/lib/panel/safe";
import {
  COLUMNS, PALLET_MONTH_GBP, REGIONS, SEGMENTS, STATUSES, TEMPLATE_GROUPS,
  allocate, buildPrompt, emailTemplate, mixProgress, nextSearch, segmentById, segmentPerformance, targetFrom,
  type Lead, type Status, type Tier,
} from "@/lib/panel/wizard";
import { contactedDomains } from "@/lib/panel/webcontact-store";
import { allDomains, listLeads, listRuns } from "@/lib/panel/wizard-store";
import { changeStatus, importLeads, pushToApollo } from "./actions";

export const dynamic = "force-dynamic";

type SP = Record<string, string | string[] | undefined>;
const input = "pnl-input";
const btn = "pnl-btn";
const redBtn = "pnl-btn-primary";
const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";
const gbp = (n: number) => `£${n.toLocaleString("en-GB")}`;

const TIER_CLASS: Record<Tier, string> = { A: "bg-green-100 text-green-800", B: "bg-amber-100 text-amber-800", C: "bg-slate-100 text-slate-700" };

const link = (href: string, text: string) =>
  /^https?:\/\//i.test(href) ? <a href={href} target="_blank" rel="noopener noreferrer nofollow" className="underline break-all">{text}</a> : null;

function PriorityCell({ l }: { l: Lead }) {
  return (
    <div className="min-w-[6rem]">
      <span className={`inline-block rounded-full px-2 py-0.5 font-bold ${TIER_CLASS[l.tier]}`}>{l.tier} · {l.priority}</span>
      <div className="text-xs text-slate-500 mt-1">uygunluk {l.fit} · hacim {l.value}{l.agent != null ? ` · ajan ${l.agent}` : ""}</div>
      {l.revenue != null && <div className="text-xs text-green-800 mt-1">~{gbp(l.revenue)}/ay depolama</div>}
      {l.flags.map((f) => <div key={f} className="text-xs text-amber-700 mt-1">⚠ {f}</div>)}
    </div>
  );
}

function CompanyCell({ l }: { l: Lead }) {
  const seg = segmentById(l.segment);
  return (
    <div className="min-w-[12rem]">
      <div className="font-semibold">{link(l.website, l.company) ?? l.company}</div>
      <div className="text-xs text-slate-500">{[l.city, l.country].filter(Boolean).join(", ")}{l.employees ? ` · ${l.employees} çalışan` : ""}</div>
      {seg && <div className="text-xs text-[#1c1a3a] mt-1">{seg.label}</div>}
      <div className="text-xs text-slate-500">{[l.sector, l.products].filter(Boolean).join(" — ")}</div>
      <div className="text-xs mt-1 flex gap-2">{link(l.linkedin_url, "LinkedIn")}{link(l.ecommerce_url, "Mağaza")}</div>
    </div>
  );
}

function ContactCell({ l }: { l: Lead }) {
  return (
    <div className="min-w-[11rem] text-xs">
      {l.decision_maker_title && <div className="font-semibold">🎯 {l.decision_maker_title}</div>}
      {l.contact_name && <div>{l.contact_name}{l.contact_title ? `, ${l.contact_title}` : ""}</div>}
      {l.email ? <a href={`mailto:${l.email}`} className="underline break-all">{l.email}</a> : <span className="text-slate-400">e-posta yok</span>}
      {l.email_source_url && <span> {link(l.email_source_url, "(kaynak)")}</span>}
      {l.phone && <div className="mt-1">{l.phone}</div>}
    </div>
  );
}

function ReasonCell({ l }: { l: Lead }) {
  const vol = [l.est_pallets && `${l.est_pallets} palet`, l.containers_per_year && `${l.containers_per_year} konteyner/yıl`, l.monthly_orders && `${l.monthly_orders} sipariş/ay`]
    .filter((x) => x && !/unknown/i.test(x))
    .join(" · ");
  return (
    <div className="min-w-[16rem] text-xs">
      <p>{l.reason}</p>
      {vol && <p className="mt-1 text-slate-700">📦 {vol} {link(l.volume_evidence_url, "↗")}</p>}
      {l.uk_evidence && <p className="mt-1 text-slate-600">🇬🇧 {l.uk_evidence} {link(l.uk_evidence_url, "↗")}</p>}
      <p className="mt-1 text-slate-400">{fmtDate(l.added_at)}</p>
    </div>
  );
}

export default async function WizardPage({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams;
  const t = targetFrom((k) => sp[k]);
  const go = one(sp.go) === "1";
  const m = one(sp.m);
  const db = kvConfigured();

  const [leadsR, runsR, domainsR, contactedR] = db ? await Promise.all([safe(() => listLeads()), safe(listRuns), go ? safe(allDomains) : Promise.resolve(null), safe(contactedDomains)]) : [null, null, null, null];
  const leads = (leadsR?.ok ? leadsR.data : []).sort((a, b) => b.priority - a.priority);
  // One history per company: anything WebContact / E-posta already touched is not a first-contact candidate.
  const contacted = new Set(contactedR?.ok ? contactedR.data : []);
  const prompt = go ? buildPrompt(t, [...new Set([...(domainsR?.ok ? domainsR.data : []), ...contacted])]) : "";
  const alloc = go ? allocate(t.segments.length ? t.segments : ["tr_exporter"], t.count) : {};

  const active = leads.filter((l) => l.status !== "elendi");
  const pipeline = active.filter((l) => l.tier !== "C").reduce((a, l) => a + (l.revenue ?? 0), 0);
  const top = active.filter((l) => l.status === "yeni" && l.tier !== "C" && !contacted.has(l.domain)).slice(0, 10);
  const mix = mixProgress(leads);
  const next = nextSearch(leads);
  const perf = segmentPerformance(leads);

  // Filters for the list
  const fs = one(sp.fs) as Status | "";
  const ft = one(sp.ft) as Tier | "";
  const fg = one(sp.fg);
  const fq = one(sp.fq).toLowerCase();
  const shown = leads
    .filter((l) => (!fs || l.status === fs) && (!ft || l.tier === ft) && (!fg || l.segment === fg))
    .filter((l) => !fq || [l.company, l.domain, l.sector, l.country, l.products, l.reason, l.decision_maker_title].join(" ").toLowerCase().includes(fq));

  const hidden = (
    <>
      <input type="hidden" name="region" value={t.region} />
      <input type="hidden" name="size" value={t.size} />
      {t.segments.map((s) => <input key={s} type="hidden" name="s" value={s} />)}
      {t.countries.map((c) => <input key={c} type="hidden" name="c" value={c} />)}
    </>
  );

  return (
    <PanelShell active="/panel/sihirbaz" title="Müşteri bulma sihirbazı">
      {m && (m.startsWith("ok:") ? <p role="status" className="mb-4 rounded-2xl bg-[var(--pnl-success-soft)] border border-[#b2f2bb] text-[#1b6b3a] text-sm p-3">{m.slice(3)}</p> : <ErrorBox message={m} />)}

      {db && leadsR?.ok && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Stat label="A öncelikli aday" value={active.filter((l) => l.tier === "A").length} hint={`B: ${active.filter((l) => l.tier === "B").length} · toplam ${leads.length}`} />
          <Stat label="A+B depolama potansiyeli" value={`${gbp(pipeline)}/ay`} hint="Yalnız palet depolama, KDV hariç, tahmini" />
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

      {db && leadsR?.ok && top.length > 0 && (
        <Card title="Bugün ilk temas: en değerli 10">
          <Table
            head={["Öncelik", "Şirket", "Kime yazılacak", "Satış açısı"]}
            rows={top.map((l) => [<PriorityCell key="p" l={l} />, <CompanyCell key="c" l={l} />, <ContactCell key="k" l={l} />, <p key="a" className="text-xs min-w-[14rem]">{segmentById(l.segment)?.angle ?? l.reason}</p>])}
          />
          <form action={pushToApollo} className="mt-4">
            {top.map((l) => <input key={l.domain} type="hidden" name="d" value={l.domain} />)}
            <button className={redBtn}>Bu {top.length} şirketi Apollo&apos;ya aktar</button>
          </form>
        </Card>
      )}

      {db && leadsR?.ok && (
        <Card title="İlk 100 aday: önerilen dağılım">
          <div className="grid gap-2">
            {mix.map((r) => (
              <div key={r.group} className="grid grid-cols-[9rem_1fr_4rem] items-center gap-3 text-sm">
                <span>{r.label}</span>
                <span className="h-3 rounded-full bg-[#efedfa] overflow-hidden" aria-hidden="true"><span className="block h-full rounded-full bg-[image:var(--pnl-grad)]" style={{ width: `${Math.min(100, (r.have / r.target) * 100)}%` }} /></span>
                <span className="text-right tabular-nums">{r.have}/{r.target}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">Önerilen dağılım iş analizine göre tahmindir. Hem düzenli depo sözleşmesi hem sipariş başına operasyon geliri getirecek gruplara ağırlık verir.</p>
          {next && <a href={next.href} className={`${btn} inline-block mt-3 max-w-full !whitespace-normal`}>Sıradaki önerilen arama: {next.label}</a>}
        </Card>
      )}

      <Card title="1. Hedefi seç">
        <TargetForm t={t} hidden={<input type="hidden" name="go" value="1" />} />
      </Card>

      {go && (
        <Card title="2. Görev metnini ajana ver">
          <p className="text-sm mb-3">
            Dağılım: {Object.entries(alloc).map(([id, n], i) => <span key={id}>{i > 0 && " · "}{segmentById(id)?.label} <strong>{n}</strong></span>)}
          </p>
          <ol className="list-decimal pl-5 text-sm text-slate-700 mb-4 space-y-1">
            <li>Aşağıdaki metni <strong>Kopyala</strong> ile kopyalayın.</li>
            <li>ChatGPT&apos;de yeni sohbet açın, araçlardan <strong>Agent</strong> modunu seçin, metni yapıştırıp gönderin.</li>
            <li>Ajan bitirince verdiği CSV&apos;nin tamamını (başlık satırı dahil) kopyalayıp 3. adıma yapıştırın.</li>
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
                <select name="region" defaultValue={t.region} className={input}>{Object.entries(REGIONS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select>
              </label>
            )}
            <label className="text-sm">Ajanın verdiği CSV (veya JSON)
              <textarea name="data" required rows={8} className={`${input} font-mono text-xs`} placeholder={COLUMNS.join(",")} />
            </label>
            <p className="text-xs text-slate-500">
              Panel öncelik puanını kendisi hesaplar: %45 uygunluk + %35 hacim değeri + %20 segment önceliği. A: 75+, B: 60–74, C: 60 altı. Depolama potansiyeli, palet tahmininin alt sınırı × {gbp(Math.round(PALLET_MONTH_GBP * 100) / 100)}/ay ile hesaplanır. Listede zaten olan şirketler atlanır.
            </p>
            <div><button className={redBtn}>İçeri al</button></div>
          </form>
        ) : <p className="text-sm text-slate-500">Sonuçları kaydetmek için önce veritabanını bağlayın (yukarıdaki uyarı).</p>}
      </Card>

      <Card title={`4. Aday şirketler${db && leadsR?.ok ? ` (${shown.length})` : ""}`}>
        <div id="liste" />
        {!db ? <p className="text-sm text-slate-500">Veritabanı bağlı değil.</p> : !leadsR?.ok ? <ErrorBox message={leadsR?.error ?? "?"} /> : (
          <>
            <form method="get" className="grid sm:grid-cols-5 gap-3 mb-4 items-end" role="search">
              <label className="text-sm sm:col-span-2">Ara<input name="fq" defaultValue={fq} placeholder="Şirket, ürün, ülke, karar verici…" className={input} /></label>
              <label className="text-sm">Öncelik<select name="ft" defaultValue={ft} className={input}><option value="">Tümü</option><option value="A">A</option><option value="B">B</option><option value="C">C</option></select></label>
              <label className="text-sm">Durum<select name="fs" defaultValue={fs} className={input}><option value="">Tümü</option>{Object.entries(STATUSES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></label>
              <label className="text-sm">Segment<select name="fg" defaultValue={fg} className={input}><option value="">Tümü</option>{SEGMENTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}</select></label>
              <div className="sm:col-span-5 flex flex-wrap gap-3">
                <button className={btn}>Filtrele</button>
                <a href="/api/panel/sihirbaz/csv" className="pnl-btn-ghost">Tümünü CSV indir</a>
              </div>
            </form>

            <form id="bulk" action={pushToApollo} className="mb-3 flex flex-wrap items-center gap-3">
              <button className={redBtn}>Seçilenleri Apollo&apos;ya aktar</button>
              <span className="text-xs text-slate-500">Apollo&apos;da kişi açılır, etiketlenir ve ilk e-posta görevi önceliğe göre tarihlenir: A ertesi iş günü, B 3 iş günü, C 7 iş günü. En fazla 25; kredi harcamaz.</span>
            </form>

            <Table
              head={["Seç", "Öncelik", "Şirket", "Kime yazılacak", "Neden / hacim / İngiltere kanıtı", "Durum"]}
              rows={shown.slice(0, 300).map((l: Lead) => [
                l.apollo_contact_id ? <span key="a" title="Apollo'da">✓</span> : <input key="c" type="checkbox" name="d" value={l.domain} form="bulk" aria-label={`${l.company} seç`} />,
                <PriorityCell key="p" l={l} />,
                <CompanyCell key="co" l={l} />,
                <ContactCell key="e" l={l} />,
                <ReasonCell key="r" l={l} />,
                <form key="st" action={changeStatus} className="flex gap-2 items-center">
                  <input type="hidden" name="d" value={l.domain} />
                  <label className="sr-only" htmlFor={`st-${l.domain}`}>Durum</label>
                  <select id={`st-${l.domain}`} name="status" defaultValue={l.status} className="pnl-select-sm">{Object.entries(STATUSES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select>
                  <button className="text-xs underline">Kaydet</button>
                </form>,
              ])}
              empty="Henüz aday yok. 1–3. adımlarla ilk listeyi oluşturun."
            />
            {shown.length > 300 && <p className="text-xs text-slate-500 mt-2">İlk 300 gösteriliyor; filtreleyin veya CSV indirin.</p>}
          </>
        )}
      </Card>

      {db && perf.length > 0 && (
        <Card title="Segment performansı">
          <Table
            head={["Segment", "Aday", "A", "Temas", "Olumlu", "Olumlu %", "A+B depolama potansiyeli"]}
            rows={perf.map((r) => [r.seg.label, r.total, r.a, r.contacted, r.positive, r.rate == null ? "—" : `%${r.rate}`, r.revenue ? `${gbp(r.revenue)}/ay` : "—"])}
          />
          <p className="text-xs text-slate-500 mt-2">Olumlu oranı yüksek olan segmentlere daha çok arama ayırın. Durumları güncel tuttukça bu tablo, hangi segmentin gerçekten satışa döndüğünü gösterir.</p>
        </Card>
      )}

      <Card title="İlk e-posta şablonları (segmente göre)">
        <p className="text-sm text-slate-600 mb-3">Apollo&apos;dan veya kendi e-postanızdan gönderin. Köşeli parantezleri doldurun. Her e-postada çıkma satırı kalsın.</p>
        {TEMPLATE_GROUPS.map(({ group, label }) => (
          <details key={group} className="border-t border-[var(--pnl-line)] py-2">
            <summary className="cursor-pointer font-semibold text-sm text-[#1c1a3a]">{label}</summary>
            <div className="grid lg:grid-cols-2 gap-4 mt-3">
              {(["tr", "en"] as const).map((lang) => (
                <div key={lang}>
                  <h3 className="font-semibold text-sm mb-1">{lang === "tr" ? "Türkçe" : "English"}</h3>
                  <textarea id={`tpl-${group}-${lang}`} readOnly rows={12} className={`${input} text-xs`} value={emailTemplate(group, lang)} />
                  <div className="mt-2"><CopyButton target={`tpl-${group}-${lang}`} /></div>
                </div>
              ))}
            </div>
          </details>
        ))}
      </Card>

      {db && runsR?.ok && runsR.data.length > 0 && (
        <Card title="Son içe aktarmalar">
          <Table
            head={["Tarih", "Bölge", "Segmentler", "Eklenen", "Tekrar", "Okunamayan"]}
            rows={runsR.data.map((r) => [fmtDate(r.at), REGIONS[r.region] ?? r.region, r.sectors.map((s) => segmentById(s)?.label ?? s).join(", ") || "—", r.added, r.duplicates, r.errors])}
          />
        </Card>
      )}
    </PanelShell>
  );
}
