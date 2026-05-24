"use client";

import { useEffect } from "react";
import Script from "next/script";
import type { CookiePrefs } from "./CookieConsent";

const GA_ID = "G-MTYWY5LWCW";
const STORAGE_KEY = "londradepo_cookie_consent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics() {
  // Handle live consent changes (user clicks Accept/Reject on the banner during this session)
  useEffect(() => {
    const handleConsentChange = (e: Event) => {
      const detail = (e as CustomEvent<CookiePrefs>).detail;
      window.gtag?.("consent", "update", {
        analytics_storage: detail.analytics ? "granted" : "denied",
        ad_storage: "denied",
      });
    };
    window.addEventListener("consentChange", handleConsentChange);
    return () => window.removeEventListener("consentChange", handleConsentChange);
  }, []);

  return (
    <>
      {/*
       * Consent Mode v2 — MUST run before gtag.js loads.
       * Reads localStorage so returning visitors who already accepted start
       * with analytics_storage:'granted' and don't lose pageview hits.
       */}
      <Script id="ga4-consent-default" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          var _gaConsent = 'denied';
          try {
            var _stored = localStorage.getItem('${STORAGE_KEY}');
            if (_stored) {
              var _prefs = JSON.parse(_stored);
              if (_prefs && _prefs.decided && _prefs.analytics) { _gaConsent = 'granted'; }
            }
          } catch(e) {}
          gtag('consent', 'default', { analytics_storage: _gaConsent, ad_storage: 'denied' });
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
