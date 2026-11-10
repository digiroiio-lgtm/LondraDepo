# Lead Measurement: Baseline and Setup (Weeks 11–13)

Date: 10.11.2026 · GA4 property `538800744` · GSC `sc-domain:londradepo.com`

## 1. Baseline (last 90 days, before the English site)

| Source | Figure | Note |
|---|---|---|
| GA4 sessions | 14 (7 users) | GA4 loads **only after cookie consent**, so most visits are not recorded |
| GA4 countries | Türkiye 10 · UK 3 · Hungary 1 | |
| GA4 "key events" | 55 | Inflated: `page_view`/`scroll`-type events are marked as key events |
| GSC clicks (6 months) | 14 · 1,100+ impressions | 719 impressions for the "shopify fulfilment uk" cluster on a TR URL |
| English pages | 0 sessions | Went live on 10.11.2026 |

## 2. Source of truth for leads

Because analytics is consent-gated, **form submissions (Formspree e-mails) are the reliable lead count**. Every English submission carries:
`form` (`en_request_a_quote` / `en_inline_quote`), `page_path`, `from` (the page with the CTA), `service`, `product_category`, `country`, `pallets`, `monthly_orders`, `utm_*`, `gclid` and `referrer`.

Recommended weekly log (spreadsheet or CRM): date · company · country · service · category · pallets · `from` page · `utm_source` · qualified (Y/N) · quote sent · won.

## 3. GA4 admin fixes (owner action)

| # | Action | Where |
|---|---|---|
| 1 | Un-mark `page_view`, `scroll`, `user_engagement`, `session_start`, `first_visit` as key events | Admin → Events / Key events |
| 2 | Mark `generate_lead`, `whatsapp_click`, `phone_call` as key events | Admin → Key events |
| 3 | Register custom dimensions: `service`, `product_category`, `country`, `pallet_band`, `page_lang`, `cta_id`, `source` | Admin → Custom definitions |
| 4 | Link GA4 to Search Console | Admin → Product links |

## 4. CRO change shipped in this phase

The quote form is embedded on the 5 highest-intent pages: `/en/uk-import-logistics`, `/en/container-unloading`, `/en/uk-warehousing-pricing`, `/en/pallet-storage` and `/en/uk-warehousing`. Hero and end CTAs on those pages scroll to the form (`#quote`). Other pages keep the CTA to `/en/request-a-quote`.

## 5. Review after 4 weeks of data

| Question | Data |
|---|---|
| Which pages produce qualified leads? | Form `from` / `page_path` |
| Inline form vs quote page | `form` field (`en_inline_quote` vs `en_request_a_quote`) |
| Countries and services in demand | `country`, `service` |
| Which English pages get impressions and clicks? | GSC page report, `/en/` filter |
| P3 pages (repacking, cross-docking, textiles, EU companies, bulky goods) | Build only where GSC shows impressions or leads ask for them |
