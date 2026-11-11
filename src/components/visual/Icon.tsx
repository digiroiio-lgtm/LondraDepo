/**
 * Original line-icon set for LondraDepo (24×24, stroke = currentColor). Drawn for this site; no third-party assets.
 * Icons are decorative next to a visible heading, so they are aria-hidden.
 */
export type IconName =
  | "warehouse" | "pallet" | "box" | "truck" | "ship" | "container" | "customs" | "document" | "label"
  | "returns" | "chart" | "globe" | "chat" | "shield" | "clock" | "pin" | "cart" | "scan" | "check"
  | "pound" | "users" | "plane" | "rail" | "forklift" | "calendar" | "layers" | "search" | "star"
  | "phone" | "mail" | "warning" | "bolt" | "handshake" | "rocket" | "trophy" | "eye" | "lock" | "link"
  | "refresh" | "utensils" | "battery" | "building" | "book" | "activity" | "map" | "user" | "settings" | "inbox";

const P: Record<IconName, React.ReactNode> = {
  warehouse: <><path d="M3 10 12 4l9 6v10H3z" /><path d="M7 20v-6h10v6" /><path d="M7 17h10" /></>,
  pallet: <><rect x="5" y="5" width="14" height="9" rx="1" /><path d="M3 17h18M5 17v3M12 17v3M19 17v3" /><path d="M9 5v9M15 5v9" /></>,
  box: <><path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5z" /><path d="M3 7.5 12 12l9-4.5M12 12v9" /></>,
  truck: <><path d="M2 6h11v10H2zM13 10h4l4 3v3h-8" /><circle cx="6" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></>,
  ship: <><path d="M3 15h18l-2.5 5h-13z" /><path d="M6 15V9h12v6M9 9V5h6v4" /></>,
  container: <><rect x="2.5" y="7" width="19" height="10" rx="1" /><path d="M6.5 7v10M10.5 7v10M14.5 7v10M18.5 7v10" /></>,
  customs: <><path d="M12 3 4 6v5c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6z" /><path d="m9 12 2 2 4-4" /></>,
  document: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></>,
  label: <><path d="M3 12V4h8l10 10-8 8z" /><circle cx="7.5" cy="8" r="1.5" /></>,
  returns: <><path d="M4 9h11a5 5 0 0 1 0 10H8" /><path d="m8 5-4 4 4 4" /></>,
  chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" /></>,
  chat: <><path d="M4 5h16v11H9l-5 4z" /><path d="M8 10h8M8 13h5" /></>,
  shield: <><path d="M12 3 4 6v5c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6z" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  pin: <><path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></>,
  cart: <><path d="M3 4h2l2.5 11h11L21 7H6.2" /><circle cx="9" cy="19" r="1.5" /><circle cx="17" cy="19" r="1.5" /></>,
  scan: <><path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4" /><path d="M8 9v6M11 9v6M14 9v6M16.5 9v6" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
  pound: <><path d="M16 6.5A4 4 0 0 0 9 9v9M6 13h7M6 18h11" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><circle cx="17" cy="9" r="2.5" /><path d="M16 14a5 5 0 0 1 5 5" /></>,
  plane: <><path d="M2 14 22 6l-6 14-3-6z" /><path d="m13 14-3 4" /></>,
  rail: <><rect x="6" y="3" width="12" height="13" rx="3" /><path d="M6 10h12M9 20l-2 2M15 20l2 2M9 13h.01M15 13h.01" /></>,
  forklift: <><path d="M4 18V8h6l3 5v5" /><path d="M17 4v14h4" /><path d="M13 13h4" /><circle cx="6.5" cy="18.5" r="1.5" /><circle cx="11.5" cy="18.5" r="1.5" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 13 9 5 9-5" /></>,
  search: <><circle cx="11" cy="11" r="6" /><path d="m20 20-4.5-4.5" /></>,
  star: <><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" /></>,
  phone: <><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  warning: <><path d="M12 3 2 20h20z" /><path d="M12 10v4M12 17h.01" /></>,
  bolt: <><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></>,
  handshake: <><path d="m3 11 4-4 4 2 3-2 4 1 3 3" /><path d="m7 7-4 4 5 5 2-1 2 2 2-1 2 1 3-3-4-4" /><path d="m10 15 2 2M12 13l2 2" /></>,
  rocket: <><path d="M12 2c4 3 6 7 5 12H7C6 9 8 5 12 2z" /><circle cx="12" cy="9" r="2" /><path d="M7 14l-3 4h4M17 14l3 4h-4M10 18l2 4 2-4" /></>,
  trophy: <><path d="M7 4h10v5a5 5 0 0 1-10 0z" /><path d="M7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4M12 14v4M8 21h8M9 18h6" /></>,
  eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
  lock: <><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  link: <><path d="M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1" /><path d="M14 10a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1" /></>,
  refresh: <><path d="M20 11a8 8 0 0 0-14-4L4 9" /><path d="M4 4v5h5" /><path d="M4 13a8 8 0 0 0 14 4l2-2" /><path d="M20 20v-5h-5" /></>,
  utensils: <><path d="M7 3v8a2 2 0 0 0 2 2v8M5 3v6M9 3v6" /><path d="M17 21V3c-2 1-3 4-3 7h3" /></>,
  battery: <><rect x="3" y="7" width="16" height="10" rx="2" /><path d="M21 10v4M11 9l-2 3h3l-2 3" /></>,
  building: <><rect x="5" y="3" width="14" height="18" rx="1" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M11 21v-3h2v3" /></>,
  book: <><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" /><path d="M4 19a2 2 0 0 1 2-2h13" /></>,
  activity: <><path d="M3 12h4l3-7 4 14 3-7h4" /></>,
  map: <><path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2z" /><path d="M9 4v14M15 6v14" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></>,
  inbox: <><path d="M3 13h5l1 3h6l1-3h5" /><path d="M5 5h14l2 8v6H3v-6z" /></>,
};

export default function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      {P[name]}
    </svg>
  );
}

/** Pick an icon from a heading (English or Turkish keywords). Falls back to a neutral check mark. */
const RULES: [RegExp, IconName][] = [
  [/^(booking|randevu|teslim saati|delivery slot)/i, "calendar"],
  [/amazon|fba|fbm|fnsku/i, "box"],
  [/shopify|ecommerce|e-ticaret|online|order|sipariş|channel|kanal|marketplace|pazaryeri/i, "cart"],
  [/pick|pack|paketle|topla/i, "scan"],
  [/return|iade/i, "returns"],
  [/label|etiket|relabel/i, "label"],
  [/custom|gümrük|declaration|beyanname|clearance|eori|vat|kdv|duty|vergi/i, "customs"],
  [/document|belge|paperwork|evrak|invoice|fatura|pre-advice|ön bildirim|checklist|kontrol listesi/i, "document"],
  [/container|konteyner|unload|boşalt|devanning|fcl|lcl/i, "container"],
  [/port|liman|ship|sea|deniz|vessel|gemi/i, "ship"],
  [/air|hava/i, "plane"],
  [/rail|demiryolu/i, "rail"],
  [/deliver|teslim|distribution|dağıtım|dispatch|sevk|haul|taşıma|transport|nakliye|freight|cross-dock|carrier|kargo/i, "truck"],
  [/pallet|palet|racking|raf|bulky|hacimli/i, "pallet"],
  [/stock|stok|wms|inventory|report|rapor|visibility|görünürlük|tracking|takip/i, "chart"],
  [/goods-in|mal kabul|receiv|count|sayım|check|kontrol|inspection|damage|hasar/i, "search"],
  [/storage|depola|warehouse|depo|capacity|kapasite|space/i, "warehouse"],
  [/price|pricing|cost|fiyat|maliyet|quote|teklif|£/i, "pound"],
  [/language|türkçe|turkish|english|chat|communicat|iletişim|contact/i, "chat"],
  [/secure|security|güvenli|insurance|sigorta|cctv/i, "shield"],
  [/time|süre|fast|hızlı|same-day|aynı gün|next-day|schedule|program/i, "clock"],
  [/location|konum|essex|london|londra|rayleigh|distance|mesafe/i, "pin"],
  [/team|ekip|staff|personel|people|references|referans|client|müşteri/i, "users"],
  [/company|şirket|market entry|pazara|export|ihracat|import|ithalat|global/i, "globe"],
  [/plan|calendar|takvim|\beta\b|book|slot|randevu|appointment/i, "calendar"],
  [/handling|elleçleme|forklift|repack/i, "forklift"],
  [/sector|sektör|industr|layer/i, "layers"],
];

export function iconFor(title: string, detail = ""): IconName {
  // The heading decides first; the description is only a fallback.
  for (const src of [title, detail]) for (const [re, name] of RULES) if (re.test(src)) return name;
  return "check";
}
