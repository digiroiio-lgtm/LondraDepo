import { NextRequest, NextResponse } from "next/server";
import { submitIndexNow } from "@/lib/indexnow";

import { enEntries, trEntries } from "@/lib/sitemaps";

// Same canonical URLs as sitemap-tr.xml and sitemap-en.xml, so retired URLs are never submitted.
const ALL_URLS = [...trEntries(), ...enEntries()].map((e) => e.alternates.canonical);

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
