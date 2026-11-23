import "server-only";

/**
 * Upstash Redis over its REST API (no extra package). Vercel's Upstash integration sets KV_REST_API_URL /
 * KV_REST_API_TOKEN; a database created directly at Upstash uses UPSTASH_REDIS_REST_URL / _TOKEN. Either works.
 */
const url = () => process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "";
const token = () => process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "";

export function kvConfigured(): boolean {
  return Boolean(url() && token());
}

type Cmd = (string | number)[];

async function post<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${url()}${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token()}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  });
  const json = (await res.json().catch(() => ({}))) as unknown;
  if (!res.ok) throw new Error(`Veritabanı ${res.status}: ${(json as { error?: string })?.error ?? ""}`.trim());
  return json as T;
}

export async function kv<T = unknown>(...cmd: Cmd): Promise<T> {
  const j = await post<{ result?: T; error?: string }>("", cmd);
  if (j.error) throw new Error(j.error);
  return j.result as T;
}

export async function kvPipeline(cmds: Cmd[]): Promise<unknown[]> {
  if (!cmds.length) return [];
  const out = await post<{ result?: unknown; error?: string }[]>("/pipeline", cmds);
  const err = out.find((r) => r.error);
  if (err) throw new Error(err.error);
  return out.map((r) => r.result);
}
