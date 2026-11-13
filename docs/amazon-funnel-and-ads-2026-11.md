# Amazon lead funnel (GA4) and Google Ads copy — November 2026

## 1. What the site now sends to GA4
Every event the site sends now carries `page_group`. This covers:
- `cta_click`, including "Book a 15-minute call", sent as `cta_id = book_call`;
- `whatsapp_click`;
- `phone_call`;
- `form_start`;
- `generate_lead`.

The value of `page_group` is the topic of the page the visitor was on:

| page_group | Pages (path contains) |
|---|---|
| amazon | amazon, fba, private-label |
| shopify | shopify |
| import | import, ithalat, gumruk, customs, konteyner, container, incoterms, antrepo, bonded, cbm, liman, port, felixstowe, tilbury |
| fulfilment | fulfil, e-ticaret, ecommerce, pick, siparis |
| storage | depo, warehous, storage, pallet, palet |
| other | everything else |

On `/en/request-a-quote`, the group comes from the `?from=` page. This means a lead started on an Amazon page counts as `amazon` even though the form is submitted on the quote page.

## 2. One-time setup in GA4 (owner, about 5 minutes)
1. **Register the dimension.** Go to GA4, then **Admin**, **Custom definitions**, **Create custom dimension**.
   - Name: `Page group`.
   - Scope: Event.
   - Event parameter: `page_group`.
2. **Build the funnel.** Go to **Explore** and create a **Funnel exploration**.
   - Steps: `page_view` (page path contains `amazon`), then `cta_click` or `form_start`, then `generate_lead`.
   - Breakdown: `Page group`.
3. **Mark the key event.** Make sure `generate_lead` is marked as a **Key event** (Admin, Events).

Data appears only for visitors who accept analytics cookies, and only from the day the dimension is registered.

## 3. Google Ads copy (Amazon prep, UK)
These claims are already verified on the site:
- Essex warehouse, about 16 miles from Amazon LCY2 Tilbury;
- no fixed minimum, start with one pallet;
- storage from £3.50 + VAT per pallet per week;
- customs clearance through Arca Trade Group;
- English and Turkish spoken.

Do **not** claim partner or SPN status, or unit prices, until they are confirmed.

### Headlines (max 30 characters)
| # | Headline | Chars |
|---|---|---|
| 1 | Amazon FBA Prep in Essex | 24 |
| 2 | 16 Miles from Amazon LCY2 | 25 |
| 3 | No Fixed Minimum Volume | 23 |
| 4 | Start With One Pallet | 21 |
| 5 | Storage £3.50/Pallet/Week | 25 |
| 6 | FNSKU Labelling & Packing | 25 |
| 7 | Container Unloading Essex | 25 |
| 8 | UK Customs Clearance Too | 24 |
| 9 | Book a 15-Minute Call | 21 |
| 10 | English & Turkish Spoken | 24 |

### Descriptions (max 90 characters)
| # | Description |
|---|---|
| 1 | FNSKU labelling, packing and pallet or parcel delivery to Amazon UK from Rayleigh, Essex. |
| 2 | Keep stock with us from £3.50 + VAT per pallet a week and send batches as Amazon sells. |
| 3 | Containers from London Gateway, Tilbury or Felixstowe unloaded, counted and prepped. |
| 4 | No fixed minimum: start with a trial pallet. Customs clearance via Arca Trade Group. |

### Landing pages
| Ad group | Landing page |
|---|---|
| Amazon FBA prep UK | /en/amazon-prep-uk |
| Amazon FBM warehouse | /en/amazon-seller-warehousing-uk |
| Amazon fulfilment centre delivery | /en/amazon-uk-fulfilment-centres |
| TR: Amazon İngiltere depo | /amazon-ingiltere-depo |

### Negative keywords to start with
jobs, careers, salary, "warehouse jobs", "amazon warehouse job", "how to apply", "near me jobs", "self storage".

The job-related negatives are there because the search results page showed "Is Amazon warehouse a good job in the UK?" and "How much does Amazon warehouse pay per hour?" as related questions.
