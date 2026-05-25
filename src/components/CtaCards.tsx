const WHATSAPP = "https://wa.me/447554195190?text=Merhaba%2C%20depo%20teklifi%20almak%20istiyorum.";
const TEL = "tel:+447554195190";

const ArrowIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

export default function CtaCards() {
  return (
    <div className="my-10 space-y-4">
      {/* Primary dark card */}
      <div className="bg-[#0b2545] rounded-2xl p-6 text-white">
        <p className="font-bold text-lg mb-1">WhatsApp ile Hızlı Teklif Alın</p>
        <p className="text-slate-300 text-sm mb-4">
          İngiltere depo, fulfillment veya Amazon prep ihtiyacınız için teklif alın.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition"
        >
          Teklif Al <ArrowIcon />
        </a>
      </div>

      {/* Secondary light card */}
      <div className="bg-[#f6f8fb] border border-slate-200 rounded-2xl p-6">
        <p className="font-bold text-[#0b2545] text-lg mb-1">Bizi Arayın</p>
        <p className="text-slate-600 text-sm mb-4">
          Türkçe destek ile hızlı yanıt alın. +44 7554 195190
        </p>
        <a
          href={TEL}
          className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition"
        >
          Hemen Ara <ArrowIcon />
        </a>
      </div>
    </div>
  );
}
