import type { Metadata, Viewport } from "next";
import CookieConsent from "@/components/CookieConsent";
import ConditionalAnalytics from "@/components/ConditionalAnalytics";
import GaConsentListener from "@/components/GoogleAnalytics";
import "../globals.css";
import { geist } from "../font";
import { GA_ID, GA_CONSENT_SCRIPT } from "@/lib/consent-script";
import { SITE_URL } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b2545",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "UK Warehousing & Fulfilment near London | LondraDepo",
  description: "UK warehousing, fulfilment, pallet storage, Amazon prep and UK distribution from Rayleigh, Essex, near London.",
  openGraph: { siteName: "LondraDepo.com", locale: "en_GB", type: "website" },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }, { url: "/icon.png", type: "image/png", sizes: "192x192" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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
      url: `${SITE_URL}/en`,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg` },
      description:
        "UK third-party logistics warehouse in Rayleigh, Essex, near London, providing warehousing, pallet storage, container unloading, ecommerce fulfilment, Amazon FBA prep and UK-wide distribution for international brands. Operated by Arca Trade Group Ltd, which also provides international freight and customs clearance.",
      foundingDate: "2021",
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
      email: "Sales@arcatrade.co.uk",
      vatID: "GB353315322",
      knowsAbout: ["UK warehousing", "Ecommerce fulfilment", "Pallet storage", "Amazon FBA prep", "UK distribution", "Customs clearance coordination"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+447554195190",
        availableLanguage: ["English", "Turkish"],
      },
      knowsLanguage: ["en", "tr"],
      sameAs: [
        "https://find-and-update.company-information.service.gov.uk/company/13247691",
        "https://www.linkedin.com/company/arcatradegroup/",
        "https://bifa.org/members/arca-trade-group-ltd/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/en#website`,
      url: `${SITE_URL}/en`,
      name: "LondraDepo.com",
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: GA_CONSENT_SCRIPT }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased">
        {children}
        <CookieConsent lang="en" />
        <ConditionalAnalytics gaId={GA_ID} />
        <GaConsentListener gaId={GA_ID} />
      </body>
    </html>
  );
}
