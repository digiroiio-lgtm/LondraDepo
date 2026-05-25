interface CaseHeroProps {
  industry: string;
  industryColor?: string;
  brand: string;
  title: string;
  subtitle: string;
  metrics: { label: string; value: string }[];
}

export default function CaseHero({
  industry,
  industryColor = "text-[#e63946] bg-red-50",
  brand,
  title,
  subtitle,
  metrics,
}: CaseHeroProps) {
  return (
    <div
      className="w-full rounded-2xl mb-8 overflow-hidden"
      style={{ minHeight: "320px" }}
    >
      <div
        className="w-full h-full relative flex flex-col justify-between p-8 md:p-12"
        style={{
          background: "linear-gradient(135deg, #0b2545 0%, #1e3a5f 60%, #2d5986 100%)",
          minHeight: "320px",
        }}
      >
        {/* Grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="case-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#case-grid)" />
        </svg>

        {/* Top: brand + industry badge */}
        <div className="relative z-10 flex flex-wrap items-center gap-3 mb-6">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${industryColor}`}>
            {industry}
          </span>
          <span className="text-white/60 text-sm">Case Study — {brand}</span>
        </div>

        {/* Middle: headline */}
        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-4 text-balance leading-tight">
            {title}
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Bottom: metrics */}
        {metrics.length > 0 && (
          <div className="relative z-10 mt-8 flex flex-wrap gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-2xl font-extrabold text-white">{m.value}</div>
                <div className="text-white/60 text-xs mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
