"use client";

import { useReportWebVitals } from "next/web-vitals";
import { trackEvent } from "@/lib/gtag";

/**
 * Real-user page speed (LCP, INP, CLS) to GA4 as `web_vitals`. Poor values are always sent; the rest are
 * sampled at 25% to keep event volume low. CLS is sent ×1000 so GA4 can store it as an integer.
 */
export default function WebVitals() {
  useReportWebVitals((m) => {
    if (!["LCP", "INP", "CLS"].includes(m.name)) return;
    if (m.rating !== "poor" && Math.random() > 0.25) return;
    trackEvent("web_vitals", {
      event_category: "ux",
      metric_name: m.name,
      metric_value: Math.round(m.name === "CLS" ? m.value * 1000 : m.value),
      metric_rating: m.rating,
      non_interaction: 1,
    });
  });
  return null;
}
