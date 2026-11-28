import Emoji from "@/components/visual/Emoji";
import FooterLegal from "@/components/FooterLegal";
import TrackedLink from "@/components/TrackedLink";
import Link from "next/link";

const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";
const TEL = "tel:+447554195190";

export default function Footer() {
  return (
    <footer id="iletisim" className="bg-[#0b2545] text-slate-300 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        <div>
          <div className="text-white font-bold text-xl mb-3">
            Londra<span className="text-red-400">Depo</span>.com
          </div>
          <p className="text-sm leading-relaxed">
            UK depolama, gümrükleme desteği, fulfillment ve dağıtım çözümleri.
            İngiltere'de kendi operasyonunuzu kurmadan UK pazarına satış yapmak
            isteyen işletmeler için tek noktadan lojistik partneri.
          </p>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">Hizmetler</div>
          <ul className="space-y-2 text-sm">
            <li><a href="/ingiltere-depo" className="hover:text-white transition">İngiltere Depo</a></li>
            <li><a href="/ingiltere-3pl" className="hover:text-white transition">İngiltere 3PL Depo</a></li>
            <li><a href="/palet-depolama" className="hover:text-white transition">Palet Depolama</a></li>
            <li><a href="/londra-depo" className="hover:text-white transition">Londra Depo</a></li>
            <li><a href="/essex-depo" className="hover:text-white transition">Essex Depo</a></li>
            <li><a href="/turk-sirketleri-icin-ingiltere-depo" className="hover:text-white transition">Türk Şirketleri İçin İngiltere Depo</a></li>
            <li><a href="/ingiltere-e-ticaret-lojistigi" className="hover:text-white transition">İngiltere E-Ticaret Lojistiği</a></li>
            <li><a href="/siparis-toplama-paketleme" className="hover:text-white transition">Sipariş Toplama & Paketleme</a></li>
            <li><a href="/ingiltere-depo-fiyatlari" className="hover:text-white transition">İngiltere Depo Fiyatları</a></li>
            <li><a href="/ingiltere-ithalat-lojistigi" className="hover:text-white transition">İngiltere İthalat Lojistiği</a></li>
            <li><a href="/konteyner-bosaltma" className="hover:text-white transition">Konteyner Boşaltma</a></li>
            <li><a href="/ingiltere-stoktan-planli-teslimat" className="hover:text-white transition">Stoktan Planlı Teslimat</a></li>
            <li><a href="/limandan-depoya-lojistik" className="hover:text-white transition">Limandan Depoya Lojistik</a></li>
            <li><a href="/ambalaj-catering-depolama" className="hover:text-white transition">Ambalaj ve Catering Depolama</a></li>
            <li><a href="/otomotiv-yedek-parca-depolama" className="hover:text-white transition">Otomotiv Yedek Parça Depolama</a></li>
            <li><a href="/sektorler" className="hover:text-white transition">Sektörler</a></li>
            <li><a href="/london-gateway-tilbury-depo" className="hover:text-white transition">London Gateway &amp; Tilbury Depo</a></li>
            <li><a href="/felixstowe-liman-depo" className="hover:text-white transition">Felixstowe Liman Depo</a></li>
            <li><a href="/turkiyeden-ingiltereye-satis" className="hover:text-white transition">Türkiye&apos;den İngiltere&apos;ye Satış</a></li>
            <li><a href="/depolama" className="hover:text-white transition">Depolama & Stoklama</a></li>
            <li><a href="/gumrukleme" className="hover:text-white transition">Gümrükleme Desteği</a></li>
            <li><a href="/e-ticaret-fulfillment" className="hover:text-white transition">E-Ticaret Fulfillment</a></li>
            <li><a href="/shopify-ingiltere-depo" className="hover:text-white transition">Shopify Fulfillment</a></li>
            <li><a href="/amazon-fulfillment" className="hover:text-white transition">Amazon Fulfillment</a></li>
            <li><a href="/amazon-prep-uk" className="hover:text-white transition">Amazon Prep UK</a></li>
            <li><a href="/amazon-ingiltere-depo-konumlari" className="hover:text-white transition">Amazon Depo Konumları</a></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">Kurumsal</div>
          <ul className="space-y-2 text-sm">
            <li><a href="/hakkimizda" className="hover:text-white transition">Hakkımızda</a></li>
            <li><a href="/case-studies" className="hover:text-white transition">Operasyon Örnekleri</a></li>
            <li><a href="/iletisim" className="hover:text-white transition">İletişim</a></li>
            <li><Link href="/en" className="hover:text-white transition" lang="en" hrefLang="en">English website</Link></li>
            <li><a href="/blog" className="hover:text-white transition">Blog & Rehberler</a></li>
            <li><a href="/teklif-al" className="hover:text-white transition font-semibold text-white">Teklif Al</a></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">Rehberler ve Araçlar</div>
          <ul className="space-y-2 text-sm">
            <li><a href="/blog/ingiltere-depo-rehberi" className="hover:text-white transition">İngiltere Depo Rehberi</a></li>
            <li><a href="/blog/ingiltere-depo-fiyatlari-2026" className="hover:text-white transition">Depo Fiyatları 2026</a></li>
            <li><a href="/blog/turkiyeden-ingiltereye-ihracat-rehberi" className="hover:text-white transition">İhracat Rehberi</a></li>
            <li><a href="/blog/ingiltere-ithalat-maliyetleri" className="hover:text-white transition">İthalat Maliyetleri</a></li>
            <li><a href="/blog/amazon-prep-uk-rehberi" className="hover:text-white transition">Amazon Prep Rehberi</a></li>
            <li><a href="/ingiltere-depo-maliyet-hesaplama" className="hover:text-white transition">Depo Maliyet Hesaplama</a></li>
            <li><a href="/cbm-palet-hesaplama" className="hover:text-white transition">CBM ve Palet Hesaplama</a></li>
            <li><a href="/konteyner-varis-planlayici" className="hover:text-white transition">Konteyner Varış Planlayıcı</a></li>
            <li><a href="/konteyner-tipleri" className="hover:text-white transition">Konteyner Tipleri</a></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">İletişim</div>
          <div className="space-y-3 text-sm">
            <p>İngiltere operasyonu için WhatsApp, telefon veya e-posta ile ulaşabilirsiniz. Türkçe destek.</p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-5 py-3 rounded-full transition w-fit"
            >
              WhatsApp&apos;tan Teklif Alın
            </a>
            <a
              href={TEL}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition"
            >
              <Emoji e="📞" /> Hemen Arayın
            </a>
            <TrackedLink kind="email" source="footer" href="mailto:support@londradepo.com" className="flex items-center gap-2 text-slate-300 hover:text-white transition">
              <Emoji e="📧" /> support@londradepo.com
            </TrackedLink>
          </div>
        </div>
      </div>

      <FooterLegal lang="tr" intro="LondraDepo.com — Londra depo, İngiltere warehouse ve İngiltere fulfillment çözümleri." />
    </footer>
  );
}
