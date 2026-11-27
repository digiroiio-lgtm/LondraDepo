import Emoji from "@/components/visual/Emoji";
import FooterLegal from "@/components/FooterLegal";
import Link from "next/link";
import TrackedLink from "./TrackedLink";

const WHATSAPP = "https://wa.me/447554195190?text=Hello%2C%20I%27d%20like%20a%20warehousing%20quote.";
const TEL = "tel:+447554195190";

const services = [
  ["/en/uk-warehousing", "UK Warehousing"],
  ["/en/3pl-uk", "3PL Warehouse UK"],
  ["/en/uk-import-logistics", "UK Import Logistics"],
  ["/en/container-unloading", "Container Unloading"],
  ["/en/london-warehousing", "London Warehousing"],
  ["/en/pallet-storage", "Pallet Storage"],
  ["/en/storage-services", "Storage Services"],
  ["/en/uk-fulfilment", "UK Fulfilment"],
  ["/en/ecommerce-fulfilment", "Ecommerce Fulfilment"],
  ["/en/uk-ecommerce-logistics", "UK Ecommerce Logistics"],
  ["/en/pick-and-pack", "Pick and Pack"],
  ["/en/shopify-fulfilment-uk", "Shopify Fulfilment UK"],
  ["/en/amazon-fulfilment-uk", "Amazon Fulfilment UK"],
  ["/en/amazon-seller-warehousing-uk", "Amazon FBM Warehousing"],
  ["/en/amazon-prep-uk", "Amazon Prep UK"],
  ["/en/amazon-uk-fulfilment-centres", "Amazon UK Fulfilment Centres"],
  ["/en/uk-customs-clearance", "Customs Clearance Support"],
  ["/en/cargo-handling", "Cargo Handling"],
  ["/en/uk-distribution", "UK Distribution"],
] as const;

const company = [
  ["/en/about-us", "About Us"],
  ["/en/essex-warehouse", "Essex Warehouse"],
  ["/en/uk-market-entry", "UK Market Entry"],
  ["/en/industries", "Industries"],
  ["/en/industries/food-packaging", "Packaging & Catering Supplies"],
  ["/en/industries/automotive-parts", "Automotive Parts"],
  ["/en/uk-warehousing-for-turkish-exporters", "For Turkish Exporters"],
  ["/en/locations/port-to-warehouse-logistics", "Port-to-Warehouse Logistics"],
  ["/en/london-gateway-tilbury-warehousing", "London Gateway & Tilbury"],
  ["/en/felixstowe-port-warehousing", "Felixstowe Port Warehousing"],
  ["/en/uk-warehousing-benefits", "Why a UK Warehouse"],
  ["/en/uk-warehousing-pricing", "Pricing"],
  ["/en/container-arrival-planner", "Container Arrival Planner"],
  ["/en/case-studies", "Case Studies"],
  ["/en/blog", "Guides"],
  ["/en/contact", "Contact"],
  ["/en/request-a-quote", "Request a Quote"],
] as const;

const guides: [string, string][] = [
  ["/en/blog/uk-warehousing-guide", "UK warehousing guide"],
  ["/en/blog/how-to-choose-a-uk-3pl", "How to choose a UK 3PL"],
  ["/en/blog/uk-warehousing-prices-2026", "UK warehousing prices 2026"],
  ["/en/blog/uk-import-costs", "UK import costs"],
  ["/en/blog/what-is-uk-fulfilment", "What is UK fulfilment?"],
  ["/en/blog/amazon-prep-uk-guide", "Amazon prep guide"],
  ["/en/uk-storage-cost-calculator", "Storage cost calculator"],
  ["/en/cbm-pallet-calculator", "CBM and pallet calculator"],
  ["/en/shipping-container-types", "Shipping container types"],
];

export default function FooterEn() {
  return (
    <footer className="bg-[#0b2545] text-slate-300 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        <div>
          <div className="text-white font-bold text-xl mb-3">
            Londra<span className="text-red-400">Depo</span>.com
          </div>
          <p className="text-sm leading-relaxed">
            UK warehousing, fulfilment and distribution from Rayleigh, Essex, near London. Operated by Arca Trade Group, which also
            provides international freight and customs clearance.
          </p>
          <p className="text-sm leading-relaxed mt-3">
            Unit 19 Arterial Park, Arterial Road, Rayleigh, Essex SS6 7FY, United Kingdom
          </p>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">Services</div>
          <ul className="space-y-2 text-sm">
            {services.map(([href, label]) => (
              <li key={href}><Link href={href} className="hover:text-white transition">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-sm">
            {company.map(([href, label]) => (
              <li key={href}><Link href={href} className="hover:text-white transition">{label}</Link></li>
            ))}
            <li><Link href="/" className="hover:text-white transition" lang="tr" hrefLang="tr-TR">Türkçe site</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">Guides and tools</div>
          <ul className="space-y-2 text-sm">
            {guides.map(([href, label]) => (
              <li key={href}><Link href={href} className="hover:text-white transition">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold mb-3">Contact</div>
          <div className="space-y-3 text-sm">
            <p>Reach our UK operations team on WhatsApp, by phone or by email. English and Turkish spoken.</p>
            <TrackedLink
              kind="whatsapp"
              source="footer"
              href={WHATSAPP}
              className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-5 py-3 rounded-full transition w-fit"
            >
              Get a Quote on WhatsApp
            </TrackedLink>
            <TrackedLink kind="phone" source="footer" href={TEL} className="flex items-center gap-2 text-slate-300 hover:text-white transition">
              <Emoji e="📞" /> +44 7554 195190
            </TrackedLink>
            <TrackedLink kind="email" source="footer" href="mailto:support@londradepo.com" className="flex items-center gap-2 text-slate-300 hover:text-white transition">
              <Emoji e="📧" /> support@londradepo.com
            </TrackedLink>
            <p className="text-xs text-slate-400">Office: +44 1268 203 283 · 07:45–17:30 UK time</p>
          </div>
        </div>
      </div>

      <FooterLegal lang="en" intro="LondraDepo.com. UK warehousing and fulfilment." />
    </footer>
  );
}
