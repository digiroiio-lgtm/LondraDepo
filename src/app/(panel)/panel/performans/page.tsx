import PanelShell, { Card, DataSource, ErrorBox, NotConnected, Stat, Table } from "@/components/panel/PanelShell";
import { analyticsSource } from "@/lib/panel/analytics-snapshot";
import { eventFilter, ga4Report, type Ga4Result } from "@/lib/panel/ga4";
import { daysAgo, gscQuery } from "@/lib/panel/gsc";
import { safe } from "@/lib/panel/safe";

export const dynamic = "force-dynamic";

const FUNNEL_EVENTS = ["form_view", "form_start", "form_field_complete", "form_submit_attempt", "form_error", "generate_lead", "form_abandon", "cta_view", "whatsapp_click", "phone_call", "booking_click", "scroll_depth", "rage_click", "web_vitals", "consent_choice"];
const rate = (a: number, b: number) => (b ? `%${Math.round((a / b) * 100)}` : "—");
const R28 = [{ startDate: "28daysAgo", endDate: "today" }];
const DIM_NOTE = "GA4'te özel boyutlar (click_source, cta_type, field_name, last_field, metric_name, metric_rating) tanımlanınca burada görünür. Adımlar: docs/panel-setup.md → \"GA4 özel boyutlar\".";

/** Conversion funnel from the site's own events (form steps, WhatsApp view → click, UX signals). */
function Funnel({ ev, wa, fields, vitals }: { ev: Ga4Result | null; wa: { ok: true; data: Ga4Result } | { ok: false; error: string }; fields: { ok: true; data: Ga4Result } | { ok: false; error: string }; vitals: { ok: true; data: Ga4Result } | { ok: false; error: string } }) {
  const count = (n: string) => ev?.rows.find((r) => r.dims[0] === n)?.mets[0] ?? 0;
  const users = (n: string) => ev?.rows.find((r) => r.dims[0] === n)?.mets[1] ?? 0;
  const steps: [string, string][] = [["form_view", "Formu gördü"], ["form_start", "Doldurmaya başladı"], ["form_submit_attempt", "Gönder'e bastı"], ["generate_lead", "Talep gönderildi"]];
  const waRows = wa.ok ? wa.data.rows : [];
  const bySource = new Map<string, { view: number; click: number }>();
  for (const r of waRows) {
    const [name, source, type] = r.dims;
    const x = bySource.get(source) ?? { view: 0, click: 0 };
    if (name === "cta_view" && type === "whatsapp") x.view += r.mets[0];
    if (name === "whatsapp_click") x.click += r.mets[0];
    bySource.set(source, x);
  }
  const waTotal = [...bySource.values()].reduce((a, x) => ({ view: a.view + x.view, click: a.click + x.click }), { view: 0, click: 0 });
  const abandonFields = fields.ok ? fields.data.rows.filter((r) => r.dims[0] === "form_abandon").sort((a, b) => b.mets[0] - a.mets[0]).slice(0, 5) : [];
  const vit = vitals.ok ? vitals.data.rows : [];
  return (
    <Card title="Dönüşüm hunisi (son 28 gün, kullanıcı)">
      <h3 className="font-semibold mb-2">Form</h3>
      <ol className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-2">
        {steps.map(([k, l], i) => (
          <li key={k} className="rounded-2xl bg-[var(--pnl-main)] px-3 py-2.5">
            <div className="text-xs text-[var(--pnl-muted)]">{i ? "→ " : ""}{l}</div>
            <div className="text-2xl font-semibold">{users(k)}</div>
            {i > 0 && <div className="text-xs text-[var(--pnl-muted)]">önceki adımdan {rate(users(k), users(steps[i - 1][0]))}</div>}
          </li>
        ))}
      </ol>
      <p className="text-xs text-[var(--pnl-muted)] mb-4">Form görüntüleyenlerin talebe dönüşme oranı: <strong>{rate(users("generate_lead"), users("form_view"))}</strong> · Doğrulama/gönderim hatası: {count("form_error")} · Yarıda bırakılan: {count("form_abandon")}</p>
      {abandonFields.length > 0 ? (
        <div className="mb-6 min-w-0"><h4 className="text-sm font-semibold mb-1">Formu en çok nerede bırakıyorlar (son doldurulan alan)</h4><Table head={["Alan", "Yarıda bırakma"]} rows={abandonFields.map((r) => [r.dims[1], r.mets[0]])} /></div>
      ) : !fields.ok ? <p className="text-xs text-amber-800 mb-6">{DIM_NOTE}</p> : null}

      <h3 className="font-semibold mb-2">WhatsApp</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
        <Stat label="WhatsApp butonu görüldü" value={waTotal.view || count("cta_view")} />
        <Stat label="WhatsApp tıklaması" value={count("whatsapp_click")} hint={`kullanıcı: ${users("whatsapp_click")}`} />
        <Stat label="Tıklama oranı" value={rate(waTotal.click, waTotal.view)} hint="tıklama ÷ görülme" />
        <Stat label="Telefon / görüşme" value={`${count("phone_call")} / ${count("booking_click")}`} />
      </div>
      {wa.ok ? (
        <div className="min-w-0 mb-6"><Table head={["Konum", "Görülme", "Tıklama", "Oran"]} rows={[...bySource].filter(([, x]) => x.view || x.click).sort((a, b) => b[1].click - a[1].click).map(([src, x]) => [src || "—", x.view, x.click, rate(x.click, x.view)])} empty="Henüz veri yok." /></div>
      ) : <p className="text-xs text-amber-800 mb-6">{DIM_NOTE}</p>}

      <h3 className="font-semibold mb-2">Kullanıcı deneyimi</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Stat label="Sayfada kaydıran" value={count("scroll_depth") ? `${users("scroll_depth")} kişi` : "—"} hint="%25 ve üzeri kaydırma" />
        <Stat label="Öfke tıklaması" value={count("rage_click")} hint="aynı yere 3+ hızlı tık" />
        <Stat label="Yavaş ölçüm (poor)" value={vitals.ok ? vit.filter((r) => r.dims[1] === "poor").reduce((a, r) => a + r.mets[0], 0) : "—"} hint={vitals.ok ? vit.filter((r) => r.dims[1] === "poor").map((r) => `${r.dims[0]} ${r.mets[0]}`).join(" · ") || "yok" : "boyut tanımlı değil"} />
        <Stat label="Çerez kabul" value={count("consent_choice") ? `${users("consent_choice")} seçim` : "—"} hint="consent_choice" />
      </div>
    </Card>
  );
}

const pct = (a: number, b: number) => (b ? `${a >= b ? "+" : ""}${Math.round(((a - b) / b) * 100)}%` : "—");

export default async function PerformancePage() {
  const src = await analyticsSource();
  if (!src.mode) return <PanelShell active="/panel/performans" title="Performans"><NotConnected what="Google Analytics ve Search Console" vars={["GOOGLE_SERVICE_ACCOUNT_JSON", "GA4_PROPERTY_ID", "GSC_SITE"]} /></PanelShell>;
  const cur = [daysAgo(30), daysAgo(3)] as const;
  const prev = [daysAgo(58), daysAgo(31)] as const;
  const [gaTotals, channels, landing, gscCur, gscPrev, queries, pages] = await Promise.all([
    safe(() => ga4Report({ dateRanges: [{ startDate: "28daysAgo", endDate: "today" }], metrics: [{ name: "sessions" }, { name: "totalUsers" }, { name: "engagedSessions" }, { name: "keyEvents" }] }, "perf_totals")),
    safe(() => ga4Report({ dateRanges: [{ startDate: "28daysAgo", endDate: "today" }], dimensions: [{ name: "sessionDefaultChannelGroup" }], metrics: [{ name: "sessions" }], orderBys: [{ metric: { metricName: "sessions" }, desc: true }] }, "perf_channels")),
    safe(() => ga4Report({ dateRanges: [{ startDate: "28daysAgo", endDate: "today" }], dimensions: [{ name: "landingPage" }], metrics: [{ name: "sessions" }, { name: "keyEvents" }], orderBys: [{ metric: { metricName: "sessions" }, desc: true }], limit: 15 }, "perf_landing")),
    safe(() => gscQuery(cur[0], cur[1], ["date"], 100, "gsc_cur_date")),
    safe(() => gscQuery(prev[0], prev[1], ["date"], 100, "gsc_prev_date")),
    safe(() => gscQuery(cur[0], cur[1], ["query"], 25, "gsc_cur_query")),
    safe(() => gscQuery(cur[0], cur[1], ["page"], 25, "gsc_cur_page")),
  ]);
  const [funnelEv, funnelWa, funnelFields, funnelVitals] = await Promise.all([
    safe(() => ga4Report({ dateRanges: R28, dimensions: [{ name: "eventName" }], metrics: [{ name: "eventCount" }, { name: "totalUsers" }], dimensionFilter: eventFilter(FUNNEL_EVENTS) }, "funnel_events")),
    safe(() => ga4Report({ dateRanges: R28, dimensions: [{ name: "eventName" }, { name: "customEvent:click_source" }, { name: "customEvent:cta_type" }], metrics: [{ name: "eventCount" }], dimensionFilter: eventFilter(["cta_view", "whatsapp_click"]), limit: 200 }, "funnel_wa")),
    safe(() => ga4Report({ dateRanges: R28, dimensions: [{ name: "eventName" }, { name: "customEvent:last_field" }], metrics: [{ name: "eventCount" }], dimensionFilter: eventFilter(["form_abandon"]), limit: 50 }, "funnel_fields")),
    safe(() => ga4Report({ dateRanges: R28, dimensions: [{ name: "customEvent:metric_name" }, { name: "customEvent:metric_rating" }], metrics: [{ name: "eventCount" }], dimensionFilter: eventFilter(["web_vitals"]) }, "funnel_vitals")),
  ]);
  const sum = (rows: { clicks: number; impressions: number }[]) => rows.reduce((a, r) => ({ c: a.c + r.clicks, i: a.i + r.impressions }), { c: 0, i: 0 });
  const a = gscCur.ok ? sum(gscCur.data) : null;
  const b = gscPrev.ok ? sum(gscPrev.data) : null;
  return (
    <PanelShell active="/panel/performans" title="Performans">
      <DataSource mode={src.mode} generatedAt={src.snapshot?.generated_at} />
      {funnelEv.ok ? <Funnel ev={funnelEv.data} wa={funnelWa} fields={funnelFields} vitals={funnelVitals} /> : <Card title="Dönüşüm hunisi"><ErrorBox message={funnelEv.error} /></Card>}
      <Card title="Google Analytics (son 28 gün)">
        {gaTotals.ok ? (
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {["Oturum", "Kullanıcı", "Etkileşimli oturum", "Key event"].map((l, i) => <Stat key={l} label={l} value={gaTotals.data.rows[0]?.mets[i] ?? 0} />)}
          </div>
        ) : <ErrorBox message={gaTotals.error} />}
        <div className="grid gap-6 lg:grid-cols-2 mt-6">
          <div className="min-w-0"><h3 className="font-semibold mb-2">Kanallar</h3>{channels.ok ? <Table head={["Kanal", "Oturum"]} rows={channels.data.rows.map((r) => [r.dims[0], r.mets[0]])} /> : <ErrorBox message={channels.error} />}</div>
          <div className="min-w-0"><h3 className="font-semibold mb-2">Giriş sayfaları</h3>{landing.ok ? <Table head={["Sayfa", "Oturum", "Key event"]} rows={landing.data.rows.map((r) => [r.dims[0], r.mets[0], r.mets[1]])} /> : <ErrorBox message={landing.error} />}</div>
        </div>
      </Card>
      <Card title="Google Arama (Search Console, son 28 gün / önceki 28 gün)">
        {a && b ? (
          <div className="grid gap-4 grid-cols-2 mb-6">
            <Stat label="Tıklama" value={a.c} hint={`önceki: ${b.c} (${pct(a.c, b.c)})`} />
            <Stat label="Gösterim" value={a.i} hint={`önceki: ${b.i} (${pct(a.i, b.i)})`} />
          </div>
        ) : <ErrorBox message={gscCur.ok ? (gscPrev.ok ? "" : gscPrev.error) : gscCur.error} />}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="min-w-0"><h3 className="font-semibold mb-2">Sorgular</h3>{queries.ok ? <Table head={["Sorgu", "Tık", "Gösterim", "Sıra"]} rows={queries.data.map((r) => [r.keys[0], r.clicks, r.impressions, r.position.toFixed(1)])} /> : <ErrorBox message={queries.error} />}</div>
          <div className="min-w-0"><h3 className="font-semibold mb-2">Sayfalar</h3>{pages.ok ? <Table head={["Sayfa", "Tık", "Gösterim", "Sıra"]} rows={pages.data.map((r) => [r.keys[0].replace("https://www.londradepo.com", "") || "/", r.clicks, r.impressions, r.position.toFixed(1)])} /> : <ErrorBox message={pages.error} />}</div>
        </div>
        <p className="text-xs text-slate-500 mt-3">Search Console verisi ~2–3 gün gecikmeli gelir.</p>
      </Card>
    </PanelShell>
  );
}
