"use client";

import { useState } from "react";
import { CheckCircleIcon } from "../flyerIaLanding/icons";
import CountryPriceText from "../flyerIaLanding/CountryPriceText";
import { plans, PlanKey } from "./data";

export default function PlansSection() {
  const [activePlan, setActivePlan] = useState<PlanKey>("pro");

  return (
    <section id="plans" className="py-20 bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 text-white">

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Elige tu Arsenal de Asistentes IA
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Cada plan incluye asistentes especializados que trabajan juntos para maximizar tus resultados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {Object.entries(plans).map(([planKey, plan]) => (
            <div
              key={planKey}
              className={`relative group cursor-pointer transform transition-all duration-500 ${
                activePlan === planKey ? "scale-105 z-10" : "hover:scale-102"
              }`}
              onClick={() => setActivePlan(planKey as PlanKey)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
              ></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-transparent group-hover:border-gray-200">
                {planKey === "pro" && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      MÁS POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-3xl font-black text-gray-800 mb-2">{plan.name}</h3>
                  <div className="text-5xl font-black text-gray-800 mb-2">
                    <CountryPriceText prices={plan.priceMap} />
                    <span className="text-lg text-gray-500 font-normal">/mes</span>
                  </div>
                  <p className="text-gray-600">
                    {plan.assistants.length} Asistente{plan.assistants.length > 1 ? "s" : ""} IA
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.assistants.map((assistant) => (
                    <div
                      key={assistant.name}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <div className="text-2xl">{assistant.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800">{assistant.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{assistant.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {assistant.features.slice(0, 2).map((feature, idx) => (
                            <span key={idx} className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                    planKey === "pro"
                      ? "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white transform hover:scale-105"
                      : "bg-gray-800 hover:bg-gray-900 text-white"
                  }`}
                >
                  Comenzar con {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black text-gray-800 mb-4">
              Plan {plans[activePlan].name} - Asistentes Incluidos
            </h3>
            <p className="text-gray-600">Explora cada asistente y sus capacidades únicas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans[activePlan].assistants.map((assistant) => (
              <div
                key={assistant.name}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">{assistant.icon}</div>
                  <h4 className="text-xl font-bold text-gray-800">{assistant.name}</h4>
                  <p className="text-gray-600 text-sm mt-2">{assistant.description}</p>
                </div>

                <div className="space-y-2">
                  {assistant.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircleIcon />
                      <span className="ml-2">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
