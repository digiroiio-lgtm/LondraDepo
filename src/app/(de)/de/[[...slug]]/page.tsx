import type { Metadata } from "next";
import { ogLocale } from "@/lib/locales";
import { notFound } from "next/navigation";
import EnPageView from "@/components/EnPageView";
import { DE_PAGES, getDePage } from "@/content/de";
import { localeAlternates } from "@/lib/i18n";

export const dynamicParams = false;

type Params = { slug?: string[] };

function pathFor(slug?: string[]): string {
  return slug && slug.length ? `/de/${slug.join("/")}` : "/de";
}

export function generateStaticParams(): Params[] {
  return DE_PAGES.map((p) => ({ slug: p.slug === "/de" ? [] : p.slug.slice(4).split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const page = getDePage(pathFor((await params).slug));
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
      ...ogLocale("de"),
      type: page.article ? "article" : "website",
    },
  };
}

export default async function GermanPage({ params }: { params: Promise<Params> }) {
  const page = getDePage(pathFor((await params).slug));
  if (!page) notFound();
  return <EnPageView page={page} />;
}
