/** Calendly "Londra Depo" 15-minute call event types (EN and TR). */
const BOOKING = {
  en: "https://calendly.com/digiroiio/londra-depo-15-min-uk-warehousing-call",
  tr: "https://calendly.com/digiroiio/londra-depo-15-dk-ingiltere-depo-gorusmesi",
} as const;

/** Booking URL with UTM tags so Calendly records which page and button sent the visitor. */
export function bookingUrl(lang: "en" | "tr", source: string): string {
  const q = new URLSearchParams({ utm_source: "londradepo.com", utm_medium: "website", utm_campaign: `book_call_${lang}`, utm_content: source });
  return `${BOOKING[lang]}?${q.toString()}`;
}
