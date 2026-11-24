import Link from "next/link";

export type RelatedLink = { href: string; label: string; note?: string };

/** "İlgili sayfalar" band for hand-written Turkish pages: next steps to related services, guides and the quote page. */
export default function RelatedLinks({ title = "İlgili sayfalar", links }: { title?: string; links: RelatedLink[] }) {
  return (
    <section className="py-12 px-4 bg-slate-50 border-t border-slate-200" aria-labelledby="related-links-h">
      <div className="max-w-5xl mx-auto">
        <h2 id="related-links-h" className="text-xl font-extrabold text-[#0b2545] mb-5">{title}</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={`block h-full rounded-xl border bg-white px-4 py-3 transition ${l.href === "/teklif-al" ? "border-[#d62839] hover:bg-[#fff5f5]" : "border-slate-200 hover:border-[#0b2545]"}`}>
                <span className={`block text-sm font-semibold ${l.href === "/teklif-al" ? "text-[#d62839]" : "text-[#0b2545]"}`}>→ {l.label}</span>
                {l.note && <span className="block text-xs text-slate-500 mt-1">{l.note}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
