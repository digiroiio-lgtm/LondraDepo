"use client";

import { useEffect } from "react";
import { trackCtaClick, trackPhoneClick, trackWhatsappClick } from "@/lib/gtag";

/**
 * Site-wide click tracking for the Turkish pages, whose CTAs are plain anchors.
 * Reports WhatsApp, phone and "#teklif" clicks to GA4 (consent-gated in gtag.ts).
 * Links that already report their own click carry data-tracked and are skipped.
 */
function sourceOf(el: Element): string {
  const tagged = el.closest<HTMLElement>("[data-cta-source]");
  if (tagged?.dataset.ctaSource) return tagged.dataset.ctaSource;
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  const section = el.closest<HTMLElement>("section[id]");
  return section?.id ? `section_${section.id}` : "body";
}

export default function TrClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || a.dataset.tracked) return;
      const href = a.getAttribute("href") ?? "";
      const source = sourceOf(a);
      if (href.startsWith("https://wa.me")) trackWhatsappClick(source);
      else if (href.startsWith("tel:")) trackPhoneClick(source);
      else if (href.includes("#teklif")) trackCtaClick(href, source);
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
