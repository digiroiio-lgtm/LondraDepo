import PanelShell, { Card, ErrorBox, NotConnected, Stat, Table } from "@/components/panel/PanelShell";
import CopyButton from "@/components/panel/CopyButton";
import TargetForm from "@/components/panel/TargetForm";
import { kvConfigured } from "@/lib/panel/kv";
import { fmtDate, safe } from "@/lib/panel/safe";
import {
  APPROVAL, FORM_STATUSES, LOG_COLUMNS, PHONE_FORMATS, REPLIES, SENDER, SIGNATURE,
  BLOCK_TYPES, buildBlockedPrompt, buildContactPromptFromLeads, buildContactPromptResearch, contactTemplate, followUpDue, isBlocked, needsManual, workdaysSince,
  type Approval, type BlockType, type Contact, type FormStatus, type Reply,
} from "@/lib/panel/webcontact";
import { listContactRuns, listContacts } from "@/lib/panel/webcontact-store";
import { TEMPLATE_GROUPS, segmentById, targetFrom } from "@/lib/panel/wizard";
import { allDomains, listLeads } from "@/lib/panel/wizard-store";
import { changeReply, followUp, importLog, markSent, markSkipped } from "./actions";

export const dynamic = "force-dynamic";

type SP = Record<string, string | string[] | undefined>;
const input = "pnl-input";
const btn = "pnl-btn";
const redBtn = "pnl-btn-primary";
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

const link = (href: string, text: string) =>
  /^https?:\/\//i.test(href) ? <a href={href} target="_blank" rel="noopener noreferrer nofollow" className="underline break-all">{text}</a> : null;

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
        <select name="n" defaultValue={String(n)} className={input}>{[10, 20, 30].map((x) => <option key={x} value={x}>{x}</option>)}</select>
      </label>
      <label className="text-sm">Onay
        <select name="ap" defaultValue={ap} className={input}>{Object.entries(APPROVAL).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select>
      </label>
    </div>
  );
}

export default async function WebContactPage({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams;
  const go = one(sp.go);
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

  const blocked = contacts.filter(isBlocked);
  let prompt = "";
  let chosen: typeof candidates = [];
  if (go === "a") {
    chosen = candidates.slice(0, n);
    prompt = chosen.length ? buildContactPromptFromLeads(chosen, { count: n, approval: ap }) : "";
  } else if (go === "c") {
    prompt = blocked.length ? buildBlockedPrompt(blocked.slice(0, n)) : "";
  } else if (go === "b") {
    const known = db ? await safe(allDomains) : null;
    prompt = buildContactPromptResearch(t, [...new Set([...(known?.ok ? known.data : []), ...touched])], { count: n, approval: ap });
  }

  const manual = contacts.filter(needsManual);
  const due = contacts.filter(followUpDue);
  const fs = one(sp.fs) as FormStatus | "";
  const fr = one(sp.fr) as Reply | "";
  const fq = one(sp.fq).toLowerCase();
  const shown = contacts
    .filter((c) => (!fs || c.form_status === fs) && (!fr || c.reply === fr))
    .filter((c) => !fq || [c.company, c.domain, c.country, c.message, c.reason].join(" ").toLowerCase().includes(fq));

  return (
    <PanelShell active="/panel/webcontact" title="WebContact sihirbazı">
      {m && (m.startsWith("ok:") ? <p role="status" className="mb-4 rounded-2xl bg-[var(--pnl-success-soft)] border border-[#b2f2bb] text-[#1b6b3a] text-sm p-3">{m.slice(3)}</p> : <ErrorBox message={m} />)}

      <p className="text-sm text-slate-600 mb-6 max-w-3xl">
        Ajan, şirketlerin web sitesindeki iletişim formunu şirkete özel bir mesajla <strong>{SENDER.name}</strong> adına doldurur. Yanıtlar <strong>{SENDER.email}</strong> adresine gelir. Bu sihirbaz, müşteri sihirbazıyla aynı aday listesini kullanır; bir şirkete iki kez yazılmaz.
      </p>

      {db && contactsR?.ok && (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <Stat label="Gönderilen form" value={contacts.filter((c) => c.form_status === "sent").length} hint={`toplam ${contacts.length} şirket denendi`} />
          <Stat label="Doğrulama engeli" value={blocked.length} hint="CAPTCHA / güvenlik kodu" />
          <Stat label="Elle gönderilecek" value={manual.length} hint="Telefon formatı veya hata" />
          <Stat label="Yanıt geldi" value={contacts.filter((c) => c.reply === "yanit" || c.reply === "olumlu").length} hint={`olumlu: ${contacts.filter((c) => c.reply === "olumlu").length}`} />
          <Stat label="Takip zamanı gelen" value={due.length} hint="5+ iş günü, yanıt yok" />
        </div>
      )}
      {!db && <div className="mb-6"><NotConnected what="Sihirbaz veritabanı (Upstash Redis)" vars={["KV_REST_API_URL", "KV_REST_API_TOKEN"]} /></div>}

      <Card title="1a. Müşteri sihirbazı listesinden (önerilen)">
        <p className="text-sm text-slate-600 mb-3">
          Araştırması yapılmış, henüz temas edilmemiş A ve B öncelikli şirketler, en değerliden başlayarak. Şu an <strong>{candidates.length}</strong> uygun şirket var.
        </p>
        <form method="get" className="grid gap-4">
          <input type="hidden" name="go" value="a" />
          <SettingsFields n={n} ap={ap} />
          <div><button className={redBtn} disabled={!candidates.length}>Görev metnini oluştur</button></div>
        </form>
        {!candidates.length && db && <p className="text-xs text-slate-500 mt-2">Uygun şirket yok: önce Müşteri sihirbazında liste oluşturun ya da 1b ile yeni araştırma yapın.</p>}
      </Card>

      <Card title="1b. Yeni araştırma + form">
        <details>
          <summary className="cursor-pointer text-sm font-semibold text-[#1c1a3a]">Hedef seçimini aç</summary>
          <div className="mt-4">
            <TargetForm t={t} hidden={<input type="hidden" name="go" value="b" />} count={<SettingsFields n={n} ap={ap} />} />
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
              <ol className="list-decimal pl-5 text-sm text-slate-700 mb-4 space-y-1">
                <li>Metni <strong>Kopyala</strong> ile kopyalayın.</li>
                <li>ChatGPT&apos;de yeni sohbet açın, <strong>Agent</strong> modunu seçin, metni yapıştırıp gönderin.</li>
                <li>Ajan ilk formları göstermeden önce onayınızı isteyecek; mesajı kontrol edip onaylayın.</li>
                <li>Bitince verdiği CSV kaydının tamamını 3. adıma yapıştırın.</li>
              </ol>
              <label htmlFor="prompt" className="sr-only">Görev metni</label>
              <textarea id="prompt" readOnly value={prompt} rows={16} className={`${input} font-mono text-xs`} />
              <div className="mt-3"><CopyButton target="prompt" label="Görev metnini kopyala" /></div>
            </>
          ) : <p className="text-sm text-slate-500">Uygun şirket bulunamadı.</p>}
        </Card>
      )}

      <Card title="3. Ajanın kaydını içeri al">
        {db ? (
          <form action={importLog} className="grid gap-3">
            <input type="hidden" name="mode" value={go === "b" ? "b" : go === "c" ? "c" : "a"} />
            {go === "b" && (
              <>
                <input type="hidden" name="region" value={t.region} />
                <input type="hidden" name="size" value={t.size} />
                {t.segments.map((s) => <input key={s} type="hidden" name="s" value={s} />)}
                {t.countries.map((c) => <input key={c} type="hidden" name="c" value={c} />)}
              </>
            )}
            <label className="text-sm">Ajanın verdiği CSV
              <textarea name="data" required rows={8} className={`${input} font-mono text-xs`} placeholder={LOG_COLUMNS.join(",")} />
            </label>
            <p className="text-xs text-slate-500">Gönderilen formlar müşteri listesinde &quot;İletişime geçildi&quot; olur. Yeni araştırmadan gelen şirketler müşteri listesine de eklenir. Formu daha önce gönderilmiş şirketler atlanır.</p>
            <div><button className={redBtn}>İçeri al</button></div>
          </form>
        ) : <p className="text-sm text-slate-500">Önce veritabanını bağlayın.</p>}
      </Card>

      {db && contactsR?.ok && (
        <Card
          title={`Doğrulama engelleri: CAPTCHA / güvenlik kodu (${blocked.length})`}
          action={blocked.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              <a href={`/panel/webcontact?go=c&n=${Math.min(30, Math.max(10, blocked.length))}#gorev`} className="pnl-btn-primary">Birlikte gönderme görev metni</a>
              <a href="/api/panel/webcontact/csv?f=blocked" className="pnl-btn-ghost">CSV indir</a>
            </div>
          ) : undefined}
        >
          <div id="engel" />
          {blocked.length === 0 ? (
            <p className="text-sm text-[var(--pnl-muted)]">Şu an doğrulamaya takılan form yok. Ajan CAPTCHA, resimdeki güvenlik kodu, Cloudflare kontrolü veya SMS kodu gördüğünde formu burada saklar; hiçbir kayıt kaybolmaz.</p>
          ) : (
            <>
              <p className="text-sm text-[var(--pnl-muted)] mb-3">
                Ajan bu formları doldurdu ama doğrulama yüzünden göndermedi. &quot;Birlikte gönderme görev metni&quot; ile ajan her formu yeniden doldurur, doğrulama adımında durup kontrolü size verir; siz çözünce gönderir. Elle de gönderebilirsiniz: formu açın, mesajı kopyalayın, gönderin ve &quot;Gönderdim&quot;e basın.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {Object.entries(BLOCK_TYPES).map(([k, v]) => {
                  const n2 = blocked.filter((c) => (c.block_type || "other") === k).length;
                  return n2 ? <span key={k} className="pnl-chip">{v}: {n2}</span> : null;
                })}
              </div>
              <Table
                head={["Şirket", "Nerede takıldı", "Form ve deneme", "Mesaj", "İşlem"]}
                rows={blocked.slice(0, 100).map((c) => [
                  <div key="c" className="min-w-[10rem] text-sm">
                    <div className="font-semibold">{link(c.website, c.company) ?? c.company}</div>
                    <div className="text-xs text-[var(--pnl-muted)]">{[c.country, segmentById(c.segment)?.label].filter(Boolean).join(" · ")}</div>
                  </div>,
                  <div key="b" className="min-w-[12rem] text-xs">
                    <span className="inline-block rounded-full px-2 py-0.5 bg-amber-100 text-amber-800">{BLOCK_TYPES[(c.block_type || "other") as BlockType] ?? c.block_type}</span>
                    {c.block_detail && <div className="mt-1">{c.block_detail}</div>}
                    {c.notes && <div className="mt-1 text-[var(--pnl-muted)]">{c.notes}</div>}
                  </div>,
                  <div key="f" className="min-w-[8rem] text-xs">
                    <div>{link(c.contact_page_url || c.website, "Formu aç ↗")}</div>
                    <div className="mt-1 text-[var(--pnl-muted)]">{fmtDate(c.imported_at)}</div>
                    <div className="mt-1 text-[var(--pnl-muted)]">{c.attempts ?? 1}. deneme · {c.language === "tr" ? "TR" : "EN"}</div>
                  </div>,
                  <details key="m" className="min-w-[14rem] text-xs">
                    <summary className="cursor-pointer">Mesajı göster</summary>
                    <textarea id={`bm-${c.domain}`} readOnly rows={6} value={c.message || contactTemplate(segmentById(c.segment)?.group, c.language === "tr" ? "tr" : "en")} className="pnl-input text-xs mt-2" />
                    <div className="mt-2"><CopyButton target={`bm-${c.domain}`} label="Mesajı kopyala" /></div>
                  </details>,
                  <div key="a" className="flex flex-col gap-2 min-w-[7rem]">
                    <form action={markSent}><input type="hidden" name="d" value={c.domain} /><input type="hidden" name="from" value="engel" /><button className="pnl-btn w-full">Gönderdim</button></form>
                    <form action={markSkipped}><input type="hidden" name="d" value={c.domain} /><button className="pnl-btn-ghost w-full">Vazgeç</button></form>
                  </div>,
                ])}
              />
              <PhoneChips />
            </>
          )}
        </Card>
      )}

      {db && manual.length > 0 && (
        <Card title={`Elle gönderilecekler (${manual.length})`}>
          <div id="elle" />
          <p className="text-sm text-slate-600 mb-3">Telefon formatı kabul edilmediği veya site hata verdiği için ajan göndermedi. Formu açın, mesajı kopyalayıp yapıştırın, gönderin ve &quot;Gönderdim&quot;e basın.</p>
          <div className="grid gap-4">
            {manual.slice(0, 30).map((c) => (
              <div key={c.domain} className="pnl-card p-4 !shadow-none">
                <div className="flex flex-wrap items-center gap-3 mb-2 text-sm">
                  <strong>{c.company}</strong>
                  <span className={`rounded-full px-2 py-0.5 text-xs ${STATUS_CLASS[c.form_status]}`}>{FORM_STATUSES[c.form_status]}</span>
                  {link(c.contact_page_url || c.website, "Formu aç ↗")}
                </div>
                <label className="sr-only" htmlFor={`msg-${c.domain}`}>Mesaj</label>
                <textarea id={`msg-${c.domain}`} readOnly rows={6} value={c.message || contactTemplate(segmentById(c.segment)?.group, c.language === "tr" ? "tr" : "en")} className={`${input} text-xs`} />
                <div className="mt-2 flex flex-wrap gap-3 items-center">
                  <CopyButton target={`msg-${c.domain}`} label="Mesajı kopyala" />
                  <form action={markSent}><input type="hidden" name="d" value={c.domain} /><button className={btn}>Gönderdim</button></form>
                  <span className="text-xs text-slate-500">Ad: {SENDER.name} · {SENDER.email} · {SENDER.phone}</span>
                </div>
                {c.notes && <p className="text-xs text-amber-800 mt-2">Not: {c.notes}</p>}
                <PhoneChips />
              </div>
            ))}
          </div>
        </Card>
      )}

      {db && due.length > 0 && (
        <Card title={`Takip zamanı gelenler (${due.length})`}>
          <div id="takip" />
          <p className="text-sm text-slate-600 mb-3">Form en az 5 iş günü önce gönderildi, yanıt yok. Apollo&apos;da ertesi iş günü için takip görevi açılır (kredi harcamaz).</p>
          <Table
            head={["Şirket", "Gönderim", "Form", "Yedek e-posta"]}
            rows={due.slice(0, 25).map((c) => [c.company, `${c.sent_at || c.imported_at.slice(0, 10)} (${workdaysSince(c.sent_at || c.imported_at)} iş günü)`, link(c.contact_page_url, "form ↗") ?? "—", c.email_fallback || "—"])}
          />
          <form action={followUp} className="mt-3">
            {due.slice(0, 25).map((c) => <input key={c.domain} type="hidden" name="d" value={c.domain} />)}
            <button className={redBtn}>Bu {Math.min(due.length, 25)} şirket için Apollo takip görevi aç</button>
          </form>
        </Card>
      )}

      <Card title={`Tüm temaslar${db && contactsR?.ok ? ` (${shown.length})` : ""}`}>
        <div id="temaslar" />
        {!db ? <p className="text-sm text-slate-500">Veritabanı bağlı değil.</p> : !contactsR?.ok ? <ErrorBox message={contactsR?.error ?? "?"} /> : (
          <>
            <form method="get" className="grid sm:grid-cols-4 gap-3 mb-4 items-end" role="search">
              <label className="text-sm sm:col-span-2">Ara<input name="fq" defaultValue={fq} placeholder="Şirket, ülke, mesaj…" className={input} /></label>
              <label className="text-sm">Form<select name="fs" defaultValue={fs} className={input}><option value="">Tümü</option>{Object.entries(FORM_STATUSES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></label>
              <label className="text-sm">Yanıt<select name="fr" defaultValue={fr} className={input}><option value="">Tümü</option>{Object.entries(REPLIES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></label>
              <div className="sm:col-span-4 flex flex-wrap gap-3">
                <button className={btn}>Filtrele</button>
                <a href="/api/panel/webcontact/csv" className="pnl-btn-ghost">Tümünü CSV indir</a>
              </div>
            </form>
            <Table
              head={["Şirket", "Form", "Mesaj", "Yanıt"]}
              rows={shown.slice(0, 300).map((c: Contact) => [
                <div key="c" className="min-w-[11rem] text-sm">
                  <div className="font-semibold">{link(c.website, c.company) ?? c.company}</div>
                  <div className="text-xs text-slate-500">{[c.country, segmentById(c.segment)?.label].filter(Boolean).join(" · ")}</div>
                  {c.email_fallback && <div className="text-xs mt-1">{c.email_fallback}</div>}
                </div>,
                <div key="f" className="min-w-[9rem] text-xs">
                  <span className={`inline-block rounded-full px-2 py-0.5 ${STATUS_CLASS[c.form_status]}`}>{FORM_STATUSES[c.form_status]}</span>
                  <div className="mt-1">{c.sent_at || fmtDate(c.imported_at)}</div>
                  <div className="mt-1">{link(c.contact_page_url, "form ↗")}</div>
                  {c.phone_used && <div className="mt-1 text-[var(--pnl-muted)]">Tel: <span className="font-mono">{c.phone_used}</span></div>}
                  {c.notes && <div className="mt-1 text-amber-800">{c.notes}</div>}
                  {c.followup_at && <div className="mt-1 text-slate-500">Takip: {fmtDate(c.followup_at)}</div>}
                </div>,
                <details key="m" className="min-w-[16rem] text-xs">
                  <summary className="cursor-pointer">{c.subject || (c.message ? `${c.message.slice(0, 80)}…` : "—")}</summary>
                  <p className="whitespace-pre-line mt-2">{c.message}</p>
                  {c.confirmation_text && <p className="mt-2 text-green-800">✓ {c.confirmation_text}</p>}
                </details>,
                <form key="r" action={changeReply} className="flex gap-2 items-center">
                  <input type="hidden" name="d" value={c.domain} />
                  <label className="sr-only" htmlFor={`rp-${c.domain}`}>Yanıt</label>
                  <select id={`rp-${c.domain}`} name="reply" defaultValue={c.reply} className="pnl-select-sm">{Object.entries(REPLIES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select>
                  <button className="text-xs underline">Kaydet</button>
                </form>,
              ])}
              empty="Henüz kayıt yok."
            />
          </>
        )}
      </Card>

      <Card title="Örnek form mesajları ve imza">
        <p className="text-sm text-slate-600 mb-3">Ajan bu yapıyı her şirkete göre kişiselleştirir. Elle gönderirken de kullanabilirsiniz.</p>
        <pre className="text-xs bg-[var(--pnl-main)] rounded-2xl p-4 mb-3 whitespace-pre-wrap">{SIGNATURE}</pre>
        <PhoneChips />
        <div className="mb-3" />
        {TEMPLATE_GROUPS.map(({ group, label }) => (
          <details key={group} className="border-t border-[var(--pnl-line)] py-2">
            <summary className="cursor-pointer font-semibold text-sm text-[#1c1a3a]">{label}</summary>
            <div className="grid lg:grid-cols-2 gap-4 mt-3">
              {(["tr", "en"] as const).map((lang) => (
                <div key={lang}>
                  <h3 className="font-semibold text-sm mb-1">{lang === "tr" ? "Türkçe" : "English"}</h3>
                  <textarea id={`wc-${group}-${lang}`} readOnly rows={12} className={`${input} text-xs`} value={contactTemplate(group, lang)} />
                  <div className="mt-2"><CopyButton target={`wc-${group}-${lang}`} /></div>
                </div>
              ))}
            </div>
          </details>
        ))}
      </Card>

      {db && runsR?.ok && runsR.data.length > 0 && (
        <Card title="Son çalışmalar">
          <Table
            head={["Tarih", "Kaynak", "Gönderildi", "Doğrulama", "Elle", "Formsuz", "Atlandı", "Tekrar"]}
            rows={runsR.data.map((r) => [fmtDate(r.at), r.mode === "a" ? "Müşteri listesi" : r.mode === "c" ? "Doğrulama engelleri" : "Yeni araştırma", r.sent, r.blocked ?? "—", r.manual, r.noForm, r.skipped, r.duplicates])}
          />
        </Card>
      )}
    </PanelShell>
  );
}
