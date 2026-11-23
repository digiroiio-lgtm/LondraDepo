import Link from "next/link";
import PanelShell, { Bars, Card, ErrorBox, Stat, Table } from "@/components/panel/PanelShell";
import { apolloConfigured, contactName, searchTasks } from "@/lib/panel/apollo";
import { field, formspreeConfigured, formspreeSubmissions } from "@/lib/panel/formspree";
import { eventFilter, ga4Configured, ga4Report } from "@/lib/panel/ga4";
import { kvConfigured } from "@/lib/panel/kv";
import { ACTIONS, buildReport, groupByAction, today, type ActionKey } from "@/lib/panel/outreach";
import { fmtDate, safe } from "@/lib/panel/safe";
import { llmsStatus, sitemapUrls } from "@/lib/panel/seo";
import { listContacts } from "@/lib/panel/webcontact-store";
import { nextSearch } from "@/lib/panel/wizard";
import { listLeads } from "@/lib/panel/wizard-store";

/** Order in which open work should be done: replies first, then anything that turns into a reached company. */
const WORK_ORDER: ActionKey[] = ["reply", "meeting", "followup", "email", "blocked", "fix", "channel"];

export const dynamic = "force-dynamic";

const notSet = (what: string, href: string) => <p className="text-sm text-amber-800">{what} bağlı değil — <Link href={href} className="underline">ayrıntı</Link></p>;

export default async function PanelHome() {
  const db = kvConfigured();
  const [ga, leads, tasks, llms, contactsR, prospectsR] = await Promise.all([
    ga4Configured()
      ? safe(() => ga4Report({ dateRanges: [{ startDate: "7daysAgo", endDate: "today", name: "w" }, { startDate: "28daysAgo", endDate: "today", name: "m" }], dimensions: [{ name: "eventName" }], metrics: [{ name: "eventCount" }], dimensionFilter: eventFilter(["session_start", "whatsapp_click", "phone_call", "generate_lead"]) }))
      : null,
    formspreeConfigured() ? safe(() => formspreeSubmissions(5)) : null,
    apolloConfigured() ? safe(searchTasks) : null,
    llmsStatus(),
    db ? safe(() => listContacts()) : null,
    db ? safe(() => listLeads()) : null,
  ]);
  const contacts = contactsR?.ok ? contactsR.data : [];
  const prospects = prospectsR?.ok ? prospectsR.data : [];
  const groups = groupByAction(contacts);
  const week = buildReport(contacts, "week", today());
  const firstContact = prospects.filter((l) => l.status === "yeni" && l.tier !== "C");
  const work = WORK_ORDER.filter((k) => groups[k].length);
  const next = nextSearch(prospects);
  const nextStep = work[0]
    ? { text: `${ACTIONS[work[0]].label}: ${groups[work[0]].length} şirket. ${ACTIONS[work[0]].hint}`, href: `/panel/webcontact?tab=is&g=${work[0]}#isler` }
    : firstContact.length
      ? { text: `${firstContact.length} değerli aday henüz temas edilmedi; WebContact ile formlarını doldurun.`, href: "/panel/webcontact?tab=calistir" }
      : next
        ? { text: `Aday listesi boş kaldı. Sıradaki önerilen arama: ${next.label}.`, href: next.href }
        : null;
  // With two date ranges GA4 adds a "dateRange" dimension after the requested ones.
  const g = (ev: string, range: string) => (ga?.ok ? ga.data.rows.filter((r) => r.dims[0] === ev && r.dims[1] === range).reduce((a, r) => a + r.mets[0], 0) : 0);
  const openTasks = tasks?.ok ? tasks.data.filter((t) => t.status !== "completed") : [];
  const due = openTasks.filter((t) => t.due_at && new Date(t.due_at) <= new Date(new Date().setHours(23, 59, 59)));
  const llmsOk = llms.every((l) => l.missing === 0 && (l.ageDays ?? 99) <= 45);
  return (
    <PanelShell active="/panel" title="Özet">
      {db && (contactsR?.ok || prospectsR?.ok) && (
        <>
          {nextStep && (
            <a href={nextStep.href} className="pnl-callout flex flex-wrap items-center justify-between gap-3 mb-6 !py-4 !px-5">
              <span><span className="font-semibold">Sıradaki önerilen adım:</span> {nextStep.text}</span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-semibold">Aç →</span>
            </a>
          )}
          <div className="grid gap-6 lg:grid-cols-2 mb-6">
            <Card title="Bugün yapılacaklar" action={<Link href="/panel/webcontact?tab=is" className="text-sm underline">İş listesi</Link>}>
              <ul className="grid gap-2">
                {WORK_ORDER.map((k) => (
                  <li key={k}>
                    <a href={`/panel/webcontact?tab=is&g=${k}#isler`} className={`flex items-center justify-between rounded-2xl border px-4 py-2.5 text-sm ${groups[k].length ? "border-[var(--pnl-line-strong)] bg-white hover:border-[var(--pnl-primary)]" : "border-[var(--pnl-line)] text-[var(--pnl-faint)]"}`}>
                      <span>{ACTIONS[k].label}</span>
                      <span className={`rounded-full px-2.5 text-xs font-semibold ${groups[k].length ? "bg-[var(--pnl-primary-soft)] text-[var(--pnl-primary-ink)]" : "bg-slate-100"}`}>{groups[k].length}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a href="/panel/sihirbaz" className={`flex items-center justify-between rounded-2xl border px-4 py-2.5 text-sm ${firstContact.length ? "border-[var(--pnl-line-strong)] bg-white hover:border-[var(--pnl-primary)]" : "border-[var(--pnl-line)] text-[var(--pnl-faint)]"}`}>
                    <span>Temas edilmemiş A/B aday (Müşteri sihirbazı)</span>
                    <span className={`rounded-full px-2.5 text-xs font-semibold ${firstContact.length ? "bg-[var(--pnl-primary-soft)] text-[var(--pnl-primary-ink)]" : "bg-slate-100"}`}>{firstContact.length}</span>
                  </a>
                </li>
              </ul>
              <p className="text-xs text-[var(--pnl-muted)] mt-3">Yanıt bekleniyor: {groups.wait.length} · Kapandı: {groups.closed.length}</p>
            </Card>
            <Card title={`Bu hafta · ${week.range.label}`} action={<Link href="/panel/webcontact?tab=rapor&p=week" className="text-sm underline">Rapor</Link>}>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {([["İncelenen", week.counts.imported], ["Ulaşılan", week.counts.reached], ["Form", week.counts.form_sent], ["E-posta", week.counts.email_sent], ["Doğrulama", week.counts.blocked], ["Yanıt", week.counts.reply]] as [string, number][]).map(([l, v]) => (
                  <div key={l} className="rounded-2xl bg-[var(--pnl-main)] px-3 py-2.5">
                    <div className="text-xs text-[var(--pnl-muted)]">{l}</div>
                    <div className="text-xl font-semibold">{v ?? 0}</div>
                  </div>
                ))}
              </div>
              <Bars data={week.days} label="Bu hafta günlük ulaşılan şirket" />
            </Card>
          </div>
        </>
      )}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-6">
        <Stat label="Oturum (7 / 28 gün)" value={ga?.ok ? `${g("session_start", "w")} / ${g("session_start", "m")}` : "—"} />
        <Stat label="WhatsApp tıklama (7 / 28 gün)" value={ga?.ok ? `${g("whatsapp_click", "w")} / ${g("whatsapp_click", "m")}` : "—"} />
        <Stat label="Form gönderimi (7 / 28 gün)" value={ga?.ok ? `${g("generate_lead", "w")} / ${g("generate_lead", "m")}` : "—"} />
        <Stat label="Bugün / geciken görev" value={tasks?.ok ? due.length : "—"} hint={tasks?.ok ? `${openTasks.length} açık görev` : undefined} />
      </div>
      {ga && !ga.ok && <ErrorBox message={ga.error} />}
      {!ga && notSet("Google Analytics", "/panel/performans")}
      <div className="grid gap-6 lg:grid-cols-2 mt-6">
        <Card title="Son talepler">
          {!leads ? notSet("Formspree", "/panel/talepler") : leads.ok ? (
            <Table head={["Tarih", "Ad", "Şirket", "Hizmet"]} rows={leads.data.map((s) => [fmtDate(field(s, "_date", "created_at")), field(s, "name", "ad"), field(s, "company", "sirket"), field(s, "services", "service")])} empty="Henüz talep yok." />
          ) : <ErrorBox message={leads.error} />}
          <Link href="/panel/talepler" className="text-sm underline mt-3 inline-block">Tüm talepler</Link>
        </Card>
        <Card title="Bugünkü takipler">
          {!tasks ? notSet("Apollo", "/panel/gorevler") : tasks.ok ? (
            <Table head={["Tarih", "Kişi", "Not"]} rows={due.slice(0, 8).map((t) => [fmtDate(t.due_at), contactName(t.contact), t.note ?? ""])} empty="Bugün takip yok." />
          ) : <ErrorBox message={tasks.error} />}
          <Link href="/panel/gorevler" className="text-sm underline mt-3 inline-block">Tüm görevler</Link>
        </Card>
      </div>
      <Card title="SEO durumu">
        <p className={`text-sm font-semibold ${llmsOk ? "text-green-700" : "text-amber-800"}`}>
          {llmsOk ? "✓" : "⚠"} {sitemapUrls().length} sayfa site haritasında · llms.txt {llms[0]?.updated ?? "okunamadı"}{llms[0] && llms[0].missing >= 0 ? ` (${llms[0].missing} eksik sayfa)` : ""}
        </p>
        <Link href="/panel/seo" className="text-sm underline mt-2 inline-block">SEO sağlığı</Link>
      </Card>
    </PanelShell>
  );
}
