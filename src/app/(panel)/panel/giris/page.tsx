import { Brand } from "@/components/panel/PanelShell";
import { panelConfigured } from "@/lib/panel/auth";

export const dynamic = "force-dynamic";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ e?: string }> }) {
  const { e } = await searchParams;
  const configured = panelConfigured();
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10">
      <form method="post" action="/api/panel/login" className="pnl-card w-full max-w-md p-8 sm:p-10">
        <Brand size="lg" />
        <h1 className="text-2xl font-semibold tracking-tight text-[var(--pnl-ink)] mt-8 mb-1">Panele giriş</h1>
        <p className="text-sm text-[var(--pnl-muted)] mb-6">Devam etmek için panel şifresini girin.</p>
        {!configured && (
          <p className="mb-4 rounded-2xl bg-[var(--pnl-warn-soft)] border border-[#ffd8a8] text-[#8a3b06] text-sm p-3">
            Panel henüz yapılandırılmadı: Vercel&apos;de <code>PANEL_PASSWORD</code> ve <code>PANEL_SECRET</code> ortam değişkenlerini ekleyin.
          </p>
        )}
        {e === "1" && <p role="alert" className="mb-4 rounded-2xl bg-[var(--pnl-danger-soft)] border border-[#ffc9c9] text-[#a61e1e] text-sm p-3">Şifre hatalı.</p>}
        <label htmlFor="password" className="block text-sm font-medium text-[var(--pnl-ink)] mb-1.5">Şifre</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required className="pnl-input !py-3 mb-6" />
        <button type="submit" className="pnl-btn-primary w-full !py-3">Giriş yap</button>
        <p className="mt-8 text-center text-xs font-medium" style={{ color: "var(--pnl-primary)" }}>LondraDepo Panel · v2</p>
      </form>
    </main>
  );
}
