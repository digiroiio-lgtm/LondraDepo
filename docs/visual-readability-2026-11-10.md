# Visual–text balance and readability: before and after (10 November 2026)

Scope: all 116 canonical URLs in `sitemap-tr.xml` and `sitemap-en.xml`. "Before" is the previous commit built separately; "after" is this change. Both were measured with the same scripts on a local production build.

## Summary

| Measure | Before | After |
|---|---:|---:|
| Pages with no image or SVG visual | 81 / 116 | 5 / 116 (legal pages, quote form, calculator) |
| Visual elements across the site (img + svg) | 151 | 1,505 |
| Pages with a paragraph over 70 words | 10 | 2 |
| Longest paragraph (words) | 135 | 79 |
| Words of HTML text (content kept) | 70,821 | 71,434 |
| Automated WCAG 2 A/AA violations, all 116 pages (axe-core 4.10) | not run site-wide; 276 on a 12-page sample | **0** |
| Horizontal overflow at 390px and 768px | 0 | 0 |
| `seo:verify` failures (canonical, hreflang, lang, FAQ text, links, orphans, `lastmod`) | 0 | 0 |
| `seo:meta` structural issues (duplicate titles and descriptions, H1 count, img alt, JSON-LD parse) | 0 | 0 |

Text was not removed to reduce density. The extra words are figure captions, map labels and inline-form trust points.

## Internal Visual Readability Score (100 points)

This is an internal assessment, not a third-party tool score.

| Criterion | Weight | Before | After | Why |
|---|---:|---:|---:|---|
| Visual-to-text balance | 20 | 8 | 18 | 81 pages had no visual. Now every templated page has a hero illustration (desktop), icon cards and process flows, and location pages have a route map. The 5 pages without SVG are the 3 legal pages, the quote form and the interactive calculator, where extra visuals would not help. |
| Typography and readability | 20 | 13 | 18 | Body text 17px with 2rem line height and a ~70-character measure (`max-w-3xl`). Paragraphs over 70 words are split at a sentence boundary with the wording unchanged. TR article body enlarged. |
| Visual hierarchy and structure | 15 | 11 | 14 | Numbered process flows (a timeline on mobile), icon-led cards, zebra tables, "at a glance" boxes with icons, and "which page fits you" navigation. |
| Brand consistency and visual quality | 15 | 9 | 14 | One original SVG icon system in brand colours across EN and TR. All 160+ emoji icons on hand-built TR pages and components are replaced (data kept, rendered as SVG). One point is held back until the existing photos' licence is confirmed. |
| Scannability and comprehension | 10 | 6 | 9 | Steps, distances, checklists and comparisons are now visual and still readable as HTML. |
| Mobile readability and responsiveness | 10 | 8 | 10 | 0 overflow at 390px and 768px. Vertical timeline for steps. Hero art hidden below 1024px so the first screen stays copy and CTA. |
| Accessibility and contrast | 10 | 4 | 10 | 0 automated WCAG A/AA issues across 116 pages (manual testing still recommended). |
| **Total** | **100** | **59** | **93** | |

## What changed

### Templates (about 65 pages at once)

**EN `EnPageView` (all `/en` content pages):**
- hero illustration matched to the page theme (`HeroArt`, desktop);
- icons on cards and facts;
- `ProcessFlow` for steps;
- readable paragraph splitting and measure;
- zebra tables;
- new `routemap` section type.

**TR `TrDataPage` (the 16 data-driven TR pages):**
- the same treatment;
- a route map on the three TR port pages.

**TR blog `ArticleHero` (11 articles):**
- the emoji banner is replaced with a topic illustration;
- the `.article-body` measure and size are improved.

### Emoji to SVG

- `src/components/visual/Emoji.tsx` maps the emoji used in page data and JSX (69 distinct) to the brand icon set, which now has 48 icons.
- 46 data-driven render sites and 116 inline uses were converted. The data is unchanged.
- The WhatsApp message template keeps its emoji on purpose.
- `/palet-depolama` gains icon cards and a process flow, using facts already on the EN pallet page.

### Route map added

It appears on 12 location and port pages: 6 EN plus 6 TR, including the hand-built `/ingiltere-depo`, `/londra-depo` and `/essex-depo`.

### Accessibility

- **Brand red text and red buttons:** #e63946 → #d62839, which is 4.97:1 against white. It looks almost the same.
- **WhatsApp buttons:** green-500 → green-700. White text was 2.3:1 and is now about 5:1.
- **Light grey text on light panels:** darkened. Tailwind `slate-500` → #5b6b80, which is 5.1:1 on #f6f8fb.
- **Inline links:** made distinguishable by more than colour.

## Licensing

- **New visuals:** every one is an original SVG drawn for the site. See `docs/asset-register.md`.
- **External stock:** none used. Stock libraries could not be reached from the build environment to check licences.
- **Existing photos:** their licence is not recorded. They are flagged in the asset register for the owner to confirm, and were not added to new pages.

## Core Web Vitals impact

Measured locally on a production build: mobile viewport 390px, 4× CPU throttle, 150ms latency, 8 key pages.

| | LCP range | CLS |
|---|---|---|
| Before | 424–548 ms | 0 |
| After | 440–564 ms | 0 |

- **LCP:** the change is within measurement noise of about ±50 ms.
- **SVG and layout:** the illustrations are inline SVG, so there are no extra requests, and their aspect ratios are fixed, so they cause no layout shift.
- **HTML size:** up 0–5 KB per page.
- **Total transfer:** up about 50 KB on EN pages. The cause is Next.js prefetching linked pages after load (more internal links); it does not affect LCP.

## Remaining issues

1. Confirm the licence of the 7 existing photos, or replace them with own photos (`docs/asset-register.md`).
2. ~~Emoji icons on hand-built TR pages~~: done. Emoji remain only in the WhatsApp message template (they appear in the WhatsApp message, not on the site) and the printable ☐ boxes in the container planner.
3. Two paragraphs are still 77–79 words long: `/en` and `/hakkimizda`.
4. Hero illustrations are desktop only, by design. Mobile relies on in-content visuals.
5. Automated accessibility testing does not replace a manual screen-reader and keyboard check.
