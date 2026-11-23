import PanelShell, { Card, ErrorBox, NotConnected, Stat, Table } from "@/components/panel/PanelShell";
import { apolloConfigured, contactName, searchTasks, type ApolloTask } from "@/lib/panel/apollo";
import { fmtDate, safe } from "@/lib/panel/safe";
import { followUp, markDone } from "./actions";

export const dynamic = "force-dynamic";

function bucket(t: ApolloTask, now: Date): "late" | "today" | "week" | "later" {
  if (!t.due_at) return "later";
  const d = new Date(t.due_at);
  const end = new Date(now); end.setHours(23, 59, 59, 999);
  if (d < new Date(now.toDateString())) return "late";
  if (d <= end) return "today";
  if (d.getTime() - now.getTime() < 7 * 86400000) return "week";
  return "later";
}

export default async function TasksPage({ searchParams }: { searchParams: Promise<{ m?: string }> }) {
  const { m } = await searchParams;
  if (!apolloConfigured()) return <PanelShell active="/panel/gorevler" title="Görevler"><NotConnected what="Apollo" vars={["APOLLO_API_KEY"]} /></PanelShell>;
  const r = await safe(searchTasks);
  const now = new Date();
  const open = r.ok ? r.data.filter((t) => t.status !== "completed") : [];
  const groups = { late: [] as ApolloTask[], today: [] as ApolloTask[], week: [] as ApolloTask[], later: [] as ApolloTask[] };
  open.forEach((t) => groups[bucket(t, now)].push(t));
  const tomorrow = new Date(now.getTime() + 3 * 86400000).toISOString().slice(0, 10);
  const rows = (list: ApolloTask[]) =>
    list.map((t) => [
      fmtDate(t.due_at),
      contactName(t.contact) || "—",
      t.contact?.organization_name ?? "",
      t.note ?? t.type ?? "",
      <div key="a" className="flex flex-wrap gap-2">
        <form action={markDone}><input type="hidden" name="id" value={t.id} /><button className="text-xs bg-green-700 text-white rounded-full px-3 py-1">Tamamlandı</button></form>
        {t.contact_id && (
          <form action={followUp} className="flex gap-1">
            <input type="hidden" name="contact_id" value={t.contact_id} />
            <label className="sr-only" htmlFor={`d-${t.id}`}>Takip tarihi</label>
            <input id={`d-${t.id}`} type="date" name="due" defaultValue={tomorrow} className="pnl-select-sm" />
            <input type="hidden" name="note" value={`Takip: ${t.note ?? ""}`.slice(0, 200)} />
            <button className="text-xs underline">Takip ekle</button>
          </form>
        )}
      </div>,
    ]);
  const head = ["Tarih", "Kişi", "Şirket", "Not", "İşlem"];
  return (
    <PanelShell active="/panel/gorevler" title="Görevler (Apollo)">
      {m && (m === "ok" ? <p role="status" className="mb-4 rounded-2xl bg-[var(--pnl-success-soft)] border border-[#b2f2bb] text-[#1b6b3a] text-sm p-3">Güncellendi.</p> : <ErrorBox message={m} />)}
      {!r.ok ? <ErrorBox message={r.error} /> : (
        <>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-6">
            <Stat label="Geciken" value={groups.late.length} /><Stat label="Bugün" value={groups.today.length} /><Stat label="Bu hafta" value={groups.week.length} /><Stat label="Daha sonra" value={groups.later.length} />
          </div>
          <Card title="Geciken"><Table head={head} rows={rows(groups.late)} empty="Geciken görev yok." /></Card>
          <Card title="Bugün"><Table head={head} rows={rows(groups.today)} empty="Bugün görev yok." /></Card>
          <Card title="Bu hafta"><Table head={head} rows={rows(groups.week)} empty="Bu hafta görev yok." /></Card>
        </>
      )}
    </PanelShell>
  );
}
