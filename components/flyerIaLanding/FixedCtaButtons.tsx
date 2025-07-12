"use client";
import CountryPriceText from "./CountryPriceText";

interface FixedCtaButtonsProps {
  linkPagoHotmart: string;
  priceMap: Record<string, number>;
}

export default function FixedCtaButtons({ linkPagoHotmart, priceMap }: FixedCtaButtonsProps) {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <button
        type="button"
        onClick={() => window.open(linkPagoHotmart, "_blank")}
        className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-full shadow-2xl animate-pulse"
      >
        Comprar por <CountryPriceText prices={priceMap} />
      </button>
    </div>
  );
}
