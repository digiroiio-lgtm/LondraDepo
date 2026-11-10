"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CookiePreferencesModal from "./CookiePreferencesModal";

export interface CookiePrefs {
  analytics: boolean;
  marketing: boolean;
  decided: boolean;
}

const BANNER_TEXT = {
  tr: {
    aria: "Çerez kullanım bildirimi",
    title: "Çerez Kullanımı",
    body: "Bu sitenin düzgün çalışmasını sağlamak ve kullanımını analiz ederek geliştirmek amacıyla sınırlı sayıda çerez kullanıyoruz. Analitik ve pazarlama çerezleri yalnızca onay vermeniz halinde aktif olur. Tercihinizi istediğiniz zaman footer alanındaki “Çerez Ayarları” bağlantısından değiştirebilirsiniz.",
    cookie: "Çerez Politikası",
    cookieHref: "/cookie-policy",
    and: "ve",
    privacy: "Gizlilik Politikası",
    privacyHref: "/privacy-policy",
    tail: " sayfalarını inceleyebilirsiniz.",
    prefs: "Tercihler",
    reject: "Tümünü Reddet",
    accept: "Tümünü Kabul Et",
  },
  en: {
    aria: "Cookie notice",
    title: "Cookies",
    body: "We use a small number of cookies to keep this site working and to understand how it is used. Analytics and marketing cookies are only activated with your consent. You can change your choice at any time via “Cookie Settings” in the footer. See our",
    cookie: "Cookie Policy",
    cookieHref: "/en/cookie-policy",
    and: "and",
    privacy: "Privacy Policy",
    privacyHref: "/en/privacy-policy",
    tail: ".",
    prefs: "Preferences",
    reject: "Reject All",
    accept: "Accept All",
  },
} as const;

const STORAGE_KEY = "londradepo_cookie_consent";

const DEFAULT_PREFS: CookiePrefs = {
  analytics: false,
  marketing: false,
  decided: false,
};

function readStorage(): CookiePrefs | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CookiePrefs) : null;
  } catch {
    return null;
  }
}

function writeStorage(prefs: CookiePrefs): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // localStorage might be blocked
  }
}

function dispatchConsentChange(prefs: CookiePrefs): void {
  window.dispatchEvent(new CustomEvent<CookiePrefs>("consentChange", { detail: prefs }));
}

export default function CookieConsent({ lang = "tr" }: { lang?: "tr" | "en" }) {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>(DEFAULT_PREFS);
  const [modalPrefs, setModalPrefs] = useState<CookiePrefs>(DEFAULT_PREFS);

  // Hydration-safe mount
  useEffect(() => {
    setMounted(true);
    const stored = readStorage();
    if (!stored || !stored.decided) {
      setShowBanner(true);
    } else {
      setPrefs(stored);
    }
  }, []);

  // Listen for footer "Çerez Ayarları" trigger
  useEffect(() => {
    const handleOpen = () => {
      const stored = readStorage() ?? DEFAULT_PREFS;
      setModalPrefs(stored);
      setShowModal(true);
    };
    window.addEventListener("openCookiePreferences", handleOpen);
    return () => window.removeEventListener("openCookiePreferences", handleOpen);
  }, []);

  const acceptAll = () => {
    const updated: CookiePrefs = { analytics: true, marketing: true, decided: true };
    writeStorage(updated);
    setPrefs(updated);
    dispatchConsentChange(updated);
    setShowBanner(false);
  };

  const rejectAll = () => {
    const updated: CookiePrefs = { analytics: false, marketing: false, decided: true };
    writeStorage(updated);
    setPrefs(updated);
    dispatchConsentChange(updated);
    setShowBanner(false);
  };

  const openPreferences = () => {
    const stored = readStorage() ?? DEFAULT_PREFS;
    setModalPrefs(stored);
    setShowModal(true);
  };

  const savePreferences = () => {
    const updated: CookiePrefs = { ...modalPrefs, decided: true };
    writeStorage(updated);
    setPrefs(updated);
    dispatchConsentChange(updated);
    setShowModal(false);
    setShowBanner(false);
  };

  if (!mounted) return null;
  const t = BANNER_TEXT[lang];

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label={t.aria}
          className="fixed bottom-0 left-0 right-0 z-[9998] bg-[#0b2545] text-white shadow-2xl border-t border-white/10"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-start">
              {/* Text */}
              <div className="flex-1 min-w-0">
                <h2 className="text-base font-extrabold mb-2 text-white">{t.title}</h2>
                <p className="text-sm text-white/75 leading-relaxed">
                  {t.body}{" "}
                  <Link href={t.cookieHref} className="text-white/90 underline hover:text-white transition">
                    {t.cookie}
                  </Link>{" "}
                  {t.and}{" "}
                  <Link href={t.privacyHref} className="text-white/90 underline hover:text-white transition">
                    {t.privacy}
                  </Link>
                  {t.tail}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2 flex-shrink-0">
                <button
                  onClick={openPreferences}
                  className="px-5 py-2.5 rounded-full border border-white/30 text-sm font-semibold text-white hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0b2545]"
                >
                  {t.prefs}
                </button>
                <button
                  onClick={rejectAll}
                  className="px-5 py-2.5 rounded-full border border-white/30 text-sm font-semibold text-white hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0b2545]"
                >
                  {t.reject}
                </button>
                <button
                  onClick={acceptAll}
                  className="px-5 py-2.5 rounded-full bg-white text-[#0b2545] text-sm font-bold hover:bg-white/90 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0b2545]"
                >
                  {t.accept}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      <CookiePreferencesModal
        open={showModal}
        preferences={modalPrefs}
        onChange={setModalPrefs}
        onSave={savePreferences}
        onClose={() => setShowModal(false)}
        lang={lang}
      />
    </>
  );
}
