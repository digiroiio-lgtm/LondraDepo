import "server-only";
import { getAnalyticsSnapshot } from "./analytics-snapshot";
import { googleConfigured, googleToken } from "./google";

export const GA4_PROPERTY = process.env.GA4_PROPERTY_ID || "538800744";
export const ga4Configured = googleConfigured;

type Row = { dimensionValues?: { value: string }[]; metricValues?: { value: string }[] };
export type Ga4Result = { rows: { dims: string[]; mets: number[] }[] };

/** GA4 Data API runReport. body follows https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/runReport */
export async function ga4Report(body: Record<string, unknown>, snapshotKey?: string): Promise<Ga4Result> {
  if (!googleConfigured()) {
    const snap = await getAnalyticsSnapshot();
    const hit = snapshotKey ? snap?.ga4[snapshotKey] : undefined;
    if (!hit) throw new Error("Bu veri anlık görüntüde yok");
    return hit;
  }
  const res = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${GA4_PROPERTY}:runReport`, {
    method: "POST",
    headers: { Authorization: `Bearer ${await googleToken()}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
    next: { revalidate: 600 },
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json?.error?.message || `GA4 ${res.status}`);
  return { rows: ((json.rows ?? []) as Row[]).map((r) => ({ dims: (r.dimensionValues ?? []).map((d) => d.value), mets: (r.metricValues ?? []).map((m) => Number(m.value)) })) };
}

export const CLICK_EVENTS = ["whatsapp_click", "phone_call", "cta_click", "generate_lead", "form_start"];

export function eventFilter(names: string[]) {
  return { filter: { fieldName: "eventName", inListFilter: { values: names } } };
}
