"use client";

export default function CookieSettingsButton() {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("openCookiePreferences"));
  };

  return (
    <button
      onClick={handleClick}
      className="hover:text-white transition underline-offset-2 hover:underline"
    >
      Çerez Ayarları
    </button>
  );
}
