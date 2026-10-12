import { NextResponse, type NextRequest } from "next/server";
import { SITE_URL } from "@/lib/site";

export function middleware(request: NextRequest) {
  // Scope to production domains so local development and Vercel previews remain usable.
  const host = request.headers.get("host")?.split(":")[0].toLowerCase();
  const protocol = request.headers.get("x-forwarded-proto")?.split(",")[0].trim() || request.nextUrl.protocol.replace(":", "");
  if (host === "londradepo.com" || (host === "www.londradepo.com" && protocol === "http")) {
    const target = request.nextUrl.clone();
    target.protocol = "https:";
    target.hostname = new URL(SITE_URL).hostname;
    target.port = "";
    return NextResponse.redirect(target, 308);
  }
  return NextResponse.next();
}
