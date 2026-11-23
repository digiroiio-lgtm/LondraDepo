import { safeEqual } from "@/lib/panel/auth";
import { isSnapshot, saveAnalyticsSnapshot } from "@/lib/panel/analytics-snapshot";
import { kvConfigured } from "@/lib/panel/kv";

export const dynamic = "force-dynamic";

const H = { "X-Robots-Tag": "noindex, nofollow", "Cache-Control": "no-store" };
const MAX_BYTES = 1_000_000;

/**
 * Receives the GA4 / Search Console snapshot that Claude builds from its MCP connectors.
 * Auth: "Authorization: Bearer <PANEL_SNAPSHOT_TOKEN>" (separate from the panel session; exempt in middleware).
 */
export async function POST(req: Request) {
  const token = process.env.PANEL_SNAPSHOT_TOKEN ?? "";
  const given = (req.headers.get("authorization") ?? "").replace(/^Bearer\s+/i, "");
  if (token.length < 32 || !safeEqual(given, token)) return Response.json({ error: "Unauthorized" }, { status: 401, headers: H });
  if (!kvConfigured()) return Response.json({ error: "Veritabanı bağlı değil" }, { status: 503, headers: H });
  const text = await req.text();
  if (text.length > MAX_BYTES) return Response.json({ error: "Çok büyük" }, { status: 413, headers: H });
  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    return Response.json({ error: "Geçersiz JSON" }, { status: 400, headers: H });
  }
  if (!isSnapshot(body)) return Response.json({ error: "Beklenmeyen biçim" }, { status: 400, headers: H });
  await saveAnalyticsSnapshot({ ...body, source: body.source || "mcp" });
  return Response.json({ ok: true, ga4: Object.keys(body.ga4).length, gsc: Object.keys(body.gsc).length }, { headers: H });
}
