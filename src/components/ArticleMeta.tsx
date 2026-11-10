import { TR_ARTICLES, trDate } from "@/content/tr-articles";

/** Visible dates and the answer-first "Kısa cevap" box for a Turkish article or case study. */
export function ArticleDates({ path, suffix }: { path: string; suffix?: React.ReactNode }) {
  const a = TR_ARTICLES[path];
  if (!a) return null;
  return (
    <p className="text-slate-500 text-sm mb-8">
      {a.published && (
        <>
          Yayın: <time dateTime={a.published}>{trDate(a.published)}</time> ·{" "}
        </>
      )}
      Son güncelleme: <time dateTime={a.modified}>{trDate(a.modified)}</time>
      {suffix}
    </p>
  );
}

export function ShortAnswer({ path }: { path: string }) {
  const a = TR_ARTICLES[path];
  if (!a) return null;
  return (
    <div className="mb-8 rounded-xl border-l-4 border-[#e63946] bg-[#f6f8fb] p-5">
      <div className="text-xs font-bold uppercase tracking-widest text-[#e63946] mb-2">Kısa cevap</div>
      <div className="text-slate-700 leading-relaxed">{a.summary}</div>
    </div>
  );
}
