import Image from "next/image";

const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";

const featured = {
  icon: "🏭",
  title: "İngiltere'de Fiziksel Operasyon Gücü",
  desc: "Sadece sistem değil, sahada gerçek operasyon altyapısı sunuyoruz. Essex merkezli depomuzdaki ürün kabul, palet depolama, fulfillment ve dağıtım süreçleri kontrolümüz altında yürütülmektedir.",
};

const reasons = [
  {
    icon: "🔒",
    title: "Türkiye'den İngiltere'ye Güvenli Depolama",
    desc: "Türkiye'den gönderdiğiniz ürünler güvenli şekilde teslim alınır, depolanır ve dağıtıma hazırlanır.",
  },
  {
    icon: "🗺️",
    title: "Londra & Essex Konum Avantajı",
    desc: "Londra depo konumumuz sayesinde İngiltere dağıtım ağına hızlı erişim sağlıyoruz. İngiltere'nin en aktif ve navlun ücreti uygun limanı Port of Felixstowe'a yakın konumumuz, Türkiye çıkışlı ithalatlarda gümrükleme ve ürün kabul süreçlerinde kritik maliyet ve zaman avantajı sunar.",
  },
  {
    icon: "🤝",
    title: "Türkçe İletişim",
    desc: "Dil engeliyle vakit kaybetmeden Türkçe iletişimle hızlı çözüm üretiyoruz.",
  },
  {
    icon: "📦",
    title: "Esnek & Ölçeklenebilir Yapı",
    desc: "E-ticaret, toptan, gıda ve ithalat süreçlerine uygun modüler depo planları sunuyoruz.",
  },
  {
    icon: "⚡",
    title: "Tek Noktadan Çözüm",
    desc: "İngiltere lojistik partneri olarak depo, fulfillment ve dağıtımı tek merkezden yönetiyoruz.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="neden-biz" className="py-20 px-4 bg-[#f6f8fb]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0b2545] mb-3">
            Neden LondraDepo?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Sadece alan sunmuyoruz; İngiltere lojistik, fulfillment ve dağıtım
            tarafında işi yürüten bir operasyon sistemi sunuyoruz.
          </p>
        </div>

        {/* Featured card with warehouse image */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <div className="text-3xl mb-3">{featured.icon}</div>
              <h3 className="font-bold text-[#0b2545] text-xl mb-3">{featured.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{featured.desc}</p>
            </div>
            <div className="relative min-h-[240px] md:min-h-0">
              <Image
                src="/uk-warehouse-essex.jpeg"
                alt="UK warehouse Essex interior — İngiltere depo içi gerçek operasyon"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((r) => (
            <div key={r.title} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">{r.icon}</div>
              <h3 className="font-bold text-[#0b2545] mb-2">{r.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{r.desc}</p>
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
            İngiltere&apos;de Güvenilir Depo Partneri İçin Yazın
          </a>
        </div>
      </div>
    </section>
  );
}
