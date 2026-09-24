/* eslint-disable @typescript-eslint/no-explicit-any */

export function trackWhatsappClick(source: string) {
  (window as any).gtag?.("event", "whatsapp_click", {
    event_category: "engagement",
    source,
  });
}

export function trackPhoneClick(source: string) {
  (window as any).gtag?.("event", "phone_call", {
    event_category: "engagement",
    source,
  });
}

export function trackQuoteSubmit() {
  (window as any).gtag?.("event", "generate_lead", {
    event_category: "conversion",
    method: "whatsapp",
  });
}
