import Link from "next/link";
import CookieSettingsButton from "./CookieSettingsButton";
import TrackedLink from "./TrackedLink";

const WHATSAPP = "https://wa.me/447554195190?text=Hello%2C%20I%27d%20like%20a%20warehousing%20quote.";
const TEL = "tel:+447554195190";

const services = [
  ["/en/uk-warehousing", "UK Warehousing"],
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
  ["/en/uk-storage-cost-calculator", "Storage Cost Calculator"],
  ["/en/container-arrival-planner", "Container Arrival Planner"],
  ["/en/case-studies", "Case Studies"],
  ["/en/blog", "Guides"],
  ["/en/contact", "Contact"],
  ["/en/request-a-quote", "Request a Quote"],
] as const;

export default function FooterEn() {
  return (
    <footer className="bg-[#0b2545] text-slate-300 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
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
          <div className="text-white font-semibold mb-3">Contact</div>
          <div className="space-y-3 text-sm">
            <p>Reach our UK operations team on WhatsApp or by phone. English and Turkish spoken.</p>
            <TrackedLink
              kind="whatsapp"
              source="footer"
              href={WHATSAPP}
              className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-5 py-3 rounded-full transition w-fit"
            >
              Get a Quote on WhatsApp
            </TrackedLink>
            <TrackedLink kind="phone" source="footer" href={TEL} className="flex items-center gap-2 text-slate-300 hover:text-white transition">
              📞 +44 7554 195190
            </TrackedLink>
            <p className="text-xs text-slate-400">Office: +44 1268 203 283 · 07:45–17:30 UK time</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 text-center text-xs text-slate-400 space-y-2">
        <p>© {new Date().getFullYear()} LondraDepo.com. UK warehousing and fulfilment. All rights reserved.</p>
        <p className="text-slate-400">
          Arca Trade Group Ltd · Registered in England &amp; Wales · Company No: 13247691 · VAT: GB353315322
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/en/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="/en/cookie-policy" className="hover:text-white transition">Cookie Policy</Link>
          <Link href="/en/terms-and-conditions" className="hover:text-white transition">Terms and Conditions</Link>
          <a href="https://www.linkedin.com/company/arcatradegroup/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
          <a href="https://bifa.org/members/arca-trade-group-ltd/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">BIFA Member</a>
          <CookieSettingsButton label="Cookie Settings" />
        </div>
      </div>
    </footer>
  );
}
