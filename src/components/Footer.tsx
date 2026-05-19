const WHATSAPP = "https://wa.me/447000000000?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";
const TEL = "tel:+447000000000";

export default function Footer() {
  return (
    <footer id="iletisim" className="bg-[#0b2545] text-slate-300 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
        <div>
          <div className="text-white font-bold text-xl mb-3">
            Londra<span className="text-red-400">Depo</span>.com
          </div>
          <p className="text-sm leading-relaxed">
            İngiltere depo, İngiltere fulfillment, İngiltere lojistik, İngiltere
            ürün deposu ve İngiltere dağıtım merkezi çözümleri. Türkiye'den
            İngiltere'ye ihracat yapan işletmeler için İngiltere lojistik
            partneri.
          </p>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">Hizmetler</div>
          <ul className="space-y-2 text-sm">
            <li>İngiltere'de Depo</li>
            <li>İngiltere Fulfillment</li>
            <li>İngiltere Palet Depolama</li>
            <li>Ürün Kabul & Stok Yönetimi</li>
            <li>İngiltere Dağıtım Merkezi</li>
            <li>İngiltere Gıda Deposu</li>
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">İletişim</div>
          <div className="space-y-3 text-sm">
            <p>İngiltere operasyonu için WhatsApp veya telefon yoluyla ulaşabilirsiniz.</p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-5 py-3 rounded-full transition w-fit"
            >
              WhatsApp'tan Teklif Alın
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

      <div className="border-t border-white/10 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} LondraDepo.com — Londra depo, İngiltere
        warehouse ve İngiltere fulfillment çözümleri. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
