import CookieSettingsButton from "./CookieSettingsButton";

const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";
const TEL = "tel:+447554195190";

export default function Footer() {
  return (
    <footer id="iletisim" className="bg-[#0b2545] text-slate-300 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="text-white font-bold text-xl mb-3">
            Londra<span className="text-red-400">Depo</span>.com
          </div>
          <p className="text-sm leading-relaxed">
            İngiltere depo, İngiltere fulfillment, İngiltere lojistik, İngiltere
            ürün deposu ve İngiltere dağıtım merkezi çözümleri. Türkiye'den
            İngiltere'ye ihracat yapan işletmeler için UK lojistik partneri.
          </p>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">Hizmetler</div>
          <ul className="space-y-2 text-sm">
            <li><a href="/ingiltere-depo-avantajlari" className="hover:text-white transition">İngiltere Depo Avantajları</a></li>
            <li><a href="/ingiltere-fulfillment" className="hover:text-white transition">İngiltere Fulfillment</a></li>
            <li><a href="/palet-depolama" className="hover:text-white transition">Palet Depolama</a></li>
            <li><a href="/amazon-prep-uk" className="hover:text-white transition">Amazon Prep UK</a></li>
            <li><a href="/essex-depo" className="hover:text-white transition">Essex Depo</a></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">Kurumsal</div>
          <ul className="space-y-2 text-sm">
            <li><a href="/hakkimizda" className="hover:text-white transition">Hakkımızda</a></li>
            <li><a href="/case-studies" className="hover:text-white transition">Başarı Hikayeleri</a></li>
            <li><a href="/iletisim" className="hover:text-white transition">İletişim</a></li>
            <li><a href="/blog" className="hover:text-white transition">Blog & Rehberler</a></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">İletişim</div>
          <div className="space-y-3 text-sm">
            <p>İngiltere operasyonu için WhatsApp veya telefon yoluyla ulaşabilirsiniz. Türkçe destek.</p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-5 py-3 rounded-full transition w-fit"
            >
              WhatsApp&apos;tan Teklif Alın
            </a>
            <a
              href={TEL}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition"
            >
              📞 Hemen Arayın
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 text-center text-xs text-slate-500 space-y-2">
        <p>
          © {new Date().getFullYear()} LondraDepo.com — Londra depo, İngiltere
          warehouse ve İngiltere fulfillment çözümleri. Tüm hakları saklıdır.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="/privacy-policy" className="hover:text-white transition">Gizlilik Politikası</a>
          <a href="/cookie-policy" className="hover:text-white transition">Çerez Politikası</a>
          <CookieSettingsButton />
        </div>
      </div>
    </footer>
  );
}
