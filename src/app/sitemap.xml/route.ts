import { sitemapIndex, xmlResponse } from "@/lib/sitemaps";

export const dynamic = "force-static";

// The one sitemap index (submitted in Search Console, listed in robots.txt). /sitemap_index.xml 301s here.
export function GET() {
  return xmlResponse(sitemapIndex());
}
