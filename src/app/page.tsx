import Header from "@/components/Header";
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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
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
