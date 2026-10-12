import { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

// Omit lastmod until a verified content modification date is maintained per URL.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Ana sayfalar
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/ingiltere-depo-avantajlari`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/hakkimizda`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/iletisim`, changeFrequency: "monthly", priority: 0.8 },
    // P0 Power Pages — birincil trafik sayfaları
    { url: `${SITE_URL}/ingiltere-depo`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/londra-depo`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/ingiltere-e-ticaret-lojistigi`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/siparis-toplama-paketleme`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/ingiltere-depo-fiyatlari`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/turk-sirketleri-icin-ingiltere-depo`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/turkiye-ingiltere-lojistik`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/turkiyeden-ingiltereye-satis`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/shopify-ingiltere-depo`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/amazon-ingiltere-depo`, changeFrequency: "monthly", priority: 0.9 },
    // Servis sayfaları
    { url: `${SITE_URL}/ingiltere-fulfillment`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/palet-depolama`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/amazon-prep-uk`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/depolama`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/gumrukleme`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/ellecleme`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/nakliye-dagitim`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/e-ticaret-fulfillment`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/shopify-fulfillment`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/amazon-fulfillment`, changeFrequency: "monthly", priority: 0.9 },
    // Landing sayfaları
    { url: `${SITE_URL}/turkiyeden-ingiltereye-depolama`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/uk-warehousing-fulfilment`, changeFrequency: "monthly", priority: 0.9 },
    // Lokasyon sayfaları
    { url: `${SITE_URL}/essex-depo`, changeFrequency: "monthly", priority: 0.8 },
    // Case studies
    { url: `${SITE_URL}/case-studies`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/case-studies/cruyff-uk-fulfillment`, changeFrequency: "monthly", priority: 0.6 },

    { url: `${SITE_URL}/case-studies/pizza-box-distribution-uk`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/tortilla-uk-distribution`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/uk-auto-parts-warehouse`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/uk-walking-treadmill-distribution`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/arac-koltuk-kaplama-ingiltere-depo`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/tasinabilir-sarj-istasyonu-ingiltere-operasyonu`, changeFrequency: "monthly", priority: 0.6 },
    // Blog / içerik cluster
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/blog/ingiltere-depo-rehberi`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/ingiltere-fulfillment-nedir`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/amazon-prep-uk-rehberi`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/ingiltere-ara-depo-nedir`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/ingiltere-depo-fiyatlari-2026`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/ingiltere-palet-depolama-maliyetleri`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/amazon-fba-vs-uk-fulfillment`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/turkiyeden-ingiltereye-ihracat-rehberi`, changeFrequency: "monthly", priority: 0.7 },
    // Yasal sayfalar
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/cookie-policy`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/sozlesme-kosullari`, changeFrequency: "yearly", priority: 0.5 },
  ];
}
