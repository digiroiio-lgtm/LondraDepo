# Run against a local production server: npm run build && npm start -- --port 3100
# Optional: SEO_BASE_URL, SEO_REPORT_PATH. Never submits forms or indexing requests.
import urllib.request, urllib.error, urllib.parse, urllib.robotparser, json, re, concurrent.futures, xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
class HTML(HTMLParser):
 def __init__(self):
  super().__init__(); self.canonical=[]; self.robots=[]; self.links=[]; self.text=[]; self.schemas=[]; self.in_script=False; self.ld=False; self.buf=''
 def handle_starttag(self,t,a):
  d=dict(a)
  if t=='link' and d.get('rel')=='canonical': self.canonical.append(d.get('href'))
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
 return {'url':url,'final':r.url,'status':status,'chain':h.chain,'type':typ,'xrobots':r.headers.get('X-Robots-Tag'),'canonical':parser.canonical,'robots':parser.robots,'links':parser.links,'text':' '.join(' '.join(parser.text).split()),'schemas':parser.schemas,'body':body if 'xml' in typ or url.endswith('robots.txt') else ''}

import sys,json,re,urllib.request,urllib.error,urllib.parse,concurrent.futures,xml.etree.ElementTree as ET,unicodedata
from pathlib import Path
import os
BASE=os.environ.get('SEO_BASE_URL', 'http://localhost:3100').rstrip('/'); SITE='https://www.londradepo.com'
sm=get(BASE+'/sitemap.xml'); urls=[x.text for x in ET.fromstring(sm['body']).findall('.//{*}loc')]
rows=[get(BASE+urllib.parse.urlsplit(u).path) for u in urls]
failures=[]
robots = get(BASE + '/robots.txt')
rules = urllib.robotparser.RobotFileParser()
rules.parse(robots['body'].splitlines())
if SITE + '/sitemap.xml' not in robots['body']:
 failures.append(['robots.txt', 'sitemap origin mismatch'])
if '<lastmod>' in sm['body']:
 failures.append(['sitemap.xml', 'unverified lastmod reintroduced'])
def norm(t):return ' '.join(unicodedata.normalize('NFKC',t).replace('’',"'").replace('–','-').replace('—','-').split())
for u,r in zip(urls,rows):
 r['target']=u
 if not rules.can_fetch('Googlebot', u): failures.append([u, 'robots.txt disallows canonical'])
 if r['status']!=200:failures.append([u,'status',r['status']])
 if r['canonical']!=[u]:failures.append([u,'canonical',r['canonical']])
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
 if len(text)<300:failures.append([u,'thin HTML',len(text)])
images=[]
for p in ['/logo.svg','/logo.png','/icon.svg','/icon.png','/apple-touch-icon.png','/favicon.ico']:
 r=urllib.request.urlopen(BASE+p); b=r.read(); typ=r.headers.get('Content-Type'); ok=(b.startswith(b'\x89PNG') if p.endswith('.png') else (b'<svg' in b if p.endswith('.svg') else b[:4]==b'\x00\x00\x01\x00'))
 images.append({'path':p,'status':r.status,'type':typ,'bytes':len(b),'valid':ok});
 if not ok or not typ.startswith('image/'):failures.append([p,'invalid image'])
class NoRedirect(urllib.request.HTTPRedirectHandler):
 def redirect_request(self,*args):return None
op=urllib.request.build_opener(NoRedirect()); redirects=[]
for host,proto in [('londradepo.com','http'),('londradepo.com','https'),('www.londradepo.com','http'),('www.londradepo.com','https'),('preview.vercel.app','https')]:
 for p in ['/','/amazon-fulfillment?utm_source=seo&sku=1','/blog/ingiltere-depo-rehberi','/case-studies/tortilla-uk-distribution','/logo.svg']:
  req=urllib.request.Request(BASE+p,headers={'Host':host,'X-Forwarded-Proto':proto})
  try:r=op.open(req);status=r.status
  except urllib.error.HTTPError as e:r=e;status=e.code
  loc=r.headers.get('Location'); expected=308 if host=='londradepo.com' or (host=='www.londradepo.com' and proto=='http') else 200
  redirects.append({'host':host,'protocol':proto,'path':p,'status':status,'location':loc})
  if status!=expected or (expected==308 and loc!=SITE+p):failures.append([host,proto,p,'redirect',status,loc])
paths = {urllib.parse.urlsplit(u).path or '/' for u in urls}
for r in rows:
 for link in r['links']:
  if link.startswith('/') or link.startswith(SITE):
   path = urllib.parse.urlsplit(link).path or '/'
   if path not in paths: failures.append([r['target'], 'noncanonical internal link', link])
 path=urllib.parse.urlsplit(r['target']).path or '/'
 sources=[s['target'] for s in rows if s['target']!=r['target'] and any((urllib.parse.urlsplit(a).path or '/')==path for a in s['links'] if a.startswith('/') or a.startswith(SITE))]
 r['incoming_sources']=sources
 if not sources:failures.append([r['target'],'orphan'])
if os.environ.get('SEO_REPORT_PATH'):
 Path(os.environ['SEO_REPORT_PATH']).write_text(json.dumps({'rows':rows,'images':images,'redirects':redirects,'failures':failures},ensure_ascii=False,indent=2))
print('Checked',len(rows),'canonical URLs,',len(images),'images,',len(redirects),'redirect cases.');print(json.dumps(failures,ensure_ascii=False,indent=2));sys.exit(bool(failures))
