/** Pure helpers that link an incoming email to a WebContact company (no I/O, easy to test). */
import { normDomain } from "@/lib/panel/wizard";
import type { Contact } from "@/lib/panel/webcontact";

export type MailMeta = { id: string; threadId: string; from: string; fromName: string; fromEmail: string; subject: string; date: string; snippet: string; autoSubmitted: boolean; listUnsubscribe: string; messageId: string; inReplyTo: string };

export type MailKind = "reply" | "auto_ack" | "other" | "own";
export type InboxItem = { id: string; threadId: string; date: string; from: string; fromEmail: string; subject: string; snippet: string; kind: MailKind; domain?: string; company?: string };

const FREE = /^(gmail\.com|googlemail\.com|(hotmail|outlook|live|yahoo|yandex)\.[a-z.]+|icloud\.com|me\.com|aol\.com|proton(mail)?\.(me|com)|mail\.(com|ru)|gmx\.[a-z.]+)$/;
const NOREPLY = /(^|[._-])(no-?reply|do-?not-?reply|donotreply|mailer-daemon|postmaster|bounce|notifications?)([._-]|@)/i;
const ACK = /(talebiniz (alındı|alinmistir|alınmıştır)|mesajınız (alındı|iletildi)|iletişim talebiniz|başvurunuz alındı|we('ve| have) received|thank(s| you) for (contacting|your (message|enquiry|inquiry))|auto(matic)?[- ]?(reply|response)|otomatik yanıt|out of office|ofis dışında)/i;

/** Domain-like tokens in a text (e.g. "babyjemshop.com" in a sender name or snippet). */
function domainTokens(t: string): string[] {
  return [...new Set((t.toLowerCase().match(/[a-z0-9-]+(\.[a-z0-9-]+)*\.(com|net|org|co\.uk|uk|com\.tr|tr|de|nl|eu|io|shop|store)\b/g) ?? []).map(normDomain))];
}

export function classify(m: MailMeta, ownAddress: string): MailKind {
  if (m.fromEmail === ownAddress.toLowerCase()) return "own";
  if (m.autoSubmitted || NOREPLY.test(m.fromEmail) || ACK.test(`${m.subject} ${m.snippet}`)) return "auto_ack";
  return "reply";
}

/** Finds the company an email belongs to: same thread we started, sender domain, or a domain named in the email. */
export function matchContact(m: MailMeta, contacts: Contact[]): Contact | undefined {
  const byThread = contacts.find((c) => c.thread_id && c.thread_id === m.threadId);
  if (byThread) return byThread;
  const sender = normDomain(m.fromEmail);
  const candidates = [!FREE.test(sender) ? sender : "", ...domainTokens(`${m.fromName} ${m.subject} ${m.snippet} ${m.listUnsubscribe}`)].filter(Boolean);
  const fallbackOf = (c: Contact) => normDomain(c.email_fallback);
  for (const d of candidates) {
    const hit = contacts.find((c) => c.domain === d || d.endsWith(`.${c.domain}`) || c.domain.endsWith(`.${d}`) || (fallbackOf(c) && fallbackOf(c) === d));
    if (hit) return hit;
  }
  // Sender on a free mailbox that we emailed directly.
  const byAddress = contacts.find((c) => c.email_fallback && c.email_fallback.toLowerCase().includes(m.fromEmail));
  if (byAddress) return byAddress;
  // Company name in the subject or sender name (e.g. "Re: Fonex Cosmetics — New contact form message").
  const text = fold(`${m.fromName} ${m.subject}`);
  return contacts.find((c) => {
    const n = fold(c.company).replace(/\b(ltd|limited|sa|s\.a|a\.s|as|gmbh|inc|llc|sp\. z o\.o|group|grup|san|tic|ve)\b\.?/g, " ").replace(/\(.*?\)/g, " ").replace(/\s+/g, " ").trim();
    return n.length >= 4 && new RegExp(`(^|[^a-z0-9])${n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z0-9]|$)`).test(text);
  });
}

/** Lower-case, Turkish letters folded, so "UĞUR" and "ugur" compare equal. */
function fold(s: string): string {
  return s.toLocaleLowerCase("tr").replace(/[çğıöşü]/g, (ch) => ({ ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u" })[ch] as string).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/** Rebuilds the matching fields from a stored inbox row (used to re-match after new companies are imported). */
export function metaOf(i: InboxItem): MailMeta {
  return { id: i.id, threadId: i.threadId, from: i.from, fromName: i.from.replace(/<[^>]+>/, "").replace(/"/g, "").trim(), fromEmail: i.fromEmail, subject: i.subject, date: i.date, snippet: i.snippet, autoSubmitted: false, listUnsubscribe: "", messageId: "", inReplyTo: "" };
}

