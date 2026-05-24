import Link from "next/link";

const TEL = "tel:+447554195190";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[#0b2545] font-extrabold text-xl tracking-tight">
            Londra<span className="text-[#e63946]">Depo</span>.com
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/#hizmetler" className="hover:text-[#0b2545] transition">Hizmetler</Link>
          <Link href="/ingiltere-fulfillment" className="hover:text-[#0b2545] transition">Fulfillment</Link>
          <Link href="/palet-depolama" className="hover:text-[#0b2545] transition">Palet Depo</Link>
          <Link href="/amazon-prep-uk" className="hover:text-[#0b2545] transition">Amazon Prep</Link>
          <Link href="/case-studies" className="hover:text-[#0b2545] transition">Case Studies</Link>
          <Link href="/blog" className="hover:text-[#0b2545] transition">Blog</Link>
          <Link href="/iletisim" className="hover:text-[#0b2545] transition">İletişim</Link>
        </nav>

        <a
          href={TEL}
          className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#c1121f] text-white text-sm font-semibold px-4 py-2.5 rounded-full transition flex-shrink-0"
        >
          <svg className="w-4 h-4 fill-white flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.47.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
          </svg>
          <span className="hidden sm:inline">+44 7554 195190</span>
          <span className="sm:hidden">Ara</span>
        </a>
      </div>
    </header>
  );
}
