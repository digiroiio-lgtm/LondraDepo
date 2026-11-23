"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackCtaClick, trackEvent, trackPhoneClick, trackWhatsappClick, waVariant } from "@/lib/gtag";

/**
 * Site-wide UX and conversion tracking for the TR and EN pages (consent handled by Consent Mode).
 * - clicks: WhatsApp, phone, email, booking (Calendly) and quote CTAs, unless the link reports its own click (data-tracked);
 * - cta_view: a WhatsApp / quote / booking CTA was at least half visible for 1 s (once per page and source), for click ÷ view rates;
 * - scroll_depth 25/50/75/100, section_view for section[id], faq_open for <details>, page_engaged at 30/60/120 s visible;
 * - rage_click: 3+ clicks on the same element within 1 s (something looks clickable but does not respond).
 */
type CtaKind = "whatsapp" | "phone" | "email" | "booking" | "quote";

function kindOf(href: string): CtaKind | null {
  if (href.startsWith("https://wa.me") || href.startsWith("https://api.whatsapp.com")) return "whatsapp";
  if (href.startsWith("tel:")) return "phone";
  if (href.startsWith("mailto:")) return "email";
  if (href.includes("calendly.com")) return "booking";
  if (href.includes("#teklif") || /\/(teklif-al|en\/request-a-quote)(\b|\/|\?|#|$)/.test(href)) return "quote";
  return null;
}

function sourceOf(el: Element): string {
  const tagged = el.closest<HTMLElement>("[data-cta-source]");
  if (tagged?.dataset.ctaSource) return tagged.dataset.ctaSource;
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  const section = el.closest<HTMLElement>("section[id]");
  return section?.id ? `section_${section.id}` : "body";
}

const label = (el: Element) => ((el as HTMLElement).innerText || el.getAttribute("aria-label") || el.tagName).trim().replace(/\s+/g, " ").slice(0, 60);

export default function SiteTracker() {
  const path = usePathname();

  // Clicks (delegated, capture so it runs before navigation).
  useEffect(() => {
    let last: { el: Element | null; n: number; t: number } = { el: null, n: 0, t: 0 };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      // Rage clicks on anything.
      const now = Date.now();
      const hit = target?.closest("a,button,[role=button],label,summary,input,select") ?? target;
      if (hit && hit === last.el && now - last.t < 1000) {
        last.n++;
        if (last.n === 3) trackEvent("rage_click", { event_category: "ux", element: label(hit), click_source: sourceOf(hit) });
      } else last = { el: hit, n: 1, t: now };
      last.t = now;

      const a = target?.closest?.("a");
      if (!a || a.dataset.tracked) return;
      const href = a.getAttribute("href") ?? "";
      const kind = kindOf(href);
      if (!kind) return;
      const source = sourceOf(a);
      if (kind === "whatsapp") trackWhatsappClick(source, waVariant(href));
      else if (kind === "phone") trackPhoneClick(source);
      else if (kind === "email") trackEvent("email_click", { event_category: "engagement", click_source: source });
      else if (kind === "booking") trackEvent("booking_click", { event_category: "conversion", click_source: source });
      else trackCtaClick(href, source);
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  // Per-page observers: CTA views, sections, scroll depth, FAQ, engaged time.
  useEffect(() => {
    const seen = new Set<string>();
    const once = (key: string, fn: () => void) => {
      if (seen.has(key)) return;
      seen.add(key);
      fn();
    };
    const timers = new Map<Element, number>();

    // CTA views (≥50% visible for 1 s).
    const ctaIo = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          const a = en.target as HTMLAnchorElement;
          if (en.isIntersecting) {
            if (timers.has(a)) continue;
            timers.set(a, window.setTimeout(() => {
              const kind = kindOf(a.getAttribute("href") ?? "");
              const source = sourceOf(a);
              if (kind) once(`cta:${kind}:${source}`, () => trackEvent("cta_view", { event_category: "engagement", cta_type: kind, click_source: source }));
              ctaIo.unobserve(a);
            }, 1000));
          } else {
            window.clearTimeout(timers.get(a));
            timers.delete(a);
          }
        }
      },
      { threshold: 0.5 },
    );
    // Sections reached.
    const secIo = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (!en.isIntersecting) continue;
          const id = (en.target as HTMLElement).id;
          once(`sec:${id}`, () => trackEvent("section_view", { event_category: "ux", section_id: id }));
          secIo.unobserve(en.target);
        }
      },
      { threshold: 0.3 },
    );
    const scan = () => {
      document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((a) => {
        if (kindOf(a.getAttribute("href") ?? "") && !a.dataset.ctaObserved) {
          a.dataset.ctaObserved = "1";
          ctaIo.observe(a);
        }
      });
      document.querySelectorAll<HTMLElement>("section[id]").forEach((s) => {
        if (!s.dataset.secObserved) {
          s.dataset.secObserved = "1";
          secIo.observe(s);
        }
      });
    };
    scan();
    // Late content (forms after submit, client-rendered tools).
    let pending = 0;
    const mo = new MutationObserver(() => {
      if (pending) return;
      pending = window.setTimeout(() => { pending = 0; scan(); }, 500);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Scroll depth.
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h <= 0 ? 100 : Math.round((window.scrollY / h) * 100);
      for (const step of [25, 50, 75, 100]) if (pct >= step - 1) once(`scroll:${step}`, () => trackEvent("scroll_depth", { event_category: "ux", percent: step }));
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // FAQ / accordion opens.
    const onToggle = (e: Event) => {
      const d = e.target as HTMLDetailsElement;
      if (d.tagName !== "DETAILS" || !d.open) return;
      const q = (d.querySelector("summary")?.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 80);
      if (q) once(`faq:${q}`, () => trackEvent("faq_open", { event_category: "ux", question: q }));
    };
    document.addEventListener("toggle", onToggle, { capture: true });

    // Visible time on page.
    let visibleMs = 0;
    let lastTick = Date.now();
    const tick = window.setInterval(() => {
      const now = Date.now();
      if (document.visibilityState === "visible") visibleMs += now - lastTick;
      lastTick = now;
      for (const s of [30, 60, 120]) if (visibleMs >= s * 1000) once(`eng:${s}`, () => trackEvent("page_engaged", { event_category: "ux", seconds: s }));
    }, 5000);

    return () => {
      ctaIo.disconnect();
      secIo.disconnect();
      mo.disconnect();
      window.clearTimeout(pending);
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("toggle", onToggle, { capture: true });
      window.clearInterval(tick);
      // Allow the next page's elements to be observed again.
      document.querySelectorAll<HTMLElement>("[data-cta-observed],[data-sec-observed]").forEach((el) => {
        delete el.dataset.ctaObserved;
        delete el.dataset.secObserved;
      });
    };
  }, [path]);

  return null;
}
