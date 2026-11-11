import { TR_ARTICLES } from "@/content/tr-articles";
import { ArticleDates, ShortAnswer } from "./ArticleMeta";
import HeroArt, { themeFor } from "@/components/visual/HeroArt";

interface ArticleHeroProps {
  category: string;
  categoryColor?: string;
  title: string;
  readTime: string;
  date?: string;
  /** Article path; dates, short answer and reviewer come from src/content/tr-articles.ts. */
  path?: string;
}

export default function ArticleHero({
  category,
  categoryColor = "text-[#d62839] bg-red-50",
  title,
  readTime,
  date,
  path,
}: ArticleHeroProps) {
  const a = path ? TR_ARTICLES[path] : undefined;
  return (
    <>
      {/* Hero banner: original illustration matched to the article topic (decorative) */}
      <div className="w-full rounded-2xl mb-6 overflow-hidden bg-[#f6f8fb] border border-slate-100 flex items-center justify-center" style={{ aspectRatio: "16/6" }}>
        <HeroArt theme={path ? themeFor(path, "article-topic") : "guide"} className="h-full w-auto max-w-full" />
      </div>

      {/* Author line */}
      <p className="text-[#d62839] text-sm font-medium mb-4">
        Sertaç Yılmaz — Arca Trade Group Kurucu Ortağı
        {a && <span className="text-slate-500 font-normal"> · İnceleyen: Yusuf Barış, Operasyon Müdürü</span>}
      </p>

      {/* Category badge + title */}
      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColor}`}>
        {category}
      </span>
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b2545] mt-3 mb-3 text-balance">
        {title}
      </h1>

      {/* Meta */}
      {a && path ? (
        <>
          <ArticleDates path={path} suffix={<> · ⏱ {readTime} okuma</>} />
          <ShortAnswer path={path} />
        </>
      ) : (
        <p className="text-slate-500 text-sm mb-8">
          {date && <span>Güncellendi: {date} · </span>}
          ⏱ {readTime} okuma
        </p>
      )}
    </>
  );
}
