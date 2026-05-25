import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import ArticleHero from "@/components/ArticleHero";
import CtaCards from "@/components/CtaCards";
import AuthorBox from "@/components/AuthorBox";
import RelatedArticles from "@/components/RelatedArticles";

const SITE_URL = "https://www.londradepo.com";
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
      author: { "@type": "Person", name: "Sertaç Y." },
      publisher: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      dateModified: "2026-01-01",
      inLanguage: "tr-TR",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "İngiltere'de 1 palet depolama maliyeti ne kadardır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "İngiltere'de standart 1 palet depolama haftalık ortalama £8-£15 arasında değişmektedir. Ürün tipi, erişim sıklığı ve stok süresi fiyatı etkiler.",
          },
        },
        {
          "@type": "Question",
          name: "İngiltere fulfillment maliyeti nasıl hesaplanır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fulfillment maliyeti; depolama ücreti + sipariş başına pick&pack ücreti + paketleme materyali + kargo ücreti toplamından oluşur.",
          },
        },
      ],
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
                İngiltere&apos;de standart bir euro palet (120×80 cm) için haftalık depolama
                ücreti ortalama <strong>£8 – £15</strong> arasındadır. Yüksek değerli ürünler,
                soğutmalı depolama veya özel raf sistemleri gerektiren kategorilerde bu ücret
                £20+&apos;ya çıkabilir.
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
                <li><strong>Pick &amp; Pack:</strong> Sipariş başına £1.50–£3.00 (ürün sayısına göre)</li>
                <li><strong>Paketleme materyali:</strong> Koli, bant, bubble wrap — sipariş başına £0.50–£2.00</li>
                <li><strong>Kargo ücreti:</strong> Royal Mail, DPD, DHL gibi UK kargo ağlarına göre değişir</li>
                <li><strong>Ürün kabulü (inbound):</strong> Palet başına £5–£15 giriş işlem ücreti</li>
              </ul>

              <h2>Amazon Prep UK Maliyeti</h2>
              <p>
                Amazon FBA&apos;ye hazırlık gerektiren ürünler için ek prep maliyeti hesaba
                katılmalıdır. Bu maliyet; etiketleme (labeling), ambalaj güncelleme, polybag
                ve sipariş başına işlem ücretini kapsar. Genellikle ürün başına
                <strong> £0.30–£0.80</strong> aralığındadır.
              </p>

              <h2>Türkiye&apos;den İngiltere&apos;ye Nakliye Maliyeti</h2>
              <p>
                UK deposuna ürün ulaştırma maliyeti operasyon giderlerinin önemli bir bölümünü
                oluşturur. Türkiye&apos;den İngiltere&apos;ye 1 FCL konteyner nakliyesi ortalama
                $2.000–$4.000 USD&apos;dir (piyasa koşullarına göre değişir). LCL gönderimde
                metreküp başına fiyatlandırma yapılır.
              </p>

              <h2>Toplam UK Operasyon Maliyeti — Örnek Hesap</h2>
              <p>
                Aylık 200 sipariş, 10 palet stok tutan bir senaryo için tahmini aylık maliyet:
              </p>
              <ul>
                <li>10 palet × £10/hafta × 4 hafta = <strong>£400 depolama</strong></li>
                <li>200 sipariş × £2.50 = <strong>£500 pick&amp;pack</strong></li>
                <li>200 sipariş × £1.00 = <strong>£200 paketleme materyali</strong></li>
                <li>Kargo ortalama £4/sipariş × 200 = <strong>£800</strong></li>
                <li><strong>Toplam: ~£1.900/ay</strong> (kargo dahil)</li>
              </ul>

              <h2>Maliyet Optimizasyon Önerileri</h2>
              <ul>
                <li>Toplu gönderimle nakliye maliyetini düşürün</li>
                <li>Hızlı satış yapılan ürünleri stokta tutun, yavaş dönenler için sipariş bazlı model uygulayın</li>
                <li>Fulfillment + Amazon prep entegrasyonuyla çifte işlem ücretinden kaçının</li>
                <li>Türkçe iletişim yapabilen bir partner seçerek operasyon hataları ve iletişim gecikmelerini minimize edin</li>
              </ul>

              <h2>Sık Sorulan Sorular</h2>

              <h3>İngiltere&apos;de 1 palet depolama maliyeti ne kadardır?</h3>
              <p>
                İngiltere&apos;de standart 1 palet depolama haftalık ortalama £8–£15 arasındadır.
                Ürün tipi, erişim sıklığı ve stok süresi bu fiyatı etkiler.
              </p>

              <h3>İngiltere fulfillment maliyeti nasıl hesaplanır?</h3>
              <p>
                Fulfillment maliyeti; depolama ücreti + sipariş başına pick&amp;pack ücreti +
                paketleme materyali + kargo ücreti toplamından oluşur.
              </p>

              <h3>Amazon prep ve fulfillment hizmetini birlikte alabilir miyim?</h3>
              <p>
                Evet. LondraDepo.com&apos;da Amazon prep ve 3PL fulfillment hizmetlerini tek
                operasyon çatısı altında sunuyoruz. Bu yaklaşım çift işlem ücretini ortadan kaldırır.
              </p>
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
