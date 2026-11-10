import { sitemapIndex, xmlResponse } from "@/lib/sitemaps";

export const dynamic = "force-static";

// Legacy URL already submitted to Search Console: serves the same sitemap index, no redirect needed.
export function GET() {
  return xmlResponse(sitemapIndex());
}
