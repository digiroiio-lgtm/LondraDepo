import PanelShell, { Bars, Card, ErrorBox, NotConnected, Stat, Table } from "@/components/panel/PanelShell";
import CopyButton from "@/components/panel/CopyButton";
import ImportPreview from "@/components/panel/ImportPreview";
import TargetForm from "@/components/panel/TargetForm";
import { kvConfigured } from "@/lib/panel/kv";
import {
  ACTIONS, ACTION_ORDER, PERIODS, REPORT_METRICS, backlogLines, buildReport, funnel, deliveryOf, eventLabel, eventsOf, groupByAction, lastTouchAt, mailtoFor, nextAction, reachedAt, reportSummary, sortByPriority, statusLine, today,
  type ActionKey, type Period,
} from "@/lib/panel/outreach";
import { fmtDate, safe } from "@/lib/panel/safe";
import {
  APPROVAL, BLOCK_TYPES, CLOSE_REASONS, FORM_STATUSES, PHONE_FORMATS, REPLIES, SENDER, SIGNATURE,
  buildBlockedPrompt, buildContactPromptFromLeads, channelPlan, recommendService, ukSignal, buildContactPromptResearch, contactTemplate, isBlocked,
  type Approval, type BlockType, type Contact, type FormStatus, type Reply,
} from "@/lib/panel/webcontact";
import { listContactRuns, listContacts } from "@/lib/panel/webcontact-store";
import { TEMPLATE_GROUPS, segmentById, targetFrom } from "@/lib/panel/wizard";
import { allDomains, listLeads } from "@/lib/panel/wizard-store";
import { addNote, changeReply, closeWithReason, confirmDelivery, followUp, importLog, markEmailed, markSent, markSkipped } from "./actions";

export const dynamic = "force-dynamic";

type SP = Record<string, string | string[] | undefined>;
const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

const STATUS_CLASS: Record<FormStatus, string> = {
  sent: "bg-green-100 text-green-800",
  captcha: "bg-amber-100 text-amber-800",
  error: "bg-amber-100 text-amber-800",
  phone_rejected: "bg-amber-100 text-amber-800",
  no_form: "bg-slate-100 text-slate-700",
  no_solicitation: "bg-slate-100 text-slate-500",
  skipped: "bg-slate-100 text-slate-500",
};

const ACTION_CLASS: Partial<Record<ActionKey, string>> = {
  reply: "bg-green-100 text-green-800",
  meeting: "bg-green-100 text-green-800",
  quote: "bg-green-100 text-green-800",
  verify: "bg-amber-100 text-amber-800",
  followup: "bg-[var(--pnl-primary-soft)] text-[var(--pnl-primary-ink)]",
  email: "bg-[var(--pnl-primary-soft)] text-[var(--pnl-primary-ink)]",
  blocked: "bg-amber-100 text-amber-800",
  fix: "bg-amber-100 text-amber-800",
  channel: "bg-slate-100 text-slate-700",
  wait: "bg-slate-100 text-slate-600",
  closed: "bg-slate-100 text-slate-500",
};

const link = (href: string, text: string) =>
  /^https?:\/\//i.test(href) ? <a href={href} target="_blank" rel="noopener noreferrer nofollow" className="underline break-all">{text}</a> : null;

const msgOf = (c: Contact) => c.message || contactTemplate(segmentById(c.segment)?.group, c.language === "tr" ? "tr" : "en");

function PhoneChips() {
  return (
    <div className="mt-3">
      <div className="text-xs font-semibold text-[var(--pnl-muted)] mb-1.5">Telefon formatları (form kabul etmezse sırayla deneyin; tıklayınca kopyalanır)</div>
      <div className="flex flex-wrap gap-1.5">
        {PHONE_FORMATS.map((f) => <CopyButton key={f.value} value={f.value} label={f.value} variant="chip" title={f.when} />)}
      </div>
      <p className="text-xs text-[var(--pnl-muted)] mt-1.5">Ülke kodu ayrı seçiliyorsa: United Kingdom (+44) seçin, numaraya 7554195190 yazın. Yalnız Türkiye numarası kabul eden zorunlu alanlarda numara uydurmayın.</p>
    </div>
  );
}

function SettingsFields({ n, ap }: { n: number; ap: Approval }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <label className="text-sm">Bu çalışmada en fazla kaç form
        <select name="n" defaultValue={String(n)} className="pnl-input">{[10, 20, 30].map((x) => <option key={x} value={x}>{x}</option>)}</select>
      </label>
      <label className="text-sm">Onay
        <select name="ap" defaultValue={ap} className="pnl-input">{Object.entries(APPROVAL).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select>
      </label>
    </div>
  );
}

/** Company name, place and segment. */
function Company({ c }: { c: Contact }) {
  return (
    <div className="min-w-[10rem] text-sm">
      <div className="font-semibold">{link(c.website, c.company) ?? c.company}</div>
      <div className="text-xs text-[var(--pnl-muted)]">{[c.country, segmentById(c.segment)?.label].filter(Boolean).join(" · ")}</div>
    </div>
  );
}

/** Where the company stands: one status line, then last contact, channel, confirmation source and follow-up date. */
function Where({ c }: { c: Contact }) {
  const d = deliveryOf(c);
  const a = nextAction(c);
  const touch = lastTouchAt(c);
  return (
    <div className="min-w-[12rem] text-xs">
      <div className="font-semibold text-sm">{statusLine(c)}</div>
      <div className="mt-1 text-[var(--pnl-muted)]">
        {touch ? `Son temas: ${fmtDate(touch)}` : "Henüz temas yok"}
        {d.key !== "none" && ` · Kanal: ${c.channel === "email" ? "e-posta" : "form"}`}
      </div>
      {d.source && <div className="mt-1 text-[var(--pnl-muted)]">Teyit: {d.source}</div>}
      {a.due && (a.key === "wait" || a.key === "followup") && <div className="mt-1">Takip tarihi: {fmtDate(a.due)}</div>}
      {a.reason && a.key !== "verify" && <div className="mt-1 text-amber-800">{a.reason}</div>}
      <div className="mt-1"><span className={`inline-block rounded-full px-2 py-0.5 ${STATUS_CLASS[c.form_status]}`}>Form: {FORM_STATUSES[c.form_status]}</span></div>
      {c.notes && <div className="mt-1 text-amber-800">{c.notes}</div>}
    </div>
  );
}

/** One-click next sales stage: reply → positive (book a call) → call held → quote sent. */
function StageButtons({ c, ret }: { c: Contact; ret: string }) {
  const next: [Reply, string][] = c.reply === "yanit" ? [["olumlu", "Olumlu → Görüşme planla"]] : c.reply === "olumlu" ? [["gorusme", "Görüşme yapıldı"]] : c.reply === "gorusme" ? [["teklif", "Teklif gönderildi"]] : [];
  if (!next.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5 mb-2">
      {c.reply === "olumlu" && <a href={`/panel/posta?d=${encodeURIComponent(c.domain)}&t=meeting#yaz`} className="pnl-btn-primary !py-1.5 !px-3 text-xs">Görüşme linkini gönder</a>}
      <form action={changeReply} className="flex flex-wrap gap-1.5">
        <Hidden d={c.domain} ret={ret} />
        {next.map(([v, l]) => <button key={v} name="reply" value={v} className={`${c.reply === "olumlu" ? "pnl-btn" : "pnl-btn-primary"} !py-1.5 !px-3 text-xs`}>{l}</button>)}
      </form>
    </div>
  );
}

/** Quick "no" with a reason: leaves active follow-up, keeps the record. */
function CloseForm({ c, ret }: { c: Contact; ret: string }) {
  return (
    <form action={closeWithReason} className="flex flex-wrap gap-1.5 items-center mt-2">
      <Hidden d={c.domain} ret={ret} />
      <span className="text-xs text-[var(--pnl-muted)]">Olumsuz:</span>
      {CLOSE_REASONS.map((r) => <button key={r} name="reason" value={r} className="pnl-chip text-xs hover:bg-[var(--pnl-primary-soft)]">{r}</button>)}
    </form>
  );
}

function History({ c }: { c: Contact }) {
  const ev = eventsOf(c);
  return (
    <details className="text-xs min-w-[12rem]">
      <summary className="cursor-pointer">Geçmiş ({ev.length})</summary>
      <ol className="mt-2 space-y-1 border-l-2 border-[var(--pnl-line-strong)] pl-3">
        {ev.map((e, i) => (
          <li key={i}><span className="text-[var(--pnl-muted)]">{fmtDate(e.at)}</span> · <strong>{eventLabel(e.type)}</strong>{e.note ? ` · ${e.note}` : ""}</li>
        ))}
      </ol>
    </details>
  );
}

function ReplyForm({ c, ret }: { c: Contact; ret: string }) {
  return (
    <form action={changeReply} className="flex gap-2 items-center">
      <input type="hidden" name="d" value={c.domain} />
      <input type="hidden" name="ret" value={ret} />
      <label className="sr-only" htmlFor={`rp-${c.domain}`}>Yanıt</label>
      <select id={`rp-${c.domain}`} name="reply" defaultValue={c.reply} className="pnl-select-sm">{Object.entries(REPLIES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select>
      <button className="text-xs underline">Kaydet</button>
    </form>
  );
}

function NoteForm({ c, ret }: { c: Contact; ret: string }) {
  return (
    <form action={addNote} className="flex gap-2 items-center mt-2">
      <input type="hidden" name="d" value={c.domain} />
      <input type="hidden" name="ret" value={ret} />
      <label className="sr-only" htmlFor={`nt-${c.domain}`}>Not</label>
      <input id={`nt-${c.domain}`} name="note" placeholder="Not ekle (ör. telefonla arandı)" className="pnl-select-sm min-w-[10rem]" />
      <button className="text-xs underline">Ekle</button>
    </form>
  );
}

const Hidden = ({ d, ret }: { d: string; ret: string }) => (
  <>
    <input type="hidden" name="d" value={d} />
    <input type="hidden" name="ret" value={ret} />
  </>
);

export default async function WebContactPage({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams;
  const go = one(sp.go);
  const tab = one(sp.tab) || (go ? "calistir" : "is");
  const n = [10, 20, 30].includes(Number(one(sp.n))) ? Number(one(sp.n)) : 20;
  const ap: Approval = one(sp.ap) === "each" ? "each" : "first2";
  const t = targetFrom((k) => sp[k]);
  const m = one(sp.m);
  const db = kvConfigured();

  const [contactsR, leadsR, runsR] = db ? await Promise.all([safe(() => listContacts()), safe(() => listLeads()), safe(listContactRuns)]) : [null, null, null];
  const contacts = contactsR?.ok ? contactsR.data : [];
  const leads = leadsR?.ok ? leadsR.data : [];
  const touched = new Set(contacts.map((c) => c.domain));
  const candidates = leads.filter((l) => l.status === "yeni" && l.tier !== "C" && !touched.has(l.domain)).sort((a, b) => b.priority - a.priority);
  const groups = groupByAction(contacts);
  const blocked = contacts.filter(isBlocked);
  const openCount = ACTION_ORDER.filter((k) => ACTIONS[k].open).reduce((a, k) => a + groups[k].length, 0);
  const reachedCount = contacts.filter((c) => reachedAt(c)).length;

  const tabLink = (k: string, extra = "") => `/panel/webcontact?tab=${k}${extra}`;

  return (
    <PanelShell active="/panel/webcontact" title="WebContact sihirbazı">
      {m && (m.startsWith("ok:") ? <p role="status" className="mb-4 rounded-2xl bg-[var(--pnl-success-soft)] border border-[#b2f2bb] text-[#1b6b3a] text-sm p-3">{m.slice(3)}</p> : <ErrorBox message={m} />)}

      <p className="text-sm text-[var(--pnl-muted)] mb-5 max-w-3xl">
        Ajan, şirketlerin iletişim formunu <strong>{SENDER.name}</strong> adına şirkete özel bir mesajla doldurur; yanıtlar <strong>{SENDER.email}</strong> adresine gelir. Her şirketin ne durumda olduğu, sıradaki işi ve geçmişi burada tutulur.
      </p>

      {db && contactsR?.ok && (
        <>
        <p className="text-xs uppercase tracking-wide text-[var(--pnl-muted)] mb-2">Tüm kayıtlar · {contacts.length} şirket</p>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <Stat label="Ulaşılan şirket" value={reachedCount} hint={`teyitli ${contacts.filter((c) => deliveryOf(c).key === "confirmed").length} · bildirilen ${contacts.filter((c) => deliveryOf(c).key === "user_reported").length} · e-posta ${contacts.filter((c) => deliveryOf(c).key === "email_sent").length} · belirsiz ${groups.verify.length}`} />
          <Stat label="Açık iş" value={openCount} hint="yapılması gereken" />
          <Stat label="Doğrulama engeli" value={blocked.length} hint="CAPTCHA / güvenlik kodu" />
          <Stat label="E-posta bekleyen" value={groups.email.length} hint="form yok, adres kayıtlı" />
          <Stat label="Yanıt geldi" value={contacts.filter((c) => c.reply === "yanit" || c.reply === "olumlu").length} hint={`olumlu: ${contacts.filter((c) => c.reply === "olumlu").length}`} />
        </div>
        </>
      )}
      {!db && <div className="mb-6"><NotConnected what="Sihirbaz veritabanı (Upstash Redis)" vars={["KV_REST_API_URL", "KV_REST_API_TOKEN"]} /></div>}

      <nav aria-label="WebContact bölümleri" className="pnl-segment mb-6">
        {[["is", "İş listesi"], ["rapor", "Rapor"], ["calistir", "Çalıştır"]].map(([k, v]) => (
          <a key={k} href={tabLink(k)} aria-current={tab === k ? "true" : undefined}>{v}</a>
        ))}
      </nav>

      {tab === "is" && <TaskTab contacts={contacts} groups={groups} sp={sp} ok={Boolean(contactsR?.ok)} error={contactsR && !contactsR.ok ? contactsR.error : undefined} />}
      {tab === "rapor" && <ReportTab contacts={contacts} groups={groups} sp={sp} />}
      {tab === "calistir" && (
        <RunTab
          go={go} n={n} ap={ap} t={t} db={db} candidates={candidates} blocked={blocked}
          runs={runsR?.ok ? runsR.data : []}
          known={go === "b" && db ? await safe(allDomains).then((r) => (r.ok ? r.data : [])) : []}
          touched={[...touched]}
          existing={contacts.map((c) => ({ ...c, message: "", subject: "", reason: "" }))}
          leadStatus={Object.fromEntries(leads.map((l) => [l.domain, l.status]))}
        />
      )}
    </PanelShell>
  );
}

// ---------- Task list ----------

function TaskTab({ contacts, groups, sp, ok, error }: { contacts: Contact[]; groups: Record<ActionKey, Contact[]>; sp: SP; ok: boolean; error?: string }) {
  const firstOpen = ACTION_ORDER.find((k) => ACTIONS[k].open && groups[k].length) ?? "wait";
  const g = (ACTION_ORDER as string[]).includes(one(sp.g)) ? (one(sp.g) as ActionKey) : firstOpen;
  const ret = `tab=is&g=${g}`;
  const list = sortByPriority(groups[g]);
  if (error) return <ErrorBox message={error} />;
  if (!ok) return <Card><p className="text-sm text-[var(--pnl-muted)]">Veritabanı bağlı değil.</p></Card>;

  return (
    <>
      <Card title="Yapılacaklar">
        <div id="isler" />
        <div className="flex flex-wrap gap-2">
          {ACTION_ORDER.map((k) => (
            <a key={k} href={`/panel/webcontact?tab=is&g=${k}#isler`} aria-current={g === k ? "true" : undefined}
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm ${g === k ? "border-[var(--pnl-primary)] bg-[var(--pnl-primary-soft)] text-[var(--pnl-primary-ink)] font-semibold" : "border-[var(--pnl-line-strong)] bg-white"}`}>
              {ACTIONS[k].label}
              <span className={`rounded-full px-2 text-xs ${ACTION_CLASS[k]}`}>{groups[k].length}</span>
            </a>
          ))}
        </div>
        <p className="text-sm text-[var(--pnl-muted)] mt-3">{ACTIONS[g].hint}</p>
      </Card>

      <Card title={`${ACTIONS[g].label} (${list.length})`}>
        {list.length === 0 ? <p className="text-sm text-[var(--pnl-muted)]">Bu grupta şirket yok.</p> : g === "blocked" ? <BlockedList list={list} ret={ret} /> : g === "fix" ? <FixList list={list} ret={ret} /> : g === "email" ? <EmailList list={list} ret={ret} /> : g === "followup" ? <FollowList list={list} ret={ret} /> : g === "verify" ? <VerifyList list={list} ret={ret} /> : g === "reply" ? <ReplyList list={list} ret={ret} /> : <GenericList list={list} ret={ret} />}
      </Card>

      <AllContacts contacts={contacts} sp={sp} />
    </>
  );
}

function BlockedList({ list, ret }: { list: Contact[]; ret: string }) {
  return (
    <>
      <div className="flex flex-wrap gap-2 mb-3">
        <a href={`/panel/webcontact?tab=calistir&go=c&n=${Math.min(30, Math.max(10, list.length))}#gorev`} className="pnl-btn-primary">Birlikte gönderme görev metni</a>
        <a href="/api/panel/webcontact/csv?f=blocked" className="pnl-btn-ghost">CSV indir</a>
      </div>
      <p className="text-sm text-[var(--pnl-muted)] mb-3">Ajan bu formları doldurdu ama doğrulama yüzünden göndermedi. Görev metniyle ajan her formu yeniden doldurur, doğrulamada durup kontrolü size verir; siz çözünce gönderir.</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {Object.entries(BLOCK_TYPES).map(([k, v]) => {
          const n2 = list.filter((c) => (c.block_type || "other") === k).length;
          return n2 ? <span key={k} className="pnl-chip">{v}: {n2}</span> : null;
        })}
      </div>
      <Table
        head={["Şirket", "Nerede takıldı", "Form ve deneme", "Mesaj", "İşlem"]}
        rows={list.slice(0, 100).map((c) => [
          <Company key="c" c={c} />,
          <div key="b" className="min-w-[12rem] text-xs">
            <span className="inline-block rounded-full px-2 py-0.5 bg-amber-100 text-amber-800">{BLOCK_TYPES[(c.block_type || "other") as BlockType] ?? c.block_type}</span>
            {c.block_detail && <div className="mt-1">{c.block_detail}</div>}
            {c.notes && <div className="mt-1 text-[var(--pnl-muted)]">{c.notes}</div>}
          </div>,
          <div key="f" className="min-w-[8rem] text-xs">
            <div>{link(c.contact_page_url || c.website, "Formu aç ↗")}</div>
            <div className="mt-1 text-[var(--pnl-muted)]">{fmtDate(c.imported_at)}</div>
            <div className="mt-1 text-[var(--pnl-muted)]">{c.attempts ?? 1}. deneme · {c.language === "tr" ? "TR" : "EN"}</div>
            <History c={c} />
          </div>,
          <details key="m" className="min-w-[14rem] text-xs">
            <summary className="cursor-pointer">Mesajı göster</summary>
            <textarea id={`bm-${c.domain}`} readOnly rows={6} value={msgOf(c)} className="pnl-input text-xs mt-2" />
            <div className="mt-2"><CopyButton target={`bm-${c.domain}`} label="Mesajı kopyala" /></div>
          </details>,
          <div key="a" className="flex flex-col gap-2 min-w-[7rem]">
            <form action={markSent}><Hidden d={c.domain} ret={ret} /><button className="pnl-btn w-full">Gönderdim</button></form>
            <form action={markSkipped}><Hidden d={c.domain} ret={ret} /><button className="pnl-btn-ghost w-full">Vazgeç</button></form>
          </div>,
        ])}
      />
      <PhoneChips />
    </>
  );
}

function FixList({ list, ret }: { list: Contact[]; ret: string }) {
  return (
    <>
      <p className="text-sm text-[var(--pnl-muted)] mb-3">Site hata verdi, gönderim teyidi gelmedi veya telefon biçimi kabul edilmedi. Formu açıp elle deneyin; sebebi not olarak ekleyin, gönderdiyseniz &quot;Gönderdim&quot;e basın.</p>
      <div className="grid gap-4">
        {list.slice(0, 40).map((c) => (
          <div key={c.domain} className="pnl-card p-4 !shadow-none">
            <div className="flex flex-wrap items-center gap-3 mb-2 text-sm">
              <strong>{c.company}</strong>
              <span className={`rounded-full px-2 py-0.5 text-xs ${STATUS_CLASS[c.form_status]}`}>{FORM_STATUSES[c.form_status]}</span>
              {link(c.contact_page_url || c.website, "Formu aç ↗")}
              {c.email_fallback && <span className="text-xs text-[var(--pnl-muted)]">Yedek e-posta: {c.email_fallback}</span>}
            </div>
            {c.notes && <p className="text-xs text-amber-800 mb-2">Ne oldu: {c.notes}</p>}
            <textarea id={`msg-${c.domain}`} readOnly rows={5} value={msgOf(c)} className="pnl-input text-xs" aria-label="Mesaj" />
            <div className="mt-2 flex flex-wrap gap-2 items-center">
              <CopyButton target={`msg-${c.domain}`} label="Mesajı kopyala" />
              <form action={markSent}><Hidden d={c.domain} ret={ret} /><button className="pnl-btn">Gönderdim</button></form>
              {c.email_fallback && <a href={`/panel/posta?d=${encodeURIComponent(c.domain)}#yaz`} className="pnl-btn-ghost">Panelden e-posta gönder</a>}
              {c.email_fallback && <form action={markEmailed}><Hidden d={c.domain} ret={ret} /><button className="pnl-btn-ghost">E-postayla gönderdim</button></form>}
              <form action={markSkipped}><Hidden d={c.domain} ret={ret} /><button className="pnl-btn-ghost">Vazgeç</button></form>
            </div>
            <NoteForm c={c} ret={ret} />
            <div className="mt-2"><History c={c} /></div>
            <PhoneChips />
          </div>
        ))}
      </div>
    </>
  );
}

function EmailList({ list, ret }: { list: Contact[]; ret: string }) {
  return (
    <>
      <p className="text-sm text-[var(--pnl-muted)] mb-3">
        Bu şirketlerin sitesinde iletişim formu yok; ajan kurumsal e-posta adresini kaydetti. &quot;Panelden gönder&quot; hazır mesajı support@ kutusundan göndermeniz için açar ve gönderimi kendiliğinden kaydeder. Kendi e-posta programınızdan gönderirseniz sonra &quot;Gönderdim&quot;e basın.
      </p>
      <Table
        head={["Şirket", "Adres", "Mesaj", "İşlem"]}
        rows={list.map((c) => {
          const href = mailtoFor(c, msgOf(c));
          return [
            <Company key="c" c={c} />,
            <div key="e" className="min-w-[10rem] text-xs">
              <div className="font-mono break-all">{c.email_fallback}</div>
              <div className="mt-1 text-[var(--pnl-muted)]">Kaydedildi: {fmtDate(c.imported_at)}</div>
              <History c={c} />
            </div>,
            <details key="m" className="min-w-[14rem] text-xs">
              <summary className="cursor-pointer">{c.subject || "Mesajı göster"}</summary>
              <textarea id={`em-${c.domain}`} readOnly rows={7} value={msgOf(c)} className="pnl-input text-xs mt-2" />
              <div className="mt-2"><CopyButton target={`em-${c.domain}`} label="Mesajı kopyala" /></div>
            </details>,
            <div key="a" className="flex flex-col gap-2 min-w-[9rem]">
              {href ? <a href={`/panel/posta?d=${encodeURIComponent(c.domain)}#yaz`} className="pnl-btn-primary">Panelden gönder</a> : <span className="text-xs text-amber-800">Adres geçersiz</span>}
              {href && <a href={href} className="pnl-btn-ghost">Kendi e-postamda aç</a>}
              <form action={markEmailed}><Hidden d={c.domain} ret={ret} /><button className="pnl-btn w-full">Gönderdim</button></form>
              <form action={markSkipped}><Hidden d={c.domain} ret={ret} /><button className="pnl-btn-ghost w-full">Vazgeç</button></form>
            </div>,
          ];
        })}
      />
    </>
  );
}

function FollowList({ list, ret }: { list: Contact[]; ret: string }) {
  return (
    <>
      <p className="text-sm text-[var(--pnl-muted)] mb-3">Mesaj en az 5 iş günü önce ulaştı, yanıt yok. Adresi kayıtlı şirketlere &quot;Takip e-postası hazırla&quot; ile kısa, kişiselleştirilmiş bir takip (görüşme linkiyle) panelden gider ve geçmişe işlenir. Adres yoksa Apollo&apos;da takip görevi açın ya da telefonla takip edip not düşün.</p>
      <Table
        head={["Şirket", "Ulaşıldı", "Yedek e-posta", "Not / yanıt"]}
        rows={list.slice(0, 50).map((c) => [
          <Company key="c" c={c} />,
          <Where key="w" c={c} />,
          <div key="e" className="text-xs min-w-[9rem]">{c.email_fallback || "—"}<div className="mt-1"><History c={c} /></div></div>,
          <div key="n" className="min-w-[12rem]">
            {c.email_fallback || c.thread_id ? <a href={`/panel/posta?d=${encodeURIComponent(c.domain)}&t=followup#yaz`} className="pnl-btn-primary !py-1.5 !px-3 text-xs inline-block mb-2">Takip e-postası hazırla</a> : <span className="text-xs text-[var(--pnl-muted)] block mb-2">E-posta adresi yok</span>}
            <ReplyForm c={c} ret={ret} /><NoteForm c={c} ret={ret} />
          </div>,
        ])}
      />
      <form action={followUp} className="mt-3">
        {list.slice(0, 25).map((c) => <input key={c.domain} type="hidden" name="d" value={c.domain} />)}
        <input type="hidden" name="ret" value={ret} />
        <button className="pnl-btn-primary">Bu {Math.min(list.length, 25)} şirket için Apollo takip görevi aç</button>
      </form>
    </>
  );
}

function ReplyList({ list, ret }: { list: Contact[]; ret: string }) {
  return (
    <>
      <p className="text-sm text-[var(--pnl-muted)] mb-3">Gelen yanıtı okuyun (geçmişte e-postanın özeti var). Olumluysa &quot;Olumlu&quot; seçin; olumsuzsa gerekçeyi tıklayın: şirket aktif takipten çıkar ama kaydı kalır.</p>
      <Table
        head={["Şirket", "Durum", "Yanıt ve geçmiş", "İşlem"]}
        rows={list.map((c) => {
          const lastReply = [...eventsOf(c)].reverse().find((e) => e.type === "reply");
          return [
            <Company key="c" c={c} />,
            <Where key="w" c={c} />,
            <div key="h" className="min-w-[14rem] text-xs">{lastReply?.note && <p className="mb-2 whitespace-pre-line">{lastReply.note}</p>}<History c={c} /></div>,
            <div key="r" className="min-w-[14rem]"><StageButtons c={c} ret={ret} /><ReplyForm c={c} ret={ret} /><CloseForm c={c} ret={ret} /><NoteForm c={c} ret={ret} /></div>,
          ];
        })}
      />
    </>
  );
}

function VerifyList({ list, ret }: { list: Contact[]; ret: string }) {
  return (
    <>
      <p className="text-sm text-[var(--pnl-muted)] mb-3">Bu formların ulaştığı teyit edilmedi. Aynı şirkete ikinci kez yazmadan önce kontrol edin: gelen kutusunda otomatik teyit var mı, sitede &quot;mesajınız alındı&quot; görüldü mü? Ulaştıysa &quot;Ulaştı say&quot;, ulaşmadıysa formu tekrar gönderin.</p>
      <Table
        head={["Şirket", "Neden belirsiz", "Form", "İşlem"]}
        rows={list.map((c) => [
          <Company key="c" c={c} />,
          <div key="w" className="min-w-[12rem] text-xs"><div className="font-semibold">{deliveryOf(c).source}</div>{c.notes && <div className="mt-1 text-amber-800">{c.notes}</div>}<div className="mt-1"><History c={c} /></div></div>,
          <div key="f" className="min-w-[10rem] text-xs">
            <div>{link(c.contact_page_url || c.website, "Formu aç ↗")}</div>
            <details className="mt-1"><summary className="cursor-pointer">Mesajı göster</summary><textarea id={`vm-${c.domain}`} readOnly rows={5} value={msgOf(c)} className="pnl-input text-xs mt-2" /><div className="mt-2"><CopyButton target={`vm-${c.domain}`} label="Mesajı kopyala" /></div></details>
          </div>,
          <div key="a" className="flex flex-col gap-2 min-w-[8rem]">
            <form action={confirmDelivery}><Hidden d={c.domain} ret={ret} /><button className="pnl-btn-primary w-full">Ulaştı say</button></form>
            <form action={markSent}><Hidden d={c.domain} ret={ret} /><button className="pnl-btn w-full">Tekrar gönderdim</button></form>
            <form action={markSkipped}><Hidden d={c.domain} ret={ret} /><button className="pnl-btn-ghost w-full">Vazgeç</button></form>
          </div>,
        ])}
      />
    </>
  );
}

function GenericList({ list, ret }: { list: Contact[]; ret: string }) {
  return (
    <Table
      head={["Şirket", "Durum", "Geçmiş", "Yanıt / not"]}
      rows={list.slice(0, 200).map((c) => [
        <Company key="c" c={c} />,
        <Where key="w" c={c} />,
        <History key="h" c={c} />,
        <div key="r"><StageButtons c={c} ret={ret} /><ReplyForm c={c} ret={ret} />{["meeting", "quote"].includes(nextAction(c).key) && <CloseForm c={c} ret={ret} />}<NoteForm c={c} ret={ret} /></div>,
      ])}
    />
  );
}

function AllContacts({ contacts, sp }: { contacts: Contact[]; sp: SP }) {
  const fs = one(sp.fs) as FormStatus | "";
  const fr = one(sp.fr) as Reply | "";
  const fa = one(sp.fa) as ActionKey | "";
  const fq = one(sp.fq).toLowerCase();
  const shown = contacts
    .filter((c) => (!fs || c.form_status === fs) && (!fr || c.reply === fr) && (!fa || nextAction(c).key === fa))
    .filter((c) => !fq || [c.company, c.domain, c.country, c.message, c.reason, c.email_fallback, c.notes].join(" ").toLowerCase().includes(fq));
  const ret = `tab=is&${new URLSearchParams(Object.entries({ fs, fr, fa, fq }).filter(([, v]) => v) as [string, string][]).toString()}`;
  return (
    <Card title={`Tüm temaslar (${shown.length})`}>
      <div id="temaslar" />
      <form method="get" className="grid sm:grid-cols-5 gap-3 mb-4 items-end" role="search">
        <input type="hidden" name="tab" value="is" />
        <label className="text-sm sm:col-span-2">Ara<input name="fq" defaultValue={fq} placeholder="Şirket, ülke, e-posta, not…" className="pnl-input" /></label>
        <label className="text-sm">Sıradaki iş<select name="fa" defaultValue={fa} className="pnl-input"><option value="">Tümü</option>{ACTION_ORDER.map((k) => <option key={k} value={k}>{ACTIONS[k].label}</option>)}</select></label>
        <label className="text-sm">Form<select name="fs" defaultValue={fs} className="pnl-input"><option value="">Tümü</option>{Object.entries(FORM_STATUSES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></label>
        <label className="text-sm">Yanıt<select name="fr" defaultValue={fr} className="pnl-input"><option value="">Tümü</option>{Object.entries(REPLIES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></label>
        <div className="sm:col-span-5 flex flex-wrap gap-3">
          <button className="pnl-btn">Filtrele</button>
          <a href="/api/panel/webcontact/csv" className="pnl-btn-ghost">Tümünü CSV indir</a>
        </div>
      </form>
      <Table
        head={["Şirket", "Sıradaki iş", "Durum", "Mesaj ve geçmiş", "Yanıt"]}
        rows={shown.slice(0, 300).map((c) => {
          const na = nextAction(c).key;
          return [
            <div key="c"><Company c={c} />{c.email_fallback && <div className="text-xs mt-1 font-mono break-all">{c.email_fallback}</div>}</div>,
            <a key="a" href={`/panel/webcontact?tab=is&g=${na}#isler`} className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs ${ACTION_CLASS[na]}`}>{ACTIONS[na].label}</a>,
            <Where key="w" c={c} />,
            <div key="m" className="min-w-[14rem] text-xs">
              <details>
                <summary className="cursor-pointer">{c.subject || (c.message ? `${c.message.slice(0, 60)}…` : "Mesaj yok")}</summary>
                <p className="whitespace-pre-line mt-2">{c.message}</p>
                {c.confirmation_text && <p className="mt-2 text-green-800">✓ {c.confirmation_text}</p>}
                {c.phone_used && <p className="mt-1 text-[var(--pnl-muted)]">Tel: <span className="font-mono">{c.phone_used}</span></p>}
              </details>
              <div className="mt-1"><History c={c} /></div>
            </div>,
            <ReplyForm key="r" c={c} ret={ret} />,
          ];
        })}
        empty="Henüz kayıt yok."
      />
    </Card>
  );
}

// ---------- Reports ----------

function ReportTab({ contacts, groups, sp }: { contacts: Contact[]; groups: Record<ActionKey, Contact[]>; sp: SP }) {
  const period: Period = (["day", "week", "month"] as string[]).includes(one(sp.p)) ? (one(sp.p) as Period) : "week";
  const anchor = /^\d{4}-\d{2}-\d{2}$/.test(one(sp.d)) ? one(sp.d) : today();
  const rep = buildReport(contacts, period, anchor);
  const backlog = backlogLines(contacts);
  const summary = `${funnel(contacts).map((f) => `${f.label}: ${f.value}`).join(" → ")}\n${backlog.map((b) => `- ${b.text}`).join("\n")}\n\n${reportSummary(rep, groups)}`;
  const href = (p: Period, d: string) => `/panel/webcontact?tab=rapor&p=${p}&d=${d}`;
  return (
    <>
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <nav aria-label="Dönem" className="pnl-segment">
          {(Object.keys(PERIODS) as Period[]).map((p) => <a key={p} href={href(p, anchor)} aria-current={period === p ? "true" : undefined}>{PERIODS[p]}</a>)}
        </nav>
        <div className="inline-flex items-center gap-1 rounded-full bg-white border border-[var(--pnl-line-strong)] px-1.5 py-1">
          <a href={href(period, rep.range.prev)} aria-label="Önceki dönem" className="grid place-items-center h-8 w-8 rounded-full hover:bg-[var(--pnl-primary-soft)]">‹</a>
          <span className="px-2 text-sm font-medium">{rep.range.label}</span>
          <a href={href(period, rep.range.next)} aria-label="Sonraki dönem" className="grid place-items-center h-8 w-8 rounded-full hover:bg-[var(--pnl-primary-soft)]">›</a>
        </div>
        {anchor !== today() && <a href={href(period, today())} className="text-sm underline">Bugüne dön ↩</a>}
      </div>

      <Card title="Satış sonucu (tüm kayıtlar)">
        <ol className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {funnel(contacts).map((f, i) => (
            <li key={f.label} className="rounded-2xl bg-[var(--pnl-main)] px-3 py-2.5">
              <div className="text-xs text-[var(--pnl-muted)]">{i ? "→ " : ""}{f.label}</div>
              <div className="text-2xl font-semibold">{f.value}</div>
            </li>
          ))}
        </ol>
        {backlog.length > 0 && (
          <ul className="mt-4 grid gap-1.5 text-sm">
            {backlog.map((b) => <li key={b.text}><a href={b.href} className="underline decoration-[var(--pnl-line-strong)] hover:decoration-[var(--pnl-primary)]">{b.text}</a></li>)}
          </ul>
        )}
      </Card>

      <h2 className="text-sm font-semibold text-[var(--pnl-muted)] mb-3">Bu dönemde yapılanlar · {rep.range.label}</h2>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {REPORT_METRICS.map((mt) => <Stat key={mt.key} label={mt.label} value={rep.counts[mt.key] ?? 0} />)}
      </div>

      {period !== "day" && (
        <Card title="Günlük ulaşılan şirket (form + e-posta)">
          <Bars data={rep.days} label="Günlük ulaşılan şirket" />
        </Card>
      )}

      <Card title="Özet (paylaşmak için)">
        <textarea id="rapor-ozet" readOnly rows={12} value={summary} className="pnl-input text-sm" />
        <div className="mt-3"><CopyButton target="rapor-ozet" label="Özeti kopyala" /></div>
      </Card>

      <Card title={`Bu dönemde yapılanlar (${rep.rows.length})`}>
        <Table
          head={["Zaman", "Şirket", "Ne oldu", "Ayrıntı"]}
          rows={rep.rows.slice(0, 300).map((r) => [fmtDate(r.at), r.company, eventLabel(r.type), <span key="n" className="text-xs">{r.note ?? ""}</span>])}
          empty="Bu dönemde kayıt yok."
        />
      </Card>
    </>
  );
}

// ---------- Run (agent tasks + import) ----------

function RunTab({ go, n, ap, t, db, candidates, blocked, runs, known, touched, existing, leadStatus }: {
  go: string; n: number; ap: Approval; t: ReturnType<typeof targetFrom>; db: boolean; existing: Contact[]; leadStatus: Record<string, string>;
  candidates: Awaited<ReturnType<typeof listLeads>>; blocked: Contact[];
  runs: Awaited<ReturnType<typeof listContactRuns>>; known: string[]; touched: string[];
}) {
  let prompt = "";
  let chosen: typeof candidates = [];
  if (go === "a") {
    chosen = candidates.slice(0, n);
    prompt = chosen.length ? buildContactPromptFromLeads(chosen, { count: n, approval: ap }) : "";
  } else if (go === "c") {
    prompt = blocked.length ? buildBlockedPrompt(blocked.slice(0, n)) : "";
  } else if (go === "b") {
    prompt = buildContactPromptResearch(t, [...new Set([...known, ...touched])], { count: n, approval: ap });
  }
  return (
    <>
      <Card title="1a. Müşteri sihirbazı listesinden (önerilen)">
        <p className="text-sm text-[var(--pnl-muted)] mb-3">
          Araştırması yapılmış, henüz temas edilmemiş A ve B öncelikli şirketler, en değerliden başlayarak. Şu an <strong>{candidates.length}</strong> uygun şirket var.
        </p>
        <form method="get" className="grid gap-4">
          <input type="hidden" name="tab" value="calistir" />
          <input type="hidden" name="go" value="a" />
          <SettingsFields n={n} ap={ap} />
          <div><button className="pnl-btn-primary" disabled={!candidates.length}>Görev metnini oluştur</button></div>
        </form>
        {!candidates.length && db && (
          <div className="pnl-callout mt-3 flex flex-wrap items-center justify-between gap-3 !py-3">
            <span className="text-sm">Temas edilmemiş uygun aday kalmadı.</span>
            <a href="/panel/sihirbaz" className="rounded-full bg-white/20 px-3 py-1 text-sm font-semibold">Aday bul →</a>
          </div>
        )}
        {candidates.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-semibold mb-2">Önizleme: sıradaki {Math.min(n, candidates.length)} şirket ve kanal</h3>
            <Table
              head={["Şirket", "UK satış sinyali", "Önerilen hizmet", "Alıcı ve kanal"]}
              rows={(chosen.length ? chosen : candidates.slice(0, n)).map((l) => {
                const sig = ukSignal(l);
                const svc = recommendService(l, segmentById(l.segment)?.group);
                return [
                  <div key="c" className="min-w-[9rem] text-sm"><div className="font-semibold">{l.company}</div><div className="text-xs text-[var(--pnl-muted)]">{l.tier} · {l.priority} · {l.country}</div></div>,
                  <div key="s" className="min-w-[10rem] text-xs">{sig ? <>{sig.signal}{sig.source && <> · <a href={sig.source} target="_blank" rel="noopener noreferrer" className="underline">kaynak ↗</a></>}</> : <span className="text-amber-800">Sinyal yok · önce doğrulayın</span>}</div>,
                  <div key="h" className="min-w-[10rem] text-xs"><strong>{svc.service}</strong>{svc.note && <div className="text-[var(--pnl-muted)]">{svc.note}</div>}</div>,
                  <div key="k" className="min-w-[10rem] text-xs">{channelPlan(l)}</div>,
                ];
              })}
            />
            <p className="text-xs text-[var(--pnl-muted)] mt-2">Ajan ilk iki onayda her şirket için kullandığı kanalı ve formun satışa uygun olup olmadığını gösterir; vergi numarası, üyelik veya yalnız destek isteyen formları göndermez.</p>
          </div>
        )}
      </Card>

      <Card title="1b. Yeni araştırma + form">
        <details>
          <summary className="cursor-pointer text-sm font-semibold">Hedef seçimini aç</summary>
          <div className="mt-4">
            <TargetForm t={t} hidden={<><input type="hidden" name="tab" value="calistir" /><input type="hidden" name="go" value="b" /></>} count={<SettingsFields n={n} ap={ap} />} />
          </div>
        </details>
      </Card>

      {go && (
        <Card title={go === "c" ? "2. Doğrulama engelleri: birlikte gönderme görev metni" : "2. Görev metnini ajana ver"}>
          <div id="gorev" />
          {go === "a" && chosen.length > 0 && (
            <details className="mb-3">
              <summary className="cursor-pointer text-sm">Seçilen {chosen.length} şirket</summary>
              <ul className="text-xs mt-2 grid sm:grid-cols-2 gap-1">{chosen.map((l) => <li key={l.domain}>{l.tier} · {l.priority} — {l.company} ({segmentById(l.segment)?.label ?? "segmentsiz"})</li>)}</ul>
            </details>
          )}
          {prompt ? (
            <>
              <ol className="list-decimal pl-5 text-sm mb-4 space-y-1">
                <li>Metni <strong>Kopyala</strong> ile kopyalayın.</li>
                <li>ChatGPT&apos;de yeni sohbet açın, <strong>Agent</strong> modunu seçin, metni yapıştırıp gönderin.</li>
                <li>Ajan ilk formları göstermeden önce onayınızı isteyecek; mesajı kontrol edip onaylayın.</li>
                <li>Bitince verdiği CSV kaydının tamamını 3. adıma yapıştırın.</li>
              </ol>
              <textarea id="prompt" readOnly value={prompt} rows={16} className="pnl-input font-mono text-xs" aria-label="Görev metni" />
              <div className="mt-3"><CopyButton target="prompt" label="Görev metnini kopyala" /></div>
            </>
          ) : <p className="text-sm text-[var(--pnl-muted)]">Uygun şirket bulunamadı.</p>}
        </Card>
      )}

      <Card title="3. Ajanın kaydını içeri al">
        <div id="ice-aktar" />
        {db ? (
          <form action={importLog} className="grid gap-3">
            <input type="hidden" name="mode" value={go === "b" ? "b" : go === "c" ? "c" : "a"} />
            <input type="hidden" name="ret" value={`tab=calistir${go ? `&go=${go}` : ""}`} />
            {go === "b" && (
              <>
                <input type="hidden" name="region" value={t.region} />
                <input type="hidden" name="size" value={t.size} />
                {t.segments.map((s) => <input key={s} type="hidden" name="s" value={s} />)}
                {t.countries.map((c) => <input key={c} type="hidden" name="c" value={c} />)}
              </>
            )}
            <ImportPreview existing={existing} leadStatus={leadStatus} />
            <p className="text-xs text-[var(--pnl-muted)]">İçe aktarınca her şirket İş listesinde sıradaki işine göre yerini alır ve geçmişine işlenir. Herhangi bir kanaldan (form, e-posta, yanıt) zaten ulaşılmış şirketlerin kaydı değişmez; Müşteri sihirbazı, WebContact ve E-posta aynı şirket kaydını kullanır.</p>
            <div><button className="pnl-btn-primary">İçeri al</button></div>
          </form>
        ) : <p className="text-sm text-[var(--pnl-muted)]">Önce veritabanını bağlayın.</p>}
      </Card>

      <Card title="Örnek form mesajları ve imza">
        <p className="text-sm text-[var(--pnl-muted)] mb-3">Ajan bu yapıyı her şirkete göre kişiselleştirir. Elle gönderirken de kullanabilirsiniz.</p>
        <pre className="text-xs bg-[var(--pnl-main)] rounded-2xl p-4 mb-3 whitespace-pre-wrap">{SIGNATURE}</pre>
        <PhoneChips />
        <div className="mb-3" />
        {TEMPLATE_GROUPS.map(({ group, label }) => (
          <details key={group} className="border-t border-[var(--pnl-line)] py-2">
            <summary className="cursor-pointer font-semibold text-sm">{label}</summary>
            <div className="grid lg:grid-cols-2 gap-4 mt-3">
              {(["tr", "en"] as const).map((lang) => (
                <div key={lang}>
                  <h3 className="font-semibold text-sm mb-1">{lang === "tr" ? "Türkçe" : "English"}</h3>
                  <textarea id={`wc-${group}-${lang}`} readOnly rows={12} className="pnl-input text-xs" value={contactTemplate(group, lang)} />
                  <div className="mt-2"><CopyButton target={`wc-${group}-${lang}`} /></div>
                </div>
              ))}
            </div>
          </details>
        ))}
      </Card>

      {runs.length > 0 && (
        <Card title="Son çalışmalar">
          <Table
            head={["Tarih", "Kaynak", "Gönderildi", "Doğrulama", "Elle", "Formsuz", "Atlandı", "Tekrar"]}
            rows={runs.map((r) => [fmtDate(r.at), r.mode === "a" ? "Müşteri listesi" : r.mode === "c" ? "Doğrulama engelleri" : "Yeni araştırma", r.sent, r.blocked ?? "—", r.manual, r.noForm, r.skipped, r.duplicates])}
          />
        </Card>
      )}
    </>
  );
}
