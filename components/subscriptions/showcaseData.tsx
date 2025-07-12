import { ReactNode } from "react";
import { Badge, Result, Highlight } from "./AssistantCard";
import { PlayIcon } from "../flyerIaLanding/icons";

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
  results: Result[];
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
    results: [
      { value: "+300%", label: "Engagement promedio", color: "text-orange-500" },
      { value: "85%", label: "Tasa de conversión", color: "text-pink-500" },
    ],
    highlight: { text: "¡Viral!", classes: "bg-yellow-400 text-black" },
    graphic: (
      <div className="bg-gradient-to-br from-orange-400 to-pink-400 rounded-3xl p-8 shadow-2xl">
        <div className="bg-white rounded-2xl p-6 mb-4">
          <div className="h-32 bg-gradient-to-r from-orange-300 to-pink-300 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-lg">BLACK FRIDAY</span>
          </div>
          <div className="text-center">
            <div className="font-bold text-gray-800">Descuento 70%</div>
            <div className="text-sm text-gray-600">Solo por tiempo limitado</div>
          </div>
        </div>
        <div className="text-center text-white">
          <div className="text-sm opacity-90">Ejemplo generado en 15 segundos</div>
        </div>
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
    results: [
      { value: "92%", label: "Retención promedio", color: "text-purple-500" },
      { value: "+500%", label: "Shares vs competencia", color: "text-blue-500" },
    ],
    highlight: { text: "Viral Ready", classes: "bg-green-400 text-black" },
    reverse: true,
    graphic: (
      <div className="bg-gradient-to-br from-purple-400 to-blue-400 rounded-3xl p-8 shadow-2xl">
        <div className="bg-black rounded-2xl aspect-video mb-4 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-blue-600/50"></div>
          <div className="relative text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <PlayIcon />
            </div>
            <div className="text-sm">Script + Storyboard</div>
          </div>
        </div>
        <div className="text-center text-white">
          <div className="text-sm opacity-90">Hook + Historia + CTA en segundos</div>
        </div>
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
    results: [
      { value: "+250%", label: "Engagement rate", color: "text-green-500" },
      { value: "78%", label: "Click-through rate", color: "text-cyan-500" },
    ],
    highlight: { text: "Trending", classes: "bg-pink-400 text-white" },
    graphic: (
      <div className="bg-gradient-to-br from-green-400 to-cyan-400 rounded-3xl p-8 shadow-2xl">
        <div className="bg-white rounded-2xl p-6 mb-4">
          <div className="space-y-3">
            <div className="h-3 bg-gray-200 rounded w-full"></div>
            <div className="h-3 bg-gray-200 rounded w-4/5"></div>
            <div className="h-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-full"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center text-xs">❤️</div>
              <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center text-xs">💬</div>
              <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-xs">📤</div>
            </div>
            <div className="text-xs text-gray-500">2.5K likes</div>
          </div>
        </div>
        <div className="text-center text-white">
          <div className="text-sm opacity-90">Post optimizado para máximo engagement</div>
        </div>
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
    results: [
      { value: "-60%", label: "Costo por conversión", color: "text-red-500" },
      { value: "4.2x", label: "ROAS promedio", color: "text-orange-500" },
    ],
    highlight: { text: "ROI Max", classes: "bg-green-400 text-black" },
    reverse: true,
    graphic: (
      <div className="bg-gradient-to-br from-red-400 to-orange-400 rounded-3xl p-8 shadow-2xl">
        <div className="bg-white rounded-2xl p-6 mb-4">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">↗️</div>
              <div className="text-xs text-gray-600">CTR +180%</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">💰</div>
              <div className="text-xs text-gray-600">CPC -45%</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500">🎯</div>
              <div className="text-xs text-gray-600">ROAS 4.2x</div>
            </div>
          </div>
          <div className="h-20 bg-gradient-to-r from-red-200 to-orange-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-700 font-semibold">Campaña Optimizada</span>
          </div>
        </div>
        <div className="text-center text-white">
          <div className="text-sm opacity-90">Optimización automática 24/7</div>
        </div>
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
    results: [
      { value: "68%", label: "Open rate promedio", color: "text-indigo-500" },
      { value: "+400%", label: "Revenue por email", color: "text-purple-500" },
    ],
    highlight: { text: "High Convert", classes: "bg-cyan-400 text-black" },
    graphic: (
      <div className="bg-gradient-to-br from-indigo-400 to-purple-400 rounded-3xl p-8 shadow-2xl">
        <div className="bg-white rounded-2xl p-6 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-400 rounded-full mr-3"></div>
              <div>
                <div className="font-bold text-sm">Tu Marca</div>
                <div className="text-xs text-gray-500">hace 2 min</div>
              </div>
            </div>
            <div className="text-green-500 text-xs font-bold">ABIERTO</div>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-gray-200 rounded w-full"></div>
            <div className="h-2 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded w-1/2 flex items-center justify-center">
              <span className="text-white text-xs font-bold">CTA</span>
            </div>
          </div>
        </div>
        <div className="text-center text-white">
          <div className="text-sm opacity-90">Secuencia personalizada automática</div>
        </div>
      </div>
    ),
  },
];

