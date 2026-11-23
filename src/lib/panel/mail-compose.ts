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
