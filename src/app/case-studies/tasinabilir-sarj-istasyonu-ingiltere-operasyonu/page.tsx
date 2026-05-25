import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import CaseHero from "@/components/CaseHero";
import OperationsFlow from "@/components/OperationsFlow";
import RelatedCases from "@/components/RelatedCases";

const SITE_URL = "https://www.londradepo.com";
const PAGE_URL = `${SITE_URL}/case-studies/tasinabilir-sarj-istasyonu-ingiltere-operasyonu`;
const WHATSAPP =
  "https://wa.me/447554195190?text=Merhaba%2C%20elektronik%20urun%20ingiltere%20operasyonu%20hakkinda%20bilgi%20almak%20istiyorum.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Taşınabilir Şarj İstasyonu İngiltere Operasyon Yönetimi | LondraDepo.com",
  description:
    "Taşınabilir şarj istasyonlarının İngiltere depo altyapısı, teknik hazırlık, SIM kart aktivasyonu, şarj kontrolü ve dağıtım operasyonu.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Taşınabilir Şarj İstasyonu — İngiltere Operasyon Yönetimi | LondraDepo.com",
    description:
      "Elektronik ürün fulfillment İngiltere: SIM aktivasyonu, şarj kontrolü, teknik hazırlık ve son kullanıcı sevkiyatı tek merkezden.",
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Başarı Hikayeleri",
          item: `${SITE_URL}/case-studies`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Taşınabilir Şarj İstasyonu İngiltere Operasyonu",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${PAGE_URL}#article`,
      headline:
        "Taşınabilir Şarj İstasyonu — İngiltere Operasyon Yönetimi",
      description:
        "Taşınabilir şarj istasyonu ürünlerinin İngiltere depo altyapısı, SIM kart aktivasyonu, şarj kontrolü ve son kullanıcı sevkiyat operasyonu.",
      url: PAGE_URL,
      publisher: {
        "@type": "Organization",
        name: "LondraDepo.com",
        url: SITE_URL,
      },
      mainEntityOfPage: PAGE_URL,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Elektronik ürünler için teknik operasyon yapıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. SIM kart aktivasyonu, cihaz şarj kontrolü ve kargo öncesi teknik hazırlık operasyonu sağlıyoruz. Her ürün sevkiyattan önce belirlenen teknik kontrolden geçirilir.",
          },
        },
        {
          "@type": "Question",
          name: "SIM kart aktivasyonu İngiltere deposunda yapılabiliyor mu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. İngiliz SIM kartlar için aktivasyon operasyonu depomuzda gerçekleştirilmektedir. Her aktivasyon kayıt altına alınır ve müşteriye raporlanır.",
          },
        },
        {
          "@type": "Question",
          name: "Taşınabilir şarj istasyonları için son kullanıcı teslimatı yapıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Teknik hazırlığı tamamlanan cihazlar İngiltere genelindeki son kullanıcılara next-day veya 2-day kargo seçenekleriyle gönderilmektedir.",
          },
        },
        {
          "@type": "Question",
          name: "Elektronik ürünlerin depolanması için özel koşullar sağlıyor musunuz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Elektronik ürünler nem ve ısıya karşı korumalı, güvenli depolama alanında muhafaza edilmektedir. Hasar oluşturacak çevresel faktörler minimize edilir.",
          },
        },
      ],
    },
  ],
};

const flowSteps = [
  {
    step: 1,
    icon: "🚛",
    title: "Ürün Kabulü",
    desc: "Taşınabilir şarj istasyonları İngiltere deposuna teslim alındı; adet ve paket bütünlüğü kontrol edildi.",
  },
  {
    step: 2,
    icon: "🔢",
    title: "Sayım & Kalite Kontrol",
    desc: "Her cihaz tek tek sayıldı, görsel hasara karşı incelendi ve sisteme eklendi.",
  },
  {
    step: 3,
    icon: "⚡",
    title: "Elektrik Tesisatı Kontrolü",
    desc: "Cihazların elektrik bağlantısı ve şarj kapasitesi test edildi; arızalı birimler ayrıştırıldı.",
  },
  {
    step: 4,
    icon: "📡",
    title: "SIM Kart Aktivasyonu",
    desc: "Her cihaza İngiliz SIM kartı takılarak aktivasyon tamamlandı ve kayıt altına alındı.",
  },
  {
    step: 5,
    icon: "🔋",
    title: "Şarj İşlemleri",
    desc: "Cihazlar belirlenen şarj seviyesine getirildi; sevkiyat öncesi hazırlık tamamlandı.",
  },
  {
    step: 6,
    icon: "📦",
    title: "Kargo Öncesi Hazırlık",
    desc: "Teknik hazırlığı tamamlanan cihazlar etiketlendi, paketlendi ve kargo bilgileri sistemlere işlendi.",
  },
  {
    step: 7,
    icon: "🚚",
    title: "Son Kullanıcı Sevkiyatı",
    desc: "Hazırlanan cihazlar İngiltere genelindeki son kullanıcılara next-day kargo ile sevk edildi.",
  },
];

const faqs = [
  {
    q: "Elektronik ürünler için teknik operasyon yapıyor musunuz?",
    a: "Evet. SIM kart aktivasyonu, cihaz şarj kontrolü ve kargo öncesi teknik hazırlık operasyonu sağlıyoruz. Her ürün sevkiyattan önce belirlenen teknik kontrolden geçirilir.",
  },
  {
    q: "SIM kart aktivasyonu İngiltere deposunda yapılabiliyor mu?",
    a: "Evet. İngiliz SIM kartlar için aktivasyon operasyonu depomuzda gerçekleştirilmektedir. Her aktivasyon kayıt altına alınır ve müşteriye raporlanır.",
  },
  {
    q: "Taşınabilir şarj istasyonları için son kullanıcı teslimatı yapıyor musunuz?",
    a: "Evet. Teknik hazırlığı tamamlanan cihazlar İngiltere genelindeki son kullanıcılara next-day veya 2-day kargo seçenekleriyle gönderilmektedir.",
  },
  {
    q: "Elektronik ürünlerin depolanması için özel koşullar sağlıyor musunuz?",
    a: "Evet. Elektronik ürünler nem ve ısıya karşı korumalı, güvenli depolama alanında muhafaza edilmektedir. Hasar oluşturacak çevresel faktörler minimize edilir.",
  },
  {
    q: "Stok seviyesi ve teknik hazırlık durumu raporlanıyor mu?",
    a: "Evet. Stok hareketi, teknik hazırlık durumu ve sevkiyat özeti düzenli aralıklarla Türkçe raporlarla iletilmektedir.",
  },
];

const relatedCases = [
  {
    slug: "uk-walking-treadmill-distribution",
    industry: "Sağlık & E-Ticaret",
    title: "Walking Treadmill — İngiltere Depo, Fulfillment & Dağıtım Operasyonu",
    summary:
      "Büyük hacimli sağlık ürünlerinin İngiltere depo altyapısı, online fulfillment ve dağıtım sürecindeki başarı hikayesi.",
  },
  {
    slug: "cruyff-uk-fulfillment",
    industry: "Moda & Premium Giyim",
    title: "Cruyff — İngiltere Moda & Fulfillment Operasyonu",
    summary:
      "Johan Cruyff markasının İngiltere depo altyapısı ve e-ticaret fulfillment sürecine geçişi.",
  },
];

export default function SarjIstasyonuCaseStudyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 py-2 text-sm text-slate-500 flex flex-wrap gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-[#0b2545] transition">
              Başarı Hikayeleri
            </Link>
            <span>/</span>
            <span className="text-[#0b2545] font-medium">
              Taşınabilir Şarj İstasyonu İngiltere Operasyonu
            </span>
          </div>
        </nav>

        <article className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <CaseHero
              industry="Elektronik & Smart Device"
              industryColor="text-teal-700 bg-teal-50"
              brand="Taşınabilir Şarj İstasyonu"
              title="Taşınabilir Şarj İstasyonu — İngiltere Operasyon Yönetimi"
              subtitle="Taşınabilir şarj istasyonu ürünlerinin İngiltere depo altyapısı, SIM aktivasyonu, şarj kontrolü ve son kullanıcı sevkiyatı LondraDepo.com altyapısıyla tek merkezden yürütülmektedir."
              metrics={[
                { label: "Operasyon Tipi", value: "Teknik + Lojistik" },
                { label: "Kapsam", value: "Tüm İngiltere" },
                { label: "Özellik", value: "SIM Aktivasyonu" },
              ]}
            />

            {/* Problem */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">
                Operasyonel Zorluk
              </h2>
              <div className="bg-slate-50 border-l-4 border-[#e63946] rounded-r-xl p-6">
                <p className="text-slate-700 leading-relaxed mb-3">
                  Taşınabilir şarj istasyonu üreticisi, İngiltere pazarına girmek istiyordu. Ancak
                  bu ürünler sadece depolama ve dağıtım değil; İngiltere&apos;ye özgü SIM kart
                  aktivasyonu, şarj kontrolü ve teknik hazırlık da gerektiriyordu. Türkiye&apos;den
                  bu süreçlerin yönetilmesi pratik değildi; doğrudan İngiltere&apos;de bir teknik
                  operasyon altyapısı kurulması gerekiyordu.
                </p>
                <ul className="text-slate-700 text-sm space-y-2 list-none">
                  <li>⚠️ SIM kart aktivasyonunun İngiltere&apos;de yapılması zorunluluğu</li>
                  <li>⚠️ Cihaz şarj ve elektrik testi için lokal operasyon noktası ihtiyacı</li>
                  <li>⚠️ Son kullanıcıya hızlı teslimat baskısı (next-day)</li>
                  <li>⚠️ Teknik hazırlık süreçlerinin standart lojistik firmalarca karşılanamaması</li>
                  <li>⚠️ Türkiye&apos;deki ekibin uzaktan koordinasyonu için Türkçe iletişim gerekliliği</li>
                </ul>
              </div>
            </section>

            {/* Solution */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">
                LondraDepo Çözümü
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Essex deposunda cihazlar teslim alındıktan sonra elektrik testi, SIM aktivasyonu
                ve şarj işlemleri depo içinde tamamlandı. Teknik hazırlığı biten her cihaz
                paketlenerek İngiltere&apos;deki son kullanıcılara next-day kargo ile sevk
                edildi. Tüm süreç Türkiye&apos;deki ekiple Türkçe koordinasyonla yürütüldü.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    icon: "🏭",
                    title: "İngiltere Depo Altyapısı",
                    desc: "Elektronik ürünlere uygun korumalı depolama alanında stok güvenle muhafaza edildi.",
                  },
                  {
                    icon: "⚡",
                    title: "Elektrik & Teknik Kontrol",
                    desc: "Her cihazın elektrik tesisatı ve şarj kapasitesi test edilerek arızalı birimler ayrıştırıldı.",
                  },
                  {
                    icon: "📡",
                    title: "SIM Kart Aktivasyonu",
                    desc: "İngiliz SIM aktivasyonu depo içinde gerçekleştirildi; her aktivasyon kayıt altına alındı.",
                  },
                  {
                    icon: "🔋",
                    title: "Şarj Operasyonu",
                    desc: "Cihazlar belirlenen seviyeye şarj edilerek kargo öncesi teknik hazırlık tamamlandı.",
                  },
                  {
                    icon: "🚚",
                    title: "Son Kullanıcı Sevkiyatı",
                    desc: "Hazırlanan cihazlar next-day kargo ağıyla İngiltere genelinde son kullanıcılara ulaştırıldı.",
                  },
                  {
                    icon: "📊",
                    title: "Türkçe Raporlama",
                    desc: "Teknik hazırlık durumu, stok hareketi ve sevkiyat özetleri Türkçe raporlarla iletildi.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border border-slate-200 rounded-xl p-5 flex gap-4"
                  >
                    <span className="text-2xl flex-shrink-0" aria-hidden="true">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="font-bold text-[#0b2545] mb-1">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Operations flow */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-6">
                Operasyon Akışı
              </h2>
              <OperationsFlow steps={flowSteps} />
            </section>

            {/* Results */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">
                Sağlanan Avantajlar
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  {
                    value: "7 Adım",
                    label: "Teknik operasyon",
                    desc: "Ürün kabulünden son kullanıcı sevkiyatına kadar tüm teknik adımlar tek merkezde tamamlandı.",
                  },
                  {
                    value: "Next-day",
                    label: "İngiltere teslimatı",
                    desc: "Teknik hazırlığı tamamlanan cihazlar İngiltere genelinde next-day kargo ağıyla gönderildi.",
                  },
                  {
                    value: "Türkçe",
                    label: "Tam koordinasyon",
                    desc: "Tüm teknik ve lojistik operasyon Türkiye&apos;deki ekiple Türkçe iletişimle yönetildi.",
                  },
                ].map((r) => (
                  <div key={r.label} className="bg-[#f6f8fb] rounded-xl p-6 text-center">
                    <div className="text-3xl font-extrabold text-[#0b2545] mb-1">{r.value}</div>
                    <div className="font-semibold text-[#0b2545] text-sm mb-2">{r.label}</div>
                    <p className="text-slate-500 text-xs leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-[#0b2545] rounded-2xl p-8 text-center mb-10">
              <h2 className="text-2xl font-extrabold text-white mb-3">
                Elektronik ürünleriniz için İngiltere operasyon altyapısı mı arıyorsunuz?
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                Teknik hazırlık, SIM aktivasyonu, depo ve son kullanıcı dağıtımı dahil özel
                operasyon planınızı birlikte oluşturalım.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3.5 rounded-full transition"
                >
                  WhatsApp&apos;tan Bilgi Alın
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition"
                >
                  Operasyon Danışmanı ile Görüşün
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-6">
                Sık Sorulan Sorular
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border border-slate-200 rounded-xl p-5">
                    <h3 className="font-bold text-[#0b2545] mb-2">{faq.q}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Internal links */}
            <div className="pt-6 border-t border-slate-200 mb-8">
              <p className="text-slate-500 text-sm mb-3">İlgili hizmetler:</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/ingiltere-fulfillment"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → İngiltere Fulfillment
                </Link>
                <Link
                  href="/palet-depolama"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → Palet Depolama
                </Link>
                <Link
                  href="/ingiltere-depo-avantajlari"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → Depo Avantajları
                </Link>
                <Link
                  href="/essex-depo"
                  className="text-sm text-[#0b2545] hover:underline"
                >
                  → Essex Depo
                </Link>
              </div>
            </div>

            <RelatedCases cases={relatedCases} />
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
