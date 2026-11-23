/**
 * Personalising a first email for one company. Pure functions (no I/O).
 * Only facts the research agent recorded are used (company name, products, contact name, UK evidence);
 * anything that cannot be filled stays as a [placeholder], and sending is blocked until it is edited.
 */

export type Facts = {
  company: string;
  contactName?: string;
  products?: string;
  ukEvidence?: string;
  amazonUk?: boolean;
  lang: "tr" | "en";
};

const clean = (s?: string) => (s ?? "").replace(/\s+/g, " ").trim();
const usable = (s?: string) => {
  const v = clean(s);
  return v && !/^(unknown|yok|none|n\/a|-|—)$/i.test(v) ? v : "";
};

/** First line that ties the email to this company, built only from recorded facts. */
export function openingLine(f: Facts): string {
  const company = clean(f.company);
  const products = usable(f.products).slice(0, 80);
  const uk = usable(f.ukEvidence);
  if (f.lang === "tr") {
    if (products && (uk || f.amazonUk)) return `${company} firmasının ${products} ürünlerini İngiltere'de de sattığını gördük.`;
    if (products) return `${company} firmasının ${products} ürünlerini inceledik.`;
    return "";
  }
  if (products && (uk || f.amazonUk)) return `I noticed ${company} already sells ${products} in the UK.`;
  if (products) return `I came across ${company}'s ${products}.`;
  return "";
}

/** Fills the known placeholders of a template or agent-written message. */
export function personalize(text: string, f: Facts): string {
  const company = clean(f.company);
  const name = usable(f.contactName).split(" ")[0];
  const products = usable(f.products);
  const opening = openingLine(f);
  let t = text;
  // Greeting: use the person's first name when the research found one.
  if (name) {
    t = t.replace(/Merhaba \[(Şirket|İsim)[^\]]*\]( ekibi)?,/, `Merhaba ${name},`).replace(/Hello \[(Company|Name)[^\]]*\]( team)?,/, `Hello ${name},`);
  }
  t = t
    .replace(/\[(Şirket|Company|Marka|Brand)\]/g, company)
    .replace(/\[(İsim|Name) \/ (ekip|team)\]/g, name || (f.lang === "tr" ? `${company} ekibi` : `${company} team`))
    .replace(/\[(İsim|Name)\]/g, name || (f.lang === "tr" ? `${company} ekibi` : `${company} team`));
  if (products) t = t.replace(/\[(ürün|product)\]/gi, products);
  if (opening) t = t.replace(/\[(Şirkete özel ilk cümle|Company-specific first sentence)[^\]]*\]\.?/, opening);
  return t;
}

/** Placeholders still waiting to be filled by hand, e.g. "[ürün]". */
export function remainingPlaceholders(text: string): string[] {
  return [...new Set(text.match(/\[[^\]\n]{2,120}\]/g) ?? [])];
}

// ---------- Sales context shown next to the draft ----------

type LeadLike = { uk_evidence?: string; uk_evidence_url?: string; amazon_uk?: string; ecommerce_url?: string; uk_warehouse?: string; products?: string };
const yes = (v?: string) => /^(yes|evet|true|1)$/i.test((v ?? "").trim());

/** The strongest UK sales signal we have for a company, with where it came from. */
export function ukSignal(l: LeadLike | null | undefined): { signal: string; source?: string } | null {
  if (!l) return null;
  if (yes(l.uk_warehouse)) return { signal: "İngiltere'de deposu / operasyonu var görünüyor", source: l.uk_evidence_url || undefined };
  if (usable(l.uk_evidence)) return { signal: usable(l.uk_evidence).slice(0, 160), source: l.uk_evidence_url || undefined };
  if (yes(l.amazon_uk)) return { signal: "Amazon.co.uk'ta satıyor", source: l.uk_evidence_url || undefined };
  if (usable(l.ecommerce_url)) return { signal: "E-ticaret sitesinden İngiltere'ye gönderim olabilir", source: l.ecommerce_url };
  return null;
}

/** What to offer, from the signal: small stock + fulfilment, FBA prep, or overflow when they already have a UK site. */
export function recommendService(l: LeadLike | null | undefined, group?: string): { service: string; note?: string } {
  if (l && yes(l.uk_warehouse)) return { service: "Taşma / yedek depo", note: "Önce mevcut UK operasyonunu araştırın; teklifi buna göre şekillendirin." };
  if ((l && yes(l.amazon_uk)) || group === "amazon") return { service: "FBA hazırlık + parti sevkiyat", note: "Stok bizde, Amazon depolarına planlı partiler." };
  if (l && (usable(l.uk_evidence) || usable(l.ecommerce_url)) && group !== "importer" && group !== "forwarder") return { service: "Küçük stok + sipariş hazırlama", note: "İngiltere'ye gönderdiği siparişleri yerel stoktan, tek paletle başlayarak." };
  if (group === "importer" || group === "forwarder") return { service: "Konteyner boşaltma + palet depolama + dağıtım" };
  return { service: "Palet depolama + İngiltere içi dağıtım" };
}

export const ADDRESS_TYPES = { sales: "Satış", person: "Kişi", general: "Genel", support: "Destek" } as const;
export type AddressType = keyof typeof ADDRESS_TYPES;

/** What kind of inbox an address is; sales addresses reach a decision maker sooner than support ones. */
export function addressType(email: string): AddressType {
  const local = email.split("@")[0]?.toLowerCase() ?? "";
  if (/^(sales|sale|export|eksport|b2b|partner|partners|business|wholesale|trade|bd|biz|satis|ihracat|handel|distribution|dystrybucja)\b/.test(local)) return "sales";
  if (/(support|service|serwis|reklamac|complaint|returns?|destek|help|care|customer|musteri)/.test(local)) return "support";
  if (/^(info|kontakt|contact|hello|hi|office|biuro|iletisim|mail|admin|team|shop|sklep)\b/.test(local)) return "general";
  return /[a-z]+[._-][a-z]+/.test(local) ? "person" : "general";
}

/** All addresses in a text, best first for a sales email (sales > person > general > support). */
export function rankAddresses(text: string): { email: string; type: AddressType }[] {
  const order: AddressType[] = ["sales", "person", "general", "support"];
  const all = [...new Set((text.match(/[^\s,;<>()]+@[^\s,;<>()]+\.[^\s,;<>()]+/g) ?? []).map((e) => e.replace(/[.,;]+$/, "").toLowerCase()))];
  return all.map((email) => ({ email, type: addressType(email) })).sort((a, b) => order.indexOf(a.type) - order.indexOf(b.type));
}
