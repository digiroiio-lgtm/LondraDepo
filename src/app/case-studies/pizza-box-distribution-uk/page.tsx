import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import CaseHero from "@/components/CaseHero";
import OperationsFlow from "@/components/OperationsFlow";
import RelatedCases from "@/components/RelatedCases";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/case-studies/pizza-box-distribution-uk`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20B2B%20dagitim%20operasyonu%20hakkinda%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Pizza Kutusu UK Dağıtım | B2B Fulfillment İngiltere | LondraDepo.com",
  description:
    "Pizza kutusu üreticisinin İngiltere restoranlarına palet bazlı B2B dağıtım operasyonu. Packaging distribution UK, pallet storage UK case study.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Pizza Kutusu — İngiltere B2B Dağıtım Operasyonu | LondraDepo.com",
    description:
      "Restoranlardan gelen toplu siparişlerin palet bazlı depolanması ve düzenli UK dağıtım planlaması.",
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
        { "@type": "ListItem", position: 2, name: "Başarı Hikayeleri", item: `${SITE_URL}/case-studies` },
        { "@type": "ListItem", position: 3, name: "Pizza Kutusu UK Dağıtım", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Pizza Kutusu — İngiltere B2B Dağıtım Operasyonu",
      description:
        "Pizza kutusu üreticisinin İngiltere restoranlarına palet bazlı stok yönetimi ve düzenli dağıtım planlaması.",
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
          name: "B2B fulfillment ile B2C fulfillment arasındaki fark nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "B2B fulfillment, işletmelere yapılan toplu siparişleri kapsar; palet bazlı sevkiyat, sabit dağıtım programları ve fatura bazlı lojistik içerir. B2C ise bireysel müşterilere yapılan tekil siparişlere odaklanır.",
          },
        },
        {
          "@type": "Question",
          name: "Restoranlara düzenli dağıtım programı kurulabiliyor mu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Müşteri listesi ve frekansına göre haftalık veya aylık dağıtım programı oluşturuyoruz. Restoran zincirlerine sabit program avantajı sunabiliyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Palet bazlı ambalaj ürünleri depoluyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Pizza kutusu, paket materyali gibi büyük hacimli ürünler palet bazında depolanıyor, stok takibi yapılıyor ve sipariş bazında hazırlanıp dağıtıma çıkıyor.",
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
    title: "Toplu Palet Kabulü",
    desc: "Türkiye'den gönderilen pizza kutusu paletleri Essex deposuna tırla teslim alındı, palet sayımı yapıldı.",
  },
  {
    step: 2,
    icon: "📋",
    title: "Stok Sistemi & Etiketleme",
    desc: "Her palet ürün kodu ve lot bilgisiyle sisteme girildi, depo içi yerleşim planı oluşturuldu.",
  },
  {
    step: 3,
    icon: "📅",
    title: "Dağıtım Planlaması",
    desc: "Restoran müşterilerinin haftalık ve aylık ihtiyaçlarına göre sabit dağıtım takvimi hazırlandı.",
  },
  {
    step: 4,
    icon: "🏃",
    title: "Sipariş Hazırlama",
    desc: "Her müşterinin sipariş miktarına göre palet veya koli bazında hazırlık yapıldı, sevk listesi oluşturuldu.",
  },
  {
    step: 5,
    icon: "🚚",
    title: "UK Restoran Dağıtımı",
    desc: "Siparişler programlı UK kargo / kurye ağıyla belirlenen restoranlar ve işletmelere teslim edildi.",
  },
  {
    step: 6,
    icon: "📊",
    title: "Stok Takibi & Raporlama",
    desc: "Stok seviyeleri sürekli izlendi, kritik stok eşiğine yaklaşıldığında yenileme bildirimi yapıldı.",
  },
];

const faqs = [
  {
    q: "B2B fulfillment ile B2C fulfillment arasındaki fark nedir?",
    a: "B2B fulfillment, işletmelere yapılan toplu siparişleri kapsar; palet bazlı sevkiyat, sabit dağıtım programları ve fatura bazlı lojistik içerir. B2C ise bireysel müşterilere yapılan tekil siparişlere odaklanır.",
  },
  {
    q: "Restoranlara düzenli dağıtım programı kurulabiliyor mu?",
    a: "Evet. Müşteri listesi ve frekansına göre haftalık veya aylık dağıtım programı oluşturuyoruz. Restoran zincirlerine sabit program avantajı sunabiliyoruz.",
  },
  {
    q: "Palet bazlı ambalaj ürünleri depoluyor musunuz?",
    a: "Evet. Pizza kutusu, paket materyali gibi büyük hacimli ürünler palet bazında depolanıyor, stok takibi yapılıyor ve sipariş bazında hazırlanıp dağıtıma çıkıyor.",
  },
  {
    q: "Minimum sipariş miktarı var mı?",
    a: "Palet bazlı operasyonlarda minimum hacim gereksinimi değişkenlik gösterebilir. İhtiyaçlarınızı paylaşırsanız size özel model oluşturabiliriz.",
  },
  {
    q: "UK gıda sektörü distribütörleri için özel çözüm sunuyor musunuz?",
    a: "Evet. Restoran tedarik zinciri ve FMCG B2B dağıtımı konusunda deneyimli operasyon ekibimiz mevcuttur.",
  },
];

const relatedCases = [
  {
    slug: "krufy-uk-fashion-fulfillment",
    industry: "Moda & Apparel",
    title: "Krufy — UK Fashion Fulfillment Operasyonu",
    summary: "Apparel markasının İngiltere fulfillment ve yeniden paketleme süreci.",
  },
  {
    slug: "uk-auto-parts-warehouse",
    industry: "Otomotiv",
    title: "OEM & Yan Sanayi — Yedek Parça İngiltere Depolama",
    summary: "Lüks araç yedek parçalarının İngiltere'de hasar kontrollü depolama ve dağıtım operasyonu.",
  },
];

export default function PizzaBoxCaseStudyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 py-2 text-sm text-slate-500 flex flex-wrap gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-[#0b2545] transition">Başarı Hikayeleri</Link>
            <span>/</span>
            <span className="text-[#0b2545] font-medium">Pizza Kutusu UK Dağıtım</span>
          </div>
        </nav>

        <article className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <CaseHero
              industry="B2B Dağıtım"
              industryColor="text-amber-700 bg-amber-50"
              brand="Ambalaj & FMCG"
              title="Pizza Kutusu — İngiltere B2B Restoran Dağıtım Operasyonu"
              subtitle="Pizza kutusu üreticisi, İngiltere'deki restoran müşterilerine düzenli ve güvenilir teslimat sağlamak için palet bazlı UK depolama ve programlı dağıtım modelini hayata geçirdi."
              metrics={[
                { label: "Model", value: "B2B Palet" },
                { label: "Kapsam", value: "UK Geneli" },
                { label: "Program", value: "Düzenli dağıtım" },
              ]}
            />

            {/* Problem */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">Operasyonel Zorluk</h2>
              <div className="bg-slate-50 border-l-4 border-[#e63946] rounded-r-xl p-6">
                <p className="text-slate-700 leading-relaxed mb-3">
                  Türkiye'de pizza kutusu üreten firma, İngiltere'deki restoran ve işletmelere
                  düzenli teslimat yapmak istiyordu. Ancak UK'da stok tutulmadığı için her siparişte
                  Türkiye'den sevkiyat yapılması lojistik açıdan sürdürülemezdi.
                </p>
                <ul className="text-slate-700 text-sm space-y-2 list-none">
                  <li>⚠️ Türkiye'den UK'ya her seferinde ayrı sevkiyat maliyeti ve gecikmesi</li>
                  <li>⚠️ Restoranların tutarlı ve öngörülebilir tedarik ihtiyacı</li>
                  <li>⚠️ Büyük hacimli palet ürünler için depolama ihtiyacı</li>
                  <li>⚠️ UK'da fiziksel operasyon noktası gerekliliği</li>
                  <li>⚠️ Stok erken tükenme riski ve müşteri kayıpları</li>
                </ul>
              </div>
            </section>

            {/* Solution */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">LondraDepo Çözümü</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Toplu pizza kutusu sevkiyatı Essex deposuna alındı, palet sistemiyle organize edildi.
                Restoran müşterileri için sabit dağıtım takvimi oluşturuldu. Stok kritik seviyeye
                düşmeden önce yenileme bildirimleri yapıldı.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: "🏭", title: "Palet Depolama", desc: "Yüksek hacimli ambalaj ürünleri palet raf sisteminde düzenli ve erişilebilir şekilde depolandı." },
                  { icon: "📅", title: "Düzenli Dağıtım Planı", desc: "Her restoran müşterisine haftalık/aylık sabit teslimat programı oluşturuldu." },
                  { icon: "📊", title: "Stok Takibi", desc: "Stok seviyeleri sürekli izlendi, minimum stok eşiği uyarı sistemiyle takip edildi." },
                  { icon: "🚚", title: "UK B2B Dağıtım", desc: "Palet ve koli bazında restoran, zincir ve işletmelere UK genelinde dağıtım yapıldı." },
                  { icon: "📋", title: "Lot & Seri Takibi", desc: "Lot bazlı stok kaydıyla ürün hareketleri izlendi, geri çağırma senaryolarına hazır sistem." },
                  { icon: "💬", title: "Türkçe Koordinasyon", desc: "Tüm operasyon süreci Türkçe iletişimle Türkiye merkezli ekiple koordine edildi." },
                ].map((item) => (
                  <div key={item.title} className="border border-slate-200 rounded-xl p-5 flex gap-4">
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
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
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-6">Operasyon Süreci</h2>
              <OperationsFlow steps={flowSteps} />
            </section>

            {/* Results */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">Sağlanan Avantajlar</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { value: "Sabit", label: "Dağıtım programı", desc: "Restoran müşterilerine öngörülebilir ve güvenilir tedarik takvimi sağlandı." },
                  { value: "Palet+", label: "Büyük hacim kapasitesi", desc: "Yüksek hacimli ambalaj ürünleri tek noktada optimize şekilde depolandı." },
                  { value: "%0", label: "Stok sürpriz kesintisi", desc: "Proaktif uyarı sistemiyle stok tükenmeden önce yenileme koordinasyonu yapıldı." },
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
                İngiltere dağıtım operasyonunuzu planlayın
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                B2B dağıtım, palet depolama ve düzenli UK sevkiyat ihtiyaçlarınızı paylaşın.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3.5 rounded-full transition"
                >
                  WhatsApp&apos;tan hızlı bilgi alın
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition"
                >
                  Operasyon danışmanı ile görüşün
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-6">Sık Sorulan Sorular</h2>
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
                <Link href="/palet-depolama" className="text-sm text-[#0b2545] hover:underline">→ Palet Depolama</Link>
                <Link href="/ingiltere-fulfillment" className="text-sm text-[#0b2545] hover:underline">→ İngiltere Fulfillment</Link>
                <Link href="/ingiltere-depo-avantajlari" className="text-sm text-[#0b2545] hover:underline">→ Depo Avantajları</Link>
                <Link href="/essex-depo" className="text-sm text-[#0b2545] hover:underline">→ Essex Depo</Link>
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
