import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import CaseHero from "@/components/CaseHero";
import OperationsFlow from "@/components/OperationsFlow";
import RelatedCases from "@/components/RelatedCases";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/case-studies/cruyff-uk-fulfillment`;
const WHATSAPP =
  "https://wa.me/447554195190?text=Merhaba%2C%20moda%20fulfillment%20operasyonu%20hakkinda%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Cruyff UK Fulfillment & Fashion Warehouse Case Study | LondraDepo.com",
  description:
    "Johan Cruyff'a ait Cruyff markasının Hollanda'dan İngiltere fulfillment operasyonuna geçiş süreci. UK warehouse, repackaging, ecommerce fulfillment ve dağıtım operasyonu.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Cruyff — İngiltere Moda & Fulfillment Operasyonu | LondraDepo.com",
    description:
      "Johan Cruyff markasının Hollanda'dan UK fulfillment operasyonuna geçişi: warehouse, repackaging ve ecommerce distribution.",
    url: PAGE_URL,
    siteName: "LondraDepo.com",
    locale: "tr_TR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cruyff UK Fulfillment Case Study | LondraDepo.com",
    description:
      "Cruyff markasının Hollanda'dan UK fulfillment altyapısına geçiş operasyonu.",
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Başarı Hikayeleri",
          item: `${SITE_URL}/case-studies`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cruyff UK Fashion Fulfillment",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Cruyff — İngiltere Moda & Fulfillment Operasyonu",
      description:
        "Johan Cruyff markasının Hollanda'dan İngiltere fulfillment operasyonuna geçiş süreci.",
      url: PAGE_URL,
      datePublished: "2026-01-01",
      dateModified: "2026-05-24",
      author: {
        "@type": "Person",
        name: "Sertaç Y.",
      },
      reviewedBy: {
        "@type": "Person",
        name: "Yusuf B.",
      },
      publisher: {
        "@type": "Organization",
        name: "LondraDepo.com",
        url: SITE_URL,
      },
      mainEntityOfPage: PAGE_URL,
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "LondraDepo.com",
      url: SITE_URL,
      description:
        "Türkiye'den İngiltere'ye satış yapan firmalar için UK warehouse, fulfillment ve lojistik altyapısı.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "UK fashion fulfillment nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UK fashion fulfillment; moda ürünlerinin İngiltere içindeki bir depodan depolanması, repackaging, etiketleme ve online siparişlere göre hazırlanarak müşterilere teslim edilmesi sürecidir.",
          },
        },
        {
          "@type": "Question",
          name: "Moda markaları için UK warehouse avantajı nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "İngiltere'de fiziksel stok tutmak; teslimat sürelerini kısaltır, müşteri memnuniyetini artırır, kargo maliyetlerini optimize eder ve lokalize bir marka deneyimi sunar.",
          },
        },
        {
          "@type": "Question",
          name: "Repackaging operasyonu sağlıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Markanıza özel ambalaj, hang tag ve etiket güncellemesi dahil tam repackaging ve relabeling hizmeti sunuyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Online sipariş fulfillment nasıl çalışıyor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Web sitenizden veya marketplace kanallarınızdan gelen siparişler deposumuza iletilir; pick & pack operasyonu ile hazırlanıp UK kargo ağıyla müşteriye gönderilir.",
          },
        },
        {
          "@type": "Question",
          name: "UK next-day delivery mümkün mü?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Essex merkezli operasyonumuz UK genelinde next-day ve 2-day delivery seçenekleri sunmaktadır.",
          },
        },
        {
          "@type": "Question",
          name: "Moda markaları için stok yönetimi sağlıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Stok takibi, sezonluk koleksiyon yönetimi ve düzenli stok raporlaması hizmetlerini Türkçe olarak sunuyoruz.",
          },
        },
      ],
    },
  ],
};

const flowSteps = [
  {
    step: 1,
    icon: "🚢",
    title: "Hollanda'dan UK Depo Sevkiyatı",
    desc: "Cruyff koleksiyonu ürünleri Hollanda'dan Essex operasyon merkezimize sevk edilerek teslim alındı.",
  },
  {
    step: 2,
    icon: "📋",
    title: "Ürün Kabul & Kalite Kontrol",
    desc: "Her ürün giriş aşamasında eksiksiz sayıldı, kalite ve hasar kontrolü yapıldı, sisteme kaydedildi.",
  },
  {
    step: 3,
    icon: "📦",
    title: "Repackaging & Relabeling",
    desc: "Ürünler Cruyff marka standartlarına uygun olarak yeniden paketlendi; hang tag, etiket ve ambalaj güncellendi.",
  },
  {
    step: 4,
    icon: "🛒",
    title: "Ecommerce Entegrasyonu",
    desc: "Online satış kanallarından (web sitesi, marketplace) gelen siparişler operasyon akışına entegre edildi.",
  },
  {
    step: 5,
    icon: "🏃",
    title: "Pick & Pack Operasyonu",
    desc: "Her sipariş depodan toplanıp Cruyff ambalajıyla hazırlandı, sevk etiketi basıldı.",
  },
  {
    step: 6,
    icon: "🚚",
    title: "UK Dağıtım & Teslimat",
    desc: "Hazırlanan siparişler UK kargo ağıyla müşterilere next-day veya 2-day delivery seçeneğiyle teslim edildi.",
  },
];

const faqs = [
  {
    q: "UK fashion fulfillment nedir?",
    a: "UK fashion fulfillment; moda ürünlerinin İngiltere içindeki bir depodan depolanması, repackaging, etiketleme ve online siparişlere göre hazırlanarak müşterilere teslim edilmesi sürecidir.",
  },
  {
    q: "Moda markaları için UK warehouse avantajı nedir?",
    a: "İngiltere'de fiziksel stok tutmak; teslimat sürelerini kısaltır, müşteri memnuniyetini artırır, kargo maliyetlerini optimize eder ve lokalize bir marka deneyimi sunar.",
  },
  {
    q: "Repackaging operasyonu sağlıyor musunuz?",
    a: "Evet. Markanıza özel ambalaj, hang tag ve etiket güncellemesi dahil tam repackaging ve relabeling hizmeti sunuyoruz.",
  },
  {
    q: "Online sipariş fulfillment nasıl çalışıyor?",
    a: "Web sitenizden veya marketplace kanallarınızdan gelen siparişler deposumuza iletilir; pick & pack operasyonu ile hazırlanıp UK kargo ağıyla müşteriye gönderilir.",
  },
  {
    q: "UK next-day delivery mümkün mü?",
    a: "Evet. Essex merkezli operasyonumuz UK genelinde next-day ve 2-day delivery seçenekleri sunmaktadır.",
  },
  {
    q: "Moda markaları için stok yönetimi sağlıyor musunuz?",
    a: "Evet. Stok takibi, sezonluk koleksiyon yönetimi ve düzenli stok raporlaması hizmetlerini Türkçe olarak sunuyoruz.",
  },
];

const relatedCases = [
  {
    slug: "uk-auto-parts-warehouse",
    industry: "Otomotiv",
    title: "OEM & Yan Sanayi — Yedek Parça İngiltere Depolama",
    summary:
      "Lüks araç yedek parçalarının İngiltere'de stok yönetimi ve dağıtım operasyonu.",
  },
  {
    slug: "pizza-box-distribution-uk",
    industry: "B2B Dağıtım",
    title: "Pizza Kutusu — İngiltere B2B Dağıtım Operasyonu",
    summary:
      "Restoranlara toptan ambalaj tedarikçisinin palet bazlı UK dağıtım süreci.",
  },
];

export default function CruyffCaseStudyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 py-2 text-sm text-slate-500 flex flex-wrap gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-[#0b2545] transition">
              Başarı Hikayeleri
            </Link>
            <span>/</span>
            <span className="text-[#0b2545] font-medium">Cruyff UK Fashion Fulfillment</span>
          </div>
        </nav>

        <article className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <CaseHero
              industry="Moda & Premium Apparel"
              industryColor="text-pink-700 bg-pink-50"
              brand="Cruyff"
              title="Cruyff — İngiltere Moda & Fulfillment Operasyonu"
              subtitle="Johan Cruyff&apos;un mirasını taşıyan Cruyff markası, Hollanda&apos;dan İngiltere online satış operasyonuna geçiş sürecinde UK fulfillment ve warehouse altyapısını LondraDepo.com üzerinden yapılandırdı. Depolama, repackaging, stok yönetimi ve ecommerce fulfillment tek merkezden yönetilmeye başlandı."
              metrics={[
                { label: "UK Teslimat Süresi", value: "2 Gün" },
                { label: "Operasyon Dili", value: "TR + EN" },
                { label: "Kapsam", value: "UK Geneli" },
                { label: "Altyapı", value: "Fashion Fulfillment" },
              ]}
            />

            {/* Trust bar */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10 flex flex-wrap gap-4 text-sm text-slate-600 justify-center md:justify-start">
              <span>🏆 International fashion operations</span>
              <span>🚀 UK ecommerce infrastructure</span>
              <span>✨ Premium apparel logistics</span>
              <span>📈 Operational scalability</span>
              <span>🇬🇧 UK market fulfillment</span>
            </div>

            {/* Problem */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">
                Operasyonel Zorluk
              </h2>
              <div className="bg-slate-50 border-l-4 border-[#e63946] rounded-r-xl p-6">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Cruyff markası, Hollanda&apos;dan İngiltere online satış operasyonuna geçecekti. Hollanda&apos;dan
                  direkt sevkiyat modeli teslimat sürelerini uzatıyor, operasyon maliyetlerini artırıyor ve
                  müşteri deneyimini zorlaştırıyordu. UK&apos;da fiziksel bir depo veya lojistik altyapısı
                  bulunmadığından lokal fulfillment mümkün değildi.
                </p>
                <ul className="text-slate-700 text-sm space-y-2 list-none">
                  <li>⚠️ UK içi hızlı fulfillment ihtiyacı</li>
                  <li>⚠️ İngiltere&apos;de fiziksel stok eksikliği</li>
                  <li>⚠️ Online sipariş operasyonu altyapısı ihtiyacı</li>
                  <li>⚠️ Moda ürünlerine uygun repackaging gereksinimi</li>
                  <li>⚠️ UK kargo entegrasyonu eksikliği</li>
                  <li>⚠️ Merkezi stok yönetimi ihtiyacı</li>
                </ul>
              </div>
            </section>

            {/* Solution */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">
                LondraDepo Çözümü
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Cruyff koleksiyonu ürünleri Essex operasyon merkezine alınarak tüm UK fulfillment süreci
                aktive edildi. Hollanda&apos;dan gelen ürünler kabul, kalite kontrol, repackaging ve ecommerce
                entegrasyon süreçlerinden geçerek UK müşterilerine hızlıca ulaştırılmaya başlandı.
              </p>

              {/* Services grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    icon: "🏭",
                    title: "UK Fashion Warehouse",
                    desc: "Essex merkezli depoda güvenli, moda ürünlerine uygun stok alanı ve yönetimi.",
                  },
                  {
                    icon: "📦",
                    title: "Repackaging & Hang Tag Updates",
                    desc: "Cruyff marka standartlarına uygun yeniden paketleme, etiket ve hang tag güncelleme.",
                  },
                  {
                    icon: "🛒",
                    title: "Ecommerce Fulfillment",
                    desc: "Online siparişlerin otomatik akışla hazırlanması, pick & pack ve sevkiyat.",
                  },
                  {
                    icon: "🚚",
                    title: "UK-wide Distribution",
                    desc: "Tüm İngiltere&apos;ye next-day / 2-day teslimat seçenekleriyle UK kargo entegrasyonu.",
                  },
                  {
                    icon: "📊",
                    title: "Stock Management",
                    desc: "Düzenli stok seviyeleri, hareket raporları ve koleksiyon bazlı stok takibi.",
                  },
                  {
                    icon: "💬",
                    title: "Turkish & English Operations",
                    desc: "Tüm operasyon süreci Türkçe ve İngilizce çift dilli koordinasyonla yürütüldü.",
                  },
                  {
                    icon: "📋",
                    title: "Marketplace Compatible Ops",
                    desc: "Web sitesi ve marketplace entegrasyonlarına uyumlu sipariş yönetim akışı.",
                  },
                  {
                    icon: "🏷️",
                    title: "Pick & Pack Operations",
                    desc: "Sipariş bazında ürün toplama, Cruyff ambalajıyla paketleme ve etiketleme.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border border-slate-200 rounded-xl p-5 flex gap-4 hover:border-[#0b2545]/30 hover:shadow-sm transition"
                  >
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="font-bold text-[#0b2545] mb-1">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Operations flow */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-6">
                Operasyon Süreci
              </h2>
              <OperationsFlow steps={flowSteps} />
            </section>

            {/* Results / KPI */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">
                Sağlanan Avantajlar
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  {
                    value: "~%80",
                    label: "Daha Hızlı UK Teslimat",
                    desc: "UK warehouse operasyonuna geçiş sonrası teslimat süreleri ciddi ölçüde optimize edildi.",
                  },
                  {
                    value: "Lokal",
                    label: "UK Based Fulfillment",
                    desc: "İngiltere içi sipariş operasyonu lokal fulfillment modeliyle yönetilmeye başlandı.",
                  },
                  {
                    value: "Premium",
                    label: "Brand Control",
                    desc: "Moda ürünleri için repackaging ve operasyon standardizasyonu sağlandı.",
                  },
                  {
                    value: "1 Depo",
                    label: "Full UK Coverage",
                    desc: "Tek Essex operasyon merkeziyle tüm İngiltere dağıtımı yönetildi.",
                  },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="bg-[#f6f8fb] rounded-xl p-6 text-center hover:shadow-md transition"
                  >
                    <div className="text-3xl font-extrabold text-[#0b2545] mb-1">{r.value}</div>
                    <div className="font-semibold text-[#0b2545] text-sm mb-2">{r.label}</div>
                    <p className="text-slate-500 text-xs leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-[#0b2545] rounded-2xl p-8 text-center mb-10">
              <h2 className="text-2xl font-extrabold text-white mb-3">
                Moda markanız için İngiltere fulfillment operasyonu mu kuruyorsunuz?
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed max-w-2xl mx-auto">
                UK warehouse, fulfillment ve ecommerce operasyon modelinizi birlikte planlayalım.
                30 saniyede teklif alın.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3.5 rounded-full transition"
                >
                  WhatsApp&apos;tan Hızlı Bilgi Alın
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition"
                >
                  Operasyon Danışmanı ile Görüşün
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-6">
                Sık Sorulan Sorular
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="group border border-slate-200 rounded-xl overflow-hidden"
                  >
                    <summary className="flex justify-between items-center p-5 cursor-pointer font-bold text-[#0b2545] list-none">
                      {faq.q}
                      <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform">
                        ▾
                      </span>
                    </summary>
                    <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Internal links */}
            <div className="pt-6 border-t border-slate-200 mb-8">
              <p className="text-slate-500 text-sm mb-3">İlgili hizmetler:</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/ingiltere-fulfillment"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → İngiltere Fulfillment
                </Link>
                <Link
                  href="/ingiltere-depo"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → UK Warehouse Services
                </Link>
                <Link
                  href="/palet-depolama"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → Palet Depolama
                </Link>
                <Link
                  href="/amazon-prep-uk"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → Amazon Prep UK
                </Link>
                <Link
                  href="/blog/ingiltere-fulfillment-nedir"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → İngiltere Fulfillment Rehberi
                </Link>
                <Link
                  href="/blog/amazon-fba-vs-uk-fulfillment"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → Ecommerce Fulfillment
                </Link>
              </div>
            </div>

            {/* Author box */}
            <div className="border border-slate-200 rounded-xl p-5 mb-8 flex items-start gap-4 bg-slate-50">
              <div className="w-12 h-12 rounded-full bg-[#0b2545] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                SY
              </div>
              <div>
                <p className="font-bold text-[#0b2545] text-sm">Sertaç Y.</p>
                <p className="text-slate-500 text-xs mb-1">
                  UK Warehouse Operations Specialist — LondraDepo.com
                </p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  İngiltere depolama ve fulfillment operasyonlarında uzman. Türk ihracatçılar için UK lojistik
                  altyapısı kurulumu konusunda aktif danışmanlık.
                </p>
                <p className="text-slate-400 text-xs mt-1">
                  İncelendi:{" "}
                  <span className="font-medium text-slate-500">Yusuf B.</span> — Operations Manager
                </p>
              </div>
            </div>

            <RelatedCases cases={relatedCases} />
          </div>
        </article>

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
