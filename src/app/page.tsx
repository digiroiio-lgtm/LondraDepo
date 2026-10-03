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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "İngiltere'de depo hizmetiniz hangi firmalar için uygun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Türkiye'den İngiltere'ye ihracat yapan markalar, e-ticaret satıcıları, toptancılar, gıda üreticileri ve ithalatçılar için uygundur.",
      },
    },
    {
      "@type": "Question",
      name: "İngiltere fulfillment hizmeti veriyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Sipariş hazırlama, paketleme ve sevk süreçlerine uygun fulfillment desteği sunuyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Paletli ürün kabul ediyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. İngiltere palet depolama ihtiyacı olan işletmelere uygun çözümler sağlıyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Amazon, Etsy ve Shopify satıcıları için uygun musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. İngiltere Amazon prep, sipariş hazırlama ve dağıtım operasyonlarına uygun yapı sunuyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "İngiltere deponuz hangi bölgelere hizmet veriyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Essex merkezli operasyonumuz Londra, Birmingham, Manchester ve tüm İngiltere'ye dağıtım yapabilmektedir.",
      },
    },
    {
      "@type": "Question",
      name: "Türkiye'den ürün gönderebilir miyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Türkiye'deki tedarikçinizden veya üretim noktanızdan ürünlerinizi doğrudan depo adresimize gönderebilirsiniz. Gümrükleme sürecinde koordinasyon desteği de sağlıyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Pick and pack hizmeti sunuyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Sipariş geldiğinde depo ekibimiz ürünü stoktan toplar, paketler, kargo etiketi oluşturur ve müşteriye sevk eder.",
      },
    },
    {
      "@type": "Question",
      name: "İngiltere'de kendi depomu kurmadan satış yapabilir miyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. LondraDepo aracılığıyla kendi depo yatırımı yapmadan UK depolama ve fulfillment altyapısından yararlanabilirsiniz.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
