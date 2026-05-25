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
const PAGE_URL = `${SITE_URL}/blog/turkiyeden-ingiltereye-ihracat-rehberi`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20ihracat%20operasyonu%20hakkinda%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Türkiye'den İngiltere'ye İhracat Rehberi 2026 | UK Operasyon Altyapısı | LondraDepo.com",
  description:
    "Türkiye'den İngiltere'ye ihracat süreçleri, gümrük, GTIP, nakliye ve UK'da operasyon kurma rehberi 2026. Türk ihracatçılar için kapsamlı bilgi kaynağı.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Türkiye'den İngiltere'ye İhracat Rehberi 2026 | LondraDepo.com",
    description: "İngiltere ihracat süreçleri, gümrük ve UK'da depo operasyonu kurma rehberi.",
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
        { "@type": "ListItem", position: 3, name: "Türkiye'den İngiltere'ye İhracat Rehberi", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "Türkiye'den İngiltere'ye İhracat Rehberi 2026",
      description: "Türk ihracatçılar için UK ihracat süreçleri, gümrük ve operasyon rehberi.",
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
          name: "Türkiye'den İngiltere'ye ihracat nasıl yapılır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Türkiye'den İngiltere'ye ihracat için: ürün GTIP kodunu belirleyin, ihracat belgelerini hazırlayın (invoice, packing list, EUR.1 veya A.TR), nakliyeci ile İngiltere'ye sevkiyat yapın, İngiltere gümrüğünde ürünleri beyan edin ve İngiltere deposuna teslim ettirin.",
          },
        },
        {
          "@type": "Question",
          name: "Brexit sonrası Türkiye'den İngiltere'ye ihracat nasıl etkilendi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brexit sonrası AB gümrük birliği geçerli olmadığından UK'ya ayrı gümrük beyanı gereklidir. Türkiye-UK serbest ticaret anlaşması 2021'de yürürlüğe girdi; bu anlaşma kapsamındaki ürünler için UK gümrük vergisinden muafiyet veya indirim uygulanabilir.",
          },
        },
      ],
    },
  ],
};

const relatedArticles = [
  { href: "/blog/ingiltere-depo-rehberi", title: "İngiltere Depo Hizmeti: Kapsamlı Rehber", category: "Depolama", readTime: "6 dk", categoryColor: "bg-green-50 text-green-700" },
  { href: "/blog/ingiltere-depo-fiyatlari-2026", title: "İngiltere Depo Fiyatları 2026", category: "Depolama", readTime: "7 dk", categoryColor: "bg-green-50 text-green-700" },
  { href: "/blog/ingiltere-ara-depo-nedir", title: "İngiltere Ara Depo Nedir?", category: "Depolama", readTime: "5 dk", categoryColor: "bg-green-50 text-green-700" },
  { href: "/blog/ingiltere-fulfillment-nedir", title: "İngiltere Fulfillment Nedir?", category: "Fulfillment", readTime: "5 dk", categoryColor: "bg-blue-50 text-blue-700" },
];

export default function IhracatRehberiPage() {
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
            <span className="text-[#0b2545] font-medium">Türkiye&apos;den İngiltere&apos;ye İhracat Rehberi</span>
          </div>
        </nav>

        <article className="py-10 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <ArticleHero
              category="İhracat"
              categoryColor="text-purple-700 bg-purple-50"
              title="Türkiye'den İngiltere'ye İhracat Rehberi 2026"
              readTime="10 dakika"
              date="Ocak 2026"
            />

            <p className="text-lg leading-relaxed text-slate-600 mb-8">
              Türkiye&apos;den İngiltere&apos;ye ihracat yapmak hem fırsatlarla hem bürokratik
              detaylarla dolu bir süreçtir. Bu rehberde gümrük, GTIP, nakliye, UK&apos;da
              operasyon kurma ve depolama süreçlerini adım adım ele alıyoruz. Hedef: ürünleriniz
              Türkiye&apos;den çıkıp İngiltere&apos;deki müşteriye en verimli şekilde ulaşsın.
            </p>

            <CtaCards />

            <div className="article-body">
              <h2>Türkiye&apos;den İngiltere&apos;ye İhracat: Temel Adımlar</h2>
              <ol>
                <li><strong>GTIP kodu belirleme:</strong> Ürününüzün Türkiye gümrük tarifesi ve UK tarife kodu (HS code) belirlenir.</li>
                <li><strong>İhracat belgeleri:</strong> Ticari fatura (invoice), ambalaj listesi (packing list), menşe belgesi (EUR.1 veya A.TR), varsa analiz raporları.</li>
                <li><strong>Nakliyat:</strong> FCL konteyner, LCL parsiyel yük veya hava kargo seçeneklerinden biri tercih edilir.</li>
                <li><strong>UK gümrük beyanı:</strong> İngiltere gümrüğünde import declaration yapılır (CHIEF veya CDS sistemi).</li>
                <li><strong>Teslim ve depolama:</strong> Ürünler UK deposuna (Essex vb.) ulaştırılır, sayılır ve stoka alınır.</li>
                <li><strong>Dağıtım veya fulfillment:</strong> UK&apos;daki müşterilere veya Amazon&apos;a dağıtım başlar.</li>
              </ol>

              <h2>Brexit Sonrası Türkiye-UK İhracat Süreci</h2>
              <p>
                Brexit (2021) ile birlikte İngiltere AB gümrük birliğinden çıktı. Bu durum
                Türkiye&apos;den İngiltere&apos;ye ihracatı doğrudan etkiledi. Ancak 2021
                yılında imzalanan <strong>Türkiye-UK Serbest Ticaret Anlaşması</strong>, birçok
                ürün kategorisinde gümrük vergisini sıfıra indirdi ya da önemli ölçüde azalttı.
              </p>
              <p>
                Önemli nokta: Serbest ticaret anlaşmasından yararlanmak için ürünün Türkiye
                menşeili olduğunu kanıtlayan <strong>menşe beyanı</strong> veya EUR.1 belgesi
                sunulmalıdır.
              </p>

              <blockquote>
                Türkiye menşeili ürünler için UK serbest ticaret anlaşmasından yararlanmak,
                gümrük maliyetlerinizi ciddi ölçüde düşürmenizi sağlar.
              </blockquote>

              <h2>İngiltere&apos;de Depo Kurmanın Avantajları</h2>
              <p>
                Ürünlerinizi İngiltere&apos;de depolamak, ihracat sürecini sadece lojistik
                açıdan değil, rekabet açısından da güçlendirir:
              </p>
              <ul>
                <li><strong>Hız:</strong> Ürünler UK müşterisine 1-2 iş günü içinde ulaşır</li>
                <li><strong>Güven:</strong> UK&apos;da fiziksel stok, müşteri güvenini artırır</li>
                <li><strong>Amazon Prime:</strong> FBA veya SFP ile Prime erişimi sağlanır</li>
                <li><strong>İade yönetimi:</strong> UK&apos;daki iadeler yerel olarak karşılanır</li>
                <li><strong>Düşük gümrük riski:</strong> Ürünler gümrüğü geçtikten sonra UK&apos;da serbestçe hareket eder</li>
              </ul>

              <h2>Nakliye Seçenekleri: Türkiye → İngiltere</h2>
              <ul>
                <li><strong>FCL (Full Container Load):</strong> 20ft veya 40ft tam konteyner — büyük hacimli gönderimler için</li>
                <li><strong>LCL (Less than Container Load):</strong> Parsiyel yük — küçük hacimli gönderimler için, metreküp başına ücret</li>
                <li><strong>Hava kargo:</strong> Acil gönderimler için — daha yüksek maliyet</li>
                <li><strong>Kara + deniz:</strong> Türkiye çıkışlı kamyon + Avrupa transit + ro-ro/deniz kombinasyonu</li>
              </ul>

              <h2>İngiltere Gümrük Süreci</h2>
              <p>
                UK&apos;ya gelen ürünler İngiliz gümrüğüne (HMRC) beyan edilmelidir. İthalat
                beyanı (import declaration) için gerekli belgeler:
              </p>
              <ul>
                <li>Ticari fatura</li>
                <li>Ambalaj listesi</li>
                <li>Konşimento veya hava konşimentosu</li>
                <li>Menşe belgesi (serbest ticaret anlaşması için)</li>
                <li>Sigorta belgesi</li>
              </ul>

              <h2>UK&apos;da Kendi Deponuzu Kurmak mı, 3PL mi?</h2>
              <p>
                Kendi UK deponuzu kurmak ciddi sermaye gerektirir: kira, personel, sigorta,
                ekipman. 3PL (LondraDepo.com gibi) seçeneğinde ise sabit maliyet olmaz,
                kullandığınız kadar ödersiniz. Büyüme aşamasındaki markalar için 3PL modeli
                genellikle daha akıllıca bir başlangıçtır.
              </p>

              <h2>Sık Sorulan Sorular</h2>

              <h3>Türkiye&apos;den İngiltere&apos;ye ihracat nasıl yapılır?</h3>
              <p>
                GTIP kodunu belirleyin, ihracat belgelerini hazırlayın, nakliyeci ile
                İngiltere&apos;ye sevkiyat yapın, İngiltere gümrüğünde ürünleri beyan edin
                ve İngiltere deposuna teslim ettirin.
              </p>

              <h3>Brexit sonrası Türkiye&apos;den İngiltere&apos;ye ihracat nasıl etkilendi?</h3>
              <p>
                Brexit sonrası AB gümrük birliği geçerli olmadığından UK&apos;ya ayrı gümrük
                beyanı gereklidir. Türkiye-UK serbest ticaret anlaşması 2021&apos;de yürürlüğe
                girdi; bu anlaşma kapsamındaki ürünler için gümrük vergisinden muafiyet
                veya indirim uygulanabilir.
              </p>

              <h3>İngiltere&apos;ye ihracat için hangi belgeler gereklidir?</h3>
              <p>
                Ticari fatura, ambalaj listesi, konşimento, menşe belgesi (EUR.1 veya menşe
                beyanı) ve varsa özel ürün belgeleri (CE, gıda analizi vb.) gereklidir.
              </p>
            </div>

            <div className="bg-[#0b2545] text-white rounded-2xl p-8 my-10 text-center">
              <p className="font-bold text-xl mb-2">
                İngiltere ihracat operasyonunuzu planlayın
              </p>
              <p className="text-slate-300 text-sm mb-6">
                Ürün kategorinizi ve hedef pazarınızı paylaşın — UK operasyon modeli hazırlayalım.
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
                <Link href="/ingiltere-fulfillment" className="text-sm text-[#0b2545] hover:underline">→ İngiltere Fulfillment</Link>
                <Link href="/palet-depolama" className="text-sm text-[#0b2545] hover:underline">→ Palet Depolama</Link>
                <Link href="/amazon-prep-uk" className="text-sm text-[#0b2545] hover:underline">→ Amazon Prep UK</Link>
                <Link href="/case-studies" className="text-sm text-[#0b2545] hover:underline">→ Başarı Hikayeleri</Link>
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
