import { MetadataRoute } from "next";

const SITE_URL = "https://www.londradepo.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
      // Explicitly welcome AI/LLM crawlers for GEO visibility
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "Anthropic-AI", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
