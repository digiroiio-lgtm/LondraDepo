import type { Faq } from "@/components/FaqJsonLd";

export type Card = { title: string; text: string };
export type LinkCard = { href: string; title: string; text: string; tag?: string };

export type Section =
  | { type: "text"; h2: string; paras: string[] }
  | { type: "cards"; h2: string; intro?: string; items: Card[] }
  | { type: "steps"; h2: string; intro?: string; items: Card[] }
  | { type: "list"; h2: string; intro?: string; items: string[]; outro?: string }
  | { type: "table"; h2: string; intro?: string; head: string[]; rows: string[][]; note?: string }
  | { type: "stats"; h2?: string; items: { value: string; label: string }[] }
  | { type: "links"; h2: string; intro?: string; items: LinkCard[] }
  /** Attributed quotation; only verbatim, published statements. */
  | { type: "quote"; text: string; cite: string; sourceLabel?: string; sourceHref?: string }
  /** External references backing figures on the page. */
  | { type: "sources"; h2: string; items: { label: string; href: string }[] }
  /** Interactive storage cost calculator. */
  | { type: "calculator"; h2: string; intro?: string }
  /** Email-gated PDF checklist download. */
  | { type: "checklist" };

export type PageKind = "home" | "service" | "article" | "case" | "hub" | "contact" | "legal";

export type EnPage = {
  /** Public path, e.g. "/en/uk-warehousing". */
  slug: string;
  /** Turkish counterpart path for reciprocal hreflang. Omit for English-only pages (self en alternate only). */
  tr?: string;
  kind: PageKind;
  /** <title>; the brand suffix is appended automatically. */
  title: string;
  description: string;
  /** Short label used in breadcrumbs and related-link cards. */
  label: string;
  eyebrow?: string;
  h1: string;
  /** Answer-first opening paragraph (GEO: quotable summary). */
  lead: string;
  /** "At a glance" facts box. */
  facts?: string[];
  note?: string;
  sections: Section[];
  faqs?: Faq[];
  related?: string[];
  cta?: { h2: string; text: string };
  serviceType?: string;
  /** Articles and case studies. */
  article?: { published: string; modified: string; readMins: number; section: string };
  /** Legal pages. */
  updated?: string;
  /** ISO date of the last content review; shown as "Last updated" and used as dateModified. */
  modified?: string;
  /** Hub breadcrumb parent (blog or case studies). */
  parent?: string;
};
