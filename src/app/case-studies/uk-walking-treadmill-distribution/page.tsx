import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import CaseHero from "@/components/CaseHero";
import OperationsFlow from "@/components/OperationsFlow";
import RelatedCases from "@/components/RelatedCases";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/case-studies/uk-walking-treadmill-distribution`;
const WHATSAPP =
  "https://wa.me/447554195190?text=Merhaba%2C%20buyuk%20hacimli%20urun%20fulfillment%20operasyonu%20hakkinda%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Walking Treadmill İngiltere Depo & Dağıtım Operasyonu | LondraDepo.com",
  description:
    "Yaşlı ve rehabilitasyon kullanıcılarına yönelik walking treadmill ürünlerinin İngiltere depo, fulfillment ve online satış operasyonu.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Walking Treadmill — İngiltere Depo & Satış Operasyonu | LondraDepo.com",
    description:
      "Büyük hacimli walking treadmill ürünlerinin İngiltere deposu, online fulfillment ve discount store dağıtım operasyonu.",
    url: PAGE_URL,
    siteName: "LondraDepo.com",
    locale: "tr_TR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Walking Treadmill UK Depo & Fulfillment Case Study | LondraDepo.com",
    description:
      "Yaşlı ve rehabilitasyon kullanıcıları için walking treadmill ürünlerinin İngiltere depo, online satış ve retail dağıtım operasyonu.",
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
          name: "Walking Treadmill İngiltere Depo & Satış Operasyonu",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Walking Treadmill — İngiltere Depo & Satış Operasyonu",
      description:
        "Yaşlı ve rehabilitasyon kullanıcılarına yönelik walking treadmill ürünlerinin İngiltere depo, fulfillment ve online + retail satış operasyonu.",
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
        "Büyük hacimli ürünler dahil İngiltere depo, fulfillment ve online + retail dağıtım operasyonu.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Büyük hacimli ürünler için fulfillment sağlıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Walking treadmill gibi büyük hacimli ve ağır ürünler için İngiltere deposunda özel depolama alanı, ürün kabul süreçleri ve fulfillment operasyonu sunuyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Discount store dağıtımı yapıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. İngiltere genelindeki discount store ve retail zincirlerine toplu sevkiyat ve dağıtım organizasyonu sağlıyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Online sipariş fulfillment desteği mevcut mu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. E-ticaret platformlarından gelen siparişler için pick & pack, paketleme ve UK courier entegrasyonu ile hızlı fulfillment operasyonu sunuyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "İngiltere geneline dağıtım sağlıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Essex merkezli deposumuzdan İngiltere'nin tüm bölgelerine courier ve freight koordinasyonuyla dağıtım yapıyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Hassas ürün depolama operasyonu mevcut mu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Yürüyüş bandı gibi hassas ve mekanik bileşen içeren ürünler için uygun depolama koşulları ve dikkatli yükleme/boşaltma operasyonu sağlıyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Ecommerce fulfillment altyapısı sağlıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Online satış platformlarıyla entegrasyon, sipariş yönetimi ve UK geneli teslimat altyapısını içeren tam ecommerce fulfillment çözümü sunuyoruz.",
          },
        },
      ],
    },
  ],
};

const flowSteps = [
  {
    step: 1,
    icon: "🏭",
    title: "UK Warehouse Ürün Kabulü",
    desc: "Walking treadmill ürünleri Essex merkezli depoya teslim alındı, sayım ve hasar kontrolü gerçekleştirildi.",
  },
  {
    step: 2,
    icon: "🔍",
    title: "Kalite Kontrol & Sayım",
    desc: "Her ürün birimi için giriş kalite kontrolü, SKU eşleştirmesi ve depo envanter sistemi kaydı yapıldı.",
  },
  {
    step: 3,
    icon: "📦",
    title: "Stok Organizasyonu",
    desc: "Büyük hacimli ürünlere uygun depo alanı planlaması ve erişilebilir raf/palet organizasyonu sağlandı.",
  },
  {
    step: 4,
    icon: "🛒",
    title: "Online Sipariş Entegrasyonu",
    desc: "E-ticaret platformları ile depo operasyonu entegre edilerek otomatik sipariş akışı kuruldu.",
  },
  {
    step: 5,
    icon: "📬",
    title: "Pick & Pack Operasyonu",
    desc: "Gelen siparişler için hızlı pick & pack, güvenli paketleme ve etiketleme operasyonu gerçekleştirildi.",
  },
  {
    step: 6,
    icon: "🏪",
    title: "Retail & Discount Store Sevkiyatları",
    desc: "İngiltere genelindeki discount store ve retail kanallarına toplu sevkiyat koordinasyonu sağlandı.",
  },
  {
    step: 7,
    icon: "🚚",
    title: "UK Dağıtım Süreci",
    desc: "Courier ve freight ağıyla İngiltere geneline bireysel ve toplu teslimat organize edildi.",
  },
];

const faqs = [
  {
    q: "Büyük hacimli ürünler için fulfillment sağlıyor musunuz?",
    a: "Evet. Walking treadmill gibi büyük hacimli ve ağır ürünler için İngiltere deposunda özel depolama alanı, ürün kabul süreçleri ve fulfillment operasyonu sunuyoruz.",
  },
  {
    q: "Discount store dağıtımı yapıyor musunuz?",
    a: "Evet. İngiltere genelindeki discount store ve retail zincirlerine toplu sevkiyat ve dağıtım organizasyonu sağlıyoruz.",
  },
  {
    q: "Online sipariş fulfillment desteği mevcut mu?",
    a: "Evet. E-ticaret platformlarından gelen siparişler için pick & pack, paketleme ve UK courier entegrasyonu ile hızlı fulfillment operasyonu sunuyoruz.",
  },
  {
    q: "İngiltere geneline dağıtım sağlıyor musunuz?",
    a: "Evet. Essex merkezli deposumuzdan İngiltere'nin tüm bölgelerine courier ve freight koordinasyonuyla dağıtım yapıyoruz.",
  },
  {
    q: "Hassas ürün depolama operasyonu mevcut mu?",
    a: "Evet. Yürüyüş bandı gibi hassas ve mekanik bileşen içeren ürünler için uygun depolama koşulları ve dikkatli yükleme/boşaltma operasyonu sağlıyoruz.",
  },
  {
    q: "Ecommerce fulfillment altyapısı sağlıyor musunuz?",
    a: "Evet. Online satış platformlarıyla entegrasyon, sipariş yönetimi ve UK geneli teslimat altyapısını içeren tam ecommerce fulfillment çözümü sunuyoruz.",
  },
];

const relatedCases = [
  {
    slug: "tortilla-uk-distribution",
    industry: "Gıda / FMCG",
    title: "Tortilla Markası — İngiltere Depo & Dağıtım Operasyonu",
    summary:
      "Ankara merkezli lavaş & flatbread üreticisinin 1 paletten aylık 6 × 40HC konteynere büyüyen UK operasyonu.",
  },
  {
    slug: "pizza-box-distribution-uk",
    industry: "B2B Dağıtım",
    title: "Pizza Kutusu — İngiltere B2B Dağıtım Operasyonu",
    summary:
      "Restoranlara toptan ambalaj tedarikçisinin palet bazlı UK dağıtım süreci.",
  },
];

export default function WalkingTreadmillCaseStudyPage() {
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
            <span className="text-[#0b2545] font-medium">Walking Treadmill İngiltere Operasyonu</span>
          </div>
        </nav>

        <article className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <CaseHero
              industry="Healthcare / Ecommerce"
              industryColor="text-teal-700 bg-teal-50"
              brand="Walking Treadmill"
              title="Walking Treadmill — İngiltere Depo & Satış Operasyonu"
              subtitle="Yaşlılar, rehabilitasyon hastaları ve ev içi egzersiz kullanıcılarına yönelik walking treadmill ürünlerinin İngiltere depo, online satış ve retail dağıtım operasyonu LondraDepo.com altyapısıyla yürütülmektedir. Ürün kabulünden UK geneli teslimat organizasyonuna kadar tüm süreç tek merkezden yönetilmektedir."
              metrics={[
                { label: "Kapsam", value: "UK Wide" },
                { label: "Kanallar", value: "Online + Retail" },
                { label: "Depolama", value: "Büyük Hacimli" },
                { label: "İletişim", value: "TR + EN" },
              ]}
            />

            {/* Capability highlight */}
            <div className="bg-gradient-to-r from-[#0b2545] to-[#1a6060] rounded-2xl p-6 mb-10 text-white">
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">
                Operasyon Modeli
              </p>
              <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start">
                <div className="text-center px-4">
                  <div className="text-3xl mb-1">🏭</div>
                  <div className="text-white/60 text-xs">Büyük Hacimli<br />Depolama</div>
                </div>
                <div className="text-2xl text-white/30 hidden sm:block">+</div>
                <div className="text-center px-4">
                  <div className="text-3xl mb-1">🛒</div>
                  <div className="text-white/60 text-xs">Online<br />Fulfillment</div>
                </div>
                <div className="text-2xl text-white/30 hidden sm:block">+</div>
                <div className="text-center px-4">
                  <div className="text-3xl mb-1">🏪</div>
                  <div className="text-white/60 text-xs">Discount Store<br />Dağıtımı</div>
                </div>
                <div className="text-2xl text-white/30 hidden sm:block">→</div>
                <div className="text-center px-4">
                  <div className="text-3xl mb-1">🇬🇧</div>
                  <div className="text-white/60 text-xs">UK Wide<br />Delivery</div>
                </div>
              </div>
            </div>

            {/* Trust bar */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10 flex flex-wrap gap-4 text-sm text-slate-600 justify-center md:justify-start">
              <span>🏋️ Büyük hacimli ürün lojistiği</span>
              <span>🛒 Online & retail fulfillment</span>
              <span>🏪 Discount store dağıtımı</span>
              <span>🚚 UK geneli teslimat</span>
              <span>📊 Stok yönetimi & raporlama</span>
            </div>

            {/* Problem */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">
                Operasyonel Zorluk
              </h2>
              <div className="bg-slate-50 border-l-4 border-[#e63946] rounded-r-xl p-6">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Walking treadmill ürünleri büyük hacimli, hassas taşıma gerektiren ve düzenli stok
                  yönetimi isteyen bir ürün kategorisindedir. Hem bireysel tüketicilere online satış
                  hem de discount store zincirlerine toplu dağıtım yapabilecek esnek bir İngiltere
                  operasyon altyapısına ihtiyaç duyuldu.
                </p>
                <ul className="text-slate-700 text-sm space-y-2 list-none">
                  <li>⚠️ Büyük hacimli ürün depolama ihtiyacı</li>
                  <li>⚠️ Hassas mekanik ürün taşıma ve depolama</li>
                  <li>⚠️ Online sipariş fulfillment süreç kurulumu</li>
                  <li>⚠️ Discount store dağıtım organizasyonu</li>
                  <li>⚠️ İngiltere geneli lojistik planlaması</li>
                  <li>⚠️ Stok takibi ve operasyon yönetimi</li>
                  <li>⚠️ Ölçeklenebilir fulfillment altyapısı</li>
                </ul>
              </div>
            </section>

            {/* Solution */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">
                LondraDepo Çözümü
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                LondraDepo.com, walking treadmill ürünleri için hem online satış kanallarını hem de
                fiziksel retail dağıtım süreçlerini destekleyen entegre bir operasyon altyapısı kurdu.
                Büyük hacimli ürün depolamasından UK geneli dağıtıma kadar tüm süreç tek merkezden
                koordine edilmektedir.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    icon: "🏭",
                    title: "Büyük Hacimli Ürün Depolama",
                    desc: "Essex deposunda walking treadmill ürünlerine uygun büyük hacimli depolama alanı ve özel yükleme/boşaltma düzenlemesi.",
                  },
                  {
                    icon: "📦",
                    title: "Online Sipariş Fulfillment",
                    desc: "E-ticaret platformlarıyla entegre pick & pack, paketleme ve UK courier sevkiyat operasyonu.",
                  },
                  {
                    icon: "🏪",
                    title: "Discount Store Sevkiyatları",
                    desc: "İngiltere genelindeki discount store ve retail zincirlerine toplu palet sevkiyat organizasyonu.",
                  },
                  {
                    icon: "🚚",
                    title: "UK Retail Distribution",
                    desc: "Büyük format ürünler için freight ve courier koordinasyonuyla İngiltere geneli B2C ve B2B dağıtım.",
                  },
                  {
                    icon: "📊",
                    title: "Stok Yönetimi",
                    desc: "Envanter takibi, düşük stok uyarıları ve dönemsel rapor desteğiyle sürekli stok görünürlüğü.",
                  },
                  {
                    icon: "🔍",
                    title: "Kalite Kontrol",
                    desc: "Her gelen sevkiyatta giriş sayımı, hasar kontrolü ve SKU doğrulaması operasyonu.",
                  },
                  {
                    icon: "⚡",
                    title: "Pick & Pack Operasyonu",
                    desc: "Hızlı sipariş hazırlama, güvenli ambalajlama ve sevkiyat etiketi basımı tek adımda.",
                  },
                  {
                    icon: "💬",
                    title: "Türkçe Operasyon İletişimi",
                    desc: "Tüm operasyon süreci TR + EN çift dilli koordinasyonla yürütülmektedir.",
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

            {/* Results */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">
                Sağlanan Avantajlar
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    icon: "🏭",
                    label: "Merkezi UK Operasyon Altyapısı",
                    desc: "Tek depo üzerinden online satış, retail dağıtım ve stok yönetiminin tamamı koordine edilmektedir.",
                  },
                  {
                    icon: "📦",
                    label: "Online + Retail Dağıtım",
                    desc: "Hem e-ticaret hem discount store operasyonu aynı fulfillment altyapısıyla desteklenmektedir.",
                  },
                  {
                    icon: "🚚",
                    label: "UK Wide Delivery",
                    desc: "İngiltere'nin tüm bölgelerine courier ve freight ağıyla düzenli dağıtım organizasyonu.",
                  },
                  {
                    icon: "📈",
                    label: "Ölçeklenebilir Operasyon",
                    desc: "Büyüyen sipariş ve sevkiyat hacimlerine uyum sağlayan esnek fulfillment altyapısı.",
                  },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="bg-[#f6f8fb] rounded-xl p-6 flex gap-4 hover:shadow-md transition"
                  >
                    <span className="text-3xl flex-shrink-0" aria-hidden="true">
                      {r.icon}
                    </span>
                    <div>
                      <div className="font-extrabold text-[#0b2545] mb-1">{r.label}</div>
                      <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key message callout */}
            <section className="mb-10">
              <div className="border-l-4 border-teal-500 bg-teal-50 rounded-r-xl p-6">
                <p className="text-teal-900 font-semibold text-sm leading-relaxed">
                  <span className="block text-xs font-bold uppercase tracking-widest text-teal-600 mb-2">
                    Temel Mesaj
                  </span>
                  LondraDepo.com yalnızca küçük paket fulfillment değil; büyük hacimli ürünlerin
                  İngiltere depo, online satış ve retail dağıtım operasyonlarını da yönetebilen
                  ölçeklenebilir bir operasyon altyapısı sunar.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-[#0b2545] rounded-2xl p-8 text-center mb-10">
              <h2 className="text-2xl font-extrabold text-white mb-3">
                İngiltere&apos;de büyük hacimli ürün fulfillment operasyonu mu kuruyorsunuz?
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed max-w-2xl mx-auto">
                Depo, fulfillment ve dağıtım operasyonunuzu birlikte planlayalım. Online satış ve
                retail kanallarınızı tek altyapıdan yönetin.
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
                  href="/palet-depolama"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → Palet Depolama
                </Link>
                <Link
                  href="/ingiltere-depo-avantajlari"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → İngiltere Depo Avantajları
                </Link>
                <Link
                  href="/essex-depo"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → Essex Depo
                </Link>
                <Link
                  href="/ingiltere-fulfillment"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → Ecommerce Fulfillment
                </Link>
                <Link
                  href="/blog/ingiltere-fulfillment-nedir"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → UK Warehouse Services
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
                  Büyük hacimli ürün lojistiği ve İngiltere ecommerce fulfillment operasyonlarında
                  uzman. Online + retail çift kanallı operasyon modelleri konusunda aktif danışmanlık.
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
