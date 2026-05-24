import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import CaseHero from "@/components/CaseHero";
import OperationsFlow from "@/components/OperationsFlow";
import RelatedCases from "@/components/RelatedCases";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/case-studies/krufy-uk-fashion-fulfillment`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20moda%20fulfillment%20operasyonu%20hakkinda%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Krufy UK Fashion Fulfillment | İngiltere Moda Operasyonu | LondraDepo.com",
  description:
    "Krufy apparel markasının İngiltere fulfillment operasyonu: depolama, yeniden paketleme, sipariş hazırlama ve UK e-ticaret dağıtımı. UK fashion fulfillment case study.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Krufy — UK Fashion Fulfillment Operasyonu | LondraDepo.com",
    description:
      "İngiltere piyasasına giren apparel markasının depolama ve fulfillment süreçlerinin kurulumu.",
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
        { "@type": "ListItem", position: 3, name: "Krufy UK Fashion Fulfillment", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "Krufy — UK Fashion Fulfillment Operasyonu",
      description:
        "İngiltere piyasasına giren apparel markasının depolama, yeniden paketleme ve sipariş hazırlama süreçleri.",
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
          name: "UK fashion fulfillment nasıl çalışır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ürünleriniz İngiltere deposuna teslim edilir, burada depolanır, sipariş geldiğinde hazırlanıp paketlenir ve İngiltere içindeki müşterilerinize hızlıca gönderilir.",
          },
        },
        {
          "@type": "Question",
          name: "Moda ürünleri için yeniden paketleme yapıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Markanıza özgü ambalaj malzemeleri kullanarak ürünlerinizi yeniden paketliyor, etiketliyor ve UK piyasasına hazır hale getiriyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Online moda satıcıları için fulfillment avantajı nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UK'daki depodan sevkiyat yapılması teslimat sürelerini önemli ölçüde kısaltır. Müşteri deneyimi iyileşir, iade oranları düşer.",
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
    title: "UK'ya Ürün Sevkiyatı",
    desc: "Türkiye'den gönderilen Krufy koleksiyonu ürünleri, Essex merkezli deposumuza teslim alındı.",
  },
  {
    step: 2,
    icon: "📋",
    title: "Sayım & Hasar Kontrolü",
    desc: "Her ürün giriş aşamasında eksiksiz sayıldı, kalite ve hasar kontrolü yapıldı, sisteme kaydedildi.",
  },
  {
    step: 3,
    icon: "📦",
    title: "Yeniden Paketleme",
    desc: "Ürünler marka standartlarına uygun olarak yeniden paketlendi; hang tag, etiket ve ambalaj güncellendi.",
  },
  {
    step: 4,
    icon: "🛒",
    title: "Sipariş Entegrasyonu",
    desc: "Online satış kanallarından (web sitesi, marketplace) gelen siparişler operasyon akışına entegre edildi.",
  },
  {
    step: 5,
    icon: "🏃",
    title: "Pick & Pack",
    desc: "Her sipariş depodan toplanıp özgün ambalajıyla hazırlandı, sevk etiketi basıldı.",
  },
  {
    step: 6,
    icon: "🚚",
    title: "UK Teslimat",
    desc: "Hazırlanan siparişler UK kargo ağıyla müşterilere next-day veya 2-day delivery seçeneğiyle teslim edildi.",
  },
];

const faqs = [
  {
    q: "UK fashion fulfillment nasıl çalışır?",
    a: "Ürünleriniz İngiltere deposuna teslim edilir, burada depolanır, sipariş geldiğinde hazırlanıp paketlenir ve İngiltere içindeki müşterilerinize hızlıca gönderilir.",
  },
  {
    q: "Moda ürünleri için yeniden paketleme yapıyor musunuz?",
    a: "Evet. Markanıza özgü ambalaj malzemeleri kullanarak ürünlerinizi yeniden paketliyor, etiketliyor ve UK piyasasına hazır hale getiriyoruz.",
  },
  {
    q: "Online moda satıcıları için fulfillment avantajı nedir?",
    a: "UK'daki depodan sevkiyat yapılması teslimat sürelerini önemli ölçüde kısaltır. Müşteri deneyimi iyileşir, iade oranları düşer.",
  },
  {
    q: "Minimum stok miktarı var mı?",
    a: "Sabit bir minimum stok zorunluluğumuz bulunmuyor. Sezonluk koleksiyon veya sürekli stok gibi farklı modeller için esnek çözümler üretiyoruz.",
  },
  {
    q: "Türkçe operasyon iletişimi sağlanıyor mu?",
    a: "Evet. Türkiye'den yönetim yapan markalar için tüm operasyon iletişimi Türkçe olarak yürütülüyor.",
  },
];

const relatedCases = [
  {
    slug: "uk-auto-parts-warehouse",
    industry: "Otomotiv",
    title: "OEM & Yan Sanayi — Yedek Parça İngiltere Depolama",
    summary: "Lüks araç yedek parçalarının İngiltere'de stok yönetimi ve dağıtım operasyonu.",
  },
  {
    slug: "pizza-box-distribution-uk",
    industry: "B2B Dağıtım",
    title: "Pizza Kutusu — İngiltere B2B Dağıtım Operasyonu",
    summary: "Restoranlara toptan ambalaj tedarikçisinin palet bazlı UK dağıtım süreci.",
  },
];

export default function KrufyCaseStudyPage() {
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
            <span className="text-[#0b2545] font-medium">Krufy UK Fashion Fulfillment</span>
          </div>
        </nav>

        <article className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <CaseHero
              industry="Moda & Apparel"
              industryColor="text-pink-700 bg-pink-50"
              brand="Krufy"
              title="Krufy — İngiltere Moda Fulfillment Operasyonu"
              subtitle="Eski ünlü futbolcu Cruyff koleksiyonuna dayanan Krufy markası, İngiltere piyasasına giriş sürecinde fiziksel depolama ve fulfillment altyapısına ihtiyaç duydu. Essex merkezli operasyonumuzla UK'daki tüm lojistik süreçler devreye alındı."
              metrics={[
                { label: "Ortalama Teslimat Süresi", value: "2 gün" },
                { label: "Operasyon Dili", value: "TR + EN" },
                { label: "Kapsam", value: "Tüm UK" },
              ]}
            />

            {/* Problem */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">Operasyonel Zorluk</h2>
              <div className="bg-slate-50 border-l-4 border-[#e63946] rounded-r-xl p-6">
                <p className="text-slate-700 leading-relaxed mb-3">
                  Krufy, Türkiye'den İngiltere pazarına giriş yapacaktı. Ancak UK'da fiziksel bir
                  depo veya lojistik altyapısı bulunmuyordu. Ürünlerin Türkiye'den direkt sevk
                  edilmesi hem teslimat sürelerini uzatıyor hem de müşteri deneyimini olumsuz
                  etkiliyordu.
                </p>
                <ul className="text-slate-700 text-sm space-y-2 list-none">
                  <li>⚠️ UK piyasasında fiziksel stok bulunmaması</li>
                  <li>⚠️ Uzun teslimat süreleri (Türkiye → UK müşteri)</li>
                  <li>⚠️ UK piyasasına uygun yeniden paketleme ihtiyacı</li>
                  <li>⚠️ Türkiye'den operasyon yönetimi güçlüğü</li>
                  <li>⚠️ Yerel kargo ağına erişim yokluğu</li>
                </ul>
              </div>
            </section>

            {/* Solution */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">LondraDepo Çözümü</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Krufy koleksiyonu toplu olarak Essex deposuna alındı. Buradan tüm UK operasyonu
                tek merkezden yönetilmeye başlandı: depolama, paketleme, sipariş hazırlama ve UK
                kargo ağıyla müşterilere teslimat.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: "🏭", title: "UK Depolama", desc: "Essex merkezli depoda güvenli, iklim kontrollü stok alanı." },
                  { icon: "📦", title: "Yeniden Paketleme", desc: "UK piyasasına uygun ambalaj, etiket ve hang tag güncelleme." },
                  { icon: "🛒", title: "E-ticaret Fulfillment", desc: "Online siparişlerin otomatik akışla hazırlanması ve sevki." },
                  { icon: "🚚", title: "UK Dağıtım", desc: "Tüm İngiltere'ye next-day / 2-day teslimat seçenekleri." },
                  { icon: "📊", title: "Stok Raporu", desc: "Düzenli stok seviyeleri ve hareket raporları Türkçe paylaşıldı." },
                  { icon: "💬", title: "Türkçe İletişim", desc: "Tüm operasyon süreci Türkçe koordinasyonla yürütüldü." },
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
                  { value: "~%80", label: "Daha hızlı UK teslimat", desc: "Türkiye sevkten UK depo sevke geçişle teslimat süresi dramatik düştü." },
                  { value: "100%", label: "Türkçe operasyon", desc: "Türkiye'den ekip herhangi bir dil bariyeri olmadan operasyonu yönetti." },
                  { value: "1 depo", label: "Tüm UK kapsama", desc: "Tek Essex deposundan tüm İngiltere'ye dağıtım sağlandı." },
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
                Moda markanız için operasyon modeli oluşturun
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                UK fulfillment operasyonunu kurmak için ihtiyacınızı paylaşın — hızlıca teklif hazırlayalım.
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
                <Link href="/ingiltere-fulfillment" className="text-sm text-[#0b2545] hover:underline">→ İngiltere Fulfillment</Link>
                <Link href="/palet-depolama" className="text-sm text-[#0b2545] hover:underline">→ Palet Depolama</Link>
                <Link href="/amazon-prep-uk" className="text-sm text-[#0b2545] hover:underline">→ Amazon Prep UK</Link>
                <Link href="/ingiltere-depo-avantajlari" className="text-sm text-[#0b2545] hover:underline">→ Depo Avantajları</Link>
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
