import PanelShell, { Card } from "@/components/panel/PanelShell";

const GROUPS: { title: string; links: [string, string][] }[] = [
  { title: "Ölçüm", links: [["Google Analytics 4", "https://analytics.google.com/analytics/web/#/p538800744/reports/intelligenthome"], ["Search Console", "https://search.google.com/search-console?resource_id=sc-domain%3Alondradepo.com"], ["Vercel (yayınlar)", "https://vercel.com/tortilla/londra-depo"], ["Google İşletme Profili", "https://business.google.com/"]] },
  { title: "Talepler ve satış", links: [["Formspree", "https://formspree.io/forms/xoejvawy/submissions"], ["Calendly", "https://calendly.com/app/scheduled_events/user/me"], ["Apollo", "https://app.apollo.io/"], ["WhatsApp Business Web", "https://web.whatsapp.com/"]] },
  { title: "Site araçları", links: [["Depo maliyet hesaplama", "/ingiltere-depo-maliyet-hesaplama"], ["CBM ve palet hesaplama", "/cbm-palet-hesaplama"], ["Konteyner varış planlayıcı", "/konteyner-varis-planlayici"], ["Teklif formu (TR)", "/teklif-al"], ["Quote form (EN)", "/en/request-a-quote"], ["llms.txt", "/llms.txt"], ["Site haritası", "/sitemap.xml"]] },
  { title: "Dokümanlar (GitHub)", links: [["Otorite ve link planı", "https://github.com/digiroiio-lgtm/LondraDepo/blob/main/docs/authority-plan-2026-11.md"], ["Amazon hunisi ve reklam metinleri", "https://github.com/digiroiio-lgtm/LondraDepo/blob/main/docs/amazon-funnel-and-ads-2026-11.md"], ["Panel kurulumu", "https://github.com/digiroiio-lgtm/LondraDepo/blob/main/docs/panel-setup.md"]] },
];

export default function LinksPage() {
  return (
    <PanelShell active="/panel/linkler" title="Hızlı linkler">
      <div className="grid gap-6 lg:grid-cols-2">
        {GROUPS.map((g) => (
          <Card key={g.title} title={g.title} className="mb-0">
            <ul className="space-y-2">
              {g.links.map(([label, href]) => (
                <li key={href}><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-[#1c1a3a] underline">{label}</a></li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </PanelShell>
  );
}
