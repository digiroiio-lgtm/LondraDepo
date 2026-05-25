"use client";

import { useEffect } from "react";
import type { CookiePrefs } from "./CookieConsent";

/**
 * Forwards live cookie-consent changes to GA4 Consent Mode v2.
 * The actual gtag.js script is loaded via @next/third-parties/google in layout.tsx.
 * The consent *default* is set via an inline <script> in <head> (also in layout.tsx)
 * so it executes synchronously before gtag.js loads.
 */
export default function GoogleAnalytics() {
  useEffect(() => {
    const handleConsentChange = (e: Event) => {
      const detail = (e as CustomEvent<CookiePrefs>).detail;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag?.("consent", "update", {
        analytics_storage: detail.analytics ? "granted" : "denied",
        ad_storage: "denied",
      });
    };
    window.addEventListener("consentChange", handleConsentChange);
    return () => window.removeEventListener("consentChange", handleConsentChange);
  }, []);

  return null;
}
