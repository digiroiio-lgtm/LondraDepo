import type { Metadata, Viewport } from "next";
import CookieConsent from "@/components/CookieConsent";
import ConditionalAnalytics from "@/components/ConditionalAnalytics";
import GaConsentListener from "@/components/GoogleAnalytics";
import TrClickTracker from "@/components/TrClickTracker";
import "../globals.css";
import { geist } from "../font";
import { GA_ID, GA_CONSENT_SCRIPT } from "@/lib/consent-script";

import { orgNode } from "@/lib/org";
import { SITE_URL } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b2545",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "İngiltere Depo, Fulfillment ve Londra Lojistiği | LondraDepo",
  description:
    "Türkiye'den İngiltere'ye ihracat yapanlar için İngiltere depo, Londra depo, fulfillment, palet depolama ve dağıtım çözümleri. Hızlı teklif alın.",
  keywords: [
    "İngiltere depo",
    "İngiltere'de depo",
    "Londra depo",
    "İngiltere warehouse",
    "UK warehouse",
    "İngiltere fulfillment",
    "UK fulfillment",
    "İngiltere lojistik",
    "İngiltere dağıtım merkezi",
    "İngiltere palet depolama",
    "İngiltere ürün deposu",
    "İngiltere gıda deposu",
    "İngiltere stok deposu",
    "İngiltere e-ticaret deposu",
    "İngiltere lojistik partneri",
    "İngiltere'ye ihracat",
    "İngiltere Amazon prep",
    "İngiltere Türk deposu",
  ],
  openGraph: {
    title: "İngiltere Depo ve Fulfillment Çözümleri | LondraDepo",
    description:
      "Türkiye'den İngiltere'ye ihracat için Londra depo, fulfillment ve dağıtım hizmetleri. Hızlı teklif için WhatsApp'tan yazın.",
    url: SITE_URL,
    siteName: "LondraDepo.com",
    locale: "tr_TR",
    type: "website",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }, { url: "/icon.png", type: "image/png", sizes: "192x192" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    orgNode("tr"),
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "LondraDepo.com",
      inLanguage: "tr-TR",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-depo`,
      name: "İngiltere Depo ve Fulfillment Hizmeti",
      provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
      serviceType: "Warehousing",
      description: "UK depolama, fulfillment, palet depolama, Amazon prep ve dağıtım hizmetleri.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: SITE_URL,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-fulfillment`,
      name: "İngiltere E-Ticaret Fulfillment Hizmeti",
      provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
      serviceType: "Ecommerce Fulfillment",
      description: "Sipariş toplama, paketleme ve sevk hizmetleri. Shopify ve Amazon uyumlu UK fulfillment.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/e-ticaret-fulfillment`,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-gumrukleme`,
      name: "İngiltere Gümrükleme Hizmeti",
      provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
      serviceType: "Customs Clearance Coordination",
      description: "İngiltere'ye ithalatta gümrük beyannamesi ve GTİP danışmanlığı (Arca Trade Group gümrük ekibi), gümrükten depoya teslim.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/gumrukleme`,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-ellecleme`,
      name: "İngiltere Elleçleme ve Yükleme/Boşaltma Hizmeti",
      provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
      serviceType: "Goods Handling",
      description: "Araç boşaltma/yükleme, palet ve koli elleçleme, ürün kabul, sıralama, yeniden paketleme, etiketleme ve sevkiyat hazırlama.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/ellecleme`,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-dagitim`,
      name: "İngiltere Nakliye ve Dağıtım",
      provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
      serviceType: "Distribution",
      description: "Toplama hizmetleri, depo transferleri ve İngiltere geneli teslimat koordinasyonu.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/nakliye-dagitim`,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-shopify`,
      name: "Shopify İngiltere Fulfillment",
      provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
      serviceType: "Shopify Fulfillment",
      description: "Shopify üzerinden satış yapan işletmeler için UK fulfillment. LondraDepo, Shopify'ın resmi partneri değildir.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/shopify-fulfillment`,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-amazon`,
      name: "Amazon İngiltere Fulfillment",
      provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
      serviceType: "Amazon Fulfillment",
      description: "Amazon üzerinden satış yapan işletmeler için UK fulfillment ve stok yönetimi. LondraDepo, Amazon'un resmi partneri değildir.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/amazon-fulfillment`,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={geist.variable}>
      <head>
        {/* Consent Mode v2 default — must run before gtag.js (afterInteractive) */}
        <script dangerouslySetInnerHTML={{ __html: GA_CONSENT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <CookieConsent lang="tr" />
        <TrClickTracker />
        <ConditionalAnalytics gaId={GA_ID} />
        <GaConsentListener gaId={GA_ID} />
      </body>
    </html>
  );
}

