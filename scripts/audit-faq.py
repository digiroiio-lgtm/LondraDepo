# FAQ audit: reads FAQPage JSON-LD on every sitemap URL and reports
#  - pages below the FAQ target for their type (legal pages excluded),
#  - answers under 15 words,
#  - identical questions on more than one page,
#  - pages with more than one FAQPage.
# Run against a running server: npm run seo:faq (SEO_BASE_URL to override). Exit 1 when anything is found.
import json, os, re, sys, urllib.request, collections

B = os.environ.get("SEO_BASE_URL", "http://localhost:3100").rstrip("/")
LEGAL = re.compile(r"/(en/)?(privacy-policy|cookie-policy|terms-and-conditions|sozlesme-kosullari)$")
CASE = re.compile(r"/case-studies/.+")
SMALL = re.compile(r"^/(en/)?(about-us|contact|hakkimizda|iletisim)$")

def target(path):
    if LEGAL.search(path): return 0
    if CASE.search(path): return 4
    if SMALL.search(path): return 4
    return 5

locs = []
for sm in ["/sitemap-tr.xml", "/sitemap-en.xml"]:
    locs += re.findall(r"<loc>https://www\.londradepo\.com([^<]*)</loc>", urllib.request.urlopen(B + sm).read().decode())

below, short, multi = [], [], []
seen = collections.defaultdict(list)
total = 0
for u in locs:
    path = u or "/"
    s = urllib.request.urlopen(B + path).read().decode()
    pages = []
    for block in re.findall(r'<script type="application/ld\+json"[^>]*>(.*?)</script>', s, re.S):
        d = json.loads(block)
        for node in d.get("@graph", [d]):
            if node.get("@type") == "FAQPage":
                pages.append(node["mainEntity"])
    if len(pages) > 1: multi.append(path)
    qa = [q for p in pages for q in p]
    total += len(qa)
    if len(qa) < target(path): below.append((path, len(qa), target(path)))
    for q in qa:
        a = q["acceptedAnswer"]["text"]
        if len(a.split()) < 15: short.append((path, q["name"], len(a.split())))
        seen[q["name"].strip().lower()].append(path)

dups = {q: v for q, v in seen.items() if len(set(v)) > 1}
print(f"pages {len(locs)} | questions {total} | below target {len(below)} | short answers {len(short)} | duplicate questions {len(dups)} | multiple FAQPage {len(multi)}")
for x in below: print("BELOW", *x)
for x in short: print("SHORT", *x)
for q, v in dups.items(): print("DUP", q, sorted(set(v)))
for x in multi: print("MULTI", x)
sys.exit(1 if (below or short or dups or multi) else 0)
