import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20Türkiye'den%20İngiltere'ye%20depolama%20ve%20fulfillment%20teklifi%20almak%20istiyorum.";
const TEL = "tel:+447554195190";

export const metadata: Metadata = {
  title: "Türkiye'den İngiltere'ye Depolama ve Fulfillment | LondraDepo.com",
  description:
    "İngiltere'de kendi deponuzu ve operasyon ekibinizi kurmadan satış yapın. Türkiye'den ürün gönderin, gümrükleme desteğinden Shopify ve Amazon fulfillment'a, pick & pack'ten İngiltere dağıtımına kadar tek noktadan yönetin.",
  keywords: [
    "İngiltere depo hizmeti",
    "Londra depo",
    "İngiltere fulfillment",
    "İngiltere e-ticaret lojistiği",
    "İngiltere Amazon depo",
    "İngiltere Shopify fulfillment",
    "İngiltere ürün depolama",
    "İngiltere gümrükleme",
    "İngiltere dağıtım",
    "Türkiye İngiltere depo",
    "UK warehouse Türkiye",
  ],
  alternates: { canonical: `${SITE_URL}/turkiyeden-ingiltereye-depolama` },
  openGraph: {
    title: "Türkiye'den İngiltere'ye Depolama ve Fulfillment | LondraDepo.com",
    description:
      "İngiltere'de kendi deponuzu kurmadan satış yapın. Türkiye'den ürün gönderin, tüm UK operasyonunu bize bırakın.",
    url: `${SITE_URL}/turkiyeden-ingiltereye-depolama`,
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Türkiye'den İngiltere'ye Depolama",
          item: `${SITE_URL}/turkiyeden-ingiltereye-depolama`,
        },
      ],
    },
    {
      "@type": "Service",
      name: "Türkiye'den İngiltere'ye Depolama ve Fulfillment",
      provider: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      serviceType: "Warehousing and Fulfillment",
      description:
        "Türkiye'den İngiltere'ye ürün gönderen işletmeler için depolama, gümrükleme koordinasyonu, fulfillment ve UK dağıtım hizmetleri.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/turkiyeden-ingiltereye-depolama`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Türkiye'den ürünlerimi İngiltere deposuna gönderebilir miyim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Türkiye'deki tedarikçinizden veya üretim noktanızdan ürünlerinizi doğrudan depo adresimize gönderebilirsiniz. Ürün kabulü ve depolama operasyonumuz tarafından gerçekleştirilir.",
          },
        },
        {
          "@type": "Question",
          name: "İngiltere'de kendi depomu kurmadan satış yapabilir miyim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. LondraDepo aracılığıyla kendi depo yatırımı yapmadan UK depolama ve fulfillment altyapısından yararlanabilirsiniz.",
          },
        },
        {
          "@type": "Question",
          name: "Shopify ve Amazon üzerinden satış yapıyorum. Destek sağlıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Shopify ve Amazon üzerinden satış yapan işletmeler için fulfillment desteği sunuyoruz.",
          },
        },
      ],
    },
  ],
};

const journey = [
  { icon: "🇹🇷", label: "Türkiye", desc: "Ürünlerinizi Türkiye'den veya tedarikçinizden gönderin." },
  { icon: "✈️", label: "İngiltere'ye Ulaşım", desc: "Ürünler UK'e taşınır." },
  { icon: "📋", label: "Gümrük", desc: "Gümrükleme sürecinde koordinasyon desteği sağlanır." },
  { icon: "🏢", label: "Depo", desc: "Ürünler depoya alınır, sayılır ve sisteme dahil edilir." },
  { icon: "🛍️", label: "Shopify / Amazon", desc: "Online mağazanızdan satışa devam edin." },
  { icon: "📦", label: "Pick & Pack", desc: "Siparişler toplanır, paketlenir ve etiketlenir." },
  { icon: "🚚", label: "Müşteri Teslimatı", desc: "UK genelinde müşterilerinize teslim edilir." },
];

const services = [
  "Gümrükleme süreci koordinasyonu",
  "Depolama",
  "Ürün kabul",
  "Yükleme ve boşaltma",
  "Stok yönetimi",
  "Pick & pack",
  "Etiketleme",
  "Shopify fulfillment",
  "Amazon fulfillment",
  "UK içi dağıtım",
];

const faqs = [
  {
    q: "Türkiye'den ürünlerimi İngiltere deposuna gönderebilir miyim?",
    a: "Evet. Türkiye'deki tedarikçinizden veya üretim noktanızdan ürünlerinizi doğrudan depo adresimize gönderebilirsiniz.",
  },
  {
    q: "İngiltere'de kendi depomu kurmadan satış yapabilir miyim?",
    a: "Evet. LondraDepo aracılığıyla kendi depo yatırımı yapmadan UK depolama ve fulfillment altyapısından yararlanabilirsiniz.",
  },
  {
    q: "Shopify ve Amazon üzerinden satış yapıyorum. Destek sağlıyor musunuz?",
    a: "Evet. Shopify ve Amazon üzerinden satış yapan işletmeler için fulfillment desteği sunuyoruz.",
  },
  {
    q: "Gümrükleme konusunda yardımcı olabilir misiniz?",
    a: "UK ithalat gümrükleme sürecinde koordinasyon desteği sağlıyoruz. Detaylar için bizimle iletişime geçin.",
  },
  {
    q: "Teklif almak için ne bilmem gerekiyor?",
    a: "Ürün türünüz, yaklaşık stok hacminiz (palet veya koli sayısı) ve ihtiyaç duyduğunuz hizmetler (depolama, fulfillment, dağıtım) hakkında bilgi yeterlidir.",
  },
];

export default function TurkiyeILandingPage() {
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
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">
              🇹🇷 → 🇬🇧 Türkiye'den İngiltere'ye
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-balance">
              Türkiye'den İngiltere'ye Satış İçin{" "}
              <span className="text-red-400">Depolama ve Fulfilment</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
              İngiltere'de kendi deponuzu ve operasyon ekibinizi kurmadan satış yapın.
            </p>
            <p className="text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              Türkiye'den ürünlerinizi gönderin. Gümrükleme sürecinden depolamaya, sipariş
              hazırlamadan İngiltere içi teslimata kadar operasyonunuzu tek noktadan
              yönetmenize yardımcı olalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full text-base transition shadow-lg"
              >
                Teklif Al
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

        {/* Journey diagram */}
        <section className="py-20 px-4 bg-[#0b2545]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-white text-center mb-12">
              Türkiye'den Müşterinize — Adım Adım
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {journey.map((step, i) => (
                <div key={step.label} className="flex items-center gap-3">
                  <div className="flex flex-col items-center text-center w-28">
                    <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center text-2xl mb-2">
                      {step.icon}
                    </div>
                    <span className="text-white text-xs font-bold mb-1">{step.label}</span>
                    <span className="text-slate-400 text-xs leading-tight">{step.desc}</span>
                  </div>
                  {i < journey.length - 1 && (
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value prop */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-5">
                İngiltere'de Operasyon Altyapısı — Kendiniz Kurmadan
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                İngiltere pazarına girmek kendi depo, ekip ve lojistik altyapınızı kurmayı
                gerektirmez. Ürünlerinizi bize gönderin; depolama, fulfillment ve dağıtım
                süreçlerini operasyonumuz üstlenir.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Türkiye'den ihracat yapan markalar, üreticiler ve e-ticaret işletmeleri için
                hazır UK lojistik altyapısı.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0b2545] hover:bg-[#1e3a5f] text-white font-bold px-8 py-4 rounded-full transition"
              >
                Teklif Al
              </a>
            </div>
            <div className="mt-10 lg:mt-0">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
                Kapsamımızdaki hizmetler:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <div key={s} className="flex items-center gap-3 bg-[#f6f8fb] border border-slate-200 rounded-xl px-4 py-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-slate-700 text-sm font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-[#f6f8fb]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-8 text-center">Sık Sorulan Sorular</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white border border-slate-200 rounded-xl p-5">
                  <h3 className="font-bold text-[#0b2545] mb-2 text-sm">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-[#0b2545]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-white mb-4">Ürünlerinizi Gönderin. UK Operasyonunu Biz Yönetelim.</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Gümrükleme koordinasyonundan depolamaya, fulfillment'tan UK dağıtımına kadar
              tek operasyon partnerinden tam UK lojistik altyapısı.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
              >
                Teklif Al
              </a>
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition"
              >
                📞 Arayın
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
