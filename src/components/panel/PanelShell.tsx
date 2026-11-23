import Link from "next/link";

const NAV = [
  ["/panel", "Özet"],
  ["/panel/talepler", "Talepler"],
  ["/panel/tiklamalar", "Tıklamalar"],
  ["/panel/performans", "Performans"],
  ["/panel/seo", "SEO sağlığı"],
  ["/panel/sihirbaz", "Müşteri sihirbazı"],
  ["/panel/adaylar", "Adaylar"],
  ["/panel/gorevler", "Görevler"],
  ["/panel/linkler", "Linkler"],
] as const;

export default function PanelShell({ active, title, children }: { active: string; title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen lg:flex">
      <aside className="lg:w-56 bg-[#0b2545] text-white lg:min-h-screen">
        <div className="px-5 py-4 font-extrabold">LondraDepo Panel</div>
        <nav aria-label="Panel" className="flex lg:flex-col overflow-x-auto px-2 pb-3 gap-1">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} aria-current={active === href ? "page" : undefined} className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm ${active === href ? "bg-white/15 font-semibold" : "hover:bg-white/10"}`}>
              {label}
            </Link>
          ))}
        </nav>
        <form method="post" action="/api/panel/logout" className="px-5 pb-4">
          <button type="submit" className="text-sm text-white/80 underline">Çıkış</button>
        </form>
      </aside>
      <main className="flex-1 min-w-0 p-4 sm:p-8">
        <h1 className="text-2xl font-extrabold text-[#0b2545] mb-6">{title}</h1>
        {children}
      </main>
    </div>
  );
}

export function Card({ title, children, className = "" }: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`bg-white rounded-2xl border border-slate-200 p-5 mb-6 ${className}`}>
      {title && <h2 className="text-lg font-bold text-[#0b2545] mb-3">{title}</h2>}
      {children}
    </section>
  );
}

export function Stat({ label, value, hint }: { label: string; value: string | number; hint?: string }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="text-2xl font-extrabold text-[#0b2545]">{value}</div>
      {hint && <div className="text-xs text-slate-500 mt-1">{hint}</div>}
    </div>
  );
}

/** Shown when a data source has no credentials yet. */
export function NotConnected({ what, vars }: { what: string; vars: string[] }) {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 text-amber-900 text-sm p-4">
      <strong>{what} bağlı değil.</strong> Vercel → Settings → Environment Variables bölümüne şunları ekleyin: {vars.map((v, i) => <span key={v}>{i > 0 && ", "}<code>{v}</code></span>)}. Ayrıntılar: <code>docs/panel-setup.md</code>.
    </div>
  );
}

export function ErrorBox({ message }: { message: string }) {
  return <div role="alert" className="rounded-xl border border-red-200 bg-red-50 text-red-800 text-sm p-4">Veri alınamadı: {message}</div>;
}

export function Table({ head, rows, empty = "Kayıt yok." }: { head: string[]; rows: (string | number | React.ReactNode)[][]; empty?: string }) {
  if (!rows.length) return <p className="text-sm text-slate-500">{empty}</p>;
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left">
        <thead className="bg-slate-50 text-[#0b2545]"><tr>{head.map((h) => <th key={h} scope="col" className="px-3 py-2 whitespace-nowrap">{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-slate-100">{r.map((c, j) => <td key={j} className="px-3 py-2 align-top">{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Minimal SVG bar chart (no chart library). */
export function Bars({ data, label }: { data: { x: string; y: number }[]; label: string }) {
  if (!data.length) return <p className="text-sm text-slate-500">Veri yok.</p>;
  const max = Math.max(1, ...data.map((d) => d.y));
  const w = 100 / data.length;
  return (
    <figure>
      <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-40" role="img" aria-label={label}>
        {data.map((d, i) => (
          <rect key={d.x} x={i * w + w * 0.15} width={w * 0.7} y={40 - (d.y / max) * 38} height={(d.y / max) * 38} fill="#0b2545"><title>{`${d.x}: ${d.y}`}</title></rect>
        ))}
      </svg>
      <figcaption className="flex justify-between text-xs text-slate-500 mt-1"><span>{data[0].x}</span><span>en yüksek: {max}</span><span>{data[data.length - 1].x}</span></figcaption>
    </figure>
  );
}
