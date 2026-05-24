import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/case-studies`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20operasyon%20danismanliği%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Başarı Hikayeleri | UK Operasyon Case Study'leri | LondraDepo.com",
  description:
    "LondraDepo.com ile İngiltere operasyonu kuran markaların gerçek hikayeleri. Moda, otomotiv ve B2B dağıtım operasyonlarından somut örnekler.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Başarı Hikayeleri — UK Operasyon Case Study'leri | LondraDepo.com",
    description:
      "İngiltere'de depolama, fulfillment ve dağıtım operasyonu kuran markaların başarı hikayeleri.",
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
        { "@type": "ListItem", position: 2, name: "Başarı Hikayeleri", item: PAGE_URL },
      ],
    },
    {
      "@type": "CollectionPage",
      name: "Başarı Hikayeleri — LondraDepo.com",
      url: PAGE_URL,
      description:
        "İngiltere'de depolama, fulfillment ve dağıtım operasyonu kuran markaların gerçek case study'leri.",
    },
  ],
};

const cases = [
  {
    slug: "krufy-uk-fashion-fulfillment",
    industry: "Moda & Apparel",
    industryBg: "bg-pink-50 text-pink-700",
    title: "Krufy — UK Moda Fulfillment Operasyonu",
    summary:
      "İngiltere piyasasına giren apparel markasının depolama, yeniden paketleme ve sipariş hazırlama süreçlerinin kurulumu.",
    keywords: ["UK fashion fulfillment", "apparel warehouse UK"],
  },
  {
    slug: "uk-auto-parts-warehouse",
    industry: "Otomotiv",
    industryBg: "bg-blue-50 text-blue-700",
    title: "OEM & Yan Sanayi — Yedek Parça İngiltere Depolama",
    summary:
      "Lüks araç OEM ve aftermarket yedek parçalarının İngiltere'de stok yönetimi, hasar kontrollü depolama ve UK dağıtım operasyonu.",
    keywords: ["UK auto parts warehouse", "automotive fulfillment UK"],
  },
  {
    slug: "pizza-box-distribution-uk",
    industry: "B2B Dağıtım",
    industryBg: "bg-amber-50 text-amber-700",
    title: "Pizza Kutusu — İngiltere B2B Dağıtım Operasyonu",
    summary:
      "Restoranlara toptan pizza kutusu tedarikçisinin İngiltere'de palet bazlı depolama ve düzenli B2B dağıtım sürecinin kurulumu.",
    keywords: ["pizza box warehouse UK", "packaging distribution UK"],
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
            <span className="text-[#0b2545] font-medium">Başarı Hikayeleri</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-[#0b2545] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-white/80 mb-4 inline-block">
              Case Studies
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-balance">
              İngiltere Operasyonu Kuran Markalar
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              Türkiye'den İngiltere'ye taşınan gerçek operasyon örnekleri. Depolama, fulfillment ve
              dağıtım süreçlerini İngiltere'de nasıl kurduklarını keşfedin.
            </p>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-white border-b border-slate-200 py-4 px-4">
          <div className="max-w-4xl mx-auto flex flex-wrap gap-6 text-sm text-slate-600 justify-center md:justify-start">
            <span className="flex items-center gap-2">✅ Essex merkezli UK depo</span>
            <span className="flex items-center gap-2">✅ Türkçe operasyon iletişimi</span>
            <span className="flex items-center gap-2">✅ Hızlı kurulum</span>
            <span className="flex items-center gap-2">✅ Esnek fulfillment modeli</span>
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
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#e63946]">
                      Operasyon detaylarını gör →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-14 bg-[#0b2545] rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-extrabold text-white mb-3">
                Markanız için operasyon modeli oluşturun
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                Depolama, fulfillment veya dağıtım ihtiyacınızı paylaşın — size özel bir operasyon
                planı hazırlayalım.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition"
              >
                Operasyon danışmanı ile görüşün
              </a>
            </div>

            {/* Internal links */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="text-slate-500 text-sm mb-3">İlgili hizmetler:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/ingiltere-fulfillment" className="text-sm text-[#0b2545] hover:underline">→ İngiltere Fulfillment</Link>
                <Link href="/palet-depolama" className="text-sm text-[#0b2545] hover:underline">→ Palet Depolama</Link>
                <Link href="/amazon-prep-uk" className="text-sm text-[#0b2545] hover:underline">→ Amazon Prep UK</Link>
                <Link href="/ingiltere-depo-avantajlari" className="text-sm text-[#0b2545] hover:underline">→ Depo Avantajları</Link>
              </div>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
