import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EnPageView from "@/components/EnPageView";
import { EN_PAGES, getEnPage } from "@/content/en";
import { enAlternates } from "@/lib/i18n";

export const dynamicParams = false;

type Params = { slug?: string[] };

function pathFor(slug?: string[]): string {
  return slug && slug.length ? `/en/${slug.join("/")}` : "/en";
}

export function generateStaticParams(): Params[] {
  return EN_PAGES.map((p) => ({ slug: p.slug === "/en" ? [] : p.slug.slice(4).split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const page = getEnPage(pathFor((await params).slug));
  if (!page) return {};
  const alternates = enAlternates(page.slug);
  return {
    title: `${page.title} | LondraDepo`,
    description: page.description,
    alternates,
    openGraph: {
      title: page.title,
      description: page.description,
      url: alternates.canonical,
      siteName: "LondraDepo.com",
      locale: "en_GB",
      type: page.article ? "article" : "website",
    },
  };
}

export default async function EnglishPage({ params }: { params: Promise<Params> }) {
  const page = getEnPage(pathFor((await params).slug));
  if (!page) notFound();
  return <EnPageView page={page} />;
}
