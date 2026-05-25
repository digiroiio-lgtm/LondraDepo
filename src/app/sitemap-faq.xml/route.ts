import { NextResponse } from "next/server";

const SITE_URL = "https://www.londradepo.com";

const urls = [
  { loc: SITE_URL, priority: "1.0", changefreq: "weekly" },
  { loc: `${SITE_URL}/ingiltere-fulfillment`, priority: "0.9", changefreq: "monthly" },
  { loc: `${SITE_URL}/palet-depolama`, priority: "0.9", changefreq: "monthly" },
  { loc: `${SITE_URL}/amazon-prep-uk`, priority: "0.9", changefreq: "monthly" },
];

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
