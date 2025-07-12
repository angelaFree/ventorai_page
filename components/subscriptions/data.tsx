import { ReactNode } from "react";

export interface Assistant {
  name: string;
  icon: ReactNode;
  description: string;
  features: string[];
}

export interface Plan {
  name: string;
  priceMap: Record<string, number>;
  color: string;
  assistants: Assistant[];
}

export const assistantsData: Record<string, Assistant> = {
  flyerAI: {
    name: "Flyer AI",
    icon: <span>🎨</span>,
    description: "Asistente Generador de Flyers",
    features: [
      "Genera flyers listos para vender",
      "Actualiza diseños con plantillas semanales",
      "Optimiza cada pieza para tu nicho",
    ],
  },
  angulAI: {
    name: "Angul AI",
    icon: <span>🎯</span>,
    description: "Asistente de Ángulos de Venta",
    features: [
      "Analiza tu producto o servicio",
      "Genera 5 títulos o enfoques ganadores",
      "Optimiza ganchos para tu audiencia",
    ],
  },
  copyAI: {
    name: "Copy AI",
    icon: <span>✍️</span>,
    description: "Asistente Generador de Copys",
    features: [
      "Redacta copys listos para publicar",
      "Aplica técnicas de persuasión",
      "Adapta el tono a cada red social",
    ],
  },
  faceAI: {
    name: "Face AI",
    icon: <span>📊</span>,
    description: "Asistente de Facebook Ads",
    features: [
      "Analiza conjuntos de anuncios",
      "Interpreta métricas clave",
      "Recomienda acciones de optimización",
    ],
  },
};

const basePriceMap = {
  US: 6.9,
  PE: 27.0,
  MX: 162.9,
  CO: 29.73,
  BO: 52.0,
};

const multiplyPriceMap = (ratio: number) => {
  const result: Record<string, number> = {};
  Object.entries(basePriceMap).forEach(([k, v]) => {
    result[k] = parseFloat((v * ratio).toFixed(2));
  });
  return result;
};

export const plans: Record<string, Plan> = {
  basic: {
    name: "BASIC",
    priceMap: basePriceMap,
    color: "from-green-400 to-cyan-400",
    assistants: [assistantsData.copyAI],
  },
  pro: {
    name: "PRO",
    priceMap: multiplyPriceMap(8.9 / 6.9),
    color: "from-orange-500 to-pink-500",
    assistants: [assistantsData.flyerAI, assistantsData.angulAI, assistantsData.copyAI],
  },
  plus: {
    name: "PLUS",
    priceMap: multiplyPriceMap(11.9 / 6.9),
    color: "from-purple-500 to-blue-500",
    assistants: [
      assistantsData.flyerAI,
      assistantsData.angulAI,
      assistantsData.copyAI,
      assistantsData.faceAI,
    ],
  },
};

export type PlanKey = keyof typeof plans;
