import { ReactNode } from "react";
import { Badge, Highlight } from "./AssistantCard";

export interface ShowcaseItem {
  id: string;
  icon: ReactNode;
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
  graphic: ReactNode;
}

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "flyer",
    icon: <span>🎨</span>,
    iconGradient: "from-orange-400 to-pink-400",
    name: "Flyer AI",
    tagline: "Generador de Flyers",
    taglineColor: "text-orange-500",
    badges: [
      { label: "PRO", gradient: "from-pink-400 to-cyan-400" },
      { label: "PLUS", gradient: "from-cyan-400 to-purple-400" },
    ],
    featureBg: "from-orange-100 to-pink-100",
    bulletColor: "text-orange-500",
    features: [
      "Genera diseños basados en anuncios virales",
      "Actualiza plantillas cada semana",
      "Optimiza cada pieza para tu nicho",
    ],
    highlight: { text: "PRO / PLUS", classes: "bg-yellow-400 text-black" },
    graphic: (
      <div className="bg-gradient-to-br from-orange-400 to-pink-400 rounded-3xl p-8 shadow-2xl flex justify-center">
        <img src="/window.svg" alt="Flyer AI" className="w-40 h-40 object-contain" />
      </div>
    ),
  },
  {
    id: "angul",
    icon: <span>🎬</span>,
    iconGradient: "from-purple-400 to-blue-400",
    name: "Angul AI",
    tagline: "Estratega de Ventas",
    taglineColor: "text-purple-500",
    badges: [
      { label: "PRO", gradient: "from-pink-400 to-cyan-400" },
      { label: "PLUS", gradient: "from-cyan-400 to-purple-400" },
    ],
    featureBg: "from-purple-100 to-blue-100",
    bulletColor: "text-purple-500",
    features: [
      "Genera 5 títulos o enfoques ganadores",
      "Analiza tu producto y audiencia",
      "Propone ganchos persuasivos",
    ],
    highlight: { text: "PRO / PLUS", classes: "bg-green-400 text-black" },
    reverse: true,
    graphic: (
      <div className="bg-gradient-to-br from-purple-400 to-blue-400 rounded-3xl p-8 shadow-2xl flex justify-center">
        <img src="/globe.svg" alt="Angul AI" className="w-40 h-40 object-contain" />
      </div>
    ),
  },
  {
    id: "copy",
    icon: <span>✍️</span>,
    iconGradient: "from-green-400 to-cyan-400",
    name: "Copy AI",
    tagline: "Generador de Copys",
    taglineColor: "text-green-500",
    badges: [
      { label: "BASIC", gradient: "from-orange-400 to-pink-400" },
      { label: "PRO", gradient: "from-pink-400 to-cyan-400" },
      { label: "PLUS", gradient: "from-cyan-400 to-purple-400" },
    ],
    featureBg: "from-green-100 to-cyan-100",
    bulletColor: "text-green-500",
    features: [
      "Genera copys listos para publicar",
      "Utiliza técnicas de persuasión",
      "Adapta el tono a cada red social",
    ],
    highlight: { text: "BASIC / PRO / PLUS", classes: "bg-pink-400 text-white" },
    graphic: (
      <div className="bg-gradient-to-br from-green-400 to-cyan-400 rounded-3xl p-8 shadow-2xl flex justify-center">
        <img src="/file.svg" alt="Copy AI" className="w-40 h-40 object-contain" />
      </div>
    ),
  },
  {
    id: "face",
    icon: <span>📊</span>,
    iconGradient: "from-red-400 to-orange-400",
    name: "Face AI",
    tagline: "Analizador de Face Ads",
    taglineColor: "text-red-500",
    badges: [{ label: "PLUS", gradient: "from-cyan-400 to-purple-400" }],
    featureBg: "from-red-100 to-orange-100",
    bulletColor: "text-red-500",
    features: [
      "Analiza conjuntos de anuncios",
      "Interpreta métricas clave",
      "Recomienda acciones para optimizar",
    ],
    highlight: { text: "PLUS", classes: "bg-green-400 text-black" },
    reverse: true,
    graphic: (
      <div className="bg-gradient-to-br from-red-400 to-orange-400 rounded-3xl p-8 shadow-2xl flex justify-center">
        <img src="/next.svg" alt="Face AI" className="w-40 h-40 object-contain" />
      </div>
    ),
  },
  {
    id: "email",
    icon: <span>📧</span>,
    iconGradient: "from-indigo-400 to-purple-400",
    name: "Email AI",
    tagline: "Maestro del Email Marketing",
    taglineColor: "text-indigo-500",
    badges: [{ label: "PLUS", gradient: "from-cyan-400 to-purple-400" }],
    featureBg: "from-indigo-100 to-purple-100",
    bulletColor: "text-indigo-500",
    features: [
      "Analiza secuencias de email con mayor conversión",
      "Personaliza mensajes según comportamiento del usuario",
      "Optimiza timing y frecuencia de envíos",
    ],
    highlight: { text: "PLUS", classes: "bg-cyan-400 text-black" },
    graphic: (
      <div className="bg-gradient-to-br from-indigo-400 to-purple-400 rounded-3xl p-8 shadow-2xl flex justify-center">
        <img src="/vercel.svg" alt="Email AI" className="w-40 h-40 object-contain" />
      </div>
    ),
  },
];

