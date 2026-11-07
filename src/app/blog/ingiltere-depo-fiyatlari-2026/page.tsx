import FaqJsonLd from "@/components/FaqJsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import ArticleHero from "@/components/ArticleHero";
import CtaCards from "@/components/CtaCards";
import AuthorBox from "@/components/AuthorBox";
import RelatedArticles from "@/components/RelatedArticles";

import { SITE_URL } from "@/lib/site";
const PAGE_URL = `${SITE_URL}/blog/ingiltere-depo-fiyatlari-2026`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depo%20maliyet%20bilgisi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "İngiltere Depo Fiyatları 2026 | UK Palet Depolama Maliyeti | LondraDepo.com",
  description:
    "İngiltere depo fiyatları 2026: palet depolama, fulfillment ve Amazon prep maliyetleri. UK warehouse ücret yapısı ve bütçe planlaması rehberi.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "İngiltere Depo Fiyatları 2026 | LondraDepo.com",
    description:
      "UK palet depolama, fulfillment ve Amazon prep maliyetleri. İngiltere depo ücret yapısı ve bütçe planlaması.",
    url: PAGE_URL,
    siteName: "LondraDepo.com",
    locale: "tr_TR",
    type: "article",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    "q": "İngiltere'de 1 palet depolama maliyeti ne kadardır?",
    "a": "LondraDepo standart palet depolama başlangıç fiyatı haftalık £3,50 + KDV / palettir. Elleçleme, yükleme ve gümrükleme gibi ek hizmetler ayrıca tekliflendirilir."
  },
  {
    "q": "İngiltere fulfillment maliyeti nasıl hesaplanır?",
    "a": "Fulfillment maliyeti; depolama ücreti + sipariş başına pick&pack ücreti + paketleme materyali + kargo ücreti toplamından oluşur."
  },
  {
    "q": "Amazon prep ve fulfillment hizmetini birlikte alabilir miyim?",
    "a": "Evet. LondraDepo.com'da Amazon prep ve 3PL fulfillment hizmetlerini tek operasyon çatısı altında sunuyoruz. Bu yaklaşım çift işlem ücretini ortadan kaldırır."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: "İngiltere Depo Fiyatları 2026", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "İngiltere Depo Fiyatları 2026: Tam Maliyet Rehberi",
      description: "UK palet depolama, fulfillment ve Amazon prep maliyetleri. İngiltere depo ücret yapısı.",
      url: PAGE_URL,
      author: { "@type": "Person", name: "Sertaç Yılmaz" },
      publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
      image: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg`, width: 640, height: 160 },
      datePublished: "2025-06-01",
      dateModified: "2026-01-01",
      inLanguage: "tr-TR",
    },
  ],
};

const relatedArticles = [
  { href: "/blog/ingiltere-depo-rehberi", title: "İngiltere Depo Hizmeti: Kapsamlı Rehber", category: "Depolama", readTime: "6 dk", categoryColor: "bg-green-50 text-green-700" },
  { href: "/blog/ingiltere-palet-depolama-maliyetleri", title: "İngiltere Palet Depolama Maliyetleri 2026", category: "Depolama", readTime: "5 dk", categoryColor: "bg-green-50 text-green-700" },
  { href: "/blog/ingiltere-fulfillment-nedir", title: "İngiltere Fulfillment Nedir?", category: "Fulfillment", readTime: "5 dk", categoryColor: "bg-blue-50 text-blue-700" },
  { href: "/blog/amazon-fba-vs-uk-fulfillment", title: "Amazon FBA mı, UK Fulfillment mı?", category: "Fulfillment", readTime: "8 dk", categoryColor: "bg-blue-50 text-blue-700" },
];

export default function DepoFiyatlariPage() {
  return (
    <>
      <Header />
      <main>
        <FaqJsonLd faqs={faqs} />
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-2 text-sm text-slate-500 flex flex-wrap gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#0b2545] transition">Blog</Link>
            <span>/</span>
            <span className="text-[#0b2545] font-medium">İngiltere Depo Fiyatları 2026</span>
          </div>
        </nav>

        <article className="py-10 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <ArticleHero
              category="Depolama"
              categoryColor="text-green-700 bg-green-50"
              title="İngiltere Depo Fiyatları 2026: Tam Maliyet Rehberi"
              readTime="7 dakika"
              date="Ocak 2026"
            />

            <p className="text-lg leading-relaxed text-slate-600 mb-8">
              İngiltere&apos;de depolama maliyetini anlamak, bütçe planlaması ve doğru partner
              seçimi açısından kritik öneme sahiptir. Bu rehberde UK palet depolama fiyatları,
              fulfillment ücret yapısı ve toplam operasyon maliyetini nasıl hesaplayacağınızı
              ele alıyoruz.
            </p>

            <CtaCards />

            <div className="article-body">
              <h2>İngiltere Depo Fiyatları Nasıl Belirlenir?</h2>
              <p>
                UK depo fiyatları birkaç temel değişkene bağlıdır: depolanan ürünün hacmi ve
                ağırlığı, stokta kalış süresi, depo lokasyonu (Essex, Londra, Birmingham vb.),
                ek hizmetler (pick&amp;pack, repack, etiketleme) ve erişim sıklığı. Essex gibi
                stratejik lokasyonlar hem fiyat hem erişim açısından avantajlı konumdadır.
              </p>

              <h2>Palet Depolama Maliyetleri — 2026 Karşılaştırması</h2>
              <p>
                LondraDepo&apos;da standart palet depolama başlangıç bedeli haftalık
                <strong>£3,50 + KDV / palet</strong> olarak sunulur. Özel ürün koşulları,
                elleçleme, indirme-bindirme, yeniden paletleme ve gümrükleme
                ayrıca tekliflendirilir.
              </p>

              <blockquote>
                Depolama maliyetini minimize etmenin en etkili yolu: stok devir hızını optimize
                etmek ve ürün hacmine göre doğru depolama modelini seçmektir.
              </blockquote>

              <h2>Fulfillment Maliyeti Nasıl Hesaplanır?</h2>
              <p>
                Toplam fulfillment maliyeti şu kalemlerden oluşur:
              </p>
              <ul>
                <li><strong>Depolama ücreti:</strong> Palet veya metrekare başına haftalık ücret</li>
                <li><strong>Pick &amp; Pack:</strong> Sipariş hacmi, ürün sayısı ve işlem gereksinimine göre özel teklif</li>
                <li><strong>Paketleme materyali:</strong> Kullanılan koli ve ambalaj türüne göre özel teklif</li>
                <li><strong>Kargo ücreti:</strong> Royal Mail, DPD, DHL gibi UK kargo ağlarına göre değişir</li>
                <li><strong>Ürün kabulü (inbound):</strong> Araç, yük, boşaltma ve elleçleme ihtiyacına göre özel teklif</li>
              </ul>

              <h2>Amazon Prep UK Maliyeti</h2>
              <p>
                Amazon FBA&apos;ye hazırlık gerektiren ürünler için ek prep maliyeti hesaba
                katılmalıdır. Bu maliyet; etiketleme (labeling), ambalaj güncelleme, polybag
                ve işlem gereksinimlerini kapsar. Ücret ürün ve hazırlık kapsamına göre
                özel olarak belirlenir.
              </p>

              <h2>Türkiye&apos;den İngiltere&apos;ye Nakliye Maliyeti</h2>
              <p>
                UK deposuna ürün ulaştırma maliyeti güzergâh, taşıma modu, yükün özellikleri,
                gümrükleme ve teslim koşullarına göre değişir. FCL ve LCL gönderimler
                için sevkiyata özel teklif alınmalıdır.
              </p>

              <h2>Toplam UK Operasyon Maliyeti — Örnek Hesap</h2>
              <p>
                10 standart palet ve 4 haftalık depolama için başlangıç hesabı (200 siparişin diğer maliyetleri ayrıca tekliflendirilir):
              </p>
              <ul>
                <li>10 palet × £3,50/hafta × 4 hafta = <strong>£140 + KDV depolama başlangıç bedeli</strong></li>
                <li>200 sipariş için pick&amp;pack: özel teklif</li>
                <li>200 sipariş için paketleme materyali: özel teklif</li>
                <li>Kargo: teslimat bölgeleri ve paket özelliklerine göre özel teklif</li>
                <li><strong>Bilinen başlangıç kalemi: £140 + KDV depolama</strong>; toplam operasyon bedeli ek hizmetlere göre belirlenir.</li>
              </ul>

              <h2>Maliyet Optimizasyon Önerileri</h2>
              <ul>
                <li>Toplu gönderimle nakliye maliyetini düşürün</li>
                <li>Hızlı satış yapılan ürünleri stokta tutun, yavaş dönenler için sipariş bazlı model uygulayın</li>
                <li>Fulfillment + Amazon prep entegrasyonuyla çifte işlem ücretinden kaçının</li>
                <li>Türkçe iletişim yapabilen bir partner seçerek operasyon hataları ve iletişim gecikmelerini minimize edin</li>
              </ul>

              <h2>Sık Sorulan Sorular</h2>

              {faqs.map(({ q, a }) => (
                <div key={q}>
                  <h3>{q}</h3>
                  <p>{a}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#0b2545] text-white rounded-2xl p-8 my-10 text-center">
              <p className="font-bold text-xl mb-2">Depo maliyeti öğrenin — 30 saniyede teklif alın</p>
              <p className="text-slate-300 text-sm mb-6">
                Ürün türünüzü, hacminizi ve sipariş sıklığınızı paylaşın; size özel maliyet planı hazırlayalım.
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
            </div>

            <AuthorBox updatedDate="Ocak 2026" />

            <RelatedArticles articles={relatedArticles} />

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-slate-500 text-sm mb-3">İlgili hizmetler:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/palet-depolama" className="text-sm text-[#0b2545] hover:underline">→ Palet Depolama Hizmeti</Link>
                <Link href="/ingiltere-fulfillment" className="text-sm text-[#0b2545] hover:underline">→ İngiltere Fulfillment</Link>
                <Link href="/amazon-prep-uk" className="text-sm text-[#0b2545] hover:underline">→ Amazon Prep UK</Link>
              </div>
            </div>
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
