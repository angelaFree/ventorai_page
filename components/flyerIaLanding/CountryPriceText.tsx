import React, { useState, useEffect } from "react";
import getCountryData from "@/utils/getCountryData";

interface CountryPriceTextProps {
  prices: number | Record<string, number>;
}

export default function CountryPriceText({ prices }: CountryPriceTextProps) {
  // Ahora “prices” ya no es any
  const [priceValue, setPriceValue] = useState<string | null>(null);
  const [symbol, setSymbol] = useState<string>("$");
  const [currency, setCurrency] = useState<string>("USD");

  useEffect(() => {
    async function fetchAndSet() {
      try {
        const response = await fetch("/api/country");
        const result = await response.json();
        const countryCode = result.country || "US";

        // Obtiene datos del país
        const countryInfo = getCountryData(countryCode) as any;
        const symbolLocal = countryInfo["signo-moneda"] || "$";
        const currencyLocal = countryInfo.moneda || "USD";

        // Determina precio
        const raw =
          typeof prices === "object"
            ? prices[countryCode] ?? prices.US ?? 0
            : prices;
        // Si raw es string lo parseamos, si no lo dejamos
        const num = typeof raw === "string" ? parseFloat(raw) : raw;
        // Aseguramos que siempre sea número
        const val = Number(num) || 0;

        setPriceValue(val.toFixed(2));
        setSymbol(symbolLocal);
        setCurrency(currencyLocal);
      } catch (error) {
        console.error("Error fetching country or price:", error);
        // Fallback en caso de error
        setPriceValue(
          typeof prices === "number"
            ? prices.toFixed(2)
            : prices.US?.toFixed(2) || "0.00"
        );
        setSymbol("$");
        setCurrency("USD");
      }
    }
    fetchAndSet();
  }, [prices]);

  if (priceValue === null) {
    return null;
  }

  return (
    <span>
      {symbol}
      {priceValue}
    </span>
  );
}

