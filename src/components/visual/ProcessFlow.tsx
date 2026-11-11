import Icon, { iconFor } from "./Icon";

/**
 * Numbered process flow: a vertical timeline on mobile, a connected step grid on larger screens.
 * Text stays in HTML (ordered list), icons are decorative.
 */
export default function ProcessFlow({ items }: { items: { title: string; text: string }[] }) {
  const cols = items.length <= 4 ? "lg:grid-cols-4" : items.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-3";
  return (
    <ol className={`relative grid gap-0 sm:gap-5 sm:grid-cols-2 ${cols}`}>
      {items.map((c, i) => (
        <li key={c.title} className="relative flex gap-4 pb-6 sm:pb-5 sm:flex-col sm:gap-3 sm:rounded-2xl sm:border sm:border-slate-200 sm:bg-white sm:p-5 sm:shadow-sm">
          {/* mobile timeline line */}
          {i < items.length - 1 && <span className="absolute left-[23px] top-12 bottom-0 w-0.5 bg-slate-200 sm:hidden" aria-hidden="true" />}
          <div className="relative z-10 flex items-center gap-3 shrink-0">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b2545] text-white shadow-md">
              <Icon name={iconFor(c.title, c.text)} className="h-6 w-6" />
            </span>
            <span className="hidden sm:inline text-xs font-bold tracking-widest text-[#d62839]">{String(i + 1).padStart(2, "0")}</span>
          </div>
          <div className="min-w-0 pt-1 sm:pt-0">
            <h3 className="font-semibold text-[#0b2545] leading-snug">
              <span className="sm:hidden text-[#d62839] mr-1.5">{i + 1}.</span>
              {c.title}
            </h3>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">{c.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
