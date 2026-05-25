import Image from "next/image";

const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";
const TEL = "tel:+447554195190";

const badges = [
  "İngiltere warehouse",
  "UK fulfillment",
  "Palet depolama",
  "Ürün kabul & dağıtım",
];

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#0b2545] via-[#1e3a5f] to-[#0b2545] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">
          🇬🇧 Türkiye'den İngiltere'ye Güvenli Depolama
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-balance mb-6">
          Türkiye'den Gönderin,{" "}
          <span className="text-red-400">İngiltere'de</span> Depolayalım ve
          Dağıtalım
        </h1>

        <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
          LondraDepo.com; <strong className="text-white">İngiltere'de depo</strong>,{" "}
          <strong className="text-white">İngiltere fulfillment</strong>,{" "}
          <strong className="text-white">İngiltere palet depolama</strong>, ürün
          kabul ve dağıtım süreçlerini tek noktadan yöneten operasyon
          partnerinizdir. Londra ve Essex'e yakın konum avantajıyla ihracatçı
          firmalara fiziksel operasyon gücü sunar.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {badges.map((b) => (
            <span
              key={b}
              className="bg-white/10 border border-white/20 text-white text-sm px-4 py-1.5 rounded-full"
            >
              {b}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-bold px-8 py-4 rounded-full text-base transition shadow-lg"
          >
            <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            WhatsApp'tan Hızlı Teklif Al
          </a>
          <a
            href={TEL}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base transition"
          >
            📞 Hemen Arayın
          </a>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/londradepo.jpeg"
            alt="LondraDepo – İngiltere'de depo ve fulfillment merkezi"
            width={2158}
            height={1260}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
