import "server-only";
import { googleConfigured, googleToken } from "./google";

export const GSC_SITE = process.env.GSC_SITE || "sc-domain:londradepo.com";
export const gscConfigured = googleConfigured;

export type GscRow = { keys: string[]; clicks: number; impressions: number; ctr: number; position: number };

export async function gscQuery(startDate: string, endDate: string, dimensions: string[], rowLimit = 25): Promise<GscRow[]> {
  const res = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_SITE)}/searchAnalytics/query`, {
    method: "POST",
    headers: { Authorization: `Bearer ${await googleToken()}`, "Content-Type": "application/json" },
    body: JSON.stringify({ startDate, endDate, dimensions, rowLimit }),
    next: { revalidate: 1800 },
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json?.error?.message || `Search Console ${res.status}`);
  return (json.rows ?? []) as GscRow[];
}

/** ISO date n days before today (UTC). Search Console data lags ~2 days. */
export function daysAgo(n: number): string {
  return new Date(Date.now() - n * 86400000).toISOString().slice(0, 10);
}
