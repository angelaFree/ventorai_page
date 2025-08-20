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
    name: "VendeCursos AI",
    iconSrc: "/flyerai_avatar.png",
    description: "Asistente para anuncios de cursos online",
    features: [
      "Genera anuncios listos para vender cursos",
      "Actualiza diseños con plantillas semanales",
      "Optimiza cada pieza para tu nicho educativo",
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
  productAI: {
    name: "Product AI",
    iconSrc: "/productai_avatar.png",
    description: "Asistente para anuncios de productos físicos",
    features: [
      "Crea flyers optimizados para ecommerce",
      "Diseña banners para tiendas y catálogos",
      "Genera textos atractivos para tus listados",
    ],
  },
  ebookAI: {
    name: "Ebook AI",
    iconSrc: "/ebookai_avatar.png",
    description:
      "Dame el título de tu ebook y obtendrás portadas impactantes y contenido promocional",
    features: [
      "Genera portadas profesionales y llamativas",
      "Obtén mockups de tu ebook al instante",
      "Crea textos promocionales listos para publicar",
    ],
  },
};

const basePriceMap = {
  US: 4.9,
  PE: 19.17,
  MX: 115.7,
  CO: 21.12,
  BO: 36.93,
};

const proPriceMap = {
  US: 6.32,
  PE: 24.73,
  MX: 149.19,
  CO: 27.23,
  BO: 47.63,
};

const plusPriceMap = {
  US: 8.45,
  PE: 33.04,
  MX: 199.43,
  CO: 36.44,
  BO: 63.64,
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
    priceMap: proPriceMap,
    color: "from-orange-500 to-pink-500",
    assistants: [
      assistantsData.flyerAI,
      assistantsData.angulAI,
      assistantsData.copyAI,
      assistantsData.ebookAI,
      assistantsData.productAI,
    ],
    hotmartLink: "https://pay.hotmart.com/G100299066R?off=7cxi2ny6&checkoutMode=10",
  },
  plus: {
    name: "PLUS",
    priceMap: plusPriceMap,
    color: "from-purple-500 to-blue-500",
    assistants: [
      assistantsData.flyerAI,
      assistantsData.angulAI,
      assistantsData.copyAI,
      assistantsData.faceAI,
      assistantsData.ebookAI,
      assistantsData.productAI,
    ],
    hotmartLink: "https://pay.hotmart.com/G100299066R?off=8cq60olv&checkoutMode=10",
  },
};

export type PlanKey = keyof typeof plans;
