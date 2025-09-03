import React from "react";

interface CountryPriceTextProps {
  prices: number | Record<string, number>;
}

// Modo USD únicamente: se comenta la lógica por país
// para que siempre muestre el precio en dólares.
export default function CountryPriceText({ prices }: CountryPriceTextProps) {
  const raw =
    typeof prices === "object"
      ? (prices as Record<string, number>).US ?? 0
      : prices;

  const num = typeof raw === "string" ? parseFloat(raw as string) : raw;
  const val = Number(num) || 0;
  const priceValue = val.toFixed(2);

  return <span>${priceValue}</span>;
}

/*
// Implementación original con detección de país (comentada a petición):
import React, { useState, useEffect } from "react";
import getCountryData from "@/utils/getCountryData";

export default function CountryPriceTextOriginal({ prices }: CountryPriceTextProps) {
  const [priceValue, setPriceValue] = useState<string | null>(null);
  const [symbol, setSymbol] = useState<string>("$");
  const [currency, setCurrency] = useState<string>("USD");

  useEffect(() => {
    async function fetchAndSet() {
      try {
        let countryCode = sessionStorage.getItem("countryCode");
        if (!countryCode) {
          const response = await fetch("/api/country");
          const result = await response.json();
          countryCode = result.country || "US";
          sessionStorage.setItem("countryCode", countryCode as string);
        }

        const code = countryCode || "US";
        const countryInfo = getCountryData(code) as any;

        const isPricesObject = typeof prices === "object";
        const hasLocalPrice = isPricesObject && (prices as any)[code] !== undefined;

        const symbolLocal = hasLocalPrice
          ? countryInfo["signo-moneda"] || "$"
          : "$";
        const currencyLocal = hasLocalPrice
          ? countryInfo.moneda || "USD"
          : "USD";

        const raw = isPricesObject
          ? (prices as any)[code] ?? (prices as any).US ?? 0
          : prices as number;
        const num = typeof raw === "string" ? parseFloat(raw) : raw;
        const val = Number(num) || 0;

        setPriceValue(val.toFixed(2));
        setSymbol(symbolLocal);
        setCurrency(currencyLocal);
      } catch (error) {
        console.error("Error fetching country or price:", error);
        setPriceValue(
          typeof prices === "number"
            ? prices.toFixed(2)
            : (prices as any).US?.toFixed(2) || "0.00"
        );
        setSymbol("$");
        setCurrency("USD");
      }
    }
    fetchAndSet();
  }, [prices]);

  if (priceValue === null) return null;
  return (
    <span>
      {symbol}
      {priceValue}
    </span>
  );
}
*/
