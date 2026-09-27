/* eslint-disable @typescript-eslint/no-explicit-any */

const STORAGE_KEY = "londradepo_cookie_consent";

function hasAnalyticsConsent(): boolean {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const prefs = JSON.parse(raw) as { analytics?: boolean; decided?: boolean };
    return prefs.decided === true && prefs.analytics === true;
  } catch {
    return false;
  }
}

export function trackWhatsappClick(source: string) {
  if (!hasAnalyticsConsent()) return;
  (window as any).gtag?.("event", "whatsapp_click", {
    event_category: "engagement",
    source,
  });
}

export function trackPhoneClick(source: string) {
  if (!hasAnalyticsConsent()) return;
  (window as any).gtag?.("event", "phone_call", {
    event_category: "engagement",
    source,
  });
}

export function trackQuoteSubmit() {
  if (!hasAnalyticsConsent()) return;
  (window as any).gtag?.("event", "generate_lead", {
    event_category: "conversion",
    method: "whatsapp",
  });
}
