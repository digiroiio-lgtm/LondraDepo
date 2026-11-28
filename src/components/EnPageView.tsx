import Emoji from "@/components/visual/Emoji";
import Link from "next/link";
import Image from "next/image";
import WarehouseGallery from "@/components/WarehouseGallery";
import TrackedLink from "@/components/TrackedLink";
import { ctaFor, quoteHref } from "@/content/en/cta";
import { bookingUrl } from "@/lib/booking";
import { clusterFor } from "@/content/en/clusters";
import Icon, { iconFor } from "@/components/visual/Icon";
import ProcessFlow from "@/components/visual/ProcessFlow";
import RouteMap from "@/components/visual/RouteMap";
import HeroArt, { themeFor } from "@/components/visual/HeroArt";
import { readable } from "@/lib/readable";
import QuoteFormEn from "@/components/QuoteFormEn";
import ChecklistGate from "./ChecklistGate";
import ContainerPlanner from "./ContainerPlanner";
import CostCalculator from "@/components/CostCalculator";
import CbmCalculator from "@/components/CbmCalculator";

/** Amazon and Shopify pages also offer a call booking in the hero (competitors lead with "book a free call"). */
const HERO_BOOKING = new Set([
  "/en/amazon-prep-uk", "/en/amazon-fulfilment-uk", "/en/amazon-seller-warehousing-uk", "/en/amazon-uk-fulfilment-centres", "/en/shopify-fulfilment-uk",
]);

/** Pages that state the published pallet rate get it as Offer markup on their Service node. */
const PALLET_OFFER = new Set([
  "/en/uk-warehousing-pricing", "/en/pallet-storage", "/en/uk-warehousing", "/en/3pl-uk", "/en/uk-storage-cost-calculator",
]);

/** Highest-intent pages get the quote form inline (CRO plan, weeks 11–13). */
const INLINE_FORM = new Set([
  "/en/3pl-uk", "/en/uk-import-logistics", "/en/container-unloading", "/en/uk-warehousing-pricing", "/en/pallet-storage", "/en/uk-warehousing",
  "/en/shopify-fulfilment-uk", "/en/uk-fulfilment", "/en/ecommerce-fulfilment", "/en/uk-ecommerce-logistics", "/en/pick-and-pack",
  "/en/amazon-fulfilment-uk", "/en/amazon-seller-warehousing-uk", "/en/amazon-prep-uk", "/en/amazon-uk-fulfilment-centres", "/en/uk-distribution",
  "/en/london-gateway-tilbury-warehousing", "/en/felixstowe-port-warehousing", "/en/uk-warehousing-for-turkish-exporters",
  "/en/case-studies", "/en/industries", "/en/blog", "/en/call-off-stock-uk", "/en/bulk-shipping-uk-distribution", "/en/uk-sample-distribution", "/en/corporate-gift-fulfilment-uk",
  "/pl/magazyn-dla-polskich-firm",
]);
import HeaderEn from "@/components/HeaderEn";
import FooterEn from "@/components/FooterEn";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import FaqJsonLd from "@/components/FaqJsonLd";
import { getEnPage } from "@/content/en";
import { getPlPage } from "@/content/pl";
import { VIEW, type ViewLocale } from "@/i18n/view";
import { UI } from "@/i18n/ui";
import { LOCALES, localeOf } from "@/lib/locales";
import { pageSet } from "@/lib/i18n-pairs";
import type { EnPage, Section } from "@/content/en/types";
import { absolute } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { palletOffer } from "@/lib/offers";

const TEL = "tel:+447554195190";
const MAPS = "https://maps.google.com/?q=Unit+19+Arterial+Park+Arterial+Road+Rayleigh+Essex+SS6+7FY";

const ORG = { "@id": `${SITE_URL}/#organization` };

/** English site launch date; pages without their own review date fall back to it. */
const EN_PUBLISHED = "2026-11-10";

function modifiedOf(page: EnPage): string {
  return [page.article?.modified, page.modified, EN_PUBLISHED].filter((d): d is string => Boolean(d)).sort().at(-1) as string;
}

/** Template language of a page (EN or PL). */
function langOf(page: Pick<EnPage, "slug">): ViewLocale {
  return localeOf(page.slug) === "pl" ? "pl" : "en";
}

/** English equivalent of a PL page (per-page settings below are keyed by the English slug). */
function enKey(slug: string): string {
  return localeOf(slug) === "pl" ? (pageSet(slug).en ?? slug) : slug;
}

/** Any template-language page by slug (parents and related links stay within the site's languages). */
function getPage(slug: string): EnPage | undefined {
  return getEnPage(slug) ?? getPlPage(slug);
}

function formatDate(iso: string, lang: ViewLocale = "en"): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(VIEW[lang].dateLocale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

function breadcrumbs(page: EnPage) {
  const lang = langOf(page);
  const crumbs: { name: string; path: string }[] = [{ name: VIEW[lang].home, path: LOCALES[lang].home }];
  if (page.parent) {
    const parent = getPage(page.parent);
    if (parent) crumbs.push({ name: parent.label, path: parent.slug });
  }
  if (page.slug !== LOCALES[lang].home) crumbs.push({ name: page.label, path: page.slug });
  return crumbs;
}

function jsonLd(page: EnPage) {
  const url = absolute(page.slug);
  const crumbs = breadcrumbs(page);
  const graph: Record<string, unknown>[] = [
    {
      "@type": page.kind === "hub" ? ["WebPage", "CollectionPage"] : "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: LOCALES[langOf(page)].htmlLang,
      isPartOf: { "@id": `${SITE_URL}/en#website` },
      about: ORG,
      datePublished: page.article?.published ?? EN_PUBLISHED,
      dateModified: modifiedOf(page),
      ...(page.kind === "hub" ? { mainEntity: { "@id": `${url}#items` } } : {}),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: absolute(c.path) })),
    },
  ];
  if (page.kind === "hub") {
    // Hubs list their child pages (guides, case studies, sectors) as an ItemList, de-duplicated, in page order.
    const seen = new Set<string>();
    const items = page.sections.flatMap((sec) => (sec.type === "links" ? sec.items : [])).filter((it) => !seen.has(it.href) && seen.add(it.href));
    graph.push({
      "@type": "ItemList",
      "@id": `${url}#items`,
      name: page.h1,
      numberOfItems: items.length,
      itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, url: absolute(it.href), name: it.title })),
    });
  }
  if (page.kind === "service" && page.serviceType) {
    graph.push({
      "@type": "Service",
      name: page.h1,
      serviceType: page.serviceType,
      description: page.description,
      provider: ORG,
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url,
      ...(PALLET_OFFER.has(enKey(page.slug)) ? { offers: palletOffer(langOf(page)) } : {}),
    });
  }
  if (page.kind === "home") {
    // AEO freshness: answer engines read dateModified from Article-type schema.
    graph.push({
      "@type": "Article",
      "@id": `${url}#article`,
      headline: page.h1,
      description: page.description,
      inLanguage: LOCALES[langOf(page)].htmlLang,
      datePublished: EN_PUBLISHED,
      dateModified: modifiedOf(page),
      author: { "@type": "Organization", name: "Arca Trade Group Ltd", url: "https://arcatrade.co.uk/" },
      publisher: ORG,
      mainEntityOfPage: { "@id": `${url}#webpage` },
      image: `${SITE_URL}/londradepo.jpeg`,
    });
  }
  if (page.article) {
    graph.push({
      "@type": page.kind === "case" ? "Article" : "BlogPosting",
      headline: page.h1,
      description: page.description,
      inLanguage: LOCALES[langOf(page)].htmlLang,
      datePublished: page.article.published,
      dateModified: page.article.modified,
      author: { "@type": "Person", name: "Sertaç Yılmaz", jobTitle: "Co-founder, Arca Trade Group" },
      publisher: ORG,
      mainEntityOfPage: url,
      articleSection: page.article.section,
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

function SectionView({ s, lang }: { s: Section; lang: ViewLocale }) {
  const h2 = "h2" in s && s.h2 ? <h2 className="text-2xl font-bold text-[#0b2545] mb-4">{s.h2}</h2> : null;
  switch (s.type) {
    case "text":
      return (
        <section className="mb-12">
          {h2}
          <div className="max-w-3xl">
            {readable(s.paras).map((p) => (
              <p key={p.slice(0, 40)} className="text-[1.0625rem] text-slate-700 leading-8 mb-5">{p}</p>
            ))}
          </div>
        </section>
      );
    case "cards":
      return (
        <section className="mb-12">
          {h2}
          {s.intro && <p className="text-slate-600 mb-5">{s.intro}</p>}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.items.map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#d62839]">
                  <Icon name={iconFor(c.title, c.text)} />
                </span>
                <h3 className="font-semibold text-[#0b2545] mb-2">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>
      );
    case "steps":
      return (
        <section className="mb-12">
          {h2}
          {s.intro && <p className="text-slate-600 mb-5">{s.intro}</p>}
          <ProcessFlow items={s.items} />
        </section>
      );
    case "list":
      return (
        <section className="mb-12">
          {h2}
          {s.intro && <p className="text-slate-700 mb-4">{s.intro}</p>}
          <ul className="space-y-2">
            {s.items.map((it) => (
              <li key={it} className="flex gap-2 text-slate-700">
                <span className="mt-0.5 text-green-600 shrink-0"><Icon name="check" className="h-5 w-5" /></span>
                <span className="leading-relaxed">{it}</span>
              </li>
            ))}
          </ul>
          {s.outro && <p className="text-slate-700 mt-4">{s.outro}</p>}
        </section>
      );
    case "table":
      return (
        <section className="mb-12">
          {h2}
          {s.intro && <p className="text-slate-700 mb-4">{s.intro}</p>}
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100 text-[#0b2545]">
                <tr>{s.head.map((h, i) => <th key={i} scope="col" className="px-4 py-3 font-semibold">{h}</th>)}</tr>
              </thead>
              <tbody>
                {s.rows.map((r, i) => (
                  <tr key={i} className="border-t border-slate-200 even:bg-slate-50/70">
                    {r.map((c, j) => (j === 0 ? <th key={j} scope="row" className="px-4 py-3 font-medium text-slate-800">{c}</th> : <td key={j} className="px-4 py-3 text-slate-700">{c}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {s.note && <p className="text-sm text-slate-500 mt-3">{s.note}</p>}
        </section>
      );
    case "stats":
      return (
        <section className="mb-12">
          {h2}
          <dl className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {s.items.map((it) => (
              <div key={it.label} className="flex flex-col-reverse rounded-xl bg-[#0b2545] text-white p-5">
                <dt className="text-sm text-white/70">{it.label}</dt>
                <dd className="text-2xl font-extrabold">{it.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      );
    case "quote":
      return (
        <figure className="mb-12 rounded-xl border-l-4 border-[#e63946] bg-slate-50 p-6">
          <blockquote className="text-lg text-[#0b2545] leading-relaxed">
            <p>&ldquo;{s.text}&rdquo;</p>
          </blockquote>
          <figcaption className="mt-3 text-sm text-slate-600">
            {s.cite}
            {s.sourceHref && (
              <>
                {" "}·{" "}
                <a href={s.sourceHref} target="_blank" rel="noopener noreferrer" className="underline">
                  {s.sourceLabel ?? VIEW[lang].sourceLabel}
                </a>
              </>
            )}
          </figcaption>
        </figure>
      );
    case "cbm":
      return (
        <section className="mb-12" id="calculator">
          {h2}
          {s.intro && <p className="text-slate-600 mb-5">{s.intro}</p>}
          <CbmCalculator lang="en" />
        </section>
      );
    case "calculator":
      return (
        <section className="mb-12" id="calculator">
          {h2}
          {s.intro && <p className="text-slate-600 mb-5">{s.intro}</p>}
          <CostCalculator lang="en" />
        </section>
      );
    case "routemap":
      return (
        <section className="mb-12">
          {h2}
          <RouteMap lang="en" className="max-w-3xl" />
        </section>
      );
    case "planner":
      return (
        <section className="mb-12" id="planner">
          {h2}
          {s.intro && <p className="text-slate-600 mb-5">{s.intro}</p>}
          <ContainerPlanner lang="en" />
        </section>
      );
    case "checklist":
      return <ChecklistGate lang="en" variant={s.variant} />;
    case "sources":
      return (
        <section className="mb-12">
          {h2}
          <ol className="list-decimal pl-5 space-y-1.5 text-sm text-slate-700">
            {s.items.map((it) => (
              <li key={it.href}>
                <a href={it.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0b2545]">
                  {it.label}
                </a>
              </li>
            ))}
          </ol>
        </section>
      );
    case "links":
      return (
        <section className="mb-12">
          {h2}
          {s.intro && <p className="text-slate-600 mb-5">{s.intro}</p>}
          <div className="grid gap-4 sm:grid-cols-2">
            {s.items.map((l) => (
              <Link key={l.href} href={l.href} className="block rounded-xl border border-slate-200 bg-white p-5 hover:border-[#e63946] transition">
                {l.tag && <span className="text-xs font-semibold uppercase tracking-wide text-[#d62839]">{l.tag}</span>}
                <h3 className="font-semibold text-[#0b2545] mt-1 mb-2">{l.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{l.text}</p>
              </Link>
            ))}
          </div>
        </section>
      );
  }
}

export default function EnPageView({ page }: { page: EnPage }) {
  const lang = langOf(page);
  const v = VIEW[lang];
  const WHATSAPP = UI[lang].sticky.href;
  const crumbs = breadcrumbs(page);
  const related = (page.related ?? []).map((s) => getPage(s)).filter((p): p is EnPage => Boolean(p));
  const quote = ctaFor(page);
  const key = enKey(page.slug);
  const inlineForm = INLINE_FORM.has(key);
  const cluster = clusterFor(page.slug);
  const qHref = inlineForm ? "#quote" : quoteHref(quote.service, page.slug, lang);
  // Topic-specific closing heading for services and case studies (avoids one generic H2 on dozens of pages).
  const cta = page.cta ?? (page.kind === "service" || page.kind === "case" ? { ...v.ctaDefault, h2: quote.label } : v.ctaDefault);
  const topical = page.kind !== "home" && page.kind !== "contact" && page.kind !== "legal";

  return (
    <>
      <HeaderEn lang={lang} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(page)).replace(/</g, "\\u003c") }} />
      {page.faqs && <FaqJsonLd faqs={page.faqs} />}
      <main className="bg-white">
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 pt-6 pb-12 lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10 lg:items-center">
            <div>
            {crumbs.length > 1 && (
              <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-6">
                {crumbs.map((c, i) => (
                  <span key={c.path}>
                    {i > 0 && <span className="mx-1.5">/</span>}
                    {i < crumbs.length - 1 ? <Link href={c.path} className="hover:text-[#0b2545]">{c.name}</Link> : <span aria-current="page">{c.name}</span>}
                  </span>
                ))}
              </nav>
            )}
            {page.eyebrow && <p className="text-sm font-semibold text-[#d62839] mb-3">{page.eyebrow}</p>}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] leading-tight mb-5 max-w-3xl">{page.h1}</h1>
            {page.article && (
              <p className="text-sm text-slate-500 mb-4">
                {v.byline(page.article.modified, page.article.readMins)}{" "}
                <time dateTime={page.article.modified}>{formatDate(page.article.modified, lang)}</time>
                {" "}· {page.article.readMins} {v.readMins}
              </p>
            )}
            {page.updated && <p className="text-sm text-slate-500 mb-4">{v.lastUpdated} {page.updated}</p>}
            {!page.updated && !page.article && (
              <p className="text-sm text-slate-500 mb-4">
                {v.lastUpdated} <time dateTime={modifiedOf(page)}>{formatDate(modifiedOf(page), lang)}</time>
              </p>
            )}
            {readable([page.lead]).map((t, i) => (
              <p key={i} className={`text-lg text-slate-700 leading-relaxed max-w-3xl ${i ? "mt-3" : ""}`}>{t}</p>
            ))}
            {page.kind !== "legal" && (
              <div className="flex flex-wrap gap-3 mt-7">
                <TrackedLink kind="cta" source="hero" href={qHref} className="bg-[#d62839] hover:bg-[#c1121f] text-white font-semibold px-6 py-3 rounded-full transition">
                  {quote.label}
                </TrackedLink>
                <TrackedLink kind="whatsapp" source="hero" href={WHATSAPP} className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-full transition">
                  {v.whatsapp}
                </TrackedLink>
                {HERO_BOOKING.has(key) && (
                  <TrackedLink kind="booking" source="hero" href={bookingUrl("en", page.slug)} className="border border-[#0b2545] text-[#0b2545] font-semibold px-6 py-3 rounded-full hover:bg-[#0b2545] hover:text-white transition">
                    {v.book}
                  </TrackedLink>
                )}
                <TrackedLink kind="phone" source="hero" href={TEL} className="border border-[#0b2545] text-[#0b2545] font-semibold px-6 py-3 rounded-full hover:bg-[#0b2545] hover:text-white transition">
                  <Emoji e="📞" /> +44 7554 195190
                </TrackedLink>
              </div>
            )}
            </div>
            {page.kind !== "home" && page.kind !== "legal" && page.kind !== "contact" && (
              <div className="hidden lg:block">
                <HeroArt theme={themeFor(key, page.kind)} />
              </div>
            )}
            {page.kind === "home" && (
              <div className="mt-10 rounded-2xl overflow-hidden shadow-2xl lg:col-span-2">
                <Image
                  src="/londradepo.jpeg"
                  alt={v.heroAlt}
                  width={2158}
                  height={1260}
                  sizes="(max-width: 1152px) 100vw, 1152px"
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>

        {lang === "en" && (page.kind === "home" || page.slug === "/en/about-us") && <WarehouseGallery lang="en" />}

        <div className="max-w-6xl mx-auto px-4 py-12">
          {page.note && <p className="mb-10 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">{page.note}</p>}
          {page.serviceBox && (
            <aside aria-label={page.serviceBox.title} className="mb-10 rounded-xl border-2 border-[#0b2545] bg-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
              <div>
                <p className="text-lg font-bold text-[#0b2545] mb-1">{page.serviceBox.title}</p>
                <p className="text-sm text-slate-700 leading-relaxed">{page.serviceBox.text}</p>
              </div>
              <TrackedLink kind="cta" source="service_box" href={page.serviceBox.href} className="shrink-0 text-center bg-[#0b2545] hover:bg-[#13315c] text-white font-semibold px-6 py-3 rounded-full transition">
                {page.serviceBox.cta}
              </TrackedLink>
            </aside>
          )}
          {page.facts && (
            <section aria-labelledby="facts-heading" className="mb-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h2 id="facts-heading" className="text-lg font-bold text-[#0b2545] mb-3">{v.atAGlance}</h2>
              <ul className="grid gap-2 sm:grid-cols-2 text-sm text-slate-700">
                {page.facts.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <span className="mt-0.5 text-[#d62839] shrink-0"><Icon name={iconFor(f)} className="h-5 w-5" /></span>
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {page.sections.map((s, i) => (
            <div key={i}>
              <SectionView s={s} lang={lang} />
              {i === 0 && cluster && (
                <nav aria-labelledby="cluster-heading" className="mb-12 rounded-xl border border-slate-200 p-6">
                  <h2 id="cluster-heading" className="text-lg font-bold text-[#0b2545] mb-4">{cluster.h2}</h2>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {cluster.items.map((c) =>
                      c.href === page.slug ? (
                        <li key={c.href} aria-current="page" className="rounded-lg border-2 border-[#0b2545] bg-slate-50 p-4">
                          <span className="block font-semibold text-[#0b2545]">{c.title} <span className="text-xs font-normal text-slate-500">{v.thisPage}</span></span>
                          <span className="block text-sm text-slate-600 mt-1">{v.bestIf} {c.fit}</span>
                        </li>
                      ) : (
                        <li key={c.href}>
                          <Link href={c.href} className="block h-full rounded-lg border border-slate-200 p-4 hover:border-[#0b2545] transition">
                            <span className="block font-semibold text-[#0b2545]">{c.title} →</span>
                            <span className="block text-sm text-slate-600 mt-1">{v.bestIf} {c.fit}</span>
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </nav>
              )}
            </div>
          ))}

          {inlineForm && (
            <section id="quote" aria-labelledby="quote-heading" className="mb-12 scroll-mt-24">
              <h2 id="quote-heading" className="text-2xl font-bold text-[#0b2545] mb-2">{quote.label}</h2>
              <p className="text-slate-600 mb-4">{v.inlineIntro}</p>
              <ul className="mb-5 grid gap-2 sm:grid-cols-2 text-sm text-slate-700">
                {v.trust.map((t) => (
                  <li key={t} className="flex gap-2"><span className="text-green-700" aria-hidden="true"><Emoji e="✓" /></span>{t}</li>
                ))}
              </ul>
              <QuoteFormEn defaultService={quote.service} formId={`${lang}_inline_quote`} lang={lang} />
              <p className="mt-4 text-sm text-slate-600">
                {v.preferTalk}{" "}
                <TrackedLink kind="booking" source="inline_quote" href={bookingUrl("en", page.slug)} className="font-semibold text-[#0b2545] underline">
                  {v.book}
                </TrackedLink>{" "}
                {v.or}{" "}
                <TrackedLink kind="whatsapp" source="inline_quote" href={WHATSAPP} className="font-semibold text-green-700 underline">
                  {v.messageWhatsapp}
                </TrackedLink>
                .
              </p>
            </section>
          )}

          {!inlineForm && page.kind !== "legal" && page.kind !== "contact" && (
            <aside className="mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-[#e63946]/30 bg-red-50 p-6">
              <p className="font-semibold text-[#0b2545]">{v.midPage}</p>
              <TrackedLink kind="cta" source="mid_page" href={qHref} className="shrink-0 text-center bg-[#d62839] hover:bg-[#c1121f] text-white font-semibold px-6 py-3 rounded-full transition">
                {quote.label}
              </TrackedLink>
            </aside>
          )}

          {page.kind === "contact" && (
            <section className="mb-12 grid gap-4 sm:grid-cols-3">
              <TrackedLink kind="cta" source="contact_card" href={`${UI[lang].header.quoteHref}?from=${encodeURIComponent(page.slug)}`} className="rounded-xl border border-[#e63946] p-5 hover:bg-red-50 transition">
                <h2 className="font-semibold text-[#0b2545] mb-1">{v.contact.quoteTitle}</h2>
                <p className="text-sm text-slate-600">{v.contact.quoteText}</p>
              </TrackedLink>
              <TrackedLink kind="whatsapp" source="contact_card" href={WHATSAPP} className="rounded-xl border border-slate-200 p-5 hover:border-green-500 transition">
                <h2 className="font-semibold text-[#0b2545] mb-1">WhatsApp</h2>
                <p className="text-sm text-slate-600">{v.contact.whatsappText}</p>
              </TrackedLink>
              <TrackedLink kind="phone" source="contact_card" href={TEL} className="rounded-xl border border-slate-200 p-5 hover:border-[#0b2545] transition">
                <h2 className="font-semibold text-[#0b2545] mb-1">{v.contact.phoneTitle}</h2>
                <p className="text-sm text-slate-600">{v.contact.phoneText}</p>
              </TrackedLink>
              <TrackedLink kind="email" source="contact_card" href="mailto:support@londradepo.com" className="rounded-xl border border-slate-200 p-5 hover:border-[#0b2545] transition">
                <h2 className="font-semibold text-[#0b2545] mb-1">{v.contact.emailTitle}</h2>
                <p className="text-sm text-slate-600">{v.contact.emailText}</p>
              </TrackedLink>
              <TrackedLink kind="phone" source="contact_card_office" href="tel:+441268203283" className="rounded-xl border border-slate-200 p-5 hover:border-[#0b2545] transition">
                <h2 className="font-semibold text-[#0b2545] mb-1">{v.contact.officeTitle}</h2>
                <p className="text-sm text-slate-600">{v.contact.officeText}</p>
              </TrackedLink>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-200 p-5 hover:border-[#0b2545] transition sm:col-span-2">
                <h2 className="font-semibold text-[#0b2545] mb-1">{v.contact.addressTitle}</h2>
                <p className="text-sm text-slate-600">{v.contact.addressText}</p>
              </a>
            </section>
          )}

          {page.faqs && (
            <section aria-labelledby="faq-heading" className="mb-12">
              <h2 id="faq-heading" className="text-2xl font-bold text-[#0b2545] mb-4">{topical ? `${page.label}: ${v.faq}` : v.faq}</h2>
              <div className="divide-y divide-slate-200 rounded-xl border border-slate-200">
                {page.faqs.map((f) => (
                  <div key={f.q} className="p-5">
                    <h3 className="font-semibold text-[#0b2545] mb-2">{f.q}</h3>
                    <p className="text-slate-700 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {related.length > 0 && (
            <nav aria-labelledby="related-heading" className="mb-12">
              <h2 id="related-heading" className="text-xl font-bold text-[#0b2545] mb-4">{v.related}</h2>
              <ul className="flex flex-wrap gap-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={r.slug} className="inline-block rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-[#0b2545] hover:border-[#e63946] transition">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {page.kind !== "legal" && (
            <section className="rounded-2xl bg-[#0b2545] text-white p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">{cta.h2}</h2>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">{cta.text}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <TrackedLink kind="cta" source="footer_cta" href={qHref} className="inline-block bg-[#d62839] hover:bg-[#c1121f] text-white font-semibold px-7 py-3 rounded-full transition">
                  {quote.label}
                </TrackedLink>
                <TrackedLink kind="whatsapp" source="footer_cta" href={WHATSAPP} className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-7 py-3 rounded-full transition">
                  {v.whatsappLong}
                </TrackedLink>
                <TrackedLink kind="booking" source="footer_cta" href={bookingUrl("en", page.slug)} className="inline-block border border-white/60 hover:bg-white/10 text-white font-semibold px-7 py-3 rounded-full transition">
                  {v.bookShort}
                </TrackedLink>
              </div>
            </section>
          )}
        </div>
      </main>
      <FooterEn lang={lang} />
      <StickyWhatsappCta lang={lang} />
    </>
  );
}
