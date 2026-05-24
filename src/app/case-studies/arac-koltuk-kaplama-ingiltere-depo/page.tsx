import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import CaseHero from "@/components/CaseHero";
import OperationsFlow from "@/components/OperationsFlow";
import RelatedCases from "@/components/RelatedCases";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/case-studies/arac-koltuk-kaplama-ingiltere-depo`;
const WHATSAPP =
  "https://wa.me/447554195190?text=Merhaba%2C%20otomotiv%20urun%20depolama%20ve%20dagitim%20hakkinda%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Araç Koltuk Kaplama & Suni Deri İngiltere Depo Operasyonu | LondraDepo.com",
  description:
    "Araç koltuk kaplama ve suni deri malzemelerinin İngiltere depo altyapısı, stok yönetimi, online sipariş fulfillment ve B2B dağıtım operasyonu.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Araç Koltuk Kaplama & Suni Deri — İngiltere Depo & Satış Operasyonu | LondraDepo.com",
    description:
      "Otomotiv döşeme malzemelerinin İngiltere deposunda stok yönetimi, online fulfillment ve B2B dağıtım operasyonu.",
    url: PAGE_URL,
    siteName: "LondraDepo.com",
    locale: "tr_TR",
    type: "article",
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
          name: "Araç Koltuk Kaplama İngiltere Depo",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline:
        "Araç Koltuk Kaplama & Suni Deri — İngiltere Depo & Satış Operasyonu",
      description:
        "Araç koltuk kaplama ve suni deri malzemelerinin İngiltere depo altyapısı, stok yönetimi, online fulfillment ve B2B dağıtım operasyonu.",
      url: PAGE_URL,
      publisher: {
        "@type": "Organization",
        name: "LondraDepo.com",
        url: SITE_URL,
      },
      mainEntityOfPage: PAGE_URL,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Araç koltuk kaplama malzemeleri için özel depolama yapıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Rulo suni deri, kaplama paneli ve döşeme malzemeleri için nem kontrollü, temiz depolama alanı sağlıyoruz. Ürünler malzeme tipine göre ayrı bölümlerde muhafaza edilir.",
          },
        },
        {
          "@type": "Question",
          name: "İngiltere'deki otomotiv atölyelerine B2B dağıtım yapabiliyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Essex merkezli deposumuzdan İngiltere genelindeki atölye, bayi ve döşeme ustalarına pallet ve parça bazında B2B dağıtım yapıyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Online satış kanallarından gelen siparişleri de yönetebiliyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. eBay, Amazon ve kendi e-ticaret sitenizden gelen bireysel siparişleri aynı gün veya ertesi gün sevkiyatla karşılıyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Rulo ve büyük formatlı malzemeler depolanabiliyor mu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Suni deri rulolar ve büyük panel malzemeler palet sisteminde düzgün istif edilerek depolanır; hasar riski minimize edilir.",
          },
        },
      ],
    },
  ],
};

const flowSteps = [
  {
    step: 1,
    icon: "🚛",
    title: "Ürün Kabulü",
    desc: "Türkiye'den gönderilen araç koltuk kaplama ve suni deri malzemeleri Essex deposunda teslim alındı.",
  },
  {
    step: 2,
    icon: "🔍",
    title: "Sayım & Kalite Kontrol",
    desc: "Tüm ürünler adet ve kalite kontrolünden geçirildi; hasar ve eksiklikler kayıt altına alındı.",
  },
  {
    step: 3,
    icon: "🗂️",
    title: "Stok Yönetimi",
    desc: "Ürünler malzeme tipine ve SKU'ya göre sınıflandırıldı, raf ve palet sistemiyle düzenli olarak depolandı.",
  },
  {
    step: 4,
    icon: "📬",
    title: "Sipariş İşleme",
    desc: "Online kanallardan (eBay, Amazon) ve B2B bayilerden gelen siparişler aynı gün işleme alındı.",
  },
  {
    step: 5,
    icon: "📦",
    title: "Paketleme & Hazırlık",
    desc: "Kaplama malzemeleri hasara karşı uygun ambalaj ile paketlendi; etiketleme ve fatura hazırlıkları tamamlandı.",
  },
  {
    step: 6,
    icon: "🚚",
    title: "İngiltere İçi Dağıtım",
    desc: "Hazırlanan siparişler İngiltere genelindeki atölyelere, bayilere ve bireysel müşterilere sevk edildi.",
  },
];

const faqs = [
  {
    q: "Araç koltuk kaplama malzemeleri için özel depolama yapıyor musunuz?",
    a: "Evet. Rulo suni deri, kaplama paneli ve döşeme malzemeleri için nem kontrollü, temiz depolama alanı sağlıyoruz. Ürünler malzeme tipine göre ayrı bölümlerde muhafaza edilir.",
  },
  {
    q: "İngiltere'deki otomotiv atölyelerine B2B dağıtım yapabiliyor musunuz?",
    a: "Evet. Essex merkezli deposumuzdan İngiltere genelindeki atölye, bayi ve döşeme ustalarına pallet ve parça bazında B2B dağıtım yapıyoruz.",
  },
  {
    q: "Online satış kanallarından gelen siparişleri de yönetebiliyor musunuz?",
    a: "Evet. eBay, Amazon ve kendi e-ticaret sitenizden gelen bireysel siparişleri aynı gün veya ertesi gün sevkiyatla karşılıyoruz.",
  },
  {
    q: "Rulo ve büyük formatlı malzemeler depolanabiliyor mu?",
    a: "Evet. Suni deri rulolar ve büyük panel malzemeler palet sisteminde düzgün istif edilerek depolanır; hasar riski minimize edilir.",
  },
  {
    q: "Stok raporlaması yapılıyor mu?",
    a: "Evet. Düzenli aralıklarla stok hareketi, düşük stok uyarısı ve sipariş özeti Türkçe olarak iletilmektedir.",
  },
];

const relatedCases = [
  {
    slug: "uk-auto-parts-warehouse",
    industry: "Otomotiv",
    title: "OEM & Yan Sanayi — İngiltere Yedek Parça Depo Operasyonu",
    summary:
      "Lüks araç OEM ve aftermarket yedek parçalarının İngiltere'de hasar kontrollü depolama ve dağıtım süreci.",
  },
  {
    slug: "pizza-box-distribution-uk",
    industry: "B2B Dağıtım",
    title: "Pizza Kutusu — İngiltere B2B Depo & Dağıtım Operasyonu",
    summary:
      "Restoranlara toptan ambalaj tedarikçisinin palet bazlı İngiltere dağıtım operasyonu.",
  },
];

export default function AracKoltukKaplamaCaseStudyPage() {
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
            <span className="text-[#0b2545] font-medium">
              Araç Koltuk Kaplama İngiltere Depo
            </span>
          </div>
        </nav>

        <article className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <CaseHero
              industry="Otomotiv & Döşeme"
              industryColor="text-blue-700 bg-blue-50"
              brand="Araç Koltuk Kaplama & Suni Deri"
              title="Araç Koltuk Kaplama & Suni Deri — İngiltere Depo & Satış Operasyonu"
              subtitle="Otomotiv döşeme malzemeleri üreticisinin İngiltere depo altyapısı, online sipariş fulfillment ve B2B dağıtım operasyonu LondraDepo.com altyapısıyla tek merkezden yürütülmektedir."
              metrics={[
                { label: "Depolama Tipi", value: "Palet + Raf" },
                { label: "Kapsam", value: "Tüm İngiltere" },
                { label: "Kanal", value: "Online + B2B" },
              ]}
            />

            {/* Problem */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">
                Operasyonel Zorluk
              </h2>
              <div className="bg-slate-50 border-l-4 border-[#e63946] rounded-r-xl p-6">
                <p className="text-slate-700 leading-relaxed mb-3">
                  Türkiye merkezli otomotiv döşeme malzemeleri üreticisi, İngiltere&apos;deki
                  atölye ve bayi taleplerine yetişemiyordu. Tüm siparişler Türkiye&apos;den sevk
                  edildiği için teslimat süreleri uzuyor, rekabetçilik düşüyordu. Ayrıca online
                  kanallar üzerinden büyüyen bireysel talep de acil bir İngiltere depo altyapısı
                  ihtiyacını doğuruyordu.
                </p>
                <ul className="text-slate-700 text-sm space-y-2 list-none">
                  <li>⚠️ Türkiye&apos;den sevkiyatta uzun teslimat süreleri</li>
                  <li>⚠️ Rulo suni deri malzemelerin nakliyede hasar riski</li>
                  <li>⚠️ İngiltere&apos;deki atölye ve bayilere hızlı karşılama gerekliliği</li>
                  <li>⚠️ eBay ve Amazon kanallarında rekabetçi teslimat süresi baskısı</li>
                  <li>⚠️ Stok takibi ve iade yönetimi için İngiltere operasyon noktası ihtiyacı</li>
                </ul>
              </div>
            </section>

            {/* Solution */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">
                LondraDepo Çözümü
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Essex deposunda araç koltuk kaplama ve suni deri malzemeleri malzeme tipine göre
                ayrıştırılarak palet ve raf sistemine yerleştirildi. Online kanallardan ve B2B
                bayilerden gelen siparişler aynı gün işleme alınıp İngiltere içi kargo
                ağlarıyla sevk edildi. Tüm operasyon — ürün kabul, stok yönetimi, paketleme,
                sevkiyat — tek merkezden Türkçe koordinasyonla yürütüldü.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    icon: "🏭",
                    title: "Palet & Raf Depolama",
                    desc: "Rulo ve panel formatındaki malzemeler palet ve raf sistemiyle düzenli, hasarsız muhafaza edildi.",
                  },
                  {
                    icon: "🔍",
                    title: "Kalite & Sayım Kontrolü",
                    desc: "Her sevkiyatta ürün adedi, kalite durumu kontrol edildi; eksik veya hasarlı ürünler raporlandı.",
                  },
                  {
                    icon: "🛒",
                    title: "Online Sipariş Fulfillment",
                    desc: "eBay, Amazon ve doğrudan web siparişleri aynı gün veya ertesi gün sevkiyatla karşılandı.",
                  },
                  {
                    icon: "🏢",
                    title: "B2B Bayi & Atölye Dağıtımı",
                    desc: "İngiltere genelindeki otomotiv atölyelerine ve döşeme bayilerine toplu dağıtım yapıldı.",
                  },
                  {
                    icon: "📦",
                    title: "Güvenli Paketleme",
                    desc: "Kaplama malzemeleri tür ve boyuta göre uygun ambalaj ile paketlenerek teslimat kalitesi korundu.",
                  },
                  {
                    icon: "📊",
                    title: "Türkçe Stok Raporlama",
                    desc: "Stok hareketleri, düşük stok uyarıları ve sipariş özetleri Türkçe raporlarla iletildi.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border border-slate-200 rounded-xl p-5 flex gap-4"
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

            {/* Results */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">
                Sağlanan Avantajlar
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  {
                    value: "Aynı gün",
                    label: "Sipariş hazırlama",
                    desc: "Online ve B2B siparişler aynı gün işleme alınarak İngiltere içi kargo ağına verildi.",
                  },
                  {
                    value: "Online + B2B",
                    label: "Çoklu kanal",
                    desc: "eBay, Amazon ve bayi kanalları tek depoden aynı operasyonla yönetildi.",
                  },
                  {
                    value: "TR iletişim",
                    label: "Türkçe koordinasyon",
                    desc: "Tüm operasyon, Türkiye&apos;deki ekiple Türkçe iletişimle yürütüldü.",
                  },
                ].map((r) => (
                  <div key={r.label} className="bg-[#f6f8fb] rounded-xl p-6 text-center">
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
                Otomotiv ürünlerinizi İngiltere&apos;de depolamak ve dağıtmak mı istiyorsunuz?
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                İngiltere otomotiv deposu, sipariş fulfillment ve B2B dağıtım operasyonunuzu
                birlikte planlayalım.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3.5 rounded-full transition"
                >
                  WhatsApp&apos;tan Bilgi Alın
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
                  <div key={faq.q} className="border border-slate-200 rounded-xl p-5">
                    <h3 className="font-bold text-[#0b2545] mb-2">{faq.q}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Internal links */}
            <div className="pt-6 border-t border-slate-200 mb-8">
              <p className="text-slate-500 text-sm mb-3">İlgili hizmetler:</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/palet-depolama"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → Palet Depolama
                </Link>
                <Link
                  href="/ingiltere-fulfillment"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → İngiltere Fulfillment
                </Link>
                <Link
                  href="/ingiltere-depo-avantajlari"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → Depo Avantajları
                </Link>
                <Link
                  href="/essex-depo"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → Essex Depo
                </Link>
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
