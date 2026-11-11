import Emoji from "@/components/visual/Emoji";
import FaqJsonLd from "@/components/FaqJsonLd";
import QuoteForm from "@/components/QuoteForm";
import ProcessFlow from "@/components/visual/ProcessFlow";
import TeamQuote from "@/components/TeamQuote";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

import { SITE_URL } from "@/lib/site";
import { trAlternates } from "@/lib/i18n";
const PAGE_URL = `${SITE_URL}/case-studies`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20operasyon%20danismanliği%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Operasyon Örnekleri: Gerçek UK Müşteri Operasyonları | LondraDepo",
  description:
    "LondraDepo.com ile İngiltere depo altyapısı kuran markaların gerçek operasyon örnekleri. Fulfillment, dağıtım ve e-ticaret altyapısı vaka analizleri.",
  alternates: trAlternates("/case-studies"),
  openGraph: {
    title: "Operasyon Örnekleri — LondraDepo.com",
    description:
      "İngiltere'de depo altyapısı, fulfillment ve dağıtım operasyonu kuran markaların gerçek operasyon örnekleri.",
    url: PAGE_URL,
    siteName: "LondraDepo.com",
    locale: "tr_TR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Operasyon Örnekleri", item: PAGE_URL },
      ],
    },
    {
      "@type": "CollectionPage",
      name: "Operasyon Örnekleri — LondraDepo.com",
      url: PAGE_URL,
      mainEntity: { "@id": `${PAGE_URL}#items` },
      description:
        "İngiltere'de depo altyapısı, fulfillment (sipariş hazırlama) ve dağıtım operasyonu kuran markaların gerçek büyüme hikayeleri.",
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#items`,
      name: "LondraDepo.com Operasyon Örnekleri",
      url: PAGE_URL,
      numberOfItems: 7,
      itemListElement: [
        { "@type": "ListItem", position: 1, url: `${SITE_URL}/case-studies/tortilla-uk-distribution` },
        { "@type": "ListItem", position: 2, url: `${SITE_URL}/case-studies/uk-walking-treadmill-distribution` },
        { "@type": "ListItem", position: 3, url: `${SITE_URL}/case-studies/cruyff-uk-fulfillment` },
        { "@type": "ListItem", position: 4, url: `${SITE_URL}/case-studies/uk-auto-parts-warehouse` },
        { "@type": "ListItem", position: 5, url: `${SITE_URL}/case-studies/pizza-box-distribution-uk` },
        { "@type": "ListItem", position: 6, url: `${SITE_URL}/case-studies/arac-koltuk-kaplama-ingiltere-depo` },
        { "@type": "ListItem", position: 7, url: `${SITE_URL}/case-studies/tasinabilir-sarj-istasyonu-ingiltere-operasyonu` },
      ],
    },
  ],
};

const faqs = [
  { q: "İngiltere'ye az ürünle başlanabilir mi?", a: "Evet, sabit bir minimum yok. Operasyon örneklerimizdeki Ankara merkezli tortilla üreticisi İngiltere'ye 1 deneme paletiyle girdi ve bugün aylık 6 × 40HC konteyner hacmine ulaştı." },
  { q: "Hangi sektörlerde operasyonunuz var?", a: "Gıda ve FMCG, ambalaj, otomotiv yedek parça ve döşeme malzemeleri, moda ve e-ticaret, walking treadmill gibi büyük hacimli ürünler ve taşınabilir şarj istasyonu gibi elektronik ürünlerde canlı UK operasyonlarımız var." },
  { q: "Aynı stok hem online hem B2B müşterilere hizmet verebilir mi?", a: "Evet. Örneklerimizden birkaçında e-ticaret siparişleri ve toptan ya da ticari teslimatlar Essex'teki aynı UK stoğundan karşılanıyor." },
  { q: "Bu operasyonlar gerçek mi?", a: "Evet. Her örnek, LondraDepo'nun Rayleigh, Essex'teki deposundan yürütülen canlı bir operasyonu anlatır: başlangıç noktası, depolama, fulfillment ve dağıtımın nasıl kurulduğu ve neyin değiştiği." },
  { q: "Benzer bir operasyona nasıl başlarım?", a: "Ürününüzü, tahmini hacminizi ve satış kanallarınızı bu sayfadaki formla paylaşın. 1 deneme paletiyle küçük başlayabilirsiniz; ekibimiz mal kabul, depolama ve sipariş akışını sizinle planlar." },
];

const STATS = [
  { value: "7", label: "canlı UK operasyonu" },
  { value: "1 → 6×40HC", label: "tortilla üreticisi: deneme paletinden aylık konteynere" },
  { value: "~%80", label: "Cruyff için daha hızlı UK teslimatı" },
  { value: "Aynı gün", label: "online ve atölye siparişleri işleniyor (koltuk kaplama)" },
];

const cases = [
  {
    slug: "tortilla-uk-distribution",
    industry: "Gıda / FMCG",
    industryBg: "bg-amber-50 text-amber-700",
    title: "Tortilla Markası — İngiltere Depo & Dağıtım Operasyonu",
    summary:
      "Ankara merkezli tortilla ve flatbread üreticisinin İngiltere operasyonuna küçük hacimle başlayıp yüksek hacimli dağıtım modeline dönüşen büyüme hikayesi.",
    keywords: ["İngiltere tortilla deposu", "İngiltere FMCG fulfillment operasyonu", "İngiltere gıda depo & dağıtım operasyonu"],
  },
  {
    slug: "uk-walking-treadmill-distribution",
    industry: "Sağlık & E-Ticaret",
    industryBg: "bg-teal-50 text-teal-700",
    title: "Walking Treadmill — İngiltere Depo, Fulfillment & Dağıtım Operasyonu",
    summary:
      "Yaşlı ve rehabilitasyon kullanıcılarına yönelik walking treadmill ürünlerinin İngiltere depo altyapısı, online fulfillment ve discount store dağıtım operasyonu.",
    keywords: ["Büyük hacimli ürün fulfillment operasyonu", "walking treadmill İngiltere deposu", "İngiltere e-ticaret fulfillment altyapısı"],
  },
  {
    slug: "cruyff-uk-fulfillment",
    industry: "Moda & Premium Giyim",
    industryBg: "bg-pink-50 text-pink-700",
    title: "Cruyff — İngiltere Moda & Fulfillment Operasyonu",
    summary:
      "Johan Cruyff markasının Hollanda'dan İngiltere fulfillment operasyonuna geçişi: İngiltere depo altyapısı, yeniden paketleme, e-ticaret fulfillment ve dağıtım.",
    keywords: ["İngiltere moda fulfillment operasyonu", "İngiltere depo altyapısı", "İngiltere moda e-ticaret operasyonu"],
  },
  {
    slug: "uk-auto-parts-warehouse",
    industry: "Otomotiv",
    industryBg: "bg-blue-50 text-blue-700",
    title: "OEM & Yan Sanayi — İngiltere Yedek Parça Depo Operasyonu",
    summary:
      "Lüks araç OEM ve aftermarket yedek parçalarının İngiltere'de stok yönetimi, hasar kontrollü depolama ve dağıtım operasyonu.",
    keywords: ["İngiltere yedek parça deposu", "İngiltere otomotiv fulfillment operasyonu"],
  },
  {
    slug: "pizza-box-distribution-uk",
    industry: "B2B Dağıtım",
    industryBg: "bg-amber-50 text-amber-700",
    title: "Pizza Kutusu — İngiltere B2B Depo & Dağıtım Operasyonu",
    summary:
      "Restoranlara toptan pizza kutusu tedarikçisinin İngiltere'de palet bazlı depolama ve düzenli B2B dağıtım operasyonunun kurulumu.",
    keywords: ["pizza kutusu İngiltere deposu", "İngiltere ambalaj dağıtım operasyonu"],
  },
  {
    slug: "arac-koltuk-kaplama-ingiltere-depo",
    industry: "Otomotiv & Döşeme",
    industryBg: "bg-blue-50 text-blue-700",
    title: "Araç Koltuk Kaplama & Suni Deri — İngiltere Depo & Satış Operasyonu",
    summary:
      "Otomotiv döşeme malzemeleri üreticisinin İngiltere depo altyapısı, online sipariş fulfillment ve B2B atölye dağıtım operasyonu.",
    keywords: ["İngiltere otomotiv deposu", "suni deri İngiltere fulfillment operasyonu", "İngiltere otomotiv döşeme lojistiği"],
  },
  {
    slug: "tasinabilir-sarj-istasyonu-ingiltere-operasyonu",
    industry: "Elektronik & Smart Device",
    industryBg: "bg-teal-50 text-teal-700",
    title: "Taşınabilir Şarj İstasyonu — İngiltere Operasyon Yönetimi",
    summary:
      "Taşınabilir şarj istasyonu ürünlerinin İngiltere depo altyapısı, SIM kart aktivasyonu, şarj kontrolü ve son kullanıcı sevkiyat operasyonu.",
    keywords: ["elektronik fulfillment İngiltere", "taşınabilir şarj istasyonu İngiltere operasyonu", "SIM aktivasyon operasyonu"],
  },
];

export default function CaseStudiesIndexPage() {
  return (
    <>
      <Header />
      <main>
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-2 text-sm text-slate-500 flex gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-[#0b2545] font-medium">Operasyon Örnekleri</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-[#0b2545] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-white/80 mb-4 inline-block">
              Gerçek Operasyonlar
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-balance">
              İngiltere&apos;de Yürüttüğümüz Operasyonlar
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
              Bunlar Rayleigh, Essex&apos;teki depomuzdan yürüttüğümüz canlı İngiltere operasyonları. Her örnek başlangıç
              noktasını, depolama, fulfillment ve dağıtımın nasıl kurulduğunu ve neyin değiştiğini gösteriyor: 1 deneme
              paletiyle başlayıp bugün ayda 6 × 40HC konteyner gönderen bir gıda üreticisinden, UK siparişlerini
              Hollanda&apos;dan Essex&apos;e taşıyan bir moda markasına kadar.
            </p>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-white border-b border-slate-200 py-4 px-4">
          <div className="max-w-4xl mx-auto flex flex-wrap gap-6 text-sm text-slate-600 justify-center md:justify-start">
            <span className="flex items-center gap-2"><Emoji e="✅" /> Essex merkezli İngiltere depo altyapısı</span>
            <span className="flex items-center gap-2"><Emoji e="✅" /> Türkçe operasyon iletişimi</span>
            <span className="flex items-center gap-2"><Emoji e="✅" /> Hızlı operasyon kurulumu</span>
            <span className="flex items-center gap-2"><Emoji e="✅" /> Esnek depo &amp; sipariş operasyon modeli</span>
          </div>
        </section>

        {/* Results */}
        <section className="py-12 px-4 bg-[#f6f8fb]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-5">Bu operasyonlardan sonuçlar</h2>
            <dl className="grid gap-4 grid-cols-2 lg:grid-cols-4">
              {STATS.map((st) => (
                <div key={st.label} className="flex flex-col-reverse rounded-xl bg-[#0b2545] text-white p-5">
                  <dt className="text-sm text-white/75 mt-1">{st.label}</dt>
                  <dd className="text-2xl font-extrabold">{st.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-slate-600">
              Sektörünüze göre bakmak için: <Link href="/sektorler" className="underline">Sektörler</Link>
            </p>
          </div>
        </section>

        {/* Case cards */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {cases.map((c) => (
                <Link
                  key={c.slug}
                  href={`/case-studies/${c.slug}`}
                  className="group block border border-slate-200 rounded-2xl overflow-hidden hover:border-[#0b2545]/40 hover:shadow-lg transition"
                >
                  <div
                    className="h-2"
                    style={{ background: "linear-gradient(90deg, #0b2545, #2d5986)" }}
                  />
                  <div className="p-7">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.industryBg}`}>
                        {c.industry}
                      </span>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#0b2545]/5 text-[#0b2545]">
                        Operasyon Örneği
                      </span>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-50 text-green-700 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                        Aktif UK operasyonu
                      </span>
                    </div>
                    <h2 className="text-xl font-extrabold text-[#0b2545] mb-3 group-hover:underline">
                      {c.title}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{c.summary}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {c.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#d62839]">
                      Operasyonu incele →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-14">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-5">Bu operasyonlar genelde nasıl başlıyor?</h2>
              <ProcessFlow
                items={[
                  { title: "Ürünü ve planı paylaşın", text: "Ürün tipi, tahmini palet veya koli, aylık sipariş ve satış kanalları." },
                  { title: "Deneme sevkiyatı", text: "Tortilla üreticisinin 1 paletle yaptığı gibi küçük başlayıp pazarı ve süreci test edebilirsiniz." },
                  { title: "Kurulum", text: "Mal kabul, Mintsoft WMS'te stok, etiketleme ve sipariş akışı netleştirilir." },
                  { title: "Büyüme", text: "Hacim, kanallar ve teslimat programları aynı Essex stoğundan büyür." },
                ]}
              />
            </div>

            <div className="mt-12"><TeamQuote id="sertacExporters" /></div>

            <div className="mt-12">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-6">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <div key={f.q} className="border border-slate-200 rounded-xl p-5">
                    <h3 className="font-bold text-[#0b2545] mb-2">{f.q}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-14 bg-[#0b2545] rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-extrabold text-white mb-3">
                İngiltere&apos;de depo, fulfillment ve dağıtım operasyonu mu kuruyorsunuz?
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed max-w-2xl mx-auto">
                Operasyon modelinizi paylaşın, size özel İngiltere depo altyapısı ve lojistik
                planlamasını birlikte oluşturalım.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-full transition"
                >
                  WhatsApp&apos;tan Hızlı Bilgi Alın
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition"
                >
                  İngiltere operasyon danışmanı ile görüşün
                </Link>
              </div>
            </div>

            {/* Internal links */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="text-slate-500 text-sm mb-3">İlgili hizmetler:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/ingiltere-fulfillment" className="text-sm text-[#0b2545] hover:underline">→ İngiltere Fulfillment</Link>
                <Link href="/palet-depolama" className="text-sm text-[#0b2545] hover:underline">→ Palet Depolama</Link>
                <Link href="/amazon-prep-uk" className="text-sm text-[#0b2545] hover:underline">→ Amazon Prep UK</Link>
                <Link href="/ingiltere-depo-avantajlari" className="text-sm text-[#0b2545] hover:underline">→ Depo Avantajları</Link>
                <Link href="/sektorler" className="text-sm text-[#0b2545] hover:underline">→ Sektörler</Link>
                <Link href="/ingiltere-depo-maliyet-hesaplama" className="text-sm text-[#0b2545] hover:underline">→ Depo Maliyet Hesaplama</Link>
                <Link href="/konteyner-varis-planlayici" className="text-sm text-[#0b2545] hover:underline">→ Konteyner Varış Planlayıcı</Link>
              </div>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <FaqJsonLd faqs={faqs} />
        <QuoteForm
          formId="tr_cases_quote"
          heading="Sizin Operasyonunuzu Planlayalım"
          intro="Ürününüzü, tahmini hacminizi ve satış kanallarınızı yazın; benzer operasyonlardaki deneyimimizle size uygun UK kurulumunu önerelim."
          presetServices={["Depolama"]}
        />
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
