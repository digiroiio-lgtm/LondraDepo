import { QUOTES, type QuoteKey } from "@/content/quotes";

/** Team quote block for TR (and other TSX) pages; wording lives in src/content/quotes.ts. */
export default function TeamQuote({ id, lang = "tr", className = "" }: { id: QuoteKey; lang?: "tr" | "en"; className?: string }) {
  const q = QUOTES[id];
  return (
    <figure className={`rounded-xl border-l-4 border-[#e63946] bg-slate-50 p-6 ${className}`}>
      <blockquote className="text-lg text-[#0b2545] leading-relaxed">
        <p>&ldquo;{q[lang]}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-slate-600">
        <span className="font-semibold">{q.person.name}</span>, {q.person[lang]}
      </figcaption>
    </figure>
  );
}
