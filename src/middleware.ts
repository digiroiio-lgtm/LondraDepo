import { NextRequest, NextResponse } from "next/server";
import { PANEL_COOKIE, verifySession } from "@/lib/panel/auth";

/** Password gate for the private panel. Everything under /panel and /api/panel needs a valid session cookie. */
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const open = pathname === "/panel/giris" || pathname === "/api/panel/login";
  const ok = open || (await verifySession(req.cookies.get(PANEL_COOKIE)?.value));
  if (ok) {
    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    res.headers.set("Cache-Control", "private, no-store");
    return res;
  }
  if (pathname.startsWith("/api/")) return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: { "X-Robots-Tag": "noindex, nofollow" } });
  const url = req.nextUrl.clone();
  url.pathname = "/panel/giris";
  url.search = "";
  const res = NextResponse.redirect(url);
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}

export const config = { matcher: ["/panel", "/panel/:path*", "/api/panel/:path*"] };
