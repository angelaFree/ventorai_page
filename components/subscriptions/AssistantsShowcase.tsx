"use client";

import { PlayIcon } from "../flyerIaLanding/icons";

export default function AssistantsShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
            Conoce a tu Equipo de Asistentes IA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada asistente tiene su personalidad, especialidad y forma única de trabajar para ti
          </p>
        </div>

        <div className="space-y-16">
          {/* FlyerIA */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-3xl mr-6 shadow-lg">
                  🎨
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-800">FlyerIA</h3>
                  <p className="text-orange-500 font-semibold">Especialista en Diseño Viral</p>
                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-400 to-cyan-400 text-white px-3 py-1 text-xs font-bold">
                      PRO
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-3 py-1 text-xs font-bold">
                      PLUS
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-6 mb-6">
                <h4 className="font-bold text-gray-800 mb-3">🧠 Cómo Trabaja:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Analiza millones de anuncios exitosos en Facebook Ads Library
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Identifica patrones visuales que generan más conversiones
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Adapta diseños a tu industria y audiencia específica
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-800 mb-3">📊 Resultados que Produce:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-black text-orange-500">+300%</div>
                    <div className="text-sm text-gray-600">Engagement promedio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-pink-500">85%</div>
                    <div className="text-sm text-gray-600">Tasa de conversión</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
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
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                  ¡Viral!
                </div>
              </div>
            </div>
          </div>

          {/* VideoIA */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
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
                <div className="absolute -top-4 -right-4 bg-green-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                  Viral Ready
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-3xl mr-6 shadow-lg">
                  🎬
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-800">VideoIA</h3>
                  <p className="text-purple-500 font-semibold">Creador de Contenido Viral</p>
                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-400 to-cyan-400 text-white px-3 py-1 text-xs font-bold">
                      PRO
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-3 py-1 text-xs font-bold">
                      PLUS
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-6 mb-6">
                <h4 className="font-bold text-gray-800 mb-3">🧠 Cómo Trabaja:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Analiza videos virales de TikTok, Instagram y YouTube
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Crea hooks irresistibles en los primeros 3 segundos
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Estructura narrativas que mantienen la atención
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-800 mb-3">📊 Resultados que Produce:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-black text-purple-500">92%</div>
                    <div className="text-sm text-gray-600">Retención promedio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-blue-500">+500%</div>
                    <div className="text-sm text-gray-600">Shares vs competencia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TextIA */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center text-3xl mr-6 shadow-lg">
                  ✍️
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-800">TextIA</h3>
                  <p className="text-green-500 font-semibold">Copywriter Persuasivo</p>
                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-400 to-pink-400 text-white px-3 py-1 text-xs font-bold">
                      BASIC
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-400 to-cyan-400 text-white px-3 py-1 text-xs font-bold">
                      PRO
                    </span>
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-3 py-1 text-xs font-bold">
                      PLUS
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-cyan-100 rounded-2xl p-6 mb-6">
                <h4 className="font-bold text-gray-800 mb-3">🧠 Cómo Trabaja:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Estudia posts con millones de interacciones
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Aplica técnicas de copywriting probadas
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Adapta el tono a cada red social y audiencia
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-800 mb-3">📊 Resultados que Produce:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-black text-green-500">+250%</div>
                    <div className="text-sm text-gray-600">Engagement rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-cyan-500">78%</div>
                    <div className="text-sm text-gray-600">Click-through rate</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
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
                        <div className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center text-xs">
                          ❤️
                        </div>
                        <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center text-xs">
                          💬
                        </div>
                        <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-xs">
                          📤
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">2.5K likes</div>
                    </div>
                  </div>
                  <div className="text-center text-white">
                    <div className="text-sm opacity-90">Post optimizado para máximo engagement</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-pink-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Trending
                </div>
              </div>
            </div>
          </div>

          {/* AdIA */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
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
                <div className="absolute -top-4 -right-4 bg-green-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                  ROI Max
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center text-3xl mr-6 shadow-lg">
                  📊
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-800">AdIA</h3>
                  <p className="text-red-500 font-semibold">Optimizador de Campañas</p>
                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-3 py-1 text-xs font-bold">
                      PLUS
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl p-6 mb-6">
                <h4 className="font-bold text-gray-800 mb-3">🧠 Cómo Trabaja:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Monitorea tus campañas en tiempo real 24/7
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Ajusta presupuestos automáticamente según performance
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Identifica audiencias de alta conversión
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-800 mb-3">📊 Resultados que Produce:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-black text-red-500">-60%</div>
                    <div className="text-sm text-gray-600">Costo por conversión</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-orange-500">4.2x</div>
                    <div className="text-sm text-gray-600">ROAS promedio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EmailIA */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-3xl mr-6 shadow-lg">
                  📧
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-800">EmailIA</h3>
                  <p className="text-indigo-500 font-semibold">Maestro del Email Marketing</p>
                  <div className="flex gap-2 mt-2">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-3 py-1 text-xs font-bold">
                      PLUS
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-6 mb-6">
                <h4 className="font-bold text-gray-800 mb-3">🧠 Cómo Trabaja:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Analiza secuencias de email con mayor conversión
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Personaliza mensajes según comportamiento del usuario
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Optimiza timing y frecuencia de envíos
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-800 mb-3">📊 Resultados que Produce:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-black text-indigo-500">68%</div>
                    <div className="text-sm text-gray-600">Open rate promedio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-purple-500">+400%</div>
                    <div className="text-sm text-gray-600">Revenue por email</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
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
                <div className="absolute -top-4 -right-4 bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                  High Convert
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-black mb-4">¿Listo para tu Equipo de Asistentes IA?</h3>
            <p className="text-xl mb-6 opacity-90">
              Cada uno especializado, todos trabajando para hacer crecer tu negocio
            </p>
            <button
              onClick={() => document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white text-gray-800 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Ver Planes y Precios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
