import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/cookie-policy`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Çerez Politikası | LondraDepo.com",
  description:
    "LondraDepo.com çerez politikası. Sitemizde kullandığımız çerez türleri, amaçları ve çerez tercihlerinizi nasıl yönetebileceğiniz hakkında bilgi.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "24 Mayıs 2025";

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main>
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 py-2 text-sm text-slate-500 flex gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-[#0b2545] font-medium">Çerez Politikası</span>
          </div>
        </nav>

        <article className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto prose prose-slate max-w-none">
            <h1 className="text-3xl font-extrabold text-[#0b2545] mb-2">Çerez Politikası</h1>
            <p className="text-sm text-slate-400 mb-8">Son güncelleme: {LAST_UPDATED}</p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">1. Çerezler Nedir?</h2>
              <p className="text-slate-600 leading-relaxed">
                Çerezler (cookies), bir web sitesini ziyaret ettiğinizde tarayıcınız tarafından
                cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezler, site tercihlerinizi
                hatırlamak, sitenin düzgün çalışmasını sağlamak ve kullanım alışkanlıklarını
                analiz etmek için kullanılır.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">2. Kullandığımız Çerez Türleri</h2>

              <div className="space-y-6">
                <div className="border border-slate-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-[#0b2545]">Zorunlu Çerezler</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">Her Zaman Aktif</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Sitenin temel işlevleri için gereklidir. Oturum güvenliği, form koruması ve
                    altyapı ayarları gibi kritik süreçleri kapsar. Bu çerezler sitenizin
                    çalışabilmesi için zorunludur ve devre dışı bırakılamaz.
                  </p>
                  <div className="mt-3 text-sm">
                    <strong className="text-slate-700">Saklama süresi:</strong>{" "}
                    <span className="text-slate-500">Oturum süresince veya maksimum 1 yıl</span>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-[#0b2545]">Analitik Çerezler</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium">İzin Gerekli</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Ziyaretçi sayısı, en çok ziyaret edilen sayfalar ve kullanım süreleri gibi
                    istatistiksel verileri anonim olarak toplamamıza yardımcı olur. Bu veriler
                    siteyi geliştirmek için kullanılır; kişisel kimliğinizi ifşa etmez.
                  </p>
                  <div className="mt-3 text-sm">
                    <strong className="text-slate-700">Sağlayıcı:</strong>{" "}
                    <span className="text-slate-500">Vercel Analytics (anonim veri)</span>
                  </div>
                  <div className="mt-1 text-sm">
                    <strong className="text-slate-700">Saklama süresi:</strong>{" "}
                    <span className="text-slate-500">Maksimum 2 yıl</span>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-[#0b2545]">Pazarlama Çerezleri</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 font-medium">İzin Gerekli</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    İlgi alanlarınıza uygun reklamlar göstermek ve pazarlama kampanyalarının
                    etkinliğini ölçmek için kullanılır. Google Ads ve Meta (Facebook/Instagram)
                    gibi platformlarla paylaşılabilir. Bu çerezler yalnızca onayınız halinde aktif olur.
                  </p>
                  <div className="mt-3 text-sm">
                    <strong className="text-slate-700">Saklama süresi:</strong>{" "}
                    <span className="text-slate-500">Maksimum 2 yıl</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">3. Çerez Onayının Saklanması</h2>
              <p className="text-slate-600 leading-relaxed">
                Çerez tercihleriniz, tarayıcınızın yerel depolama alanında (localStorage)
                saklanır. Tercihleriniz silinmedikçe veya değiştirilmedikçe geçerlidir.
                Tarayıcı verilerinizi temizlediğinizde tercih bilgisi silinir ve bir sonraki
                ziyaretinizde yeniden sorulabilir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">4. Çerez Tercihlerinizi Değiştirme</h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Çerez tercihlerinizi istediğiniz zaman güncelleyebilirsiniz:
              </p>
              <ul className="list-disc pl-5 text-slate-600 space-y-2 text-sm leading-relaxed">
                <li>
                  Sayfanın alt kısmındaki (footer) &ldquo;Çerez Ayarları&rdquo; bağlantısına tıklayarak
                  tercih penceresini açabilirsiniz.
                </li>
                <li>
                  Tarayıcı ayarlarınızdan çerezleri tamamen engelleyebilir veya silebilirsiniz.
                  Ancak bu durumda sitenin bazı özellikleri düzgün çalışmayabilir.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">5. Üçüncü Taraf Çerezler</h2>
              <p className="text-slate-600 leading-relaxed">
                Sitemiz bazı üçüncü taraf hizmetlerini kullanabilir. Bu hizmetlerin kendi çerez
                politikaları geçerlidir. Yalnızca analitik veya pazarlama çerezlerine onay
                verdiğinizde bu üçüncü taraf bağlantıları aktif hale gelir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">6. Yasal Dayanak (UK GDPR)</h2>
              <p className="text-slate-600 leading-relaxed">
                LondraDepo.com, İngiltere&apos;de faaliyet göstermekte olup UK GDPR ve Privacy and
                Electronic Communications Regulations (PECR) kapsamındaki yükümlülüklere uymaktadır.
                Zorunlu çerezler meşru menfaat temelinde, analitik ve pazarlama çerezleri ise
                açık rızanıza (consent) dayanılarak kullanılmaktadır.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">7. İletişim</h2>
              <p className="text-slate-600 leading-relaxed">
                Çerez politikamız hakkında sorularınız için{" "}
                <Link href="/iletisim" className="text-[#0b2545] underline hover:text-[#e63946] transition">
                  iletişim sayfamızı
                </Link>{" "}
                ziyaret edebilir veya WhatsApp üzerinden bize ulaşabilirsiniz.
              </p>
            </section>

            <div className="mt-10 pt-6 border-t border-slate-200">
              <p className="text-slate-500 text-sm mb-3">İlgili sayfalar:</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/privacy-policy" className="text-sm text-[#0b2545] hover:underline">→ Gizlilik Politikası</Link>
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
