import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import FaqJsonLd from "@/components/FaqJsonLd";
import ArticleHero from "@/components/ArticleHero";
import ArticleSources from "@/components/ArticleSources";
import AuthorBox from "@/components/AuthorBox";
import QuoteForm from "@/components/QuoteForm";
import TrClusterNav from "@/components/TrClusterNav";
import { TR_ARTICLES } from "@/content/tr-articles";
import type { TrPage, TrSection } from "@/content/tr-pages";
import { trAlternates } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import Icon, { iconFor } from "@/components/visual/Icon";
import ProcessFlow from "@/components/visual/ProcessFlow";
import RouteMap from "@/components/visual/RouteMap";
import HeroArt, { themeFor } from "@/components/visual/HeroArt";
import { readable } from "@/lib/readable";

/** Metadata for a data-driven Turkish page (canonical + reciprocal hreflang via trAlternates). */
export function trPageMetadata(p: TrPage): Metadata {
  return {
    title: p.title,
    description: p.description,
    alternates: trAlternates(p.path),
    openGraph: { title: p.title, description: p.description, url: `${SITE_URL}${p.path}`, siteName: "LondraDepo.com", locale: "tr_TR", type: p.kind === "article" ? "article" : "website" },
  };
}

function jsonLd(p: TrPage) {
  const url = `${SITE_URL}${p.path}`;
  const crumbs = [{ name: "Ana Sayfa", path: "/" }, ...(p.kind === "article" ? [{ name: "Blog", path: "/blog" }] : []), { name: p.crumb, path: p.path }];
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${SITE_URL}${c.path === "/" ? "" : c.path}` || SITE_URL })),
    },
  ];
  if (p.hub) {
    const seen = new Set<string>();
    const items = p.sections.flatMap((sec) => (sec.type === "links" ? sec.items : [])).filter((it) => !seen.has(it.href) && seen.add(it.href));
    graph.push(
      { "@type": "CollectionPage", "@id": `${url}#webpage`, url, name: p.h1, description: p.description, inLanguage: "tr-TR", mainEntity: { "@id": `${url}#items` } },
      { "@type": "ItemList", "@id": `${url}#items`, name: p.h1, numberOfItems: items.length, itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_URL}${it.href}`, name: it.title })) },
    );
  }
  const a = TR_ARTICLES[p.path];
  if (p.kind === "article" && a) {
    graph.push({
      "@type": p.path.startsWith("/blog/") ? "BlogPosting" : "Article",
      "@id": `${url}#article`,
      headline: a.headline,
      description: p.description,
      url,
      ...(a.published ? { datePublished: a.published } : {}),
      dateModified: a.modified,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@type": "Person", name: "Sertaç Yılmaz", jobTitle: "Arca Trade Group Kurucu Ortağı", url: `${SITE_URL}/hakkimizda` },
      contributor: { "@type": "Person", name: "Yusuf Barış", jobTitle: "Operasyon Müdürü" },
      publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
      image: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg`, width: 640, height: 160 },
      inLanguage: "tr-TR",
    });
  } else {
    graph.push({
      "@type": "Service",
      name: p.h1,
      serviceType: p.serviceType,
      description: p.description,
      provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url,
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

function Block({ s }: { s: TrSection }) {
  const h2 = <h2 className="text-2xl font-extrabold text-[#0b2545] mb-4">{s.h2}</h2>;
  switch (s.type) {
    case "text":
      return (
        <section className="mb-10">
          {h2}
          <div className="max-w-3xl">
            {readable(s.paras).map((t) => <p key={t} className="text-[1.0625rem] text-slate-700 leading-8 mb-5">{t}</p>)}
          </div>
        </section>
      );
    case "list":
      return (
        <section className="mb-10">
          {h2}
          {s.intro && <p className="text-slate-600 mb-3">{s.intro}</p>}
          <ul className="space-y-2">
            {s.items.map((t) => (
              <li key={t} className="flex gap-2.5 text-slate-700">
                <span className="mt-0.5 text-green-600 shrink-0"><Icon name="check" className="h-5 w-5" /></span>
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </section>
      );
    case "steps":
      return (
        <section className="mb-10">
          {h2}
          {s.intro && <p className="text-slate-600 mb-4">{s.intro}</p>}
          <ProcessFlow items={s.items.map(([title, text]) => ({ title, text }))} />
        </section>
      );
    case "table":
      return (
        <section className="mb-10">
          {h2}
          {s.intro && <p className="text-slate-600 mb-3">{s.intro}</p>}
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100 text-[#0b2545]"><tr>{s.head.map((h) => <th key={h} scope="col" className="px-4 py-3">{h}</th>)}</tr></thead>
              <tbody>
                {s.rows.map((r) => (
                  <tr key={r[0]} className="border-t border-slate-200 even:bg-slate-50/70">
                    {r.map((c, i) => (i === 0 ? <th key={i} scope="row" className="px-4 py-3 font-medium text-slate-800">{c}</th> : <td key={i} className="px-4 py-3 text-slate-700">{c}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {s.note && <p className="text-xs text-slate-500 mt-2">{s.note}</p>}
        </section>
      );
    case "routemap":
      return (
        <section className="mb-10">
          {s.h2 && h2}
          <RouteMap lang="tr" className="max-w-3xl" />
        </section>
      );
    case "stats":
      return (
        <section className="mb-10">
          {h2}
          <dl className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {s.items.map((it) => (
              <div key={it.label} className="flex flex-col-reverse rounded-xl bg-[#0b2545] text-white p-5">
                <dt className="text-sm text-white/75 mt-1">{it.label}</dt>
                <dd className="text-2xl font-extrabold">{it.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      );
    case "links":
      return (
        <section className="mb-10">
          {h2}
          <div className="grid gap-4 sm:grid-cols-3">
            {s.items.map((l) => (
              <Link key={l.href} href={l.href} className="block border border-slate-200 rounded-xl p-5 hover:border-[#0b2545] transition">
                <span className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-[#d62839]"><Icon name={iconFor(l.title, l.text)} className="h-5 w-5" /></span>
                  {l.tag && <span className="text-xs font-semibold text-[#d62839]">{l.tag}</span>}
                </span>
                <span className="block font-bold text-[#0b2545] mt-1 mb-1">{l.title}</span>
                <span className="block text-sm text-slate-600">{l.text}</span>
              </Link>
            ))}
          </div>
        </section>
      );
  }
}

export default function TrDataPage({ p, children }: { p: TrPage; children?: React.ReactNode }) {
  const isArticle = p.kind === "article";
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(p)).replace(/</g, "\\u003c") }} />
      <FaqJsonLd faqs={p.faqs} />
      <main className="bg-white">
        <nav aria-label="breadcrumb" className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 py-2 text-sm text-slate-500 flex flex-wrap gap-2">
            <Link href="/" className="hover:text-[#0b2545] transition">Ana Sayfa</Link>
            {isArticle && (<><span>/</span><Link href="/blog" className="hover:text-[#0b2545] transition">Blog</Link></>)}
            <span>/</span>
            <span className="text-[#0b2545] font-medium">{p.crumb}</span>
          </div>
        </nav>
        <article className="py-10 px-4">
          <div className="max-w-4xl mx-auto">
            {isArticle ? (
              <ArticleHero path={p.path} category={p.eyebrow} title={p.h1} readTime={p.readTime ?? "6 dakika"} />
            ) : (
              <header className="mb-8 lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-8 lg:items-center">
                <div>
                  <p className="text-sm font-semibold text-[#d62839] mb-3">{p.eyebrow}</p>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] leading-tight mb-4">{p.h1}</h1>
                </div>
                <div className="hidden lg:block"><HeroArt theme={themeFor(p.path)} /></div>
              </header>
            )}
            {/* Articles show the registry "Kısa cevap" instead, so the answer is not repeated. */}
            {!isArticle && (
              <div className="mb-8 max-w-3xl">
                {readable([p.lead]).map((x, i) => <p key={i} className={`text-lg text-slate-700 leading-relaxed ${i ? "mt-3" : ""}`}>{x}</p>)}
              </div>
            )}
            {p.facts && (
              <section aria-label="Bir bakışta" className="mb-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-lg font-bold text-[#0b2545] mb-3">Bir bakışta</h2>
                <ul className="grid gap-2 sm:grid-cols-2 text-sm text-slate-700">
                  {p.facts.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <span className="mt-0.5 text-[#d62839] shrink-0"><Icon name={iconFor(f)} className="h-5 w-5" /></span>
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {p.sections.map((s, i) => <Block key={i} s={s} />)}
            {children}
            {isArticle && <div className="article-body"><ArticleSources path={p.path} /></div>}
            <section className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0b2545] mb-6">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {p.faqs.map((f) => (
                  <div key={f.q} className="border border-slate-200 rounded-xl p-5">
                    <h3 className="font-bold text-[#0b2545] mb-2">{f.q}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
            {isArticle && <AuthorBox path={p.path} />}
            {p.related && (
              <p className="text-sm text-slate-600">
                İlgili sayfalar:{" "}
                {p.related.map((r, i) => (
                  <span key={r.href}>{i > 0 && " · "}<Link href={r.href} className="underline">{r.label}</Link></span>
                ))}
              </p>
            )}
          </div>
        </article>
        <QuoteForm formId={p.form.id} heading={p.form.heading} intro={p.form.intro} presetServices={p.form.services} />
        <TrClusterNav path={p.path} />
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
