import { NextResponse } from "next/server";

const SITE_URL = "https://www.londradepo.com";

const urls = [
  { loc: `${SITE_URL}/blog`, priority: "0.7", changefreq: "weekly" },
  { loc: `${SITE_URL}/blog/ingiltere-depo-rehberi`, priority: "0.7", changefreq: "monthly" },
  { loc: `${SITE_URL}/blog/ingiltere-fulfillment-nedir`, priority: "0.7", changefreq: "monthly" },
  { loc: `${SITE_URL}/blog/amazon-prep-uk-rehberi`, priority: "0.7", changefreq: "monthly" },
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
