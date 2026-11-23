import PanelShell, { Card, Stat, Table } from "@/components/panel/PanelShell";
import { checkUrls, llmsStatus, sitemapUrls } from "@/lib/panel/seo";

export const dynamic = "force-dynamic";


export default async function SeoPage({ searchParams }: { searchParams: Promise<{ run?: string }> }) {
  const { run } = await searchParams;
  const urls = sitemapUrls();
  const llms = await llmsStatus();
  const bad = run ? await checkUrls() : null;
  return (
    <PanelShell active="/panel/seo" title="SEO sağlığı">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-6">
        <Stat label="Site haritasındaki sayfa" value={urls.length} hint="Türkçe + İngilizce" />
        {llms.map((l) => (
          <Stat key={l.file} label={l.file} value={l.updated ?? "okunamadı"} hint={l.missing < 0 ? "dosya alınamadı" : `${l.ageDays} gün önce · eksik sayfa: ${l.missing}`} />
        ))}
      </div>
      <Card title="Canlı sayfa kontrolü">
        <p className="text-sm text-slate-600 mb-4">Site haritasındaki tüm sayfalar canlı sitede tek tek açılır; 200 dönmeyenler listelenir (~30 sn).</p>
        <form><input type="hidden" name="run" value="1" /><button className="bg-[#0b2545] text-white rounded-full px-5 py-2 text-sm font-semibold">Kontrolü çalıştır</button></form>
        {bad && <div className="mt-4">{bad.length ? <Table head={["Sayfa", "Durum"]} rows={bad.map((b) => [b.url, b.status || "bağlanamadı"])} /> : <p className="text-green-700 font-semibold">✓ {urls.length} sayfanın tamamı 200 dönüyor.</p>}</div>}
      </Card>
      <Card title="Uyarı kuralları">
        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
          <li>llms dosyaları 45 günden eskiyse veya eksik sayfa varsa: <code>npm run build &amp;&amp; npm run llms:gen</code> ile yeniden üretin.</li>
          <li>200 dönmeyen sayfa varsa: yönlendirme veya silinmiş sayfa olup olmadığını kontrol edin.</li>
        </ul>
      </Card>
    </PanelShell>
  );
}
