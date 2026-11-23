import "server-only";
import { kv, kvPipeline } from "@/lib/panel/kv";
import type { Lead, Status, Target } from "@/lib/panel/wizard";

/**
 * Storage for wizard leads (Upstash Redis). Prospect data lives only here and in Apollo, never in the repo.
 * wiz:lead:<domain> → lead JSON; wiz:leads → sorted set (score → domain); wiz:runs → list of import summaries.
 */
const LEAD = (d: string) => `wiz:lead:${d}`;
const INDEX = "wiz:leads";
const RUNS = "wiz:runs";

export type Run = { id: string; at: string; region: Target["region"]; sectors: string[]; countries: string[]; added: number; duplicates: number; errors: number };

export async function allDomains(): Promise<string[]> {
  return (await kv<string[]>("ZRANGE", INDEX, 0, -1)) ?? [];
}

export async function listLeads(limit = 1000): Promise<Lead[]> {
  const domains = (await kv<string[]>("ZRANGE", INDEX, 0, limit - 1, "REV")) ?? [];
  const out: Lead[] = [];
  for (let i = 0; i < domains.length; i += 100) {
    const vals = (await kv<(string | null)[]>("MGET", ...domains.slice(i, i + 100).map(LEAD))) ?? [];
    for (const v of vals) if (v) out.push(JSON.parse(v) as Lead);
  }
  return out;
}

export async function getLead(domain: string): Promise<Lead | null> {
  const v = await kv<string | null>("GET", LEAD(domain));
  return v ? (JSON.parse(v) as Lead) : null;
}

/** Saves new leads; domains already stored are skipped (never overwritten) and counted as duplicates. */
export async function saveLeads(leads: Lead[]): Promise<{ added: number; duplicates: number }> {
  const existing = new Set(await allDomains());
  const fresh: Lead[] = [];
  for (const l of leads) {
    if (existing.has(l.domain)) continue;
    existing.add(l.domain);
    fresh.push(l);
  }
  await kvPipeline(fresh.flatMap((l) => [["SET", LEAD(l.domain), JSON.stringify(l)], ["ZADD", INDEX, l.score, l.domain]]));
  return { added: fresh.length, duplicates: leads.length - fresh.length };
}

export async function updateLead(domain: string, patch: Partial<Pick<Lead, "status" | "apollo_contact_id">>): Promise<Lead | null> {
  const l = await getLead(domain);
  if (!l) return null;
  const next = { ...l, ...patch };
  await kv("SET", LEAD(domain), JSON.stringify(next));
  return next;
}

export async function setStatus(domain: string, status: Status) {
  return updateLead(domain, { status });
}

export async function addRun(r: Run) {
  await kvPipeline([["LPUSH", RUNS, JSON.stringify(r)], ["LTRIM", RUNS, 0, 49]]);
}

export async function listRuns(): Promise<Run[]> {
  return ((await kv<string[]>("LRANGE", RUNS, 0, 19)) ?? []).map((s) => JSON.parse(s) as Run);
}
