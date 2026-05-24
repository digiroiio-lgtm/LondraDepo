"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import type { CookiePrefs } from "./CookieConsent";

const GA_ID = "G-MTYWY5LWCW";
const STORAGE_KEY = "londradepo_cookie_consent";

function readConsent(): CookiePrefs | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CookiePrefs) : null;
  } catch {
    return null;
  }
}

export default function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const prefs = readConsent();
    if (prefs?.decided && prefs.analytics) {
      setEnabled(true);
    }

    const handleConsentChange = (e: Event) => {
      const detail = (e as CustomEvent<CookiePrefs>).detail;
      setEnabled(detail.analytics);
    };

    window.addEventListener("consentChange", handleConsentChange);
    return () => window.removeEventListener("consentChange", handleConsentChange);
  }, []);

  if (!enabled) return null;

  return (
    <>
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
