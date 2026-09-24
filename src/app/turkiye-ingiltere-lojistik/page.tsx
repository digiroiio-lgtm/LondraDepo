import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20Türkiye%20İngiltere%20lojistik%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.";
const TEL = "tel:+447554195190";

export const metadata: Metadata = {
  title: "Türkiye'den İngiltere'ye Lojistik | UK Ürün Gönderimi | LondraDepo.com",
  description:
    "Türkiye'den İngiltere'ye lojistik ve ürün gönderimi. UK gümrük desteği, depolama ve sipariş karşılama. Türkiye'den UK'e ihracat yapan işletmeler için lojistik rehberi.",
  keywords: [
    "türkiye ingiltere lojistik",
    "türkiyeden ingiltereye ürün gönderme",
    "türkiye uk lojistik",
    "ingiltereye ürün gönderme",
    "türkiyeden ingiltereye ihracat",
    "türkiye ingiltere kargo",
    "türkiyeden ingiltereye mal gönderme",
    "uk türkiye lojistik",
    "ingiltere ithalat türkiye",
    "türkiye uk ihracat lojistik",
  ],
  alternates: { canonical: `${SITE_URL}/turkiye-ingiltere-lojistik` },
  openGraph: {
    title: "Türkiye'den İngiltere'ye Lojistik | LondraDepo.com",
    description: "TR → UK lojistik zinciri: gönderim, gümrük, depolama, fulfillment.",
    url: `${SITE_URL}/turkiye-ingiltere-lojistik`,
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
        { "@type": "ListItem", position: 2, name: "Türkiye'den İngiltere'ye Lojistik", item: `${SITE_URL}/turkiye-ingiltere-lojistik` },
      ],
    },
    {
      "@type": "Service",
      name: "Türkiye'den İngiltere'ye Lojistik ve Depolama",
      provider: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      serviceType: "International Logistics Support",
      description:
        "Türkiye'den İngiltere'ye lojistik zinciri: gümrükleme koordinasyonu, UK depolama, stok yönetimi ve sipariş karşılama. LondraDepo UK gümrük sonrası aşamayı yönetir.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/turkiye-ingiltere-lojistik`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Türkiye'den İngiltere'ye ürün nasıl gönderilir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Türkiye'den UK'e ürün göndermek için uluslararası bir taşıyıcı (kargo firması veya nakliyeci) ile çalışmanız gerekir. LondraDepo uluslararası taşımacılık hizmeti vermez; ancak ürünleriniz UK'ye ulaştığında gümrükleme koordinasyonu, depoya alınma, stok yönetimi ve sipariş karşılama süreçlerini yönetiriz.",
          },
        },
        {
          "@type": "Question",
          name: "LondraDepo Türkiye'den İngiltere'ye nakliye yapıyor mu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hayır, LondraDepo Türkiye'den İngiltere'ye uluslararası nakliye hizmeti sunmamaktadır. Ürünlerinizin UK'ye taşınması için uluslararası bir taşıyıcı ile çalışmanız gerekir. LondraDepo'nun hizmet alanı, ürünlerin UK'ye varışından sonra başlar: gümrükleme koordinasyonu, mal kabul, depolama, sipariş karşılama ve UK dağıtımı.",
          },
        },
        {
          "@type": "Question",
          name: "UK gümrüğünde ürünlerimi kim geçirir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UK gümrük beyanı lisanslı gümrükçüler tarafından yapılır. LondraDepo gümrükleme sürecinde koordinasyon ve yönlendirme desteği sağlar; doğrudan gümrük beyanı yapmaz. Gümrük sonrasında ürünler depomuzda teslim alınır.",
          },
        },
      ],
    },
  ],
};

const supplyChain = [
  {
    num: "01",
    label: "Türkiye'den Gönderin",
    desc: "Uluslararası taşıyıcı veya nakliyeci ile UK'ye sevkiyatı başlatın.",
    scope: "Sizin sorumluluğunuz",
    color: "bg-slate-200 text-slate-700",
  },
  {
    num: "02",
    label: "UK Gümrüğü",
    desc: "UK ithalat gümrüğü. LondraDepo koordinasyon desteği sağlar.",
    scope: "LondraDepo koordinasyon desteği",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    num: "03",
    label: "Depoya Alınır",
    desc: "Gümrükten çıkan ürünler Essex depomuzda teslim alınır, sayılır, WMS'e kaydedilir.",
    scope: "LondraDepo hizmeti",
    color: "bg-green-100 text-green-800",
  },
  {
    num: "04",
    label: "Stoklanır",
    desc: "Ürünler Mintsoft WMS üzerinde takip edilerek güvenli şekilde depolanır.",
    scope: "LondraDepo hizmeti",
    color: "bg-green-100 text-green-800",
  },
  {
    num: "05",
    label: "Sipariş Gelir",
    desc: "Shopify, Amazon veya toptan kanalınızdan UK müşterisi sipariş verir.",
    scope: "LondraDepo hizmeti",
    color: "bg-green-100 text-green-800",
  },
  {
    num: "06",
    label: "Karşılanır",
    desc: "Depo ekibi siparişi toplar, paketler, etiketler ve UK'de teslim eder.",
    scope: "LondraDepo hizmeti",
    color: "bg-green-100 text-green-800",
  },
];

const londradepoScope = [
  { icon: "📥", title: "Gümrük→Depo Koordinasyonu", desc: "Gümrükten çıkan ürünlerin depoya alınması ve süreç yönetimi." },
  { icon: "🏗️", title: "Mal Kabul", desc: "Gelen sevkiyatın sayılması, kontrolü ve sisteme kaydedilmesi." },
  { icon: "📦", title: "Depolama", desc: "Palet ve koli bazında güvenli depolama." },
  { icon: "📊", title: "Stok Yönetimi", desc: "Mintsoft WMS ile anlık stok takibi." },
  { icon: "🔍", title: "Pick & Pack", desc: "Sipariş toplama ve paketleme operasyonu." },
  { icon: "🚚", title: "UK Dağıtım", desc: "İngiltere geneli sipariş karşılama ve teslimat koordinasyonu." },
];

const faqs = [
  {
    q: "Türkiye'den İngiltere'ye ürün nasıl gönderilir?",
    a: "Türkiye'den UK'e ürün göndermek için uluslararası bir taşıyıcı (kargo firması veya nakliyeci) ile çalışmanız gerekir. LondraDepo uluslararası taşımacılık hizmeti vermez; ancak ürünleriniz UK'ye ulaştığında gümrükleme koordinasyonu, depoya alınma, stok yönetimi ve sipariş karşılama süreçlerini yönetiriz.",
  },
  {
    q: "LondraDepo Türkiye'den İngiltere'ye nakliye yapıyor mu?",
    a: "Hayır. LondraDepo'nun hizmet alanı, ürünlerin UK'ye varışından sonra başlar: gümrükleme koordinasyonu, mal kabul, depolama, sipariş karşılama ve UK dağıtımı. Uluslararası nakliye için bir taşıyıcı firmayla çalışmanız gerekir.",
  },
  {
    q: "UK gümrüğünde ürünlerimi kim geçirir?",
    a: "UK gümrük beyanı lisanslı gümrükçüler tarafından yapılır. LondraDepo gümrükleme sürecinde koordinasyon ve yönlendirme desteği sağlar; doğrudan gümrük beyanı yapmaz. Gümrük sonrasında ürünler depomuzda teslim alınır.",
  },
  {
    q: "UK ithalatı için hangi belgeler gerekiyor?",
    a: "UK ithalatı için genellikle: ticari fatura (commercial invoice), konşimento veya taşıma belgesi, ambalaj listesi (packing list) ve ürüne bağlı olarak ek belgeler gerekebilir. Bu konuda gümrük uzmanınızdan veya taşıyıcınızdan destek almanızı öneririz.",
  },
];

export default function TurkiyeIngiltere() {
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
              <span className="text-white">Türkiye'den İngiltere'ye Lojistik</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              Türkiye&apos;den İngiltere&apos;ye{" "}
              <span className="text-[#e63946]">Lojistik</span>{" "}
              ve Ürün Gönderimi
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-4">
              Türkiye'den UK'e ürün sevkiyatı, gümrükleme ve depolama sürecini anlayın.
              LondraDepo, ürünleriniz UK'ye ulaştıktan sonra gümrük koordinasyonundan
              sipariş karşılamaya kadar tüm aşamayı yönetir.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-8 text-sm text-slate-300 max-w-2xl">
              <strong className="text-white">Önemli:</strong> LondraDepo uluslararası nakliye
              (Türkiye → UK kargo) hizmeti sunmamaktadır. Hizmet alanımız ürünlerinizin
              UK'ye varmasından sonra başlar.
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
              >
                UK Deposu Hakkında Bilgi Al
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

        {/* Supply chain */}
        <section className="py-16 px-4 bg-[#f6f8fb]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-2 text-center">
              Türkiye → UK Tedarik Zinciri
            </h2>
            <p className="text-slate-500 text-center text-sm mb-10">
              LondraDepo&apos;nun hangi aşamada devreye girdiğini görün.
            </p>
            <div className="space-y-3">
              {supplyChain.map((step) => (
                <div key={step.num} className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0b2545] text-white flex items-center justify-center font-extrabold text-sm flex-shrink-0">
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                      <h3 className="font-bold text-[#0b2545] text-sm">{step.label}</h3>
                      <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${step.color}`}>
                        {step.scope}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LondraDepo scope */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-8 text-center">
              LondraDepo&apos;nun Hizmet Kapsamı
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {londradepoScope.map((s) => (
                <div key={s.title} className="border border-slate-200 rounded-2xl p-5">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <h3 className="font-bold text-[#0b2545] mb-1">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA dark */}
        <section className="py-16 px-4 bg-[#0b2545] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold mb-4">
              Ürünleriniz UK&apos;ye Ulaştığında Biz Devralıyoruz
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Gümrükten çıkıştan sipariş karşılamaya — UK operasyonunuzu
              Essex depomuzdan yönetiyoruz.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
            >
              Teklif Al
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
                { href: "/turkiyeden-ingiltereye-depolama", label: "Türkiye'den İngiltere'ye Depolama" },
                { href: "/turkiyeden-ingiltereye-satis", label: "İngiltere'de Nasıl Satış Yapılır?" },
                { href: "/gumrukleme", label: "Gümrükleme Desteği" },
                { href: "/ingiltere-depo", label: "İngiltere Depo" },
                { href: "/turk-sirketleri-icin-ingiltere-depo", label: "Türk Şirketleri İçin" },
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
