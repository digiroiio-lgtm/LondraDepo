import Link from "next/link";
import Image from "next/image";
import WarehouseGallery from "@/components/WarehouseGallery";
import TrackedLink from "@/components/TrackedLink";
import { ctaFor, quoteHref } from "@/content/en/cta";
import HeaderEn from "@/components/HeaderEn";
import FooterEn from "@/components/FooterEn";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";
import FaqJsonLd from "@/components/FaqJsonLd";
import { getEnPage } from "@/content/en";
import type { EnPage, Section } from "@/content/en/types";
import { absolute } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

const WHATSAPP = "https://wa.me/447554195190?text=Hello%2C%20I%27d%20like%20a%20warehousing%20quote.";
const TEL = "tel:+447554195190";
const MAPS = "https://maps.google.com/?q=Unit+19+Arterial+Park+Arterial+Road+Rayleigh+Essex+SS6+7FY";

const ORG = { "@id": `${SITE_URL}/#organization` };

function breadcrumbs(page: EnPage) {
  const crumbs = [{ name: "Home", path: "/en" }];
  if (page.parent) {
    const parent = getEnPage(page.parent);
    if (parent) crumbs.push({ name: parent.label, path: parent.slug });
  }
  if (page.slug !== "/en") crumbs.push({ name: page.label, path: page.slug });
  return crumbs;
}

function jsonLd(page: EnPage) {
  const url = absolute(page.slug);
  const crumbs = breadcrumbs(page);
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/en#website` },
      about: ORG,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: absolute(c.path) })),
    },
  ];
  if (page.kind === "service" && page.serviceType) {
    graph.push({
      "@type": "Service",
      name: page.h1,
      serviceType: page.serviceType,
      description: page.description,
      provider: ORG,
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url,
    });
  }
  if (page.article) {
    graph.push({
      "@type": page.kind === "case" ? "Article" : "BlogPosting",
      headline: page.h1,
      description: page.description,
      inLanguage: "en",
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

function SectionView({ s }: { s: Section }) {
  const h2 = "h2" in s && s.h2 ? <h2 className="text-2xl font-bold text-[#0b2545] mb-4">{s.h2}</h2> : null;
  switch (s.type) {
    case "text":
      return (
        <section className="mb-12">
          {h2}
          {s.paras.map((p) => (
            <p key={p.slice(0, 40)} className="text-slate-700 leading-relaxed mb-4">{p}</p>
          ))}
        </section>
      );
    case "cards":
      return (
        <section className="mb-12">
          {h2}
          {s.intro && <p className="text-slate-600 mb-5">{s.intro}</p>}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.items.map((c) => (
              <div key={c.title} className="rounded-xl border border-slate-200 bg-white p-5">
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
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.items.map((c, i) => (
              <li key={c.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <span className="text-xs font-bold text-[#e63946]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-semibold text-[#0b2545] mt-1 mb-2">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.text}</p>
              </li>
            ))}
          </ol>
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
                <span className="text-[#e63946] font-bold" aria-hidden="true">✓</span>
                <span>{it}</span>
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
                  <tr key={i} className="border-t border-slate-200">
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
    case "links":
      return (
        <section className="mb-12">
          {h2}
          {s.intro && <p className="text-slate-600 mb-5">{s.intro}</p>}
          <div className="grid gap-4 sm:grid-cols-2">
            {s.items.map((l) => (
              <Link key={l.href} href={l.href} className="block rounded-xl border border-slate-200 bg-white p-5 hover:border-[#e63946] transition">
                {l.tag && <span className="text-xs font-semibold uppercase tracking-wide text-[#e63946]">{l.tag}</span>}
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
  const crumbs = breadcrumbs(page);
  const related = (page.related ?? []).map((s) => getEnPage(s)).filter((p): p is EnPage => Boolean(p));
  const quote = ctaFor(page);
  const qHref = quoteHref(quote.service, page.slug);
  const cta = page.cta ?? { h2: "Get a UK warehousing quote", text: "Tell us your product, volumes and channels and we will prepare a tailored quote." };

  return (
    <>
      <HeaderEn />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(page)).replace(/</g, "\\u003c") }} />
      {page.faqs && <FaqJsonLd faqs={page.faqs} />}
      <main className="bg-white">
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 pt-6 pb-12">
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
            {page.eyebrow && <p className="text-sm font-semibold text-[#e63946] mb-3">{page.eyebrow}</p>}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] leading-tight mb-5 max-w-3xl">{page.h1}</h1>
            {page.article && (
              <p className="text-sm text-slate-500 mb-4">
                By Sertaç Yılmaz · Reviewed by Yusuf Barış, Operations Manager · Updated{" "}
                <time dateTime={page.article.modified}>{new Date(page.article.modified).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
                {" "}· {page.article.readMins} min read
              </p>
            )}
            {page.updated && <p className="text-sm text-slate-500 mb-4">Last updated: {page.updated}</p>}
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">{page.lead}</p>
            {page.kind !== "legal" && (
              <div className="flex flex-wrap gap-3 mt-7">
                <TrackedLink kind="cta" source="hero" href={qHref} className="bg-[#e63946] hover:bg-[#c1121f] text-white font-semibold px-6 py-3 rounded-full transition">
                  {quote.label}
                </TrackedLink>
                <TrackedLink kind="whatsapp" source="hero" href={WHATSAPP} className="bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-full transition">
                  WhatsApp us
                </TrackedLink>
                <TrackedLink kind="phone" source="hero" href={TEL} className="border border-[#0b2545] text-[#0b2545] font-semibold px-6 py-3 rounded-full hover:bg-[#0b2545] hover:text-white transition">
                  📞 +44 7554 195190
                </TrackedLink>
              </div>
            )}
            {page.kind === "home" && (
              <div className="mt-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/londradepo.jpeg"
                  alt="LondraDepo UK warehouse and fulfilment centre in Rayleigh, Essex"
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

        {(page.kind === "home" || page.slug === "/en/about-us") && <WarehouseGallery lang="en" />}

        <div className="max-w-6xl mx-auto px-4 py-12">
          {page.note && <p className="mb-10 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">{page.note}</p>}
          {page.facts && (
            <section aria-labelledby="facts-heading" className="mb-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h2 id="facts-heading" className="text-lg font-bold text-[#0b2545] mb-3">At a glance</h2>
              <ul className="grid gap-2 sm:grid-cols-2 text-sm text-slate-700">
                {page.facts.map((f) => <li key={f} className="flex gap-2"><span className="text-[#e63946]" aria-hidden="true">•</span>{f}</li>)}
              </ul>
            </section>
          )}

          {page.sections.map((s, i) => <SectionView key={i} s={s} />)}

          {page.kind !== "legal" && page.kind !== "contact" && (
            <aside className="mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-[#e63946]/30 bg-red-50 p-6">
              <p className="font-semibold text-[#0b2545]">Tell us your product, volumes and channels. We will prepare a tailored proposal.</p>
              <TrackedLink kind="cta" source="mid_page" href={qHref} className="shrink-0 text-center bg-[#e63946] hover:bg-[#c1121f] text-white font-semibold px-6 py-3 rounded-full transition">
                {quote.label}
              </TrackedLink>
            </aside>
          )}

          {page.kind === "contact" && (
            <section className="mb-12 grid gap-4 sm:grid-cols-3">
              <TrackedLink kind="cta" source="contact_card" href="/en/request-a-quote?from=%2Fen%2Fcontact" className="rounded-xl border border-[#e63946] p-5 hover:bg-red-50 transition">
                <h2 className="font-semibold text-[#0b2545] mb-1">Request a quote online</h2>
                <p className="text-sm text-slate-600">Short form: service, product and volumes</p>
              </TrackedLink>
              <TrackedLink kind="whatsapp" source="contact_card" href={WHATSAPP} className="rounded-xl border border-slate-200 p-5 hover:border-green-500 transition">
                <h2 className="font-semibold text-[#0b2545] mb-1">WhatsApp</h2>
                <p className="text-sm text-slate-600">+44 7554 195190 · fastest response</p>
              </TrackedLink>
              <TrackedLink kind="phone" source="contact_card" href={TEL} className="rounded-xl border border-slate-200 p-5 hover:border-[#0b2545] transition">
                <h2 className="font-semibold text-[#0b2545] mb-1">Phone</h2>
                <p className="text-sm text-slate-600">+44 7554 195190 · English and Turkish</p>
              </TrackedLink>
              <TrackedLink kind="phone" source="contact_card_office" href="tel:+441268203283" className="rounded-xl border border-slate-200 p-5 hover:border-[#0b2545] transition">
                <h2 className="font-semibold text-[#0b2545] mb-1">Arca Trade Group office</h2>
                <p className="text-sm text-slate-600">+44 1268 203 283 · Sales@arcatrade.co.uk · 07:45–17:30 UK time</p>
              </TrackedLink>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-200 p-5 hover:border-[#0b2545] transition sm:col-span-2">
                <h2 className="font-semibold text-[#0b2545] mb-1">Warehouse address</h2>
                <p className="text-sm text-slate-600">Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY · Open in Google Maps</p>
              </a>
            </section>
          )}

          {page.faqs && (
            <section aria-labelledby="faq-heading" className="mb-12">
              <h2 id="faq-heading" className="text-2xl font-bold text-[#0b2545] mb-4">Frequently asked questions</h2>
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
              <h2 id="related-heading" className="text-xl font-bold text-[#0b2545] mb-4">Related pages</h2>
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
                <TrackedLink kind="cta" source="footer_cta" href={qHref} className="inline-block bg-[#e63946] hover:bg-[#c1121f] text-white font-semibold px-7 py-3 rounded-full transition">
                  {quote.label}
                </TrackedLink>
                <TrackedLink kind="whatsapp" source="footer_cta" href={WHATSAPP} className="inline-block bg-green-500 hover:bg-green-400 text-white font-semibold px-7 py-3 rounded-full transition">
                  Message us on WhatsApp
                </TrackedLink>
              </div>
            </section>
          )}
        </div>
      </main>
      <FooterEn />
      <StickyWhatsappCta lang="en" />
    </>
  );
}
