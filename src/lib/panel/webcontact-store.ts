import "server-only";
import { kv, kvPipeline } from "@/lib/panel/kv";
import { eventsOf, importEvents } from "@/lib/panel/outreach";
import type { Contact, ContactEvent, Reply } from "@/lib/panel/webcontact";

/**
 * Storage for WebContact form submissions (Upstash Redis). Never in the repo.
 * wc:contact:<domain> → contact JSON; wc:contacts → sorted set (import time → domain); wc:runs → import summaries.
 */
const KEY = (d: string) => `wc:contact:${d}`;
const INDEX = "wc:contacts";
const RUNS = "wc:runs";

export type ContactRun = { id: string; at: string; mode: "a" | "b" | "c"; sent: number; blocked?: number; manual: number; noForm: number; skipped: number; duplicates: number; errors: number };

export async function listContacts(limit = 2000): Promise<Contact[]> {
  const domains = (await kv<string[]>("ZRANGE", INDEX, 0, limit - 1, "REV")) ?? [];
  const out: Contact[] = [];
  for (let i = 0; i < domains.length; i += 100) {
    const vals = (await kv<(string | null)[]>("MGET", ...domains.slice(i, i + 100).map(KEY))) ?? [];
    for (const v of vals) if (v) out.push(JSON.parse(v) as Contact);
  }
  return out;
}

export async function contactedDomains(): Promise<string[]> {
  return (await kv<string[]>("ZRANGE", INDEX, 0, -1)) ?? [];
}

export async function getContact(domain: string): Promise<Contact | null> {
  const v = await kv<string | null>("GET", KEY(domain));
  return v ? (JSON.parse(v) as Contact) : null;
}

/**
 * Saves a run's rows. A domain whose form was already sent is never overwritten (duplicate);
 * an earlier captcha/error/no_form row is replaced by the newer attempt.
 */
export async function saveContacts(cs: Contact[]): Promise<{ saved: Contact[]; duplicates: number }> {
  const saved: Contact[] = [];
  let duplicates = 0;
  const seen = new Set<string>();
  for (const c of cs) {
    if (seen.has(c.domain)) { duplicates++; continue; }
    seen.add(c.domain);
    const prev = await getContact(c.domain);
    if (prev && prev.form_status === "sent") { duplicates++; continue; }
    // Keep the history of earlier blocked attempts on the same company.
    saved.push(
      prev
        ? {
            ...c,
            attempts: (prev.attempts ?? 1) + 1,
            reply: prev.reply,
            block_detail: c.block_detail || prev.block_detail,
            email_fallback: c.email_fallback || prev.email_fallback,
            channel: prev.channel,
            emailed_at: prev.emailed_at,
            followup_at: prev.followup_at,
            events: [...eventsOf(prev), ...importEvents(c)],
          }
        : { ...c, events: importEvents(c) },
    );
  }
  const now = Date.now();
  await kvPipeline(saved.flatMap((c, i) => [["SET", KEY(c.domain), JSON.stringify(c)], ["ZADD", INDEX, now + i, c.domain]]));
  return { saved, duplicates };
}

type Patch = Partial<Pick<Contact, "reply" | "form_status" | "sent_at" | "followup_at" | "notes" | "channel" | "emailed_at">>;

/** Updates a record and appends what happened to its history. */
export async function updateContact(domain: string, patch: Patch, event?: Omit<ContactEvent, "at">): Promise<Contact | null> {
  const c = await getContact(domain);
  if (!c) return null;
  const next: Contact = { ...c, ...patch, events: event ? [...eventsOf(c), { at: new Date().toISOString(), ...event }] : c.events };
  await kv("SET", KEY(domain), JSON.stringify(next));
  return next;
}

export const setReply = (domain: string, reply: Reply, label: string) => updateContact(domain, { reply }, { type: "reply", note: label });

export async function addContactRun(r: ContactRun) {
  await kvPipeline([["LPUSH", RUNS, JSON.stringify(r)], ["LTRIM", RUNS, 0, 49]]);
}

export async function listContactRuns(): Promise<ContactRun[]> {
  return ((await kv<string[]>("LRANGE", RUNS, 0, 19)) ?? []).map((s) => JSON.parse(s) as ContactRun);
}
