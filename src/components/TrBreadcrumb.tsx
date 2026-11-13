import Link from "next/link";
import { SITE_URL } from "@/lib/site";

/**
 * Two-level Turkish breadcrumb (Ana Sayfa / page). `visible` renders the nav bar used on data pages;
 * `jsonLd` emits a BreadcrumbList for pages whose own JSON-LD has none.
 */
export default function TrBreadcrumb({ path, label, visible = true, jsonLd = false }: { path: string; label: string; visible?: boolean; jsonLd?: boolean }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: label, item: `${SITE_URL}${path}` },
    ],
  };
  return (
    <>
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }} />}
      {visible && (
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-2 text-sm text-slate-500 flex flex-wrap gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-[#0b2545] font-medium" aria-current="page">{label}</span>
          </div>
        </nav>
      )}
    </>
  );
}
