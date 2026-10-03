import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieConsent from "@/components/CookieConsent";
import ConditionalAnalytics from "@/components/ConditionalAnalytics";
import GaConsentListener from "@/components/GoogleAnalytics";
import "./globals.css";

const GA_ID = "G-MTYWY5LWCW";
const STORAGE_KEY = "londradepo_cookie_consent";

/**
 * Consent Mode v2 default — runs synchronously before gtag.js loads.
 * Must live in <head> so it executes before any afterInteractive scripts.
 * Reads localStorage to restore consent for returning visitors who already accepted.
 */
const GA_CONSENT_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
var _gac = 'denied';
try {
  var _s = localStorage.getItem('${STORAGE_KEY}');
  if (_s) { var _p = JSON.parse(_s); if (_p && _p.decided && _p.analytics) { _gac = 'granted'; } }
} catch(e) {}
gtag('consent', 'default', { analytics_storage: _gac, ad_storage: 'denied' });
`;

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const SITE_URL = "https://www.londradepo.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b2545",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "İngiltere Depo, Fulfillment ve Londra Lojistik Çözümleri | LondraDepo.com",
  description:
    "Türkiye'den İngiltere'ye ihracat yapan firmalar için İngiltere depo, Londra depo, İngiltere fulfillment, palet depolama, ürün kabul ve dağıtım çözümleri. İngiltere'de fiziksel operasyon gücüyle hızlı teklif alın.",
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
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "İngiltere Depo ve Fulfillment Çözümleri | LondraDepo.com",
    description:
      "Türkiye'den İngiltere'ye ihracat için Londra depo, fulfillment ve dağıtım hizmetleri. Hızlı teklif için WhatsApp'tan yazın.",
    url: SITE_URL,
    siteName: "LondraDepo.com",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "LondraDepo.com — İngiltere depo ve fulfillment (Rayleigh, Essex)" }],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "İngiltere Depo ve Fulfillment Çözümleri | LondraDepo.com",
    description:
      "Türkiye'den İngiltere'ye ihracat için Londra depo, fulfillment ve dağıtım hizmetleri.",
    images: ["/og-default.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "LondraDepo.com",
      legalName: "Arca Trade Group Ltd",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE_URL}/og-default.jpg`,
      identifier: {
        "@type": "PropertyValue",
        propertyID: "UK Companies House",
        value: "13247691",
      },
      hasMap:
        "https://www.google.com/maps/search/?api=1&query=Unit+19+Arterial+Park+Arterial+Road+Rayleigh+SS6+7FY",
      description:
        "UK depolama, gümrükleme koordinasyonu, elleçleme, e-ticaret fulfillment, Shopify ve Amazon fulfillment, pick & pack ve UK dağıtım hizmetleri sunan operasyon partneri. İngiltere'de kendi deponuzu kurmadan satış yapın.",
      areaServed: ["London", "Essex", "Birmingham", "Manchester", "United Kingdom"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Unit 19 Arterial Park, Arterial Road",
        addressLocality: "Rayleigh",
        addressRegion: "Essex",
        postalCode: "SS6 7FY",
        addressCountry: "GB",
      },
      telephone: "+447554195190",
      knowsAbout: ["UK Warehousing", "Fulfillment", "Pallet Storage", "Amazon Prep", "UK Distribution", "Turkish Export to UK"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["Turkish", "English"],
        url: "https://wa.me/447554195190?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.",
      },
      sameAs: [
        "https://find-and-update.company-information.service.gov.uk/company/13247691",
        "https://www.linkedin.com/company/arcatradegroup/",
        "https://bifa.org/members/arca-trade-group-ltd/",
        "https://in.kompass.com/c/arca-trade-group-ltd/gbcs13970309/",
        "https://open.endole.co.uk/insight/company/13247691-arca-trade-group-ltd",
      ],
    },
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
      name: "İngiltere Gümrükleme Koordinasyon Desteği",
      provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
      serviceType: "Customs Clearance Coordination",
      description: "İngiltere'ye ithalat sürecinde gümrükleme koordinasyon desteği. İthalat belgeleri koordinasyonu ve sevkiyat varış desteği.",
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
        <CookieConsent />
        <ConditionalAnalytics />
        <GaConsentListener />
      </body>
      {/* Load gtag.js via @next/third-parties — strategy="afterInteractive", Server Component */}
      <GoogleAnalytics gaId={GA_ID} />
    </html>
  );
}

