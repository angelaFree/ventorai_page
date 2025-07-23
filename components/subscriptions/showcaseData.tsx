import { Badge, Highlight } from "./AssistantCard";

export interface ShowcaseItem {
  id: string;
  iconSrc: string;
  iconGradient: string;
  name: string;
  tagline: string;
  taglineColor: string;
  badges?: Badge[];
  featureBg: string;
  bulletColor: string;
  features: string[];
  highlight?: Highlight;
  reverse?: boolean;
  graphicSrc: string;
}

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "flyer",
    iconSrc: "/flyerai_avatar.png",
    iconGradient: "from-orange-400 to-pink-400",
    name: "Flyer AI",
    tagline: "Generador de Flyers",
    taglineColor: "text-orange-500",
    badges: [
      { label: "BASIC", gradient: "from-orange-400 to-pink-400" },
      { label: "PRO", gradient: "from-pink-400 to-cyan-400" },
      { label: "PLUS", gradient: "from-cyan-400 to-purple-400" },
    ],
    featureBg: "from-orange-500 to-pink-500",
    bulletColor: "text-orange-500",
    features: [
      "Genera diseños basados en anuncios virales",
      "Actualiza plantillas cada semana",
      "Optimiza cada pieza para tu nicho",
    ],
    highlight: { text: "BASIC / PRO / PLUS", classes: "bg-yellow-400 text-black" },
    graphicSrc: "/flyerai_ejemplo.png",
  },
  {
    id: "angul",
    iconSrc: "/angulai_avatar.png",
    iconGradient: "from-purple-400 to-blue-400",
    name: "Angul AI",
    tagline: "Estratega de Ventas",
    taglineColor: "text-purple-500",
    badges: [
      { label: "PRO", gradient: "from-pink-400 to-cyan-400" },
      { label: "PLUS", gradient: "from-cyan-400 to-purple-400" },
    ],
    featureBg: "from-purple-500 to-blue-500",
    bulletColor: "text-purple-500",
    features: [
      "Genera 5 títulos o enfoques ganadores",
      "Analiza tu producto y audiencia",
      "Propone ganchos persuasivos",
    ],
    highlight: { text: "PRO / PLUS", classes: "bg-green-400 text-black" },
    reverse: true,
    graphicSrc: "/angulai_ejemplo.png",
  },
  {
    id: "copy",
    iconSrc: "/copyai_avatar.png",
    iconGradient: "from-green-400 to-cyan-400",
    name: "Copy AI",
    tagline: "Generador de Copys",
    taglineColor: "text-green-500",
    badges: [
      { label: "PRO", gradient: "from-pink-400 to-cyan-400" },
      { label: "PLUS", gradient: "from-cyan-400 to-purple-400" },
    ],
    featureBg: "from-green-500 to-cyan-500",
    bulletColor: "text-green-500",
    features: [
      "Genera copys listos para publicar",
      "Utiliza técnicas de persuasión",
      "Adapta el tono a cada red social",
    ],
    highlight: {
      text: "PRO / PLUS",
      classes: "bg-pink-400 text-white",
    },
    graphicSrc: "/copyai_ejemplo.png",
  },
  {
    id: "face",
    iconSrc: "/faceai_avatar.png",
    iconGradient: "from-red-400 to-orange-400",
    name: "Face AI",
    tagline: "Analizador de Facebook Ads",
    taglineColor: "text-red-500",
    badges: [{ label: "PLUS", gradient: "from-cyan-400 to-purple-400" }],
    featureBg: "from-red-500 to-orange-500",
    bulletColor: "text-red-500",
    features: [
      "Analiza conjuntos de anuncios",
      "Interpreta métricas clave",
      "Recomienda acciones para optimizar",
    ],
    highlight: { text: "PLUS", classes: "bg-green-400 text-black" },
    reverse: true,
    graphicSrc: "/faceai_ejemplo.png",
  },
  {
    id: "product",
    iconSrc: "/productai_avatar.png",
    iconGradient: "from-yellow-400 to-teal-400",
    name: "Product AI",
    tagline: "Anuncios de Productos Físicos",
    taglineColor: "text-yellow-500",
    badges: [
      { label: "PRO", gradient: "from-pink-400 to-cyan-400" },
      { label: "PLUS", gradient: "from-cyan-400 to-purple-400" },
    ],
    featureBg: "from-yellow-500 to-teal-500",
    bulletColor: "text-yellow-500",
    features: [
      "Crea anuncios optimizados para ecommerce",
      "Diseña flyers y banners para productos",
      "Genera textos atractivos para vender",
    ],
    highlight: { text: "PRO / PLUS", classes: "bg-pink-400 text-white" },
    graphicSrc: "/productai_ejemplo.png",
  },
];
