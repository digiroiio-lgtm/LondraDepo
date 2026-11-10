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

type Params = Record<string, string | number | undefined>;

function send(event: string, params: Params) {
  if (!hasAnalyticsConsent()) return;
  const page_lang = typeof document !== "undefined" ? document.documentElement.lang : undefined;
  const page_path = typeof location !== "undefined" ? location.pathname : undefined;
  (window as any).gtag?.("event", event, { page_lang, page_path, ...params });
}

export function trackWhatsappClick(source: string) {
  send("whatsapp_click", { event_category: "engagement", source });
}

export function trackPhoneClick(source: string) {
  send("phone_call", { event_category: "engagement", source });
}

export function trackCtaClick(cta_id: string, position: string) {
  send("cta_click", { event_category: "engagement", cta_id, position });
}

export function trackLanguageSwitch(from: string, to: string) {
  send("language_switch", { event_category: "navigation", from, to });
}

export function trackFormStart(form_id: string) {
  send("form_start", { event_category: "conversion", form_id });
}

export function trackQuoteSubmit(details: Params = {}) {
  send("generate_lead", { event_category: "conversion", method: "form", ...details });
}
