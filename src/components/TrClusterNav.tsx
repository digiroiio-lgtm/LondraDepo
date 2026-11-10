import Link from "next/link";
import { trClusterFor } from "@/content/tr-clusters";

/** "Hangi sayfa size uygun?" box for Turkish pages in a service cluster. */
export default function TrClusterNav({ path }: { path: string }) {
  const c = trClusterFor(path);
  if (!c) return null;
  return (
    <section className="py-12 px-4 bg-white">
      <nav aria-labelledby="tr-cluster-heading" className="max-w-5xl mx-auto rounded-2xl border border-slate-200 p-6">
        <h2 id="tr-cluster-heading" className="text-lg font-bold text-[#0b2545] mb-4">{c.h2}</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {c.items.map((i) =>
            i.href === path ? (
              <li key={i.href} aria-current="page" className="rounded-lg border-2 border-[#0b2545] bg-slate-50 p-4">
                <span className="block font-semibold text-[#0b2545]">{i.title} <span className="text-xs font-normal text-slate-500">(bu sayfa)</span></span>
                <span className="block text-sm text-slate-600 mt-1">En uygun: {i.fit}</span>
              </li>
            ) : (
              <li key={i.href}>
                <Link href={i.href} className="block h-full rounded-lg border border-slate-200 p-4 hover:border-[#0b2545] transition">
                  <span className="block font-semibold text-[#0b2545]">{i.title} →</span>
                  <span className="block text-sm text-slate-600 mt-1">En uygun: {i.fit}</span>
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>
    </section>
  );
}
