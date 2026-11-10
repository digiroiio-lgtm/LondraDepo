# Visual asset register

Last updated: 10 November 2026. Every visual on the site should be listed here with its source and licence status.

## Original assets (created for LondraDepo, no third-party rights)

| Asset | File | Used on | Purpose | Alt / accessibility |
|---|---|---|---|---|
| Line-icon set (28 icons) | `src/components/visual/Icon.tsx` | Cards, facts boxes, process flows, checklists (EN + TR templates) | Signal the topic of a card or step | Decorative (`aria-hidden`); the heading carries the meaning |
| Hero illustrations (10 themes: warehouse, container, ecommerce, amazon, route, customs, tool, guide, case, industry) | `src/components/visual/HeroArt.tsx` | EN service, article and case-study heroes (desktop); TR data-page heroes; TR blog article banners | Show the page topic at a glance | Decorative (`aria-hidden`); H1 and lead say the same in text |
| Route map (EN + TR) | `src/components/visual/RouteMap.tsx` | `/en`, `/en/essex-warehouse`, `/en/london-warehousing`, `/en/locations/port-to-warehouse-logistics`, `/en/london-gateway-tilbury-warehousing`, `/en/felixstowe-port-warehousing`, `/ingiltere-depo`, `/londra-depo`, `/essex-depo`, `/london-gateway-tilbury-depo`, `/felixstowe-liman-depo`, `/limandan-depoya-lojistik` | Explain road distances from the warehouse to London and the three ports | Informative: `role="img"` with `<title>`/`<desc>`; the same distances are always present as HTML text or tables |
| Process flow | `src/components/visual/ProcessFlow.tsx` | Every `steps` section (EN + TR templates) | Show order of operations | Ordered list in HTML; icons decorative |
| Checklist PDFs | `public/downloads/*.pdf` (built by `scripts/build-checklists.mjs`) | Gated lead magnets | Printable checklists | Text-based PDF |

Licence: original work for LondraDepo / Arca Trade Group. No attribution required.

## Photography already on the site (licence to be confirmed by the owner)

These photos were on the site before this work. No new pages were given these photos during the visual optimisation, because their licence is not recorded.

| File | Shows | Used on | Licence status |
|---|---|---|---|
| `arterial-park-arterial-road-rayleigh_2ncioutdoor.jpeg` | Building exterior (developer signage visible) | TR/EN galleries, `/ingiltere-depo` | ⚠️ Unverified: looks like Arterial Park marketing imagery; confirm permission from the landlord or developer |
| `arterial-park-arterial-road-rayleigh_depoici.jpeg` | Empty warehouse interior | Galleries, `/ingiltere-depo` | ⚠️ Unverified (as above) |
| `arterial-park-arterial-road-rayleigh_distankosecekimi.jpeg` | Building exterior, wide | Galleries | ⚠️ Unverified (as above) |
| `arterial-park-arterial-road-rayleigh_kusbakisi.jpeg` | Aerial view of the estate | Galleries, `/ingiltere-depo` | ⚠️ Unverified (as above) |
| `arterial-park-arterial-road-rayleigh_officespace.jpeg`, `_officespace2.jpeg` | Office interior | Galleries | ⚠️ Unverified (as above) |
| `londradepo.jpeg` | Racked warehouse with forklift | TR home hero, `/en` hero | ⚠️ Unverified: may be stock photography; confirm the source and licence or replace with an own photo |

**Recommended owner action:**
1. Confirm in writing that LondraDepo may use the Arterial Park images, and that `londradepo.jpeg` is licensed.
2. Better: take real photos of the racked LondraDepo unit (goods-in, racking, pick and pack, dispatch) and add them here.

## External stock

None added. Stock libraries could not be reached or checked from the build environment, so no external image was used.
