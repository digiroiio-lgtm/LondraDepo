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

/** Topic of the page an event fires on, so GA4 can split leads by cluster (register as an event-scoped custom dimension). */
export function pageGroup(path: string): string {
  const p = path.toLowerCase();
  if (/amazon|fba|private-label/.test(p)) return "amazon";
  if (/shopify/.test(p)) return "shopify";
  if (/import|ithalat|gumruk|customs|konteyner|container|incoterms|antrepo|bonded|cbm|liman|port|felixstowe|tilbury/.test(p)) return "import";
  if (/fulfil|e-ticaret|ecommerce|pick|siparis/.test(p)) return "fulfilment";
  if (/depo|warehous|storage|pallet|palet/.test(p)) return "storage";
  return "other";
}

function send(event: string, params: Params) {
  if (!hasAnalyticsConsent()) return;
  const page_lang = typeof document !== "undefined" ? document.documentElement.lang : undefined;
  const page_path = typeof location !== "undefined" ? location.pathname : undefined;
  // On the standalone quote page, attribute to the page the visitor came from (?from=/en/amazon-prep-uk).
  const from = typeof location !== "undefined" ? new URLSearchParams(location.search).get("from") : null;
  const page_group = from ? pageGroup(from) : page_path ? pageGroup(page_path) : undefined;
  (window as any).gtag?.("event", event, { page_lang, page_path, page_group, ...params });
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
