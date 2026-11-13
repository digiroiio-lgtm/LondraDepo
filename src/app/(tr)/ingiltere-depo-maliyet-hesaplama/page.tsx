import type { Metadata } from "next";
import Link from "next/link";
import TrBreadcrumb from "@/components/TrBreadcrumb";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import FaqJsonLd from "@/components/FaqJsonLd";
import CostCalculator from "@/components/CostCalculator";
import QuoteForm from "@/components/QuoteForm";
import { SITE_URL } from "@/lib/site";
import { trAlternates } from "@/lib/i18n";

const PATH = "/ingiltere-depo-maliyet-hesaplama";
const TITLE = "İngiltere Palet Depolama Maliyet Hesaplama";
const DESCRIPTION =
  "İngiltere'de palet depolama maliyetinizi saniyeler içinde hesaplayın: palet × hafta × £3,50 + KDV. KDV dahil toplamı görün, elleçleme ve fulfillment için teklif isteyin.";

export const metadata: Metadata = {
  title: `${TITLE} | LondraDepo`,
  description: DESCRIPTION,
  alternates: trAlternates(PATH),
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, siteName: "LondraDepo.com", locale: "tr_TR", type: "website" },
};

const faqs = [
  { q: "İngiltere'de 1 palet depolama ne kadar?", a: "LondraDepo'da standart palet depolama haftalık palet başına £3,50 + KDV'den başlar. Örneğin 10 palet 4 hafta için £140 + KDV, KDV dahil £168 tutar." },
  { q: "Hesaplayıcının sonucu kesin fiyat mı?", a: "Hayır. Standart paletler için başlangıç fiyatıyla yapılan bir tahmindir. Palet ölçüsü, ürün türü, depolama süresi ve işlem hacmi toplamı değiştirebilir; diğer hizmetler ayrıca tekliflendirilir." },
  { q: "Tahmine mal kabul ve teslimat dahil mi?", a: "Hayır. Mal kabul, konteyner boşaltma, pick & pack, Amazon hazırlık ve teslimat, ürünleriniz ve hacminiz netleştikten sonra ayrıca tekliflendirilir." },
  { q: "Kesin teklifi nasıl alırım?", a: "Hesaplayıcının altındaki butonla sayfadaki teklif formuna geçin ya da tahmini WhatsApp'tan gönderin. Ürün türünüzü ve ihtiyacınız olan hizmetleri yazmanız yeterlidir." },
  { q: "Hesaplayıcı KDV'yi de gösteriyor mu?", a: "Evet. Hesaplayıcı depolama maliyetini KDV hariç gösterir ve İngiltere standart oranı olan %20 KDV'yi ekleyerek KDV dahil toplamı da verir. Örneğin 10 palet 4 hafta £140 + KDV, KDV dahil £168 tutar." },
];

const ROWS = [
  ["5 palet × 4 hafta", "£70,00", "£84,00"],
  ["10 palet × 4 hafta", "£140,00", "£168,00"],
  ["20 palet × 4 hafta", "£280,00", "£336,00"],
  ["50 palet × 12 hafta", "£2.100,00", "£2.520,00"],
];

export default function MaliyetHesaplamaPage() {
  return (
    <>
      <Header />
      <FaqJsonLd faqs={faqs} />
      <TrBreadcrumb path="/ingiltere-depo-maliyet-hesaplama" label="Depo Maliyet Hesaplama" visible={false} jsonLd />
      <main className="bg-white">
        <section className="bg-[#0b2545] text-white py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <nav aria-label="Breadcrumb" className="text-xs text-slate-400 mb-5">
              <Link href="/" className="hover:text-white">Ana Sayfa</Link>
              <span className="mx-1.5">/</span>
              <span className="text-white">Depo Maliyet Hesaplama</span>
            </nav>
            <p className="text-sm font-semibold text-green-400 mb-3">Ücretsiz araç</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">{TITLE}</h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
              Palet sayınızı ve depolama süresini girin; hesaplayıcı LondraDepo&apos;nun yayımlanmış başlangıç fiyatı olan
              haftalık palet başına £3,50 + KDV ile İngiltere depolama maliyetinizi gösterir. Örneğin 10 palet 4 hafta için
              £140 + KDV (KDV dahil £168) tutar.
            </p>
          </div>
        </section>

        <section className="py-12 px-4" id="hesaplayici">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-2">Depolama maliyetinizi hesaplayın</h2>
            <p className="text-slate-600 mb-6">Palet ve hafta sayısını değiştirin, tahmin anında güncellenir. Teklif isteyene kadar hiçbir bilgi gönderilmez.</p>
            <CostCalculator lang="tr" />
          </div>
        </section>

        <section className="py-12 px-4 bg-[#f6f8fb]">
          <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-3">Tahmin nasıl hesaplanıyor?</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Hesaplayıcı standart palet sayısını hafta sayısıyla ve haftalık palet başına £3,50 + KDV başlangıç fiyatımızla çarpar,
                ardından %20 KDV ekler. Sadece yayımlanmış fiyatımızı kullandığı için sonuç kesin teklif değil, başlangıç fiyatıdır.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Palet ölçüsü, yüksekliği ve ağırlığı, ürün türü, depolama koşulları ve stok hareket sıklığı fiyatı değiştirebilir.
                Büyük veya ağır paletler ve özel elleçleme gerektiren ürünler detaylar görüldükten sonra fiyatlandırılır.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-3">Örnek depolama maliyetleri</h2>
              <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-100 text-[#0b2545]">
                    <tr><th scope="col" className="px-4 py-3">Palet × hafta</th><th scope="col" className="px-4 py-3">Depolama (KDV hariç)</th><th scope="col" className="px-4 py-3">KDV dahil</th></tr>
                  </thead>
                  <tbody>
                    {ROWS.map((r) => (
                      <tr key={r[0]} className="border-t border-slate-200">
                        <th scope="row" className="px-4 py-3 font-medium text-slate-800">{r[0]}</th>
                        <td className="px-4 py-3 text-slate-700">{r[1]}</td>
                        <td className="px-4 py-3 text-slate-700">{r[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Standart paletler için başlangıç fiyatı örnekleridir. Mal kabul, elleçleme, pick &amp; pack, Amazon hazırlık ve teslimat
                ayrıca tekliflendirilir. Detaylı fiyat kalemleri için <Link href="/ingiltere-depo-fiyatlari" className="underline">İngiltere Depo Fiyatları</Link> sayfasına bakın.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-6">Sık Sorulan Sorular</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="border border-slate-200 rounded-xl p-5">
                  <h3 className="font-bold text-[#0b2545] mb-2">{f.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-600">
              İlgili sayfalar: <Link href="/palet-depolama" className="underline">Palet Depolama</Link> ·{" "}
              <Link href="/ingiltere-depo" className="underline">İngiltere Depo</Link> ·{" "}
              <Link href="/blog/ingiltere-palet-depolama-maliyetleri" className="underline">Palet Depolama Maliyetleri Rehberi</Link>
            </p>
          </div>
        </section>

        <QuoteForm
          formId="tr_calculator_quote"
          heading="Tahmininizi Kesin Teklife Çevirin"
          intro="Palet sayınızı, ürün türünüzü ve ihtiyacınız olan hizmetleri yazın; depolama, elleçleme ve teslimatı operasyonunuza göre fiyatlandıralım."
          presetServices={["Depolama"]}
        />
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
