"use client";

import Link from "next/link";
import { useState } from "react";

const TEL = "tel:+447554195190";

const navLinks = [
  { href: "/#hizmetler", label: "Hizmetler" },
  { href: "/ingiltere-fulfillment", label: "Fulfillment" },
  { href: "/palet-depolama", label: "Palet Depo" },
  { href: "/amazon-prep-uk", label: "Amazon Prep" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[#0b2545] font-extrabold text-xl tracking-tight">
            Londra<span className="text-[#e63946]">Depo</span>.com
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[#0b2545] transition">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={TEL}
            className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white text-sm font-semibold px-4 py-2.5 rounded-full transition"
          >
            <svg className="w-4 h-4 fill-white flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.47.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
            </svg>
            <span className="hidden sm:inline">+44 7554 195190</span>
            <span className="sm:hidden">Ara</span>
          </a>

          <button
            className="md:hidden p-2 rounded-lg text-[#0b2545] hover:bg-slate-100 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-slate-200 bg-white px-4 py-3 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2.5 px-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-[#0b2545] transition"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
