/** Offer markup for the published pallet storage rate (£3.50 + VAT per pallet per week), shared by TR and EN pages. */
const NAME = { tr: "Palet depolama", en: "Pallet storage", pl: "Składowanie palet", de: "Palettenlagerung" } as const;
const UNIT = { tr: "palet başına haftalık", en: "pallet per week", pl: "paleta tygodniowo", de: "Palette pro Woche" } as const;

export function palletOffer(lang: keyof typeof NAME) {
  return {
    "@type": "Offer",
    name: NAME[lang],
    priceCurrency: "GBP",
    price: 3.5,
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: 3.5,
      priceCurrency: "GBP",
      valueAddedTaxIncluded: false,
      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitText: UNIT[lang] },
    },
  };
}
