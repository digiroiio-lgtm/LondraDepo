import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import TrBreadcrumb from "@/components/TrBreadcrumb";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

import { SITE_URL } from "@/lib/site";
import { trAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Gizlilik Politikası | LondraDepo",
  description:
    "LondraDepo.com gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı, korunduğu ve UK GDPR kapsamındaki haklarınız hakkında bilgi.",
  alternates: trAlternates("/privacy-policy"),
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "24 Kasım 2026";

/** Processors acting for us (name, purpose, where data is processed). */
const PROCESSORS_TR: [string, string, string][] = [
  ["Vercel Inc.", "Web sitesinin barındırılması, sunucu kayıtları, Vercel Analytics (onayla)", "ABD / AB"],
  ["Google (Analytics 4, Workspace / Gmail)", "Site istatistikleri (Consent Mode ile), e-posta yazışmaları", "ABD / AB"],
  ["Formspree", "Web sitesindeki teklif ve kontrol listesi formlarının iletilmesi", "ABD"],
  ["Calendly", "Görüşme randevusu planlama", "ABD"],
  ["WhatsApp (Meta)", "WhatsApp üzerinden yazışma (siz başlattığınızda)", "ABD / AB"],
  ["Mintsoft", "Depo yönetim sistemi: müşterilerimizin stok ve sipariş verileri", "Birleşik Krallık"],
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <TrBreadcrumb path="/privacy-policy" label="Gizlilik Politikası" visible={false} jsonLd />
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 py-2 text-sm text-slate-500 flex gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-[#0b2545] font-medium">Gizlilik Politikası</span>
          </div>
        </nav>

        <article className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto prose prose-slate max-w-none">
            <h1 className="text-3xl font-extrabold text-[#0b2545] mb-2">Gizlilik Politikası</h1>
            <p className="text-sm text-slate-500 mb-8">Son güncelleme: {LAST_UPDATED}</p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">1. Veri Sorumlusu</h2>
              <p className="text-slate-600 leading-relaxed">
                Bu gizlilik politikası, İngiltere merkezli lojistik ve depolama hizmetleri sunan
                <strong> LondraDepo.com</strong> tarafından hazırlanmıştır. LondraDepo.com,
                <strong> Arca Trade Group Ltd</strong> (şirket no: 13247691, VAT: GB353315322) adına faaliyet
                göstermekte olup İngiltere&apos;de kayıtlı bir şirkettir. Kişisel verilerinizin
                işlenmesinden sorumlu <strong>veri sorumlusu</strong> (data controller) olarak UK GDPR, Data
                Protection Act 2018 ve PECR kapsamındaki yükümlülüklere uymaktayız.
              </p>
              <div className="mt-4 bg-slate-50 rounded-xl p-4 text-sm text-slate-600">
                <strong>Veri talepleri ve iletişim:</strong>{" "}
                <a href="mailto:support@londradepo.com" className="text-[#0b2545] underline">support@londradepo.com</a>
                {" "}·{" "}
                <Link href="/iletisim" className="text-[#0b2545] underline">londradepo.com/iletisim</Link>
                <br />
                <strong>Kayıtlı ofis:</strong> Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY, Birleşik Krallık
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">2. Topladığımız Veriler</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">a) İletişim Formlarından</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Sitemizin iletişim formu veya WhatsApp üzerinden bizimle iletişime
                    geçtiğinizde ad-soyad, e-posta adresi, telefon numarası ve iletinizin
                    içeriği toplanabilir.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">b) Site Analitikleri</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Analitik çerezlere onay vermeniz halinde, Google Analytics 4 ve Vercel
                    Analytics üzerinden ziyaret ettiğiniz sayfalar ve site içi etkileşimler gibi
                    kullanım verileri işlenebilir. Bu verileri site performansını anlamak ve
                    geliştirmek için kullanırız. Analitik çerezlere onay vermezseniz Google Analytics, Google Consent Mode ile çalışır: yalnızca çerezsiz sinyaller alır (ör. bir sayfanın görüntülendiği veya bir düğmeye tıklandığı), cihazınıza çerez veya kimlik bilgisi kaydetmez; bu veriler yalnızca toplu, modellenmiş istatistikler için kullanılır. Reklam amaçlı depolama her zaman kapalıdır.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">c) Teknik Bağlantı Verileri</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Standart web sunucusu günlükleri kapsamında IP adresi, tarayıcı türü,
                    işletim sistemi ve erişim zamanı gibi teknik veriler altyapı güvenliği
                    amacıyla kısa süreli olarak tutulabilir.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">3. Verilerin Kullanım Amacı</h2>
              <ul className="list-disc pl-5 text-slate-600 space-y-2 text-sm leading-relaxed">
                <li>Talep ettiğiniz hizmet ve teklif bilgilerini iletmek</li>
                <li>Müşteri ilişkileri ve iletişimi yönetmek</li>
                <li>Site performansını ölçmek ve geliştirmek (analitik onayınız varsa)</li>
                <li>İlgili reklam kampanyaları yürütmek (pazarlama onayınız varsa)</li>
                <li>Yasal yükümlülükleri yerine getirmek</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">4. Hukuki Dayanak</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>Kişisel verilerinizi aşağıdaki hukuki dayanaklar çerçevesinde işlemekteyiz:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Sözleşme ifası:</strong> Hizmet taleplerinizi karşılamak amacıyla
                    iletişim bilgilerinizi işliyoruz.
                  </li>
                  <li>
                    <strong>Meşru menfaat:</strong> Sitenin güvenliği ve temel işlevleri için
                    zorunlu teknik veriler.
                  </li>
                  <li>
                    <strong>Açık rıza (consent):</strong> Analitik ve pazarlama çerezleri yalnızca
                    açık onayınız alındıktan sonra aktif hale gelir.
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">5. Verilerin Paylaşımı</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                Kişisel verileriniz, hizmet altyapımızın bir parçası olan ve bizim adımıza veri işleyen
                (data processor) aşağıdaki sağlayıcılarla paylaşılabilir. Bu sağlayıcılar verileri yalnızca
                belirtilen amaçlar için kullanmakla yükümlüdür. Verileriniz hiçbir koşulda satılmaz.
              </p>
              <div className="overflow-x-auto mt-4">
                <table className="text-sm text-slate-600 w-full">
                  <thead><tr className="text-left"><th className="pr-4 pb-2">Sağlayıcı</th><th className="pr-4 pb-2">Amaç</th><th className="pb-2">Konum</th></tr></thead>
                  <tbody>
                    {PROCESSORS_TR.map(([n, a, l]) => (
                      <tr key={n} className="border-t border-slate-200"><td className="pr-4 py-2 font-medium">{n}</td><td className="pr-4 py-2">{a}</td><td className="py-2">{l}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h3 className="font-semibold text-slate-800 mt-5 mb-1">Yurt dışına veri aktarımı</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Yukarıdaki sağlayıcıların bir kısmı verileri ABD&apos;de veya Birleşik Krallık dışında işler.
                Bu aktarımlar, Birleşik Krallık&apos;ın yeterlilik kararları (UK-ABD veri köprüsü dahil) veya
                Uluslararası Veri Aktarım Sözleşmesi / Standart Sözleşme Hükümleri (IDTA / SCC ek protokolü)
                gibi UK GDPR&apos;a uygun güvencelerle yapılır.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">6. Veri Saklama Süreleri</h2>
              <ul className="list-disc pl-5 text-slate-600 space-y-2 text-sm leading-relaxed">
                <li>İletişim formu verileri: Talep sonuçlanana kadar veya en fazla 2 yıl</li>
                <li>Analitik veriler: Google Analytics&apos;te en fazla 14 ay; çerez ömrü en fazla 2 yıl</li>
                <li>Teknik sunucu günlükleri: 90 güne kadar</li>
                <li>Çerez onayı kaydı: 1 yıl veya tarayıcı verisi silinene kadar</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">7. UK GDPR Kapsamındaki Haklarınız</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Erişim Hakkı", desc: "Hakkınızda tuttuğumuz kişisel verilere erişim talep edebilirsiniz." },
                  { title: "Düzeltme Hakkı", desc: "Hatalı veya eksik verilerinizin düzeltilmesini isteyebilirsiniz." },
                  { title: "Silme Hakkı", desc: "Yasal zorunluluklar yoksa verilerinizin silinmesini talep edebilirsiniz." },
                  { title: "İtiraz Hakkı", desc: "Meşru menfaat veya pazarlama amaçlı işlemeye itiraz edebilirsiniz." },
                  { title: "Taşınabilirlik Hakkı", desc: "Verilerinizin yapılandırılmış formatta teslimini talep edebilirsiniz." },
                  { title: "Rıza Geri Çekme", desc: "Verdiğiniz çerez onayını istediğiniz zaman geri çekebilirsiniz." },
                ].map((r) => (
                  <div key={r.title} className="border border-slate-200 rounded-xl p-4">
                    <h3 className="font-semibold text-[#0b2545] text-sm mb-1">{r.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-slate-500 text-sm">
                Haklarınızı kullanmak için{" "}
                <Link href="/iletisim" className="text-[#0b2545] underline">
                  iletişim formumuz
                </Link>{" "}
                üzerinden talepte bulunabilirsiniz. ICO (Information Commissioner&apos;s Office)&apos;ya
                şikâyette bulunma hakkınız saklıdır:{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0b2545] underline"
                >
                  ico.org.uk
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">8. Güvenlik</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                Verilerinizi yetkisiz erişime, kayba veya ifşaya karşı korumak için SSL
                şifrelemesi ve güvenli altyapı dahil standart teknik tedbirler uygulanmaktadır.
                Herhangi bir güvenlik ihlali durumunda yasal yükümlülükler çerçevesinde
                bilgilendirme yapılacaktır.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">9. Politika Güncellemeleri</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                Bu politika zaman zaman güncellenebilir. Önemli değişiklikler bu sayfada
                duyurulacaktır. Sayfanın üst kısmındaki &ldquo;Son güncelleme&rdquo; tarihini
                kontrol etmenizi öneririz.
              </p>
            </section>

            <div className="mt-10 pt-6 border-t border-slate-200">
              <p className="text-slate-500 text-sm mb-3">İlgili sayfalar:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/cookie-policy" className="text-sm text-[#0b2545] hover:underline">→ Çerez Politikası</Link>
                <Link href="/iletisim" className="text-sm text-[#0b2545] hover:underline">→ İletişim</Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
