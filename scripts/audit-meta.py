# On-page meta audit: duplicate titles/descriptions, H1 count, title/description length, img alt, JSON-LD parse.
# Run against a running server: npm run seo:meta (SEO_BASE_URL to override). Length findings are advisory.
import re,json,html,urllib.request,collections
import os
B=os.environ.get('SEO_BASE_URL','http://localhost:3100').rstrip('/')
locs=[]
for sm in ['/sitemap-tr.xml','/sitemap-en.xml']:
    locs+=re.findall(r'<loc>https://www.londradepo.com([^<]*)</loc>',urllib.request.urlopen(B+sm).read().decode())
titles=collections.defaultdict(list); descs=collections.defaultdict(list); issues=[]
for u in locs:
    s=urllib.request.urlopen(B+(u or '/')).read().decode()
    t=html.unescape((re.search(r'<title>(.*?)</title>',s,re.S) or [None,''])[1]); titles[t].append(u)
    d=html.unescape((re.search(r'<meta name="description" content="([^"]*)"',s) or [None,''])[1]); descs[d].append(u)
    h1=len(re.findall(r'<h1[\s>]',s))
    if h1!=1: issues.append((u,'h1 count',h1))
    if not d: issues.append((u,'no description'))
    elif len(d)>170 or len(d)<70: issues.append((u,'desc len',len(d)))
    if len(t)>65: issues.append((u,'title len',len(t)))
    for img in re.findall(r'<img[^>]*>',s):
        if 'alt=' not in img: issues.append((u,'img no alt',img[:80]))
    for m in re.findall(r'<script type="application/ld\+json"[^>]*>(.*?)</script>',s,re.S):
        try: json.loads(m)
        except Exception as e: issues.append((u,'bad jsonld',str(e)[:60]))
print('pages',len(locs))
for k,v in titles.items():
    if len(v)>1: print('DUP TITLE',k,v)
for k,v in descs.items():
    if len(v)>1: print('DUP DESC',k[:60],v)
for i in issues: print(i)
