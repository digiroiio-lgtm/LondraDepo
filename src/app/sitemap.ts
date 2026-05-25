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
    // Servis sayfaları
    { url: `${SITE_URL}/ingiltere-fulfillment`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/palet-depolama`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/amazon-prep-uk`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // Lokasyon sayfaları
    { url: `${SITE_URL}/essex-depo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Blog / içerik cluster
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/blog/ingiltere-depo-rehberi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/ingiltere-fulfillment-nedir`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog/amazon-prep-uk-rehberi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
