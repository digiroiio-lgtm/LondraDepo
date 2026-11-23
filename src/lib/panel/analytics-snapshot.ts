import "server-only";
import { googleConfigured } from "@/lib/panel/google";
import { kv, kvConfigured } from "@/lib/panel/kv";

/**
 * GA4 / Search Console snapshot written by Claude from its MCP connectors (POST /api/panel/snapshot), used when no
 * Google service account is configured. Stored only in the panel's private Redis, never in the (public) repo.
 */
export const SNAPSHOT_KEY = "snap:analytics";

export type SnapGa4 = { rows: { dims: string[]; mets: number[] }[] };
export type SnapGsc = { keys: string[]; clicks: number; impressions: number; ctr: number; position: number }[];
export type AnalyticsSnapshot = {
  generated_at: string;
  source: string;
  ga4: Record<string, SnapGa4>;
  gsc: Record<string, SnapGsc>;
  ranges?: Record<string, string>;
};

let cache: { at: number; v: AnalyticsSnapshot | null } | null = null;

export async function getAnalyticsSnapshot(): Promise<AnalyticsSnapshot | null> {
  if (!kvConfigured()) return null;
  if (cache && Date.now() - cache.at < 30_000) return cache.v;
  let v: AnalyticsSnapshot | null = null;
  try {
    const raw = await kv<string | null>("GET", SNAPSHOT_KEY);
    v = raw ? (JSON.parse(raw) as AnalyticsSnapshot) : null;
  } catch {
    v = null;
  }
  cache = { at: Date.now(), v };
  return v;
}

export async function saveAnalyticsSnapshot(s: AnalyticsSnapshot) {
  await kv("SET", SNAPSHOT_KEY, JSON.stringify(s));
  cache = null;
}

/** Where analytics come from: live API (service account), a Claude snapshot, or nothing. */
export async function analyticsSource(): Promise<{ mode: "live" | "snapshot" | null; snapshot: AnalyticsSnapshot | null }> {
  if (googleConfigured()) return { mode: "live", snapshot: null };
  const s = await getAnalyticsSnapshot();
  return { mode: s ? "snapshot" : null, snapshot: s };
}

/** Basic shape check for an uploaded snapshot. */
export function isSnapshot(x: unknown): x is AnalyticsSnapshot {
  const s = x as AnalyticsSnapshot;
  if (!s || typeof s !== "object" || typeof s.generated_at !== "string" || typeof s.ga4 !== "object" || typeof s.gsc !== "object") return false;
  for (const r of Object.values(s.ga4)) if (!r || !Array.isArray(r.rows)) return false;
  for (const r of Object.values(s.gsc)) if (!Array.isArray(r)) return false;
  return true;
}
