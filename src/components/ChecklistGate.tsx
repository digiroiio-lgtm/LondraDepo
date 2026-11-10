"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useForm } from "@formspree/react";
import { trackFormStart, trackQuoteSubmit } from "@/lib/gtag";

const FORMSPREE_ID = "xoejvawy";

const TEXT = {
  en: {
    h: "Download the UK Import Checklist (PDF)",
    intro: "A printable, tick-box version of this guide: set-up, products, documents, clearance and warehouse steps on two A4 pages.",
    name: "Full name", company: "Business name", email: "Business email",
    consent: "I agree that LondraDepo (Arca Trade Group Ltd) may contact me about UK warehousing, as described in the",
    privacy: "Privacy Policy", privacyHref: "/en/privacy-policy",
    submit: "Get the checklist", sending: "Sending…",
    done: "Thank you. Your checklist is ready:", download: "Download the PDF",
    errName: "Please enter your name.", errEmail: "Please enter a valid email.", errConsent: "Please confirm to receive the checklist.",
    fail: "Something went wrong. Please try again.",
    file: "/downloads/uk-import-checklist.pdf",
  },
  tr: {
    h: "İngiltere İthalat Kontrol Listesini İndirin (PDF)",
    intro: "Bu rehberin yazdırılabilir, işaretlenebilir hali: hazırlık, ürün, belge, gümrükleme ve depo adımları iki A4 sayfada.",
    name: "Ad soyad", company: "Firma adı", email: "E-posta",
    consent: "LondraDepo'nun (Arca Trade Group Ltd) İngiltere depolama hakkında benimle iletişime geçmesini kabul ediyorum. Ayrıntılar:",
    privacy: "Gizlilik Politikası", privacyHref: "/privacy-policy",
    submit: "Kontrol listesini al", sending: "Gönderiliyor…",
    done: "Teşekkürler. Kontrol listeniz hazır:", download: "PDF'i indir",
    errName: "Lütfen adınızı girin.", errEmail: "Lütfen geçerli bir e-posta girin.", errConsent: "Devam etmek için lütfen onaylayın.",
    fail: "Bir sorun oluştu. Lütfen tekrar deneyin.",
    file: "/downloads/ingiltere-ithalat-kontrol-listesi.pdf",
  },
} as const;

/** Per-checklist overrides; everything else comes from TEXT. */
const VARIANTS = {
  import: { en: {}, tr: {} },
  fba: {
    en: {
      h: "Download the Amazon FBA Prep Checklist (PDF)",
      intro: "A printable, tick-box version: before arrival, unit preparation, cartons and delivery to Amazon UK on one A4 page.",
      file: "/downloads/amazon-fba-prep-checklist.pdf",
    },
    tr: {
      h: "Amazon FBA Prep Kontrol Listesini İndirin (PDF)",
      intro: "Yazdırılabilir, işaretlenebilir hali: ürünler gelmeden önce, ürün hazırlığı, koliler ve Amazon UK'ye teslimat tek A4 sayfada.",
      file: "/downloads/amazon-fba-prep-kontrol-listesi.pdf",
    },
  },
} as const;

type Variant = keyof typeof VARIANTS;

export default function ChecklistGate({ lang, variant = "import" }: { lang: "en" | "tr"; variant?: Variant }) {
  const t = { ...TEXT[lang], ...VARIANTS[variant][lang] };
  const leadType = variant === "fba" ? "fba_prep_checklist" : "import_checklist";
  const formId = `${lang}_${leadType}`;
  const [f, setF] = useState({ name: "", company: "", email: "", consent: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [tracking, setTracking] = useState<Record<string, string>>({});
  const [state, submit] = useForm(FORMSPREE_ID);
  const started = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tr: Record<string, string> = {};
    for (const k of ["utm_source", "utm_medium", "utm_campaign", "gclid"]) {
      const v = params.get(k);
      if (v) tr[k] = v.slice(0, 200);
    }
    if (document.referrer) tr.referrer = document.referrer.slice(0, 300);
    setTracking(tr);
  }, []);

  useEffect(() => {
    if (state.succeeded) trackQuoteSubmit({ form_id: formId, lead_type: leadType });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.succeeded]);

  const set = <K extends keyof typeof f>(k: K, v: (typeof f)[K]) => {
    if (!started.current) {
      started.current = true;
      trackFormStart(formId);
    }
    setF((x) => ({ ...x, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e: Record<string, string> = {};
    if (!f.name.trim()) e.name = t.errName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = t.errEmail;
    if (!f.consent) e.consent = t.errConsent;
    setErrors(e);
    if (Object.keys(e).length) return;
    await submit({
      _subject: `${variant === "fba" ? "FBA prep checklist" : lang === "en" ? "Import checklist" : "İthalat kontrol listesi"} download: ${f.company || f.name}`,
      form: formId,
      lead_type: leadType,
      page_lang: lang,
      page_path: window.location.pathname,
      name: f.name,
      company: f.company,
      email: f.email,
      consent: "Agreed to receive the checklist and be contacted (privacy policy shown)",
      ...tracking,
    });
  }

  const input = "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0b2545]";
  const label = "block text-sm font-semibold text-slate-700 mb-1.5";
  const err = (k: string) => errors[k] && <div id={`${formId}-${k}-error`} className="mt-1 text-xs text-red-600">{errors[k]}</div>;

  return (
    <div id="checklist" className="my-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 not-prose">
      <div className="text-xl font-bold text-[#0b2545] mb-2">📋 {t.h}</div>
      <div className="text-sm text-slate-600 mb-5">{t.intro}</div>
      {state.succeeded ? (
        <div role="status" className="rounded-xl border border-green-200 bg-green-50 p-5 text-sm text-slate-700">
          {t.done}{" "}
          <a href={t.file} download className="font-semibold text-green-700 underline" data-tracked="1">
            {t.download}
          </a>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor={`${formId}-name`} className={label}>{t.name} *</label>
            <input id={`${formId}-name`} autoComplete="name" className={input} value={f.name} onChange={(e) => set("name", e.target.value)} aria-invalid={Boolean(errors.name)} />
            {err("name")}
          </div>
          <div>
            <label htmlFor={`${formId}-company`} className={label}>{t.company}</label>
            <input id={`${formId}-company`} autoComplete="organization" className={input} value={f.company} onChange={(e) => set("company", e.target.value)} />
          </div>
          <div>
            <label htmlFor={`${formId}-email`} className={label}>{t.email} *</label>
            <input id={`${formId}-email`} type="email" autoComplete="email" className={input} value={f.email} onChange={(e) => set("email", e.target.value)} aria-invalid={Boolean(errors.email)} />
            {err("email")}
          </div>
          <div className="sm:col-span-3">
            <label className="flex items-start gap-3 text-sm text-slate-700">
              <input type="checkbox" className="mt-1 h-4 w-4" checked={f.consent} onChange={(e) => set("consent", e.target.checked)} aria-invalid={Boolean(errors.consent)} />
              <span>
                {t.consent} <Link href={t.privacyHref} className="underline">{t.privacy}</Link>. *
              </span>
            </label>
            {err("consent")}
          </div>
          <div className="sm:col-span-3 flex flex-col sm:flex-row sm:items-center gap-4">
            <button type="submit" disabled={state.submitting} className="bg-[#d62839] hover:bg-[#c1121f] disabled:opacity-60 text-white font-semibold px-8 py-3 rounded-full transition">
              {state.submitting ? t.sending : t.submit}
            </button>
            {state.errors && <div role="alert" className="text-sm text-red-600">{t.fail}</div>}
          </div>
        </form>
      )}
    </div>
  );
}
