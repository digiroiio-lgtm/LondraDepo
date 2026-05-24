interface ArticleHeroProps {
  category: string;
  categoryColor?: string;
  title: string;
  readTime: string;
  date?: string;
}

export default function ArticleHero({
  category,
  categoryColor = "text-[#e63946] bg-red-50",
  title,
  readTime,
  date,
}: ArticleHeroProps) {
  return (
    <>
      {/* Hero banner */}
      <div
        className="w-full rounded-2xl mb-6 overflow-hidden"
        style={{ aspectRatio: "16/6" }}
      >
        <div
          className="w-full h-full relative flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #0b2545 0%, #1e3a5f 55%, #2d5986 100%)",
          }}
        >
          {/* Decorative grid */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Warehouse icon group */}
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="flex items-center gap-4">
              <span className="text-5xl opacity-80">🏭</span>
              <span className="text-3xl opacity-60">📦</span>
              <span className="text-4xl opacity-80">🚚</span>
            </div>
            <p className="text-white/60 text-sm font-medium tracking-widest uppercase">
              LondraDepo.com — İngiltere Depo & Lojistik
            </p>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/5 to-transparent" />
        </div>
      </div>

      {/* Author line */}
      <p className="text-[#e63946] text-sm font-medium mb-4">
        LondraDepo.com Editörü
      </p>

      {/* Category badge + title */}
      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColor}`}>
        {category}
      </span>
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b2545] mt-3 mb-3 text-balance">
        {title}
      </h1>

      {/* Meta */}
      <p className="text-slate-500 text-sm mb-8">
        {date && <span>Güncellendi: {date} · </span>}
        ⏱ {readTime} okuma
      </p>
    </>
  );
}
