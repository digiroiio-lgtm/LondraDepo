# Generates public/llms.txt and public/llms-full.txt from the prerendered site in .next/ (run after `npm run build`).
# Every URL in the sitemaps is included, with its title, description, language pair and (in llms-full) its FAQs,
# so the AI-facing files never drift from the pages. Company facts below are the verified ones used on the site.
# Usage: npm run build && npm run llms:gen   (check coverage with: npm run seo:llms)
import datetime, html, json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APP = ROOT / ".next" / "server" / "app"
SITE = "https://www.londradepo.com"
TODAY = datetime.date.today().isoformat()

FACTS = [
    "Brand: LondraDepo.com, the warehousing brand of Arca Trade Group Ltd (Companies House 13247691, VAT GB353315322, founded 2021, BIFA member).",
    "Warehouse: Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY, United Kingdom.",
    "Contact: WhatsApp +44 7554 195190; office +44 1268 203 283, Monday to Friday 07:45-17:30 UK time; Sales@arcatrade.co.uk. Team speaks English and Turkish.",
    "People: founded by Sertaç Yılmaz, co-founder of Arca Trade Group (18 years in logistics); warehouse operations led by Yusuf Barış, Operations Manager.",
    "Road distances from the warehouse: DP World London Gateway ~13 miles (~20 min), Port of Tilbury ~16 miles (~20 min), Port of Felixstowe ~62 miles (~1h15), central London ~37 miles, Amazon LCY2 Tilbury ~16 miles, Amazon LCY1 London ~32 miles.",
    "Published price: standard pallet storage from £3.50 + VAT per pallet per week (10 pallets x 4 weeks = £140 + VAT). All other services are quoted per operation.",
    "No fixed minimum volume; clients can start with a single trial pallet.",
    "Stock is managed in Mintsoft WMS (third-party software).",
    "Services: goods-in, pallet and carton storage, FCL/LCL container unloading, pick and pack, ecommerce fulfilment (Shopify, Amazon FBM, B2B), Amazon FBA prep, UK distribution. International freight and UK customs clearance are provided by Arca Trade Group.",
    "Not a bonded (customs) warehouse: goods are stored after UK customs clearance.",
    "Not an official Amazon or Shopify partner; LondraDepo provides independent storage and fulfilment.",
    "Languages: Turkish site at /, English site at /en (UK spelling); every English page with a Turkish equivalent is linked by reciprocal hreflang.",
]

GROUPS = [
    ("Tools", re.compile(r"hesapla|calculator|planner|planlayici")),
    ("Case studies", re.compile(r"/case-studies")),
    ("Guides and blog", re.compile(r"/blog|guide|rehber|konteyner-tipleri|container-types|amazon-uk-fulfilment-centres|depo-konumlari")),
    ("Company and legal", re.compile(r"about|hakkimizda|contact|iletisim|privacy|cookie|terms|sozlesme|teklif-al|request-a-quote")),
    ("Services and locations", re.compile(r".")),
]


def html_file(path: str) -> Path:
    p = path.strip("/") or "index"
    return APP / f"{p}.html"


def urls_from_sitemaps():
    out = []
    for name in ("sitemap-tr.xml.body", "sitemap-en.xml.body"):
        out += re.findall(r"<loc>([^<]+)</loc>", (APP / name).read_text())
    return out


def _text(fragment: str) -> str:
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", fragment))).strip()


def short_answer(s: str) -> str:
    """The page's answer-first text: the TR "Kısa cevap" box when present, else the opening paragraph(s) of <main>."""
    m = re.search(r"Kısa cevap</div>(.*?)</p>", s, re.S)
    if m:
        return _text(m.group(1))
    m = re.search(r"<main.*?</main>", s, re.S)
    body = re.sub(r"<nav.*?</nav>|<svg.*?</svg>|<header.*?</header>", "", m.group(0) if m else s, flags=re.S)
    out = []
    for p in re.findall(r"<p(?:\s[^>]*)?>(.*?)</p>", body, re.S):
        t = _text(p)
        if len(t) < 60 or t.startswith(("Last updated", "Son güncelleme", "By ", "Yazar")):
            if out:
                break
            continue
        out.append(t)
        if sum(map(len, out)) > 300:
            break
    return " ".join(out)


def page_info(url: str):
    path = url.replace(SITE, "") or "/"
    s = html_file(path).read_text(encoding="utf-8")
    title = html.unescape(re.search(r"<title>(.*?)</title>", s, re.S).group(1)).replace(" | LondraDepo", "").strip()
    m = re.search(r'<meta name="description" content="([^"]*)"', s)
    desc = html.unescape(m.group(1)) if m else ""
    lang = "en" if path.startswith("/en") else "tr"
    other = "tr-TR" if lang == "en" else "en"
    pair = None
    for tag in re.findall(r'<link[^>]+rel="alternate"[^>]*>', s):
        hl = re.search(r'hreflang="([^"]+)"', tag, re.I)
        hr = re.search(r'href="([^"]+)"', tag)
        if hl and hr and hl.group(1).lower() == other.lower():
            pair = hr.group(1)
    faqs = []
    for block in re.findall(r'<script type="application/ld\+json"[^>]*>(.*?)</script>', s, re.S):
        try:
            d = json.loads(block)
        except Exception:
            continue
        for n in d.get("@graph", [d]):
            if n.get("@type") == "FAQPage":
                faqs += [(q["name"], q["acceptedAnswer"]["text"]) for q in n.get("mainEntity", [])]
    answer = short_answer(s)
    group = next(g for g, rx in GROUPS if rx.search(path)) if path not in ("/", "/en") else "Home"
    return {"url": url.rstrip("/") if path != "/" else SITE, "path": path, "lang": lang, "title": title, "desc": desc, "pair": pair, "faqs": faqs, "group": group, "answer": answer}


def main():
    pages = [page_info(u) for u in urls_from_sitemaps()]
    order = ["Home", "Services and locations", "Tools", "Guides and blog", "Case studies", "Company and legal"]

    idx = [
        "# LondraDepo.com",
        "",
        "> UK warehousing, pallet storage, container unloading, ecommerce fulfilment, Amazon FBA prep and UK distribution from Rayleigh, Essex, near London, for Turkish and international businesses. Operated by Arca Trade Group Ltd. Turkish site at /, English at /en.",
        "",
        f"Last updated: {TODAY}. {len(pages)} pages. Full text with every page's summary and FAQs: {SITE}/llms-full.txt",
        "",
        "## Key facts",
        "",
        *[f"- {f}" for f in FACTS],
    ]
    for lang, heading in (("en", "English pages (/en)"), ("tr", "Turkish pages (/)")):
        idx += ["", f"## {heading}"]
        for g in order:
            sel = [p for p in pages if p["lang"] == lang and p["group"] == g]
            if not sel:
                continue
            idx += ["", f"### {g}", ""]
            for p in sel:
                pair = f" (pair: {p['pair']})" if p["pair"] else ""
                idx.append(f"- [{p['title']}]({p['url']}): {p['desc']}{pair}")
    (ROOT / "public" / "llms.txt").write_text("\n".join(idx) + "\n", encoding="utf-8")

    full = [
        "# LondraDepo.com — full reference for AI assistants",
        "",
        f"Last updated: {TODAY}. Generated from the live page content: every page in the sitemaps with its summary and its FAQs (the same text shown on the page). Index: {SITE}/llms.txt",
        "",
        "## Key facts (verified)",
        "",
        *[f"- {f}" for f in FACTS],
    ]
    for lang, heading in (("en", "English pages"), ("tr", "Turkish pages (Türkçe sayfalar)")):
        full += ["", f"# {heading}"]
        for g in order:
            for p in [p for p in pages if p["lang"] == lang and p["group"] == g]:
                full += ["", f"## {p['title']}", f"URL: {p['url']}"]
                if p["pair"]:
                    full.append(f"{'Turkish' if lang == 'en' else 'English'} version: {p['pair']}")
                full.append(f"Summary: {p['desc']}")
                if p["answer"] and p["answer"] != p["desc"]:
                    full.append(f"Short answer: {p['answer']}")
                for q, a in p["faqs"]:
                    full += [f"Q: {q}", f"A: {a}"]
    (ROOT / "public" / "llms-full.txt").write_text("\n".join(full) + "\n", encoding="utf-8")
    print(f"llms.txt and llms-full.txt written: {len(pages)} pages, {sum(len(p['faqs']) for p in pages)} FAQs")


if __name__ == "__main__":
    sys.exit(main())
