"use client";

import { ReactNode } from "react";

export interface Badge {
  label: string;
  gradient: string;
}

export interface Result {
  value: string;
  label: string;
  color: string;
}

export interface Highlight {
  text: string;
  classes: string; // e.g. bg-yellow-400 text-black
}

export interface AssistantCardProps {
  icon: ReactNode;
  iconGradient: string; // from-orange-400 to-pink-400
  name: string;
  tagline: string;
  taglineColor: string; // e.g. text-orange-500
  badges?: Badge[];
  featureBg: string; // gradient classes for features box
  bulletColor: string; // color class for bullet dot
  features: string[];
  results: Result[];
  highlight?: Highlight;
  reverse?: boolean;
  children: ReactNode; // graphic content
}

export default function AssistantCard({
  icon,
  iconGradient,
  name,
  tagline,
  taglineColor,
  badges = [],
  featureBg,
  bulletColor,
  features,
  results,
  highlight,
  reverse,
  children,
}: AssistantCardProps) {
  const textOrder = reverse ? "" : "order-2 lg:order-1";
  const graphicOrder = reverse ? "" : "order-1 lg:order-2";
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className={textOrder}>
        <div className="flex items-center mb-6">
          <div
            className={`w-20 h-20 bg-gradient-to-r ${iconGradient} rounded-full flex items-center justify-center text-3xl mr-6 shadow-lg`}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-3xl font-black text-gray-800">{name}</h3>
            <p className={`${taglineColor} font-semibold`}>{tagline}</p>
            {badges.length > 0 && (
              <div className="flex gap-2 mt-2">
                {badges.map((b) => (
                  <span
                    key={b.label}
                    className={`inline-flex items-center rounded-full bg-gradient-to-r ${b.gradient} text-white px-3 py-1 text-xs font-bold`}
                  >
                    {b.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={`bg-gradient-to-r ${featureBg} rounded-2xl p-6 mb-6`}>
          <h4 className="font-bold text-gray-800 mb-3">🧠 Cómo Trabaja:</h4>
          <ul className="space-y-2 text-gray-700">
            {features.map((feat, idx) => (
              <li key={idx} className="flex items-start">
                <span className={`${bulletColor} mr-2`}>•</span>
                {feat}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h4 className="font-bold text-gray-800 mb-3">📊 Resultados que Produce:</h4>
          <div className="grid grid-cols-2 gap-4">
            {results.map((r) => (
              <div key={r.label} className="text-center">
                <div className={`text-2xl font-black ${r.color}`}>{r.value}</div>
                <div className="text-sm text-gray-600">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={graphicOrder}>
        <div className="relative">
          {children}
          {highlight && (
            <div className={`absolute -top-4 -right-4 px-4 py-2 rounded-full text-sm font-bold ${highlight.classes}`}> 
              {highlight.text}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

