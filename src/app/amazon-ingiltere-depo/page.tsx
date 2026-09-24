import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20Amazon%20İngiltere%20depo%20ve%20sipariş%20karşılama%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.";
const TEL = "tel:+447554195190";

export const metadata: Metadata = {
  title: "Amazon İçin İngiltere Depo ve Sipariş Karşılama (FBM) | LondraDepo.com",
  description:
    "Amazon FBM için İngiltere'de depo ve sipariş karşılama. Amazon UK siparişlerinizi Essex depomuzdan karşılayın. FBM ile kendi deponuz olmadan UK'de Amazon satışı yapın.",
  keywords: [
    "ingiltere amazon depo",
    "amazon fbm ingiltere",
    "amazon sipariş karşılama uk",
    "amazon fbm uk depo",
    "amazon uk fulfillment",
    "amazon ingiltere depolama",
    "amazon fbm fulfilled by merchant uk",
    "uk amazon third party fulfillment",
    "amazon uk sipariş karşılama",
    "amazon ingiltere lojistik",
  ],
  alternates: { canonical: `${SITE_URL}/amazon-ingiltere-depo` },
  openGraph: {
    title: "Amazon İçin İngiltere Depo (FBM) | LondraDepo.com",
    description: "Amazon FBM UK: Essex depomuzdan Amazon siparişi karşılama. FBM vs FBA rehberi.",
    url: `${SITE_URL}/amazon-ingiltere-depo`,
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
        { "@type": "ListItem", position: 2, name: "Amazon İngiltere Depo (FBM)", item: `${SITE_URL}/amazon-ingiltere-depo` },
      ],
    },
    {
      "@type": "Service",
      name: "Amazon İçin İngiltere Depo ve Sipariş Karşılama (FBM)",
      provider: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      serviceType: "Amazon FBM Warehousing and Fulfilment",
      description:
        "Amazon FBM (Fulfilled by Merchant) modeliyle UK'de satış yapan işletmeler için Essex depomuzdan sipariş karşılama hizmeti.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/amazon-ingiltere-depo`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "FBM (Fulfilled by Merchant) nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FBM, Amazon satıcısının ürünlerini kendisinin (veya üçüncü taraf bir deponun) stokladığı ve sipariş geldiğinde bizzat sevk ettiği modeldir. FBA'da ise ürünler Amazon'un deposuna gönderilir ve Amazon karşılar. LondraDepo, FBM modelinde üçüncü taraf depo hizmeti sunar.",
          },
        },
        {
          "@type": "Question",
          name: "Amazon FBM için neden LondraDepo'yu kullanmalıyım?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Amazon FBM'de ürünlerin UK'de stoklanması ve hızlı karşılanması gerekmektedir. LondraDepo, Essex depomuzdan pick & pack ve UK teslimat koordinasyonu sağlar. Kendi deponuzu kurmadan FBM operasyonu yürütmenize olanak tanır.",
          },
        },
        {
          "@type": "Question",
          name: "LondraDepo Amazon'un resmi partneri mi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hayır. LondraDepo, Amazon'un resmi partneri değildir. Amazon FBM modeliyle satış yapan işletmelere bağımsız depolama ve fulfillment desteği sunmaktayız.",
          },
        },
        {
          "@type": "Question",
          name: "Amazon FBA hazırlığı da yapıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. FBA için ürün hazırlığı (FNSKU etiketleme, paketleme, Amazon merkezine sevkiyat hazırlığı) konusunda /amazon-prep-uk sayfamızı inceleyebilirsiniz.",
          },
        },
      ],
    },
  ],
};

const fbmVsFba = [
  {
    label: "FBM — Fulfilled by Merchant",
    desc: "Ürünler sizin (veya LondraDepo gibi üçüncü taraf) deponuzda. Sipariş gelince siz (veya deponuz) karşılar.",
    pros: ["Depolama maliyeti kontrolünüz altında", "Ürün koşullarını siz belirlersiniz", "Amazon FBA kısıtlamalarına tabi değilsiniz"],
    highlight: true,
    cta: "LondraDepo FBM için",
  },
  {
    label: "FBA — Fulfilled by Amazon",
    desc: "Ürünler Amazon deposuna gönderilir. Sipariş gelince Amazon karşılar.",
    pros: ["Prime rozeti", "Amazon lojistik ağı", "İade Amazon tarafından yönetilir"],
    highlight: false,
    cta: "FBA hazırlığı için Amazon Prep UK →",
  },
];

const howItWorks = [
  { num: "01", icon: "📦", label: "Stok Gönder", desc: "Ürünlerinizi Essex depomuz adresine sevk edin." },
  { num: "02", icon: "✅", label: "Mal Kabul", desc: "Ürünler sayılır, kontrol edilir ve WMS'e kaydedilir." },
  { num: "03", icon: "🛒", label: "Amazon Siparişi", desc: "Amazon mağazanızdan müşteri sipariş verir." },
  { num: "04", icon: "🔍", label: "Toplanır", desc: "Depo ekibi siparişi stoktan toplar." },
  { num: "05", icon: "📦", label: "Paketlenir", desc: "Ürün uygun ambalajla paketlenir." },
  { num: "06", icon: "🚚", label: "Sevk Edilir", desc: "Sipariş UK müşterinize teslim edilir." },
];

const faqs = [
  {
    q: "FBM (Fulfilled by Merchant) nedir?",
    a: "FBM, Amazon satıcısının ürünlerini kendisinin (veya üçüncü taraf bir deponun) stokladığı ve sipariş geldiğinde bizzat sevk ettiği modeldir. LondraDepo, FBM modelinde üçüncü taraf depo hizmeti sunar.",
  },
  {
    q: "Amazon FBM için neden LondraDepo'yu kullanmalıyım?",
    a: "Amazon FBM'de ürünlerin UK'de stoklanması ve hızlı karşılanması gerekmektedir. LondraDepo, Essex depomuzdan pick & pack ve UK teslimat koordinasyonu sağlar. Kendi deponuzu kurmadan FBM operasyonu yürütmenize olanak tanır.",
  },
  {
    q: "LondraDepo Amazon'un resmi partneri mi?",
    a: "Hayır. LondraDepo, Amazon'un resmi partneri değildir. Amazon FBM modeliyle satış yapan işletmelere bağımsız depolama ve fulfillment desteği sunmaktayız.",
  },
  {
    q: "Amazon FBA hazırlığı da yapıyor musunuz?",
    a: "Evet. FBA için ürün hazırlığı (FNSKU etiketleme, paketleme, Amazon merkezine sevkiyat hazırlığı) için /amazon-prep-uk sayfamızı inceleyebilirsiniz.",
  },
  {
    q: "Amazon UK satıcısı olarak FBM performans gereksinimlerini karşılayabilir miyim?",
    a: "Amazon FBM için teslimat süresi ve performans gereksinimleri Amazon tarafından belirlenir. UK depomuzdan karşılama ile UK teslimat sürelerine uyum sağlanmasına katkıda bulunuruz; ancak nihai performans değerlendirmesi Amazon tarafından yapılır.",
  },
];

export default function AmazonIngiltereDepo() {
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
              <span className="text-white">Amazon İngiltere Depo (FBM)</span>
            </nav>
            <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-4">
              📦 Amazon FBM satıcıları için UK depo çözümü
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              Amazon İçin{" "}
              <span className="text-[#e63946]">İngiltere Depo</span>{" "}
              ve Sipariş Karşılama
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-4">
              Amazon FBM (Fulfilled by Merchant) modeliyle UK'de satış yapıyorsanız
              Essex depomuzdan sipariş karşılama hizmetinden yararlanın.
              Kendi deponuzu kurmadan Amazon UK operasyonu yürütün.
            </p>
            <p className="text-slate-400 text-sm mb-8">
              Not: LondraDepo, Amazon&apos;un resmi partneri değildir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
              >
                Amazon FBM Teklifi Al
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

        {/* FBM vs FBA */}
        <section className="py-16 px-4 bg-[#f6f8fb]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-2 text-center">
              FBM mi, FBA mı?
            </h2>
            <p className="text-slate-500 text-center text-sm mb-10">
              İki modeli karşılaştırın ve doğru tercihi yapın.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {fbmVsFba.map((item) => (
                <div
                  key={item.label}
                  className={`rounded-2xl p-6 border-2 ${item.highlight ? "border-[#0b2545] bg-white" : "border-slate-200 bg-white"}`}
                >
                  {item.highlight && (
                    <div className="inline-block bg-[#0b2545] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      LondraDepo bu modeli destekler
                    </div>
                  )}
                  <h3 className="font-bold text-[#0b2545] mb-2">{item.label}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.pros.map((pro) => (
                      <li key={pro} className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                  {!item.highlight && (
                    <Link
                      href="/amazon-prep-uk"
                      className="inline-block mt-4 text-sm text-[#e63946] font-semibold hover:underline"
                    >
                      {item.cta}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-10 text-center">
              FBM Sipariş Karşılama Süreci
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {howItWorks.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#0b2545] text-white flex flex-col items-center justify-center mb-2">
                    <span className="text-xs font-bold opacity-60">{step.num}</span>
                    <span className="text-lg leading-none">{step.icon}</span>
                  </div>
                  <h3 className="font-bold text-[#0b2545] text-sm mb-1">{step.label}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA dark */}
        <section className="py-16 px-4 bg-[#0b2545] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold mb-4">
              Amazon FBM Operasyonunuzu Başlatalım
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Ürünlerinizi depomuza gönderin. Amazon siparişleri geldiğinde
              depo ekibimiz karşılar.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
            >
              Hemen Teklif Al
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
                { href: "/amazon-fulfillment", label: "Amazon Fulfillment" },
                { href: "/amazon-prep-uk", label: "Amazon FBA Prep UK" },
                { href: "/ingiltere-depo", label: "İngiltere Depo" },
                { href: "/siparis-toplama-paketleme", label: "Pick & Pack" },
                { href: "/ingiltere-depo-fiyatlari", label: "Depo Fiyatları" },
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
