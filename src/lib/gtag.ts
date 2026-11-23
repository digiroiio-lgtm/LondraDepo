/* eslint-disable @typescript-eslint/no-explicit-any */

/*
 * Advanced Consent Mode: gtag.js loads for every visitor. Without analytics consent, Consent Mode sends
 * cookieless, identifier-free pings (GA4 models them); with consent, normal cookies. Ads storage is always
 * denied. Never put personal data (name, email, phone, message text) into event parameters.
 */

// Never use GA4 reserved names (source, medium, campaign, term, content) as event parameters:
// GA4 reads them as traffic-source fields and rewrites the session's attribution.
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

function send(event: string, params: Params, opts: { beacon?: boolean } = {}) {
  if (typeof window === "undefined") return;
  const page_lang = typeof document !== "undefined" ? document.documentElement.lang : undefined;
  const page_path = typeof location !== "undefined" ? location.pathname : undefined;
  // On the standalone quote page, attribute to the page the visitor came from (?from=/en/amazon-prep-uk).
  const from = typeof location !== "undefined" ? new URLSearchParams(location.search).get("from") : null;
  const page_group = from ? pageGroup(from) : page_path ? pageGroup(page_path) : undefined;
  (window as any).gtag?.("event", event, { page_lang, page_path, page_group, ...params, ...(opts.beacon ? { transport_type: "beacon" } : {}) });
}

/** Generic event for the site-wide tracker and form funnel (same page context as the helpers below). */
export function trackEvent(event: string, params: Params = {}, opts: { beacon?: boolean } = {}) {
  send(event, params, opts);
}

/** What the prefilled WhatsApp text is: the form's quote summary, a short prefilled line, or empty. */
export function waVariant(href: string): string {
  let text = "";
  try {
    text = new URL(href).searchParams.get("text") ?? "";
  } catch {
    return "unknown";
  }
  if (!text) return "empty";
  if (/TEKLİF TALEBİ|QUOTE REQUEST/i.test(text)) return "quote_summary";
  return "prefilled";
}

export function trackWhatsappClick(source: string, wa_variant?: string) {
  send("whatsapp_click", { event_category: "engagement", click_source: source, wa_variant });
}

export function trackPhoneClick(source: string) {
  send("phone_call", { event_category: "engagement", click_source: source });
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
