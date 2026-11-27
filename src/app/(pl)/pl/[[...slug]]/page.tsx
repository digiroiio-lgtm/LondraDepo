import type { Metadata } from "next";
import { ogLocale } from "@/lib/locales";
import { notFound } from "next/navigation";
import EnPageView from "@/components/EnPageView";
import { PL_PAGES, getPlPage } from "@/content/pl";
import { localeAlternates } from "@/lib/i18n";

export const dynamicParams = false;

type Params = { slug?: string[] };

function pathFor(slug?: string[]): string {
  return slug && slug.length ? `/pl/${slug.join("/")}` : "/pl";
}

export function generateStaticParams(): Params[] {
  return PL_PAGES.map((p) => ({ slug: p.slug === "/pl" ? [] : p.slug.slice(4).split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const page = getPlPage(pathFor((await params).slug));
  if (!page) return {};
  const alternates = localeAlternates(page.slug);
  return {
    title: `${page.title} | LondraDepo`,
    description: page.description,
    alternates,
    openGraph: {
      title: page.title,
      description: page.description,
      url: alternates.canonical,
      siteName: "LondraDepo.com",
      ...ogLocale("pl"),
      type: page.article ? "article" : "website",
    },
  };
}

export default async function PolishPage({ params }: { params: Promise<Params> }) {
  const page = getPlPage(pathFor((await params).slug));
  if (!page) notFound();
  return <EnPageView page={page} />;
}
