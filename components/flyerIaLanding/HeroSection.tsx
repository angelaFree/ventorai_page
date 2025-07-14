"use client";
import Image from "next/image";
import CountryPriceText from "./CountryPriceText";
import { Flyer } from "./CarouselFlyers";
import {
  SparklesIcon,
  RocketIcon,
  StarIcon,
  TrendingUpIcon,
  ZapIcon,
  TargetIcon,
} from "./icons";

interface HeroSectionProps {
  linkPagoHotmart: string;
  priceMap: Record<string, number>;
  flyersSquareHeader: Flyer[];
  currentFlyer: number;
}

export default function HeroSection({
  linkPagoHotmart,
  priceMap,
  flyersSquareHeader,
  currentFlyer,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center rounded-full bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-6 py-2 mb-6 font-medium">
            <SparklesIcon />
            <span className="ml-2">¡Nuevo! Equipo IA para ventas </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent leading-tight">
            Tu equipo de IA para tener ventas virales
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Olvídate de contratar diseñadores, redactores o analistas. Ahora
            tienes un equipo de asistentes con inteligencia artificial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("plans")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center rounded-full text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <RocketIcon />
              <span className="ml-3">
                Comprar por <CountryPriceText prices={priceMap} />
              </span>
            </button>

            <div className="flex items-center text-cyan-100">
              <StarIcon filled />
              <StarIcon filled />
              <StarIcon filled />
              <StarIcon filled />
              <StarIcon filled />
              <span className="text-sm ml-2">+1,200 usuarios activos</span>
            </div>
          </div>

          <div className="relative mx-auto w-64 h-64 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-2xl transform rotate-12 opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl transform -rotate-6 opacity-40"></div>
            <div className="relative bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="text-center">
                <div className="relative w-full h-50 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={flyersSquareHeader[currentFlyer].image}
                    alt={`Flyer ${flyersSquareHeader[currentFlyer].category}`}
                    fill
                    sizes="100vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <div className="text-gray-800 font-bold text-lg">
                  {flyersSquareHeader[currentFlyer].category}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
