# CTA and Lead Magnet Scoring (internal)

Date: 10.11.2026 · Scope: TR site (45 pages) + EN site (`/en/`, 45 pages)
Scores are expert assessments based on the code and the live site, not measured conversion data. Re-score after 4 weeks of form and GSC data.

---

## 1. CTA inventory

| Site | CTA types | Tracked in GA4 | Quote form |
|---|---|---|---|
| EN | Contextual quote button (hero, mid-page, end), header "Get a Quote", WhatsApp, phone, sticky WhatsApp | ✅ all (`cta_click`, `whatsapp_click`, `phone_call`, `form_start`, `generate_lead`) | Inline on 5 pages + `/en/request-a-quote` |
| TR | Generic "WhatsApp'tan Teklif Al" (2–6 per page), phone on 16 pages | ⚠️ Hero and sticky button only | Home page only (`#teklif`) |

---

## 2. CTA scoring (100 points)

Weights: Intent match 25 · Clarity and specificity 15 · Visibility and placement 15 · Low friction 15 · Trackability 15 · Lead qualification 15

| CTA | Site | Intent | Clarity | Visibility | Friction | Tracking | Qualification | **Total** |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| Inline quote form (5 high-intent pages) | EN | 24 | 13 | 14 | 10 | 15 | 15 | **91** |
| Contextual quote button → `/en/request-a-quote` | EN | 22 | 14 | 13 | 11 | 15 | 15 | **90** |
| Header "Get a Quote" | EN | 18 | 12 | 15 | 11 | 15 | 15 | **86** |
| WhatsApp buttons | EN | 18 | 10 | 13 | 15 | 13 | 5 | **74** |
| Home quote form (`#teklif`) | TR | 20 | 11 | 10 | 8 | 12 | 12 | **73** |
| Sticky WhatsApp | EN/TR | 15 | 8 | 15 | 15 | 13 | 4 | **70** |
| Phone link | EN | 15 | 9 | 10 | 13 | 13 | 4 | **64** |
| Generic "WhatsApp'tan Teklif Al" | TR | 18 | 9 | 13 | 15 | 4 | 5 | **64** |
| Phone link | TR | 14 | 8 | 10 | 13 | 4 | 3 | **52** |

### Key findings

1. **The TR site carries the existing traffic but has the weakest CTAs (52–73).** Most TR clicks are not measured, and only the home page has a form.
2. **WhatsApp gives low lead quality.** There is no service, volume or source data, and attribution depends on the consent banner.
3. **The TR form requires a phone number and has no source fields.** It captures no `page_path`, `utm_*` or `from`, so TR leads cannot be attributed to a page.
4. **The EN set-up is the model to copy:** contextual label, inline form on high-intent pages, every click tracked.

---

## 3. Lead magnet scoring (100 points)

There is currently **no lead magnet** on either site; every conversion is a direct quote request.

Weights: Buyer-intent fit 25 · Perceived value 20 · Ease of production 15 · Can be built from verified facts 15 · Lead qualification power 15 · SEO/AEO synergy 10

| Lead magnet | Intent | Value | Ease | Verified | Qualification | SEO/AEO | **Total** | Priority |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| **UK storage cost calculator** (pallets × weeks, optional handling and fulfilment estimate) | 24 | 18 | 9 | 13 | 15 | 8 | **87** | P1 |
| **Free 15-minute UK market-entry call** (booking link) | 23 | 16 | 13 | 15 | 14 | 5 | **86** | P1 |
| **UK import checklist** (EORI, commodity code, documents, VAT; EN + TR) | 21 | 15 | 14 | 15 | 9 | 9 | **83** | P1 |
| Port-to-warehouse planner (container arrival checklist) | 19 | 13 | 13 | 14 | 10 | 8 | **77** | P2 |
| Amazon FBA prep checklist | 17 | 13 | 14 | 13 | 8 | 8 | **73** | P3 |
| UK labelling guide for food exporters | 18 | 15 | 9 | 8 | 10 | 7 | **67** | Defer (needs regulatory review) |
| Case study pack (PDF) | 15 | 11 | 14 | 15 | 7 | 4 | **66** | Defer |
| Newsletter | 8 | 6 | 12 | 15 | 4 | 5 | **50** | Do not build |

### Notes

- **Cost calculator:**
  - Only storage (£3.50 + VAT per pallet per week) can be calculated exactly. Handling and fulfilment must be shown as "quoted", or the owner must supply indicative rates.
  - Capture the email before showing a detailed breakdown, not before the basic storage figure.
- **Market-entry call:** A Calendly connector is available in this workspace, so a booking link can be added quickly once the owner chooses the event type.
- **Import checklist:** Built from facts already published on `/en/blog/uk-importing-guide`. Gate the PDF version behind email; keep the HTML open for SEO and AEO.

---

## 4. Recommended next actions

| # | Action | Expected impact | Effort |
|---|---|---|---|
| 1 | TR site: copy the EN CTA system (tracked links, contextual labels, inline form on top 5 TR pages, source fields in the TR form, phone optional) | High: TR has the current traffic | Medium |
| 2 | Build the UK storage cost calculator (EN + TR) | High | Medium |
| 3 | Add a "Book a 15-minute call" secondary CTA (Calendly) | Medium–high | Low |
| 4 | Gated import checklist PDF (EN + TR) | Medium | Low |
| 5 | Re-score with real data after 4 weeks (form `from`, `form`, GA4 key events) | Validation | Low |
