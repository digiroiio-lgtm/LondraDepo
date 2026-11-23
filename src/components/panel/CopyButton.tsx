"use client";
import { useState } from "react";

/** Copies the text of the element with the given id (a textarea) to the clipboard. */
export default function CopyButton({ target, label = "Kopyala" }: { target: string; label?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        const el = document.getElementById(target) as HTMLTextAreaElement | null;
        if (!el) return;
        try {
          await navigator.clipboard.writeText(el.value);
        } catch {
          el.select();
          document.execCommand("copy");
        }
        setDone(true);
        setTimeout(() => setDone(false), 2500);
      }}
      className="bg-[#d62839] hover:bg-[#c1121f] text-white rounded-full px-6 py-2 text-sm font-semibold"
    >
      <span aria-live="polite">{done ? "Kopyalandı ✓" : label}</span>
    </button>
  );
}
