/**
 * Outreach tracking on top of WebContact records: per-company event history, the next action each
 * company needs (one task list for everything done and not yet done), and day / week / month reports.
 * Pure functions; no storage.
 */
import { BLOCK_TYPES, EVENT_LABELS, FORM_STATUSES, REPLIES, workdaysSince, type BlockType, type Contact, type ContactEvent, type EventType } from "@/lib/panel/webcontact";

// ---------- Events ----------

const isoOf = (v: string | undefined, fallback: string) => {
  if (!v) return fallback;
  const d = new Date(v.includes("T") ? v : v.replace(" ", "T") + (v.length <= 16 ? ":00" : ""));
  return Number.isNaN(d.getTime()) ? fallback : d.toISOString();
};

/** The event an agent import produces for a given form status. */
export function importEvents(c: Contact): ContactEvent[] {
  const at = c.imported_at;
  const out: ContactEvent[] = [{ at, type: "imported", note: FORM_STATUSES[c.form_status] }];
  const note = [c.block_type && (BLOCK_TYPES[c.block_type as BlockType] ?? c.block_type), c.block_detail, c.notes].filter(Boolean).join(" · ") || undefined;
  if (c.form_status === "sent") out.push({ at: isoOf(c.sent_at, at), type: "form_sent", note: c.confirmation_text || undefined });
  else if (c.form_status === "captcha") out.push({ at, type: "blocked", note });
  else if (c.form_status === "error") out.push({ at, type: "error", note });
  else if (c.form_status === "phone_rejected") out.push({ at, type: "phone_rejected", note });
  else if (c.form_status === "no_form") out.push({ at, type: "no_form", note: c.email_fallback || undefined });
  else out.push({ at, type: "skipped", note: c.notes || FORM_STATUSES[c.form_status] });
  return out;
}

/** History of a company; records saved before events existed get a reconstructed one. */
export function eventsOf(c: Contact): ContactEvent[] {
  const ev = c.events?.length ? [...c.events] : importEvents(c);
  if (!c.events?.length) {
    if (c.followup_at) ev.push({ at: c.followup_at, type: "followup" });
    if (c.reply !== "yok") ev.push({ at: c.imported_at, type: "reply", note: REPLIES[c.reply] });
  }
  return ev.sort((a, b) => a.at.localeCompare(b.at));
}

export const lastEvent = (c: Contact) => eventsOf(c).at(-1);

// ---------- Next action (task list) ----------

export const ACTIONS = {
  reply: { label: "Yanıtı değerlendir", hint: "Şirket yanıt verdi; okuyup dönüş yapın.", open: true },
  meeting: { label: "Görüşme / teklif", hint: "Olumlu dönüş; görüşme ayarlayın veya teklif gönderin.", open: true },
  followup: { label: "Takip et", hint: "5 iş günü geçti, yanıt yok; kısa bir takip yapın.", open: true },
  email: { label: "E-posta gönder", hint: "Formu yok; kayıtlı kurumsal adrese hazır mesajı gönderin.", open: true },
  blocked: { label: "Birlikte gönder (doğrulama)", hint: "CAPTCHA / güvenlik kodu; formu birlikte gönderin.", open: true },
  fix: { label: "Hatayı incele", hint: "Site hata verdi, teyit gelmedi veya telefon kabul edilmedi.", open: true },
  channel: { label: "Başka kanal bul", hint: "Form ve e-posta yok; LinkedIn veya telefonla ulaşın.", open: true },
  wait: { label: "Yanıt bekleniyor", hint: "Mesaj ulaştı; takip zamanı gelmedi.", open: false },
  closed: { label: "Kapandı", hint: "Atlandı, satış mesajı kabul etmiyor veya ilgilenmiyor.", open: false },
} as const;
export type ActionKey = keyof typeof ACTIONS;
export const ACTION_ORDER = Object.keys(ACTIONS) as ActionKey[];

/** Last time we reached the company (form or email). */
export const reachedAt = (c: Contact) => (c.channel === "email" ? c.emailed_at : c.form_status === "sent" ? c.sent_at || c.imported_at : undefined);

export function nextAction(c: Contact): { key: ActionKey; due?: string } {
  if (c.reply === "yanit") return { key: "reply" };
  if (c.reply === "olumlu") return { key: "meeting" };
  if (c.reply === "ilgisiz" || c.form_status === "skipped" || c.form_status === "no_solicitation") return { key: "closed" };
  const reached = reachedAt(c);
  if (reached) {
    if (!c.followup_at && workdaysSince(reached) >= 5) return { key: "followup" };
    return { key: "wait" };
  }
  if (c.form_status === "captcha") return { key: "blocked" };
  if (c.form_status === "error" || c.form_status === "phone_rejected") return { key: "fix" };
  if (c.form_status === "no_form") return c.email_fallback ? { key: "email" } : { key: "channel" };
  return { key: "fix" };
}

export function groupByAction(cs: Contact[]): Record<ActionKey, Contact[]> {
  const out = Object.fromEntries(ACTION_ORDER.map((k) => [k, [] as Contact[]])) as Record<ActionKey, Contact[]>;
  for (const c of cs) out[nextAction(c).key].push(c);
  return out;
}

// ---------- Email (manual send from the user's own mailbox) ----------

export function mailtoFor(c: Contact, body: string): string | null {
  const to = (c.email_fallback.match(/[^\s,;<>]+@[^\s,;<>]+\.[^\s,;<>]+/) ?? [])[0];
  if (!to) return null;
  const subject = c.subject || (c.language === "tr" ? "İngiltere'de depolama ve dağıtım: LondraDepo" : "UK warehousing and distribution: LondraDepo");
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.slice(0, 1800))}`;
}

// ---------- Reports ----------

export type Period = "day" | "week" | "month";
export const PERIODS: Record<Period, string> = { day: "Gün", week: "Hafta", month: "Ay" };

const TZ = "Europe/London";
const ymd = (d: Date) => new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" }).format(d);

/** [start, end) as YYYY-MM-DD for the period containing `anchor` (week starts Monday). */
export function periodRange(period: Period, anchor: string): { start: string; end: string; prev: string; next: string; label: string } {
  const a = new Date(`${anchor}T12:00:00Z`);
  const s = new Date(a);
  if (period === "week") s.setUTCDate(s.getUTCDate() - ((s.getUTCDay() + 6) % 7));
  if (period === "month") s.setUTCDate(1);
  const e = new Date(s);
  if (period === "day") e.setUTCDate(e.getUTCDate() + 1);
  if (period === "week") e.setUTCDate(e.getUTCDate() + 7);
  if (period === "month") e.setUTCMonth(e.getUTCMonth() + 1);
  const p = new Date(s);
  if (period === "day") p.setUTCDate(p.getUTCDate() - 1);
  if (period === "week") p.setUTCDate(p.getUTCDate() - 7);
  if (period === "month") p.setUTCMonth(p.getUTCMonth() - 1);
  const f = (d: Date) => d.toISOString().slice(0, 10);
  const last = new Date(e);
  last.setUTCDate(last.getUTCDate() - 1);
  const tr = (d: Date, o: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat("tr-TR", { timeZone: "UTC", ...o }).format(d);
  const label =
    period === "day" ? tr(s, { day: "numeric", month: "long", year: "numeric", weekday: "long" })
    : period === "week" ? `${tr(s, { day: "numeric", month: "short" })} – ${tr(last, { day: "numeric", month: "short", year: "numeric" })}`
    : tr(s, { month: "long", year: "numeric" });
  return { start: f(s), end: f(e), prev: f(p), next: f(e), label };
}

export const today = () => ymd(new Date());

export type ReportRow = { at: string; company: string; domain: string; type: EventType; note?: string };

export const REPORT_METRICS: { key: EventType | "reached"; label: string }[] = [
  { key: "imported", label: "İncelenen şirket" },
  { key: "reached", label: "Ulaşılan (form + e-posta)" },
  { key: "form_sent", label: "Form gönderildi" },
  { key: "email_sent", label: "E-posta gönderildi" },
  { key: "blocked", label: "Doğrulama engeli" },
  { key: "error", label: "Hata / teyit yok" },
  { key: "no_form", label: "Formsuz (e-posta kaydı)" },
  { key: "skipped", label: "Atlandı" },
  { key: "followup", label: "Takip" },
  { key: "reply", label: "Yanıt güncellemesi" },
];

export function buildReport(cs: Contact[], period: Period, anchor: string) {
  const r = periodRange(period, anchor);
  const rows: ReportRow[] = [];
  for (const c of cs) {
    for (const e of eventsOf(c)) {
      const day = ymd(new Date(e.at));
      if (day >= r.start && day < r.end) rows.push({ at: e.at, company: c.company, domain: c.domain, type: e.type, note: e.note });
    }
  }
  rows.sort((a, b) => b.at.localeCompare(a.at));
  const uniq = (t: EventType) => new Set(rows.filter((x) => x.type === t).map((x) => x.domain)).size;
  const counts: Record<string, number> = {};
  for (const m of REPORT_METRICS) counts[m.key] = m.key === "reached" ? new Set(rows.filter((x) => x.type === "form_sent" || x.type === "email_sent").map((x) => x.domain)).size : uniq(m.key as EventType);
  counts.phone_rejected = uniq("phone_rejected");
  counts.error += counts.phone_rejected;

  // Daily reach series for week / month.
  const days: { x: string; y: number }[] = [];
  if (period !== "day") {
    for (let d = new Date(`${r.start}T12:00:00Z`); d.toISOString().slice(0, 10) < r.end; d.setUTCDate(d.getUTCDate() + 1)) {
      const k = d.toISOString().slice(0, 10);
      days.push({ x: k.slice(5), y: rows.filter((x) => (x.type === "form_sent" || x.type === "email_sent") && ymd(new Date(x.at)) === k).length });
    }
  }
  return { range: r, rows, counts, days };
}

/** Plain-text summary for sharing (WhatsApp, email, notes). */
export function reportSummary(rep: ReturnType<typeof buildReport>, open: Record<ActionKey, Contact[]>): string {
  const c = rep.counts;
  const names = (t: EventType) => [...new Set(rep.rows.filter((x) => x.type === t).map((x) => x.company))];
  const sentNames = [...new Set([...names("form_sent"), ...names("email_sent")])];
  const lines = [
    `LondraDepo temas raporu · ${rep.range.label}`,
    "",
    `${c.imported} şirket incelendi; ${c.reached} şirkete ulaşıldı (${c.form_sent} form, ${c.email_sent} e-posta).`,
    sentNames.length ? `Ulaşılanlar: ${sentNames.slice(0, 15).join(", ")}${sentNames.length > 15 ? "…" : ""}.` : "",
    `${c.blocked} şirket CAPTCHA / güvenlik kodu nedeniyle gönderilemedi.`,
    `${c.error} şirkette hata oluştu veya gönderim teyidi alınamadı${names("error").length ? ` (${names("error").slice(0, 6).join(", ")})` : ""}.`,
    `${c.no_form} şirkette form yok; kurumsal e-posta adresleri kaydedildi.`,
    `${c.skipped} şirket atlandı.`,
    c.followup || c.reply ? `${c.followup} takip, ${c.reply} yanıt güncellemesi.` : "",
    "",
    "Açık işler:",
    ...ACTION_ORDER.filter((k) => ACTIONS[k].open && open[k].length).map((k) => `- ${ACTIONS[k].label}: ${open[k].length}`),
    `- ${ACTIONS.wait.label}: ${open.wait.length}`,
  ];
  return lines.filter((l, i, a) => l !== "" || (a[i - 1] ?? "") !== "").join("\n").trim();
}

export const eventLabel = (t: EventType) => EVENT_LABELS[t];
