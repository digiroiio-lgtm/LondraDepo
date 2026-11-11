import { TR_ARTICLES } from "@/content/tr-articles";

/** "Kaynaklar" list for a Turkish article (inside .article-body). */
export default function ArticleSources({ path }: { path: string }) {
  const src = TR_ARTICLES[path]?.sources;
  if (!src?.length) return null;
  return (
    <>
      <h2>Kaynaklar</h2>
      <ol>
        {src.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noopener noreferrer" className="underline">{s.label}</a>
          </li>
        ))}
      </ol>
    </>
  );
}
