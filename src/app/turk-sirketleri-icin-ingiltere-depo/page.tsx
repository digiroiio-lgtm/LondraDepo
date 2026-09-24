import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20Türk%20şirketi%20için%20İngiltere%20depo%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.";
const TEL = "tel:+447554195190";

export const metadata: Metadata = {
  title: "Türk Şirketleri İçin İngiltere Depo ve Fulfilment | LondraDepo.com",
  description:
    "Türk şirketleri için İngiltere depo ve fulfilment hizmeti. UK'de şirket kurmadan, kendi deponuzu kurmadan İngiltere'de satış yapın. Türkiye'den İngiltere'ye operasyon çözümü.",
  keywords: [
    "türk şirketleri için ingiltere depo",
    "türkiye ingiltere depo",
    "türk şirketi uk depo",
    "ingiltere de şirket kurmadan satış",
    "türkiyeden ingiltereye depo",
    "türk firmaları ingiltere depolama",
    "uk türk şirketi lojistik",
    "ingiltere depo türk işletme",
    "türk marka ingiltere",
    "ingiltere operasyon türkiye",
  ],
  alternates: { canonical: `${SITE_URL}/turk-sirketleri-icin-ingiltere-depo` },
  openGraph: {
    title: "Türk Şirketleri İçin İngiltere Depo | LondraDepo.com",
    description: "UK'de şirket kurmadan İngiltere'de satış ve depolama. Türk işletmeler için fulfilment.",
    url: `${SITE_URL}/turk-sirketleri-icin-ingiltere-depo`,
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
        { "@type": "ListItem", position: 2, name: "Türk Şirketleri İçin İngiltere Depo", item: `${SITE_URL}/turk-sirketleri-icin-ingiltere-depo` },
      ],
    },
    {
      "@type": "Service",
      name: "Türk Şirketleri İçin İngiltere Depo ve Fulfilment",
      provider: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      serviceType: "Warehousing and Fulfilment for Turkish Companies",
      description:
        "Türk şirketleri için İngiltere depolama ve fulfilment hizmeti. UK'de şirket veya depo kurmadan, Türkiye'den İngiltere pazarına satış yapın.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: `${SITE_URL}/turk-sirketleri-icin-ingiltere-depo`,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "İngiltere'de şirket kurmadan satış yapabilir miyim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet, mümkündür. LondraDepo üzerinden ürünlerinizi UK depomuzda saklayabilir, Shopify veya Amazon gibi platformlar üzerinden İngiltere'ye satış yapabilirsiniz. İngiltere'de şirket kurmak zorunlu değildir; ancak vergi ve ticaret hukuku konularında bağımsız danışmanlık almanızı öneririz.",
          },
        },
        {
          "@type": "Question",
          name: "Türkiye'den ürün gönderip İngiltere'de depolayabilir miyim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Türkiye'den gönderilen ürünler gümrükleme koordinasyonu desteğiyle UK'e getirilir, depomuzda stoklanır. Gümrük sürecinde koordinasyon sağlıyoruz ancak doğrudan gümrükleme beyanı yetkimiz yoktur; bu nedenle lisanslı gümrükçü ile çalışmanız gerekebilir.",
          },
        },
        {
          "@type": "Question",
          name: "Türk işletmeler için İngiltere'de operasyon kurmanın maliyeti nedir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kendi deponuzu ve personel ekibinizi kurmanıza kıyasla LondraDepo üzerinden çalışmak önemli ölçüde daha düşük sabit maliyet anlamına gelir. Stok ve sipariş hacminize göre özelleştirilmiş fiyat teklifi için WhatsApp üzerinden bize ulaşabilirsiniz.",
          },
        },
        {
          "@type": "Question",
          name: "LondraDepo İngilizce iletişim kuruyor mu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LondraDepo Türkiye'den UK'e çalışan işletmelere özel kurulmuş bir UK depo hizmetidir. Türkçe iletişim imkânı sunmaktayız.",
          },
        },
      ],
    },
  ],
};

const challenges = [
  { icon: "🏢", title: "UK'de şirket kurmak", desc: "Yüksek başlangıç maliyeti, muhasebe yükümlülükleri ve yasal gereksinimler." },
  { icon: "🏭", title: "Kendi deponuzu kiralamak", desc: "Yüksek kira, personel istihdamı, WMS yazılımı ve operasyon yönetimi." },
  { icon: "🌍", title: "Gümrük ve lojistik", desc: "UK ithalat kuralları, belge gereksinimleri ve taşıyıcı koordinasyonu." },
  { icon: "📦", title: "Sipariş karşılama", desc: "Pick & pack operasyonu, kargo entegrasyonu ve iade yönetimi." },
];

const solutions = [
  { icon: "✅", title: "UK'de Şirket Kurmadan", desc: "Kendi şirketinizle UK pazarına girebilirsiniz. LondraDepo, depolama altyapısını sağlar." },
  { icon: "✅", title: "Kendi Deponuzu Kurmadan", desc: "Essex depomuz sizin deponuzdur. Kira, personel ve WMS maliyeti olmadan stok tutun." },
  { icon: "✅", title: "Türkçe İletişim", desc: "Türkiye'den çalışan işletmeler için Türkçe destek imkânı." },
  { icon: "✅", title: "Gümrük Koordinasyonu", desc: "Ürünlerinizin UK'e girişinde gümrükleme sürecinde koordinasyon desteği." },
  { icon: "✅", title: "Mintsoft WMS", desc: "Stok ve sipariş takibi Mintsoft depo yönetim sistemi üzerinden yapılır." },
  { icon: "✅", title: "UK Dağıtım", desc: "İngiltere geneline sipariş karşılama ve teslimat koordinasyonu." },
];

const steps = [
  { num: "01", label: "Bizimle İletişime Geçin", desc: "WhatsApp veya telefonla ulaşın, ürün ve ihtiyaçlarınızı anlatın." },
  { num: "02", label: "Teklif Alın", desc: "Stok, sipariş hacmi ve hizmet kapsamına göre fiyat teklifi hazırlanır." },
  { num: "03", label: "Ürünleri Gönderin", desc: "Ürünlerinizi depomuz adresine sevk edin (Türkiye'den veya başka bir ülkeden)." },
  { num: "04", label: "Mal Kabul", desc: "Ürünler depoya alınır, sayılır ve WMS'e kaydedilir." },
  { num: "05", label: "Satış Yapın", desc: "Shopify, Amazon veya toptan kanallarınızdan UK'ye satış yapın." },
  { num: "06", label: "Fulfillment", desc: "Siparişler depomuzdan pick, pack ve sevk edilir." },
];

const faqs = [
  {
    q: "İngiltere'de şirket kurmadan satış yapabilir miyim?",
    a: "Evet, mümkündür. LondraDepo üzerinden ürünlerinizi UK depomuzda saklayabilir, Shopify veya Amazon gibi platformlar üzerinden İngiltere'ye satış yapabilirsiniz. Vergi ve ticaret hukuku konularında bağımsız danışmanlık almanızı öneririz.",
  },
  {
    q: "Türkiye'den ürün gönderip İngiltere'de depolayabilir miyim?",
    a: "Evet. Türkiye'den gönderilen ürünler gümrükleme koordinasyonu desteğiyle UK'e getirilir, depomuzda stoklanır. Gümrük sürecinde koordinasyon sağlıyoruz ancak lisanslı gümrükçü ile çalışmanız gerekebilir.",
  },
  {
    q: "Türk işletmeler için İngiltere'de operasyon kurmanın maliyeti nedir?",
    a: "Kendi deponuzu ve personel ekibinizi kurmanıza kıyasla LondraDepo üzerinden çalışmak önemli ölçüde daha düşük sabit maliyet anlamına gelir. Özelleştirilmiş fiyat teklifi için WhatsApp üzerinden bize ulaşabilirsiniz.",
  },
  {
    q: "LondraDepo İngilizce iletişim kuruyor mu?",
    a: "LondraDepo Türkiye'den UK'e çalışan işletmelere özel kurulmuş bir UK depo hizmetidir. Türkçe iletişim imkânı sunmaktayız.",
  },
  {
    q: "Amazon FBA mı yoksa FBM mi kullanmalıyım?",
    a: "LondraDepo, Amazon FBM (Fulfilled by Merchant) modelini destekler: ürünleri bizim depomuzda saklayıp Amazon siparişlerini Essex'ten karşılarsınız. FBA hazırlığı için /amazon-prep-uk sayfamıza bakabilirsiniz.",
  },
];

export default function TurkSirketleri() {
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
              <span className="text-white">Türk Şirketleri İçin İngiltere Depo</span>
            </nav>
            <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-4">
              🇹🇷 Türk işletmelere özel UK lojistik çözümü
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              Türk Şirketleri İçin{" "}
              <span className="text-[#e63946]">İngiltere Depo</span>{" "}
              ve Fulfilment
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-8">
              İngiltere'de şirket kurmadan, kendi deponuzu kiralamadan ve
              personel istihdam etmeden UK pazarına girin. Ürünlerinizi Essex
              depomuzda saklayın, siparişlerinizi buradan karşılayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full transition"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        </section>

        {/* The challenge */}
        <section className="py-16 px-4 bg-[#f6f8fb]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-2 text-center">
              Türk İşletmelerin UK&apos;de Karşılaştığı Zorluklar
            </h2>
            <p className="text-slate-500 text-center text-sm mb-10">
              İngiltere'de operasyon kurmak karmaşık görünüyor — ama olmak zorunda değil.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {challenges.map((c) => (
                <div key={c.title} className="bg-white border border-slate-200 rounded-2xl p-5 text-center">
                  <div className="text-3xl mb-2">{c.icon}</div>
                  <h3 className="font-bold text-[#0b2545] mb-2 text-sm">{c.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-2 text-center">
              LondraDepo ile Çözüm
            </h2>
            <p className="text-slate-500 text-center text-sm mb-10">
              Her zorluğun yanında LondraDepo&apos;nun desteği.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {solutions.map((s) => (
                <div key={s.title} className="border border-slate-200 rounded-2xl p-5">
                  <div className="text-xl mb-2">{s.icon}</div>
                  <h3 className="font-bold text-[#0b2545] mb-1">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 px-4 bg-[#f6f8fb]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-10 text-center">
              Nasıl Başlanır?
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#0b2545] text-white flex items-center justify-center font-extrabold text-sm mb-2">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-[#0b2545] text-xs mb-1">{step.label}</h3>
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
              UK Operasyonunuzu Başlatalım
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Türkiye'den İngiltere pazarına adım atmak için tek ihtiyacınız
              ürününüz ve bir WhatsApp mesajı.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full transition"
            >
              WhatsApp ile Teklif Al
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
                { href: "/ingiltere-depo", label: "İngiltere Depo" },
                { href: "/gumrukleme", label: "Gümrükleme Desteği" },
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
