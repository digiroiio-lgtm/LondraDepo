"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackCtaClick, trackPhoneClick, trackWhatsappClick } from "@/lib/gtag";

type Kind = "whatsapp" | "phone" | "cta" | "booking";

/** Anchor that reports WhatsApp, phone and quote-CTA clicks to GA4 (consent-gated). */
export default function TrackedLink({
  href,
  kind,
  source,
  className,
  children,
}: {
  href: string;
  kind: Kind;
  source: string;
  className?: string;
  children: ReactNode;
}) {
  const onClick = () => {
    if (kind === "whatsapp") trackWhatsappClick(source);
    else if (kind === "phone") trackPhoneClick(source);
    else if (kind === "booking") trackCtaClick("book_call", source);
    else trackCtaClick(href, source);
  };
  if (kind === "cta") {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  const external = kind === "whatsapp" || kind === "booking";
  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      data-tracked="1"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
