import "server-only";
import { JWT } from "google-auth-library";
import type { MailMeta } from "@/lib/panel/mail-match";

export type { MailMeta };

/**
 * Gmail for the support mailbox, through the same Google service account as GA4 / Search Console, with
 * Google Workspace domain-wide delegation. The service account only ever acts as GMAIL_USER, with read and
 * send scopes (no delete, no settings).
 */
const SCOPES = ["https://www.googleapis.com/auth/gmail.readonly", "https://www.googleapis.com/auth/gmail.send"];
const API = "https://gmail.googleapis.com/gmail/v1/users/me";

export const GMAIL_USER = process.env.GMAIL_USER || "support@londradepo.com";
export const SENDER_NAME = process.env.GMAIL_SENDER_NAME || "Yusuf Barış · LondraDepo";

export function gmailConfigured(): boolean {
  return Boolean(process.env.GOOGLE_SERVICE_ACCOUNT_JSON && process.env.GMAIL_USER);
}

let client: JWT | null = null;
async function token(): Promise<string> {
  if (!client) {
    const key = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON as string) as { client_email: string; private_key: string };
    client = new JWT({ email: key.client_email, key: key.private_key, scopes: SCOPES, subject: GMAIL_USER });
  }
  const { token: t } = await client.getAccessToken();
  if (!t) throw new Error("Gmail erişim anahtarı alınamadı");
  return t;
}

async function call<T>(path: string, init: { method?: string; body?: unknown } = {}): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    method: init.method ?? "GET",
    headers: { Authorization: `Bearer ${await token()}`, "Content-Type": "application/json" },
    body: init.body ? JSON.stringify(init.body) : undefined,
    cache: "no-store",
  });
  const json = (await res.json().catch(() => ({}))) as { error?: { message?: string } };
  if (!res.ok) {
    const m = json?.error?.message || `Gmail ${res.status}`;
    if (res.status === 401 || /unauthorized_client|delegation/i.test(m)) throw new Error(`Gmail yetkisi yok: Workspace Yönetici Konsolu'nda alan genelinde yetkilendirme (domain-wide delegation) eksik olabilir. (${m})`);
    throw new Error(m);
  }
  return json as T;
}

type RawMsg = { id: string; threadId: string; snippet?: string; internalDate?: string; payload?: { headers?: { name: string; value: string }[] } };

function meta(m: RawMsg): MailMeta {
  const h = (n: string) => m.payload?.headers?.find((x) => x.name.toLowerCase() === n.toLowerCase())?.value ?? "";
  const from = h("From");
  const em = from.match(/<([^>]+)>/)?.[1] ?? from.trim();
  const name = from.replace(/<[^>]+>/, "").replace(/"/g, "").trim();
  const auto = h("Auto-Submitted");
  return {
    id: m.id,
    threadId: m.threadId,
    from,
    fromName: name,
    fromEmail: em.toLowerCase(),
    subject: h("Subject"),
    date: m.internalDate ? new Date(Number(m.internalDate)).toISOString() : new Date(h("Date") || Date.now()).toISOString(),
    snippet: (m.snippet ?? "").replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&"),
    autoSubmitted: Boolean(auto && auto.toLowerCase() !== "no") || Boolean(h("X-Autoreply") || h("X-Autorespond")) || /^(auto|bulk|list|junk)$/i.test(h("Precedence")),
    listUnsubscribe: h("List-Unsubscribe"),
    messageId: h("Message-ID"),
    inReplyTo: h("In-Reply-To"),
  };
}

/** Inbox messages (metadata only) matching a Gmail search, newest first. */
export async function listMessages(q: string, max = 50): Promise<MailMeta[]> {
  const list = await call<{ messages?: { id: string }[] }>(`/messages?q=${encodeURIComponent(q)}&maxResults=${max}`);
  const ids = (list.messages ?? []).map((m) => m.id);
  const headers = ["From", "Subject", "Date", "Auto-Submitted", "Precedence", "X-Autoreply", "X-Autorespond", "List-Unsubscribe", "Message-ID", "In-Reply-To"];
  const qs = headers.map((h) => `metadataHeaders=${encodeURIComponent(h)}`).join("&");
  const out: MailMeta[] = [];
  for (let i = 0; i < ids.length; i += 10) {
    const batch = await Promise.all(ids.slice(i, i + 10).map((id) => call<RawMsg>(`/messages/${id}?format=metadata&${qs}`)));
    out.push(...batch.map(meta));
  }
  return out;
}

// ---------- Sending ----------

const b64 = (s: string) => Buffer.from(s, "utf8").toString("base64");
const b64url = (s: string) => b64(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const encHeader = (s: string) => (/^[\x20-\x7e]*$/.test(s) ? s : `=?UTF-8?B?${b64(s)}?=`);
const wrap76 = (s: string) => s.replace(/.{1,76}/g, "$&\r\n");

export function isEmail(s: string): boolean {
  return /^[^\s@<>,;]+@[^\s@<>,;]+\.[^\s@<>,;]+$/.test(s.trim());
}

/** Sends a plain-text email from GMAIL_USER. Returns Gmail's message and thread ids. */
export async function sendMail(m: { to: string; subject: string; body: string; threadId?: string; inReplyTo?: string }): Promise<{ id: string; threadId: string }> {
  if (!isEmail(m.to)) throw new Error("Alıcı e-posta adresi geçersiz");
  if (!m.subject.trim() || !m.body.trim()) throw new Error("Konu ve mesaj boş olamaz");
  const headers = [
    `From: ${encHeader(SENDER_NAME)} <${GMAIL_USER}>`,
    `To: ${m.to.trim()}`,
    `Subject: ${encHeader(m.subject.trim())}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    ...(m.inReplyTo ? [`In-Reply-To: ${m.inReplyTo}`, `References: ${m.inReplyTo}`] : []),
  ];
  const raw = `${headers.join("\r\n")}\r\n\r\n${wrap76(b64(m.body.replace(/\r?\n/g, "\r\n")))}`;
  const res = await call<{ id: string; threadId: string }>("/messages/send", { method: "POST", body: { raw: b64url(raw), ...(m.threadId ? { threadId: m.threadId } : {}) } });
  return res;
}
