import { MetadataRoute } from "next";

const SITE_URL = "https://www.londradepo.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    // Ana sayfalar
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/ingiltere-depo-avantajlari`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/hakkimizda`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/iletisim`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // P0 Power Pages — birincil trafik sayfaları
    { url: `${SITE_URL}/ingiltere-depo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/londra-depo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/ingiltere-e-ticaret-lojistigi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/siparis-toplama-paketleme`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/ingiltere-depo-fiyatlari`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/turk-sirketleri-icin-ingiltere-depo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/turkiye-ingiltere-lojistik`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/turkiyeden-ingiltereye-satis`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/shopify-ingiltere-depo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/amazon-ingiltere-depo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // Servis sayfaları
    { url: `${SITE_URL}/ingiltere-fulfillment`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/palet-depolama`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/amazon-prep-uk`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/depolama`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/gumrukleme`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/ellecleme`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/nakliye-dagitim`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/e-ticaret-fulfillment`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/shopify-fulfillment`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/amazon-fulfillment`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // Landing sayfaları
    { url: `${SITE_URL}/turkiyeden-ingiltereye-depolama`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/uk-warehousing-fulfilment`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // Lokasyon sayfaları
    { url: `${SITE_URL}/essex-depo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Case studies
    { url: `${SITE_URL}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/case-studies/cruyff-uk-fulfillment`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/krufy-uk-fashion-fulfillment`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/pizza-box-distribution-uk`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/tortilla-uk-distribution`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/uk-auto-parts-warehouse`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/uk-walking-treadmill-distribution`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/arac-koltuk-kaplama-ingiltere-depo`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/tasinabilir-sarj-istasyonu-ingiltere-operasyonu`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    // Blog / içerik cluster
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/blog/ingiltere-depo-rehberi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/ingiltere-fulfillment-nedir`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/amazon-prep-uk-rehberi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/ingiltere-ara-depo-nedir`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/ingiltere-depo-fiyatlari-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/ingiltere-palet-depolama-maliyetleri`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/amazon-fba-vs-uk-fulfillment`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/turkiyeden-ingiltereye-ihracat-rehberi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
