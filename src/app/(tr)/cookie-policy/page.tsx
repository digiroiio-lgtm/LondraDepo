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
  title: "Çerez Politikası | LondraDepo",
  description:
    "LondraDepo.com çerez politikası. Sitemizde kullandığımız çerez türleri, amaçları ve çerez tercihlerinizi nasıl yönetebileceğiniz hakkında bilgi.",
  alternates: trAlternates("/cookie-policy"),
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "24 Kasım 2026";

/** Cookies and storage the site sets (name, provider / purpose, lifetime, category). */
const COOKIES_TR: [string, string, string, string][] = [
  ["londradepo_cookie_consent", "LondraDepo: çerez tercihinizi hatırlar (yerel depolama)", "Siz silene kadar", "Zorunlu"],
  ["_ga", "Google Analytics: ziyaretçileri ayırt eder", "2 yıl", "Analitik (onayla)"],
  ["_ga_MTYWY5LWCW", "Google Analytics: oturum durumu", "2 yıl", "Analitik (onayla)"],
  ["Vercel Analytics / Speed Insights", "Vercel: sayfa görüntüleme ve hız ölçümü, çerez kullanmaz", "—", "Analitik (onayla yüklenir)"],
];

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main>
        <TrBreadcrumb path="/cookie-policy" label="Çerez Politikası" visible={false} jsonLd />
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
            <p className="text-sm text-slate-500 mb-8">Son güncelleme: {LAST_UPDATED}</p>

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
                    Sitenin temel işlevleri için gereklidir; şu anda bu kapsamda yalnızca çerez
                    tercihinizi hatırlayan kayıt (tarayıcının yerel depolamasında) kullanılır.
                    Devre dışı bırakılamaz.
                  </p>
                  <div className="mt-3 text-sm">
                    <strong className="text-slate-700">Saklama süresi:</strong>{" "}
                    <span className="text-slate-500">Siz tarayıcı verilerinizi silene kadar</span>
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
                    siteyi geliştirmek için kullanılır; kişisel kimliğinizi ifşa etmez. Onay vermezseniz
                    Google Analytics çerez kullanmadan, yalnızca anonim ve toplu ölçüm için çalışır.
                  </p>
                  <div className="mt-3 text-sm">
                    <strong className="text-slate-700">Sağlayıcı:</strong>{" "}
                    <span className="text-slate-500">Google Analytics 4 ve Vercel Analytics</span>
                  </div>
                  <div className="mt-1 text-sm">
                    <strong className="text-slate-700">Saklama süresi:</strong>{" "}
                    <span className="text-slate-500">Çerez ömrü en fazla 2 yıl; Google Analytics&apos;teki olay verisi en fazla 14 ay</span>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-[#0b2545]">Pazarlama Çerezleri</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 font-medium">İzin Gerekli</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Şu anda pazarlama veya reklam çerezi kullanmıyoruz; Google Analytics&apos;te reklam
                    amaçlı depolama her zaman kapalıdır. İleride reklam ölçümü (ör. Google Ads, Meta)
                    eklenirse bu çerezler yalnızca onayınızla etkinleşir ve bu sayfa güncellenir.
                  </p>
                  <div className="mt-3 text-sm">
                    <strong className="text-slate-700">Saklama süresi:</strong>{" "}
                    <span className="text-slate-500">Kullanılmıyor</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">Kullanılan çerezler ve kayıtlar</h2>
              <div className="overflow-x-auto">
                <table className="text-sm text-slate-600 w-full">
                  <thead><tr className="text-left"><th className="pr-4 pb-2">Ad</th><th className="pr-4 pb-2">Sağlayıcı / amaç</th><th className="pr-4 pb-2">Süre</th><th className="pb-2">Tür</th></tr></thead>
                  <tbody>
                    {COOKIES_TR.map(([n, a, d, t]) => (
                      <tr key={n} className="border-t border-slate-200"><td className="pr-4 py-2 font-mono text-xs">{n}</td><td className="pr-4 py-2">{a}</td><td className="pr-4 py-2">{d}</td><td className="py-2">{t}</td></tr>
                    ))}
                  </tbody>
                </table>
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
                politikaları geçerlidir. Bu hizmetlerin çerezleri yalnızca analitik veya pazarlama
                çerezlerine onay verdiğinizde yerleştirilir. Google Analytics tüm ziyaretçiler için
                Consent Mode ile yüklenir; onayınız yoksa yalnızca çerezsiz, anonim sinyaller gönderir
                ve cihazınıza hiçbir şey kaydetmez.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">6. Yasal Dayanak (UK GDPR)</h2>
              <p className="text-slate-600 leading-relaxed">
                LondraDepo.com, İngiltere&apos;de faaliyet göstermekte olup UK GDPR ve Privacy and
                Electronic Communications Regulations (PECR) kapsamındaki yükümlülüklere uymaktadır.
                Zorunlu kayıtlar PECR&apos;deki &ldquo;kesinlikle gerekli&rdquo; (strictly necessary) istisnasına,
                analitik ve pazarlama çerezleri ise açık rızanıza (consent) dayanılarak kullanılmaktadır.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#0b2545] mb-3">7. İletişim</h2>
              <p className="text-slate-600 leading-relaxed">
                Çerez politikamız hakkında sorularınız için{" "}
                <Link href="/iletisim" className="text-[#0b2545] underline hover:text-[#d62839] transition">
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
