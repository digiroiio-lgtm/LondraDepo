/** Pure helpers that link an incoming email to a WebContact company (no I/O, easy to test). */
import { normDomain } from "@/lib/panel/wizard";
import type { Contact } from "@/lib/panel/webcontact";

export type MailMeta = { id: string; threadId: string; from: string; fromName: string; fromEmail: string; subject: string; date: string; snippet: string; autoSubmitted: boolean; listUnsubscribe: string; messageId: string; inReplyTo: string };

export type MailKind = "reply" | "auto_ack" | "other" | "own" | "system";
export type Suggestion = { domain: string; company: string; score: number; why: string };
export type InboxItem = {
  id: string; threadId: string; date: string; from: string; fromEmail: string; subject: string; snippet: string; kind: MailKind;
  domain?: string; company?: string;
  /** Candidate companies when the match was not certain enough to link automatically. */
  suggest?: Suggestion[];
  linked_by?: "auto" | "user";
  /** Linked as a human reply or an automatic confirmation (set when linked). */
  linked_as?: "reply" | "auto_ack";
  ignored?: boolean;
};

const FREE = /^(gmail\.com|googlemail\.com|(hotmail|outlook|live|yahoo|yandex)\.[a-z.]+|icloud\.com|me\.com|aol\.com|proton(mail)?\.(me|com)|mail\.(com|ru)|gmx\.[a-z.]+)$/;
const NOREPLY = /(^|[._-])(no-?reply|do-?not-?reply|donotreply|mailer-daemon|postmaster|bounce|notifications?)([._-]|@)/i;
const ACK = /(talebiniz (alındı|alinmistir|alınmıştır)|mesajınız (alındı|iletildi)|iletişim talebiniz|başvurunuz alındı|we('ve| have) received|thank(s| you) for (contacting|your (message|enquiry|inquiry))|auto(matic)?[- ]?(reply|response)|otomatik yanıt|out of office|ofis dışında)/i;
/** Our own setup / test traffic: never a sales signal. */
const SYSTEM_FROM = /@(google\.com|accounts\.google\.com|workspace-noreply\.google\.com|vercel\.com|github\.com|upstash\.com|londradepo\.com)$/i;
const SYSTEM_SUBJECT = /^\s*(\[deneme\]|(re|fwd?):\s*\[deneme\])|google workspace|security alert|güvenlik uyarısı|verify your|doğrula/i;

export function isSystemMail(m: Pick<MailMeta, "fromEmail" | "subject">): boolean {
  return SYSTEM_FROM.test(m.fromEmail) || SYSTEM_SUBJECT.test(m.subject);
}

/** Domain-like tokens in a text (e.g. "babyjemshop.com" in a sender name or snippet). */
function domainTokens(t: string): string[] {
  return [...new Set((t.toLowerCase().match(/[a-z0-9-]+(\.[a-z0-9-]+)*\.(com|net|org|co\.uk|uk|com\.tr|tr|de|nl|eu|io|shop|store|pl|es|it|fr)\b/g) ?? []).map(normDomain))];
}

export function classify(m: MailMeta, ownAddress: string): MailKind {
  if (m.fromEmail === ownAddress.toLowerCase()) return "own";
  if (isSystemMail(m)) return "system";
  if (m.autoSubmitted || NOREPLY.test(m.fromEmail) || ACK.test(`${m.subject} ${m.snippet}`)) return "auto_ack";
  return "reply";
}

const LEGAL = /\b(ltd|limited|sa|s\.a|a\.s|as|gmbh|inc|llc|sp\. z o\.o|group|grup|san|tic|ve|shop|store|official)\b\.?/g;
const nameKey = (company: string) => fold(company).replace(/\(.*?\)/g, " ").replace(LEGAL, " ").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * All plausible companies for an email, best first, each with a score and the reason:
 * Gmail thread 100 · sender domain 90 · saved address 85 · domain named in the email 70 · company name 60 · brand word 50.
 */
export function rankContacts(m: MailMeta, contacts: Contact[]): Suggestion[] {
  const best = new Map<string, Suggestion>();
  const add = (c: Contact, score: number, why: string) => {
    const cur = best.get(c.domain);
    if (!cur || cur.score < score) best.set(c.domain, { domain: c.domain, company: c.company, score, why });
  };
  const fallbackOf = (c: Contact) => normDomain(c.email_fallback);
  const sameDomain = (c: Contact, d: string) => c.domain === d || d.endsWith(`.${c.domain}`) || c.domain.endsWith(`.${d}`) || (fallbackOf(c) !== "" && fallbackOf(c) === d);
  const sender = normDomain(m.fromEmail);
  const tokens = domainTokens(`${m.fromName} ${m.subject} ${m.snippet} ${m.listUnsubscribe}`);
  const text = fold(`${m.fromName} ${m.subject}`);
  const brandText = fold(`${m.fromName} ${m.subject} ${m.snippet} ${tokens.join(" ")}`).replace(/[^a-z0-9]/g, "");
  for (const c of contacts) {
    if (c.thread_id && c.thread_id === m.threadId) add(c, 100, "panelden gönderilen e-postanın konuşması");
    if (sender && !FREE.test(sender) && sameDomain(c, sender)) add(c, 90, `gönderen alan adı ${sender}`);
    if (c.email_fallback && m.fromEmail && c.email_fallback.toLowerCase().includes(m.fromEmail)) add(c, 85, "kayıtlı e-posta adresi");
    const t = tokens.find((d) => sameDomain(c, d));
    if (t) add(c, 70, `e-postada geçen alan adı ${t}`);
    const n = nameKey(c.company);
    if (n.length >= 4 && new RegExp(`(^|[^a-z0-9])${esc(n)}([^a-z0-9]|$)`).test(text)) add(c, 60, `konuda şirket adı "${c.company}"`);
    // Brand word: the first part of the company's domain (e.g. "babyjem") inside the sender, subject or snippet.
    const brand = c.domain.split(".")[0].replace(/[^a-z0-9]/g, "");
    const brandName = n.split(" ")[0] ?? "";
    if ((brand.length >= 5 && brandText.includes(brand)) || (brandName.length >= 5 && brandText.includes(brandName))) add(c, 50, `marka adı "${brand.length >= 5 && brandText.includes(brand) ? brand : brandName}"`);
  }
  return [...best.values()].sort((a, b) => b.score - a.score);
}

/** A match is linked automatically only when it is certain: a strong signal, or a single medium one. */
export function autoMatch(ranked: Suggestion[]): Suggestion | undefined {
  const [top, second] = ranked;
  if (!top) return undefined;
  if (top.score >= 85 && (!second || second.score < top.score)) return top;
  if (top.score >= 60 && !second) return top;
  return undefined;
}

/** Backwards-compatible single match (certain matches only). */
export function matchContact(m: MailMeta, contacts: Contact[]): Contact | undefined {
  const hit = autoMatch(rankContacts(m, contacts));
  return hit ? contacts.find((c) => c.domain === hit.domain) : undefined;
}

/** Lower-case, Turkish letters folded, so "UĞUR" and "ugur" compare equal. */
function fold(s: string): string {
  return s.toLocaleLowerCase("tr").replace(/[çğıöşü]/g, (ch) => ({ ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u" })[ch] as string).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/** Rebuilds the matching fields from a stored inbox row (used to re-match after new companies are imported). */
export function metaOf(i: InboxItem): MailMeta {
  return { id: i.id, threadId: i.threadId, from: i.from, fromName: i.from.replace(/<[^>]+>/, "").replace(/"/g, "").trim(), fromEmail: i.fromEmail, subject: i.subject, date: i.date, snippet: i.snippet, autoSubmitted: false, listUnsubscribe: "", messageId: "", inReplyTo: "" };
}

