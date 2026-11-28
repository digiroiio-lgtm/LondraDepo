import { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

/**
 * Disallows repeated in every group: a crawler follows only the most specific group that names it.
 * /_next/ stays crawlable: Google needs its CSS, JS and optimised images (/_next/image) to render pages.
 */
const PRIVATE = ["/api/", "/panel"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: PRIVATE,
      },
      // Explicitly welcome AI/LLM crawlers for GEO visibility
      { userAgent: "GPTBot", allow: "/", disallow: PRIVATE },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: PRIVATE },
      { userAgent: "ChatGPT-User", allow: "/", disallow: PRIVATE },
      { userAgent: "ClaudeBot", allow: "/", disallow: PRIVATE },
      { userAgent: "Claude-SearchBot", allow: "/", disallow: PRIVATE },
      { userAgent: "Claude-User", allow: "/", disallow: PRIVATE },
      { userAgent: "Claude-Web", allow: "/", disallow: PRIVATE },
      { userAgent: "Anthropic-AI", allow: "/", disallow: PRIVATE },
      { userAgent: "PerplexityBot", allow: "/", disallow: PRIVATE },
      { userAgent: "Perplexity-User", allow: "/", disallow: PRIVATE },
      { userAgent: "Google-Extended", allow: "/", disallow: PRIVATE },
      { userAgent: "Bytespider", allow: "/", disallow: PRIVATE },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
