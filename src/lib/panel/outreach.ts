/**
 * Outreach tracking on top of WebContact records: per-company event history, the next action each
 * company needs (one task list for everything done and not yet done), and day / week / month reports.
 * Pure functions; no storage.
 */
import { BLOCK_TYPES, EVENT_LABELS, FORM_STATUSES, REPLIES, type BlockType, type Contact, type ContactEvent, type EventType } from "@/lib/panel/webcontact";

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
  meeting: { label: "Görüşme planla", hint: "Olumlu dönüş; 15 dakikalık görüşme ayarlayın.", open: true },
  quote: { label: "Teklif gönder", hint: "Görüşme yapıldı; palet sayısı ve hizmetlere göre teklif hazırlayın.", open: true },
  verify: { label: "Gönderim belirsiz · Teyidi kontrol et", hint: "Formun ulaştığı teyit edilmedi; ikinci gönderimden önce kontrol edin.", open: true },
  followup: { label: "Takip et", hint: "5 iş günü geçti, yanıt yok; kısa bir takip yapın.", open: true },
  email: { label: "E-posta gönder", hint: "Formu yok veya doğrulama engeli var; kayıtlı kurumsal adrese hazır mesajı gönderin.", open: true },
  channel: { label: "B2B kanal bul", hint: "Form uygun değil (vergi no / üyelik / destek formu) veya kanal yok; satış e-postası, LinkedIn veya telefon bulun.", open: true },
  fix: { label: "Hatayı incele", hint: "Site hata verdi veya telefon kabul edilmedi.", open: true },
  blocked: { label: "Birlikte gönder (doğrulama)", hint: "CAPTCHA / güvenlik kodu ve başka kanal yok; formu birlikte gönderin.", open: true },
  wait: { label: "Yanıt bekleniyor", hint: "Mesaj ulaştı; takip zamanı gelmedi.", open: false },
  closed: { label: "Kapandı", hint: "Atlandı, satış mesajı kabul etmiyor veya ilgilenmiyor.", open: false },
} as const;
export type ActionKey = keyof typeof ACTIONS;
/** Sales priority: real replies first, then uncertain sends, due follow-ups, new sends, fixes. */
export const ACTION_ORDER = Object.keys(ACTIONS) as ActionKey[];

// ---------- Delivery (did our message actually reach the company?) ----------

export const DELIVERY = {
  email_sent: "E-posta gönderildi",
  confirmed: "Form teyitli",
  user_reported: "Gönderdiğinizi bildirdiniz",
  uncertain: "Gönderim belirsiz",
  none: "Henüz ulaşılmadı",
} as const;
export type Delivery = keyof typeof DELIVERY;

const NO_CONFIRM = /^(|-|—|yok|none|no|unknown|n\/a|görülmedi|teyit yok|belirsiz|emin değil(im)?)$/i;
const UNCERTAIN_NOTE = /teyit|confirm|emin değil|belirsiz|unclear|uncertain|not sure|doğrulanamadı/i;
/** Forms that ask for a business registration (tax/VAT/NIP/KRS), an account or a dealer application: not a sales channel. */
const GATED_FORM = /vergi (no|numaras)|tax (id|number)|vat (id|number|no)|\bnip\b|\bkrs\b|\bregon\b|nif\b|şirket kayd|company registration|business account|b2b (hesab|account|portal)|bayi(lik)? başvuru|dealer application|üyelik gerek|login required|giriş gerek|kayıt ol/i;
const SUPPORT_FORM = /destek|support|m(ü|u)ş?s?teri[\s_-]?hizmet|customer[\s_-]?(service|care)|reklamac|\breturns?\b|\biade/i;

/** Delivery state and where it comes from; separate from the form status the agent reported. */
export function deliveryOf(c: Contact): { key: Delivery; source: string; at?: string } {
  const ev = eventsOf(c);
  const last = (t: EventType) => [...ev].reverse().find((e) => e.type === t);
  if (c.channel === "email" && c.emailed_at) {
    return c.thread_id ? { key: "email_sent", source: "Gmail konuşması (panelden)", at: c.emailed_at } : { key: "user_reported", source: "E-postayı kendi programınızdan gönderdiğinizi bildirdiniz", at: c.emailed_at };
  }
  if (c.reply !== "yok") return { key: c.channel === "email" && c.thread_id ? "email_sent" : "confirmed", source: "Şirket yanıt verdi", at: last("reply")?.at };
  const ack = last("auto_ack");
  if (ack && c.form_status === "sent") return { key: "confirmed", source: `Otomatik teyit e-postası (${ack.note ?? ""})`.trim(), at: ack.at };
  if (c.delivery_ok) return { key: "user_reported", source: "Ulaştı olarak işaretlediniz", at: reachedRaw(c) };
  if (c.form_status === "sent") {
    const manual = [...ev].reverse().find((e) => e.type === "form_sent" && /elle/i.test(e.note ?? ""));
    if (manual) return { key: "user_reported", source: "\"Gönderdim\"e bastınız", at: manual.at };
    if (!NO_CONFIRM.test((c.confirmation_text ?? "").trim())) return { key: "confirmed", source: `Sayfadaki teyit: ${c.confirmation_text.slice(0, 80)}`, at: reachedRaw(c) };
    return { key: "uncertain", source: "Gönderildi denildi ama teyit mesajı görülmedi", at: reachedRaw(c) };
  }
  if (c.form_status === "error" && UNCERTAIN_NOTE.test(`${c.notes} ${c.block_detail} ${c.confirmation_text}`)) return { key: "uncertain", source: "Site hata verdi; formun ulaşıp ulaşmadığı belli değil" };
  return { key: "none", source: "" };
}

const reachedRaw = (c: Contact) => (c.channel === "email" ? c.emailed_at : c.sent_at || c.imported_at);

/** Last time we reached the company (form or email); uncertain sends do not count. */
export function reachedAt(c: Contact): string | undefined {
  const d = deliveryOf(c);
  return d.key === "none" || d.key === "uncertain" ? undefined : d.at || reachedRaw(c);
}

/** The latest contact in either direction (send, follow-up or reply). */
export function lastTouchAt(c: Contact): string | undefined {
  const ev = [...eventsOf(c)].reverse().find((e) => ["form_sent", "email_sent", "followup", "reply", "auto_ack"].includes(e.type))?.at;
  const reached = reachedAt(c);
  return ev && reached ? (ev > reached ? ev : reached) : ev || reached;
}

function addWorkdays(iso: string, n: number): string {
  const d = new Date(iso.includes("T") ? iso : iso.replace(" ", "T"));
  if (Number.isNaN(d.getTime())) return "";
  while (n > 0) {
    d.setUTCDate(d.getUTCDate() + 1);
    if (![0, 6].includes(d.getUTCDay())) n--;
  }
  return d.toISOString();
}

export function nextAction(c: Contact): { key: ActionKey; due?: string; reason?: string } {
  const ev = eventsOf(c);
  const lastReplyAt = [...ev].reverse().find((e) => e.type === "reply")?.at;
  if (c.reply === "yanit") return { key: "reply" };
  if (c.reply === "olumlu") return { key: "meeting" };
  if (c.reply === "gorusme") return { key: "quote" };
  if (c.reply === "teklif") {
    const due = lastReplyAt ? addWorkdays(lastReplyAt, 3) : "";
    return due && due <= new Date().toISOString() ? { key: "followup", due, reason: "Teklif gönderildi; dönüş için takip" } : { key: "wait", due, reason: "Teklif yanıtı bekleniyor" };
  }
  if (c.reply === "ilgisiz" || c.form_status === "skipped" || c.form_status === "no_solicitation") return { key: "closed", reason: c.close_reason };
  const d = deliveryOf(c);
  // An unconfirmed send to a customer-service form was never a sales channel: find the right one instead.
  if (d.key === "uncertain" && SUPPORT_FORM.test(`${c.contact_page_url} ${c.notes}`)) return { key: "channel", reason: "Gönderim müşteri destek formuna yapılmış ve teyit yok; satış/B2B kanalı bulun" };
  if (d.key === "uncertain") return { key: "verify", reason: d.source };
  const reached = reachedAt(c);
  if (reached) {
    if (!c.followup_at) {
      const due = addWorkdays(reached, 5);
      return due && due <= new Date().toISOString() ? { key: "followup", due } : { key: "wait", due };
    }
    return { key: "wait", due: addWorkdays(c.followup_at, 5) };
  }
  const text = `${c.notes} ${c.block_detail} ${c.confirmation_text}`;
  if (GATED_FORM.test(text) || c.block_type === "login" || c.block_type === "otp") return { key: "channel", reason: "Form iş kaydı / vergi numarası veya üyelik istiyor; satış kanalı bulun" };
  if (SUPPORT_FORM.test(`${c.contact_page_url} ${c.notes}`)) return { key: "channel", reason: "Yalnız müşteri destek formu var; satış/B2B kanalı bulun" };
  if (c.form_status === "captcha") return c.email_fallback ? { key: "email", reason: "Doğrulama engeli; kayıtlı adrese e-posta daha hızlı" } : { key: "blocked" };
  if (c.form_status === "error" || c.form_status === "phone_rejected") return c.email_fallback ? { key: "email", reason: "Form hata verdi; kayıtlı adrese e-posta gönderin" } : { key: "fix" };
  if (c.form_status === "no_form") return c.email_fallback ? { key: "email" } : { key: "channel", reason: "Form ve e-posta yok" };
  return { key: "fix" };
}

// ---------- Import decision (one history per company across wizards) ----------

export const IMPORT_KINDS = {
  new: "Yeni",
  update: "Güncellenecek",
  contacted: "Daha önce temas edilmiş (atlanır)",
  review: "İnceleme gereken",
} as const;
export type ImportKind = keyof typeof IMPORT_KINDS;

/** Has the company already been reached through any channel (form, email, reply, manual)? */
export function alreadyReached(c: Contact): boolean {
  return c.reply !== "yok" || Boolean(reachedAt(c)) || (c.channel === "email" && Boolean(c.emailed_at));
}

/**
 * What importing an agent row does to an existing record:
 * new · update (earlier blocked/failed attempt is replaced, history kept) · contacted (skipped, record kept) ·
 * review (we already reached them, but the agent reports another send: logged to history, status kept).
 */
export function importDecision(prev: Contact | null | undefined, next: Pick<Contact, "form_status">, leadStatus?: string): { kind: ImportKind; why: string } {
  if (!prev) {
    if (leadStatus && !["yeni", "apollo"].includes(leadStatus)) return { kind: "review", why: `Müşteri sihirbazında durumu "${leadStatus}": başka kanaldan temas edilmiş olabilir` };
    return { kind: "new", why: "İlk kayıt" };
  }
  if (alreadyReached(prev)) {
    return next.form_status === "sent"
      ? { kind: "review", why: `Zaten ulaşılmıştı (${DELIVERY[deliveryOf(prev).key]}); ajan yeniden gönderdi: geçmişe eklenir, durum korunur` }
      : { kind: "contacted", why: `Zaten ulaşılmış: ${DELIVERY[deliveryOf(prev).key]}` };
  }
  return { kind: "update", why: `Önceki deneme: ${FORM_STATUSES[prev.form_status]}` };
}

// ---------- Sales funnel and backlog ----------

const REPLY_RANK: Record<string, number> = { yok: 0, ilgisiz: 1, yanit: 1, olumlu: 2, gorusme: 3, teklif: 4 };

export function funnel(cs: Contact[]) {
  const reached = cs.filter(alreadyReached);
  return [
    { label: "Temas kaydedilen şirket", value: reached.length },
    { label: "Gerçek yanıt", value: cs.filter((c) => REPLY_RANK[c.reply] >= 1).length },
    { label: "Olumlu yanıt", value: cs.filter((c) => REPLY_RANK[c.reply] >= 2).length },
    { label: "Görüşme", value: cs.filter((c) => REPLY_RANK[c.reply] >= 3).length },
    { label: "Teklif", value: cs.filter((c) => REPLY_RANK[c.reply] >= 4).length },
  ];
}

/** Turkish case suffix after a number: n'e/n'i with vowel harmony ("4'üne", "1'i", "6'sı"). */
const SUFFIX: Record<string, [string, string]> = {
  "0": ["ına", "ı"], "1": ["ine", "i"], "2": ["sine", "si"], "3": ["üne", "ü"], "4": ["üne", "ü"], "5": ["ine", "i"], "6": ["sına", "sı"], "7": ["sine", "si"], "8": ["ine", "i"], "9": ["una", "u"],
  "10": ["una", "u"], "20": ["sine", "si"], "30": ["una", "u"], "40": ["ına", "ı"], "50": ["sine", "si"], "60": ["ına", "ı"], "70": ["ine", "i"], "80": ["ine", "i"], "90": ["ına", "ı"], "100": ["üne", "ü"],
};
function numSuffix(n: number, which: 0 | 1): string {
  const last = n % 10;
  const key = n === 0 ? "0" : last ? String(last) : n % 100 === 0 ? "100" : String(n % 100);
  return `${n}'${(SUFFIX[key] ?? SUFFIX["1"])[which]}`;
}

/** One sentence per agent outcome that says what is done and what is still waiting. */
export function backlogLines(cs: Contact[]): { text: string; href: string }[] {
  const out: { text: string; href: string }[] = [];
  const by = (pred: (c: Contact) => boolean) => cs.filter(pred);
  const parts = (list: Contact[]) => {
    const reached = list.filter(alreadyReached);
    const emailed = reached.filter((c) => c.channel === "email").length;
    const pending = list.filter((c) => !alreadyReached(c) && ACTIONS[nextAction(c).key].open);
    const closed = list.filter((c) => nextAction(c).key === "closed").length;
    return { reached: reached.length, emailed, pending, closed };
  };
  const noForm = by((c) => c.form_status === "no_form");
  if (noForm.length) {
    const p = parts(noForm);
    out.push({ text: `${noForm.length} şirkette form bulunamadı · ${numSuffix(p.emailed, 0)} e-posta gönderildi · ${numSuffix(p.pending.length, 1)} bekliyor${p.closed ? ` · ${p.closed} kapandı` : ""}`, href: "/panel/webcontact?tab=is&g=email#isler" });
  }
  const captcha = by((c) => c.form_status === "captcha");
  if (captcha.length) {
    const p = parts(captcha);
    out.push({ text: `${captcha.length} formda doğrulama engeli · ${p.reached} şirkete sonradan ulaşıldı (${p.emailed} e-posta) · ${p.pending.length} bekliyor (${p.pending.filter((c) => nextAction(c).key === "email").length} e-postaya yönlendi)`, href: "/panel/webcontact?tab=is&g=blocked#isler" });
  }
  const err = by((c) => c.form_status === "error" || c.form_status === "phone_rejected");
  if (err.length) {
    const p = parts(err);
    out.push({ text: `${err.length} formda hata · ${p.reached} şirkete ulaşıldı · ${p.pending.length} bekliyor`, href: "/panel/webcontact?tab=is&g=fix#isler" });
  }
  const verify = by((c) => nextAction(c).key === "verify");
  if (verify.length) out.push({ text: `${verify.length} gönderim belirsiz · teyit kontrolü bekliyor`, href: "/panel/webcontact?tab=is&g=verify#isler" });
  const channel = by((c) => nextAction(c).key === "channel");
  if (channel.length) out.push({ text: `${channel.length} şirket için satış kanalı aranıyor (vergi no / üyelik / destek formu veya kanal yok)`, href: "/panel/webcontact?tab=is&g=channel#isler" });
  return out;
}

/** One-line status for a company card, e.g. "E-posta gönderildi · Yanıt bekleniyor". */
export function statusLine(c: Contact): string {
  const d = deliveryOf(c);
  const a = nextAction(c);
  if (c.reply === "yanit") return `${DELIVERY[d.key]} · Yanıt geldi`;
  if (c.reply === "olumlu") return eventsOf(c).some((e) => /Görüşme linki gönderildi/.test(e.note ?? "")) ? "Olumlu yanıt · Görüşme linki gönderildi, randevu bekleniyor" : "Olumlu yanıt · Görüşme planla";
  if (c.reply === "gorusme") return "Görüşme yapıldı · Teklif gönder";
  if (c.reply === "teklif") return `Teklif gönderildi · ${a.key === "followup" ? "Takip zamanı geldi" : "Yanıt bekleniyor"}`;
  if (a.key === "closed") return `Kapandı${a.reason ? ` · ${a.reason}` : ""}`;
  if (d.key === "none") return ACTIONS[a.key].label;
  if (a.key === "verify") return ACTIONS.verify.label;
  if (a.key === "channel") return ACTIONS.channel.label;
  return `${DELIVERY[d.key]} · ${a.key === "followup" ? "Takip zamanı geldi" : "Yanıt bekleniyor"}`;
}

/** Today's list in sales order; inside a group, the most overdue / oldest first. */
export function sortByPriority(cs: Contact[]): Contact[] {
  const rank = (c: Contact) => ACTION_ORDER.indexOf(nextAction(c).key);
  const when = (c: Contact) => nextAction(c).due || lastTouchAt(c) || c.imported_at;
  return [...cs].sort((a, b) => rank(a) - rank(b) || when(a).localeCompare(when(b)));
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
