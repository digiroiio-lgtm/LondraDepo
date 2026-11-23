import Link from "next/link";

/** Line icons for the panel (24×24, stroke = currentColor). */
const ICONS: Record<string, React.ReactNode> = {
  grid: <><circle cx="7" cy="7" r="3" /><circle cx="17" cy="7" r="3" /><circle cx="7" cy="17" r="3" /><circle cx="17" cy="17" r="3" /></>,
  inbox: <><path d="M3 13h5l1 3h6l1-3h5" /><path d="M5 5h14l2 8v6H3v-6z" /></>,
  cursor: <><path d="m5 3 14 7-6 2-2 6z" /><path d="m13 12 6 6" /></>,
  chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
  pulse: <><path d="M3 12h4l3-7 4 14 3-7h4" /></>,
  wand: <><path d="m4 20 11-11" /><path d="m14 4 1.5 3L19 8.5 15.5 10 14 13l-1.5-3L9 8.5 12.5 7z" /><path d="M19 15v4M17 17h4" /></>,
  send: <><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4z" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><circle cx="17" cy="9" r="2.5" /><path d="M16 14a5 5 0 0 1 5 5" /></>,
  tasks: <><rect x="4" y="4" width="16" height="16" rx="4" /><path d="m8 12 3 3 5-6" /></>,
  link: <><path d="M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1" /><path d="M14 10a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1" /></>,
  logout: <><path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3" /><path d="M10 17l-5-5 5-5M5 12h11" /></>,
  external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></>,
  building: <><rect x="5" y="3" width="10" height="18" rx="1" /><path d="M15 9h4v12h-4M8 7h4M8 11h4M8 15h4" /></>,
  warehouse: <><path d="M3 10 12 4l9 6v10H3z" /><path d="M7 20v-6h10v6" /><path d="M7 17h10" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
  chevron: <><path d="m6 9 6 6 6-6" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></>,
};

export function PIcon({ name, className = "h-5 w-5" }: { name: keyof typeof ICONS | string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {ICONS[name] ?? ICONS.grid}
    </svg>
  );
}

const NAV: [string, string, string][] = [
  ["/panel", "Özet", "grid"],
  ["/panel/talepler", "Talepler", "inbox"],
  ["/panel/tiklamalar", "Tıklamalar", "cursor"],
  ["/panel/performans", "Performans", "chart"],
  ["/panel/seo", "SEO sağlığı", "pulse"],
  ["/panel/sihirbaz", "Müşteri sihirbazı", "wand"],
  ["/panel/webcontact", "WebContact sihirbazı", "send"],
  ["/panel/posta", "E-posta", "mail"],
  ["/panel/adaylar", "Adaylar", "users"],
  ["/panel/gorevler", "Görevler", "tasks"],
  ["/panel/linkler", "Linkler", "link"],
];

/** Brand mark: violet gradient badge with the warehouse icon, plus the LondraDepo wordmark. */
export function Brand({ size = "md" }: { size?: "md" | "lg" }) {
  const badge = size === "lg" ? "h-12 w-12" : "h-10 w-10";
  return (
    <span className="flex items-center gap-2.5">
      <span className={`grid place-items-center rounded-full text-white ${badge}`} style={{ background: "var(--pnl-grad)", boxShadow: "0 8px 18px -8px rgba(106,76,255,.8)" }}>
        <PIcon name="warehouse" className={size === "lg" ? "h-6 w-6" : "h-5 w-5"} />
      </span>
      <span className={`font-semibold tracking-tight ${size === "lg" ? "text-3xl" : "text-[1.6rem]"}`} style={{ color: "var(--pnl-primary)" }}>
        LondraDepo
      </span>
    </span>
  );
}

const today = () =>
  new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric", weekday: "short", timeZone: "Europe/London" }).format(new Date());

export default function PanelShell({ active, title, children }: { active: string; title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen lg:p-4">
      <div className="lg:flex lg:min-h-[calc(100vh-2rem)] lg:rounded-[32px] bg-[var(--pnl-shell)] lg:shadow-[0_30px_80px_-40px_rgba(60,40,160,.45)]">
        {/* Sidebar */}
        <aside className="lg:w-72 lg:flex-none lg:flex lg:flex-col px-4 pt-5 pb-3 lg:px-6 lg:pt-7 lg:pb-6 border-b lg:border-b-0 border-[var(--pnl-line)]">
          <div className="flex items-center justify-between lg:block">
            <Link href="/panel" aria-label="Panel ana sayfa"><Brand /></Link>
            <form method="post" action="/api/panel/logout" className="lg:hidden">
              <button type="submit" className="pnl-nav-icon" aria-label="Çıkış"><PIcon name="logout" /></button>
            </form>
          </div>
          <div className="hidden lg:block mt-7">
          <a href="https://www.londradepo.com" target="_blank" rel="noopener noreferrer" className="pnl-pill w-full justify-between">
            <span className="flex items-center gap-2.5">
              <span className="grid place-items-center h-9 w-9 rounded-full bg-[var(--pnl-primary-soft)] text-[var(--pnl-primary)]"><PIcon name="building" /></span>
              <span className="text-[0.95rem]">Rayleigh, Essex</span>
            </span>
            <PIcon name="external" className="h-4 w-4 text-[var(--pnl-muted)]" />
          </a>
          </div>
          <nav aria-label="Panel" className="flex lg:flex-col gap-1.5 overflow-x-auto mt-4 lg:mt-7 -mx-1 px-1 pb-1">
            {NAV.map(([href, label, icon]) => (
              <Link key={href} href={href} aria-current={active === href ? "page" : undefined} className="pnl-nav-link">
                <span className="pnl-nav-icon"><PIcon name={icon} /></span>
                <span>{label}</span>
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block mt-auto pt-6">
            <form method="post" action="/api/panel/logout">
              <button type="submit" className="pnl-nav-link w-full">
                <span className="pnl-nav-icon"><PIcon name="logout" /></span>
                <span>Çıkış</span>
              </button>
            </form>
            <p className="mt-6 text-center text-xs font-medium" style={{ color: "var(--pnl-primary)" }}>LondraDepo Panel · v2</p>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0 lg:my-3 lg:mr-3 lg:rounded-[28px] bg-[var(--pnl-main)] lg:border border-[var(--pnl-line)] p-4 sm:p-6">
          <header className="pnl-card flex items-center justify-between gap-3 px-5 sm:px-7 py-3.5 sm:py-4 mb-6 !shadow-none">
            <h1 className="min-w-0 text-base sm:text-[1.35rem] tracking-tight">
              <span className="hidden sm:inline text-[var(--pnl-muted)]">Panel / </span> <span className="font-semibold text-[var(--pnl-ink)]">{title}</span>
            </h1>
            <div className="flex flex-none items-center gap-2.5">
              <span className="hidden md:inline-flex items-center gap-2 rounded-full border border-[var(--pnl-line-strong)] px-3.5 py-1.5 text-sm text-[var(--pnl-muted)]">
                <PIcon name="calendar" className="h-4 w-4" /> {today()}
              </span>
              <a href="https://www.londradepo.com" target="_blank" rel="noopener noreferrer" aria-label="Siteyi aç" className="grid place-items-center h-10 w-10 rounded-full text-white" style={{ background: "var(--pnl-grad)" }}>
                <PIcon name="external" className="h-[18px] w-[18px]" />
              </a>
              <span className="hidden sm:grid place-items-center h-10 w-10 rounded-full bg-[var(--pnl-primary-soft)] text-[var(--pnl-primary-ink)] text-sm font-semibold" aria-hidden="true">LD</span>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

export function Card({ title, children, className = "", action }: { title?: string; children: React.ReactNode; className?: string; action?: React.ReactNode }) {
  return (
    <section className={`pnl-card p-5 sm:p-6 mb-6 ${className}`}>
      {(title || action) && (
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          {title && <h2 className="pnl-card-title">{title}</h2>}
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

export function Stat({ label, value, hint }: { label: string; value: string | number; hint?: string }) {
  return (
    <div className="pnl-card p-5">
      <div className="text-sm text-[var(--pnl-muted)]">{label}</div>
      <div className="text-[1.75rem] leading-tight font-semibold tracking-tight text-[var(--pnl-ink)] mt-1">{value}</div>
      {hint && <div className="text-xs text-[var(--pnl-muted)] mt-1.5">{hint}</div>}
    </div>
  );
}

/** Shown when a data source has no credentials yet. */
export function NotConnected({ what, vars }: { what: string; vars: string[] }) {
  return (
    <div className="rounded-[var(--pnl-radius-sm)] border border-[#ffd8a8] bg-[var(--pnl-warn-soft)] text-[#8a3b06] text-sm p-4">
      <strong>{what} bağlı değil.</strong> Vercel → Settings → Environment Variables bölümüne şunları ekleyin: {vars.map((v, i) => <span key={v}>{i > 0 && ", "}<code>{v}</code></span>)}. Ayrıntılar: <code>docs/panel-setup.md</code>.
    </div>
  );
}

export function ErrorBox({ message }: { message: string }) {
  return <div role="alert" className="rounded-[var(--pnl-radius-sm)] border border-[#ffc9c9] bg-[var(--pnl-danger-soft)] text-[#a61e1e] text-sm p-4">Veri alınamadı: {message}</div>;
}

export function Table({ head, rows, empty = "Kayıt yok." }: { head: string[]; rows: (string | number | React.ReactNode)[][]; empty?: string }) {
  if (!rows.length) return <p className="text-sm text-[var(--pnl-muted)]">{empty}</p>;
  return (
    <div className="overflow-x-auto relative">
      <table className="pnl-table">
        <thead><tr>{head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Bar chart with violet gradient bars and light grid lines (no chart library). */
export function Bars({ data, label }: { data: { x: string; y: number }[]; label: string }) {
  if (!data.length) return <p className="text-sm text-[var(--pnl-muted)]">Veri yok.</p>;
  const max = Math.max(1, ...data.map((d) => d.y));
  const w = 100 / data.length;
  const gid = `g-${label.replace(/[^a-z0-9]/gi, "").slice(0, 12)}`;
  return (
    <figure>
      <svg viewBox="0 0 100 42" preserveAspectRatio="none" className="w-full h-44" role="img" aria-label={label}>
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8a6bff" />
            <stop offset="100%" stopColor="#5fb3ff" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75, 1].map((f) => <line key={f} x1="0" x2="100" y1={40 - f * 38} y2={40 - f * 38} stroke="#ecebf7" strokeWidth="0.2" />)}
        {data.map((d, i) => {
          const h = Math.max(0.6, (d.y / max) * 38);
          return (
            <g key={d.x}>
              <rect x={i * w + w * 0.18} width={w * 0.64} y={2} height={38} rx={Math.min(1.2, w * 0.3)} fill="#f3f2fb" />
              <rect x={i * w + w * 0.18} width={w * 0.64} y={40 - h} height={h} rx={Math.min(1.2, w * 0.3)} fill={`url(#${gid})`}><title>{`${d.x}: ${d.y}`}</title></rect>
            </g>
          );
        })}
      </svg>
      <figcaption className="flex justify-between text-xs text-[var(--pnl-muted)] mt-1.5"><span>{data[0].x}</span><span>en yüksek: {max}</span><span>{data[data.length - 1].x}</span></figcaption>
    </figure>
  );
}

/** Small note on analytics pages: live Google API or a dated Claude (MCP) snapshot. */
export function DataSource({ mode, generatedAt }: { mode: "live" | "snapshot"; generatedAt?: string }) {
  if (mode === "live") return null;
  const when = generatedAt ? new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit", timeZone: "Europe/London" }).format(new Date(generatedAt)) : "?";
  return (
    <p className="mb-5 inline-flex flex-wrap items-center gap-2 rounded-full bg-[var(--pnl-primary-soft)] px-4 py-1.5 text-xs text-[var(--pnl-primary-ink)]">
      <span className="font-semibold">Anlık görüntü: {when}</span>
      <span>· Google Analytics ve Search Console verileri Claude bağlantısıyla alındı; yenilemek için Claude&apos;a &quot;analitiği yenile&quot; yazın.</span>
    </p>
  );
}
