import type { Metadata } from "next";
import { trAlternates } from "@/lib/i18n";
import Header from "@/components/Header";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import WarehouseGallery from "@/components/WarehouseGallery";
import TrustBar from "@/components/TrustBar";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import ServicesSection from "@/components/ServicesSection";
import CustomerJourneySection from "@/components/CustomerJourneySection";
import EcommerceFulfilmentSection from "@/components/EcommerceFulfilmentSection";
import ShopifyAmazonSection from "@/components/ShopifyAmazonSection";
import MintSoftSection from "@/components/MintSoftSection";
import WhoWeWorkWithSection from "@/components/WhoWeWorkWithSection";
import QuoteForm from "@/components/QuoteForm";
import FaqSection from "@/components/FaqSection";
import BlogInsightsSection from "@/components/BlogInsightsSection";
import Footer from "@/components/Footer";
import StickyWhatsappCta from "@/components/StickyWhatsappCta";

export const metadata: Metadata = { alternates: trAlternates("/") };

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <section aria-labelledby="key-pages-heading" className="mx-auto max-w-6xl px-4 py-10">
          <h2 id="key-pages-heading" className="mb-5 text-2xl font-bold text-[#0b2545]">İngiltere Depo, Fulfillment ve Lojistik Çözümlerimiz</h2>
          <nav aria-label="Önemli sayfalar" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: "/ingiltere-depo", label: "İngiltere Depo" },
              { href: "/londra-depo", label: "Londra Depo" },
              { href: "/ingiltere-depo-fiyatlari", label: "İngiltere Depo Fiyatları" },
              { href: "/palet-depolama", label: "Palet Depolama" },
              { href: "/e-ticaret-fulfillment", label: "E-Ticaret Fulfillment" },
              { href: "/ingiltere-e-ticaret-lojistigi", label: "E-Ticaret Lojistiği" },
              { href: "/amazon-prep-uk", label: "Amazon Prep UK (FBA)" },
              { href: "/turk-sirketleri-icin-ingiltere-depo", label: "Türk Şirketleri İçin İngiltere Depo" },
              { href: "/sektorler", label: "Sektörler" },
              { href: "/case-studies", label: "Vaka Çalışmaları" },
              { href: "/hakkimizda", label: "Hakkımızda" },
              { href: "/teklif-al", label: "Teklif Al" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg border border-slate-200 bg-white p-4 font-semibold text-[#0b2545] transition hover:border-[#e63946] hover:text-[#c1121f]">
                {item.label}
              </Link>
            ))}
          </nav>
        </section>
        <WarehouseGallery />
        <TrustBar />
        <ValuePropositionSection />
        <ServicesSection />
        <CustomerJourneySection />
        <EcommerceFulfilmentSection />
        <ShopifyAmazonSection />
        <MintSoftSection />
        <WhoWeWorkWithSection />
        <QuoteForm />
        <FaqSection />
        <BlogInsightsSection />
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
