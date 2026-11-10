/**
 * Schematic route map: the Rayleigh warehouse and road distances to London and the three container ports.
 * Positions are projected from real coordinates (not to scale); distances are the road-routing figures
 * published on the site (SS6 7FY, 10 Nov 2026). The same figures are always also present as HTML text.
 */
const T = {
  en: {
    title: "Road distances from the LondraDepo warehouse in Rayleigh, Essex",
    desc: "London Gateway about 13 miles, Port of Tilbury about 16 miles, central London about 37 miles and Port of Felixstowe about 62 miles by road.",
    wh: "LondraDepo warehouse", whSub: "Rayleigh, Essex", london: "Central London", tilbury: "Port of Tilbury", gateway: "London Gateway", felix: "Port of Felixstowe",
    mi: "mi", note: "Schematic, not to scale. Road distances by routing, Nov 2026.",
  },
  tr: {
    title: "Rayleigh, Essex'teki LondraDepo deposundan karayolu mesafeleri",
    desc: "Karayoluyla London Gateway yaklaşık 13 mil, Tilbury Limanı 16 mil, Londra merkezi 37 mil ve Felixstowe Limanı 62 mil.",
    wh: "LondraDepo deposu", whSub: "Rayleigh, Essex", london: "Londra merkezi", tilbury: "Tilbury Limanı", gateway: "London Gateway", felix: "Felixstowe Limanı",
    mi: "mil", note: "Şematiktir, ölçekli değildir. Karayolu rotası mesafeleri, Kasım 2026.",
  },
} as const;

const WH = { x: 300, y: 236 };

export default function RouteMap({ lang = "en", className = "" }: { lang?: "en" | "tr"; className?: string }) {
  const t = T[lang];
  const id = `routemap-${lang}`;
  const pts = [
    { key: "london", x: 62, y: 286, miles: 37, label: t.london, lx: 62, ly: 318, anchor: "middle" as const, mx: 180, my: 247 },
    { key: "tilbury", x: 214, y: 326, miles: 16, label: t.tilbury, lx: 196, ly: 352, anchor: "middle" as const, mx: 196, my: 286 },
    { key: "gateway", x: 262, y: 312, miles: 13, label: t.gateway, lx: 282, ly: 344, anchor: "start" as const, mx: 330, my: 290 },
    { key: "felix", x: 532, y: 70, miles: 62, label: t.felix, lx: 560, ly: 46, anchor: "end" as const, mx: 432, my: 140 },
  ];
  return (
    <figure className={`rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 ${className}`}>
      <svg viewBox="0 0 600 370" className="w-full h-auto" role="img" aria-labelledby={`${id}-t ${id}-d`}>
        <title id={`${id}-t`}>{t.title}</title>
        <desc id={`${id}-d`}>{t.desc}</desc>
        {/* land / estuary hint */}
        <rect x="0" y="0" width="600" height="370" rx="14" fill="#f6f8fb" />
        <path d="M0 300 C 90 300, 150 330, 230 330 S 330 300, 380 300 S 470 310, 600 300 L600 370 L0 370 Z" fill="#dbe7f3" />
        <path d="M600 40 C 560 90, 560 140, 600 170 Z" fill="#dbe7f3" />
        {/* M25 / A127 corridor hint */}
        <path d="M62 286 C 140 262, 220 246, 300 236" fill="none" stroke="#cbd5e1" strokeWidth="10" strokeLinecap="round" />
        {pts.map((p) => (
          <g key={p.key}>
            <line x1={WH.x} y1={WH.y} x2={p.x} y2={p.y} stroke="#0b2545" strokeWidth="2.5" strokeDasharray="6 6" />
            <circle cx={p.x} cy={p.y} r="8" fill="#fff" stroke="#0b2545" strokeWidth="3" />
            <text x={p.lx} y={p.ly} textAnchor={p.anchor} fontSize="15" fontWeight="600" fill="#0b2545">{p.label}</text>
            <g>
              <rect x={p.mx - 34} y={p.my - 14} width="68" height="26" rx="13" fill="#e63946" />
              <text x={p.mx} y={p.my + 4} textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">~{p.miles} {t.mi}</text>
            </g>
          </g>
        ))}
        {/* warehouse pin */}
        <g>
          <circle cx={WH.x} cy={WH.y} r="26" fill="#0b2545" />
          <path d={`M${WH.x - 12} ${WH.y + 8} v-12 l12 -8 l12 8 v12 z`} fill="#fff" />
          <rect x={WH.x - 4} y={WH.y + 1} width="8" height="7" fill="#0b2545" />
          <text x={WH.x + 36} y={WH.y - 6} fontSize="16" fontWeight="800" fill="#0b2545">{t.wh}</text>
          <text x={WH.x + 36} y={WH.y + 13} fontSize="13" fill="#475569">{t.whSub}</text>
        </g>
      </svg>
      <figcaption className="mt-2 text-xs text-slate-500">{t.note}</figcaption>
    </figure>
  );
}
