export const SITE_URL = "https://www.londradepo.com";

// Phase 1 launch date (homepage, service pages, core pages)
export const PHASE1 = new Date("2026-08-01");
// Phase 2 launch date (P0 Turkish SEO power pages)
export const PHASE2 = new Date("2026-09-24");

export type SiteUrl = {
  path: string;
  lastModified: Date;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

// Single source of truth for sitemap.xml and IndexNow submissions.
export const SITE_URLS: SiteUrl[] = [
  { path: "/", lastModified: PHASE2, changeFrequency: "weekly", priority: 1 },
  { path: "/ingiltere-depo-avantajlari", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
  { path: "/hakkimizda", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.8 },
  { path: "/iletisim", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.8 },
  { path: "/ingiltere-depo", lastModified: PHASE2, changeFrequency: "monthly", priority: 0.9 },
  { path: "/londra-depo", lastModified: PHASE2, changeFrequency: "monthly", priority: 0.9 },
  { path: "/ingiltere-e-ticaret-lojistigi", lastModified: PHASE2, changeFrequency: "monthly", priority: 0.9 },
  { path: "/siparis-toplama-paketleme", lastModified: PHASE2, changeFrequency: "monthly", priority: 0.9 },
  { path: "/ingiltere-depo-fiyatlari", lastModified: PHASE2, changeFrequency: "monthly", priority: 0.9 },
  { path: "/turk-sirketleri-icin-ingiltere-depo", lastModified: PHASE2, changeFrequency: "monthly", priority: 0.9 },
  { path: "/turkiye-ingiltere-lojistik", lastModified: PHASE2, changeFrequency: "monthly", priority: 0.9 },
  { path: "/turkiyeden-ingiltereye-satis", lastModified: PHASE2, changeFrequency: "monthly", priority: 0.9 },
  { path: "/shopify-ingiltere-depo", lastModified: PHASE2, changeFrequency: "monthly", priority: 0.9 },
  { path: "/amazon-ingiltere-depo", lastModified: PHASE2, changeFrequency: "monthly", priority: 0.9 },
  { path: "/ingiltere-fulfillment", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
  { path: "/palet-depolama", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
  { path: "/amazon-prep-uk", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
  { path: "/depolama", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
  { path: "/gumrukleme", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
  { path: "/ellecleme", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.8 },
  { path: "/nakliye-dagitim", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.8 },
  { path: "/e-ticaret-fulfillment", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
  { path: "/shopify-fulfillment", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
  { path: "/amazon-fulfillment", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
  { path: "/turkiyeden-ingiltereye-depolama", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
  { path: "/uk-warehousing-fulfilment", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
  { path: "/essex-depo", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.8 },
  { path: "/case-studies", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.7 },
  { path: "/case-studies/cruyff-uk-fulfillment", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.6 },
  { path: "/case-studies/pizza-box-distribution-uk", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.6 },
  { path: "/case-studies/tortilla-uk-distribution", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.6 },
  { path: "/case-studies/uk-auto-parts-warehouse", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.6 },
  { path: "/case-studies/uk-walking-treadmill-distribution", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.6 },
  { path: "/case-studies/arac-koltuk-kaplama-ingiltere-depo", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.6 },
  { path: "/case-studies/tasinabilir-sarj-istasyonu-ingiltere-operasyonu", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog", lastModified: PHASE2, changeFrequency: "weekly", priority: 0.7 },
  { path: "/blog/ingiltere-depo-rehberi", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/ingiltere-fulfillment-nedir", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/amazon-prep-uk-rehberi", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/ingiltere-ara-depo-nedir", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/ingiltere-depo-fiyatlari-2026", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/ingiltere-palet-depolama-maliyetleri", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/amazon-fba-vs-uk-fulfillment", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/turkiyeden-ingiltereye-ihracat-rehberi", lastModified: PHASE1, changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy-policy", lastModified: PHASE1, changeFrequency: "yearly", priority: 0.4 },
  { path: "/cookie-policy", lastModified: PHASE1, changeFrequency: "yearly", priority: 0.4 },
  { path: "/sozlesme-kosullari", lastModified: PHASE2, changeFrequency: "yearly", priority: 0.5 },
];
