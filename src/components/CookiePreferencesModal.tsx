"use client";

import { useEffect, useRef } from "react";
import type { CookiePrefs } from "./CookieConsent";

const MODAL_TEXT = {
  tr: {
    title: "Çerez Tercihleri", close: "Kapat",
    intro: "Hangi çerezlere izin vermek istediğinizi seçin. Tercihleriniz kaydedilir ve istediğiniz zaman footer alanındaki “Çerez Ayarları” bağlantısından değiştirilebilir.",
    necessary: "Zorunlu Çerezler", always: "Her Zaman Aktif",
    necessaryText: "Sitenin temel işlevleri için gereklidir. Oturum yönetimi, güvenlik ve form koruması gibi kritik işlevleri kapsar. Devre dışı bırakılamaz.",
    analytics: "Analitik Çerezler",
    analyticsText: "Site kullanımını anlamamıza ve geliştirmemize yardımcı olan anonim istatistiksel veriler toplar. Ziyaretçi sayısı, popüler sayfalar ve kullanım süresi gibi bilgiler içerir.",
    analyticsAria: "Analitik çerezleri aç/kapat",
    marketing: "Pazarlama Çerezleri",
    marketingText: "İlgi alanlarınıza uygun reklamlar göstermek ve kampanya etkinliğini ölçmek için kullanılır. Reklam platformlarıyla (ör. Google Ads, Meta) paylaşılabilir.",
    marketingAria: "Pazarlama çerezlerini aç/kapat",
    save: "Tercihleri Kaydet", cancel: "Vazgeç",
  },
  en: {
    title: "Cookie Preferences", close: "Close",
    intro: "Choose which cookies you allow. Your choice is saved and can be changed at any time via “Cookie Settings” in the footer.",
    necessary: "Necessary Cookies", always: "Always Active",
    necessaryText: "Required for the site to work, including session handling, security and form protection. These cannot be switched off.",
    analytics: "Analytics Cookies",
    analyticsText: "Collect anonymous statistics that help us understand and improve the site, such as visitor numbers, popular pages and time on site.",
    analyticsAria: "Toggle analytics cookies",
    marketing: "Marketing Cookies",
    marketingText: "Used to show relevant adverts and measure campaign performance. May be shared with advertising platforms such as Google Ads and Meta.",
    marketingAria: "Toggle marketing cookies",
    save: "Save Preferences", cancel: "Cancel",
  },
} as const;

interface Props {
  open: boolean;
  preferences: CookiePrefs;
  onChange: (prefs: CookiePrefs) => void;
  onSave: () => void;
  onClose: () => void;
  lang?: "tr" | "en";
}

export default function CookiePreferencesModal({
  open,
  preferences,
  onChange,
  onSave,
  onClose,
  lang = "tr",
}: Props) {
  const t = MODAL_TEXT[lang];
  const dialogRef = useRef<HTMLDivElement>(null);

  // Trap focus and close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    // Prevent body scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-modal-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        ref={dialogRef}
        className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-slate-700">
          <h2
            id="cookie-modal-title"
            className="text-lg font-extrabold text-[#0b2545] dark:text-white"
          >
            {t.title}
          </h2>
          <button
            onClick={onClose}
            aria-label={t.close}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-5">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.intro}
          </p>

          {/* Necessary */}
          <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-sm text-[#0b2545] dark:text-white">
                  {t.necessary}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">
                  {t.always}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {t.necessaryText}
              </p>
            </div>
            <div className="mt-0.5 flex-shrink-0">
              <div
                aria-disabled="true"
                aria-checked="true"
                role="switch"
                className="w-11 h-6 rounded-full bg-green-500 cursor-not-allowed relative flex-shrink-0"
              >
                <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow" />
              </div>
            </div>
          </div>

          {/* Analytics */}
          <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="flex-1">
              <span className="font-semibold text-sm text-[#0b2545] dark:text-white block mb-1">
                {t.analytics}
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {t.analyticsText}
              </p>
            </div>
            <button
              role="switch"
              aria-checked={preferences.analytics}
              aria-label={t.analyticsAria}
              onClick={() => onChange({ ...preferences, analytics: !preferences.analytics })}
              className={`mt-0.5 flex-shrink-0 w-11 h-6 rounded-full transition-colors duration-200 relative focus:outline-none focus:ring-2 focus:ring-[#0b2545] focus:ring-offset-2 ${
                preferences.analytics ? "bg-[#0b2545]" : "bg-slate-300 dark:bg-slate-600"
              }`}
            >
              <span
                className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${
                  preferences.analytics ? "right-1" : "left-1"
                }`}
              />
            </button>
          </div>

          {/* Marketing */}
          <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="flex-1">
              <span className="font-semibold text-sm text-[#0b2545] dark:text-white block mb-1">
                {t.marketing}
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {t.marketingText}
              </p>
            </div>
            <button
              role="switch"
              aria-checked={preferences.marketing}
              aria-label={t.marketingAria}
              onClick={() => onChange({ ...preferences, marketing: !preferences.marketing })}
              className={`mt-0.5 flex-shrink-0 w-11 h-6 rounded-full transition-colors duration-200 relative focus:outline-none focus:ring-2 focus:ring-[#0b2545] focus:ring-offset-2 ${
                preferences.marketing ? "bg-[#0b2545]" : "bg-slate-300 dark:bg-slate-600"
              }`}
            >
              <span
                className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${
                  preferences.marketing ? "right-1" : "left-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onSave}
            className="flex-1 bg-[#0b2545] hover:bg-[#0d2f5a] text-white font-bold py-3 px-6 rounded-full transition text-sm"
          >
            {t.save}
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold py-3 px-6 rounded-full transition text-sm"
          >
            {t.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}
