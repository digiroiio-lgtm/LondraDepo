import { cookies } from "next/headers";
import { PANEL_COOKIE, verifySession } from "@/lib/panel/auth";
import { kvConfigured } from "@/lib/panel/kv";
import { contactsToCsv, isBlocked } from "@/lib/panel/webcontact";
import { listContacts } from "@/lib/panel/webcontact-store";

export const dynamic = "force-dynamic";

/** Download WebContact submissions as CSV (?f=blocked: only CAPTCHA / security-code blocks) (Excel-friendly, UTF-8 BOM). Also gated by middleware. */
export async function GET(req: Request) {
  const blockedOnly = new URL(req.url).searchParams.get("f") === "blocked";
  if (!(await verifySession((await cookies()).get(PANEL_COOKIE)?.value))) return new Response("Yetkisiz", { status: 401 });
  if (!kvConfigured()) return new Response("Veritabanı bağlı değil", { status: 503 });
  const all = await listContacts(5000);
  return new Response(contactsToCsv(blockedOnly ? all.filter(isBlocked) : all), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="webcontact-${blockedOnly ? "dogrulama-engelleri-" : ""}${new Date().toISOString().slice(0, 10)}.csv"`,
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
