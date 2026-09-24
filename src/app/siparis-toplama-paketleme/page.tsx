import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20sipariş%20toplama%20ve%20paketleme%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.";
const TEL = "tel:+447554195190";

export const metadata: Metadata = {
  title: "Sipariş Toplama ve Paketleme (Pick & Pack) İngiltere | LondraDepo.com",
  description:
    "İngiltere'de sipariş toplama ve paketleme hizmeti. Pick & pack, kargo etiketleme ve UK sevkiyat. Online mağaza siparişleriniz için depo operasyonu.",
  keywords: [
    "ingiltere pick and pack",
    "sipariş toplama paketleme",
    "sipariş toplama hizmeti",
    "paketleme hizmeti ingiltere",
    "uk pick pack",
    "ingiltere sipariş hazırlama",
    "kargo etiketleme uk",
    "pick pack ingiltere",
    "online sipariş hazırlama",
    "uk depo pick pack",
    "ingiltere fulfillment pick pack",
  ],
  alternates: { canonical: `${SITE_URL}/siparis-toplama-paketleme` },
  openGraph: {
    title: "Sipariş Toplama ve Paketleme (Pick & Pack) | LondraDepo.com",
    description: "UK'de sipariş toplama ve paketleme. Pick & pack, kargo etiketleme, sevkiyat.",
    url: `${SITE_URL}/siparis-toplama-paketleme`,
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
        { "@type": "ListItem", position: 2, name: "Sipariş Toplama ve Paketleme", item: `${SITE_URL}/siparis-toplama-paketleme` },
      ],
    },
    {
      "@type": "Service",
      name: "Sipariş Toplama ve Paketleme (Pick & Pack) Hizmeti",
      provider: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      serviceType: "Pick and Pack Fulfilment",
      description:
        "İngiltere'de sipariş toplama ve paketleme (pick & pack) hizmeti. Online mağaza siparişleri için stoktan ürün toplama, paketleme, kargo etiketleme ve sevkiyat.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/siparis-toplama-paketleme`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Pick & Pack nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pick & Pack, bir sipariş geldiğinde depo raflarından ilgili ürünlerin toplanması (pick) ve ardından paketlenerek kargoya hazır hale getirilmesi (pack) sürecinin tamamıdır.",
          },
        },
        {
          "@type": "Question",
          name: "İngiltere'de pick & pack hizmeti nasıl çalışır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ürünleriniz Essex depomuzda stoklanır. Online mağazanızdan sipariş geldiğinde depo yönetim sistemimize (Mintsoft WMS) aktarılır. Ekibimiz siparişi depoda toplar, uygun ambalaj ile paketler, kargo etiketi oluşturur ve müşteriye sevk eder.",
          },
        },
        {
          "@type": "Question",
          name: "Hangi tür ürünler için pick & pack yapılır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kolili, paletli veya bireysel ürünler için sipariş toplama ve paketleme yapılabilir. Tekstil, elektronik aksesuarlar, ev ürünleri, kozmetik ve benzeri ürünler için hizmet sunmaktayız. Büyük endüstriyel ekipmanlar veya tehlikeli maddeler için iletişime geçin.",
          },
        },
        {
          "@type": "Question",
          name: "Paketleme malzemesi kim sağlar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Paketleme malzemeleri (koli, bant, köpük, bubble wrap vb.) için seçenekleri görüşmek üzere bizimle iletişime geçin. Bazı müşteriler kendi markalı ambalajlarını depoya gönderir.",
          },
        },
        {
          "@type": "Question",
          name: "Sipariş başına pick & pack ücreti nasıl hesaplanır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ücretlendirme sipariş hacmi, ürün türü ve paketleme gereksinimlerine göre belirlenir. Sabit fiyat listesi yayınlamıyoruz; WhatsApp üzerinden bize ulaşarak özel teklif alabilirsiniz.",
          },
        },
      ],
    },
  ],
};

const steps = [
  {
    num: "01",
    label: "Sipariş Alınır",
    desc: "Online mağazanızdan müşteri siparişi gelir.",
    icon: "🛒",
  },
  {
    num: "02",
    label: "WMS'e Girer",
    desc: "Sipariş Mintsoft depo yönetim sistemine aktarılır.",
    icon: "💻",
  },
  {
    num: "03",
    label: "Toplanır (Pick)",
    desc: "Depo ekibi siparişteki ürünleri raftan toplar.",
    icon: "🔍",
  },
  {
    num: "04",
    label: "Paketlenir (Pack)",
    desc: "Ürün sevkiyata uygun ambalajla paketlenir.",
    icon: "📦",
  },
  {
    num: "05",
    label: "Etiketlenir",
    desc: "Kargo etiketi oluşturulur ve kutuya yapıştırılır.",
    icon: "🏷️",
  },
  {
    num: "06",
    label: "Sevk Edilir",
    desc: "Sipariş müşteriye teslim edilmek üzere kargoya verilir.",
    icon: "🚚",
  },
];

const included = [
  { icon: "🔍", title: "Sipariş Toplama", desc: "Depoda birden fazla ürün içeren siparişlerde her kalem doğru şekilde toplanır." },
  { icon: "📦", title: "Paketleme", desc: "Ürün türüne göre uygun ambalaj seçilerek güvenli paketleme yapılır." },
  { icon: "🏷️", title: "Kargo Etiketleme", desc: "Sevkiyat etiketi oluşturulur, barkod ve adres bilgileri yapıştırılır." },
  { icon: "✅", title: "Sipariş Kontrolü", desc: "Paketleme öncesinde sipariş içeriği doğrulanır." },
  { icon: "↩️", title: "İade İşleme", desc: "Müşteriden dönen ürünler kabul edilir, kontrol edilir, stoka geri alınır." },
  { icon: "📊", title: "Stok Senkronizasyonu", desc: "Her hareket Mintsoft WMS üzerinde stok güncellenmesiyle sonuçlanır." },
];

const faqs = [
  {
    q: "Pick & Pack nedir?",
    a: "Pick & Pack, bir sipariş geldiğinde depo raflarından ilgili ürünlerin toplanması (pick) ve ardından paketlenerek kargoya hazır hale getirilmesi (pack) sürecinin tamamıdır.",
  },
  {
    q: "İngiltere'de pick & pack hizmeti nasıl çalışır?",
    a: "Ürünleriniz Essex depomuzda stoklanır. Online mağazanızdan sipariş geldiğinde depo yönetim sistemimize (Mintsoft WMS) aktarılır. Ekibimiz siparişi depoda toplar, uygun ambalaj ile paketler, kargo etiketi oluşturur ve müşteriye sevk eder.",
  },
  {
    q: "Hangi tür ürünler için pick & pack yapılır?",
    a: "Kolili, paletli veya bireysel ürünler için sipariş toplama ve paketleme yapılabilir. Tekstil, elektronik aksesuarlar, ev ürünleri, kozmetik ve benzeri ürünler için hizmet sunmaktayız.",
  },
  {
    q: "Paketleme malzemesi kim sağlar?",
    a: "Paketleme malzemeleri için seçenekleri görüşmek üzere bizimle iletişime geçin. Bazı müşteriler kendi markalı ambalajlarını depoya gönderir.",
  },
  {
    q: "Sipariş başına pick & pack ücreti nasıl hesaplanır?",
    a: "Ücretlendirme sipariş hacmi, ürün türü ve paketleme gereksinimlerine göre belirlenir. WhatsApp üzerinden bize ulaşarak özel teklif alabilirsiniz.",
  },
];

export default function SiparisToplama() {
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
              <span className="text-white">Sipariş Toplama ve Paketleme</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              Sipariş Toplama ve Paketleme{" "}
              <span className="text-[#e63946]">(Pick &amp; Pack)</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-8">
              Online mağazanızdan gelen siparişler Essex depomuzda karşılanır.
              Depo ekibimiz siparişi stoktan toplar (pick), paketler (pack),
              kargo etiketi oluşturur ve müşterinize sevk eder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
              >
                Pick &amp; Pack Teklifi Al
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

        {/* 6-step workflow */}
        <section className="py-16 px-4 bg-[#f6f8fb]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-2 text-center">
              Sipariş Geldiğinde Süreç
            </h2>
            <p className="text-slate-500 text-center text-sm mb-10">
              Her adım Essex depomuzda, depo ekibimiz tarafından yönetilir.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {steps.map((step, i) => (
                <div key={step.num} className="flex flex-col items-center text-center relative">
                  <div className="w-14 h-14 rounded-full bg-[#0b2545] text-white flex flex-col items-center justify-center mb-2">
                    <span className="text-xs font-bold opacity-60">{step.num}</span>
                    <span className="text-lg leading-none">{step.icon}</span>
                  </div>
                  <h3 className="font-bold text-[#0b2545] text-sm mb-1">{step.label}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 bg-slate-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-8 text-center">
              Pick &amp; Pack Hizmetinin Kapsamı
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {included.map((item) => (
                <div key={item.title} className="border border-slate-200 rounded-2xl p-5">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-[#0b2545] mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA dark */}
        <section className="py-16 px-4 bg-[#0b2545] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold mb-4">
              Pick &amp; Pack Operasyonunuzu Bize Bırakın
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              İngiltere'de kendi depo ekibi oluşturmadan sipariş karşılama altyapısından yararlanın.
              Ürünleriniz depomuzda, siparişleriniz zamanında.
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
                { href: "/ingiltere-depo", label: "İngiltere Depo" },
                { href: "/ingiltere-e-ticaret-lojistigi", label: "E-Ticaret Lojistiği" },
                { href: "/e-ticaret-fulfillment", label: "E-Ticaret Fulfillment" },
                { href: "/ingiltere-fulfillment", label: "İngiltere Fulfillment" },
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
