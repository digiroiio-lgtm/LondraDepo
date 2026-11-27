"use client";

import { useCallback, useEffect, useRef } from "react";
import { trackEvent, trackFormStart, trackQuoteSubmit } from "@/lib/gtag";

type Params = Record<string, string | number | undefined>;

/** "qf-email" / "tr_home_quote-company" → "email" / "company". */
const fieldName = (el: Element) => {
  const raw = (el as HTMLInputElement).name || el.id || "";
  return raw.split("-").pop() || raw;
};

/**
 * Form funnel for GA4: form_view → form_start → form_field_complete → form_submit_attempt →
 * form_error (validation / send) → generate_lead, plus form_abandon when the visitor leaves after starting.
 * Attach `ref` to the <form>; call start() on the first change, invalid(fields) when validation fails,
 * sendError() when the send fails and success(details) once it succeeded. Field values are never sent.
 */
export function useFormTracking(formId: string) {
  const ref = useRef<HTMLFormElement | null>(null);
  const s = useRef({ viewed: false, startedAt: 0, done: new Set<string>(), order: [] as string[], last: "", submitted: false, abandoned: false });

  const start = useCallback(() => {
    if (s.current.startedAt) return;
    s.current.startedAt = Date.now();
    trackFormStart(formId);
  }, [formId]);

  const secs = () => (s.current.startedAt ? Math.round((Date.now() - s.current.startedAt) / 1000) : 0);

  const invalid = useCallback((fields: string[]) => {
    if (!fields.length) return;
    trackEvent("form_error", { event_category: "conversion", form_id: formId, error_type: "validation", field_name: fields.slice(0, 5).join(","), error_count: fields.length });
  }, [formId]);

  const sendError = useCallback(() => {
    trackEvent("form_error", { event_category: "conversion", form_id: formId, error_type: "send" });
  }, [formId]);

  const success = useCallback((details: Params = {}) => {
    s.current.submitted = true;
    trackQuoteSubmit({ form_id: formId, time_to_submit_s: secs(), fields_done: s.current.done.size, ...details });
  }, [formId]);

  useEffect(() => {
    const form = ref.current;
    if (!form) return;
    const st = s.current;

    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting) && !st.viewed) {
        st.viewed = true;
        trackEvent("form_view", { event_category: "conversion", form_id: formId });
        io.disconnect();
      }
    }, { threshold: 0.5 });
    io.observe(form);

    const fields = () => [...form.querySelectorAll("input,select,textarea")].filter((el) => !["hidden", "submit", "button"].includes((el as HTMLInputElement).type));
    const onFocusOut = (e: FocusEvent) => {
      const el = e.target as HTMLInputElement;
      if (!el || !("value" in el)) return;
      const filled = el.type === "checkbox" || el.type === "radio" ? el.checked : String(el.value ?? "").trim() !== "";
      const name = fieldName(el);
      if (!name || !filled) return;
      st.last = name;
      if (st.done.has(name)) return;
      st.done.add(name);
      const index = fields().indexOf(el) + 1;
      trackEvent("form_field_complete", { event_category: "conversion", form_id: formId, field_name: name, field_index: index });
    };
    const onFocusIn = (e: FocusEvent) => {
      const name = fieldName(e.target as Element);
      if (name) st.last = name;
    };
    const onSubmit = () => trackEvent("form_submit_attempt", { event_category: "conversion", form_id: formId, fields_done: st.done.size, time_on_form_s: secs() });
    // Left the page / tab (or navigated away in the app) after starting, without a successful send.
    const abandon = () => {
      if (!st.startedAt || st.submitted || st.abandoned) return;
      st.abandoned = true;
      trackEvent("form_abandon", { event_category: "conversion", form_id: formId, last_field: st.last || "none", fields_done: st.done.size, time_on_form_s: secs() }, { beacon: true });
    };
    const onVisibility = () => { if (document.visibilityState === "hidden") abandon(); };

    form.addEventListener("focusout", onFocusOut);
    form.addEventListener("focusin", onFocusIn);
    form.addEventListener("submit", onSubmit, { capture: true });
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", abandon);
    return () => {
      io.disconnect();
      form.removeEventListener("focusout", onFocusOut);
      form.removeEventListener("focusin", onFocusIn);
      form.removeEventListener("submit", onSubmit, { capture: true });
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", abandon);
      abandon();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formId]);

  return { ref, start, invalid, sendError, success };
}
