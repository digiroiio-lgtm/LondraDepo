import Emoji from "@/components/visual/Emoji";
import FaqJsonLd from "@/components/FaqJsonLd";
import TrClusterNav from "@/components/TrClusterNav";
import QuoteForm from "@/components/QuoteForm";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

import { SITE_URL } from "@/lib/site";
import { trAlternates } from "@/lib/i18n";
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20Shopify%20için%20İngiltere%20depo%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.";
const TEL = "tel:+447554195190";

export const metadata: Metadata = {
  title: "Shopify İngiltere Depo ve Fulfillment | LondraDepo",
  description:
    "Shopify için İngiltere fulfillment: stoğunuz Essex'te; siparişleri toplayıp paketliyor, UK müşterilerinize gönderiyor, iadeleri işliyoruz. Palet £3,50 + KDV/hafta'dan.",
  keywords: [
    "ingiltere shopify depo",
    "shopify sipariş karşılama ingiltere",
    "shopify uk depo",
    "shopify ingiltere stok",
    "shopify uk fulfillment",
    "shopify uk depolama",
    "ingiltere shopify lojistik",
    "shopify uk sipariş karşılama",
    "shopify uk mağaza depo",
    "shopify ingiltere operasyon",
  ],
  alternates: trAlternates("/shopify-ingiltere-depo"),
  openGraph: {
    title: "Shopify İçin İngiltere Depo | LondraDepo",
    description: "Shopify UK depo ve sipariş karşılama. Ürün depolama, pick & pack, UK teslimat.",
    url: `${SITE_URL}/shopify-ingiltere-depo`,
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
        { "@type": "ListItem", position: 2, name: "Shopify İngiltere Depo", item: `${SITE_URL}/shopify-ingiltere-depo` },
      ],
    },
    {
      "@type": "Service",
      name: "Shopify İçin İngiltere Depo ve Sipariş Karşılama",
      provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
      serviceType: "Shopify Warehousing and Fulfilment",
      description:
        "Shopify mağazaları için İngiltere'de stok depolama ve sipariş karşılama. Ürünler Essex depomuzda; sipariş geldiğinde depo ekibi pick, pack ve sevk eder.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/shopify-ingiltere-depo`,
    },
  ],
};

const howItWorks = [
  { num: "01", icon: "📦", label: "Stok Gönder", desc: "Ürünlerinizi Essex depomuz adresine sevk edin." },
  { num: "02", icon: "✅", label: "Mal Kabul", desc: "Ürünler sayılır, kontrol edilir ve WMS'e kaydedilir." },
  { num: "03", icon: "🛒", label: "Sipariş Gelir", desc: "Shopify mağazanızdan UK müşteriniz sipariş verir." },
  { num: "04", icon: "🔍", label: "Toplanır", desc: "Depo ekibi siparişi stoktan toplar." },
  { num: "05", icon: "📦", label: "Paketlenir", desc: "Ürün uygun ambalajla paketlenir." },
  { num: "06", icon: "🚚", label: "Sevk Edilir", desc: "Sipariş UK müşterinize teslim edilir." },
];

const benefits = [
  "Kendi UK deponuzu kurmadan Shopify üzerinden satış yapın.",
  "Essex depomuz Londra'ya yakın, UK lojistik ağına entegre konumda.",
  "Stok takibi Mintsoft WMS üzerinden yapılır.",
  "Sipariş geldiğinde pick, pack ve sevk depo ekibimizce yönetilir.",
  "UK geneline teslimat koordinasyonu sağlanır.",
  "İade yönetimi hizmeti dahildir.",
];

const faqs = [
  {
    q: "Shopify mağazam için İngiltere'de depo bulabilir miyim?",
    a: "Evet. LondraDepo, Shopify üzerinden satış yapan işletmeler için Essex'te stok depolama ve sipariş karşılama hizmeti sunmaktadır. Sipariş geldiğinde depo ekibimiz ürünü toplar, paketler ve UK müşterinize sevk eder.",
  },
  {
    q: "LondraDepo Shopify'ın resmi partneri mi?",
    a: "Hayır. LondraDepo, Shopify'ın resmi partneri değildir. Shopify üzerinden satış yapan işletmelere fulfillment ve depolama desteği sunmaktayız.",
  },
  {
    q: "Shopify siparişleri otomatik olarak mı işleniyor?",
    a: "Sipariş aktarma süreci ve entegrasyon seçenekleri hakkında bizimle görüşmenizi öneririz. Operasyonel süreci birlikte planlıyoruz.",
  },
  {
    q: "UK Shopify deposu ne kadar tutar?",
    a: "Depolama palet başına haftalık £3,50 + KDV'den başlar. Mal kabul, pick & pack, kargo ve iade; ürün ölçünüze ve aylık sipariş hacminize göre ayrıca fiyatlandırılır.",
  },
  {
    q: "Shopify ve Amazon siparişlerini aynı stoktan karşılayabilir misiniz?",
    a: "Evet. Aynı UK stoğu Shopify siparişlerine, Amazon FBA hazırlığına veya FBM siparişlerine ve toptan palet siparişlerine hizmet verebilir; her kanal için ayrı depo gerekmez.",
  },
  {
    q: "Shopify mağazam Türkiye'de kayıtlı, UK'e satış yapabilir miyim?",
    a: "Evet, Türkiye'de kayıtlı Shopify mağazanızla UK pazarına satış yapabilirsiniz. Ürünlerinizi depomuzda stoklamanız ve UK'ye ürün ithalatı için gümrük gerekliliklerini yerine getirmeniz gerekir.",
  },
];

export default function ShopifyIngiltereDepo() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <FaqJsonLd faqs={faqs} />
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0b2545] via-[#1e3a5f] to-[#0b2545] text-white py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition">Ana Sayfa</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Shopify İngiltere Depo</span>
            </nav>
            <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-4">
              <Emoji e="🛍️" /> Shopify mağazanız var, İngiltere'de stok tutmak istiyorsunuz
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              Shopify İçin{" "}
              <span className="text-[#d62839]">İngiltere Depo</span>{" "}
              ve Sipariş Karşılama
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-4">
              Shopify için İngiltere fulfillment, stoğunuzun bir UK deposunda tutulup Shopify siparişlerinizin sizin yerinize
              gönderilmesidir. LondraDepo bunu Rayleigh, Essex&apos;ten yapar: ürünlerinizi teslim alıp depolar, her siparişi toplar,
              paketler, UK müşterinize gönderir ve iadeleri işler. Depolama palet başına haftalık £3,50 + KDV&apos;den başlar.
            </p>
            <p className="text-slate-400 text-sm mb-8">
              Not: LondraDepo, Shopify&apos;ın resmi partneri değildir.
              Shopify üzerinden satış yapan işletmelere depolama ve fulfillment desteği sunmaktayız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#d62839] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
              >
                Shopify Depo Teklifi Al
              </a>
              <a
                href={TEL}
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full transition"
              >
                Hemen Ara
              </a>
              <a
                href="#teklif"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0b2545] hover:bg-slate-100 font-bold px-8 py-4 rounded-full transition"
              >
                Online Teklif Formu
              </a>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 px-4 bg-[#f6f8fb]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-2 text-center">
              Shopify Sipariş Karşılama Süreci
            </h2>
            <p className="text-slate-500 text-center text-sm mb-10">
              Stok göndermekten teslimatına kadar her aşama.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {howItWorks.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#0b2545] text-white flex flex-col items-center justify-center mb-2">
                    <span className="text-xs font-bold opacity-60">{step.num}</span>
                    <span className="text-lg leading-none"><Emoji e={step.icon} /></span>
                  </div>
                  <h3 className="font-bold text-[#0b2545] text-sm mb-1">{step.label}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-8">Neden LondraDepo?</h2>
            <ul className="space-y-4">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA dark */}
        {/* Cost + location + proof */}
        <section className="py-16 px-4 bg-[#f6f8fb]">
          <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-3">Shopify fulfillment İngiltere&apos;de ne kadar tutar?</h2>
              <p className="text-slate-600 mb-4">Yayımlanmış tek fiyat depolamadır; diğer kalemler ürününüze ve sipariş yapınıza göre tekliflendirilir.</p>
              <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-100 text-[#0b2545]">
                    <tr><th scope="col" className="px-4 py-3">Kalem</th><th scope="col" className="px-4 py-3">LondraDepo&apos;da fiyatlandırma</th></tr>
                  </thead>
                  <tbody>
                    {[
                      ["Depolama", "Palet başına haftalık £3,50 + KDV'den (10 palet 4 hafta: £140 + KDV)"],
                      ["Mal kabul", "Teslimat başına: palet, koli veya konteyner boşaltma"],
                      ["Pick & pack", "Sipariş ve ürün başına, ölçü ve ambalaja göre"],
                      ["UK kargo", "Paket ölçüsü, ağırlığı ve servis seviyesine göre"],
                      ["İade", "İade edilen ürün başına"],
                    ].map((r) => (
                      <tr key={r[0]} className="border-t border-slate-200">
                        <th scope="row" className="px-4 py-3 font-medium text-slate-800">{r[0]}</th>
                        <td className="px-4 py-3 text-slate-700">{r[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Depolamayı hesaplayın: <Link href="/ingiltere-depo-maliyet-hesaplama" className="underline">Depo Maliyet Hesaplama</Link>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-3">Neden Shopify siparişlerini Essex&apos;ten göndermeli?</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Rayleigh, DP World London Gateway&apos;e 13 mil, Tilbury Limanı&apos;na 16 mil ve Londra merkezine 37 mil uzaklıktadır; A127 ve
                M25 bağlantılıdır. İthal stok depoya kısa sürede ulaşır, paketler Londra ve Güneydoğu&apos;ya hizmet veren UK kargo ağlarıyla çıkar.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                İngiltere&apos;de alışveriş büyük ölçüde online: Office for National Statistics&apos;e göre 2026&apos;da perakende satışların yaklaşık %28&apos;i
                internetten yapıldı (
                <a href="https://www.ons.gov.uk/businessindustryandtrade/retailindustry/timeseries/j4mc" target="_blank" rel="noopener noreferrer" className="underline">ONS, J4MC</a>
                ). Stoğu UK&apos;de tutmak, Shopify mağazanıza yurt içi teslimat süreleri ve kolay iade sunma imkânı verir.
              </p>
              <Link href="/case-studies/cruyff-uk-fulfillment" className="block bg-white border border-slate-200 rounded-2xl p-5 hover:border-[#0b2545] transition">
                <span className="text-xs font-semibold text-[#d62839]">Operasyon örneği</span>
                <span className="block font-bold text-[#0b2545] mt-1">Cruyff: İngiltere moda fulfillment</span>
                <span className="block text-slate-600 text-sm mt-1">Hollanda&apos;dan İngiltere&apos;ye geçiş; depolama, repackaging ve e-ticaret fulfillment, UK içi 2 gün teslimat.</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-[#0b2545] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold mb-4">
              Shopify UK Operasyonunuzu Başlatalım
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Ürünlerinizi göndermeniz yeterli. Geri kalanını depomuz halleder.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#d62839] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
            >
              Hemen Teklif Al
            </a>
          </div>
        </section>

        {/* Search intent coverage: Shopify volume and fulfillment costs */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-5">Shopify İçin 100 veya 200 Siparişlik UK Fulfillment Planı</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Aylık 100 veya 200 sipariş, tek başına sabit bir fulfillment fiyatı belirlemez.
              Ürün boyutu, SKU sayısı, ortalama sipariş başına ürün adedi, depolanan palet veya koli miktarı,
              paketleme ihtiyacı, iade oranı ve teslimat bölgeleri birlikte değerlendirilir.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Siparişler için stok kabulü, stok görünürlüğü, sipariş aktarımı, pick &amp; pack ve UK içi kargo
              adımlarını planlarız. Shopify entegrasyonunun otomasyon kapsamı teklif öncesinde doğrulanır;
              otomatik bağlantı veya belirli teslimat süresi taahhüdü verilmez.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Standart palet depolama haftalık £3,50 + KDV'den başlar; sipariş toplama, paketleme,
              mal kabul, iade ve kargo ayrıca tekliflendirilir. Hacim bazlı teklif için aylık sipariş adedini,
              SKU sayısını ve ürün özelliklerini paylaşın.
            </p>
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
                { href: "/ingiltere-e-ticaret-lojistigi", label: "E-Ticaret Lojistiği" },
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
        <QuoteForm
          formId="tr_shopify_quote"
          heading="Shopify Fulfillment Teklifi Alın"
          intro="Aylık sipariş sayınızı, ürün (SKU) sayınızı ve ürün ölçülerinizi yazın; depolama, pick & pack ve UK kargoyu operasyonunuza göre fiyatlandıralım."
          presetServices={["E-Ticaret Fulfillment", "Pick & Pack"]}
        />
        <TrClusterNav path="/shopify-ingiltere-depo" />
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
