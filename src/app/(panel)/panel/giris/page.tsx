import { panelConfigured } from "@/lib/panel/auth";

export const dynamic = "force-dynamic";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ e?: string }> }) {
  const { e } = await searchParams;
  const configured = panelConfigured();
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <form method="post" action="/api/panel/login" className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-xl font-extrabold text-[#0b2545] mb-1">LondraDepo Panel</h1>
        <p className="text-sm text-slate-500 mb-6">Devam etmek için panel şifresini girin.</p>
        {!configured && (
          <p className="mb-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-sm p-3">
            Panel henüz yapılandırılmadı: Vercel&apos;de <code>PANEL_PASSWORD</code> ve <code>PANEL_SECRET</code> ortam değişkenlerini ekleyin.
          </p>
        )}
        {e === "1" && <p role="alert" className="mb-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm p-3">Şifre hatalı.</p>}
        <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-1.5">Şifre</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required className="w-full rounded-xl border border-slate-300 px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-[#0b2545]" />
        <button type="submit" className="w-full bg-[#0b2545] hover:bg-[#13315c] text-white font-semibold py-3 rounded-full transition">Giriş yap</button>
      </form>
    </main>
  );
}
