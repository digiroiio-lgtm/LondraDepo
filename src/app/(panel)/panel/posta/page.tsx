import PanelShell, { Card, ErrorBox, NotConnected, Stat, Table } from "@/components/panel/PanelShell";
import { GMAIL_USER, SENDER_NAME, gmailConfigured } from "@/lib/panel/gmail";
import { kvConfigured } from "@/lib/panel/kv";
import { DAILY_SEND_LIMIT, lastSync, recentInbox, sentToday, syncInbox, type MailKind } from "@/lib/panel/mail-sync";
import { eventsOf } from "@/lib/panel/outreach";
import { fmtDate, safe } from "@/lib/panel/safe";
import { contactTemplate } from "@/lib/panel/webcontact";
import { getContact, listContacts } from "@/lib/panel/webcontact-store";
import { segmentById } from "@/lib/panel/wizard";
import { sendEmail, syncNow } from "./actions";

export const dynamic = "force-dynamic";

type SP = Record<string, string | string[] | undefined>;
const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

const KIND: Record<MailKind, [string, string]> = {
  reply: ["Yanıt", "bg-green-100 text-green-800"],
  auto_ack: ["Otomatik teyit", "bg-[var(--pnl-primary-soft)] text-[var(--pnl-primary-ink)]"],
  other: ["Diğer", "bg-slate-100 text-slate-600"],
  own: ["Bizden", "bg-slate-100 text-slate-500"],
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
  const body = c ? c.message || contactTemplate(segmentById(c.segment)?.group, lang) : "";
  const subject = c ? c.subject || (lang === "tr" ? "İngiltere'de depolama ve dağıtım: LondraDepo" : "UK warehousing and distribution: LondraDepo") : "";
  const to = c ? (c.email_fallback.match(/[^\s,;<>]+@[^\s,;<>]+\.[^\s,;<>]+/) ?? [""])[0] : "";
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
            <Stat label="Şirket yanıtı (son 100)" value={inbox.filter((i) => i.kind === "reply" && i.domain).length} />
            <Stat label="Otomatik teyit" value={inbox.filter((i) => i.kind === "auto_ack" && i.domain).length} />
            <Stat label="Bugün gönderilen" value={`${sentR?.ok ? sentR.data : 0} / ${DAILY_SEND_LIMIT}`} hint="günlük güvenlik sınırı" />
          </div>

          <Card title="Gelen kutusu" action={<form action={syncNow}><button className="pnl-btn">Şimdi tara</button></form>}>
            <div id="gelen" />
            <Table
              head={["Tarih", "Gönderen", "Konu", "Tür", "Şirket"]}
              rows={inbox.slice(0, 60).map((i) => [
                <span key="t" className="text-xs whitespace-nowrap">{fmtDate(i.date)}</span>,
                <span key="f" className="text-xs break-all min-w-[10rem] inline-block">{i.from}</span>,
                <div key="s" className="min-w-[14rem] text-xs"><div className="font-semibold">{i.subject || "(konu yok)"}</div><div className="text-[var(--pnl-muted)] mt-0.5">{i.snippet}</div></div>,
                <span key="k" className={`inline-block whitespace-nowrap rounded-full px-2 py-0.5 text-xs ${KIND[i.kind][1]}`}>{KIND[i.kind][0]}</span>,
                i.domain ? <a key="c" href={`/panel/webcontact?tab=is&fq=${encodeURIComponent(i.domain)}#temaslar`} className="text-xs underline">{i.company ?? i.domain}</a> : <span key="c" className="text-xs text-[var(--pnl-faint)]">eşleşmedi</span>,
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
          <label className="text-sm">Alıcı<input name="to" type="email" required defaultValue={to} placeholder="info@firma.com" className="pnl-input" /></label>
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
          <label className="flex items-start gap-2 text-sm"><input type="checkbox" name="confirm" className="mt-1" /> Mesajı kontrol ettim; köşeli parantez kalmadı ve çıkma cümlesi duruyor.</label>
          <div><button className="pnl-btn-primary" disabled={!on}>Gönder ({GMAIL_USER})</button></div>
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
