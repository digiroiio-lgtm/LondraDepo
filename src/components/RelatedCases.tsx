import Link from "next/link";

interface RelatedCase {
  slug: string;
  title: string;
  industry: string;
  summary: string;
}

interface RelatedCasesProps {
  cases: RelatedCase[];
}

const INDUSTRY_COLORS: Record<string, string> = {
  "Moda & Apparel": "bg-pink-50 text-pink-700",
  "Otomotiv": "bg-blue-50 text-blue-700",
  "B2B Dağıtım": "bg-amber-50 text-amber-700",
};

export default function RelatedCases({ cases }: RelatedCasesProps) {
  if (cases.length === 0) return null;
  return (
    <section className="mt-12 pt-8 border-t border-slate-200">
      <h2 className="text-xl font-extrabold text-[#0b2545] mb-6">Benzer Operasyon Örnekleri</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {cases.map((c) => (
          <Link
            key={c.slug}
            href={`/case-studies/${c.slug}`}
            className="group border border-slate-200 rounded-xl p-5 hover:border-[#0b2545]/40 hover:shadow-md transition"
          >
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full ${INDUSTRY_COLORS[c.industry] ?? "bg-slate-100 text-slate-600"}`}
            >
              {c.industry}
            </span>
            <h3 className="font-bold text-[#0b2545] mt-3 mb-2 group-hover:underline">{c.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{c.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
