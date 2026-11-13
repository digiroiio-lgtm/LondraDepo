# llms.txt / llms-full.txt audit: every sitemap URL listed in both files, a "Last updated" date no older than
# 45 days, and none of the claims the site must not make. Exit 1 on any problem.
# Run against a running server: npm run seo:llms (SEO_BASE_URL to override). Regenerate with: npm run llms:gen
import datetime, os, re, sys, urllib.request

B = os.environ.get("SEO_BASE_URL", "http://localhost:3100").rstrip("/")
SITE = "https://www.londradepo.com"
BANNED = [r"prep partneri", r"Dartford", r"\bis an official (Amazon|Shopify) partner"]
get = lambda p: urllib.request.urlopen(B + p).read().decode()

urls = set()
for sm in ["/sitemap-tr.xml", "/sitemap-en.xml"]:
    urls |= {u.rstrip("/") or SITE for u in re.findall(r"<loc>([^<]+)</loc>", get(sm))}
problems = []
for f in ["/llms.txt", "/llms-full.txt"]:
    t = get(f)
    listed = {u.rstrip("/.") or SITE for u in re.findall(r"https://www\.londradepo\.com[^\s)\]>,]*", t)}
    missing = sorted(urls - listed)
    if missing: problems.append(f"{f}: {len(missing)} sitemap URLs missing, e.g. {missing[:3]}")
    m = re.search(r"Last updated: (\d{4}-\d{2}-\d{2})", t)
    if not m: problems.append(f"{f}: no 'Last updated' date")
    elif (datetime.date.today() - datetime.date.fromisoformat(m.group(1))).days > 45: problems.append(f"{f}: last updated {m.group(1)} (over 45 days)")
    for b in BANNED:
        if re.search(b, t): problems.append(f"{f}: banned claim /{b}/")
print(f"sitemap URLs {len(urls)} | problems {len(problems)}")
for p in problems: print(" -", p)
sys.exit(1 if problems else 0)
