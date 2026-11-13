# Run against a local production server: npm run build && npm start -- --port 3100
# Optional: SEO_BASE_URL, SEO_REPORT_PATH, SEO_LIVE=1 (live host checks). Never submits forms or indexing requests.
import urllib.request, urllib.error, urllib.parse, urllib.robotparser, json, re, concurrent.futures, xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
class HTML(HTMLParser):
 def __init__(self):
  super().__init__(); self.canonical=[]; self.hreflang={}; self.lang=None; self.robots=[]; self.links=[]; self.text=[]; self.schemas=[]; self.in_script=False; self.ld=False; self.buf=''
 def handle_starttag(self,t,a):
  d=dict(a)
  if t=='html': self.lang=d.get('lang')
  if t=='link' and d.get('rel')=='canonical': self.canonical.append(d.get('href'))
  if t=='link' and d.get('rel')=='alternate' and d.get('hreflang'): self.hreflang[d['hreflang']]=d.get('href')
  if t=='meta' and d.get('name') in ('robots','googlebot'): self.robots.append(d.get('content'))
  if t=='a' and d.get('href'): self.links.append(d['href'])
  if t=='script': self.in_script=True; self.ld=d.get('type')=='application/ld+json'; self.buf=''
 def handle_endtag(self,t):
  if t=='script':
   if self.ld:
    try: self.schemas.append(json.loads(self.buf))
    except Exception: pass
   self.ld=False; self.in_script=False
 def handle_data(self,d):
  if self.ld: self.buf+=d
  if not self.in_script: self.text.append(d)
class Redirect(urllib.request.HTTPRedirectHandler):
 def __init__(self): self.chain=[]
 def redirect_request(self,req,fp,code,msg,headers,url):
  self.chain.append({'url':req.full_url,'status':code,'location':url})
  return super().redirect_request(req,fp,code,msg,headers,url)
def get(url):
 h=Redirect(); op=urllib.request.build_opener(h)
 try:
  r=op.open(url,timeout=25); data=r.read(); status=r.status
 except urllib.error.HTTPError as e: r=e; data=e.read(); status=e.code
 except Exception as e: return {'url':url,'error':str(e),'chain':h.chain}
 parser=HTML(); typ=r.headers.get('Content-Type',''); body=data.decode('utf8','replace')
 if 'text/html' in typ: parser.feed(body)
 return {'url':url,'final':r.url,'status':status,'chain':h.chain,'type':typ,'xrobots':r.headers.get('X-Robots-Tag'),'canonical':parser.canonical,'hreflang':parser.hreflang,'lang':parser.lang,'robots':parser.robots,'links':parser.links,'text':' '.join(' '.join(parser.text).split()),'schemas':parser.schemas,'body':body if 'xml' in typ or url.endswith('robots.txt') else ''}

import sys,json,re,urllib.request,urllib.error,urllib.parse,concurrent.futures,xml.etree.ElementTree as ET,unicodedata
from pathlib import Path
import os
BASE=os.environ.get('SEO_BASE_URL', 'http://localhost:3100').rstrip('/'); SITE='https://www.londradepo.com'
XHTML='{http://www.w3.org/1999/xhtml}'
index=get(BASE+'/sitemap_index.xml')
children=[x.text for x in ET.fromstring(index['body']).findall('{*}sitemap/{*}loc')]
legacy=get(BASE+'/sitemap.xml')
sm_alt={}; sm_lang={}; sm_lastmod={}; urls=[]; sm={'body':index['body']}; tr_body=''
for child in children:
 doc=get(BASE+urllib.parse.urlsplit(child).path)
 if doc.get('status')!=200 or 'xml' not in doc.get('type',''): failures_pre=[child,'sitemap status/type',doc.get('status'),doc.get('type')]; print(failures_pre); sys.exit(1)
 sm['body']+=doc['body']
 if child.endswith('-tr.xml'): tr_body=doc['body']
 for u in ET.fromstring(doc['body']).findall('{*}url'):
  loc=u.find('{*}loc').text; urls.append(loc)
  sm_alt[loc]={l.get('hreflang'):l.get('href') for l in u.findall(XHTML+'link')}
  sm_lang[loc]='en' if child.endswith('-en.xml') else 'tr'
  lm=u.find('{*}lastmod')
  if lm is not None: sm_lastmod[loc]=lm.text

rows=[get(BASE+urllib.parse.urlsplit(u).path) for u in urls]
failures=[]
if legacy.get('body')!=index['body']: failures.append(['/sitemap.xml','does not serve the sitemap index'])
if len(urls)!=len(set(urls)): failures.append(['sitemaps','duplicate loc'])
robots = get(BASE + '/robots.txt')
rules = urllib.robotparser.RobotFileParser()
rules.parse(robots['body'].splitlines())
if 'Sitemap: '+SITE + '/sitemap_index.xml' not in robots['body']:
 failures.append(['robots.txt', 'sitemap origin mismatch'])
def norm(t):return ' '.join(unicodedata.normalize('NFKC',t).replace('’',"'").replace('–','-').replace('—','-').split())
for u,r in zip(urls,rows):
 r['target']=u
 if not rules.can_fetch('Googlebot', u): failures.append([u, 'robots.txt disallows canonical'])
 if r['status']!=200:failures.append([u,'status',r['status']])
 if r['canonical']!=[u]:failures.append([u,'canonical',r['canonical']])
 if r['lang']!=sm_lang[u]:failures.append([u,'html lang',r['lang'],'expected',sm_lang[u]])
 if r['hreflang']!=sm_alt[u]:failures.append([u,'hreflang HTML != sitemap',r['hreflang'],sm_alt[u]])
 for code,href in sm_alt[u].items():
  if href not in sm_alt:failures.append([u,'hreflang target not in sitemaps',code,href]); continue
  if code!='x-default' and u not in sm_alt[href].values():failures.append([u,'hreflang not reciprocal',code,href])
 if sm_alt[u] and u not in sm_alt[u].values():failures.append([u,'hreflang missing self'])
 if 'noindex' in ','.join(r['robots']) or r['xrobots']:failures.append([u,'robots'])
 text=norm(r['text']); count=0
 for graph in r['schemas']:
  for node in graph.get('@graph',[graph]):
   if node.get('@type')=='FAQPage':
    count+=1
    for qa in node['mainEntity']:
     for value in [qa['name'],qa['acceptedAnswer']['text']]:
      if norm(value) not in text:failures.append([u,'FAQ mismatch',value])
 if count>1:failures.append([u,'FAQ duplicate',count])
 r['faq_count']=count
 # TR lastmod is allowed only where the page publishes the same dateModified (maintained article dates).
 if sm_lang[u]=='tr' and u in sm_lastmod:
  mods={n.get('dateModified') for g in r['schemas'] for n in g.get('@graph',[g]) if n.get('@type') in ('Article','BlogPosting')}
  if sm_lastmod[u] not in mods: failures.append([u,'TR lastmod != Article dateModified',sm_lastmod[u],sorted(m for m in mods if m)])
 if len(text)<300:failures.append([u,'thin HTML',len(text)])
images=[]
for p in ['/logo.svg','/logo.png','/icon.svg','/icon.png','/apple-touch-icon.png','/favicon.ico']:
 r=urllib.request.urlopen(BASE+p); b=r.read(); typ=r.headers.get('Content-Type'); ok=(b.startswith(b'\x89PNG') if p.endswith('.png') else (b'<svg' in b if p.endswith('.svg') else b[:4]==b'\x00\x00\x01\x00'))
 images.append({'path':p,'status':r.status,'type':typ,'bytes':len(b),'valid':ok});
 if not ok or not typ.startswith('image/'):failures.append([p,'invalid image'])
class NoRedirect(urllib.request.HTTPRedirectHandler):
 def redirect_request(self,*args):return None
op=urllib.request.build_opener(NoRedirect()); redirects=[]
LIVE=bool(os.environ.get('SEO_LIVE'))
# Live mode (seo:smoke): real HTTPS requests to apex and www; Vercel ignores spoofed Host headers.
HOSTS=[('londradepo.com','https'),('www.londradepo.com','https')] if LIVE else [('londradepo.com','http'),('londradepo.com','https'),('www.londradepo.com','http'),('www.londradepo.com','https'),('preview.vercel.app','https')]
for host,proto in HOSTS:
 for p in ['/','/amazon-fulfillment?utm_source=seo&sku=1','/blog/ingiltere-depo-rehberi','/case-studies/tortilla-uk-distribution','/logo.svg']:
  req=urllib.request.Request(f'https://{host}{p}') if LIVE else urllib.request.Request(BASE+p,headers={'Host':host,'X-Forwarded-Proto':proto})
  try:r=op.open(req);status=r.status
  except urllib.error.HTTPError as e:r=e;status=e.code
  loc=r.headers.get('Location'); expected=308 if host=='londradepo.com' or (host=='www.londradepo.com' and proto=='http') else 200
  redirects.append({'host':host,'protocol':proto,'path':p,'status':status,'location':loc})
  if status!=expected or (expected==308 and loc!=SITE+p):failures.append([host,proto,p,'redirect',status,loc])
for src,dst in [('/uk-warehousing-fulfilment','/en'),('/shopify-fulfillment','/en/shopify-fulfilment-uk')]:
 try:op.open(BASE+src);failures.append([src,'expected 301'])
 except urllib.error.HTTPError as e:
  if e.code!=301 or urllib.parse.urlsplit(e.headers.get('Location','')).path!=dst:failures.append([src,'redirect',e.code,e.headers.get('Location')])
paths = {urllib.parse.urlsplit(u).path or '/' for u in urls}
for r in rows:
 for link in r['links']:
  if link.startswith('/') or link.startswith(SITE):
   path = urllib.parse.urlsplit(link).path or '/'
   # Downloadable static files (templates, PDFs, images) are not pages and are not in the sitemaps.
   if re.search(r'\.(csv|pdf|png|jpe?g|svg|webp|xlsx)$', path): continue
   if path not in paths: failures.append([r['target'], 'noncanonical internal link', link])
 path=urllib.parse.urlsplit(r['target']).path or '/'
 sources=[s['target'] for s in rows if s['target']!=r['target'] and any((urllib.parse.urlsplit(a).path or '/')==path for a in s['links'] if a.startswith('/') or a.startswith(SITE))]
 r['incoming_sources']=sources
 if not sources:failures.append([r['target'],'orphan'])
if os.environ.get('SEO_REPORT_PATH'):
 Path(os.environ['SEO_REPORT_PATH']).write_text(json.dumps({'rows':rows,'images':images,'redirects':redirects,'failures':failures},ensure_ascii=False,indent=2))
print('Checked',len(rows),'canonical URLs,',len(images),'images,',len(redirects),'redirect cases.');print(json.dumps(failures,ensure_ascii=False,indent=2));sys.exit(bool(failures))
