import PanelShell, { Card, ErrorBox, NotConnected, Stat, Table } from "@/components/panel/PanelShell";
import { GMAIL_USER, SENDER_NAME, gmailConfigured } from "@/lib/panel/gmail";
import { kvConfigured } from "@/lib/panel/kv";
import { DAILY_SEND_LIMIT, lastSync, recentInbox, sentToday, syncInbox, type MailKind } from "@/lib/panel/mail-sync";
import { eventsOf } from "@/lib/panel/outreach";
import { fmtDate, safe } from "@/lib/panel/safe";
import { ADDRESS_TYPES, personalize, rankAddresses, recommendService, remainingPlaceholders, ukSignal } from "@/lib/panel/mail-compose";
import { isSystemMail, type InboxItem } from "@/lib/panel/mail-match";
import type { Contact } from "@/lib/panel/webcontact";
import { contactTemplate } from "@/lib/panel/webcontact";
import { getContact, listContacts } from "@/lib/panel/webcontact-store";
import { segmentById } from "@/lib/panel/wizard";
import { getLead } from "@/lib/panel/wizard-store";
import { ignoreMail, linkMail, sendEmail, syncNow } from "./actions";

export const dynamic = "force-dynamic";

type SP = Record<string, string | string[] | undefined>;
const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

const KIND: Record<MailKind, [string, string]> = {
  reply: ["Yanıt", "bg-green-100 text-green-800"],
  auto_ack: ["Otomatik teyit", "bg-[var(--pnl-primary-soft)] text-[var(--pnl-primary-ink)]"],
  other: ["Diğer", "bg-slate-100 text-slate-600"],
  own: ["Bizden", "bg-slate-100 text-slate-500"],
  system: ["Sistem / deneme", "bg-slate-100 text-slate-500"],
};

const SYNC_EVERY_MS = 10 * 60 * 1000;

function Setup() {
  return (
    <Card title="Gmail bağlantısı: kurulum">
      <NotConnected what="Gmail (support@londradepo.com)" vars={["GOOGLE_SERVICE_ACCOUNT_JSON", "GMAIL_USER"]} />
      <ol className="list-decimal pl-5 text-sm space-y-2 mt-4">
        <li><strong>Google Cloud</strong>: proje → Gmail API (ve Google Analytics Data API, Search Console API) etkinleştir → servis hesabı oluştur → <em>Keys → Add key → JSON</em> indir.</li>
        <li><strong>Workspace Yönetici Konsolu</strong> (admin.google.com): Güvenlik → Erişim ve veri kontrolü → API kontrolleri → <em>Alan genelinde yetkilendirme</em> → Yeni ekle: servis hesabının <em>Client ID</em>&apos;si ve kapsamlar <code className="break-all">https://www.googleapis.com/auth/gmail.readonly,https://www.googleapis.com/auth/gmail.send</code></li>
        <li><strong>Vercel</strong> → Environment Variables (Production): <code>GOOGLE_SERVICE_ACCOUNT_JSON</code> = JSON dosyasının tüm içeriği, <code>GMAIL_USER</code> = <code>{GMAIL_USER}</code> → Redeploy.</li>
      </ol>
      <p className="text-xs text-[var(--pnl-muted)] mt-3">Ayrıntılı adımlar: <code>docs/panel-setup.md</code> → &quot;Gmail&quot;. Panel yalnızca bu kutuyu okur ve buradan gönderir; e-posta silemez, ayar değiştiremez.</p>
    </Card>
  );
}

export default async function MailPage({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams;
  const m = one(sp.m);
  const d = one(sp.d);
  const db = kvConfigured();
  const on = gmailConfigured() && db;

  // Keep the inbox fresh without a button press (at most every 10 minutes).
  let syncError = "";
  if (on) {
    const last = await safe(lastSync);
    const stale = !last.ok || !last.data || Date.now() - new Date(last.data).getTime() > SYNC_EVERY_MS;
    if (stale) {
      const r = await safe(() => syncInbox(30));
      if (!r.ok) syncError = r.error;
    }
  }

  const [inboxR, contactsR, lastR, sentR, contactR] = db
    ? await Promise.all([safe(recentInbox), safe(() => listContacts()), safe(lastSync), safe(sentToday), d ? safe(() => getContact(d)) : Promise.resolve(null)])
    : [null, null, null, null, null];
  const inbox = inboxR?.ok ? inboxR.data : [];
  const contacts = contactsR?.ok ? contactsR.data : [];
  const c = contactR?.ok ? contactR.data : null;
  const lang = c?.language === "tr" ? "tr" : "en";
  const leadR = c ? await safe(() => getLead(c.domain)) : null;
  const lead = leadR?.ok ? leadR.data : null;
  const facts = c ? { company: c.company, lang, contactName: lead?.contact_name, products: lead?.products, ukEvidence: lead?.uk_evidence, amazonUk: /^yes$/i.test(lead?.amazon_uk ?? "") } as const : null;
  const body = c && facts ? personalize(c.message || contactTemplate(segmentById(c.segment)?.group, lang), facts) : "";
  const todo = remainingPlaceholders(body);
  const subject = c ? c.subject || (lang === "tr" ? "İngiltere'de depolama ve dağıtım: LondraDepo" : "UK warehousing and distribution: LondraDepo") : "";
  const addresses = c ? rankAddresses(c.email_fallback) : [];
  const to = addresses[0]?.email ?? "";
  const signal = ukSignal(lead);
  const service = recommendService(lead, segmentById(c?.segment ?? "")?.group);
  // Rows stored before system mail was recognised are shown as system right away.
  const shownInbox = inbox.filter((i) => !i.ignored).map((i) => (!i.domain && i.kind !== "own" && isSystemMail(i) ? { ...i, kind: "system" as const, suggest: undefined } : i));
  const withEmail = contacts.filter((x) => x.email_fallback);
  const sentLog = contacts
    .flatMap((x) => eventsOf(x).filter((e) => e.type === "email_sent").map((e) => ({ ...e, company: x.company, domain: x.domain })))
    .sort((a, b) => b.at.localeCompare(a.at))
    .slice(0, 30);

  return (
    <PanelShell active="/panel/posta" title="E-posta">
      {m && (m.startsWith("ok:") ? <p role="status" className="mb-4 rounded-2xl bg-[var(--pnl-success-soft)] border border-[#b2f2bb] text-[#1b6b3a] text-sm p-3">{m.slice(3)}</p> : <ErrorBox message={m} />)}
      {syncError && <div className="mb-4"><ErrorBox message={syncError} /></div>}

      <p className="text-sm text-[var(--pnl-muted)] mb-5 max-w-3xl">
        <strong>{GMAIL_USER}</strong> kutusu. Gelen e-postalar şirketlerle eşleştirilir: gerçek yanıtlar şirketi &quot;Yanıt geldi&quot; yapar, &quot;talebiniz alındı&quot; gibi otomatik e-postalar form teyidi olarak geçmişe işlenir. Buradan gönderilen e-postalar <strong>{SENDER_NAME}</strong> adıyla gider.
      </p>

      {!on && <Setup />}

      {on && (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Stat label="Son tarama" value={lastR?.ok && lastR.data ? fmtDate(lastR.data) : "—"} hint="10 dakikada bir kendiliğinden" />
            <Stat label="Şirket yanıtı (son 100)" value={inbox.filter((i) => i.kind === "reply" && i.domain).length} hint={`${shownInbox.filter((i) => !i.domain && i.kind !== "own" && i.kind !== "system").length} e-posta bağlanmayı bekliyor`} />
            <Stat label="Otomatik teyit" value={inbox.filter((i) => i.kind === "auto_ack" && i.domain).length} />
            <Stat label="Bugün gönderilen" value={`${sentR?.ok ? sentR.data : 0} / ${DAILY_SEND_LIMIT}`} hint="günlük güvenlik sınırı" />
          </div>

          <Card title="Gelen kutusu" action={<form action={syncNow}><button className="pnl-btn">Şimdi tara</button></form>}>
            <div id="gelen" />
            <Table
              head={["Tarih", "Gönderen", "Konu", "Tür", "Şirket"]}
              rows={shownInbox.slice(0, 60).map((i) => [
                <span key="t" className="text-xs whitespace-nowrap">{fmtDate(i.date)}</span>,
                <span key="f" className={`text-xs break-all min-w-[10rem] inline-block ${i.kind === "system" ? "text-[var(--pnl-faint)]" : ""}`}>{i.from}</span>,
                <div key="s" className={`min-w-[14rem] text-xs ${i.kind === "system" ? "text-[var(--pnl-faint)]" : ""}`}><div className="font-semibold">{i.subject || "(konu yok)"}</div><div className="text-[var(--pnl-muted)] mt-0.5">{i.snippet}</div></div>,
                <span key="k" className={`inline-block whitespace-nowrap rounded-full px-2 py-0.5 text-xs ${KIND[i.kind][1]}`}>{KIND[i.kind][0]}</span>,
                <LinkCell key="c" i={i} contacts={contacts} />,
              ])}
              empty="Henüz taranan e-posta yok. &quot;Şimdi tara&quot;ya basın."
            />
            <p className="text-xs text-[var(--pnl-muted)] mt-3">Gmail&apos;de okumak ve yanıtlamak için: <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer" className="underline">mail.google.com</a> ({GMAIL_USER}).</p>
          </Card>
        </>
      )}

      <Card title="E-posta yaz">
        <div id="yaz" />
        <form method="get" className="flex flex-wrap gap-3 items-end mb-4">
          <label className="text-sm flex-1 min-w-[14rem]">Şirket seç (mesaj ve adres hazır gelir)
            <select name="d" defaultValue={d} className="pnl-input">
              <option value="">— Serbest e-posta —</option>
              {withEmail.map((x) => <option key={x.domain} value={x.domain}>{x.company} · {x.email_fallback}</option>)}
              {contacts.filter((x) => !x.email_fallback).slice(0, 200).map((x) => <option key={x.domain} value={x.domain}>{x.company} (adres yok)</option>)}
            </select>
          </label>
          <button className="pnl-btn">Hazırla</button>
        </form>
        <form action={sendEmail} className="grid gap-3">
          <input type="hidden" name="d" value={c?.domain ?? ""} />
          <label className="text-sm">Alıcı<input name="to" type="email" defaultValue={to} placeholder="info@firma.com" className="pnl-input" /></label>
          <label className="text-sm">Konu<input name="subject" required defaultValue={subject} maxLength={200} className="pnl-input" /></label>
          <label className="text-sm">Mesaj (köşeli parantezleri doldurun, ilk cümleyi şirkete göre kişiselleştirin)
            <textarea name="body" required rows={14} defaultValue={body} className="pnl-input text-sm" />
          </label>
          {c && (
            <p className="text-xs text-[var(--pnl-muted)]">
              {c.company} · {segmentById(c.segment)?.label ?? "segmentsiz"} · {c.reason}
              {c.thread_id ? " · Aynı e-posta dizisine yanıt olarak gider." : ""}
            </p>
          )}
          {c && (
            <div className="rounded-2xl border border-[var(--pnl-line-strong)] bg-[var(--pnl-main)] p-3 text-xs grid gap-1.5">
              <div><strong>UK sinyali:</strong> {signal ? <>{signal.signal}{signal.source && <> · <a href={signal.source} target="_blank" rel="noopener noreferrer" className="underline">kaynak ↗</a></>}</> : "kayıtlı sinyal yok; ilk cümleyi genel tutun"}</div>
              <div><strong>Önerilen hizmet:</strong> {service.service}{service.note ? ` · ${service.note}` : ""}</div>
              <div><strong>Alıcı türü:</strong> {addresses.length ? addresses.map((a, k) => <span key={a.email} className={`ml-1 ${a.type === "support" ? "text-amber-800" : ""}`}>{k ? " · " : ""}{a.email} ({ADDRESS_TYPES[a.type]}{a.type === "support" ? " ⚠ satış ekibine ulaşmayabilir" : ""})</span>) : "adres yok"}</div>
            </div>
          )}
          {c && (todo.length ? (
            <p className="pnl-callout text-xs text-amber-800">Elle doldurulacak: {todo.map((t) => <code key={t} className="mx-1">{t}</code>)}. Bunlar kalırken şirkete gönderilmez (kendinize deneme gönderebilirsiniz).</p>
          ) : (
            <p className="text-xs text-[#1b6b3a]">Şirket adı{lead?.products ? ", ürün bilgisi" : ""}{lead?.contact_name ? ", kişi adı" : ""} otomatik yerleştirildi. Yine de okuyun.</p>
          ))}
          <label className="flex items-start gap-2 text-sm"><input type="checkbox" name="confirm" className="mt-1" /> Mesajı kontrol ettim; köşeli parantez kalmadı ve çıkma cümlesi duruyor.</label>
          <div className="flex flex-wrap gap-2">
            <button name="mode" value="test" className="pnl-btn" disabled={!on}>Önce kendime deneme gönder</button>
            <button name="mode" value="send" className="pnl-btn-primary" disabled={!on}>Şirkete gönder</button>
          </div>
          <p className="text-xs text-[var(--pnl-muted)]">Deneme yalnızca {GMAIL_USER} kutusuna &quot;[DENEME]&quot; başlığıyla gider; şirket kaydına işlenmez.</p>
          {!on && <p className="text-xs text-amber-800">Gmail bağlanınca gönderim açılır.</p>}
        </form>
      </Card>

      {sentLog.length > 0 && (
        <Card title="Gönderilen e-postalar">
          <Table head={["Tarih", "Şirket", "Ayrıntı"]} rows={sentLog.map((e) => [fmtDate(e.at), e.company, <span key="n" className="text-xs">{e.note}</span>])} />
        </Card>
      )}
    </PanelShell>
  );
}

/** Company cell of an inbox row: the linked company, or suggestions with "Şirkete bağla" (panel record only). */
function LinkCell({ i, contacts }: { i: InboxItem; contacts: Contact[] }) {
  if (i.kind === "own" || i.kind === "system") return <span className="text-xs text-[var(--pnl-faint)]">satışa sayılmaz</span>;
  if (i.domain) {
    return (
      <div className="text-xs min-w-[9rem]">
        <a href={`/panel/webcontact?tab=is&fq=${encodeURIComponent(i.domain)}#temaslar`} className="underline">{i.company ?? i.domain}</a>
        <div className="text-[var(--pnl-muted)] mt-0.5">{i.linked_by === "user" ? "elle bağlandı" : "otomatik bağlandı"}</div>
      </div>
    );
  }
  const suggested = new Set((i.suggest ?? []).map((s) => s.domain));
  const rest = contacts.filter((c) => !suggested.has(c.domain)).sort((a, b) => a.company.localeCompare(b.company, "tr"));
  return (
    <div className="min-w-[14rem] text-xs">
      {i.suggest?.[0] && <div className="mb-1">Öneri: <strong>{i.suggest[0].company}</strong> <span className="text-[var(--pnl-muted)]">({i.suggest[0].why})</span></div>}
      <form action={linkMail} className="grid gap-1.5">
        <input type="hidden" name="id" value={i.id} />
        <label className="sr-only" htmlFor={`lk-${i.id}`}>Şirket</label>
        <select id={`lk-${i.id}`} name="d" defaultValue={i.suggest?.[0]?.domain ?? ""} className="pnl-select-sm">
          <option value="">Şirket seçin…</option>
          {(i.suggest ?? []).map((s) => <option key={s.domain} value={s.domain}>{s.company} (öneri)</option>)}
          {rest.map((c) => <option key={c.domain} value={c.domain}>{c.company}</option>)}
        </select>
        <label className="sr-only" htmlFor={`as-${i.id}`}>Tür</label>
        <select id={`as-${i.id}`} name="as" defaultValue={i.kind === "auto_ack" ? "auto_ack" : "reply"} className="pnl-select-sm">
          <option value="reply">İnsan yanıtı</option>
          <option value="auto_ack">Otomatik form teyidi</option>
        </select>
        <button className="pnl-btn !py-1 !px-3 text-xs">Şirkete bağla</button>
      </form>
      <form action={ignoreMail} className="mt-1"><input type="hidden" name="id" value={i.id} /><button className="underline text-[var(--pnl-muted)]">Yoksay</button></form>
      <div className="text-[var(--pnl-faint)] mt-1">Yalnız panel kaydı; e-posta gönderilmez.</div>
    </div>
  );
}
