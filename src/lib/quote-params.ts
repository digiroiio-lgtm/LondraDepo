/*
 * Internal quote links carry their hand-off data (service preset, pallets, planner note, source page)
 * in the URL fragment, not the query string. Google ignores fragments, so every internal link points
 * at the one canonical quote URL and no "?service=…&from=…" variants get crawled.
 * Query parameters are still read (UTM/gclid from ads, and old links already out there).
 */

type Params = Record<string, string | number | undefined | null | false>;

/** Build an internal quote link: `/en/request-a-quote#service=storage&from=%2Fen%2Fuk-warehousing`. */
export function quoteLink(base: string, params: Params): string {
  const sp = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v === undefined || v === null || v === false || v === "") continue;
    sp.set(k, String(v));
  }
  const s = sp.toString();
  return s ? `${base}#${s}` : base;
}

/** Query string and fragment merged (fragment wins). Client-only. */
export function readQuoteParams(): URLSearchParams {
  if (typeof window === "undefined") return new URLSearchParams();
  const merged = new URLSearchParams(window.location.search);
  const hash = window.location.hash.replace(/^#/, "");
  // Only treat the fragment as data when it looks like key=value pairs (plain anchors like #quote are left alone).
  if (hash.includes("=")) {
    new URLSearchParams(hash).forEach((v, k) => merged.set(k, v));
  }
  return merged;
}
