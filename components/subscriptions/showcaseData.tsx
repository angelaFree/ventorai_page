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
    iconSrc: "/avatar_maria.png",
    iconGradient: "from-orange-400 to-pink-400",
    name: "Flyer AI",
    tagline: "Generador de Flyers",
    taglineColor: "text-orange-500",
    badges: [
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
    highlight: { text: "PRO / PLUS", classes: "bg-yellow-400 text-black" },
    graphicSrc: "/window.svg",
  },
  {
    id: "angul",
    iconSrc: "/avatar_ana.png",
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
    graphicSrc: "/globe.svg",
  },
  {
    id: "copy",
    iconSrc: "/avatar_carlos.png",
    iconGradient: "from-green-400 to-cyan-400",
    name: "Copy AI",
    tagline: "Generador de Copys",
    taglineColor: "text-green-500",
    badges: [
      { label: "BASIC", gradient: "from-orange-400 to-pink-400" },
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
    highlight: { text: "BASIC / PRO / PLUS", classes: "bg-pink-400 text-white" },
    graphicSrc: "/file.svg",
  },
  {
    id: "face",
    iconSrc: "/avatar_ana.png",
    iconGradient: "from-red-400 to-orange-400",
    name: "Face AI",
    tagline: "Analizador de Face Ads",
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
    graphicSrc: "/next.svg",
  },
  {
    id: "email",
    iconSrc: "/avatar_maria.png",
    iconGradient: "from-indigo-400 to-purple-400",
    name: "Email AI",
    tagline: "Maestro del Email Marketing",
    taglineColor: "text-indigo-500",
    badges: [{ label: "PLUS", gradient: "from-cyan-400 to-purple-400" }],
    featureBg: "from-indigo-500 to-purple-500",
    bulletColor: "text-indigo-500",
    features: [
      "Analiza secuencias de email con mayor conversión",
      "Personaliza mensajes según comportamiento del usuario",
      "Optimiza timing y frecuencia de envíos",
    ],
    highlight: { text: "PLUS", classes: "bg-cyan-400 text-black" },
    graphicSrc: "/vercel.svg",
  },
];

