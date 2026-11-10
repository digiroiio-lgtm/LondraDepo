import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import FaqJsonLd from "@/components/FaqJsonLd";
import ContainerPlanner from "@/components/ContainerPlanner";
import QuoteForm from "@/components/QuoteForm";
import { SITE_URL } from "@/lib/site";
import { trAlternates } from "@/lib/i18n";

const PATH = "/konteyner-varis-planlayici";
const TITLE = "Konteyner Varış Planlayıcı: Limandan Depoya";
const DESCRIPTION =
  "Konteynerinizin İngiltere'ye varışını planlayın: limanı, konteyner tipini, ETA'yı ve gümrükleme şeklini seçin; EORI'den ön bildirime, boşaltmadan stok kaydına tarihli kontrol listesi alın.";

export const metadata: Metadata = {
  title: `${TITLE} | LondraDepo`,
  description: DESCRIPTION,
  alternates: trAlternates(PATH),
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, siteName: "LondraDepo.com", locale: "tr_TR", type: "website" },
};

const faqs = [
  { q: "Konteyner gelmeden önce depo hangi bilgilere ihtiyaç duyar?", a: "Konteyner numarası, ETA, ambalaj listesi, SKU başına koli sayısı ve ürünlerin paletli mi dökme mi yüklendiği. Bu bilgilerle boşaltma planlanır, gerekiyorsa paletleme ve etiketleme varıştan önce fiyatlandırılır." },
  { q: "Depo İngiltere'deki konteyner limanlarına ne kadar uzak?", a: "Rayleigh, Essex'ten karayoluyla DP World London Gateway yaklaşık 13 mil, Tilbury Limanı yaklaşık 16 mil, Felixstowe Limanı yaklaşık 62 mil uzaklıktadır." },
  { q: "Limandan taşıma ve gümrüklemeyi siz yapabilir misiniz?", a: "Evet. LondraDepo'yu işleten Arca Trade Group limandan depoya taşımayı ayarlayabilir ve ithalat beyannamesini verebilir; isterseniz kendi nakliyeciniz de depoya teslim edebilir." },
  { q: "Bir konteynere kaç palet sığar?", a: "Genel kural olarak tek katlı yüklemede 20ft konteynerin tabanına yaklaşık 10, 40ft konteynere yaklaşık 20 standart UK paleti sığar. Gerçek sayı palet ölçüsüne, yüksekliğe ve yükleme şekline bağlıdır." },
];

const STEPS = [
  ["Gümrük hazırlığı", "İthalatçının GB EORI numarası ve her ürünün UK gümrük tarife kodu olmalı; ithalat beyannamesi HMRC'nin CDS sisteminde verilmelidir."],
  ["Ön bildirim", "Depoya konteyner numarası, ETA, ambalaj listesi, SKU başına koli sayısı ve paletli mi dökme mi olduğu iletilir."],
  ["Taşıma ve teslim saati", "Limandan taşıma Arca Trade Group veya nakliyeciniz üzerinden ayarlanır, Rayleigh'de teslim saati netleştirilir."],
  ["Boşaltma ve kontrol", "Konteyner boşaltılır, ambalaj listesiyle karşılaştırılarak sayılır, görünür hasar fotoğraflanıp bildirilir."],
  ["Stok kaydı", "Dökme koliler gerekirse paletlenip etiketlenir, stok Mintsoft WMS'e kaydedilir; ardından depolanır veya sevk edilir."],
];

const PORTS = [
  ["DP World London Gateway", "13 mil / 21 km", "~20 dakika"],
  ["Tilbury Limanı", "16 mil / 26 km", "~20 dakika"],
  ["Felixstowe Limanı", "62 mil / 99 km", "~1 saat 15 dakika"],
];

export default function KonteynerPlanlayiciPage() {
  return (
    <>
      <Header />
      <FaqJsonLd faqs={faqs} />
      <main className="bg-white">
        <section className="bg-[#0b2545] text-white py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <nav aria-label="Breadcrumb" className="text-xs text-slate-400 mb-5">
              <Link href="/" className="hover:text-white">Ana Sayfa</Link>
              <span className="mx-1.5">/</span>
              <span className="text-white">Konteyner Varış Planlayıcı</span>
            </nav>
            <p className="text-sm font-semibold text-green-400 mb-3">Ücretsiz araç</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">Konteyner Varış Planlayıcı</h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
              Varış limanını, konteyner tipini, yükleme şeklini ve ETA&apos;yı seçin; planlayıcı konteynerinizin İngiltere limanından
              Rayleigh, Essex&apos;teki depomuza ulaşması için tarihli bir kontrol listesi hazırlar. GB EORI ve gümrük tarife kodları,
              gümrük beyannamesi, depoya ön bildirim, taşıma, boşaltma, sayım ve stokların Mintsoft WMS&apos;e kaydı dahildir.
            </p>
          </div>
        </section>

        <section className="py-12 px-4" id="planlayici">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-[#0b2545] mb-2">Konteyner varışınızı planlayın</h2>
            <p className="text-slate-600 mb-6">Bir seçeneği değiştirin, plan anında güncellenir. Teklif isteyene veya mesaj atana kadar hiçbir bilgi gönderilmez.</p>
            <ContainerPlanner lang="tr" />
          </div>
        </section>

        <section className="py-12 px-4 bg-[#f6f8fb]">
          <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">Plan neleri kapsıyor?</h2>
              <ol className="space-y-3">
                {STEPS.map(([h, p], i) => (
                  <li key={h} className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#0b2545] text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                    <span className="text-slate-600 text-sm leading-relaxed"><strong className="text-[#0b2545]">{h}:</strong> {p}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-3">UK limanları ve depoya mesafe</h2>
              <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-100 text-[#0b2545]">
                    <tr><th scope="col" className="px-4 py-3">Liman</th><th scope="col" className="px-4 py-3">Karayolu mesafesi</th><th scope="col" className="px-4 py-3">Tipik süre</th></tr>
                  </thead>
                  <tbody>
                    {PORTS.map((r) => (
                      <tr key={r[0]} className="border-t border-slate-200">
                        <th scope="row" className="px-4 py-3 font-medium text-slate-800">{r[0]}</th>
                        <td className="px-4 py-3 text-slate-700">{r[1]}</td>
                        <td className="px-4 py-3 text-slate-700">{r[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-2">SS6 7FY&apos;den karayolu rotasıyla ölçülmüştür (Kasım 2026). Süreler trafiksiz araç süreleridir.</p>
              <h2 className="text-xl font-extrabold text-[#0b2545] mt-8 mb-3">Tarihler neden öneri?</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Gemi varış saatleri değişir, limanlar konteynerleri farklı hızlarda tahliye eder ve gümrük kontrol seçebilir. Bu yüzden
                planlayıcı ETA&apos;dan geriye doğru evrak ve rezervasyonlar için önerilen son tarihleri verir; varıştan sonraki adımları
                konteyner tahliye edildikten sonra olacak şekilde gösterir. Gümrük evrakına varıştan yaklaşık üç hafta önce, depoya ön
                bildirime yaklaşık bir hafta önce başlamak eksik kod veya belgeleri zamanında düzeltmeye fırsat verir.
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
              İlgili sayfalar: <Link href="/london-gateway-tilbury-depo" className="underline">London Gateway &amp; Tilbury Depo</Link> ·{" "}
              <Link href="/felixstowe-liman-depo" className="underline">Felixstowe Liman Depo</Link> ·{" "}
              <Link href="/ellecleme" className="underline">Elleçleme ve Boşaltma</Link> ·{" "}
              <Link href="/gumrukleme" className="underline">Gümrükleme</Link> ·{" "}
              <Link href="/ingiltere-depo-maliyet-hesaplama" className="underline">Depo Maliyet Hesaplama</Link> ·{" "}
              <Link href="/blog/turkiyeden-ingiltereye-ihracat-rehberi" className="underline">Türkiye&apos;den İngiltere&apos;ye İhracat Rehberi</Link>
            </p>
          </div>
        </section>

        <QuoteForm
          formId="tr_planner_quote"
          heading="Planınızı Teklife Çevirin"
          intro="Konteyner tipini, varış limanını, ETA'yı ve ambalaj listesini yazın; boşaltma, depolama ve sevkiyatı operasyonunuza göre fiyatlandıralım."
          presetServices={["Yükleme / Boşaltma"]}
        />
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
