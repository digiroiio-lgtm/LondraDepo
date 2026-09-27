import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/sozlesme-kosullari`;
const LAST_UPDATED = "Eylül 2026";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sözleşme Koşulları | LondraDepo.com",
  description:
    "LondraDepo.com hizmet sözleşmesi koşulları. Hizmet kapsamı, ödeme koşulları, sorumluluk sınırlamaları ve uygulanacak hukuk hakkında bilgi.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Sözleşme Koşulları", item: PAGE_URL },
      ],
    },
  ],
};

export default function SozlesmeKosullariPage() {
  return (
    <>
      <Header />
      <main>
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-2 text-sm text-slate-500 flex gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-[#0b2545] font-medium">Sözleşme Koşulları</span>
          </div>
        </nav>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-extrabold text-[#0b2545] mb-2">Sözleşme Koşulları</h1>
            <p className="text-sm text-slate-400 mb-8">Son güncelleme: {LAST_UPDATED}</p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">1. Taraflar ve Kapsam</h2>
              <p className="text-slate-600 leading-relaxed">
                Bu sözleşme koşulları, <strong>Arca Trade Group Ltd</strong> (şirket no: 13247691,
                Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY, İngiltere) tarafından
                <strong> LondraDepo.com</strong> markası altında sunulan depolama, fulfillment,
                elleçleme, gümrükleme koordinasyonu ve dağıtım hizmetlerine ilişkin genel koşulları
                düzenler.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">2. Hizmet Kapsamı</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                LondraDepo.com aşağıdaki hizmetleri sunar:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>İngiltere depoda ürün kabulü ve stok yönetimi</li>
                <li>Palet ve koli bazlı depolama</li>
                <li>Sipariş toplama, paketleme ve sevkiyat hazırlama (pick &amp; pack)</li>
                <li>E-ticaret fulfillment (Shopify, Amazon ve diğer platformlar)</li>
                <li>Gümrükleme süreci koordinasyon desteği</li>
                <li>Yükleme, boşaltma ve elleçleme hizmetleri</li>
                <li>UK geneli nakliye ve dağıtım koordinasyonu</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-3">
                Hizmet detayları ve kapsamı, her müşteri için ayrı ayrı hazırlanan teklife göre
                belirlenir. Teklifte belirtilmeyen hizmetler bu sözleşme kapsamında değildir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">3. Ödeme Koşulları</h2>
              <p className="text-slate-600 leading-relaxed">
                Ücretler, her müşteri için ayrı ayrı hazırlanan teklif veya hizmet sözleşmesinde
                belirlenir. Fiyatlar sterlinde (GBP) belirtilir. Ödeme koşulları (ön ödeme, dönemsel
                faturalama vb.) hizmet sözleşmesinde ayrıca düzenlenir. Gecikmiş ödemelerde yasal
                faiz uygulanabilir. Ücretler önceden bildirim yapılmak kaydıyla güncellenebilir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">4. Müşteri Yükümlülükleri</h2>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Gümrük beyanı ve ithalat işlemleri için gerekli belgelerin eksiksiz sağlanması</li>
                <li>Ürünlerin yasal gerekliliklere (etiketleme, standartlar vb.) uygunluğunun temin edilmesi</li>
                <li>Stok ve sipariş bilgilerinin doğru ve zamanında iletilmesi</li>
                <li>Tehlikeli madde, kısıtlı veya yasadışı ürün gönderilmemesi</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">5. Sorumluluk Sınırlamaları</h2>
              <p className="text-slate-600 leading-relaxed">
                LondraDepo.com, müşteriye teslim alınan ürünlerin güvenli depolanması için makul
                özen gösterir. Ancak aşağıdaki durumlardan doğan kayıplar için sorumluluk
                kabul edilmez:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 mt-3">
                <li>Müşterinin kusurlu ambalajından kaynaklanan hasarlar</li>
                <li>Müşterinin hatalı veya eksik bilgi vermesinden doğan kayıplar</li>
                <li>Üçüncü taraf nakliyecilerden kaynaklanan gecikmeler veya hasarlar</li>
                <li>Doğal afet, yangın, sel veya mücbir sebep halleri</li>
                <li>Dolaylı, öngörülemeyen veya sonuçsal zararlar</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-3">
                Herhangi bir talep için azami sorumluluk, söz konusu hizmet dönemine ait
                ödenen ücretler ile sınırlıdır.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">6. Gizlilik</h2>
              <p className="text-slate-600 leading-relaxed">
                Kişisel verilerinizin işlenmesi{" "}
                <Link href="/privacy-policy" className="text-[#0b2545] underline">
                  Gizlilik Politikamız
                </Link>{" "}
                kapsamında yürütülmektedir. Ticari bilgiler gizli tutulur ve üçüncü taraflarla
                paylaşılmaz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">7. Fesih</h2>
              <p className="text-slate-600 leading-relaxed">
                Her iki taraf da 30 gün önceden yazılı bildirimle hizmet sözleşmesini sonlandırabilir.
                Ciddi sözleşme ihlallerinde LondraDepo.com hizmetleri derhal askıya alabilir.
                Fesih sonrasında depodaki stok, müşteri tarafından belirtilen adrese gönderilir;
                nakliye maliyeti müşteriye aittir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">8. Uygulanacak Hukuk ve Uyuşmazlık Çözümü</h2>
              <p className="text-slate-600 leading-relaxed">
                Bu sözleşme koşulları İngiltere ve Galler hukukuna tabidir. Taraflar arasında
                doğabilecek uyuşmazlıklar öncelikle müzakere yoluyla çözülmeye çalışılır.
                Anlaşma sağlanamaması halinde İngiltere mahkemeleri yetkilidir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">9. Değişiklikler</h2>
              <p className="text-slate-600 leading-relaxed">
                LondraDepo.com bu koşulları önceden bildirimde bulunmak kaydıyla güncelleme
                hakkını saklı tutar. Güncel koşullar her zaman bu sayfada yayımlanır.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">10. İletişim</h2>
              <p className="text-slate-600 leading-relaxed">
                Bu koşullara ilişkin sorularınız için WhatsApp üzerinden veya aşağıdaki adres
                aracılığıyla bizimle iletişime geçebilirsiniz:
              </p>
              <p className="text-slate-600 mt-3">
                Arca Trade Group Ltd<br />
                Unit 19 Arterial Park, Arterial Road<br />
                Rayleigh, Essex SS6 7FY<br />
                United Kingdom
              </p>
            </section>
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
