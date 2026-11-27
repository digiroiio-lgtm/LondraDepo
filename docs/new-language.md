# Adding a new language

The site is built so that a third (or fourth) language is added by data, not by rewriting components.
TR and EN already use this setup. Work through the steps in order; the build fails until steps 1–2 are done.

## 1. Register the language — `src/lib/locales.ts`
Add one entry to `LOCALES`, for example German:

```ts
de: { htmlLang: "de", hreflang: "de", og: "de_DE", prefix: "/de", home: "/de", label: "Deutsch", short: "DE" },
```

This alone switches on, everywhere:
- hreflang alternates and x-default (`src/lib/i18n.ts` → `localeAlternates`), on pages and in the sitemaps;
- `og:locale:alternate` on every page (`ogLocale`);
- the language menu (`src/components/LangSwitch.tsx` becomes a dropdown once there are 3+ languages).

`X_DEFAULT` stays `en` unless the business decides otherwise.

## 2. Interface texts — `src/i18n/ui/<code>.ts`
Copy `en.ts`, translate every string, and add it to `UI` in `src/i18n/ui/index.ts`.
TypeScript fails (`Property 'de' is missing…`) until this exists. It covers:
- the language menu;
- the header quote / call labels;
- the sticky WhatsApp button (including the prefilled WhatsApp text);
- the footer legal row (company line, registered office, legal page links, cookie settings);
- the cookie banner and the preferences window;
- the common form messages (submit, sending, success, errors, consent).

## 3. Page equivalents — `src/lib/i18n-pairs.ts`
Add the new path to each set it translates, e.g. `{ tr: "/palet-depolama", en: "/en/pallet-storage", de: "/de/palettenlager" }`.
Only pair pages that answer the same question. Pages without a translation simply have no entry for the language;
the menu then links to that language's home page.

## 4. Routes, layout and content
- Route group `src/app/(de)/de/...` with its own `layout.tsx`:
  - `<html lang>` from `LOCALES.de.htmlLang`;
  - `GA_CONSENT_SCRIPT`;
  - `CookieConsent lang="de"`, `SiteTracker`, `WebVitals`, `ConditionalAnalytics`, `GaConsentListener`.
- Header and footer:
  - start from `HeaderEn` / `FooterEn` and point the links at the new paths;
  - use `FooterLegal lang="de"` and `StickyWhatsappCta lang="de"`.
- Content data, like `src/content/en/*` (rendered by a page view such as `EnPageView`):
  - every page needs a title ≤ 52 characters before the suffix, a description of 120–158 characters, a lead and at least 5 FAQs.
- Legal pages (privacy, cookies, terms): translate them, and keep the controller, processors and cookie table identical in substance.
- Quote form: copy `QuoteFormEn`, translate its labels using `UI.de.form` for the shared messages, and give it its own `form_id` (e.g. `de_quote`) so GA4 separates it.

## 5. Sitemap, llms and tracking
- `src/lib/sitemaps.ts`: add a `deEntries()` and a `src/app/sitemap-de.xml/route.ts`, then add `/sitemap-de.xml` to `CHILD_SITEMAPS`.
- `scripts/gen-llms.py`: add the language's pages.
- GA4 needs no change: `page_lang` is read from `<html lang>`.

## 6. Check before publishing
Run against `npx next start -p 3100`:

```bash
npm run seo:hreflang   # lang, canonical, self/reciprocal hreflang, x-default, sitemap = page, og:locale, internal links
npm run seo:meta       # title/description lengths
npm run seo:faq        # FAQ counts, duplicates
npm run seo:sitemap    # TR route list (extend for new locales)
npm run seo:llms
```

All must pass. Pages that exist in one language only are listed by `seo:hreflang` as information. Keep that list short and intentional.
