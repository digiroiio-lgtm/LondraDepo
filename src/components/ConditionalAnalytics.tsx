"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { CookiePrefs } from "./CookieConsent";

const STORAGE_KEY = "londradepo_cookie_consent";

function readConsent(): CookiePrefs | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CookiePrefs) : null;
  } catch {
    return null;
  }
}

export default function ConditionalAnalytics() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    // Read initial state
    const prefs = readConsent();
    if (prefs?.decided && prefs.analytics) {
      setAnalyticsEnabled(true);
    }

    // Listen for consent changes
    const handleConsentChange = (e: Event) => {
      const detail = (e as CustomEvent<CookiePrefs>).detail;
      setAnalyticsEnabled(detail.analytics);
    };

    window.addEventListener("consentChange", handleConsentChange);
    return () => window.removeEventListener("consentChange", handleConsentChange);
  }, []);

  if (!analyticsEnabled) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
