const WHATSAPP = "https://wa.me/447000000000?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";

const locations = [
  { name: "Londra", desc: "Hızlı ticari erişim ve operasyon görünürlüğü", icon: "🏙️" },
  { name: "Essex", desc: "Depolama ve dağıtım için stratejik konum", icon: "🏭" },
  { name: "Birmingham", desc: "İç dağıtım planlaması için önemli merkez", icon: "🔗" },
  { name: "Manchester", desc: "Kuzey bölge sevkleri için avantaj", icon: "📦" },
  { name: "Felixstowe", desc: "Liman girişi ve ürün kabul noktası", icon: "⚓" },
  { name: "Heathrow", desc: "Hava kargo teslim ve yönlendirme", icon: "✈️" },
  { name: "London Gateway", desc: "Lojistik hub'a yakın konumlama", icon: "🚢" },
];

export default function LocationsSeoSection() {
  return (
    <section className="py-20 px-4 bg-[#0b2545] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-3">
            Londra Depo & İngiltere Lojistik Ağı
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Londra, Essex, Birmingham ve Manchester hattına erişim sağlayan
            operasyon yaklaşımımız; Felixstowe, Heathrow ve London Gateway
            bağlantılı süreçler için güçlü planlama avantajı sunar.
            <strong className="text-white"> İngiltere warehouse </strong>
            ihtiyacı duyan firmalar için doğru operasyon zemini.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="bg-white/10 border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition"
            >
              <div className="text-2xl mb-2">{loc.icon}</div>
              <div className="font-bold mb-1">{loc.name}</div>
              <div className="text-slate-300 text-xs">{loc.desc}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition"
          >
            Lokasyonunuza En Uygun İngiltere Depo Planı İçin Yazın
          </a>
        </div>
      </div>
    </section>
  );
}
