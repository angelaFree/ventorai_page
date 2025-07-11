// src/utils/getCountryData.js
import data from "../db/products.json";

export default function getCountryData(countryCode) {
  if (!data || !data.data || !data.data.DATA_PAIS) {
    return {}; // Si no hay datos, devuelve un objeto vacío
  }

  // Buscar los datos del país
  const countryData = data.data.DATA_PAIS.find((pais) => pais["codigo-pais"] === countryCode);

  // Si no encuentra el país, devuelve valores por defecto
  if (!countryData) {
    return {
      "codigo-pais": "US",
      "moneda": "dolares",
      "signo-moneda": "$",
      "metodos-logos": [], // Devolver un array por defecto
    };
  }

  // Convertir metodos-logos a un array si es una cadena
  const logosArray = countryData["metodos-logos"] ? countryData["metodos-logos"].split(", ") : [];

  return {
    ...countryData,
    "metodos-logos": logosArray // Devolver los logos como un array
  };
}
