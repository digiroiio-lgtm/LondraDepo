"use client";

import { useEffect } from "react";
import type { CookiePrefs } from "./CookieConsent";

/**
 * Forwards live cookie-consent changes to GA4 Consent Mode v2.
 * The gtag.js script loads after analytics consent via ConditionalAnalytics.
 * The consent *default* is set via an inline <script> in <head> (also in layout.tsx)
 * so it executes synchronously before gtag.js loads.
 */
export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  useEffect(() => {
    const handleConsentChange = (e: Event) => {
      const detail = (e as CustomEvent<CookiePrefs>).detail;
      const analyticsGranted = detail.decided && detail.analytics;
      // Disable data transmission when consent is withdrawn, including SPA pageviews.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any)[`ga-disable-${gaId}`] = !analyticsGranted;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag?.("consent", "update", {
        analytics_storage: analyticsGranted ? "granted" : "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    };
    window.addEventListener("consentChange", handleConsentChange);
    return () => window.removeEventListener("consentChange", handleConsentChange);
  }, [gaId]);

  return null;
}
