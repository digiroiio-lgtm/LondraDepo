import { NextRequest, NextResponse } from "next/server";
import { PANEL_COOKIE, SESSION_MS, createSession, panelConfigured, safeEqual } from "@/lib/panel/auth";

export async function POST(req: NextRequest) {
  const form = await req.formData().catch(() => null);
  const password = String(form?.get("password") ?? "");
  const back = (path: string) => NextResponse.redirect(new URL(path, req.url), { status: 303 });

  if (!panelConfigured()) return back("/panel/giris?e=config");
  if (!safeEqual(password, process.env.PANEL_PASSWORD as string)) {
    await new Promise((r) => setTimeout(r, 1000)); // slow down guessing
    return back("/panel/giris?e=1");
  }
  const res = back("/panel");
  res.cookies.set(PANEL_COOKIE, await createSession(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production" && !req.url.startsWith("http://localhost"),
    sameSite: "lax",
    path: "/",
    maxAge: Math.floor(SESSION_MS / 1000),
  });
  return res;
}
