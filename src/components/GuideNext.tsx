import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { GUIDE_NEXT } from "@/content/tr-guide-links";

/** End of a Turkish guide: the matching service pages and the quote page (inside the article). */
export function GuideNextLinks({ slug }: { slug: string }) {
  const g = GUIDE_NEXT[slug];
  if (!g) return null;
  return (
    <div className="mt-8 pt-6 border-t border-slate-200 not-prose">
      <p className="text-slate-500 text-sm mb-3">Sıradaki adım: ilgili hizmetler</p>
      <ul className="grid sm:grid-cols-2 gap-2 list-none p-0">
        {g.links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className={`block rounded-xl border px-4 py-3 text-sm font-semibold transition ${l.href === "/teklif-al" ? "border-[#d62839] text-[#d62839] hover:bg-[#d62839] hover:text-white" : "border-slate-200 text-[#0b2545] hover:border-[#0b2545]"}`}>
              → {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Full-width quote form after a Turkish guide, with services preselected for the guide's topic. */
export function GuideQuote({ slug }: { slug: string }) {
  const g = GUIDE_NEXT[slug];
  if (!g) return null;
  return <QuoteForm formId={`tr_guide_${slug.replace(/-/g, "_")}`} heading={g.heading} intro={g.intro} presetServices={g.services} />;
}
