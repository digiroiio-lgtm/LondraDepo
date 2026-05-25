import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WarehouseGallery from "@/components/WarehouseGallery";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import LocationsSeoSection from "@/components/LocationsSeoSection";
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
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <IndustriesSection />
        <LocationsSeoSection />
        <BlogInsightsSection />
        <FaqSection />
      </main>
      <Footer />
      <StickyWhatsappCta />
    </>
  );
}
