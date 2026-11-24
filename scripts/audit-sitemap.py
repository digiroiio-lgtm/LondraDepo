#!/usr/bin/env python3
"""Checks that every public Turkish route (src/app/(tr)/**/page.tsx) is listed in the TR sitemap
(src/lib/sitemaps.ts) and that the sitemap lists no route that does not exist. Exit 1 on any gap.
Usage: npm run seo:sitemap"""
import os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(ROOT, "src", "app", "(tr)")
SITEMAP = os.path.join(ROOT, "src", "lib", "sitemaps.ts")

routes = set()
for dirpath, _, files in os.walk(APP):
    if "page.tsx" not in files:
        continue
    rel = os.path.relpath(dirpath, APP)
    if any(part.startswith("[") or part.startswith("_") for part in rel.split(os.sep)):
        continue
    routes.add("/" if rel == "." else "/" + rel.replace(os.sep, "/"))

src = open(SITEMAP, encoding="utf-8").read()
block = src[src.index("const TR"):]
block = block[: block.index("];")]
listed = set(re.findall(r'\[\s*"(/[^"]*)"', block))

missing = sorted(routes - listed)
stale = sorted(listed - routes)
for r in missing:
    print(f"MISSING from TR sitemap: {r}")
for r in stale:
    print(f"In TR sitemap but no page: {r}")
print(f"TR routes: {len(routes)} · in sitemap: {len(listed)} · missing: {len(missing)} · stale: {len(stale)}")
sys.exit(1 if missing or stale else 0)
