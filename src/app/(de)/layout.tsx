import type { Metadata, Viewport } from "next";
import { ogLocale } from "@/lib/locales";
import CookieConsent from "@/components/CookieConsent";
import ConditionalAnalytics from "@/components/ConditionalAnalytics";
import SiteTracker from "@/components/SiteTracker";
import WebVitals from "@/components/WebVitals";
import GaConsentListener from "@/components/GoogleAnalytics";
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
  title: "Lager und Fulfillment in Großbritannien | LondraDepo",
  description: "Lagerung, Fulfillment, Palettenlager, Amazon FBA Prep und Distribution in Großbritannien aus Rayleigh, Essex, nahe London.",
  openGraph: { siteName: "LondraDepo.com", ...ogLocale("de"), type: "website" },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }, { url: "/icon.png", type: "image/png", sizes: "192x192" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    orgNode("en"),
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/de#website`,
      url: `${SITE_URL}/de`,
      name: "LondraDepo.com",
      inLanguage: "de",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function GermanRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={geist.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: GA_CONSENT_SCRIPT }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased">
        {children}
        <CookieConsent lang="de" />
        <SiteTracker />
        <WebVitals />
        <ConditionalAnalytics gaId={GA_ID} />
        <GaConsentListener gaId={GA_ID} />
      </body>
    </html>
  );
}
