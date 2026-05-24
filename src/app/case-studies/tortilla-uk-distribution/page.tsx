import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import CaseHero from "@/components/CaseHero";
import OperationsFlow from "@/components/OperationsFlow";
import RelatedCases from "@/components/RelatedCases";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/case-studies/tortilla-uk-distribution`;
const WHATSAPP =
  "https://wa.me/447554195190?text=Merhaba%2C%20gida%20urunleri%20ingiltere%20operasyonu%20hakkinda%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tortilla Markası İngiltere Depo & Dağıtım Operasyonu | LondraDepo.com",
  description:
    "Ankara merkezli tortilla ve flatbread üreticisinin İngiltere depo, fulfillment, GTİP, etiketleme ve dağıtım operasyonunun ölçeklenme hikayesi.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Tortilla Markası — İngiltere Depo & Dağıtım Operasyonu | LondraDepo.com",
    description:
      "1 paletten aylık 6 x 40HC konteynere: Ankara tortilla üreticisinin İngiltere'de ölçeklenen operasyon hikayesi.",
    url: PAGE_URL,
    siteName: "LondraDepo.com",
    locale: "tr_TR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tortilla Markası İngiltere Dağıtım Case Study | LondraDepo.com",
    description:
      "Ankara merkezli lavaş & flatbread üreticisinin İngiltere pazar girişi ve ölçeklenme operasyonu.",
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
          name: "Tortilla Markası İngiltere Dağıtım Operasyonu",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Tortilla Markası — İngiltere Depo & Dağıtım Operasyonu",
      description:
        "Ankara merkezli tortilla ve flatbread üreticisinin 1 paletten aylık 6 x 40HC konteynere uzanan İngiltere operasyonu.",
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
          name: "İngiltere'ye tortilla ihracatı nasıl yapılır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tortilla ve flatbread ürünleri için doğru GTİP sınıflandırması yapılması, İngiltere pazarına uygun etiketleme düzenlenmesi ve İngiltere deposunda ürün kabulü organizasyonu gereklidir. LondraDepo.com bu adımların tamamında operasyonel destek sunmaktadır.",
          },
        },
        {
          "@type": "Question",
          name: "Flatbread ürünleri için İngiltere deposu gerekli mi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. İngiltere'deki müşterilere hızlı teslimat yapabilmek, stok riskini azaltmak ve dağıtım maliyetlerini optimize etmek için İngiltere'de fiziksel depo altyapısına ihtiyaç duyulur.",
          },
        },
        {
          "@type": "Question",
          name: "İngiltere gıda etiketleme süreçlerinde destek sağlıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. İngiltere pazarına uygun etiketleme gereksinimleri konusunda yönlendirme ve operasyonel destek sağlıyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "GTİP yönlendirmesi yapıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Ürünlerinizin doğru GTİP sınıfına yerleştirilmesi için yönlendirme desteği sunuyoruz. Bu süreç, İngiltere'ye ithalat operasyonunun temelini oluşturur.",
          },
        },
        {
          "@type": "Question",
          name: "Küçük hacimle İngiltere operasyonu başlanabilir mi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. LondraDepo.com ile 1 paletlik test operasyonuyla başlayabilir, talep ve satış hacmine göre konteyner bazlı büyüme modelini uygulayabilirsiniz.",
          },
        },
        {
          "@type": "Question",
          name: "Gıda fulfillment operasyonu sağlıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Gıda ürünleri için depolama, sipariş hazırlama, etiketleme ve İngiltere genelinde dağıtım operasyonu sunuyoruz.",
          },
        },
      ],
    },
  ],
};

const flowSteps = [
  {
    step: 1,
    icon: "📋",
    title: "GTİP & Ürün Değerlendirmesi",
    desc: "Tortilla, lavaş ve flatbread ürünleri için doğru GTİP sınıflandırması ve İngiltere ithalat operasyonu değerlendirmesi yapıldı.",
  },
  {
    step: 2,
    icon: "🏷️",
    title: "İngiltere Market Uyumlu Etiket Yönlendirmesi",
    desc: "İngiltere pazarı standartlarına uygun etiketleme ve ambalaj gereksinimleri belirlendi.",
  },
  {
    step: 3,
    icon: "📦",
    title: "İlk Palet Operasyonu",
    desc: "Düşük riskli test operasyonu olarak 1 palet ürün ile İngiltere pazarına ilk giriş planlandı ve hayata geçirildi.",
  },
  {
    step: 4,
    icon: "🏭",
    title: "Essex Depo Ürün Kabulü",
    desc: "Essex merkezli operasyon deposuna ürün kabulü, sayım ve kalite kontrolü gerçekleştirildi.",
  },
  {
    step: 5,
    icon: "🚚",
    title: "İngiltere Dağıtım Organizasyonu",
    desc: "Depoda hazırlanan ürünler UK dağıtım ağıyla B2B ve B2C kanallarına sevk edildi.",
  },
  {
    step: 6,
    icon: "🚢",
    title: "Konteyner Hacim Büyümesi",
    desc: "Başarılı test operasyonunun ardından aylık 6 x 40HC konteyner hacmine ulaşan düzenli operasyon modeli kuruldu.",
  },
  {
    step: 7,
    icon: "📈",
    title: "Aktif İngiltere Operasyonu",
    desc: "Bugün Ankara'dan düzenli konteyner sevkiyatıyla İngiltere'de aktif depo, fulfillment ve dağıtım operasyonu yürütülmektedir.",
  },
];

const faqs = [
  {
    q: "İngiltere'ye tortilla ihracatı nasıl yapılır?",
    a: "Tortilla ve flatbread ürünleri için doğru GTİP sınıflandırması yapılması, İngiltere pazarına uygun etiketleme düzenlenmesi ve İngiltere deposunda ürün kabulü organizasyonu gereklidir. LondraDepo.com bu adımların tamamında operasyonel destek sunmaktadır.",
  },
  {
    q: "Flatbread ürünleri için İngiltere deposu gerekli mi?",
    a: "Evet. İngiltere'deki müşterilere hızlı teslimat yapabilmek, stok riskini azaltmak ve dağıtım maliyetlerini optimize etmek için İngiltere'de fiziksel depo altyapısına ihtiyaç duyulur.",
  },
  {
    q: "İngiltere gıda etiketleme süreçlerinde destek sağlıyor musunuz?",
    a: "Evet. İngiltere pazarına uygun etiketleme gereksinimleri konusunda yönlendirme ve operasyonel destek sağlıyoruz.",
  },
  {
    q: "GTİP yönlendirmesi yapıyor musunuz?",
    a: "Evet. Ürünlerinizin doğru GTİP sınıfına yerleştirilmesi için yönlendirme desteği sunuyoruz. Bu süreç, İngiltere'ye ithalat operasyonunun temelini oluşturur.",
  },
  {
    q: "Küçük hacimle İngiltere operasyonu başlanabilir mi?",
    a: "Evet. LondraDepo.com ile 1 paletlik test operasyonuyla başlayabilir, talep ve satış hacmine göre konteyner bazlı büyüme modelini uygulayabilirsiniz.",
  },
  {
    q: "Gıda fulfillment operasyonu sağlıyor musunuz?",
    a: "Evet. Gıda ürünleri için depolama, sipariş hazırlama, etiketleme ve İngiltere genelinde dağıtım operasyonu sunuyoruz.",
  },
];

const relatedCases = [
  {
    slug: "cruyff-uk-fulfillment",
    industry: "Moda & Premium Apparel",
    title: "Cruyff — UK Moda & Fashion Fulfillment Operasyonu",
    summary:
      "Johan Cruyff markasının Hollanda'dan İngiltere fulfillment operasyonuna geçişi.",
  },
  {
    slug: "pizza-box-distribution-uk",
    industry: "B2B Dağıtım",
    title: "Pizza Kutusu — İngiltere B2B Dağıtım Operasyonu",
    summary:
      "Restoranlara toptan ambalaj tedarikçisinin palet bazlı UK dağıtım süreci.",
  },
];

export default function TortillaCaseStudyPage() {
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
            <span className="text-[#0b2545] font-medium">Tortilla İngiltere Dağıtım</span>
          </div>
        </nav>

        <article className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <CaseHero
              industry="Gıda / FMCG"
              industryColor="text-amber-700 bg-amber-50"
              brand="Tortilla & Flatbread"
              title="Tortilla Markası — İngiltere Depo & Dağıtım Operasyonu"
              subtitle="Ankara merkezli lavaş, tortilla ve flatbread üreticisi; İngiltere pazarına yalnızca 1 palet ürünle girdi. LondraDepo.com operasyon desteğiyle GTİP yönlendirmesi, etiketleme, fulfillment ve dağıtım adımlarından geçen operasyon bugün aylık 6 x 40HC konteyner hacmine ulaştı."
              metrics={[
                { label: "Başlangıç", value: "1 Palet" },
                { label: "Güncel Hacim", value: "6 × 40HC" },
                { label: "Operasyon", value: "Aylık Düzenli" },
                { label: "İletişim", value: "TR + EN" },
              ]}
            />

            {/* Growth highlight */}
            <div className="bg-gradient-to-r from-[#0b2545] to-[#1a4a80] rounded-2xl p-6 mb-10 text-white">
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">
                Büyüme Hikayesi
              </p>
              <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                <div className="text-center px-4">
                  <div className="text-4xl font-extrabold">1</div>
                  <div className="text-white/60 text-xs mt-1">Palet Başlangıç</div>
                </div>
                <div className="text-3xl text-white/40 font-light hidden sm:block">→</div>
                <div className="text-center px-4">
                  <div className="text-4xl font-extrabold">6×</div>
                  <div className="text-white/60 text-xs mt-1">40HC / Ay</div>
                </div>
                <div className="text-3xl text-white/40 font-light hidden sm:block">→</div>
                <div className="text-center px-4">
                  <div className="text-4xl font-extrabold">🇬🇧</div>
                  <div className="text-white/60 text-xs mt-1">Aktif UK Dağıtım</div>
                </div>
              </div>
            </div>

            {/* Trust bar */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10 flex flex-wrap gap-4 text-sm text-slate-600 justify-center md:justify-start">
              <span>🍽️ FMCG gıda lojistiği</span>
              <span>📋 GTİP yönlendirme desteği</span>
              <span>🏷️ İngiltere etiketleme uyumu</span>
              <span>📈 Kontrollü ölçeklenme modeli</span>
              <span>🚢 Konteyner bazlı büyüme</span>
            </div>

            {/* Problem */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">
                Operasyonel Zorluk
              </h2>
              <div className="bg-slate-50 border-l-4 border-[#e63946] rounded-r-xl p-6">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Ankara merkezli üretici firma, tortilla, lavaş ve flatbread ürünlerini İngiltere
                  pazarına taşımak istiyordu. İlk aşamada düşük riskli bir test operasyonu hedeflendiği
                  için yalnızca 1 palet ürünle başlangıç planlandı. Ancak süreçte pek çok operasyonel
                  ihtiyaç belirlendi.
                </p>
                <ul className="text-slate-700 text-sm space-y-2 list-none">
                  <li>⚠️ İngiltere gıda ithalat operasyonu organizasyonu</li>
                  <li>⚠️ Tortilla ve flatbread ürün GTİP sınıflandırması</li>
                  <li>⚠️ GTİP yönlendirme ihtiyacı</li>
                  <li>⚠️ İngiltere pazarına uyumlu gıda etiketleme</li>
                  <li>⚠️ Gıda fulfillment operasyonu altyapısı</li>
                  <li>⚠️ İngiltere dağıtım ağına erişim</li>
                  <li>⚠️ Ölçeklenebilir büyüme modeli</li>
                </ul>
              </div>
            </section>

            {/* Solution */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">
                LondraDepo Çözümü
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                LondraDepo.com, sürecin her aşamasında operasyonel destek sağladı. GTİP yönlendirmesinden
                etiketleme uyumuna, gıda deposundan dağıtım organizasyonuna kadar tüm süreç tek çatı
                altında yönetildi. Test operasyonu başarıyla tamamlandıktan sonra hacim düzenli biçimde
                büyütüldü.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    icon: "📋",
                    title: "GTİP Yönlendirmesi",
                    desc: "Tortilla, lavaş ve flatbread ürünleri için doğru GTİP sınıflandırması ve İngiltere ithalat operasyonu değerlendirmesi.",
                  },
                  {
                    icon: "🏷️",
                    title: "İngiltere Etiket Yönlendirmesi",
                    desc: "İngiltere pazarı standartlarına uygun etiketleme ve ambalaj gereksinimlerinde yönlendirme.",
                  },
                  {
                    icon: "🏭",
                    title: "İngiltere Gıda Deposu",
                    desc: "Essex merkezli depoda gıda ürünlerine uygun depolama, ürün kabulü ve stok yönetimi.",
                  },
                  {
                    icon: "📦",
                    title: "Palet Depolama",
                    desc: "İngiltere deposunda palet bazlı stok organizasyonu ve düzenli envanter takibi.",
                  },
                  {
                    icon: "🛒",
                    title: "E-ticaret & B2B Fulfillment",
                    desc: "Online ve toptan sipariş kanalları için sipariş hazırlama ve sevkiyat operasyonu.",
                  },
                  {
                    icon: "🚚",
                    title: "İngiltere Dağıtım",
                    desc: "UK dağıtım ağıyla İngiltere genelinde B2B ve B2C teslimat koordinasyonu.",
                  },
                  {
                    icon: "🚢",
                    title: "Konteyner Ölçekleme",
                    desc: "1 paletten aylık 6 x 40HC konteynere ulaşan kontrollü büyüme operasyonu.",
                  },
                  {
                    icon: "💬",
                    title: "TR + EN Operasyon İletişimi",
                    desc: "Tüm süreç Türkçe ve İngilizce çift dilli koordinasyonla yürütüldü.",
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    icon: "📈",
                    label: "Kontrollü Ölçeklenme",
                    desc: "1 paletlik test operasyonundan aylık yüksek hacimli düzenli İngiltere operasyonuna geçiş sağlandı.",
                  },
                  {
                    icon: "🍽️",
                    label: "İngiltere Gıda Pazarı Uyumu",
                    desc: "Lavaş, tortilla ve flatbread ürünleri için İngiltere pazarına uygun operasyon yapısı oluşturuldu.",
                  },
                  {
                    icon: "🚢",
                    label: "Konteyner Bazlı Büyüme",
                    desc: "Operasyon süreçleri kontrollü biçimde ölçeklenerek aylık 6 x 40HC seviyesine ulaştı.",
                  },
                  {
                    icon: "🏭",
                    label: "İngiltere Depo Altyapısı",
                    desc: "İngiltere'de fiziksel depo, fulfillment ve dağıtım altyapısı tek merkezden aktive edildi.",
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

            {/* CTA */}
            <section className="bg-[#0b2545] rounded-2xl p-8 text-center mb-10">
              <h2 className="text-2xl font-extrabold text-white mb-3">
                İngiltere&apos;ye gıda ürünü ihracatı mı planlıyorsunuz?
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed max-w-2xl mx-auto">
                Depo, fulfillment, etiketleme ve dağıtım operasyonunuzu birlikte planlayalım.
                Küçük hacimle başlayıp büyüyebilirsiniz.
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
                  → İngiltere Gıda Deposu
                </Link>
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
                  → İngiltere Depo Avantajları
                </Link>
                <Link
                  href="/blog/turkiyeden-ingiltereye-ihracat-rehberi"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → İngiltere Gümrük Rehberi
                </Link>
                <Link
                  href="/blog/ingiltere-depo-rehberi"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → GTİP Rehberi
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
                  altyapısı kurulumu ve FMCG gıda operasyonu konusunda aktif danışmanlık.
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
