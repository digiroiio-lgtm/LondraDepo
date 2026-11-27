/**
 * Site languages. Adding a language starts here: add an entry, then a UI dictionary in src/i18n/ui/
 * (TypeScript fails until it exists), page paths in src/lib/i18n-pairs.ts, a route group with its layout,
 * and a child sitemap. See docs/new-language.md.
 */
export type LocaleInfo = {
  /** <html lang> and GA page_lang. */
  htmlLang: string;
  /** hreflang value in <link rel="alternate"> and the sitemap. */
  hreflang: string;
  /** Open Graph locale (language_TERRITORY). */
  og: string;
  /** URL prefix; "" for the root language. */
  prefix: string;
  /** Home page of the language. */
  home: string;
  /** Name of the language in that language, for the language menu. */
  label: string;
  /** Short code shown on the menu button. */
  short: string;
};

export const LOCALES = {
  tr: { htmlLang: "tr", hreflang: "tr-TR", og: "tr_TR", prefix: "", home: "/", label: "Türkçe", short: "TR" },
  en: { htmlLang: "en", hreflang: "en", og: "en_GB", prefix: "/en", home: "/en", label: "English", short: "EN" },
} as const satisfies Record<string, LocaleInfo>;

export type Locale = keyof typeof LOCALES;

/** Order used in hreflang lists, the sitemap and the language menu. */
export const LOCALE_ORDER = Object.keys(LOCALES) as Locale[];

/** Language for visitors whose language has no version (hreflang x-default). */
export const X_DEFAULT: Locale = "en";

/** The language a path belongs to: the longest matching non-empty prefix, otherwise the root language. */
export function localeOf(path: string): Locale {
  let best: Locale | undefined;
  for (const l of LOCALE_ORDER) {
    const p: string = LOCALES[l].prefix;
    if (p && (path === p || path.startsWith(`${p}/`)) && (!best || p.length > LOCALES[best].prefix.length)) best = l;
  }
  return best ?? (LOCALE_ORDER.find((l) => LOCALES[l].prefix === "") as Locale);
}

/** Open Graph locale plus every other language as og:locale:alternate. */
export function ogLocale(l: Locale): { locale: string; alternateLocale: string[] } {
  return { locale: LOCALES[l].og, alternateLocale: LOCALE_ORDER.filter((x) => x !== l).map((x) => LOCALES[x].og) };
}
