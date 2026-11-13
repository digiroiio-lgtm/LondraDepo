import type { Metadata, Viewport } from "next";
import CookieConsent from "@/components/CookieConsent";
import ConditionalAnalytics from "@/components/ConditionalAnalytics";
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
    orgNode("en"),
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
