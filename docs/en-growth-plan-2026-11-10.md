# LondraDepo English Site: Audit and Growth Implementation Plan

Date: 10.11.2026 · Scope: `/en/` (41 URLs live since 10.11.2026) + TR site
Status: **Plan only.** No new pages, URL changes or new operational claims have been published.

---

## 1. Summary of the audit

| Area | Finding | Impact |
|---|---|---|
| Current EN site | 40 pages under `/en/` + legacy `/uk-warehousing-fulfilment`. 1:1 hreflang with TR, separate sitemaps, `lang="en"`, indexable | Technical base is ready |
| Indexing | `/en/` pages went live today, so there is no ranking or traffic data yet | URL changes are still cheap now |
| English demand (GSC, last 3 months) | ~700 impressions for the "shopify fulfilment/fulfillment uk" cluster, position 59–85, 0 clicks. It lands on the TR page `/shopify-fulfillment` | Proven English demand. `/en/shopify-fulfilment-uk` should take it over |
| Keyword volumes | **Not verified.** Semrush has no API units left. The Ahrefs connector could not connect | Volumes must be verified before final keyword priorities |
| Lead capture (EN) | **No form on English pages.** WhatsApp and phone only. CTA links on EN pages are not tracked (only the sticky WhatsApp button is) | **Biggest conversion gap** |
| Lead capture (TR) | Formspree form (`QuoteForm`, ID `xoejvawy`). Sends `generate_lead` to GA4 with consent. No CRM, no source/UTM fields | Leads are not stored or attributed |
| Analytics | GA4 (`G-MTYWY5LWCW`) with Consent Mode v2. Events: `whatsapp_click`, `phone_call`, `generate_lead` | Base exists, needs service/country/language parameters |
| Distance claims | Site says "~1 hour to Felixstowe". Road estimate: ~54–64 miles, ~1h–1h15 by car, longer by HGV | Change to a verified figure before any Felixstowe page |
| Regulatory risk | The power-station case involves lithium batteries (dangerous goods). The food case implies food storage. The customs pages already say "coordination" | Needs your confirmation (Section 9) |
| Structured data | Organization/LocalBusiness, WebSite, Service, BreadcrumbList, Article and FAQPage in place | FAQ rich results are limited by Google to government and health sites. Keep the schema for AI readability, but do not expect rich results |
| `lastmod` | Omitted on purpose | Can be added for EN from content dates |

---

## 2. Proposed architecture vs. what exists

Decision: **keep the 40 live URLs flat** (`/en/pallet-storage`, not `/en/services/pallet-storage`). Folder depth brings no SEO gain, and churn now creates redirect debt. New page types get their own folder only where it helps navigation: `/en/industries/`, `/en/locations/`, `/en/resources/` (resources keep the existing `/en/blog/` URLs).

| Proposed in brief | Decision | Existing or new URL |
|---|---|---|
| `/en/` | Exists | `/en` |
| `/en/about-us/`, `/en/contact/` | Exists | same |
| `/en/request-a-quote/` | **New P1** | `/en/request-a-quote` |
| `/en/uk-warehousing/` | Exists | same |
| `/en/uk-fulfilment/` | Exists | same |
| `/en/uk-distribution/` | Exists | same |
| `/en/uk-import-logistics/` | **New P1** | `/en/uk-import-logistics` |
| `/en/uk-warehousing-prices/` | Exists, different slug | keep `/en/uk-warehousing-pricing` |
| services/pallet-storage | Exists | `/en/pallet-storage` |
| services/ambient-warehousing | **New P1, conditional** (food registration, Section 9) | becomes `/en/industries/food-and-fmcg` |
| services/bulk-storage | Merge | section of `/en/pallet-storage` |
| services/container-unloading | **New P1** (FCL/LCL receiving is verified) | `/en/container-unloading` |
| services/goods-receiving | Merge | section of container unloading |
| services/inventory-management | Merge | `/en/storage-services` (Mintsoft) |
| services/order-picking-and-packing | Exists | `/en/pick-and-pack` |
| services/repacking-and-relabeling | **New P2** (Cruyff evidence) | `/en/repacking-and-relabelling` (UK spelling) |
| services/cross-docking | **New P2** | `/en/cross-docking` (the blog guide supports it) |
| services/warehouse-handling | Exists | `/en/cargo-handling` |
| industries/food-and-beverage + fmcg | **Merge into 1** (avoid thin duplicates) | `/en/industries/food-and-fmcg` |
| industries/food-packaging | **New P1** (pizza box case) | `/en/industries/food-packaging` |
| industries/automotive-parts + industrial-components | **Merge into 1** (no industrial evidence) | `/en/industries/automotive-parts` |
| industries/ecommerce | Exists | `/en/ecommerce-fulfilment` (no new page) |
| industries/amazon-sellers | Exists | `/en/amazon-seller-warehousing-uk` |
| industries/textiles-and-apparel | **New P2** (Cruyff, seat covers) | `/en/industries/textiles-and-apparel` |
| industries/homeware-and-furniture | **New P3** (bulky goods: treadmill case) | `/en/industries/bulky-goods-and-homeware` |
| international/uk-market-entry | **New P1** (merges "distribution for international brands") | `/en/uk-market-entry` |
| international/turkish-exporters | **New P2**, gets a **real TR hreflang pair** (`/turk-sirketleri-icin-ingiltere-depo`) | `/en/uk-warehousing-for-turkish-exporters` |
| international/european-companies | **New P3** (Cruyff NL, post-Brexit imports) | `/en/uk-warehousing-for-eu-companies` |
| international/us-companies | **Defer** (no evidence or customers) | — |
| locations/essex, london | Exist | `/en/essex-warehouse`, `/en/london-warehousing` |
| locations/felixstowe, london-gateway, tilbury | **Merge into 1 port page, P2**, after distances are verified. Three thin pages would read as doorway pages | `/en/locations/port-to-warehouse-logistics` |
| resources/* | 7 exist under `/en/blog/` | Keep. New guides below |
| resources/uk-importing-guide | **New P1** (high GEO value) | `/en/blog/uk-importing-guide` |
| resources/importing-food-into-the-uk | **New P2, conditional** | `/en/blog/importing-food-into-the-uk` |
| resources/felixstowe-port-to-warehouse | **New P2** | `/en/blog/felixstowe-to-warehouse-logistics` |

Result: **13 new pages** instead of ~35 proposed. The rest are already covered or would be thin or duplicate.

---

## 3. Page scoring (100-point weighted)

Weights: Commercial intent 20 · SEO 15 · GEO 15 · Conversion 20 · Customer value 10 · Geography 10 · Feasibility 10.
Scores are **hypotheses** until keyword volumes are verified.

| Page | Intent | SEO | GEO | Conv. | Value | Geo | Feas. | **Total** | Priority |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| `/en/request-a-quote` (form) | 20 | 8 | 8 | 20 | 10 | 8 | 10 | **84** | P1 (prerequisite for everything) |
| `/en/uk-import-logistics` | 19 | 13 | 14 | 18 | 10 | 9 | 9 | **92** | P1 |
| `/en/container-unloading` | 19 | 13 | 12 | 18 | 9 | 10 | 10 | **91** | P1 |
| `/en/uk-market-entry` | 17 | 12 | 15 | 17 | 10 | 8 | 10 | **89** | P2 (P1 for content) |
| `/en/industries/food-and-fmcg` | 19 | 13 | 13 | 18 | 10 | 8 | 6* | **87** | P1 if verified |
| `/en/industries/food-packaging` | 18 | 12 | 12 | 18 | 9 | 8 | 10 | **87** | P1 |
| `/en/industries/automotive-parts` | 18 | 12 | 12 | 17 | 9 | 8 | 10 | **86** | P2 |
| `/en/blog/uk-importing-guide` | 12 | 14 | 15 | 12 | 9 | 8 | 10 | **80** | P2 |
| `/en/uk-warehousing-for-turkish-exporters` | 17 | 11 | 12 | 18 | 9 | 6 | 10 | **83** | P2 |
| `/en/locations/port-to-warehouse-logistics` | 16 | 12 | 13 | 15 | 8 | 10 | 7* | **81** | P2 |
| `/en/repacking-and-relabelling` | 16 | 11 | 11 | 16 | 8 | 7 | 10 | **79** | P3 |
| `/en/cross-docking` | 16 | 11 | 11 | 15 | 8 | 8 | 9 | **78** | P3 |
| `/en/industries/textiles-and-apparel` | 16 | 11 | 11 | 16 | 8 | 7 | 9 | **78** | P3 |
| `/en/blog/importing-food-into-the-uk` | 11 | 13 | 15 | 10 | 8 | 8 | 6* | **71** | P3 if verified |
| `/en/uk-warehousing-for-eu-companies` | 15 | 10 | 11 | 14 | 8 | 6 | 8 | **72** | P3 |
| `/en/industries/bulky-goods-and-homeware` | 14 | 10 | 10 | 14 | 7 | 7 | 8 | **70** | P3 |
| Customs warehouse / bonded | 14 | 9 | 9 | 12 | 8 | 7 | 0 | 59 | **Do not build** (no HMRC authorisation known) |
| Cold chain / frozen | 14 | 10 | 9 | 12 | 8 | 7 | 0 | 60 | **Do not build** (no infrastructure) |
| US companies page | 13 | 8 | 9 | 11 | 7 | 5 | 6 | 59 | Defer |

\* Feasibility depends on your answers in Section 9.

---

## 4. Keyword-to-page mapping (one owner per cluster)

| Cluster | Intent | Owner page | Supporting page |
|---|---|---|---|
| UK warehousing services, warehouse storage UK, 3PL warehouse UK, third party logistics UK | Commercial | `/en/uk-warehousing` | `/en/blog/uk-warehousing-guide` |
| UK pallet storage, bulk storage | Commercial | `/en/pallet-storage` | `/en/blog/uk-pallet-storage-costs` |
| UK warehouse prices / costs | Commercial + info | `/en/uk-warehousing-pricing` | `/en/blog/uk-warehousing-prices-2026` |
| warehousing for importers UK, UK import and distribution | Commercial | `/en/uk-import-logistics` | `/en/blog/uk-importing-guide` |
| container unloading UK, devanning Essex | Commercial | `/en/container-unloading` | port page |
| UK order fulfilment, international fulfilment UK | Commercial | `/en/uk-fulfilment` | `/en/blog/what-is-uk-fulfilment` |
| UK pick and pack | Commercial | `/en/pick-and-pack` | — |
| Shopify fulfilment UK | Commercial (**proven demand**) | `/en/shopify-fulfilment-uk` | — |
| Amazon FBA prep UK | Commercial | `/en/amazon-prep-uk` | `/en/blog/amazon-prep-uk-guide` |
| wholesale distribution UK | Commercial | `/en/uk-distribution` | food-packaging, automotive |
| food / FMCG warehouse UK | Commercial | `/en/industries/food-and-fmcg` | food import guide |
| packaging storage UK | Commercial | `/en/industries/food-packaging` | pizza box case |
| automotive parts warehousing UK | Commercial | `/en/industries/automotive-parts` | 2 automotive cases |
| UK warehouse for international businesses, UK market entry | Commercial + info | `/en/uk-market-entry` | `/en/uk-warehousing-benefits` |
| Essex warehouse / London warehouse | Local | `/en/essex-warehouse` / `/en/london-warehousing` | — |
| Felixstowe / Tilbury / London Gateway to warehouse | Local + info | port page | Felixstowe guide |

Cannibalisation to fix:
- `/en/uk-warehousing-benefits` and `/en/uk-market-entry` would overlap. **Decision:** benefits becomes a short "why" page linking to market entry. Market entry owns the cluster.
- `/en/ecommerce-fulfilment` vs `/en/uk-ecommerce-logistics`: sharpen the title focus (fulfilment service vs. full logistics journey).

---

## 5. Lead conversion architecture

### 5.1 `/en/request-a-quote` form (P1)

| Field | Required | Note |
|---|---|---|
| Full name | ✅ | |
| Business name | ✅ | |
| Business email | ✅ | Light validation that rejects obvious free-mail is optional, since it can reduce leads |
| Country | ✅ | Dropdown, UK first |
| Required service | ✅ | Storage · Container unloading · Fulfilment · Amazon prep · B2B distribution · Repacking · Other |
| Product category | ✅ | Food & FMCG · Packaging · Automotive · Textiles · Electronics · Homeware/bulky · Other |
| Estimated pallets / storage | ✅ | Ranges: 1–10 · 11–50 · 51–200 · 200+ · Not sure |
| Monthly orders | Conditional | Shown only for fulfilment or Amazon |
| Phone / WhatsApp, website, notes | Optional | |
| Hidden | auto | `page_path`, `page_lang`, `utm_source/medium/campaign/term`, `referrer`, `gclid` |
| Consent | ✅ | Checkbox + link to `/en/privacy-policy` |

After submission: on-page confirmation with no promised response time, Formspree email to the sales inbox, CRM record (Section 5.3), GA4 `generate_lead`.

### 5.2 CTA plan (contextual)

| Page type | Primary CTA → `/en/request-a-quote?service=…` | Secondary |
|---|---|---|
| Warehousing / pallet | Request a UK Warehousing Quote | WhatsApp |
| Import / container | Discuss Your Import Requirements | Call |
| Food & FMCG | Discuss Your Food Storage Requirements | WhatsApp |
| Automotive | Get a Parts Warehousing Proposal | WhatsApp |
| Ecommerce / Shopify / Amazon | Get Your UK Fulfilment Quote | WhatsApp |
| Market entry / Turkish exporters | Plan Your UK Market Entry | WhatsApp |
| Guides / case studies | Request a Quote (soft, end of article) | Related service page |

Placement: hero (above the fold), after the "how it works" section, end of page, and the sticky WhatsApp button (exists). The form is embedded on the 5 highest-intent pages.

### 5.3 CRM

The session has a **HubSpot** connector. Recommendation: Formspree → HubSpot integration, or direct HubSpot Forms. **Your decision:** do you use HubSpot (or another CRM) for sales?

### 5.4 GA4 event plan

| Event | Trigger | Parameters | Key event |
|---|---|---|---|
| `generate_lead` | Form success | `service`, `product_category`, `country`, `pallet_band`, `page_lang`, `page_path` | ✅ |
| `form_start` | First field focus | `page_path` | |
| `whatsapp_click` | Every WhatsApp link (**EN CTAs currently untracked**) | `source`, `page_lang` | ✅ |
| `phone_call` | Every `tel:` link | `source`, `page_lang` | ✅ |
| `cta_click` | Quote CTA clicks | `cta_id`, `position`, `page_path` | |
| `language_switch` | TR/EN switch | `from`, `to` | |

All events stay behind the existing consent check. Dashboard (GA4 Explorations or Looker Studio): leads by page, service, country and language, plus organic landing page conversion rate.

---

## 6. Geographic strategy (verified facts only)

| Fact | Status |
|---|---|
| Unit 19 Arterial Park, Arterial Road, Rayleigh SS6 7FY | ✅ Verified (Companies House, site) |
| London ~40 min via A127/M25 | Site claim, plausible (~32 miles to ExCeL ≈ 39 min) |
| Tilbury ~30 min | Site claim, **verify with a route planner** |
| London Gateway | Not on the site. Estimate ~20–30 min via A130/A13, **verify** |
| Felixstowe "~1 hour" | **Correct to ~1h–1h15 by car (54–64 miles)**. HGV time is longer. **Verify** |

Rule: one port page explains what happens between the port and our warehouse (haulage by your forwarder, unloading, booking-in, onward distribution). No page claims a port location.

---

## 7. Competitor opportunity matrix (first pass)

| Competitor (area) | Positioning | Gap for LondraDepo |
|---|---|---|
| Barrington Freight (Basildon) | Storage + WMS | No public pricing → our £3.50 + VAT transparency |
| Cargo Partner (Basildon) | Large forwarder warehouse | Enterprise focus → SME and small-volume importers |
| Evri fulfilment (Basildon) | High-volume ecommerce | Not for small B2B or importers |
| AMZ Prep (Southend) | FBA prep, **min. 300 orders/month** | No fixed minimum → low-volume sellers |
| Mercium (Witham) | Bonded warehouse | We must **not** compete on bonded claims |
| Felixstowe devanning (James Kemball, Brinor, C&S) | Port-side unloading | Combined unloading + storage + fulfilment + distribution in one place, closer to London |

UK market pricing reference: ~£3–£6.50 per pallet per week for storage, plus handling (third-party index). Our £3.50 sits at the low-to-mid end and is a citable fact for GEO.

**Not yet done:** rankings and backlink comparison (needs Semrush units or Ahrefs).

---

## 8. Technical SEO acceptance checklist

| Check | Status |
|---|---|
| Reciprocal hreflang, self canonical, `lang`, 200, indexable | ✅ automated (`npm run seo:verify`) |
| XML valid, sitemap index in robots.txt | ✅ |
| No internal links to non-canonical URLs | ✅ (except the legacy page, resolved by R1) |
| `lastmod` from real content dates (EN) | ⬜ P2 |
| R1 `/uk-warehousing-fulfilment` → `/en` (301) | ⬜ awaiting approval |
| R2 `/shopify-fulfillment` → `/shopify-ingiltere-depo` (301) | ⬜ awaiting approval |
| Sitemap index submitted in GSC | ⬜ your action |
| Google Business Profile matches address and phone | ⬜ verify |
| Structured data validated (Rich Results Test) for new templates | ⬜ per release |
| Every new page: unique title, meta, one H1, FAQ visible = schema | ✅ enforced by template and script |

---

## 9. What we need from you before publishing claims

| # | Question | Blocks |
|---|---|---|
| 1 | Warehouse size (sq ft), pallet capacity, racking type, number of loading doors and forklifts | Container unloading, warehousing pages |
| 2 | Is the site registered as a **food business** with Rochford District Council? Ambient only? Any temperature or humidity monitoring, HACCP, BRCGS? | Food & FMCG page, food import guide |
| 3 | Who lodges customs declarations, and under what partner model? (name optional) | Import logistics page wording |
| 4 | Do you store or handle **lithium batteries / dangerous goods**? (power-station case) | That case study and electronics page |
| 5 | Goods-in-custody insurance: yes or no, and the cover level | Trust section |
| 6 | Verified drive times to Felixstowe, Tilbury and London Gateway (or approval to use route-planner figures) | Port page |
| 7 | Permission to name clients (Cruyff is already named) and any written testimonials | Trust and proof sections |
| 8 | CRM in use (HubSpot?) and the sales inbox for EN leads | Form go-live |
| 9 | Any committed response time? (default: none promised) | Form confirmation text |

---

## 10. 90-day roadmap

| Weeks | Work | Output |
|---|---|---|
| 1–2 | Answers to Section 9 · R1/R2 · GSC sitemap submit · tracking on EN CTAs · `/en/request-a-quote` + form + CRM · contextual CTAs on 40 pages · `lastmod` | Measurable lead flow on EN |
| 3–6 | P1 pages: import logistics, container unloading, food packaging, food & FMCG (if verified), market entry · benefits page refocus | 5 new commercial pages |
| 7–10 | P2: automotive, Turkish exporters (with TR hreflang pair), port page, UK importing guide, Felixstowe guide · refresh case studies with photos and verified numbers | 5 pages + stronger proof |
| 11–13 | Measure leads by page, service and country · CRO (form length, CTA copy) · consistent directory listings (BIFA, Companies House, LinkedIn, GBP) · keyword verification once tooling is available · decide on P3 pages | Data-driven next quarter plan |

KPIs (from week 2): qualified organic leads, organic lead conversion rate, quote requests per service, leads by country and industry, lead → customer rate.
