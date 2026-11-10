/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Approved URL consolidations (10.11.2026). statusCode 301 as requested; Google treats 301 and 308 the same.
  async redirects() {
    return [
      // Retired URLs go straight to the canonical www target, so apex requests also take a single hop.
      { source: "/uk-warehousing-fulfilment", destination: "https://www.londradepo.com/en", statusCode: 301 },
      { source: "/shopify-fulfillment", destination: "https://www.londradepo.com/shopify-ingiltere-depo", statusCode: 301 },
      // Canonical host is www (see src/lib/site.ts). Apex requests go to www with a permanent 308.
      {
        source: "/:path*",
        has: [{ type: "host", value: "londradepo.com" }],
        destination: "https://www.londradepo.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://stats.g.doubleclick.net https://formspree.io;",
          },
        ],
      },
      {
        source: "/_next/(.*)",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

export default nextConfig;
