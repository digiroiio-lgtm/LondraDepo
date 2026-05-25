import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/ingiltere-depo-avantajlari`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";
const TEL = "tel:+447554195190";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "İngiltere Depo Avantajları | LondraDepo.com",
  description:
    "Haftalık uygun maliyetli İngiltere depo çözümleri, Türkiye'den düzenli konteyner organizasyonu, GTIP danışmanlığı, İngiltere pazar uyumu ve fulfillment operasyonları tek noktada.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "İngiltere Depo Avantajları | LondraDepo.com",
    description:
      "Haftalık uygun maliyetli İngiltere depo çözümleri, Türkiye'den düzenli konteyner organizasyonu, GTIP danışmanlığı ve fulfillment operasyonları.",
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
      "@type": ["LocalBusiness", "Organization"],
      "@id": `${SITE_URL}/#organization`,
      name: "LondraDepo.com",
      url: SITE_URL,
      description:
        "İngiltere depo, fulfillment ve dağıtım çözümleri sunan operasyon partneri.",
      areaServed: ["Londra", "Essex", "Birmingham", "Manchester", "United Kingdom"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["Turkish", "English"],
        url: WHATSAPP,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "LondraDepo.com",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "İngiltere Depo Avantajları",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "İngiltere Depo ve Fulfillment Hizmeti",
      provider: { "@id": `${SITE_URL}/#organization` },
      serviceType: "Depolama, fulfillment, palet depolama, GTIP danışmanlığı, dağıtım",
      areaServed: "United Kingdom",
      offers: {
        "@type": "Offer",
        priceCurrency: "GBP",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "5",
          priceCurrency: "GBP",
          unitText: "haftalık palet başına (+ KDV)",
        },
        description: "Haftalık palet bazlı depolama — yaklaşık £5 + KDV'den başlayan maliyetler",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "İngiltere'de depo maliyetleri ne kadar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Palet bazlı depolama maliyetleri ürün tipi ve hacme göre değişmekle birlikte haftalık yaklaşık £5 + KDV'den başlayabilir.",
          },
        },
        {
          "@type": "Question",
          name: "Türkiye'den İngiltere'ye konteyner organizasyonu sağlıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. İstanbul, İzmir, Mersin ve İskenderun çıkışlı düzenli konteyner organizasyonu ve operasyon koordinasyonu konusunda destek sağlanabilir.",
          },
        },
        {
          "@type": "Question",
          name: "Küçük hacimli ürün gönderebilir miyim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Palet bazlı ve parsiyel (kısmi yük) operasyon modelleri uygundur. Tam tır yükü zorunluluğu yoktur.",
          },
        },
        {
          "@type": "Question",
          name: "İngiltere etiket uyumluluğu konusunda destek veriyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ürün gruplarına bağlı olarak İngilizce etiket kontrolü, UK market uyumu ve operasyon uygunluğu konusunda yönlendirme sağlanabilir.",
          },
        },
        {
          "@type": "Question",
          name: "Amazon UK için fulfillment desteği mevcut mu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Amazon, Shopify, Etsy ve diğer e-ticaret operasyonları için fulfillment ve sipariş hazırlama desteği sunulabilir.",
          },
        },
      ],
    },
  ],
};

const advantages = [
  {
    icon: "💷",
    title: "Uygun Başlangıç Maliyeti",
    cta: "Depolama maliyeti öğrenin",
    ctaText: "Depolama maliyeti öğrenin",
    body: (
      <>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          Haftalık palet depolama maliyetleri yaklaşık{" "}
          <strong className="text-[#0b2545]">£5 + KDV</strong>'den başlamaktadır
          (güncel kur ile yaklaşık 300 TL seviyeleri).
        </p>
        <p className="text-slate-600 text-sm leading-relaxed">
          Küçük hacimli girişler için düşük riskli başlangıç imkânı sağlar.
        </p>
      </>
    ),
  },
  {
    icon: "🚢",
    title: "Türkiye'den Düzenli Konteyner Organizasyonu",
    cta: "Konteyner planlaması sorun",
    body: (
      <>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          Türkiye'den İngiltere'ye haftada 2 gün düzenli konteyner organizasyonu
          planlaması yapılabilir. Özellikle:
        </p>
        <ul className="text-slate-600 text-sm space-y-1 list-none mb-3">
          {["İstanbul", "İzmir", "Mersin", "İskenderun"].map((city) => (
            <li key={city} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0b2545] flex-shrink-0" />
              {city}
            </li>
          ))}
        </ul>
        <p className="text-slate-600 text-sm leading-relaxed">
          çıkışlı operasyonlar için süreç koordinasyonu sağlanır.
        </p>
      </>
    ),
  },
  {
    icon: "📦",
    title: "Palet Bazlı Operasyon Modeli",
    cta: "Palet çözümü alın",
    body: (
      <>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          Tam tır yükü zorunluluğu olmadan İngiltere operasyonu başlatabilirsiniz:
        </p>
        <ul className="text-slate-600 text-sm space-y-1 list-none">
          {["Palet bazlı gönderim", "Kısmi yük operasyonu", "Konsolidasyon modeli"].map(
            (item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0b2545] flex-shrink-0" />
                {item}
              </li>
            )
          )}
        </ul>
      </>
    ),
  },
  {
    icon: "🏷️",
    title: "İngiltere Pazarına Uygun Etiketleme",
    cta: "Ürün uyumluluğu sorun",
    body: (
      <>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          Ürünleriniz için operasyon desteği sağlanabilir:
        </p>
        <ul className="text-slate-600 text-sm space-y-1 list-none">
          {[
            "İngilizce etiket kontrolü",
            "UK market uyumluluğu",
            "Paket üzeri içerik düzeni",
            "Private label yönlendirmesi",
            "Barcode & ürün kod yapısı",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0b2545] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    icon: "🔎",
    title: "GTIP & Ürün Ön Değerlendirme",
    cta: "GTIP danışın",
    body: (
      <>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          İngiltere'ye giriş öncesinde ön analiz desteği sunulabilir:
        </p>
        <ul className="text-slate-600 text-sm space-y-1 list-none">
          {[
            "GTIP değerlendirmesi",
            "Gümrük risk kontrolü",
            "Ürün kategorisi ön incelemesi",
            "Operasyon uygunluğu",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0b2545] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    icon: "📈",
    title: "İngiltere Pazara Giriş Danışmanlığı",
    cta: "Danışmanlık görüşmesi planlayın",
    body: (
      <>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          İngiltere'de satış ve operasyon başlangıcı yapmak isteyen firmalar için
          destekler sunulabilir:
        </p>
        <ul className="text-slate-600 text-sm space-y-1 list-none mb-4">
          {[
            "İlk operasyon planı",
            "Depo & fulfillment modeli",
            "Marketplace yönlendirmesi",
            "Amazon UK başlangıç stratejisi",
            "Dağıtım altyapısı",
            "İngiltere ticari yapı danışmanlığı",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-green-500 flex-shrink-0">✅</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-slate-500 text-xs">
          Başlangıç danışmanlığı: 4 saat / £1.000 + KDV'den başlayan paketler
        </p>
      </>
    ),
  },
  {
    icon: "🤝",
    title: "Türkçe Operasyon İletişimi",
    cta: "Türkçe destek alın",
    body: (
      <p className="text-slate-600 text-sm leading-relaxed">
        İngiltere'de depo operasyonu yürütürken dil bariyeri yaşamadan, Türkçe
        iletişimle hızlı çözüm odaklı operasyon yönetimi sağlanır.
      </p>
    ),
  },
];

const faqs = [
  {
    q: "İngiltere'de depo maliyetleri ne kadar?",
    a: "Palet bazlı depolama maliyetleri ürün tipi ve hacme göre değişmekle birlikte haftalık yaklaşık £5 + KDV'den başlayabilir.",
  },
  {
    q: "Türkiye'den İngiltere'ye konteyner organizasyonu sağlıyor musunuz?",
    a: "Evet. İstanbul, İzmir, Mersin ve İskenderun çıkışlı düzenli konteyner organizasyonu ve operasyon koordinasyonu konusunda destek sağlanabilir.",
  },
  {
    q: "Küçük hacimli ürün gönderebilir miyim?",
    a: "Evet. Palet bazlı ve parsiyel (kısmi yük) operasyon modelleri uygundur. Tam tır yükü zorunluluğu yoktur.",
  },
  {
    q: "İngiltere etiket uyumluluğu konusunda destek veriyor musunuz?",
    a: "Ürün gruplarına bağlı olarak İngilizce etiket kontrolü, UK market uyumu ve operasyon uygunluğu konusunda yönlendirme sağlanabilir.",
  },
  {
    q: "Amazon UK için fulfillment desteği mevcut mu?",
    a: "Evet. Amazon, Shopify, Etsy ve diğer e-ticaret operasyonları için fulfillment ve sipariş hazırlama desteği sunulabilir.",
  },
];

const trustItems = [
  "e-ticaret markaları",
  "gıda üreticileri",
  "toptancılar",
  "private label üreticileri",
  "marketplace satıcıları",
];

export default function IngiltereDepoAvantajlariPage() {
  return (
    <>
      <Header />

      <main>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* HERO */}
        <section className="bg-gradient-to-br from-[#0b2545] via-[#1e3a5f] to-[#0b2545] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">
              🇬🇧 İngiltere'de Fiziksel Operasyon Gücü Kazanın
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-balance mb-6">
              Türkiye'den İngiltere'ye{" "}
              <span className="text-red-400">Daha Akıllı</span> Depo ve
              Lojistik Operasyonu
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              Türkiye'den ürün gönderin, İngiltere'de depolayın, dağıtın ve
              operasyonunuzu büyütün.{" "}
              <strong className="text-white">LondraDepo.com</strong>; sadece
              depo değil, İngiltere pazarına giriş için operasyon altyapısı
              sunar.
            </p>

            <ul className="inline-flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-10 text-sm text-left">
              {[
                "Haftalık uygun maliyetli palet depolama",
                "Türkiye çıkışlı düzenli konteyner organizasyonu",
                "İngiltere fulfillment & dağıtım desteği",
                "GTIP & ithalat süreç danışmanlığı",
                "Ürün etiket ve pazar uyumu desteği",
                "Türkçe operasyon iletişimi",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full"
                >
                  <span className="text-green-400 flex-shrink-0">✅</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full text-base transition shadow-lg"
              >
                <svg
                  className="w-5 h-5 fill-white flex-shrink-0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                WhatsApp'tan Teklif Al
              </a>
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base transition"
              >
                📞 Hemen Arayın
              </a>
            </div>
          </div>
        </section>

        {/* ADVANTAGES */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-extrabold text-[#0b2545] mb-3">
                İngiltere Depo Avantajları
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Türkiye'den İngiltere'ye açılmak isteyen işletmeler için
                pratik ve ölçeklenebilir bir operasyon zemini.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((adv) => (
                <div
                  key={adv.title}
                  className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition flex flex-col"
                >
                  <div className="text-3xl mb-3">{adv.icon}</div>
                  <h3 className="font-bold text-[#0b2545] text-lg mb-3">
                    {adv.title}
                  </h3>
                  <div className="flex-1">{adv.body}</div>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block text-sm font-semibold text-green-600 hover:text-green-700 transition"
                  >
                    {adv.cta} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="py-20 px-4 bg-[#f6f8fb]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-[#0b2545] mb-4">
                İngiltere Operasyonunuzu Daha Kontrollü Yönetin
              </h2>
              <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
                LondraDepo.com modeli;{" "}
                <strong className="text-[#0b2545]">düşük giriş maliyeti</strong>,{" "}
                <strong className="text-[#0b2545]">fiziksel operasyon altyapısı</strong>,{" "}
                <strong className="text-[#0b2545]">esnek depolama</strong> ve{" "}
                <strong className="text-[#0b2545]">İngiltere fulfillment desteği</strong>{" "}
                sayesinde Türkiye'den İngiltere'ye açılmak isteyen işletmeler
                için pratik bir operasyon zemini oluşturur.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm mb-10">
              <p className="text-slate-600 text-sm mb-4 font-medium">
                Özellikle şu sektörler için ölçeklenebilir yapı sunar:
              </p>
              <div className="flex flex-wrap gap-3">
                {trustItems.map((item) => (
                  <span
                    key={item}
                    className="bg-[#f6f8fb] border border-slate-200 text-[#0b2545] text-sm font-medium px-4 py-2 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0b2545] hover:bg-[#1e3a5f] text-white font-bold px-8 py-4 rounded-full transition"
              >
                İngiltere Operasyonunuzu Başlatın
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-[#0b2545] mb-3">
                Sık Sorulan Sorular
              </h2>
              <p className="text-slate-600">
                İngiltere depo avantajları ve operasyon süreçleri hakkında
                merak edilenler.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="border border-slate-200 rounded-xl p-5"
                >
                  <h3 className="font-semibold text-[#0b2545] mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0b2545] hover:bg-[#1e3a5f] text-white font-bold px-8 py-4 rounded-full transition"
              >
                Daha Fazlası İçin WhatsApp'tan Yazın
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
