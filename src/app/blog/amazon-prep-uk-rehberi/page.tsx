import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import ArticleHero from "@/components/ArticleHero";
import CtaCards from "@/components/CtaCards";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/blog/amazon-prep-uk-rehberi`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20Amazon%20Prep%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Amazon Prep UK: Adım Adım Rehber 2025 | LondraDepo.com",
  description:
    "Amazon FBA için İngiltere'de prep hizmeti nedir, nasıl alınır, FNSKU etiketleme ve FBA hazırlık süreci. Türk ihracatçıları için kapsamlı Amazon Prep UK rehberi.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Amazon Prep UK Rehberi | LondraDepo.com",
    description: "Amazon FBA prep hizmeti nedir, nasıl çalışır? Türk ihracatçılar için UK Amazon prep rehberi.",
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
        { "@type": "ListItem", position: 3, name: "Amazon Prep UK Rehberi", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "Amazon Prep UK: Adım Adım Rehber 2025",
      description: "Amazon FBA için İngiltere prep hizmeti rehberi. FNSKU etiketleme, FBA hazırlık ve sevk süreçleri.",
      url: PAGE_URL,
      publisher: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      inLanguage: "tr-TR",
    },
  ],
};

export default function AmazonPrepRehberiPage() {
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
            <span className="text-[#0b2545] font-medium">Amazon Prep UK Rehberi</span>
          </div>
        </nav>

        <article className="py-10 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <ArticleHero
              category="Amazon"
              categoryColor="text-orange-700 bg-orange-50"
              title="Amazon Prep UK: Adım Adım Rehber"
              readTime="7 dakika"
              date="2025"
            />

            <p className="text-lg leading-relaxed text-slate-600 mb-8">
              Amazon UK&apos;da FBA ile satış yapıyorsanız veya yapmayı planlıyorsanız,
              ürünlerinizin Amazon deposuna kabul edilmesi için belirli hazırlık
              adımlarını tamamlamanız gerekir. Bu sürecin tamamına &quot;Amazon Prep&quot; denir
              ve İngiltere&apos;de bu hizmeti sunan bir partner bulmak operasyonunuzu
              büyük ölçüde kolaylaştırır.
            </p>

            <CtaCards />

            <div className="article-body">
              <h2>Amazon FBA Nedir?</h2>
              <p>
                FBA (Fulfillment by Amazon), ürünlerinizi Amazon deposuna gönderdiğinizde
                Amazon&apos;un depolama, sipariş hazırlama ve teslimatı üstlendiği programdır.
                FBA satıcıları otomatik olarak Prime badge kazanır ve Amazon&apos;un lojistik
                ağından yararlanır.
              </p>

              <h2>Amazon Prep Neden Gereklidir?</h2>
              <p>
                Amazon, deposuna gönderilen ürünlerin belirli fiziksel ve etiketleme
                standartlarını karşılamasını zorunlu tutar. Bu gereksinimleri karşılamayan
                ürünler Amazon tarafından reddedilebilir veya ek ücrete tabi tutulabilir.
              </p>

              <blockquote>
                Amazon&apos;un prep kuralları sık güncellenir — güncel gereksinimleri
                takip eden bir UK partneri çalışmak, maliyetli red riskini ortadan kaldırır.
              </blockquote>

              <h2>Amazon Prep UK Süreci — Adım Adım</h2>
              <ol>
                <li>
                  <strong>Ürünlerin İngiltere&apos;ye gelmesi:</strong> Türkiye&apos;den sevk
                  edilen ürünler Essex depomuzda teslim alınır.
                </li>
                <li>
                  <strong>Ürün kontrolü:</strong> Ürünler hasar açısından kontrol edilir,
                  eksik veya hatalı ürünler raporlanır.
                </li>
                <li>
                  <strong>FNSKU etiketleme:</strong> Her ürün için Amazon tarafından talep
                  edilen FNSKU barkod etiketi uygulanır.
                </li>
                <li>
                  <strong>Paketleme kontrolü:</strong> Amazon&apos;un ambalaj ve kutu
                  kurallarına uygunluk kontrol edilir.
                </li>
                <li>
                  <strong>Shipment plan oluşturma:</strong> Amazon Seller Central üzerinden
                  shipment planı oluşturulur, Amazon hangi depoya göndereceğimizi belirler.
                </li>
                <li>
                  <strong>Amazon deposuna sevk:</strong> Hazır ürünler belirlenen Amazon UK
                  deposuna teslim edilir.
                </li>
                <li>
                  <strong>Kabul takibi:</strong> Amazon sisteminde ürünlerin depo kabulü
                  takip edilir ve satışa hazır duruma gelmesi beklenir.
                </li>
              </ol>

              <h2>FNSKU Etiketleme Nedir?</h2>
              <p>
                FNSKU (Fulfillment Network Stock Keeping Unit), Amazon&apos;un her ürüne
                atadığı benzersiz bir kimliktir. Bu etiket sayesinde Amazon, deposundaki
                hangi ürünün hangi satıcıya ait olduğunu takip eder. Her ürüne ya ASIN
                barkodunu kapatacak şekilde FNSKU etiketi yapıştırılmalı ya da ürün
                orijinalinde FNSKU kodunu içermelidir.
              </p>

              <h2>Amazon Prep Hizmetinin Maliyeti</h2>
              <p>
                Amazon prep maliyeti; ürün sayısı, etiketleme gereksinimleri ve paketleme
                durumuna göre belirlenir. Detaylı fiyat bilgisi için WhatsApp üzerinden
                bize ulaşabilirsiniz.
              </p>

              <h2>Sık Sorulan Sorular</h2>

              <h3>Amazon prep için Türkiye&apos;den mi göndermeliyim?</h3>
              <p>
                Ürünlerinizi doğrudan Türkiye&apos;den İngiltere&apos;deki depomuza
                gönderebilirsiniz. Biz oradan prep işlemlerini yapıp Amazon&apos;a sevk ediyoruz.
              </p>

              <h3>Shipment plan oluşturmaya yardım ediyor musunuz?</h3>
              <p>
                Evet. Amazon Seller Central üzerindeki shipment plan oluşturma sürecinde
                rehberlik ediyoruz.
              </p>

              <h3>Kaç adet ürün için minimum sipariş var mı?</h3>
              <p>
                Sabit bir minimum yoktur. İhtiyacınıza göre esneklik sunuyoruz — hem küçük
                batch&apos;ler hem büyük konteyner operasyonları için çalışıyoruz.
              </p>
            </div>

            <div className="bg-[#0b2545] text-white rounded-2xl p-8 my-10 text-center">
              <p className="font-bold text-xl mb-2">Amazon Prep UK operasyonunuzu başlatın</p>
              <p className="text-slate-300 text-sm mb-6">
                FNSKU etiketleme, FBA hazırlık ve sevk için hemen iletişime geçin.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-3.5 rounded-full transition"
              >
                WhatsApp ile Bilgi Alın
              </a>
            </div>

            <div className="pt-8 border-t border-slate-200">
              <p className="text-slate-500 text-sm mb-3">İlgili içerikler:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/ingiltere-depo-rehberi" className="text-sm text-[#0b2545] hover:underline">→ İngiltere Depo Rehberi</Link>
                <Link href="/blog/ingiltere-fulfillment-nedir" className="text-sm text-[#0b2545] hover:underline">→ Fulfillment Nedir?</Link>
                <Link href="/amazon-prep-uk" className="text-sm text-[#0b2545] hover:underline">→ Amazon Prep Hizmetimiz</Link>
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
