import { NextRequest, NextResponse } from "next/server";
import { submitIndexNow } from "@/lib/indexnow";

import { SITE_URL } from "@/lib/site";

const ALL_URLS = [
  // Ana sayfalar
  `${SITE_URL}/`,
  `${SITE_URL}/ingiltere-depo-avantajlari`,
  `${SITE_URL}/hakkimizda`,
  `${SITE_URL}/iletisim`,
  // P0 Power pages
  `${SITE_URL}/ingiltere-depo`,
  `${SITE_URL}/londra-depo`,
  `${SITE_URL}/ingiltere-e-ticaret-lojistigi`,
  `${SITE_URL}/siparis-toplama-paketleme`,
  `${SITE_URL}/ingiltere-depo-fiyatlari`,
  `${SITE_URL}/turk-sirketleri-icin-ingiltere-depo`,
  `${SITE_URL}/turkiye-ingiltere-lojistik`,
  `${SITE_URL}/turkiyeden-ingiltereye-satis`,
  `${SITE_URL}/shopify-ingiltere-depo`,
  `${SITE_URL}/amazon-ingiltere-depo`,
  // Service pages
  `${SITE_URL}/ingiltere-fulfillment`,
  `${SITE_URL}/palet-depolama`,
  `${SITE_URL}/amazon-prep-uk`,
  `${SITE_URL}/depolama`,
  `${SITE_URL}/gumrukleme`,
  `${SITE_URL}/ellecleme`,
  `${SITE_URL}/nakliye-dagitim`,
  `${SITE_URL}/e-ticaret-fulfillment`,
  `${SITE_URL}/shopify-fulfillment`,
  `${SITE_URL}/amazon-fulfillment`,
  // Landing pages
  `${SITE_URL}/turkiyeden-ingiltereye-depolama`,
  `${SITE_URL}/uk-warehousing-fulfilment`,
  // Location
  `${SITE_URL}/essex-depo`,
  // Case studies
  `${SITE_URL}/case-studies`,
  `${SITE_URL}/case-studies/tortilla-uk-distribution`,
  `${SITE_URL}/case-studies/uk-walking-treadmill-distribution`,
  `${SITE_URL}/case-studies/cruyff-uk-fulfillment`,
  `${SITE_URL}/case-studies/uk-auto-parts-warehouse`,
  `${SITE_URL}/case-studies/pizza-box-distribution-uk`,
  `${SITE_URL}/case-studies/arac-koltuk-kaplama-ingiltere-depo`,
  `${SITE_URL}/case-studies/tasinabilir-sarj-istasyonu-ingiltere-operasyonu`,
  // Blog
  `${SITE_URL}/blog`,
  `${SITE_URL}/blog/ingiltere-depo-rehberi`,
  `${SITE_URL}/blog/ingiltere-fulfillment-nedir`,
  `${SITE_URL}/blog/amazon-prep-uk-rehberi`,
  `${SITE_URL}/blog/turkiyeden-ingiltereye-ihracat-rehberi`,
  `${SITE_URL}/blog/ingiltere-palet-depolama-maliyetleri`,
  `${SITE_URL}/blog/ingiltere-depo-fiyatlari-2026`,
  `${SITE_URL}/blog/ingiltere-ara-depo-nedir`,
  `${SITE_URL}/blog/amazon-fba-vs-uk-fulfillment`,
  // Legal
  `${SITE_URL}/privacy-policy`,
  `${SITE_URL}/cookie-policy`,
  `${SITE_URL}/sozlesme-kosullari`,
];

export async function POST(request: NextRequest) {
  const auth = request.headers.get("authorization");
  const expected = `Bearer ${process.env.INDEXNOW_KEY}`;

  if (!process.env.INDEXNOW_KEY || auth !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const status = await submitIndexNow(ALL_URLS);
    return NextResponse.json({ submitted: ALL_URLS.length, status });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
