#!/usr/bin/env python3
"""hreflang / language audit against a running server (npm run seo:hreflang; SEO_BASE_URL to override).
For every sitemap URL it checks: <html lang>, canonical, self-referencing hreflang, reciprocity, x-default on
multi-language pages, sitemap xhtml:link == page alternates, og:locale + og:locale:alternate, and that every
internal link returns 200 without a redirect. Languages and prefixes are read from src/lib/locales.ts.
Exit 1 on any error. Pages that exist in one language only are listed as information, not errors."""
import html, os, re, sys, urllib.error, urllib.request
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
B = os.environ.get("SEO_BASE_URL", "http://localhost:3100").rstrip("/")
SITE = "https://www.londradepo.com"

src = open(os.path.join(ROOT, "src", "lib", "locales.ts"), encoding="utf-8").read()
LOC = {m[0]: {"htmlLang": m[1], "hreflang": m[2], "og": m[3], "prefix": m[4]} for m in re.findall(
    r'(\w+): \{ htmlLang: "([^"]+)", hreflang: "([^"]+)", og: "([^"]+)", prefix: "([^"]*)"', src)}
def locale_of(path):
    best = None
    for l, v in LOC.items():
        p = v["prefix"]
        if p and (path == p or path.startswith(p + "/")) and (not best or len(p) > len(LOC[best]["prefix"])): best = l
    return best or next(l for l, v in LOC.items() if v["prefix"] == "")

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k): return None
op = urllib.request.build_opener(NoRedirect)
def get(u):
    try:
        r = op.open(B + u); return r.status, r.read().decode("utf-8", "ignore")
    except urllib.error.HTTPError as e:
        return e.code, e.headers.get("Location") or ""

index = get("/sitemap_index.xml")[1]
sm = {}
for child in re.findall(r"<loc>[^<]*(/sitemap-[^<]+\.xml)</loc>", index):
    for blk in re.findall(r"<url>(.*?)</url>", get(child)[1], re.S):
        loc = re.search(r"<loc>([^<]+)</loc>", blk)[1]
        sm[loc.replace(SITE, "") or "/"] = {a: h for a, h in re.findall(r'hreflang="([^"]+)" href="([^"]+)"', blk)}

errors = defaultdict(list); single = []; data = {}; links = defaultdict(set)
for p, smalts in sorted(sm.items()):
    st, h = get(p)
    if st != 200: errors["page not 200"].append(f"{p} {st}"); continue
    l = locale_of(p); url = SITE + (p if p != "/" else "")
    lang = (re.search(r'<html[^>]*lang="([^"]+)"', h) or [None, ""])[1]
    canon = (re.search(r'<link rel="canonical" href="([^"]+)"', h) or [None, ""])[1]
    alts = {a: hr for hr, a in re.findall(r'<link rel="alternate" href="([^"]+)" hrefLang="([^"]+)"', h)}
    alts.update({a: hr for a, hr in re.findall(r'<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"', h)})
    ogl = (re.search(r'property="og:locale" content="([^"]+)"', h) or [None, ""])[1]
    oga = set(re.findall(r'property="og:locale:alternate" content="([^"]+)"', h))
    data[p] = alts
    if lang != LOC[l]["htmlLang"]: errors["html lang"].append(f"{p} {lang}")
    if canon.rstrip("/") != url.rstrip("/"): errors["canonical"].append(f"{p} -> {canon}")
    if alts.get(LOC[l]["hreflang"], "").rstrip("/") != url.rstrip("/"): errors["self hreflang"].append(p)
    others = set(alts) - {LOC[l]["hreflang"], "x-default"}
    if others and "x-default" not in alts: errors["x-default missing"].append(p)
    if not others: single.append(p)
    if {k: v.rstrip("/") for k, v in alts.items()} != {k: v.rstrip("/") for k, v in smalts.items()}: errors["sitemap != page"].append(p)
    if ogl != LOC[l]["og"] or oga != {v["og"] for k, v in LOC.items() if k != l}: errors["og:locale"].append(f"{p} {ogl} {sorted(oga)}")
    for hr in re.findall(r'href="(/[^"#]*)', h):
        hr = html.unescape(hr)
        if not hr.startswith("/_next") and not re.search(r"\.(css|js|png|jpe?g|svg|ico|webp|pdf|csv|xml|txt|json|woff2?)(\?|$)", hr):
            links[hr.split("?")[0] or "/"].add(p)

for p, alts in data.items():
    for a, hr in alts.items():
        q = hr.replace(SITE, "") or "/"
        if a == "x-default" or q.rstrip("/") == p.rstrip("/"): continue
        if q not in data: errors["hreflang target not in sitemap"].append(f"{p} -> {q}"); continue
        if not any((v.replace(SITE, "") or "/") == p for k, v in data[q].items() if k != "x-default"): errors["not reciprocal"].append(f"{p} -> {q}")

for l, srcs in sorted(links.items()):
    if l in sm: continue
    st, loc = get(l)
    if st != 200: errors["internal link not 200"].append(f"{l} {st} {loc} (from {len(srcs)} pages, e.g. {sorted(srcs)[0]})")

print(f"languages: {', '.join(LOC)} | pages: {len(data)} | internal link targets: {len(links)} | single-language pages: {len(single)}")
for p in single: print("  single-language:", p)
for k, v in errors.items():
    print(f"ERROR {k}: {len(v)}")
    for x in v[:10]: print("   ", x)
print("OK" if not errors else f"{sum(len(v) for v in errors.values())} errors")
sys.exit(1 if errors else 0)
