import { ImageResponse } from "next/og";

/** Default share image for every page (LinkedIn, WhatsApp, X, Facebook). Built once at build time. */
export const alt = "LondraDepo.com: UK warehousing, fulfilment and distribution near London, Essex";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0b2545", color: "#ffffff", padding: "72px 80px" }}>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, letterSpacing: -1 }}>
          <span>Londra</span>
          <span style={{ color: "#e63946" }}>Depo</span>
          <span>.com</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1 }}>UK warehousing, fulfilment and distribution</div>
          <div style={{ fontSize: 32, color: "#cbd5e1" }}>Rayleigh, Essex · 13 miles from London Gateway · Pallets from £3.50 + VAT a week</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#94a3b8" }}>Operated by Arca Trade Group Ltd · BIFA member</div>
      </div>
    ),
    size,
  );
}
