import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/case-studies`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20operasyon%20danismanliği%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Başarı Hikayeleri | İngiltere Operasyon Başarı Hikayeleri | LondraDepo.com",
  description:
    "LondraDepo.com ile İngiltere depo altyapısı kuran markaların gerçek hikayeleri. İngiltere fulfillment, dağıtım operasyonu ve e-ticaret altyapısı örnekleri.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Başarı Hikayeleri — İngiltere Operasyon Başarı Hikayeleri | LondraDepo.com",
    description:
      "İngiltere'de depo altyapısı, fulfillment ve dağıtım operasyonu kuran markaların gerçek büyüme hikayeleri.",
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
        "İngiltere'de depo altyapısı, fulfillment (sipariş hazırlama) ve dağıtım operasyonu kuran markaların gerçek büyüme hikayeleri.",
    },
  ],
};

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
            <span className="text-[#0b2545] font-medium">Başarı Hikayeleri</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-[#0b2545] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-white/80 mb-4 inline-block">
              Başarı Hikayeleri
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-balance">
              İngiltere Operasyonu Kuran Markalar
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              Türkiye&apos;den İngiltere&apos;ye açılan markaların gerçek operasyon hikayeleri.
              Depolama, fulfillment (sipariş hazırlama), dağıtım ve İngiltere operasyon
              altyapısının nasıl kurulduğunu keşfedin.
            </p>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-white border-b border-slate-200 py-4 px-4">
          <div className="max-w-4xl mx-auto flex flex-wrap gap-6 text-sm text-slate-600 justify-center md:justify-start">
            <span className="flex items-center gap-2">✅ Essex merkezli İngiltere depo altyapısı</span>
            <span className="flex items-center gap-2">✅ Türkçe operasyon iletişimi</span>
            <span className="flex items-center gap-2">✅ Hızlı operasyon kurulumu</span>
            <span className="flex items-center gap-2">✅ Esnek depo &amp; sipariş operasyon modeli</span>
          </div>
        </section>

        {/* Warehouse gallery */}
        <section className="py-12 px-4 bg-[#f6f8fb]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-extrabold text-[#0b2545] mb-6 text-center">
              Operasyonun Gerçekleştiği Yer: Essex Depo Altyapımız
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { src: "/uk-warehouse-essex.jpeg", alt: "UK warehouse Essex interior — fulfillment operasyonu" },
                { src: "/uk-pallet-storage.jpeg", alt: "UK pallet storage — İngiltere palet depolama" },
                { src: "/essex-warehouse-exterior.jpeg", alt: "Essex warehouse exterior — konteyner kabul alanı" },
                { src: "/london-fulfillment-center.jpeg", alt: "London fulfillment center — İngiltere koli hazırlama" },
              ].map((img) => (
                <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
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
                        Başarı Hikayesi
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
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#e63946]">
                      Başarı hikayesini incele →
                    </span>
                  </div>
                </Link>
              ))}
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
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition"
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
