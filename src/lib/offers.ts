/** Offer markup for the published pallet storage rate (£3.50 + VAT per pallet per week), shared by TR and EN pages. */
export function palletOffer(lang: "tr" | "en" | "pl") {
  return {
    "@type": "Offer",
    name: lang === "tr" ? "Palet depolama" : lang === "pl" ? "Składowanie palet" : "Pallet storage",
    priceCurrency: "GBP",
    price: 3.5,
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: 3.5,
      priceCurrency: "GBP",
      valueAddedTaxIncluded: false,
      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitText: lang === "tr" ? "palet başına haftalık" : lang === "pl" ? "paleta tygodniowo" : "pallet per week" },
    },
  };
}
