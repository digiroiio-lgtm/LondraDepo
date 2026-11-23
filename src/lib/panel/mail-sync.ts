import "server-only";
import { GMAIL_USER, listMessages } from "@/lib/panel/gmail";
import { autoMatch, classify, isSystemMail, metaOf, rankContacts, type InboxItem } from "@/lib/panel/mail-match";
import type { Contact } from "@/lib/panel/webcontact";
import { kv, kvPipeline } from "@/lib/panel/kv";
import { getContact, listContacts, updateContact } from "@/lib/panel/webcontact-store";

/**
 * Reads the support mailbox and links incoming mail to WebContact companies:
 * - a real reply marks the company "Yanıt geldi" and adds the message to its history;
 * - an automatic "we received your request" email is logged as form confirmation (auto_ack).
 * Processed message ids are remembered, so each email is handled once.
 */
const SEEN = "gmail:seen";
const INBOX = "gmail:inbox";
const LAST = "gmail:last_sync";

export type { InboxItem, MailKind } from "@/lib/panel/mail-match";

export async function lastSync(): Promise<string | null> {
  return (await kv<string | null>("GET", LAST)) ?? null;
}

export async function recentInbox(): Promise<InboxItem[]> {
  return readInbox();
}

type SyncResult = { scanned: number; fresh: number; replies: number; acks: number; unmatched: number; suggested: number; rematched: number; system: number };

/** Writes a matched email into the company's history (reply → "Yanıt geldi"; auto_ack → history only). */
async function record(domain: string, as: "reply" | "auto_ack", it: Pick<InboxItem, "subject" | "snippet" | "fromEmail">) {
  if (as === "reply") {
    const current = await getContact(domain);
    await updateContact(domain, current && current.reply === "yok" ? { reply: "yanit" } : {}, { type: "reply", note: `E-posta yanıtı: ${it.subject || it.snippet.slice(0, 80)} (${it.fromEmail}): ${it.snippet.slice(0, 200)}` });
  } else {
    await updateContact(domain, {}, { type: "auto_ack", note: `${it.subject} (${it.fromEmail})` });
  }
}

/** Matches one inbox row: links it when certain, otherwise stores suggestions for the user. */
async function place(it: InboxItem, contacts: Contact[]): Promise<"linked" | "suggested" | "none"> {
  if (it.kind === "own" || it.kind === "system" || it.domain || it.ignored) return "none";
  const ranked = rankContacts(metaOf(it), contacts);
  const hit = autoMatch(ranked);
  if (hit) {
    const as = it.kind === "auto_ack" ? "auto_ack" : "reply";
    await record(hit.domain, as, it);
    Object.assign(it, { domain: hit.domain, company: hit.company, linked_by: "auto", linked_as: as, kind: as, suggest: undefined });
    return "linked";
  }
  it.suggest = ranked.slice(0, 3);
  return ranked.length ? "suggested" : "none";
}

export async function syncInbox(days = 30): Promise<SyncResult> {
  const [messages, contacts] = await Promise.all([listMessages(`in:inbox newer_than:${days}d -from:${GMAIL_USER}`, 100), listContacts()]);
  const seenFlags = messages.length ? ((await kvPipeline(messages.map((m) => ["SISMEMBER", SEEN, m.id]))) as number[]) : [];
  const fresh = messages.filter((_, i) => !seenFlags[i]).reverse(); // oldest first, so history stays in order
  const r: SyncResult = { scanned: messages.length, fresh: fresh.length, replies: 0, acks: 0, unmatched: 0, suggested: 0, rematched: 0, system: 0 };

  // Earlier rows that are still unlinked are tried again (e.g. after the WebContact log was imported).
  const old = await readInbox();
  for (const it of old) {
    if (it.domain || it.ignored || it.kind === "own") continue;
    // Rows stored before system mail was recognised are re-classified.
    if (it.kind !== "system" && isSystemMail(it)) { it.kind = "system"; it.suggest = undefined; continue; }
    if (it.kind === "system") continue;
    if ((await place(it, contacts)) === "linked") r.rematched++;
  }

  const items: InboxItem[] = [];
  for (const m of fresh) {
    const it: InboxItem = { id: m.id, threadId: m.threadId, date: m.date, from: m.from, fromEmail: m.fromEmail, subject: m.subject, snippet: m.snippet.slice(0, 240), kind: classify(m, GMAIL_USER) };
    if (it.kind === "system") r.system++;
    const res = await place(it, contacts);
    if (res === "linked") {
      if (it.linked_as === "reply") r.replies++;
      else r.acks++;
    } else if (res === "suggested") r.suggested++;
    else if (it.kind !== "own" && it.kind !== "system") r.unmatched++;
    if (!it.domain && it.kind === "reply") it.kind = "other";
    items.push(it);
  }
  const merged = [...items.reverse(), ...old].slice(0, 200);
  const cmds: (string | number)[][] = [];
  if (fresh.length) cmds.push(["SADD", SEEN, ...fresh.map((m) => m.id)]);
  cmds.push(["DEL", INBOX]);
  if (merged.length) cmds.push(["RPUSH", INBOX, ...merged.map((i) => JSON.stringify(i))]);
  cmds.push(["SET", LAST, new Date().toISOString()]);
  await kvPipeline(cmds);
  return r;
}

async function readInbox(): Promise<InboxItem[]> {
  return ((await kv<string[]>("LRANGE", INBOX, 0, 199)) ?? []).map((s) => JSON.parse(s) as InboxItem);
}
async function writeInbox(items: InboxItem[]) {
  const cmds: (string | number)[][] = [["DEL", INBOX]];
  if (items.length) cmds.push(["RPUSH", INBOX, ...items.map((i) => JSON.stringify(i))]);
  await kvPipeline(cmds);
}

/** The user links an email to a company by hand. Only the panel record changes; nothing is sent. */
export async function linkInboxItem(id: string, domain: string, as: "reply" | "auto_ack"): Promise<{ company: string }> {
  const [items, c] = await Promise.all([readInbox(), getContact(domain)]);
  const it = items.find((i) => i.id === id);
  if (!it) throw new Error("E-posta bulunamadı (listeden düşmüş olabilir)");
  if (!c) throw new Error("Şirket bulunamadı");
  if (it.domain === domain && it.linked_as === as) return { company: c.company };
  await record(domain, as, it);
  Object.assign(it, { domain, company: c.company, linked_by: "user", linked_as: as, kind: as, suggest: undefined, ignored: false });
  await writeInbox(items);
  return { company: c.company };
}

/** Hides an email from the inbox list and from the "unmatched" count. */
export async function ignoreInboxItem(id: string) {
  const items = await readInbox();
  const it = items.find((i) => i.id === id);
  if (!it) throw new Error("E-posta bulunamadı");
  it.ignored = true;
  it.suggest = undefined;
  await writeInbox(items);
}

/** Daily send counter (a simple guard against accidental bulk sending). */
export const DAILY_SEND_LIMIT = 40;
export async function sentToday(): Promise<number> {
  return Number((await kv<string | null>("GET", `gmail:sent:${new Date().toISOString().slice(0, 10)}`)) ?? 0);
}
export async function countSend() {
  const k = `gmail:sent:${new Date().toISOString().slice(0, 10)}`;
  await kvPipeline([["INCR", k], ["EXPIRE", k, 60 * 60 * 48]]);
}
