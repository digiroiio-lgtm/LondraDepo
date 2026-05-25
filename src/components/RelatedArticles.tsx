import Link from "next/link";

interface RelatedArticle {
  href: string;
  title: string;
  category: string;
  readTime: string;
  categoryColor?: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;
  return (
    <section className="mt-10 pt-8 border-t border-slate-200">
      <h2 className="text-lg font-extrabold text-[#0b2545] mb-5">İlgili Rehberler</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {articles.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="group flex gap-4 border border-slate-200 rounded-xl p-4 hover:border-[#0b2545]/40 hover:shadow-md transition"
          >
            <div className="flex-1">
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${a.categoryColor ?? "bg-slate-100 text-slate-600"}`}
              >
                {a.category}
              </span>
              <p className="font-bold text-[#0b2545] text-sm mt-2 group-hover:underline leading-snug">
                {a.title}
              </p>
              <p className="text-slate-400 text-xs mt-1">⏱ {a.readTime} okuma</p>
            </div>
            <span className="text-slate-300 group-hover:text-[#0b2545] transition text-lg self-center">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
