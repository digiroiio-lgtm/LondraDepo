import PanelShell, { Card, ErrorBox, NotConnected, Stat, Table } from "@/components/panel/PanelShell";
import { ga4Configured, ga4Report } from "@/lib/panel/ga4";
import { daysAgo, gscQuery } from "@/lib/panel/gsc";
import { safe } from "@/lib/panel/safe";

export const dynamic = "force-dynamic";

const pct = (a: number, b: number) => (b ? `${a >= b ? "+" : ""}${Math.round(((a - b) / b) * 100)}%` : "—");

export default async function PerformancePage() {
  if (!ga4Configured()) return <PanelShell active="/panel/performans" title="Performans"><NotConnected what="Google Analytics ve Search Console" vars={["GOOGLE_SERVICE_ACCOUNT_JSON", "GA4_PROPERTY_ID", "GSC_SITE"]} /></PanelShell>;
  const cur = [daysAgo(30), daysAgo(3)] as const;
  const prev = [daysAgo(58), daysAgo(31)] as const;
  const [gaTotals, channels, landing, gscCur, gscPrev, queries, pages] = await Promise.all([
    safe(() => ga4Report({ dateRanges: [{ startDate: "28daysAgo", endDate: "today" }], metrics: [{ name: "sessions" }, { name: "totalUsers" }, { name: "engagedSessions" }, { name: "keyEvents" }] })),
    safe(() => ga4Report({ dateRanges: [{ startDate: "28daysAgo", endDate: "today" }], dimensions: [{ name: "sessionDefaultChannelGroup" }], metrics: [{ name: "sessions" }], orderBys: [{ metric: { metricName: "sessions" }, desc: true }] })),
    safe(() => ga4Report({ dateRanges: [{ startDate: "28daysAgo", endDate: "today" }], dimensions: [{ name: "landingPage" }], metrics: [{ name: "sessions" }, { name: "keyEvents" }], orderBys: [{ metric: { metricName: "sessions" }, desc: true }], limit: 15 })),
    safe(() => gscQuery(cur[0], cur[1], ["date"], 100)),
    safe(() => gscQuery(prev[0], prev[1], ["date"], 100)),
    safe(() => gscQuery(cur[0], cur[1], ["query"], 25)),
    safe(() => gscQuery(cur[0], cur[1], ["page"], 25)),
  ]);
  const sum = (rows: { clicks: number; impressions: number }[]) => rows.reduce((a, r) => ({ c: a.c + r.clicks, i: a.i + r.impressions }), { c: 0, i: 0 });
  const a = gscCur.ok ? sum(gscCur.data) : null;
  const b = gscPrev.ok ? sum(gscPrev.data) : null;
  return (
    <PanelShell active="/panel/performans" title="Performans">
      <Card title="Google Analytics (son 28 gün)">
        {gaTotals.ok ? (
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {["Oturum", "Kullanıcı", "Etkileşimli oturum", "Key event"].map((l, i) => <Stat key={l} label={l} value={gaTotals.data.rows[0]?.mets[i] ?? 0} />)}
          </div>
        ) : <ErrorBox message={gaTotals.error} />}
        <div className="grid gap-6 lg:grid-cols-2 mt-6">
          <div><h3 className="font-semibold mb-2">Kanallar</h3>{channels.ok ? <Table head={["Kanal", "Oturum"]} rows={channels.data.rows.map((r) => [r.dims[0], r.mets[0]])} /> : <ErrorBox message={channels.error} />}</div>
          <div><h3 className="font-semibold mb-2">Giriş sayfaları</h3>{landing.ok ? <Table head={["Sayfa", "Oturum", "Key event"]} rows={landing.data.rows.map((r) => [r.dims[0], r.mets[0], r.mets[1]])} /> : <ErrorBox message={landing.error} />}</div>
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
          <div><h3 className="font-semibold mb-2">Sorgular</h3>{queries.ok ? <Table head={["Sorgu", "Tık", "Gösterim", "Sıra"]} rows={queries.data.map((r) => [r.keys[0], r.clicks, r.impressions, r.position.toFixed(1)])} /> : <ErrorBox message={queries.error} />}</div>
          <div><h3 className="font-semibold mb-2">Sayfalar</h3>{pages.ok ? <Table head={["Sayfa", "Tık", "Gösterim", "Sıra"]} rows={pages.data.map((r) => [r.keys[0].replace("https://www.londradepo.com", "") || "/", r.clicks, r.impressions, r.position.toFixed(1)])} /> : <ErrorBox message={pages.error} />}</div>
        </div>
        <p className="text-xs text-slate-500 mt-3">Search Console verisi ~2–3 gün gecikmeli gelir.</p>
      </Card>
    </PanelShell>
  );
}
