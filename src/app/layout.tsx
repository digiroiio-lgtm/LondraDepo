import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import CookieConsent from "@/components/CookieConsent";
import ConditionalAnalytics from "@/components/ConditionalAnalytics";
import "./globals.css";

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
    locale: "tr_TR",
    type: "website",
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
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
      description:
        "İngiltere depo, fulfillment ve dağıtım çözümleri sunan operasyon partneri. Türkiye'den İngiltere'ye ihracat yapan markalar için UK warehouse, palet depolama ve Amazon prep hizmetleri.",
      areaServed: ["London", "Essex", "Birmingham", "Manchester", "United Kingdom"],
      address: {
        "@type": "PostalAddress",
        addressCountry: "GB",
        addressRegion: "Essex",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["Turkish", "English"],
        url: "https://wa.me/447554195190?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.",
      },
      sameAs: [],
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
      name: "İngiltere Fulfillment Hizmeti",
      provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
      serviceType: "Fulfillment",
      description: "Sipariş toplama, paketleme ve sevk hizmetleri. Amazon, Etsy, Shopify uyumlu UK fulfillment.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/ingiltere-fulfillment`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "İngiltere'de depo hizmetiniz hangi firmalar için uygun?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Türkiye'den İngiltere'ye ihracat yapan markalar, e-ticaret satıcıları, toptancılar, gıda üreticileri ve ithalatçılar için uygundur.",
          },
        },
        {
          "@type": "Question",
          name: "İngiltere fulfillment hizmeti veriyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Sipariş hazırlama, paketleme ve sevk süreçlerine uygun fulfillment desteği sunuyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Paletli ürün kabul ediyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. İngiltere palet depolama ihtiyacı olan işletmelere uygun çözümler sağlıyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Amazon, Etsy ve Shopify satıcıları için uygun musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. İngiltere Amazon prep, sipariş hazırlama ve dağıtım operasyonlarına uygun yapı sunuyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "İngiltere deponuz hangi bölgelere hizmet veriyor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Essex merkezli operasyonumuz Londra, Birmingham, Manchester ve tüm İngiltere'ye dağıtım yapabilmektedir.",
          },
        },
      ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <CookieConsent />
        <ConditionalAnalytics />
      </body>
    </html>
  );
}

