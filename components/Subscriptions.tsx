"use client";

import Image from "next/image";
import { useState } from "react";

const assistants = [
  {
    name: "Ana",
    avatar: "/avatar_ana.png",
    description: "Experta en marketing digital.",
  },
  {
    name: "Carlos",
    avatar: "/avatar_carlos.png",
    description: "Especialista en dise\u00f1o gr\u00e1fico.",
  },
  {
    name: "Mar\u00eda",
    avatar: "/avatar_maria.png",
    description: "Consultora en estrategias de ventas.",
  },
];

export default function Subscriptions() {
  const [activePlan, setActivePlan] = useState<string | null>(null);
  const plans = ["BASIC", "PRO", "PLUS"];

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Elige tu plan</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {plans.map((plan) => (
            <button
              key={plan}
              onClick={() => setActivePlan(plan)}
              className={`px-6 py-3 rounded-full font-semibold border-2 transition ${activePlan === plan ? "bg-white text-gray-800 border-white" : "bg-transparent text-white border-white"}`}
            >
              {plan}
            </button>
          ))}
        </div>

        {activePlan && (
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Asistentes incluidos</h3>
            <ul className="space-y-4 text-left">
              {assistants.map(({ name, avatar, description }) => (
                <li key={name} className="flex items-center gap-4">
                  <Image src={avatar} alt={name} width={60} height={60} className="rounded-full" />
                  <div>
                    <p className="font-medium">{name}</p>
                    <p className="text-sm text-gray-200">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
