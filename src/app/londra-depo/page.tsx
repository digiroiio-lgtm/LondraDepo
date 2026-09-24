import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20Londra%20depo%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.";
const TEL = "tel:+447554195190";

export const metadata: Metadata = {
  title: "Londra Depo Hizmeti | Londra Depolama | LondraDepo.com",
  description:
    "Londra yakınında depo hizmeti. Essex'teki UK depomuza ürünlerinizi gönderin, depolama, stok yönetimi ve sipariş karşılama hizmeti alın. İngiltere'de kendi deponuzu kurmadan operasyon yürütün.",
  keywords: [
    "londra depo",
    "londra depo hizmeti",
    "londra depolama",
    "londra ürün depolama",
    "ingiltere depo",
    "uk depo",
    "londra lojistik",
    "londra fulfillment",
    "essex depo",
    "londra yakını depo",
    "uk depolama hizmeti",
    "londra sipariş karşılama",
  ],
  alternates: { canonical: `${SITE_URL}/londra-depo` },
  openGraph: {
    title: "Londra Depo Hizmeti | LondraDepo.com",
    description: "Londra yakını Essex depomuzda ürün depolama, stok yönetimi ve sipariş karşılama.",
    url: `${SITE_URL}/londra-depo`,
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
        { "@type": "ListItem", position: 2, name: "Londra Depo", item: `${SITE_URL}/londra-depo` },
      ],
    },
    {
      "@type": "Service",
      name: "Londra Depo ve Depolama Hizmeti",
      provider: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      serviceType: "Warehousing",
      description:
        "Londra yakını Essex depomuzda ürün depolama, mal kabul, stok yönetimi, pick & pack ve UK geneli sipariş karşılama hizmeti.",
      areaServed: [
        { "@type": "City", name: "London" },
        { "@type": "Country", name: "United Kingdom" },
      ],
      url: `${SITE_URL}/londra-depo`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Londra'da depo hizmeti alabilir miyim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Depomuz Londra'ya yakın Essex'te yer almaktadır. Londra'ya olan mesafesi yaklaşık 40-50 km olup UK lojistik ağına tam entegredir. Ürünlerinizi depomuzda saklayabilir, stok takibini yapabilir ve siparişlerinizi UK geneline karşılayabilirsiniz.",
          },
        },
        {
          "@type": "Question",
          name: "Depo konumu nerede?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depo adresimiz: Arterial Park, Arterial Road, Rayleigh, Essex. Bu konum Londra'ya yakın olmakla birlikte UK lojistik güzergahlarına uygun, ulaşımı kolay bir noktadadır.",
          },
        },
        {
          "@type": "Question",
          name: "Londra deposuna ürünlerimi nasıl gönderebilirim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ürünlerinizi Türkiye'den veya başka bir ülkeden depo adresimize sevk edebilirsiniz. Gümrükleme sürecinde koordinasyon desteği de sunmaktayız. Ürünler depoya ulaştığında mal kabul, sayım ve sisteme giriş işlemleri gerçekleştirilir.",
          },
        },
        {
          "@type": "Question",
          name: "Depoda hangi hizmetler sunuluyor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mal kabul, palet depolama, koli depolama, stok yönetimi (Mintsoft WMS), pick & pack, kargo etiketleme ve UK geneli sipariş karşılama hizmetleri sunulmaktadır.",
          },
        },
        {
          "@type": "Question",
          name: "Londra depo hizmeti için teklif nasıl alınır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WhatsApp veya telefon üzerinden bize ulaşabilirsiniz. Ürün türü, hacim, tahmini palet/koli sayısı ve ihtiyaç duyduğunuz hizmetler hakkında bilgi vererek fiyat teklifi alabilirsiniz.",
          },
        },
      ],
    },
  ],
};

const services = [
  { icon: "📦", title: "Mal Kabul", desc: "Gelen sevkiyatın sayılması, kontrolü ve depoya alınması." },
  { icon: "🏗️", title: "Palet Depolama", desc: "Paletli ürünlerin güvenli uzun/kısa süreli depolanması." },
  { icon: "📫", title: "Koli Depolama", desc: "Kolili ürünler için esnek depolama seçeneği." },
  { icon: "📊", title: "Stok Yönetimi", desc: "Mintsoft WMS ile anlık stok takibi ve raporlama." },
  { icon: "🔍", title: "Pick & Pack", desc: "Sipariş geldiğinde ürün toplama ve paketleme." },
  { icon: "🚚", title: "UK Dağıtım", desc: "İngiltere geneline sipariş karşılama ve teslimat." },
];

const whoWeServe = [
  { icon: "🏭", title: "Üreticiler", desc: "Türkiye'den UK pazarına ürün gönderen üreticiler." },
  { icon: "🛍️", title: "E-Ticaret Markaları", desc: "Shopify, Amazon ve diğer kanallardan UK'de satış yapanlar." },
  { icon: "📦", title: "Amazon Satıcıları", desc: "FBM modeliyle Amazon UK'de satan işletmeler." },
  { icon: "🏢", title: "Toptancılar", desc: "UK'deki toptan müşterilere sevkiyat yapanlar." },
  { icon: "🌍", title: "İthalatçılar", desc: "Yurt dışından UK'e ürün ithal eden şirketler." },
  { icon: "🛒", title: "Shopify Mağazaları", desc: "Shopify üzerinden UK müşterilerine satış yapanlar." },
];

const faqs = [
  {
    q: "Londra'da depo hizmeti alabilir miyim?",
    a: "Evet. Depomuz Londra'ya yakın Essex'te yer almaktadır. Londra'ya olan mesafesi yaklaşık 40-50 km olup UK lojistik ağına tam entegredir. Ürünlerinizi depomuzda saklayabilir ve siparişlerinizi UK geneline karşılayabilirsiniz.",
  },
  {
    q: "Depo konumu nerede?",
    a: "Depo adresimiz: Arterial Park, Arterial Road, Rayleigh, Essex. Bu konum Londra'ya yakın olmakla birlikte UK lojistik güzergahlarına uygun, ulaşımı kolay bir noktadadır.",
  },
  {
    q: "Londra deposuna ürünlerimi nasıl gönderebilirim?",
    a: "Ürünlerinizi Türkiye'den veya başka bir ülkeden depo adresimize sevk edebilirsiniz. Gümrükleme sürecinde koordinasyon desteği de sunmaktayız. Ürünler depoya ulaştığında mal kabul, sayım ve sisteme giriş işlemleri gerçekleştirilir.",
  },
  {
    q: "Depoda hangi hizmetler sunuluyor?",
    a: "Mal kabul, palet depolama, koli depolama, stok yönetimi, pick & pack, kargo etiketleme ve UK geneli sipariş karşılama hizmetleri sunulmaktadır.",
  },
  {
    q: "Londra depo hizmeti için teklif nasıl alınır?",
    a: "WhatsApp veya telefon üzerinden bize ulaşabilirsiniz. Ürün türü, hacim, tahmini palet/koli sayısı ve ihtiyaç duyduğunuz hizmetler hakkında bilgi vererek fiyat teklifi alabilirsiniz.",
  },
];

export default function LondraDepoPage() {
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
              <span className="text-white">Londra Depo</span>
            </nav>
            <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-4">
              📍 Londra yakını Essex, İngiltere
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              Londra Depo ve{" "}
              <span className="text-[#e63946]">Ürün Depolama</span>{" "}
              Hizmeti
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-4">
              Londra'ya yakın Essex depomuzda ürünlerinizi güvenle saklayın.
              Kendi UK deponuzu kurmadan stok yönetimi, sipariş karşılama ve
              İngiltere geneli dağıtım hizmetinden yararlanın.
            </p>
            <p className="text-slate-400 text-sm mb-8">
              Depo konumu: Arterial Park, Arterial Road, Rayleigh, Essex
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
              >
                Depo Teklifi Al
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

        {/* Location note */}
        <section className="py-10 px-4 bg-[#f6f8fb]">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 items-start">
              <div className="text-3xl">🗺️</div>
              <div>
                <h2 className="font-bold text-[#0b2545] mb-1">Essex, Londra'ya Yakın İngiltere Deposu</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Depomuz Londra'ya yaklaşık 40-50 km uzaklıkta Essex'te yer almaktadır.
                  Londra merkezli olmamasına karşın UK'nin ana lojistik güzergahlarına uygun
                  konumda olup Londra ve tüm İngiltere'ye teslimat yapılabilmektedir.
                  "Londra Depo" veya "İngiltere Depo" aramanızdan buraya geldiyseniz,
                  ihtiyacınız olan hizmeti sunuyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-2 text-center">
              Londra Depo Hizmetleri
            </h2>
            <p className="text-slate-500 text-center mb-8 text-sm">
              Ürünleriniz Essex depomuzda güvende — her hizmet tek çatı altında.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <div key={s.title} className="border border-slate-200 rounded-2xl p-5 hover:border-[#0b2545] transition">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <h3 className="font-bold text-[#0b2545] mb-1">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who we serve */}
        <section className="py-16 px-4 bg-[#f6f8fb]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-8 text-center">
              Kimler İçin Çalışıyoruz?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whoWeServe.map((w) => (
                <div key={w.title} className="bg-white border border-slate-200 rounded-2xl p-5">
                  <div className="text-2xl mb-2">{w.icon}</div>
                  <h3 className="font-bold text-[#0b2545] mb-1">{w.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value prop */}
        <section className="py-16 px-4 bg-[#0b2545] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold mb-4">
              Kendi UK Deponuzu Kurmadan Satış Yapın
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              İngiltere'de şirket kurmak, depo kiralamak veya personel istihdam etmek zorunda
              değilsiniz. Ürünlerinizi depomuzda saklayın, geri kalanını biz halledelim.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 text-left">
              {[
                { icon: "✅", text: "Mal kabul ve depolama" },
                { icon: "✅", text: "Stok takibi (Mintsoft WMS)" },
                { icon: "✅", text: "Sipariş toplama (pick)" },
                { icon: "✅", text: "Paketleme (pack)" },
                { icon: "✅", text: "Kargo etiketleme" },
                { icon: "✅", text: "UK geneli dağıtım" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-slate-200 text-sm">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
            >
              Londra Depo Teklifi Al
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
            <h2 className="text-lg font-bold text-[#0b2545] mb-4">İlgili Hizmetler</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/ingiltere-depo", label: "İngiltere Depo" },
                { href: "/depolama", label: "Depolama Hizmeti" },
                { href: "/palet-depolama", label: "Palet Depolama" },
                { href: "/gumrukleme", label: "Gümrükleme Desteği" },
                { href: "/e-ticaret-fulfillment", label: "E-Ticaret Fulfillment" },
                { href: "/essex-depo", label: "Essex Depo" },
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
