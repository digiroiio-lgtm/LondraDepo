import { trEntries, urlset, xmlResponse } from "@/lib/sitemaps";

export const dynamic = "force-static";

export function GET() {
  return xmlResponse(urlset(trEntries()));
}
