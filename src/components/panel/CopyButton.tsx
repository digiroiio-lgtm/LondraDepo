"use client";
import { useState } from "react";

/**
 * Copies to the clipboard either the text of the element with id `target` (a textarea) or a literal `value`.
 * `variant="chip"` renders a small pill (used for phone formats).
 */
export default function CopyButton({ target, value, label = "Kopyala", variant = "button", title }: { target?: string; value?: string; label?: string; variant?: "button" | "chip"; title?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      title={title}
      onClick={async () => {
        const el = target ? (document.getElementById(target) as HTMLTextAreaElement | null) : null;
        const text = value ?? el?.value;
        if (text == null) return;
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          if (el) {
            el.select();
            document.execCommand("copy");
          }
        }
        setDone(true);
        setTimeout(() => setDone(false), 2000);
      }}
      className={variant === "chip" ? "pnl-chip font-mono hover:bg-[#e4dfff] transition" : "pnl-btn-primary"}
    >
      <span aria-live="polite">{done ? "Kopyalandı ✓" : label}</span>
    </button>
  );
}
