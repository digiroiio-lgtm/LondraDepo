import "server-only";
import { GMAIL_USER, listMessages } from "@/lib/panel/gmail";
import { classify, matchContact, metaOf, type InboxItem } from "@/lib/panel/mail-match";
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
  return ((await kv<string[]>("LRANGE", INBOX, 0, 99)) ?? []).map((s) => JSON.parse(s) as InboxItem);
}

export async function syncInbox(days = 30): Promise<{ scanned: number; fresh: number; replies: number; acks: number; unmatched: number; rematched: number }> {
  const [messages, contacts] = await Promise.all([listMessages(`in:inbox newer_than:${days}d -from:${GMAIL_USER}`, 100), listContacts()]);
  const seenFlags = messages.length ? ((await kvPipeline(messages.map((m) => ["SISMEMBER", SEEN, m.id]))) as number[]) : [];
  const fresh = messages.filter((_, i) => !seenFlags[i]).reverse(); // oldest first, so history stays in order
  let replies = 0;
  let acks = 0;
  let unmatched = 0;
  const items: InboxItem[] = [];
  for (const m of fresh) {
    const kind = classify(m, GMAIL_USER);
    const c = kind === "own" ? undefined : matchContact(m, contacts);
    if (c) {
      const current = (await getContact(c.domain)) ?? c;
      if (kind === "reply") {
        await updateContact(c.domain, current.reply === "yok" ? { reply: "yanit" } : {}, { type: "reply", note: `E-posta yanıtı: ${m.subject || m.snippet.slice(0, 80)} (${m.fromEmail})` });
        replies++;
      } else {
        await updateContact(c.domain, {}, { type: "auto_ack", note: `${m.subject} (${m.fromEmail})` });
        acks++;
      }
    } else if (kind !== "own") unmatched++;
    items.push({ id: m.id, threadId: m.threadId, date: m.date, from: m.from, fromEmail: m.fromEmail, subject: m.subject, snippet: m.snippet.slice(0, 240), kind: !c && kind === "reply" ? "other" : kind, domain: c?.domain, company: c?.company });
  }
  const rematched = await rematchOld(contacts);
  const cmds: (string | number)[][] = [];
  if (fresh.length) cmds.push(["SADD", SEEN, ...fresh.map((m) => m.id)]);
  for (const it of items) cmds.push(["LPUSH", INBOX, JSON.stringify(it)]);
  cmds.push(["LTRIM", INBOX, 0, 199], ["SET", LAST, new Date().toISOString()]);
  await kvPipeline(cmds);
  return { scanned: messages.length, fresh: fresh.length, replies, acks, unmatched, rematched };
}

/** Earlier emails that matched no company are tried again, e.g. after the WebContact log was imported. */
async function rematchOld(contacts: Contact[]): Promise<number> {
  const raw = (await kv<string[]>("LRANGE", INBOX, 0, 199)) ?? [];
  const items = raw.map((s) => JSON.parse(s) as InboxItem);
  let n = 0;
  for (const it of items) {
    if (it.domain || it.kind === "own") continue;
    const c = matchContact(metaOf(it), contacts);
    if (!c) continue;
    const kind = it.kind === "other" ? "reply" : it.kind;
    const current = (await getContact(c.domain)) ?? c;
    if (kind === "reply") await updateContact(c.domain, current.reply === "yok" ? { reply: "yanit" } : {}, { type: "reply", note: `E-posta yanıtı: ${it.subject || it.snippet.slice(0, 80)} (${it.fromEmail})` });
    else await updateContact(c.domain, {}, { type: "auto_ack", note: `${it.subject} (${it.fromEmail})` });
    Object.assign(it, { kind, domain: c.domain, company: c.company });
    n++;
  }
  if (n) await kvPipeline([["DEL", INBOX], ["RPUSH", INBOX, ...items.map((i) => JSON.stringify(i))]]);
  return n;
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
