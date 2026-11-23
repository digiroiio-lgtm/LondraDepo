import type { Metadata } from "next";
import "../globals.css";
import "./panel.css";
import { geist } from "../font";

/** Private panel root layout: no analytics, no cookie banner, never indexed. */
export const metadata: Metadata = {
  title: "LondraDepo Panel",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export default function PanelRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={geist.variable}>
      <body className="pnl font-sans antialiased">{children}</body>
    </html>
  );
}
