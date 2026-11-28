import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import { SITE_URL } from "@/lib/site";
import { localeAlternates } from "@/lib/i18n";
import { ogLocale } from "@/lib/locales";
import { COMPANY, warehouseRows } from "@/lib/warehouse";
import { IMPRINT_PATHS, companyRows, imprintText } from "@/content/imprint";

const PATH = IMPRINT_PATHS.tr;
const t = imprintText("tr");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${t.title} | LondraDepo`,
  description: t.description,
  alternates: localeAlternates(PATH),
  openGraph: { title: t.title, description: t.description, url: `${SITE_URL}${PATH}`, siteName: "LondraDepo.com", ...ogLocale("tr"), type: "website" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${SITE_URL}${PATH}#webpage`, url: `${SITE_URL}${PATH}`, name: t.title, inLanguage: "tr-TR", about: { "@id": `${SITE_URL}/#organization` } },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: t.h1, item: `${SITE_URL}${PATH}` },
      ],
    },
  ],
};

function Rows({ head, rows }: { head: readonly string[]; rows: [string, string][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-left text-[#0b2545]">
          <tr>{head.map((h) => <th key={h} scope="col" className="px-4 py-2 font-semibold">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map(([k, v]) => (
            <tr key={k} className="border-t border-slate-200 align-top">
              <th scope="row" className="px-4 py-2 font-medium text-slate-700 w-2/5">{k}</th>
              <td className="px-4 py-2 text-slate-600 break-words">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function KunyePage() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <main>
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-2 text-sm text-slate-500 flex gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-[#0b2545] font-medium">{t.h1}</span>
          </div>
        </nav>
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-extrabold text-[#0b2545] mb-2">{t.h1}</h1>
            <p className="text-sm text-slate-500 mb-6">Son güncelleme: {t.updated}</p>
            <p className="text-slate-700 leading-relaxed mb-10">{t.lead}</p>
            <h2 className="text-xl font-bold text-[#0b2545] mb-3">{t.company}</h2>
            <div className="mb-10"><Rows head={t.head} rows={companyRows("tr")} /></div>
            <h2 className="text-xl font-bold text-[#0b2545] mb-3">{t.warehouse}</h2>
            <Rows head={t.head} rows={warehouseRows("tr")} />
            <p className="text-xs text-slate-500 mt-2 mb-10">{t.warehouseNote}</p>
            <h2 className="text-xl font-bold text-[#0b2545] mb-3">{t.sources}</h2>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li><a href={COMPANY.companiesHouse} target="_blank" rel="noopener noreferrer" className="underline">{t.ch}</a></li>
              <li><a href={COMPANY.bifa} target="_blank" rel="noopener noreferrer" className="underline">{t.bifa}</a></li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
