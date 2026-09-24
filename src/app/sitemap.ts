import { MetadataRoute } from "next";

const SITE_URL = "https://www.londradepo.com";

// Phase 1 launch date (homepage, service pages, core pages)
const PHASE1 = new Date("2026-08-01");
// Phase 2 launch date (P0 Turkish SEO power pages)
const PHASE2 = new Date("2026-09-24");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Ana sayfalar
    { url: SITE_URL, lastModified: PHASE2, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/ingiltere-depo-avantajlari`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/hakkimizda`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/iletisim`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.8 },
    // P0 Power Pages — birincil trafik sayfaları
    { url: `${SITE_URL}/ingiltere-depo`, lastModified: PHASE2, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/londra-depo`, lastModified: PHASE2, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/ingiltere-e-ticaret-lojistigi`, lastModified: PHASE2, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/siparis-toplama-paketleme`, lastModified: PHASE2, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/ingiltere-depo-fiyatlari`, lastModified: PHASE2, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/turk-sirketleri-icin-ingiltere-depo`, lastModified: PHASE2, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/turkiye-ingiltere-lojistik`, lastModified: PHASE2, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/turkiyeden-ingiltereye-satis`, lastModified: PHASE2, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/shopify-ingiltere-depo`, lastModified: PHASE2, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/amazon-ingiltere-depo`, lastModified: PHASE2, changeFrequency: "monthly", priority: 0.9 },
    // Servis sayfaları
    { url: `${SITE_URL}/ingiltere-fulfillment`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/palet-depolama`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/amazon-prep-uk`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/depolama`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/gumrukleme`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/ellecleme`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/nakliye-dagitim`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/e-ticaret-fulfillment`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/shopify-fulfillment`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/amazon-fulfillment`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
    // Landing sayfaları
    { url: `${SITE_URL}/turkiyeden-ingiltereye-depolama`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/uk-warehousing-fulfilment`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.9 },
    // Lokasyon sayfaları
    { url: `${SITE_URL}/essex-depo`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.8 },
    // Case studies
    { url: `${SITE_URL}/case-studies`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/case-studies/cruyff-uk-fulfillment`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/krufy-uk-fashion-fulfillment`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/pizza-box-distribution-uk`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/tortilla-uk-distribution`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/uk-auto-parts-warehouse`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/uk-walking-treadmill-distribution`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/arac-koltuk-kaplama-ingiltere-depo`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/tasinabilir-sarj-istasyonu-ingiltere-operasyonu`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.6 },
    // Blog / içerik cluster
    { url: `${SITE_URL}/blog`, lastModified: PHASE2, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/blog/ingiltere-depo-rehberi`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/ingiltere-fulfillment-nedir`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/amazon-prep-uk-rehberi`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/ingiltere-ara-depo-nedir`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/ingiltere-depo-fiyatlari-2026`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/ingiltere-palet-depolama-maliyetleri`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/amazon-fba-vs-uk-fulfillment`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/turkiyeden-ingiltereye-ihracat-rehberi`, lastModified: PHASE1, changeFrequency: "monthly", priority: 0.7 },
  ];
}
