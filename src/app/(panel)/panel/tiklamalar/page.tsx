import PanelShell, { Bars, Card, DataSource, ErrorBox, NotConnected, Stat, Table } from "@/components/panel/PanelShell";
import { analyticsSource } from "@/lib/panel/analytics-snapshot";
import { eventFilter, ga4Report } from "@/lib/panel/ga4";
import { safe } from "@/lib/panel/safe";

export const dynamic = "force-dynamic";

const LABEL: Record<string, string> = { whatsapp_click: "WhatsApp", phone_call: "Telefon", cta_click: "Teklif / görüşme butonu", generate_lead: "Form gönderimi", form_start: "Form başlatma" };

export default async function ClicksPage() {
  const src = await analyticsSource();
  if (!src.mode) return <PanelShell active="/panel/tiklamalar" title="Tıklamalar"><NotConnected what="Google Analytics" vars={["GOOGLE_SERVICE_ACCOUNT_JSON", "GA4_PROPERTY_ID"]} /></PanelShell>;
  const range = [{ startDate: "28daysAgo", endDate: "today" }];
  const [totals, daily, bySource] = await Promise.all([
    safe(() => ga4Report({ dateRanges: range, dimensions: [{ name: "eventName" }], metrics: [{ name: "eventCount" }], dimensionFilter: eventFilter(Object.keys(LABEL)) }, "clicks_totals")),
    safe(() => ga4Report({ dateRanges: range, dimensions: [{ name: "date" }], metrics: [{ name: "eventCount" }], dimensionFilter: eventFilter(["whatsapp_click"]), orderBys: [{ dimension: { dimensionName: "date" } }] }, "clicks_daily")),
    safe(() => ga4Report({ dateRanges: range, dimensions: [{ name: "eventName" }, { name: "pagePath" }, { name: "customEvent:click_source" }], metrics: [{ name: "eventCount" }], dimensionFilter: eventFilter(["whatsapp_click", "phone_call", "cta_click"]), orderBys: [{ metric: { metricName: "eventCount" }, desc: true }], limit: 50 }, "clicks_by_source")),
  ]);
  const count = (n: string) => (totals.ok ? totals.data.rows.find((r) => r.dims[0] === n)?.mets[0] ?? 0 : 0);
  return (
    <PanelShell active="/panel/tiklamalar" title="Tıklamalar (son 28 gün)">
      <DataSource mode={src.mode} generatedAt={src.snapshot?.generated_at} />
      {totals.ok ? (
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-5 mb-6">{Object.keys(LABEL).map((k) => <Stat key={k} label={LABEL[k]} value={count(k)} />)}</div>
      ) : <ErrorBox message={totals.error} />}
      <Card title="Günlük WhatsApp tıklamaları">
        {daily.ok ? <Bars label="Günlük WhatsApp tıklamaları" data={daily.data.rows.map((r) => ({ x: `${r.dims[0].slice(6, 8)}.${r.dims[0].slice(4, 6)}`, y: r.mets[0] }))} /> : <ErrorBox message={daily.error} />}
      </Card>
      <Card title="Hangi sayfa ve buton?">
        {bySource.ok ? (
          <Table head={["Tıklama", "Sayfa", "Buton konumu", "Adet"]} rows={bySource.data.rows.map((r) => [LABEL[r.dims[0]] ?? r.dims[0], r.dims[1], r.dims[2] === "(not set)" ? "—" : r.dims[2], r.mets[0]])} />
        ) : (
          <ErrorBox message={`${bySource.error}. "click_source" GA4'te özel boyut olarak kayıtlı değilse bu tablo boş kalır (docs/panel-setup.md).`} />
        )}
        <p className="text-xs text-slate-500 mt-3">GA4 yalnızca çerez onayı veren ziyaretçileri sayar; gerçek tıklama sayısı daha yüksektir.</p>
      </Card>
    </PanelShell>
  );
}
