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
  title: "Magazyn i fulfillment w Wielkiej Brytanii | LondraDepo",
  description: "Magazynowanie, fulfillment, składowanie palet, Amazon FBA prep i dystrybucja w Wielkiej Brytanii z Rayleigh w Essex, pod Londynem.",
  openGraph: { siteName: "LondraDepo.com", ...ogLocale("pl"), type: "website" },
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
      "@id": `${SITE_URL}/pl#website`,
      url: `${SITE_URL}/pl`,
      name: "LondraDepo.com",
      inLanguage: "pl",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function PolishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={geist.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: GA_CONSENT_SCRIPT }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased">
        {children}
        <CookieConsent lang="pl" />
        <SiteTracker />
        <WebVitals />
        <ConditionalAnalytics gaId={GA_ID} />
        <GaConsentListener gaId={GA_ID} />
      </body>
    </html>
  );
}
