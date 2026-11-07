import FaqJsonLd from "@/components/FaqJsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

import { SITE_URL } from "@/lib/site";
const PAGE_URL = `${SITE_URL}/palet-depolama`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20palet%20depolama%20teklifi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "İngiltere Palet Depolama | UK Pallet Storage | LondraDepo.com",
  description:
    "İngiltere'de standart palet depolama haftalık £3,50 + KDV'den başlar. Essex merkezli depo; elleçleme, yükleme ve gümrükleme işlemleri duruma göre fiyatlandırılır.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "İngiltere Palet Depolama | LondraDepo.com",
    description:
      "UK'da palet bazında depolama. İthalatçılar ve toptancılar için maliyet kontrollü İngiltere pallet storage.",
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
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Palet Depolama", item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      name: "İngiltere Palet Depolama",
      provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
      serviceType: "Pallet Storage",
      description: "UK'da palet bazında depolama hizmeti. Toptancı, ithalatçı ve üreticiler için maliyet kontrollü pallet storage.",
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: PAGE_URL,
    },
  ],
};

const faqs = [
  {
    q: "İngiltere'de 10 palet ürün için nasıl depo teklifi alabilirim?",
    a: "Palet sayısını, palet ölçülerini ve yaklaşık ağırlıklarını, ürün türünü, depolama süresini, teslimat konumunu ve ihtiyaç duyduğunuz mal kabul veya dağıtım hizmetlerini paylaşarak teklif isteyebilirsiniz. Ücret, operasyon kapsamına göre belirlenir.",
  },
  {
    q: "İngiltere palet depolama ücreti nasıl hesaplanır?",
    a: "Standart palet depolama başlangıç fiyatımız palet başına haftalık £3,50 + KDV'dir. Palet ölçüsü, ürün özellikleri ve depolama koşullarına göre teklif değişebilir. Elleçleme, yükleme, boşaltma, yeniden paletleme ve gümrükleme ayrıca değerlendirilir.",
  },
  {
    q: "Minimum palet miktarı nedir?",
    a: "Sabit bir minimum palet zorunluluğumuz bulunmamaktadır. Küçük hacimli işletmelerden büyük hacimli ithalatçılara kadar hizmet veriyoruz.",
  },
  {
    q: "Paletler Türkiye'den İngiltere'ye nasıl geliyor?",
    a: "Türkiye'den İngiltere'ye konteyner veya parsiyel yük ile gelen paletleriniz, Essex depomuzda teslim alınıyor.",
  },
  {
    q: "Paletlerin güvenliği nasıl sağlanıyor?",
    a: "Depomuz kilitli ve kontrollü erişim sistemiyle korunmaktadır. Her palet numaralandırılır ve stok takibi yapılır.",
  },
];

export default function PaletDepolamaPage() {
  return (
    <>
      <Header />
      <main>
        <FaqJsonLd faqs={faqs} />
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-2 text-sm text-slate-500 flex gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-[#0b2545] font-medium">Palet Depolama</span>
          </div>
        </nav>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b2545] mb-4">
              İngiltere Palet Depolama Hizmeti | Londra ve Essex Palet Deposu
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Standart paletler için haftalık £3,50 + KDV'den başlayan depolama sunuyoruz. Türkiye'den İngiltere'ye gelen konteyner yüklerinizin palet bazında güvenli şekilde depolanmasını sağlıyoruz. Essex merkezli UK depolama altyapımız toptancı, ithalatçı ve üretici firmalar için uygun maliyetli çözümler sunuyor.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Palet Kabulü", desc: "Türkiye'den gelen konteynerler ve parsiyel yükler depomuza alınır." },
                { title: "Sayım & Kontrol", desc: "Gelen her palet sayılır, hasarlı ürünler raporlanır." },
                { title: "Güvenli Depolama", desc: "Kilitli, kamerali ve kontrollü erişimli depo alanı." },
                { title: "Haftalık Raporlama", desc: "Stok seviyeleri ve palet hareketleri düzenli raporlanır." },
                { title: "Esnek Süre", desc: "Haftalık ödeme sistemi ile istediğiniz süre kadar depolama." },
                { title: "Dağıtıma Hazırlık", desc: "Paletler sipariş bazında ayrıştırılır ve dağıtıma hazırlanır." },
              ].map((item) => (
                <div key={item.title} className="border border-slate-200 rounded-xl p-5">
                  <h2 className="font-bold text-[#0b2545] mb-2">{item.title}</h2>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <section className="mb-12" aria-labelledby="palet-planlama">
              <h2 id="palet-planlama" className="text-2xl font-extrabold text-[#0b2545] mb-5">
                Palet Depolama Maliyeti, Kabul Koşulları ve B2B Sevkiyat Planı
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Standart palet depolama haftalık palet başına £3,50 + KDV'den başlar.
                Dört haftalık yalnızca depolama örneği olarak 5 palet £70, 10 palet £140
                ve 20 palet £280 + KDV tutar. Bunlar başlangıç fiyatına dayalı örneklerdir;
                nihai teklif ürün ve operasyon koşullarına göre belirlenir.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Palet ölçüleri (Euro palet veya UK palet), yükseklik, ağırlık, ürün türü,
                istifleme koşulları ve depolama süresi kabul ve fiyatlandırmayı etkileyebilir.
                Konteyner veya parsiyel yük kabulünde boşaltma, elleçleme, sayım ve yeniden
                paletleme ihtiyacı sevkiyat öncesinde değerlendirilir.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Kısa süreli stok tutma, palet hareketlerinin raporlanması ve B2B dağıtıma
                hazırlık ihtiyaçlarınızı teklif aşamasında belirtin. Dağıtım kapsamı,
                teslimat adresleri ve taşıma ücretleri ayrıca netleştirilir.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Teklif için palet sayısı, ebatlar, yaklaşık ağırlık, ürün cinsi, tahmini
                depolama haftası, varış şekli ve sevkiyat sıklığını paylaşın.
                Mal kabul, yükleme, boşaltma, dağıtım ve gümrükleme temel depolama fiyatına dahil değildir.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Ayrıntılı maliyet kalemleri için{" "}
                <Link href="/ingiltere-depo-fiyatlari" className="text-[#0b2545] underline font-semibold">
                  İngiltere depo fiyatları
                </Link>{" "}
                sayfasını inceleyin.
              </p>
            </section>

            <div className="bg-[#f6f8fb] rounded-2xl p-8 mb-12 text-center">
              <p className="text-[#0b2545] font-semibold text-lg mb-4">
                Palet depolama kapasitesi ve fiyat için hemen yazın
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition"
              >
                WhatsApp ile Teklif Al
              </a>
            </div>

            <section>
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

            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-slate-500 text-sm mb-3">İlgili hizmetler:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/ingiltere-fulfillment" className="text-sm text-[#0b2545] hover:underline">→ İngiltere Fulfillment</Link>
                <Link href="/amazon-prep-uk" className="text-sm text-[#0b2545] hover:underline">→ Amazon Prep UK</Link>
                <Link href="/essex-depo" className="text-sm text-[#0b2545] hover:underline">→ Essex Depo Hizmeti</Link>
              </div>
            </div>
          </div>
        </section>

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
