/**
 * Original flat illustrations for page heroes (drawn for LondraDepo, brand navy #0b2545 / red #e63946).
 * Decorative: the hero heading and lead already say what the page is about, so these are aria-hidden.
 * Inline SVG, no network request, fixed aspect ratio (no layout shift).
 */
export type ArtTheme = "warehouse" | "container" | "ecommerce" | "amazon" | "route" | "customs" | "tool" | "guide" | "case" | "industry";

const NAVY = "#0b2545";
const RED = "#e63946";
const SKY = "#dbe7f3";
const SLATE = "#94a3b8";

function Pallet({ x, y, w = 70, h = 44, c = "#c8a46b" }: { x: number; y: number; w?: number; h?: number; c?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="3" fill={c} stroke={NAVY} strokeWidth="2" />
      <path d={`M${x + w / 2} ${y}v${h}M${x} ${y + h / 2}h${w}`} stroke={NAVY} strokeWidth="1.5" opacity=".35" />
      <rect x={x - 3} y={y + h} width={w + 6} height="7" fill="#8b6b3e" stroke={NAVY} strokeWidth="2" />
    </g>
  );
}

function Scene({ theme }: { theme: ArtTheme }) {
  switch (theme) {
    case "warehouse":
      return (
        <>
          <path d="M40 250V120l160-70 160 70v130z" fill="#fff" stroke={NAVY} strokeWidth="3" />
          <path d="M40 120l160-70 160 70" fill="none" stroke={RED} strokeWidth="6" strokeLinejoin="round" />
          <rect x="80" y="140" width="240" height="110" fill={SKY} stroke={NAVY} strokeWidth="2" />
          {[0, 1].map((r) => <path key={r} d={`M80 ${195 + r * 0}h240`} stroke={NAVY} strokeWidth="3" />)}
          <path d="M80 140v110M200 140v110M320 140v110" stroke={NAVY} strokeWidth="3" />
          <Pallet x={95} y={150} w={45} h={36} />
          <Pallet x={150} y={150} w={40} h={36} c="#e9edf3" />
          <Pallet x={215} y={150} w={45} h={36} c="#e9edf3" />
          <Pallet x={268} y={150} w={40} h={36} />
          <Pallet x={95} y={204} w={45} h={36} c="#e9edf3" />
          <Pallet x={215} y={204} w={90} h={36} />
          <circle cx="200" cy="95" r="12" fill={RED} />
        </>
      );
    case "container":
      return (
        <>
          <path d="M20 230h360" stroke={SLATE} strokeWidth="3" />
          <path d="M300 230V60h12v170M300 70h-90v10h90" fill="none" stroke={NAVY} strokeWidth="5" />
          <path d="M240 80v40" stroke={NAVY} strokeWidth="2" />
          <rect x="200" y="120" width="80" height="34" rx="3" fill={RED} stroke={NAVY} strokeWidth="2.5" />
          {[0, 1, 2, 3].map((i) => <path key={i} d={`M${214 + i * 16} 124v26`} stroke="#fff" strokeWidth="2" opacity=".7" />)}
          <rect x="40" y="170" width="150" height="58" rx="4" fill={NAVY} />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => <path key={i} d={`M${58 + i * 19} 176v46`} stroke="#fff" strokeWidth="2" opacity=".35" />)}
          <rect x="40" y="112" width="150" height="56" rx="4" fill="#fff" stroke={NAVY} strokeWidth="2.5" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => <path key={i} d={`M${58 + i * 19} 118v44`} stroke={NAVY} strokeWidth="2" opacity=".3" />)}
          <path d="M20 250c40 10 80 10 120 0s80-10 120 0 80 10 120 0" fill="none" stroke={SKY} strokeWidth="8" />
        </>
      );
    case "ecommerce":
      return (
        <>
          <rect x="40" y="50" width="200" height="140" rx="12" fill="#fff" stroke={NAVY} strokeWidth="3" />
          <rect x="40" y="50" width="200" height="26" rx="12" fill={NAVY} />
          <circle cx="58" cy="63" r="4" fill={RED} /><circle cx="72" cy="63" r="4" fill="#fff" /><circle cx="86" cy="63" r="4" fill="#fff" />
          <rect x="60" y="92" width="70" height="56" rx="6" fill={SKY} />
          <rect x="142" y="96" width="78" height="10" rx="5" fill={NAVY} opacity=".8" />
          <rect x="142" y="114" width="56" height="8" rx="4" fill={SLATE} />
          <rect x="142" y="134" width="60" height="22" rx="11" fill={RED} />
          <path d="M240 140h50" stroke={NAVY} strokeWidth="3" strokeDasharray="6 6" />
          <path d="M260 160 300 140 340 160 300 180z" fill="#e9c98f" stroke={NAVY} strokeWidth="2.5" />
          <path d="M260 160v50l40 20 40-20v-50" fill="#d6ad6b" stroke={NAVY} strokeWidth="2.5" />
          <path d="M300 180v50" stroke={NAVY} strokeWidth="2.5" />
          <rect x="310" y="192" width="22" height="14" rx="2" fill="#fff" stroke={NAVY} strokeWidth="1.5" transform="skewY(-26) translate(0 150)" />
          <path d="M60 230h300" stroke={SLATE} strokeWidth="3" />
        </>
      );
    case "amazon":
      return (
        <>
          <path d="M90 120 200 70l110 50-110 50z" fill="#e9c98f" stroke={NAVY} strokeWidth="3" />
          <path d="M90 120v100l110 50V170z" fill="#d6ad6b" stroke={NAVY} strokeWidth="3" />
          <path d="M310 120v100l-110 50V170z" fill="#c79a55" stroke={NAVY} strokeWidth="3" />
          <rect x="120" y="170" width="54" height="34" rx="3" fill="#fff" stroke={NAVY} strokeWidth="2" transform="skewY(24) translate(0 -62)" />
          {[0, 1, 2, 3, 4, 5].map((i) => <path key={i} d={`M${128 + i * 7} 178v18`} stroke={NAVY} strokeWidth="2" transform="skewY(24) translate(0 -62)" />)}
          <path d="M150 95l100 45" stroke={RED} strokeWidth="10" strokeLinecap="round" opacity=".9" />
          <circle cx="330" cy="70" r="26" fill={RED} />
          <path d="m318 70 8 8 16-16" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      );
    case "route":
      return (
        <>
          <path d="M30 210c60-60 120-10 180-60s120-20 160-90" fill="none" stroke={NAVY} strokeWidth="4" strokeDasharray="10 10" />
          <circle cx="30" cy="210" r="12" fill="#fff" stroke={NAVY} strokeWidth="4" />
          <path d="M210 150c0-30 40-30 40 0 0 22-20 40-20 40s-20-18-20-40z" fill={RED} />
          <circle cx="230" cy="148" r="7" fill="#fff" />
          <rect x="330" y="40" width="50" height="34" rx="4" fill={NAVY} />
          <path d="M340 46v22M352 46v22M364 46v22" stroke="#fff" strokeWidth="2" opacity=".4" />
          <path d="M40 250h320" stroke={SLATE} strokeWidth="3" />
          <rect x="80" y="196" width="72" height="38" rx="3" fill={RED} stroke={NAVY} strokeWidth="3" />
          <path d="M152 206h22l16 16v12h-38z" fill="#fff" stroke={NAVY} strokeWidth="3" strokeLinejoin="round" />
          <path d="M160 212h12l8 9h-20z" fill={SKY} />
          <circle cx="102" cy="238" r="9" fill={NAVY} /><circle cx="172" cy="238" r="9" fill={NAVY} />
          <circle cx="102" cy="238" r="3" fill="#fff" /><circle cx="172" cy="238" r="3" fill="#fff" />
        </>
      );
    case "customs":
      return (
        <>
          <rect x="80" y="50" width="150" height="190" rx="8" fill="#fff" stroke={NAVY} strokeWidth="3" />
          {[0, 1, 2, 3, 4].map((i) => <rect key={i} x="100" y={80 + i * 26} width={i % 2 ? 90 : 110} height="9" rx="4" fill={SLATE} opacity=".6" />)}
          <rect x="100" y="80" width="60" height="9" rx="4" fill={NAVY} />
          <circle cx="250" cy="180" r="48" fill="none" stroke={RED} strokeWidth="6" />
          <circle cx="250" cy="180" r="34" fill="none" stroke={RED} strokeWidth="3" />
          <path d="m232 180 12 12 22-24" fill="none" stroke={RED} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M300 80h60v90h-60z" fill={SKY} stroke={NAVY} strokeWidth="3" />
          <path d="M312 100h36M312 116h28M312 132h36" stroke={NAVY} strokeWidth="3" />
        </>
      );
    case "tool":
      return (
        <>
          <rect x="110" y="40" width="180" height="220" rx="16" fill={NAVY} />
          <rect x="130" y="62" width="140" height="48" rx="8" fill={SKY} />
          <text x="258" y="96" textAnchor="end" fontSize="26" fontWeight="800" fill={NAVY}>£</text>
          {[0, 1, 2].map((r) => [0, 1, 2].map((c) => <rect key={`${r}${c}`} x={130 + c * 48} y={126 + r * 42} width="40" height="32" rx="6" fill={r === 2 && c === 2 ? RED : "#fff"} opacity={r === 2 && c === 2 ? 1 : 0.9} />))}
          <rect x="300" y="160" width="70" height="80" rx="6" fill="#fff" stroke={NAVY} strokeWidth="3" />
          <path d="M312 180h46M312 198h34M312 216h46" stroke={NAVY} strokeWidth="3" />
          <path d="m40 200 14 14 26-30" fill="none" stroke={RED} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </>
      );
    case "guide":
      return (
        <>
          <path d="M70 70c40-12 80-12 130 6v170c-50-18-90-18-130-6z" fill="#fff" stroke={NAVY} strokeWidth="3" />
          <path d="M330 70c-40-12-80-12-130 6v170c50-18 90-18 130-6z" fill={SKY} stroke={NAVY} strokeWidth="3" />
          {[0, 1, 2, 3, 4].map((i) => <path key={i} d={`M92 ${104 + i * 26}h88`} stroke={SLATE} strokeWidth="5" strokeLinecap="round" />)}
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x="220" y={98 + i * 32} width="16" height="16" rx="3" fill="#fff" stroke={NAVY} strokeWidth="2.5" />
              <path d={`m223 ${106 + i * 32} 4 4 7-8`} fill="none" stroke={RED} strokeWidth="3" strokeLinecap="round" />
              <path d={`M246 ${106 + i * 32}h60`} stroke={NAVY} strokeWidth="5" strokeLinecap="round" opacity=".6" />
            </g>
          ))}
        </>
      );
    case "case":
      return (
        <>
          <path d="M50 250h300M50 250V60" stroke={NAVY} strokeWidth="3" />
          {[40, 70, 110, 160].map((h, i) => <rect key={i} x={80 + i * 64} y={250 - h} width="40" height={h} rx="4" fill={i === 3 ? RED : NAVY} opacity={i === 3 ? 1 : 0.25 + i * 0.2} />)}
          <path d="M90 200 150 172 214 140 280 82" fill="none" stroke={RED} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m262 78 20 2-4 20" fill="none" stroke={RED} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </>
      );
    case "industry":
      return (
        <>
          {[[60, 50], [160, 50], [260, 50], [60, 160], [160, 160], [260, 160]].map(([x, y], k) => (
            <rect key={k} x={x} y={y} width="80" height="80" rx="16" fill={k % 3 === 1 ? RED : NAVY} opacity={k === 5 ? 0.85 : 1} />
          ))}
          {/* gear: automotive */}
          <g transform="translate(100 90)" fill="none" stroke="#fff" strokeWidth="6">
            <circle r="13" />
            <circle r="4" fill="#fff" stroke="none" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => <rect key={a} x="-5" y="-27" width="10" height="9" rx="2" fill="#fff" stroke="none" transform={`rotate(${a})`} />)}
          </g>
          {/* shirt: fashion */}
          <path d="M184 72l10-8h12c0 6 4 9 8 9s8-3 8-9h-2 14l10 8-8 12-6-4v34h-32V80l-6 4z" fill="#fff" transform="translate(-14 -2)" />
          {/* box: packaging */}
          <path d="M276 82l24-12 24 12-24 12z M276 82v26l24 12V94z M324 82v26l-24 12V94z" fill="#fff" stroke={NAVY} strokeWidth="2" strokeLinejoin="round" />
          {/* wheat: food */}
          <g stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none">
            <path d="M100 222v-42" />
            {[0, 1, 2].map((r) => <g key={r}><path d={`M100 ${208 - r * 10}c-8-2-12-8-12-14`} /><path d={`M100 ${208 - r * 10}c8-2 12-8 12-14`} /></g>)}
          </g>
          {/* battery: electronics */}
          <rect x="182" y="182" width="36" height="40" rx="5" fill="none" stroke="#fff" strokeWidth="5" />
          <rect x="193" y="175" width="14" height="7" rx="2" fill="#fff" />
          <path d="M202 189l-8 13h10l-6 12" fill="none" stroke="#fff" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
          {/* sofa: bulky goods */}
          <path d="M276 196h48v16h-48z M272 190a6 6 0 0 1 12 0v24h-12z M316 190a6 6 0 0 1 12 0v24h-12z M282 186h36v12h-36z M278 214v8M322 214v8" fill="#fff" />
        </>
      );
  }
}

export default function HeroArt({ theme, className = "" }: { theme: ArtTheme; className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={`w-full h-auto ${className}`} aria-hidden="true" focusable="false">
      <ellipse cx="200" cy="160" rx="190" ry="130" fill="#eef3f9" />
      <Scene theme={theme} />
    </svg>
  );
}

/** Choose an illustration theme for an EN or TR page from its path. */
export function themeFor(path: string, kind?: string): ArtTheme {
  if (kind === "case" || /case-stud/.test(path)) return "case";
  if (/calculator|hesaplama|planner|planlayici|request-a-quote|teklif-al/.test(path)) return "tool";
  if (kind !== "article-topic" && (kind === "article" || /\/blog\//.test(path))) return "guide";
  if (kind === "article-topic" && /rehber|guide|checklist|kontrol|nasil-secilir|choose/.test(path)) return "guide";
  if (kind === "article-topic" && /fiyat|maliyet|cost|price/.test(path)) return "tool";
  if (/industr|sektor|otomotiv|ambalaj|food-packaging|automotive/.test(path)) return "industry";
  if (/amazon/.test(path)) return "amazon";
  if (/shopify|ecommerce|e-ticaret|fulfil|pick-and-pack|siparis/.test(path)) return "ecommerce";
  if (/container|konteyner|port|liman|gateway|felixstowe|tilbury|cargo|ellecleme/.test(path)) return "container";
  if (/custom|gumruk|import|ithalat|market-entry|turkish|turk/.test(path)) return "customs";
  if (/distribution|dagitim|london|londra|essex|location/.test(path)) return "route";
  return "warehouse";
}
