"use client";

import { useEffect } from "react";
import type { CookiePrefs } from "./CookieConsent";

/**
 * Forwards live cookie-consent changes to GA4 Consent Mode v2.
 * gtag.js loads for every visitor (Advanced Consent Mode) via ConditionalAnalytics.
 * The consent *default* is set via an inline <script> in <head> (also in layout.tsx)
 * so it executes synchronously before gtag.js loads.
 */
export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  useEffect(() => {
    const handleConsentChange = (e: Event) => {
      const detail = (e as CustomEvent<CookiePrefs>).detail;
      const analyticsGranted = detail.decided && detail.analytics;
      // Advanced Consent Mode: no ga-disable switch; with consent denied gtag sends cookieless pings only.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag?.("consent", "update", {
        analytics_storage: analyticsGranted ? "granted" : "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      // Banner acceptance rate (sent after the update, so it follows the chosen mode).
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag?.("event", "consent_choice", { analytics: analyticsGranted ? "granted" : "denied" });
    };
    window.addEventListener("consentChange", handleConsentChange);
    return () => window.removeEventListener("consentChange", handleConsentChange);
  }, [gaId]);

  return null;
}
