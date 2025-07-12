"use client";

import AssistantCard from "./AssistantCard";
import { showcaseItems } from "./showcaseData";

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
          {showcaseItems.map((item) => (
            <AssistantCard
              key={item.id}
              iconSrc={item.iconSrc}
              iconGradient={item.iconGradient}
              name={item.name}
              tagline={item.tagline}
              taglineColor={item.taglineColor}
              badges={item.badges}
              featureBg={item.featureBg}
              bulletColor={item.bulletColor}
              features={item.features}
              highlight={item.highlight}
              reverse={item.reverse}
              graphicSrc={item.graphicSrc}
            />
          ))}
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
