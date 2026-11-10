"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useForm } from "@formspree/react";
import { trackFormStart, trackQuoteSubmit } from "@/lib/gtag";
import { QUOTE_SERVICES, type QuoteService } from "@/content/en/cta";

const FORMSPREE_ID = "xoejvawy";

export const PRODUCT_CATEGORIES = [
  "Food & FMCG (ambient)",
  "Packaging & catering supplies",
  "Automotive & industrial parts",
  "Textiles & apparel",
  "Homeware, furniture & bulky goods",
  "Electronics",
  "Health & beauty",
  "Other",
] as const;

const PALLET_BANDS = ["1–10 pallets", "11–50 pallets", "51–200 pallets", "200+ pallets", "Cartons / parcels only", "Not sure yet"] as const;
const ORDER_BANDS = ["Under 100", "100–500", "500–2,000", "2,000+", "Not sure yet"] as const;
const COUNTRIES = [
  "United Kingdom", "Turkey", "Netherlands", "Germany", "France", "Italy", "Spain", "Poland", "Ireland",
  "Other EU country", "United States", "Canada", "United Arab Emirates", "Saudi Arabia", "China", "India", "Other",
] as const;

const TRACKING_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "from"] as const;

type Fields = {
  name: string;
  company: string;
  email: string;
  country: string;
  service: QuoteService | "";
  category: string;
  pallets: string;
  orders: string;
  phone: string;
  website: string;
  notes: string;
  consent: boolean;
};

const EMPTY: Fields = {
  name: "", company: "", email: "", country: "", service: "", category: "",
  pallets: "", orders: "", phone: "", website: "", notes: "", consent: false,
};

const NEEDS_ORDERS: ReadonlyArray<QuoteService> = ["fulfilment", "amazon-prep"];

export default function QuoteFormEn({ defaultService, formId = "en_request_a_quote" }: { defaultService?: QuoteService; formId?: string } = {}) {
  const [f, setF] = useState<Fields>({ ...EMPTY, service: defaultService ?? "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [tracking, setTracking] = useState<Record<string, string>>({});
  const [state, submit] = useForm(FORMSPREE_ID);
  const started = useRef(false);

  // Read service preset and attribution from the URL on the client (keeps the page static).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const preset = params.get("service");
    if (preset && preset in QUOTE_SERVICES) setF((x) => ({ ...x, service: preset as QuoteService }));
    // Calculator hand-off: map a pallet count to the storage band.
    const p = Number(params.get("pallets"));
    if (p > 0) {
      const band = p <= 10 ? PALLET_BANDS[0] : p <= 50 ? PALLET_BANDS[1] : p <= 200 ? PALLET_BANDS[2] : PALLET_BANDS[3];
      setF((x) => ({ ...x, pallets: band, notes: x.notes || `Calculator estimate: ${p} pallets.` }));
    }
    // Planner hand-off: a short plan summary for the notes field.
    const note = params.get("note");
    if (note) setF((x) => ({ ...x, notes: note.slice(0, 600) }));
    const t: Record<string, string> = {};
    for (const k of TRACKING_KEYS) {
      const v = params.get(k);
      if (v) t[k] = v.slice(0, 200);
    }
    if (document.referrer) t.referrer = document.referrer.slice(0, 300);
    setTracking(t);
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      trackQuoteSubmit({ service: f.service, product_category: f.category, country: f.country, pallet_band: f.pallets });
    }
    // Fire once on success only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.succeeded]);

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => {
    if (!started.current) {
      started.current = true;
      trackFormStart(formId);
    }
    setF((x) => ({ ...x, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };

  const showOrders = f.service !== "" && NEEDS_ORDERS.includes(f.service);

  function validate() {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!f.name.trim()) e.name = "Please enter your full name.";
    if (!f.company.trim()) e.company = "Please enter your business name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Please enter a valid business email.";
    if (!f.country) e.country = "Please select your country.";
    if (!f.service) e.service = "Please select the service you need.";
    if (!f.category) e.category = "Please select a product category.";
    if (!f.pallets) e.pallets = "Please select an estimate.";
    if (showOrders && !f.orders) e.orders = "Please select your monthly order volume.";
    if (!f.consent) e.consent = "Please confirm so we can contact you about your enquiry.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    await submit({
      _subject: `New EN quote request: ${f.company} (${f.country})`,
      form: formId,
      page_lang: "en",
      page_path: window.location.pathname,
      name: f.name,
      company: f.company,
      email: f.email,
      country: f.country,
      service: f.service ? QUOTE_SERVICES[f.service] : "",
      product_category: f.category,
      pallets: f.pallets,
      monthly_orders: showOrders ? f.orders : "",
      phone: f.phone,
      website: f.website,
      notes: f.notes,
      consent: "Agreed to be contacted about this enquiry (privacy policy shown)",
      ...tracking,
    });
  }

  if (state.succeeded) {
    return (
      <div role="status" className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <h2 className="text-2xl font-bold text-[#0b2545] mb-3">Thank you, your enquiry has been sent</h2>
        <p className="text-slate-700 mb-2">Our warehouse team will review your requirements and contact you by email.</p>
        <p className="text-slate-700">
          Need to talk sooner? Message us on{" "}
          <a href="https://wa.me/447554195190" className="font-semibold text-green-700 underline" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>{" "}
          or call +44 7554 195190.
        </p>
      </div>
    );
  }

  const input = "w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0b2545]";
  const label = "block text-sm font-semibold text-slate-700 mb-1.5";
  const err = (k: keyof Fields) => errors[k] && <p id={`${formId}-${k}-error`} className="mt-1 text-xs text-red-600">{errors[k]}</p>;
  const aria = (k: keyof Fields) => ({ "aria-invalid": Boolean(errors[k]), "aria-describedby": errors[k] ? `${formId}-${k}-error` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      <div>
        <label htmlFor={`${formId}-name`} className={label}>Full name *</label>
        <input id={`${formId}-name`} autoComplete="name" className={input} value={f.name} onChange={(e) => set("name", e.target.value)} {...aria("name")} />
        {err("name")}
      </div>
      <div>
        <label htmlFor={`${formId}-company`} className={label}>Business name *</label>
        <input id={`${formId}-company`} autoComplete="organization" className={input} value={f.company} onChange={(e) => set("company", e.target.value)} {...aria("company")} />
        {err("company")}
      </div>
      <div>
        <label htmlFor={`${formId}-email`} className={label}>Business email *</label>
        <input id={`${formId}-email`} type="email" autoComplete="email" className={input} value={f.email} onChange={(e) => set("email", e.target.value)} {...aria("email")} />
        {err("email")}
      </div>
      <div>
        <label htmlFor={`${formId}-country`} className={label}>Country *</label>
        <select id={`${formId}-country`} className={input} value={f.country} onChange={(e) => set("country", e.target.value)} {...aria("country")}>
          <option value="">Select…</option>
          {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
        </select>
        {err("country")}
      </div>
      <div>
        <label htmlFor={`${formId}-service`} className={label}>Service needed *</label>
        <select id={`${formId}-service`} className={input} value={f.service} onChange={(e) => set("service", e.target.value as QuoteService)} {...aria("service")}>
          <option value="">Select…</option>
          {(Object.keys(QUOTE_SERVICES) as QuoteService[]).map((k) => <option key={k} value={k}>{QUOTE_SERVICES[k]}</option>)}
        </select>
        {err("service")}
      </div>
      <div>
        <label htmlFor={`${formId}-category`} className={label}>Product category *</label>
        <select id={`${formId}-category`} className={input} value={f.category} onChange={(e) => set("category", e.target.value)} {...aria("category")}>
          <option value="">Select…</option>
          {PRODUCT_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
        {err("category")}
      </div>
      <div>
        <label htmlFor={`${formId}-pallets`} className={label}>Estimated storage *</label>
        <select id={`${formId}-pallets`} className={input} value={f.pallets} onChange={(e) => set("pallets", e.target.value)} {...aria("pallets")}>
          <option value="">Select…</option>
          {PALLET_BANDS.map((c) => <option key={c}>{c}</option>)}
        </select>
        {err("pallets")}
      </div>
      {showOrders ? (
        <div>
          <label htmlFor={`${formId}-orders`} className={label}>Monthly orders *</label>
          <select id={`${formId}-orders`} className={input} value={f.orders} onChange={(e) => set("orders", e.target.value)} {...aria("orders")}>
            <option value="">Select…</option>
            {ORDER_BANDS.map((c) => <option key={c}>{c}</option>)}
          </select>
          {err("orders")}
        </div>
      ) : (
        <div className="hidden sm:block" aria-hidden="true" />
      )}
      <div>
        <label htmlFor={`${formId}-phone`} className={label}>Phone / WhatsApp <span className="font-normal text-slate-500">(optional)</span></label>
        <input id={`${formId}-phone`} type="tel" autoComplete="tel" className={input} value={f.phone} onChange={(e) => set("phone", e.target.value)} />
      </div>
      <div>
        <label htmlFor={`${formId}-website`} className={label}>Website <span className="font-normal text-slate-500">(optional)</span></label>
        <input id={`${formId}-website`} type="url" autoComplete="url" className={input} value={f.website} onChange={(e) => set("website", e.target.value)} placeholder="https://" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={`${formId}-notes`} className={label}>Anything else we should know? <span className="font-normal text-slate-500">(optional)</span></label>
        <textarea id={`${formId}-notes`} rows={4} className={input} value={f.notes} onChange={(e) => set("notes", e.target.value)} placeholder="e.g. container sizes, arrival port, SKUs, special handling" />
      </div>
      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-sm text-slate-700">
          <input type="checkbox" className="mt-1 h-4 w-4" checked={f.consent} onChange={(e) => set("consent", e.target.checked)} {...aria("consent")} />
          <span>
            I agree that LondraDepo (Arca Trade Group Ltd) may use these details to respond to my enquiry, as described in the{" "}
            <Link href="/en/privacy-policy" className="underline">Privacy Policy</Link>. *
          </span>
        </label>
        {err("consent")}
      </div>
      <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
        <button type="submit" disabled={state.submitting} className="bg-[#d62839] hover:bg-[#c1121f] disabled:opacity-60 text-white font-semibold px-8 py-3 rounded-full transition">
          {state.submitting ? "Sending…" : "Request my quote"}
        </button>
        {state.errors && <p role="alert" className="text-sm text-red-600">Something went wrong. Please try again or message us on WhatsApp.</p>}
      </div>
    </form>
  );
}
