import { NextRequest, NextResponse } from "next/server";
import { submitIndexNow } from "@/lib/indexnow";
import { SITE_URL, SITE_URLS } from "@/lib/urls";

const ALL_URLS = SITE_URLS.map(({ path }) => `${SITE_URL}${path}`);

export async function POST(request: NextRequest) {
  const auth = request.headers.get("authorization");
  const expected = `Bearer ${process.env.INDEXNOW_KEY}`;

  if (!process.env.INDEXNOW_KEY || auth !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const status = await submitIndexNow(ALL_URLS);
    return NextResponse.json({ submitted: ALL_URLS.length, status });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
