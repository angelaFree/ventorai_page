"use client";
import CountryPriceText from "./CountryPriceText";
import { RocketIcon, CheckCircleIcon, UsersIcon, StarIcon } from "./icons";

interface PricingSectionProps {
  priceMap: Record<string, number>;
  linkPagoHotmart: string;
}

export default function PricingSection({ priceMap, linkPagoHotmart }: PricingSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-8">Solo <CountryPriceText prices={priceMap} /></h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Lo Que Incluye:</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center">
                    <CheckCircleIcon />
                    <span className="text-lg ml-3">Flyers ilimitados</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon />
                    <span className="text-lg ml-3">Actualizaciones semanales</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon />
                    <span className="text-lg ml-3">Nuevas plantillas cada semana</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon />
                    <span className="text-lg ml-3">Tutoriales y hacks exclusivos</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon />
                    <span className="text-lg ml-3">Manual de uso completo</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon />
                    <span className="text-lg ml-3">Soporte prioritario</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-black mb-4">
                  <CountryPriceText prices={priceMap} />
                </div>
                <div className="text-xl text-cyan-100 mb-8">por oferta</div>
                <button
                  type="button"
                  onClick={() => window.open(linkPagoHotmart, "_blank")}
                  className="inline-flex items-center justify-center rounded-full bg-white text-gray-800 hover:bg-gray-100 font-bold text-xl px-12 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300 w-full"
                >
                  <RocketIcon />
                  <span className="ml-3">Comprar Ahora</span>
                </button>
                <p className="text-sm text-cyan-100 mt-4">Cancela cuando quieras • Sin compromisos</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <span className="inline-flex items-center rounded-full bg-yellow-400 text-black text-lg px-4 py-2 font-medium">
              <UsersIcon />
              <span className="ml-2">+1,200 usuarios activos</span>
            </span>
            <span className="inline-flex items-center rounded-full bg-green-400 text-black text-lg px-4 py-2 font-medium">
              <StarIcon />
              <span className="ml-2">4.9/5 estrellas</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
