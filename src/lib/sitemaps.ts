import { EN_PAGES } from "@/content/en";
import type { PageKind } from "@/content/en/types";
import { enAlternates, trAlternates, type Alternates } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { TR_ARTICLES } from "@/content/tr-articles";

type Freq = "weekly" | "monthly" | "yearly";
type Entry = { path: string; changefreq: Freq; priority: number; alternates: Alternates; lastmod?: string };

// Turkish URLs (unchanged). lastmod is set only for articles whose dates are maintained in src/content/tr-articles.ts.
const TR: ReadonlyArray<readonly [string, Freq, number]> = [
  ["/", "weekly", 1],
  ["/ingiltere-depo-avantajlari", "monthly", 0.9],
  ["/hakkimizda", "monthly", 0.8],
  ["/iletisim", "monthly", 0.8],
  ["/ingiltere-depo", "monthly", 0.9],
  ["/londra-depo", "monthly", 0.9],
  ["/ingiltere-e-ticaret-lojistigi", "monthly", 0.9],
  ["/siparis-toplama-paketleme", "monthly", 0.9],
  ["/ingiltere-depo-fiyatlari", "monthly", 0.9],
  ["/ingiltere-depo-maliyet-hesaplama", "monthly", 0.8],
  ["/konteyner-varis-planlayici", "monthly", 0.8],
  ["/london-gateway-tilbury-depo", "monthly", 0.8],
  ["/felixstowe-liman-depo", "monthly", 0.8],
  ["/konteyner-bosaltma", "monthly", 0.8],
  ["/otomotiv-yedek-parca-depolama", "monthly", 0.8],
  ["/sektorler", "monthly", 0.7],
  ["/turk-sirketleri-icin-ingiltere-depo", "monthly", 0.9],
  ["/turkiye-ingiltere-lojistik", "monthly", 0.9],
  ["/turkiyeden-ingiltereye-satis", "monthly", 0.9],
  ["/shopify-ingiltere-depo", "monthly", 0.9],
  ["/amazon-ingiltere-depo", "monthly", 0.9],
  ["/ingiltere-fulfillment", "monthly", 0.9],
  ["/palet-depolama", "monthly", 0.9],
  ["/amazon-prep-uk", "monthly", 0.9],
  ["/depolama", "monthly", 0.9],
  ["/gumrukleme", "monthly", 0.9],
  ["/ellecleme", "monthly", 0.8],
  ["/nakliye-dagitim", "monthly", 0.8],
  ["/e-ticaret-fulfillment", "monthly", 0.9],
  ["/amazon-fulfillment", "monthly", 0.9],
  ["/turkiyeden-ingiltereye-depolama", "monthly", 0.9],
  ["/essex-depo", "monthly", 0.8],
  ["/case-studies", "monthly", 0.7],
  ["/case-studies/cruyff-uk-fulfillment", "monthly", 0.6],
  ["/case-studies/pizza-box-distribution-uk", "monthly", 0.6],
  ["/case-studies/tortilla-uk-distribution", "monthly", 0.6],
  ["/case-studies/uk-auto-parts-warehouse", "monthly", 0.6],
  ["/case-studies/uk-walking-treadmill-distribution", "monthly", 0.6],
  ["/case-studies/arac-koltuk-kaplama-ingiltere-depo", "monthly", 0.6],
  ["/case-studies/tasinabilir-sarj-istasyonu-ingiltere-operasyonu", "monthly", 0.6],
  ["/blog", "weekly", 0.7],
  ["/blog/ingiltere-depo-rehberi", "monthly", 0.7],
  ["/blog/ingiltere-fulfillment-nedir", "monthly", 0.7],
  ["/blog/amazon-prep-uk-rehberi", "monthly", 0.7],
  ["/blog/ingiltere-ara-depo-nedir", "monthly", 0.7],
  ["/blog/ingiltere-depo-fiyatlari-2026", "monthly", 0.7],
  ["/blog/ingiltere-palet-depolama-maliyetleri", "monthly", 0.7],
  ["/blog/amazon-fba-vs-uk-fulfillment", "monthly", 0.7],
  ["/blog/turkiyeden-ingiltereye-ihracat-rehberi", "monthly", 0.7],
  ["/blog/ingiltere-3pl-nasil-secilir", "monthly", 0.7],
  ["/blog/ingiltere-ithalat-maliyetleri", "monthly", 0.7],
  ["/blog/amazon-fba-prep-kontrol-listesi", "monthly", 0.7],
  ["/privacy-policy", "yearly", 0.4],
  ["/cookie-policy", "yearly", 0.4],
  ["/sozlesme-kosullari", "yearly", 0.5],
];

const EN_PRIORITY: Record<PageKind, [Freq, number]> = {
  home: ["weekly", 1],
  service: ["monthly", 0.9],
  contact: ["monthly", 0.8],
  hub: ["weekly", 0.7],
  article: ["monthly", 0.7],
  case: ["monthly", 0.6],
  legal: ["yearly", 0.4],
};

/** English pages without a Turkish counterpart (self-referencing en alternate only). */
const EN_ONLY: ReadonlyArray<readonly [string, Freq, number]> = [["/en/request-a-quote", "monthly", 0.8]];

/** All English pages were published on this date; later edits update content dates. */
const EN_PUBLISHED = "2026-11-10";

export function trEntries(): Entry[] {
  return TR.map(([path, changefreq, priority]) => ({ path, changefreq, priority, alternates: trAlternates(path), lastmod: TR_ARTICLES[path]?.modified }));
}

export function enEntries(): Entry[] {
  return [
    ...EN_PAGES.map((p) => {
      const [changefreq, priority] = EN_PRIORITY[p.kind];
      return { path: p.slug, changefreq, priority, alternates: enAlternates(p.slug), lastmod: p.article?.modified ?? EN_PUBLISHED };
    }),
    ...EN_ONLY.map(([path, changefreq, priority]) => ({ path, changefreq, priority, alternates: enAlternates(path), lastmod: EN_PUBLISHED })),
  ];
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function urlset(entries: Entry[]): string {
  const urls = entries.map((e) => {
    const lines = ["  <url>", `    <loc>${esc(e.alternates.canonical)}</loc>`];
    for (const [lang, href] of Object.entries(e.alternates.languages)) {
      lines.push(`    <xhtml:link rel="alternate" hreflang="${lang}" href="${esc(href)}"/>`);
    }
    if (e.lastmod) lines.push(`    <lastmod>${e.lastmod}</lastmod>`);
    lines.push(`    <changefreq>${e.changefreq}</changefreq>`, `    <priority>${e.priority}</priority>`, "  </url>");
    return lines.join("\n");
  });
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
}

export const CHILD_SITEMAPS = ["/sitemap-tr.xml", "/sitemap-en.xml"];

export function sitemapIndex(): string {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...CHILD_SITEMAPS.map((p) => `  <sitemap>\n    <loc>${SITE_URL}${p}</loc>\n  </sitemap>`),
    "</sitemapindex>",
    "",
  ].join("\n");
}

export function xmlResponse(body: string): Response {
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
