import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20İngiltere%20depo%20fiyatları%20hakkında%20bilgi%20almak%20istiyorum.";
const TEL = "tel:+447554195190";

export const metadata: Metadata = {
  title: "İngiltere Depo Fiyatları 2026 | UK Depolama Maliyeti | LondraDepo.com",
  description:
    "İngiltere depo fiyatları 2026: depolama, palet depolama, pick & pack, mal kabul, kargo ve sipariş karşılama maliyetleri. Özel teklif için WhatsApp ile iletişime geçin.",
  keywords: [
    "ingiltere depo fiyatları",
    "uk depo fiyatı",
    "palet depolama fiyatları",
    "sipariş karşılama fiyatları",
    "ingiltere depolama maliyeti",
    "uk fulfillment fiyatı",
    "londra depo fiyatı",
    "ingiltere depo ücreti",
    "pick pack fiyatı uk",
    "mal kabul ücreti ingiltere",
    "ingiltere depo fiyat listesi",
  ],
  alternates: { canonical: `${SITE_URL}/ingiltere-depo-fiyatlari` },
  openGraph: {
    title: "İngiltere Depo Fiyatları 2026 | LondraDepo.com",
    description: "UK depolama ve fulfillment maliyet kalemleri. Özel teklif için iletişime geçin.",
    url: `${SITE_URL}/ingiltere-depo-fiyatlari`,
    siteName: "LondraDepo.com",
    locale: "tr_TR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "İngiltere Depo Fiyatları", item: `${SITE_URL}/ingiltere-depo-fiyatlari` },
      ],
    },
    {
      "@type": "Service",
      name: "İngiltere Depo ve Fulfillment Fiyatları",
      provider: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      serviceType: "Warehousing Pricing",
      description:
        "İngiltere depo ve fulfillment hizmet fiyatları. Mal kabul, depolama, pick & pack, kargo ve iade için maliyet kalemleri.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/ingiltere-depo-fiyatlari`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "İngiltere depo fiyatları nasıl hesaplanır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "İngiltere depo fiyatları; depolanan ürün miktarı (palet/koli sayısı), depolama süresi, sipariş hacmi ve ihtiyaç duyulan ek hizmetlere (pick & pack, etiketleme, iade yönetimi) göre belirlenir. Sabit bir liste sunmak yerine her müşteri için özel teklif hazırlıyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Palet depolama İngiltere'de ne kadar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Palet depolama ücreti; palet sayısı, depolama süresi ve gereken ek hizmetlere göre değişir. Doğru fiyat için palet sayınız, boyutlarınız ve tahmini sürenizle WhatsApp üzerinden bize ulaşın.",
          },
        },
        {
          "@type": "Question",
          name: "Pick & pack hizmeti İngiltere'de ne kadar tutar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pick & pack ücreti sipariş başına hesaplanır ve ürün türü, paket başına ürün sayısı ve paketleme gereksinimlerine göre değişir. Aylık sipariş hacminizle özel teklif alabilirsiniz.",
          },
        },
        {
          "@type": "Question",
          name: "Teklif almak için ne tür bilgi vermem gerekiyor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Teklif için şu bilgileri paylaşmanız yeterlidir: ürün türü, tahmini palet veya koli sayısı, aylık sipariş hacmi, ihtiyaç duyduğunuz hizmetler (depolama, pick & pack, kargo vb.) ve satış kanalınız (Shopify, Amazon, toptan vb.).",
          },
        },
      ],
    },
  ],
};

const costCategories = [
  {
    icon: "📥",
    title: "Mal Kabul (Inbound)",
    items: [
      "Gelen sevkiyatın boşaltılması",
      "Sayım ve kontrol",
      "Sisteme (WMS) kayıt",
      "Depolama konumuna yerleştirme",
    ],
  },
  {
    icon: "🏗️",
    title: "Palet Depolama",
    items: [
      "Haftalık veya aylık depolama ücreti",
      "Palet başına hesaplama",
      "Uzun süreli depolama için farklı tarifeler",
      "Kısmi palet seçeneği",
    ],
  },
  {
    icon: "📫",
    title: "Koli / Raf Depolama",
    items: [
      "Palet olmayan küçük ürünler için",
      "Koli veya raf başına hesaplama",
      "Aylık depolama ücreti",
    ],
  },
  {
    icon: "🔍",
    title: "Sipariş Toplama (Pick)",
    items: [
      "Sipariş başına ücret",
      "İlk ürün kalemi için temel ücret",
      "Ek ürün kalemi başına ek ücret",
    ],
  },
  {
    icon: "📦",
    title: "Paketleme (Pack)",
    items: [
      "Paket boyutu ve türüne göre",
      "Ambalaj malzemesi kullanımı",
      "Özel paketleme gereksinimleri",
    ],
  },
  {
    icon: "🏷️",
    title: "Etiketleme",
    items: [
      "Kargo etiketi oluşturma",
      "Ürün etiketi yapıştırma",
      "Özel etiketleme talepleri",
    ],
  },
  {
    icon: "🚚",
    title: "Kargo",
    items: [
      "UK içi teslimat koordinasyonu",
      "Farklı kargo hızları (standart/express)",
      "Kargo ücreti müşteriye yansıtılır",
    ],
  },
  {
    icon: "↩️",
    title: "İade (Return)",
    items: [
      "İade kabulü ve kontrolü",
      "Sisteme geri kayıt",
      "İade değerlendirme ve stoka alma",
    ],
  },
  {
    icon: "📋",
    title: "Gümrükleme Koordinasyonu",
    items: [
      "Gümrük süreci koordinasyon desteği",
      "Belge yönlendirmesi",
      "Gümrük → Depo operasyonu",
    ],
  },
];

const scenarios = [
  {
    title: "Küçük İşletme",
    desc: "10-20 palet stok, aylık 100-300 sipariş",
    items: [
      "Mal kabul (aylık giriş)",
      "Palet depolama (10-20 palet)",
      "Pick & pack (sipariş başına)",
      "Kargo koordinasyonu",
    ],
    cta: "Bu profil için teklif al",
  },
  {
    title: "Orta Ölçekli İşletme",
    desc: "50-100+ palet stok, aylık 500+ sipariş",
    items: [
      "Mal kabul (haftalık/aylık)",
      "Palet + koli depolama",
      "Pick & pack operasyonu",
      "Etiketleme hizmeti",
      "İade yönetimi",
      "Kargo koordinasyonu",
    ],
    cta: "Bu profil için teklif al",
  },
];

const faqs = [
  {
    q: "İngiltere depo fiyatları nasıl hesaplanır?",
    a: "İngiltere depo fiyatları; depolanan ürün miktarı (palet/koli sayısı), depolama süresi, sipariş hacmi ve ihtiyaç duyulan ek hizmetlere (pick & pack, etiketleme, iade yönetimi) göre belirlenir. Sabit bir liste sunmak yerine her müşteri için özel teklif hazırlıyoruz.",
  },
  {
    q: "Palet depolama İngiltere'de ne kadar?",
    a: "Palet depolama ücreti; palet sayısı, depolama süresi ve gereken ek hizmetlere göre değişir. Doğru fiyat için palet sayınız, boyutlarınız ve tahmini sürenizle WhatsApp üzerinden bize ulaşın.",
  },
  {
    q: "Pick & pack hizmeti İngiltere'de ne kadar tutar?",
    a: "Pick & pack ücreti sipariş başına hesaplanır ve ürün türü, paket başına ürün sayısı ve paketleme gereksinimlerine göre değişir. Aylık sipariş hacminizle özel teklif alabilirsiniz.",
  },
  {
    q: "Teklif almak için ne tür bilgi vermem gerekiyor?",
    a: "Teklif için şu bilgileri paylaşmanız yeterlidir: ürün türü, tahmini palet veya koli sayısı, aylık sipariş hacmi, ihtiyaç duyduğunuz hizmetler ve satış kanalınız (Shopify, Amazon, toptan vb.).",
  },
  {
    q: "Minimum stok veya sipariş şartı var mı?",
    a: "Minimum şartlar hakkında bilgi almak için lütfen doğrudan bizimle iletişime geçin. Operasyon ölçeğinize göre değerlendirme yapıyoruz.",
  },
];

export default function IngiltereDepoFiyatlari() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0b2545] via-[#1e3a5f] to-[#0b2545] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition">Ana Sayfa</Link>
              <span className="mx-2">/</span>
              <span className="text-white">İngiltere Depo Fiyatları</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              İngiltere Depo Fiyatları{" "}
              <span className="text-[#e63946]">2026</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-4">
              Depolama, pick & pack, mal kabul, kargo ve sipariş karşılama hizmetlerinin
              maliyet kalemlerini öğrenin. Her müşteri için ihtiyaca özel teklif hazırlıyoruz.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-8 text-sm text-slate-300 max-w-2xl">
              <strong className="text-white">Not:</strong> Fiyatlar; stok miktarı, sipariş hacmi
              ve ihtiyaç duyulan hizmetlere göre değiştiğinden kamuya açık sabit fiyat listesi
              yayınlamıyoruz. Aşağıdaki maliyet kalemleri hakkında bilgi alarak WhatsApp veya
              telefonla özel teklif isteyebilirsiniz.
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
              >
                Fiyat Teklifi Al
              </a>
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full transition"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        </section>

        {/* Cost categories */}
        <section className="py-16 px-4 bg-[#f6f8fb]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-2 text-center">
              Maliyet Kalemleri
            </h2>
            <p className="text-slate-500 text-center text-sm mb-10">
              Aşağıdaki hizmet kategorileri, fiyat teklifini oluşturan ana kalemlerdir.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {costCategories.map((cat) => (
                <div key={cat.title} className="bg-white border border-slate-200 rounded-2xl p-5">
                  <div className="text-2xl mb-2">{cat.icon}</div>
                  <h3 className="font-bold text-[#0b2545] mb-3">{cat.title}</h3>
                  <ul className="space-y-1">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-slate-400 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example scenarios */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-2 text-center">
              Örnek Profiller
            </h2>
            <p className="text-slate-500 text-center text-sm mb-10">
              İşletme büyüklüğünüze göre hangi hizmetlerin kapsamda olduğunu görün.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {scenarios.map((s) => (
                <div key={s.title} className="border border-slate-200 rounded-2xl p-6">
                  <h3 className="font-bold text-[#0b2545] text-lg mb-1">{s.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">{s.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0b2545] hover:bg-[#1e3a5f] text-white text-sm font-bold px-5 py-3 rounded-full transition"
                  >
                    {s.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA dark */}
        <section className="py-16 px-4 bg-[#0b2545] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold mb-4">
              Özel Fiyat Teklifi Alın
            </h2>
            <p className="text-slate-300 text-lg mb-4 max-w-2xl mx-auto">
              Ürün türü, stok miktarı ve aylık sipariş hacminizi paylaşın,
              size özel fiyat teklifi hazırlayalım.
            </p>
            <p className="text-slate-400 text-sm mb-8">
              WhatsApp mesajınıza: ürün türü · tahmini palet/koli sayısı · aylık sipariş hacmi · satış kanalı
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
            >
              WhatsApp ile Teklif İste
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-8">Sık Sorulan Sorular</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="border border-slate-200 rounded-xl p-5">
                  <h3 className="font-bold text-[#0b2545] mb-2 text-sm">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="py-12 px-4 bg-[#f6f8fb]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-bold text-[#0b2545] mb-4">İlgili Sayfalar</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/ingiltere-depo", label: "İngiltere Depo" },
                { href: "/e-ticaret-fulfillment", label: "E-Ticaret Fulfillment" },
                { href: "/palet-depolama", label: "Palet Depolama" },
                { href: "/siparis-toplama-paketleme", label: "Pick & Pack" },
                { href: "/ingiltere-e-ticaret-lojistigi", label: "E-Ticaret Lojistiği" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-white border border-slate-200 rounded-full px-4 py-2 text-sm text-[#0b2545] hover:border-[#0b2545] transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
