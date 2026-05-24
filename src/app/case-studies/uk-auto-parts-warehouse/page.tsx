import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import CaseHero from "@/components/CaseHero";
import OperationsFlow from "@/components/OperationsFlow";
import RelatedCases from "@/components/RelatedCases";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/case-studies/uk-auto-parts-warehouse`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20otomotiv%20yedek%20parca%20depolama%20hakkinda%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "OEM Yedek Parça UK Depo | Automotive Fulfillment İngiltere | LondraDepo.com",
  description:
    "Lüks araç OEM ve aftermarket yedek parçalarının İngiltere'de depolanması, stok yönetimi ve UK dağıtım operasyonu. Automotive fulfillment UK case study.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "OEM Yedek Parça — UK Automotive Fulfillment | LondraDepo.com",
    description:
      "Lüks araç yedek parçalarının İngiltere'de hasar kontrollü depolanması ve UK dağıtım operasyonu.",
    url: PAGE_URL,
    siteName: "LondraDepo.com",
    locale: "tr_TR",
    type: "article",
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
        { "@type": "ListItem", position: 2, name: "Başarı Hikayeleri", item: `${SITE_URL}/case-studies` },
        { "@type": "ListItem", position: 3, name: "OEM Yedek Parça UK Depo", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline: "OEM & Yan Sanayi — İngiltere Yedek Parça Depolama Operasyonu",
      description:
        "Lüks araç OEM ve aftermarket yedek parçalarının İngiltere'de hasar kontrollü depolanması ve UK dağıtım ağına entegrasyonu.",
      url: PAGE_URL,
      publisher: {
        "@type": "Organization",
        name: "LondraDepo.com",
        url: SITE_URL,
      },
      mainEntityOfPage: PAGE_URL,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Büyük hacimli otomotiv parçaları için depolama yapıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Ön/arka tampon, kapı paneli gibi hacimli parçalar dahil tüm boyutlarda otomotiv yedek parçası depoluyoruz. Palet ve raf sistemleriyle organize stok yönetimi sağlıyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "OEM ve aftermarket parçalar için hasar kontrolü yapıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Her parça girişte görsel hasar kontrolünden geçirilir, fotoğraflanır ve sisteme kaydedilir. Hasar durumunda müşteri bilgilendirilir.",
          },
        },
        {
          "@type": "Question",
          name: "UK genelinde otomotiv parçası dağıtımı yapabiliyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Essex merkezli deposumuzdan UK'nın dört bir yanındaki bayiler, atölyeler ve online müşterilere dağıtım yapabiliyoruz.",
          },
        },
      ],
    },
  ],
};

const flowSteps = [
  {
    step: 1,
    icon: "🚛",
    title: "Toplu Sevkiyat Kabulü",
    desc: "Türkiye'den gönderilen OEM ve aftermarket parçalar, palet ve sandık bazında Essex deposuna teslim alındı.",
  },
  {
    step: 2,
    icon: "🔍",
    title: "Hasar & Kalite Kontrolü",
    desc: "Her parça tek tek fotoğraflanıp görsel hasar kontrolünden geçirildi; durum sisteme kaydedildi.",
  },
  {
    step: 3,
    icon: "🗂️",
    title: "SKU & Stok Sistemi",
    desc: "Tüm parçalar SKU bazında etiketlendi, raflandırıldı ve stok takip sistemine dahil edildi.",
  },
  {
    step: 4,
    icon: "📬",
    title: "Sipariş Yönetimi",
    desc: "Bayi, atölye ve online kanaldan gelen siparişler öncelik sırasına göre işleme alındı.",
  },
  {
    step: 5,
    icon: "📦",
    title: "Güvenli Paketleme",
    desc: "Parçalar hasar riskine karşı baloncuklu naylon, köpük ve sert karton ile eksiksiz paketlendi.",
  },
  {
    step: 6,
    icon: "🚚",
    title: "UK Dağıtım",
    desc: "Hazırlanan siparişler UK genelindeki bayilere, atölyelere ve son kullanıcılara sevk edildi.",
  },
];

const faqs = [
  {
    q: "Büyük hacimli otomotiv parçaları için depolama yapıyor musunuz?",
    a: "Evet. Ön/arka tampon, kapı paneli gibi hacimli parçalar dahil tüm boyutlarda otomotiv yedek parçası depoluyoruz. Palet ve raf sistemleriyle organize stok yönetimi sağlıyoruz.",
  },
  {
    q: "OEM ve aftermarket parçalar için hasar kontrolü yapıyor musunuz?",
    a: "Evet. Her parça girişte görsel hasar kontrolünden geçirilir, fotoğraflanır ve sisteme kaydedilir. Hasar durumunda müşteri bilgilendirilir.",
  },
  {
    q: "UK genelinde otomotiv parçası dağıtımı yapabiliyor musunuz?",
    a: "Evet. Essex merkezli deposumuzdan UK'nın dört bir yanındaki bayiler, atölyeler ve online müşterilere dağıtım yapabiliyoruz.",
  },
  {
    q: "Lüks araç parçaları için özel depolama koşulları sağlıyor musunuz?",
    a: "Evet. Boyalı ve hassas yüzeyli parçalar için korumalı raf ve depolama alanı kullanıyoruz.",
  },
  {
    q: "Stok seviyeleri düzenli olarak raporlanıyor mu?",
    a: "Evet. Mutabakat sağlanan periyotlarda stok raporu, hareket özeti ve düşük stok uyarıları Türkçe olarak iletilmektedir.",
  },
];

const relatedCases = [
  {
    slug: "krufy-uk-fashion-fulfillment",
    industry: "Moda & Apparel",
    title: "Krufy — UK Fashion Fulfillment Operasyonu",
    summary: "Apparel markasının İngiltere fulfillment ve yeniden paketleme süreci.",
  },
  {
    slug: "pizza-box-distribution-uk",
    industry: "B2B Dağıtım",
    title: "Pizza Kutusu — İngiltere B2B Dağıtım Operasyonu",
    summary: "Restoranlara toptan ambalaj tedarikçisinin palet bazlı UK dağıtım süreci.",
  },
];

export default function AutoPartsCaseStudyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 py-2 text-sm text-slate-500 flex flex-wrap gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-[#0b2545] transition">Başarı Hikayeleri</Link>
            <span>/</span>
            <span className="text-[#0b2545] font-medium">OEM Yedek Parça UK Depo</span>
          </div>
        </nav>

        <article className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <CaseHero
              industry="Otomotiv"
              industryColor="text-blue-700 bg-blue-50"
              brand="OEM & Yan Sanayi"
              title="OEM & Yan Sanayi — Lüks Araç Yedek Parça İngiltere Deposu"
              subtitle="Lüks araç segmenti için OEM ve aftermarket yedek parça üreten firma, İngiltere bayilik ve online satış ağını büyütürken UK stok yönetimi ve dağıtım altyapısı kurdu."
              metrics={[
                { label: "Depolama Tipi", value: "Palet + Raf" },
                { label: "Kapsam", value: "Tüm UK" },
                { label: "Kontrol", value: "Hasar izleme" },
              ]}
            />

            {/* Problem */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">Operasyonel Zorluk</h2>
              <div className="bg-slate-50 border-l-4 border-[#e63946] rounded-r-xl p-6">
                <p className="text-slate-700 leading-relaxed mb-3">
                  Türkiye merkezli firma, İngiltere otomotiv pazarına yönelik ciddi bir talep görmeye
                  başlamıştı. Ancak UK'da fiziksel stok tutulmadığı için siparişler Türkiye'den
                  sevk ediliyor; bu durum teslimat süresini, lojistik maliyeti ve müşteri
                  memnuniyetsizliğini artırıyordu.
                </p>
                <ul className="text-slate-700 text-sm space-y-2 list-none">
                  <li>⚠️ Büyük hacimli ve ağır parçaların uzun yolculukta hasar riski</li>
                  <li>⚠️ UK bayi taleplerine yetersiz response süresi</li>
                  <li>⚠️ Lüks araç parçaları için özel depolama ihtiyacı</li>
                  <li>⚠️ Online UK satışında teslimat rekabetçiliği kaybı</li>
                  <li>⚠️ Stok takibi ve iade yönetimi için UK'da operasyon noktası gerekliliği</li>
                </ul>
              </div>
            </section>

            {/* Solution */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">LondraDepo Çözümü</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Essex deposunda yedek parçalar palet ve raf sistemiyle organize edildi. Her parça
                hasar kontrolünden geçirilerek stok sistemine kaydedildi. Sipariş geldiğinde
                güvenli paketleme ile UK kargo ağına entegre dağıtım sağlandı.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: "🏭", title: "Palet Bazlı Depolama", desc: "Büyük hacimli tampon ve panel parçaları palet sistemiyle düzenli depolandı." },
                  { icon: "🔍", title: "Hasar Kontrol Protokolü", desc: "Giriş-çıkış fotoğraflaması ve hasar kaydı ile her parçanın durumu izlendi." },
                  { icon: "🗂️", title: "SKU Bazlı Stok", desc: "OEM ve aftermarket ürünler SKU'ya göre ayrı raflandırıldı, karışıklık önlendi." },
                  { icon: "📦", title: "Güvenli Paketleme", desc: "Boyalı ve hassas yüzeyli parçalar köpük ve baloncuklu ambalajla korundu." },
                  { icon: "🚚", title: "UK Bayi Dağıtımı", desc: "Atölye, bayi ve online sipariş kanallarına next-day teslimat seçeneği sunuldu." },
                  { icon: "📊", title: "Stok Raporlama", desc: "Periyodik stok raporu ve düşük stok uyarıları Türkçe olarak iletildi." },
                ].map((item) => (
                  <div key={item.title} className="border border-slate-200 rounded-xl p-5 flex gap-4">
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-[#0b2545] mb-1">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Operations flow */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-6">Operasyon Süreci</h2>
              <OperationsFlow steps={flowSteps} />
            </section>

            {/* Results */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">Sağlanan Avantajlar</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { value: "Next-day", label: "UK bayi teslimatı", desc: "UK deposundan next-day veya 2-day teslimat seçeneğiyle rekabetçi hız sağlandı." },
                  { value: "%100", label: "Hasar izleme", desc: "Giriş-çıkış fotoğraflama protokolüyle her parçanın hasar geçmişi kaydedildi." },
                  { value: "TR+EN", label: "İki dilli yönetim", desc: "Türkiye'deki ekiple Türkçe, UK kargo/bayi ile İngilizce koordinasyon yapıldı." },
                ].map((r) => (
                  <div key={r.label} className="bg-[#f6f8fb] rounded-xl p-6 text-center">
                    <div className="text-3xl font-extrabold text-[#0b2545] mb-1">{r.value}</div>
                    <div className="font-semibold text-[#0b2545] text-sm mb-2">{r.label}</div>
                    <p className="text-slate-500 text-xs leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-[#0b2545] rounded-2xl p-8 text-center mb-10">
              <h2 className="text-2xl font-extrabold text-white mb-3">
                Otomotiv operasyonunuzu İngiltere&apos;ye taşıyın
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                Yedek parça depolama, stok yönetimi ve UK dağıtım ihtiyaçlarınızı paylaşın.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3.5 rounded-full transition"
                >
                  WhatsApp&apos;tan hızlı bilgi alın
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition"
                >
                  Operasyon danışmanı ile görüşün
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-10">
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

            {/* Internal links */}
            <div className="pt-6 border-t border-slate-200 mb-8">
              <p className="text-slate-500 text-sm mb-3">İlgili hizmetler:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/palet-depolama" className="text-sm text-[#0b2545] hover:underline">→ Palet Depolama</Link>
                <Link href="/ingiltere-fulfillment" className="text-sm text-[#0b2545] hover:underline">→ İngiltere Fulfillment</Link>
                <Link href="/ingiltere-depo-avantajlari" className="text-sm text-[#0b2545] hover:underline">→ Depo Avantajları</Link>
                <Link href="/essex-depo" className="text-sm text-[#0b2545] hover:underline">→ Essex Depo</Link>
              </div>
            </div>

            <RelatedCases cases={relatedCases} />
          </div>
        </article>

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
