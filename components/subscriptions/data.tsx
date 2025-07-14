export interface Assistant {
  name: string;
  iconSrc: string;
  description: string;
  features: string[];
}

export interface Plan {
  name: string;
  priceMap: Record<string, number>;
  color: string;
  assistants: Assistant[];
  hotmartLink: string;
}

export const assistantsData: Record<string, Assistant> = {
  flyerAI: {
    name: "Flyer AI",
    iconSrc: "/flyerai_avatar.png",
    description: "Asistente Generador de Flyers",
    features: [
      "Genera flyers listos para vender",
      "Actualiza diseños con plantillas semanales",
      "Optimiza cada pieza para tu nicho",
    ],
  },
  angulAI: {
    name: "Angul AI",
    iconSrc: "/angulai_avatar.png",
    description: "Asistente de Ángulos de Venta",
    features: [
      "Analiza tu producto o servicio",
      "Genera 5 títulos o enfoques ganadores",
      "Optimiza ganchos para tu audiencia",
    ],
  },
  copyAI: {
    name: "Copy AI",
    iconSrc: "/copyai_avatar.png",
    description: "Asistente Generador de Copys",
    features: [
      "Redacta copys listos para publicar",
      "Aplica técnicas de persuasión",
      "Adapta el tono a cada red social",
    ],
  },
  faceAI: {
    name: "Face AI",
    iconSrc: "/faceai_avatar.png",
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
    assistants: [assistantsData.flyerAI],
    hotmartLink: "https://pay.hotmart.com/G100299066R?off=ue2rhtds&checkoutMode=10",
  },
  pro: {
    name: "PRO",
    priceMap: multiplyPriceMap(8.9 / 6.9),
    color: "from-orange-500 to-pink-500",
    assistants: [assistantsData.flyerAI, assistantsData.angulAI, assistantsData.copyAI],
    hotmartLink: "https://pay.hotmart.com/G100299066R?off=7cxi2ny6&checkoutMode=10",
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
    hotmartLink: "https://pay.hotmart.com/G100299066R?off=8cq60olv&checkoutMode=10",
  },
};

export type PlanKey = keyof typeof plans;
