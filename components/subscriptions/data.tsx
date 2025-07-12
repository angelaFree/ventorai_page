import { ReactNode } from "react";

export interface Assistant {
  name: string;
  icon: ReactNode;
  description: string;
  features: string[];
}

export const assistantsData: Record<string, Assistant> = {
  flyerIA: {
    name: "FlyerIA",
    icon: <span>🎨</span>,
    description: "Especialista en Diseño Viral",
    features: [
      "Analiza millones de anuncios exitosos en Facebook Ads Library",
      "Identifica patrones visuales que generan más conversiones",
      "Adapta diseños a tu industria y audiencia específica",
    ],
  },
  videoIA: {
    name: "VideoIA",
    icon: <span>🎬</span>,
    description: "Creador de Contenido Viral",
    features: [
      "Analiza videos virales de TikTok, Instagram y YouTube",
      "Crea hooks irresistibles en los primeros 3 segundos",
      "Estructura narrativas que mantienen la atención",
    ],
  },
  textIA: {
    name: "TextIA",
    icon: <span>✍️</span>,
    description: "Copywriter Persuasivo",
    features: [
      "Estudia posts con millones de interacciones",
      "Aplica técnicas de copywriting probadas",
      "Adapta el tono a cada red social y audiencia",
    ],
  },
  adIA: {
    name: "AdIA",
    icon: <span>📊</span>,
    description: "Optimizador de Campañas",
    features: [
      "Monitorea tus campañas en tiempo real 24/7",
      "Ajusta presupuestos automáticamente según performance",
      "Identifica audiencias de alta conversión",
    ],
  },
  emailIA: {
    name: "EmailIA",
    icon: <span>📧</span>,
    description: "Maestro del Email Marketing",
    features: [
      "Analiza secuencias de email con mayor conversión",
      "Personaliza mensajes según comportamiento del usuario",
      "Optimiza timing y frecuencia de envíos",
    ],
  },
};

export const plans = {
  basic: {
    name: "BASIC",
    price: 19,
    color: "from-green-400 to-cyan-400",
    assistants: [assistantsData.textIA],
  },
  pro: {
    name: "PRO",
    price: 49,
    color: "from-orange-500 to-pink-500",
    assistants: [assistantsData.flyerIA, assistantsData.videoIA, assistantsData.textIA],
  },
  plus: {
    name: "PLUS",
    price: 99,
    color: "from-purple-500 to-blue-500",
    assistants: [
      assistantsData.flyerIA,
      assistantsData.videoIA,
      assistantsData.textIA,
      assistantsData.adIA,
      assistantsData.emailIA,
    ],
  },
};

export type PlanKey = keyof typeof plans;
