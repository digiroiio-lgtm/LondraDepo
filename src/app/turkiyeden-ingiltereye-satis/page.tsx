import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20Türkiye%27den%20İngiltere%27ye%20satış%20hakkında%20bilgi%20almak%20istiyorum.";
const TEL = "tel:+447554195190";

export const metadata: Metadata = {
  title: "Türkiye'den İngiltere'ye Nasıl Satış Yapılır? 2026 Rehberi | LondraDepo.com",
  description:
    "Türkiye'den İngiltere'ye satış rehberi 2026. Ürün gönderimi, gümrük, depolama, Amazon ve Shopify satışı, pick & pack, sipariş karşılama ve UK lojistik. Adım adım rehber.",
  keywords: [
    "türkiyeden ingiltereye satis",
    "türkiyeden ingiltereye nasıl satış yapılır",
    "türkiyeden ingiltereye ürün satma",
    "ingiltereye satış nasıl yapılır",
    "türkiye uk satış",
    "ingiltere pazarına giriş türkiye",
    "türkiyeden uk e ticaret",
    "ingiltereye ürün satmak",
    "uk satış türk işletme",
    "türkiyeden ingiltereye ihracat rehberi",
  ],
  alternates: { canonical: `${SITE_URL}/turkiyeden-ingiltereye-satis` },
  openGraph: {
    title: "Türkiye'den İngiltere'ye Satış Rehberi 2026 | LondraDepo.com",
    description: "TR→UK satış rehberi: gümrük, depo, Shopify, Amazon, pick & pack, teslimat. Adım adım 2026.",
    url: `${SITE_URL}/turkiyeden-ingiltereye-satis`,
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
        { "@type": "ListItem", position: 2, name: "Türkiye'den İngiltere'ye Satış", item: `${SITE_URL}/turkiyeden-ingiltereye-satis` },
      ],
    },
    {
      "@type": "Article",
      headline: "Türkiye'den İngiltere'ye Nasıl Satış Yapılır? 2026 Rehberi",
      description:
        "Türkiye'den UK'e satış yapmanın tüm adımları: satış modeli seçimi, ürün gönderimi, gümrük, depolama, Shopify ve Amazon satışı, pick & pack ve sipariş karşılama.",
      author: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      publisher: { "@type": "Organization", name: "LondraDepo.com", url: SITE_URL },
      url: `${SITE_URL}/turkiyeden-ingiltereye-satis`,
      datePublished: "2025-01-01",
      dateModified: "2026-01-01",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Türkiye'den İngiltere'ye nasıl satış yapılır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Türkiye'den İngiltere'ye satış yapmanın en yaygın yolu: ürünleri UK'de bir depoda stoklamak (LondraDepo gibi) ve Shopify veya Amazon FBM üzerinden UK müşterilerine satmaktır. Bu model, İngiltere'de şirket veya depo kurmadan UK pazarına girmenizi sağlar.",
          },
        },
        {
          "@type": "Question",
          name: "İngiltere'de şirket kurmadan satış yapabilir miyim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet, mümkündür. Türkiye'deki şirketinizle UK pazarına girebilirsiniz. Vergi yükümlülükleri konusunda bağımsız bir danışmandan destek almanızı öneririz.",
          },
        },
        {
          "@type": "Question",
          name: "Türkiye'den İngiltere'ye ürün gönderimi nasıl yapılır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ürünler uluslararası bir nakliyeci veya kargo firması aracılığıyla UK'ye gönderilir. UK gümrüğünden geçtikten sonra LondraDepo depomuzda teslim alınır.",
          },
        },
      ],
    },
  ],
};

export default function TurkiyedenIngiltereye() {
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
              <span className="text-white">Türkiye&apos;den İngiltere&apos;ye Satış</span>
            </nav>
            <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-4">
              📖 2026 Rehberi
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              Türkiye&apos;den İngiltere&apos;ye{" "}
              <span className="text-[#e63946]">Nasıl Satış Yapılır?</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-8">
              Satış modeli seçiminden gümrüğe, depolamadan sipariş karşılamaya —
              Türkiye&apos;den UK pazarına girmenin tüm adımlarını bu rehberde bulabilirsiniz.
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

        {/* Article body */}
        <article className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto prose-like">

            {/* 1 */}
            <section className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b2545] mb-3">1. İngiltere&apos;de Satış Modeli Seçin</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Türkiye&apos;den UK&apos;e satış yapmanın birkaç yolu vardır:
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-[#0b2545] font-bold mt-0.5">→</span> <span><strong>UK depoda stok tutup online satış:</strong> Ürünleri UK&apos;de bir depoda (LondraDepo gibi) stoklayın, Shopify veya Amazon üzerinden satın. En yaygın ve ölçeklenebilir model.</span></li>
                <li className="flex items-start gap-2"><span className="text-[#0b2545] font-bold mt-0.5">→</span> <span><strong>Toptan satış:</strong> UK&apos;deki toptan alıcılara direkt sevkiyat yapın.</span></li>
                <li className="flex items-start gap-2"><span className="text-[#0b2545] font-bold mt-0.5">→</span> <span><strong>Dropshipping:</strong> Türkiye&apos;den direkt müşteriye gönderim. UK müşteri beklentileri açısından dikkatli değerlendirin.</span></li>
              </ul>
            </section>

            {/* 2 */}
            <section className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b2545] mb-3">2. Ürün Gönderimi: Türkiye&apos;den UK&apos;e</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Ürünlerin Türkiye&apos;den UK&apos;e taşınması için uluslararası bir nakliyeci veya kargo firmasıyla çalışmanız gerekir. LondraDepo uluslararası nakliye hizmeti sunmamaktadır; ancak ürünleriniz UK&apos;ye ulaştığında tüm süreci devralırız.
              </p>
              <div className="bg-[#f6f8fb] rounded-xl p-4 text-sm text-slate-600">
                <strong className="text-[#0b2545]">LondraDepo bu aşamada:</strong> Ürünlerinizin depo adresine kabulü ve gümrük koordinasyon desteği sağlar. Uluslararası nakliye için ayrı bir taşıyıcıyla çalışmanız gerekir.
              </div>
            </section>

            {/* 3 */}
            <section className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b2545] mb-3">3. UK Gümrüğü</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Türkiye&apos;den UK&apos;e gelen ürünler ithalat gümrüğüne tabidir. UK gümrük beyanı lisanslı gümrükçüler tarafından yapılmalıdır. Gerekli belgeler genellikle şunları içerir:
              </p>
              <ul className="space-y-1 text-sm text-slate-600 mb-3">
                <li>• Ticari fatura (Commercial Invoice)</li>
                <li>• Ambalaj listesi (Packing List)</li>
                <li>• Taşıma belgesi (Konşimento / Air Waybill)</li>
                <li>• Ürüne bağlı sertifikalar (CE, UKCA vb.)</li>
              </ul>
              <Link href="/gumrukleme" className="text-[#e63946] text-sm font-semibold hover:underline">
                Gümrükleme Desteği hakkında daha fazla bilgi →
              </Link>
            </section>

            {/* 4 */}
            <section className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b2545] mb-3">4. UK Deposuna Ürün Kabulü (Mal Kabul)</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Gümrük işlemlerinin ardından ürünleriniz Essex depomuzda teslim alınır. Mal kabul sürecinde:
              </p>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Ürünler sayılır ve kontrol edilir</li>
                <li>• Depo yönetim sistemi (Mintsoft WMS) üzerine kaydedilir</li>
                <li>• Depolama konumuna yerleştirilir</li>
              </ul>
            </section>

            {/* 5 */}
            <section className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b2545] mb-3">5. Stok Yönetimi</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ürünleriniz Mintsoft WMS üzerinde takip edilir. Stok seviyeleri anlık olarak izlenir; giriş ve çıkışlar sisteme yansıtılır. Bu, hem satış kanallarınızla senkronizasyon hem de stok planlaması açısından kritiktir.
              </p>
            </section>

            {/* 6 */}
            <section className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b2545] mb-3">6. Shopify ile İngiltere&apos;de Satış</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Shopify, Türkiye&apos;de kurulu işletmelerin UK pazarına satış yapması için yaygın kullanılan bir platformdur. Shopify mağazanızı kurduktan sonra ürün stoğunuzu UK depomuzda (LondraDepo) tutabilir, sipariş geldiğinde depo ekibimiz karşılayabilir.
              </p>
              <Link href="/shopify-ingiltere-depo" className="text-[#e63946] text-sm font-semibold hover:underline">
                Shopify İngiltere Depo hakkında daha fazla bilgi →
              </Link>
            </section>

            {/* 7 */}
            <section className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b2545] mb-3">7. Amazon ile İngiltere&apos;de Satış</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Amazon UK&apos;de iki temel model vardır:
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-3">
                <li><strong>FBA (Fulfillment by Amazon):</strong> Ürünler Amazon deposuna gönderilir, Amazon karşılar. FBA hazırlığı için bkz. <Link href="/amazon-prep-uk" className="text-[#e63946] hover:underline">Amazon Prep UK</Link>.</li>
                <li><strong>FBM (Fulfilled by Merchant):</strong> Ürünler kendi (veya LondraDepo gibi üçüncü taraf) deponuzda; siz (veya deponuz) karşılar. LondraDepo FBM modelini destekler.</li>
              </ul>
              <Link href="/amazon-ingiltere-depo" className="text-[#e63946] text-sm font-semibold hover:underline">
                Amazon FBM İngiltere Depo hakkında daha fazla bilgi →
              </Link>
            </section>

            {/* 8 */}
            <section className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b2545] mb-3">8. Siparişlerin İşlenmesi</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Online mağazanızdan gelen siparişler depo yönetim sistemine aktarılır. Depo ekibi siparişi sisteme göre işler; her sipariş için doğru ürün doğru miktarda toplanır. Depo operasyonumuz Mintsoft WMS üzerinden yürütülür.
              </p>
            </section>

            {/* 9 */}
            <section className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b2545] mb-3">9. Sipariş Toplama (Pick)</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Pick aşamasında depo ekibi, gelen siparişteki ürünleri depo raflarından toplar. Birden fazla ürün içeren siparişlerde her kalem doğru şekilde seçilir ve sipariş doğrulaması yapılır.
              </p>
              <Link href="/siparis-toplama-paketleme" className="text-[#e63946] text-sm font-semibold hover:underline">
                Pick &amp; Pack hizmeti hakkında →
              </Link>
            </section>

            {/* 10 */}
            <section className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b2545] mb-3">10. Paketleme (Pack) ve Etiketleme</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Toplanan ürünler uygun ambalaj ile paketlenir. Ardından kargo etiketi oluşturulur ve kutuya yapıştırılır. Özel paketleme veya markalı ambalaj gereksinimleri için bizimle görüşün.
              </p>
            </section>

            {/* 11 */}
            <section className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b2545] mb-3">11. UK&apos;de Kargo ve Teslimat</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Paketlenen sipariş UK kargo ağına verilir. Depo konumumuz (Essex), İngiltere geneline teslimat için elverişli bir lojistik noktasındadır. Farklı teslimat hızları (standart, ekspres) için taşıyıcı koordinasyonu sağlanır.
              </p>
            </section>

            {/* 12 */}
            <section className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b2545] mb-3">12. İade Yönetimi</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                UK e-ticarette iade oranları yüksek olabilir. İadeler depomuzda teslim alınır, kontrol edilir ve sisteme geri kaydedilir. Hasarlı veya kullanılamaz ürünler ayrıştırılır; kullanılabilir ürünler stoka geri alınır.
              </p>
            </section>

            {/* 13 */}
            <section className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b2545] mb-3">13. Toplam Maliyet Yapısı</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Türkiye&apos;den UK&apos;e satışın maliyet kalemleri şunlardır:
              </p>
              <ul className="space-y-1 text-sm text-slate-600 mb-3">
                <li>• Uluslararası nakliye (Türkiye → UK)</li>
                <li>• UK ithalat gümrüğü ve KDV</li>
                <li>• Depolama (palet/koli başına)</li>
                <li>• Mal kabul ücreti</li>
                <li>• Pick &amp; pack (sipariş başına)</li>
                <li>• Kargo (UK içi teslimat)</li>
                <li>• Platform komisyonu (Shopify, Amazon)</li>
                <li>• İade yönetimi</li>
              </ul>
              <Link href="/ingiltere-depo-fiyatlari" className="text-[#e63946] text-sm font-semibold hover:underline">
                İngiltere Depo Fiyatları →
              </Link>
            </section>

            {/* 14 */}
            <section className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b2545] mb-3">14. Türk Şirketleri İçin Özel Değerlendirmeler</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Türkiye&apos;den UK pazarına giren işletmelerin dikkate alması gereken başlıca konular:
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• <strong>UK vergi yükümlülükleri:</strong> Belirli bir satış eşiğini aşınca UK KDV kaydı gerekebilir. Bağımsız muhasebe danışmanından destek alın.</li>
                <li>• <strong>Ürün uyumu:</strong> UK piyasasına giren ürünler UKCA veya CE işareti gerektirebilir.</li>
                <li>• <strong>Gümrük tarifeleri:</strong> Ürün HS koduna göre UK ithalat vergisi farklılık gösterir.</li>
              </ul>
              <Link href="/turk-sirketleri-icin-ingiltere-depo" className="inline-block mt-3 text-[#e63946] text-sm font-semibold hover:underline">
                Türk Şirketleri İçin İngiltere Depo →
              </Link>
            </section>

            {/* 15 */}
            <section className="mb-12">
              <h2 className="text-xl font-extrabold text-[#0b2545] mb-3">15. Teklif Alın ve Başlayın</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Türkiye&apos;den UK&apos;e satış operasyonunuzu LondraDepo ile kurmak için WhatsApp veya telefon üzerinden bize ulaşın. Ürün türü, tahmini stok miktarı ve aylık sipariş hacminizi paylaşın; size özel teklif hazırlayalım.
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
                  className="inline-flex items-center justify-center gap-2 border border-[#0b2545] text-[#0b2545] hover:bg-[#0b2545] hover:text-white font-bold px-8 py-4 rounded-full transition"
                >
                  Hemen Ara
                </a>
              </div>
            </section>

          </div>
        </article>

        {/* Related links */}
        <section className="py-12 px-4 bg-[#f6f8fb]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-bold text-[#0b2545] mb-4">İlgili Sayfalar</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/turkiyeden-ingiltereye-depolama", label: "Türkiye'den İngiltere'ye Depolama" },
                { href: "/ingiltere-depo", label: "İngiltere Depo" },
                { href: "/gumrukleme", label: "Gümrükleme Desteği" },
                { href: "/shopify-ingiltere-depo", label: "Shopify İngiltere Depo" },
                { href: "/amazon-ingiltere-depo", label: "Amazon FBM İngiltere Depo" },
                { href: "/ingiltere-depo-fiyatlari", label: "Depo Fiyatları" },
                { href: "/turk-sirketleri-icin-ingiltere-depo", label: "Türk Şirketleri İçin" },
                { href: "/siparis-toplama-paketleme", label: "Pick & Pack" },
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
