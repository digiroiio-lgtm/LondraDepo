import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import ArticleHero from "@/components/ArticleHero";
import CtaCards from "@/components/CtaCards";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/blog/ingiltere-depo-rehberi`;
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "İngiltere Depo Hizmeti: Kapsamlı Rehber 2025 | LondraDepo.com",
  description:
    "Türkiye'den İngiltere'ye ihracat yapan markalar için UK depolama süreçleri, maliyetler, lokasyon seçimi ve doğru partner bulma rehberi.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "İngiltere Depo Hizmeti: Kapsamlı Rehber | LondraDepo.com",
    description: "UK depolama süreçleri, maliyetler ve doğru partner seçimi için kapsamlı rehber.",
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
        { "@type": "ListItem", position: 3, name: "İngiltere Depo Rehberi", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "İngiltere Depo Hizmeti: Kapsamlı Rehber 2025",
      description: "Türkiye'den İngiltere'ye ihracat yapan markalar için UK depolama süreçleri, maliyetler ve partner seçimi.",
      url: PAGE_URL,
      publisher: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      inLanguage: "tr-TR",
    },
  ],
};

export default function DepoRehberiPage() {
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
            <span className="text-[#0b2545] font-medium">İngiltere Depo Rehberi</span>
          </div>
        </nav>

        <article className="py-10 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <ArticleHero
              category="Depolama"
              categoryColor="text-green-700 bg-green-50"
              title="İngiltere Depo Hizmeti: Kapsamlı Rehber"
              readTime="6 dakika"
              date="2025"
            />

            <p className="text-lg leading-relaxed text-slate-600 mb-8">
              Türkiye&apos;den İngiltere&apos;ye ihracat yapıyorsanız, ürünlerinizi
              İngiltere&apos;de depolamak için güvenilir bir UK warehouse partneri bulmak
              operasyonunuzun temel taşlarından biridir. Bu rehberde İngiltere depo
              hizmetinin ne olduğunu, nasıl çalıştığını ve doğru partneri nasıl
              seçeceğinizi ele alıyoruz.
            </p>

            <CtaCards />

            <div className="article-body">
              <h2>İngiltere Depo Hizmeti Nedir?</h2>
              <p>
                UK depo hizmeti, ürünlerinizin İngiltere&apos;ye geldiğinde güvenli şekilde
                depolandığı, gerektiğinde hazırlanıp müşterilere veya satış noktalarına
                sevk edildiği lojistik altyapısını ifade eder. İngiltere&apos;de fiziksel
                stok tutmak; müşteri teslimat sürelerini kısaltır, gümrük süreçlerini
                basitleştirir ve Amazon, Etsy gibi platformlardaki satışları hızlandırır.
              </p>

              <blockquote>
                İngiltere&apos;de stok tutmak sadece bir lojistik tercih değil, UK
                pazarında rekabet edebilmenin önkoşuludur.
              </blockquote>

              <h2>Hangi İşletmeler UK Depo Hizmetine İhtiyaç Duyar?</h2>
              <ul>
                <li>Türkiye&apos;den İngiltere&apos;ye düzenli konteyner gönderen markalar</li>
                <li>Amazon UK, Etsy veya Shopify&apos;da satış yapan e-ticaret satıcıları</li>
                <li>İngiltere&apos;de toptancı veya perakende müşterilere satış yapan ithalatçılar</li>
                <li>Gıda, tekstil, ev &amp; dekorasyon ve elektronik kategorilerinde ihracat yapan üreticiler</li>
                <li>İngiltere pazar testleri yapmak isteyen KOBİ&apos;ler</li>
              </ul>

              <h2>İngiltere Depolama Süreci Nasıl İşler?</h2>
              <ol>
                <li><strong>Türkiye&apos;den sevkiyat:</strong> Ürünleriniz FCL veya LCL konteynerle İngiltere&apos;ye gönderilir.</li>
                <li><strong>Gümrük ve ithalat:</strong> Ürünler İngiltere gümrüğünden geçer, gerekli GTIP ve ithalat işlemleri tamamlanır.</li>
                <li><strong>Depoya kabul:</strong> Essex depomuza ulaşan ürünler sayılır, kontrol edilir ve stoka alınır.</li>
                <li><strong>Depolama:</strong> Ürünler ihtiyaca göre palet veya raf sisteminde depolanır.</li>
                <li><strong>Sipariş hazırlama:</strong> Gelen siparişler doğrultusunda ürünler toplanır, paketlenir ve sevke hazırlanır.</li>
                <li><strong>Dağıtım:</strong> Siparişler müşterilere veya Amazon/Etsy gibi platforma teslim edilir.</li>
              </ol>

              <h2>İngiltere&apos;de Depo Lokasyonu Neden Önemlidir?</h2>
              <p>
                Essex, Londra&apos;ya yakınlığı ve Felixstowe ile Tilbury limanlarına erişimiyle
                İngiltere&apos;nin en stratejik depolama bölgelerinden biridir. Essex&apos;ten
                İngiltere&apos;nin her yerine 24-48 saat içinde teslimat mümkündür. Amazon UK
                deposuna da kolayca erişim sağlanır.
              </p>

              <h2>Doğru UK Depo Partnerini Nasıl Seçersiniz?</h2>
              <ul>
                <li>Türkçe iletişim imkânı — Özellikle ilk aşamada kritik</li>
                <li>Palet bazlı esnek depolama seçenekleri</li>
                <li>Fulfillment ve Amazon prep kapasitesi</li>
                <li>Şeffaf haftalık ücretlendirme</li>
                <li>Stok takibi ve raporlama sistemi</li>
                <li>Konteyner kabulü yapabilme kapasitesi</li>
              </ul>

              <h2>Sık Sorulan Sorular</h2>

              <h3>İngiltere depo hizmetiniz hangi firmalar için uygun?</h3>
              <p>
                Türkiye&apos;den İngiltere&apos;ye ihracat yapan markalar, e-ticaret satıcıları,
                toptancılar, gıda üreticileri ve ithalatçılar için uygundur.
              </p>

              <h3>Paletli ürün kabul ediyor musunuz?</h3>
              <p>
                Evet. İngiltere palet depolama ihtiyacı olan işletmelere uygun
                çözümler sağlıyoruz.
              </p>

              <h3>Sadece depo mu, dağıtım da sağlıyor musunuz?</h3>
              <p>
                Depolama ile birlikte dağıtım hazırlığı ve operasyon desteği de sunuyoruz.
              </p>
            </div>

            <div className="bg-[#0b2545] text-white rounded-2xl p-8 my-10 text-center">
              <p className="font-bold text-xl mb-2">İngiltere depo ihtiyacınız için hızlı teklif alın</p>
              <p className="text-slate-300 text-sm mb-6">
                Ürün türünüzü ve hacminizi belirtin, size özel fiyat sunalım.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-3.5 rounded-full transition"
              >
                WhatsApp ile Yazın
              </a>
            </div>

            <div className="pt-8 border-t border-slate-200">
              <p className="text-slate-500 text-sm mb-3">İlgili içerikler:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/ingiltere-fulfillment-nedir" className="text-sm text-[#0b2545] hover:underline">→ İngiltere Fulfillment Nedir?</Link>
                <Link href="/blog/amazon-prep-uk-rehberi" className="text-sm text-[#0b2545] hover:underline">→ Amazon Prep UK Rehberi</Link>
                <Link href="/ingiltere-depo-avantajlari" className="text-sm text-[#0b2545] hover:underline">→ Depo Avantajları</Link>
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
