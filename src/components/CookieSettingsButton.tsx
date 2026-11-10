"use client";

export default function CookieSettingsButton({ label = "Çerez Ayarları" }: { label?: string }) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("openCookiePreferences"));
  };

  return (
    <button
      onClick={handleClick}
      className="hover:text-white transition underline-offset-2 hover:underline"
    >
      {label}
    </button>
  );
}
