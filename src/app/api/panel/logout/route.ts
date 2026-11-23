import { NextRequest, NextResponse } from "next/server";
import { PANEL_COOKIE } from "@/lib/panel/auth";

export async function POST(req: NextRequest) {
  const res = NextResponse.redirect(new URL("/panel/giris", req.url), { status: 303 });
  res.cookies.set(PANEL_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
