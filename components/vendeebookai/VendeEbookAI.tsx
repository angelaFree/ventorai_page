"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CountryPriceText from "../flyerIaLanding/CountryPriceText";
import CarouselFlyers, { Flyer } from "../flyerIaLanding/CarouselFlyers";
import EspecificacionesTecnicasEbook from "./Especificaciones";

export default function VendeEbookAI() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVariantA, setIsVariantA] = useState<boolean | null>(null);

  const heroTitles = [
    "Vende tu ebook todos los días",
    "Portadas y mockups en segundos",
    "Anuncios que convierten",
    "Tu ebook siempre visible",
    "Contenido diario sin esfuerzo",
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    setIsVariantA(Math.random() < 0.5);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const interval = setInterval(() => {
      setSlideIn(false);
      timeout = setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % heroTitles.length);
        setSlideIn(true);
      }, 500);
    }, 4000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [heroTitles.length]);

  const linkPagoHotmart = "https://pay.hotmart.com/B101507725R?checkoutMode=10";

  const flyersVertical: Flyer[] = Array.from({ length: 17 }, (_, i) => ({
    id: i + 1,
    category: "General",
    image: `/vendeebook/vertical/${i + 1}.png`,
  }));

  const flyersSquare: Flyer[] = Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    category: "General",
    image: `/vendeebook/cuadrado/${i + 1}.png`,
  }));

  const testimonials = [
    {
      text: "Llevo 30 minutos de compra y ya tengo tres diseños listos para Instagram, LinkedIn y Facebook.",
      author: "María González",
      role: "Marketing Manager",
      rating: 5,
      avatar: "/avatar_maria.png",
    },
    {
      text: "Increíble cómo VendeEbook AI captura las tendencias virales. Mis conversiones subieron 300%.",
      author: "Carlos Ruiz",
      role: "E-commerce Owner",
      rating: 5,
      avatar: "/avatar_carlos.png",
    },
    {
      text: "Adiós Canva, adiós diseñadores caros. VendeEbook AI es todo lo que necesito.",
      author: "Ana Martínez",
      role: "Social Media Specialist",
      rating: 5,
      avatar: "/avatar_ana.png",
    },
  ];

  function splitIntoGroups<T>(items: T[], groupCount: number): T[][] {
    const total = items.length;
    const baseSize = Math.floor(total / groupCount);
    const remainder = total % groupCount;

    const groups: T[][] = [];
    let start = 0;
    for (let i = 0; i < groupCount; i++) {
      const extra = i < remainder ? 1 : 0;
      const size = baseSize + extra;
      const end = start + size;
      groups.push(items.slice(start, end));
      start = end;
    }
    return groups;
  }

  const [flyersSquareGroup1, flyersSquareGroup4] = splitIntoGroups(flyersSquare, 2);
  const [flyersVerticalGroup1] = splitIntoGroups(flyersVertical, 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const SparklesIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );

  const RocketIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );

  const StarIcon = ({ filled = false }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );

  const TrendingUpIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
      <polyline points="16,7 22,7 22,13" />
    </svg>
  );

  const ZapIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
    </svg>
  );

  const TargetIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22,4 12,14.01 9,11.01" />
    </svg>
  );

  const UsersIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="m22 21-3-3" />
      <path d="m16 16 3 3" />
    </svg>
  );

  const handleComprar = async () => {
    const ReactPixel = (await import("react-facebook-pixel")).default;
    ReactPixel.track("InitiateCheckout", { variant: isVariantA ? "full" : "reduced" });
    window.open(linkPagoHotmart, "_blank", "noopener,noreferrer");
  };

  const priceMap = { US: 2.9 };

  return (
    <>
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll { animation: scroll 18s linear infinite; }
        .animate-scroll:hover { animation-play-state: paused; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-sky-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 via-sky-600 to-indigo-600 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-20 text-center">
            <div className="mx-auto max-w-4xl">
              <div className="inline-flex items-center rounded-full bg-teal-300 text-black hover:bg-teal-200 text-lg px-6 py-2 mb-6 font-medium">
                <SparklesIcon />
                <span className="ml-2">¡Nuevo! Dos asistentes: Portadas y Anuncios</span>
              </div>

              <div className="overflow-hidden h-32 md:h-48">
                <h1 className={`text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-teal-200 to-white bg-clip-text text-transparent leading-tight transition-transform duration-500 ${slideIn ? 'translate-y-0' : '-translate-y-full'}`}>
                  {heroTitles[titleIndex]}
                </h1>
              </div>

              <p className="text-xl md:text-2xl mb-8 text-sky-100 max-w-3xl mx-auto leading-relaxed">
                Dos asistentes para ebooks: crea portadas y mockups realistas, y genera anuncios listos para vender en segundos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button
                  type="button"
                  onClick={handleComprar}
                  className="inline-flex items-center justify-center rounded-full text-xl font-bold bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white px-12 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <RocketIcon />
                  <span className="ml-3">
                    Comprar por <CountryPriceText prices={priceMap} />
                    <span className="text-sm align-top">/mes</span>
                  </span>
                </button>

                <div className="flex items-center text-sky-100">
                  <StarIcon filled />
                  <StarIcon filled />
                  <StarIcon filled />
                  <StarIcon filled />
                  <StarIcon filled />
                  <span className="text-sm ml-2">+1,200 usuarios activos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Asistentes incluidos */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-teal-100 to-teal-50 rounded-lg shadow-sm">
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <SparklesIcon />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Asistente de Portadas y Mockups</h3>
                  <p className="text-gray-600 leading-relaxed">Genera portadas profesionales y mockups realistas para tus ebooks en segundos.</p>
                </div>
              </div>

              <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-sky-100 to-sky-50 rounded-lg shadow-sm">
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TargetIcon />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Asistente de Anuncios</h3>
                  <p className="text-gray-600 leading-relaxed">Crea anuncios optimizados para redes sociales que convierten para tu ebook.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CarouselFlyers flyers={flyersSquareGroup1} itemType="square" />

        {isVariantA && (
          <>
            {/* Beneficios */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-teal-100 to-teal-50 rounded-lg shadow-sm">
                    <div className="p-8 text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <TrendingUpIcon />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Modelos Siempre Actualizados</h3>
                      <p className="text-gray-600 leading-relaxed">La API de Ventor se conecta con anuncios actuales de Facebook Ads, TikTok y más.</p>
                    </div>
                  </div>

                  <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-sky-100 to-sky-50 rounded-lg shadow-sm">
                    <div className="p-8 text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <ZapIcon />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Sin Curva de Aprendizaje</h3>
                      <p className="text-gray-600 leading-relaxed">Olvídate de diseñadores caros y herramientas complicadas. Describe y obtén resultados pro.</p>
                    </div>
                  </div>

                  <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-lg shadow-sm">
                    <div className="p-8 text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <TargetIcon />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Para Cualquier Ebook</h3>
                      <p className="text-gray-600 leading-relaxed">Ebooks de cualquier temática, optimizados para todas las redes sociales.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        <CarouselFlyers flyers={flyersVerticalGroup1} itemType="vertical" />

        {/* Video Section */}
        <section className="py-16 bg-gradient-to-r from-teal-600 via-sky-600 to-indigo-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">VendeEbook AI en Acción</h2>
              <p className="text-xl text-teal-100 mb-12">Descubre cómo crear piezas virales en menos de 30 segundos</p>
              <div className="relative mx-auto max-w-sm">
                <div className="aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl relative z-10">
                  <iframe className="w-full h-full" src="https://www.youtube.com/embed/QKP4AYBVMjQ?rel=0" title="Vídeo VendeEbook AI" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-400 rounded-3xl opacity-30 blur-xl pointer-events-none -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo Funciona */}
        {isVariantA && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">Cómo Funciona</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Te comunicas con GPT; GPT se conecta con la API de Ventor y el motor de imágenes para generar portadas, mockups y anuncios.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-black text-white">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Te comunicas con GPT</h3>
                  <p className="text-gray-600 leading-relaxed">Describe tu ebook y lo que necesitas.</p>
                </div>
                <div className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-black text-white">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">GPT llama a Ventor</h3>
                  <p className="text-gray-600 leading-relaxed">La API de Ventor procesa tu pedido y prepara la generación.</p>
                </div>
                <div className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-black text-white">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Resultados al instante</h3>
                  <p className="text-gray-600 leading-relaxed">Obtén portadas, mockups y anuncios listos para publicar.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        

        {/* Testimonios + CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Crece con VendeEbook AI</h3>
                <p className="text-gray-600 mb-6">Genera portadas, mockups y anuncios profesionales sin esfuerzos diarios. Sube tu ebook y ponlo frente a más lectores.</p>
                <button type="button" onClick={handleComprar} className="inline-flex items-center justify-center rounded-full text-lg font-bold bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white px-8 py-4 shadow-2xl transition-all">Comprar ahora</button>
              </div>
              <div className="bg-gradient-to-br from-teal-600 via-sky-600 to-indigo-600 text-white rounded-2xl p-8">
                <div className="min-h-[180px] flex flex-col justify-between">
                  <p className="text-lg leading-relaxed">{testimonials[currentTestimonial].text}</p>
                  <div className="mt-6 flex items-center">
                    <Image src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].author} className="w-16 h-16 rounded-full mr-4 object-cover" width={64} height={64} />
                    <div className="text-left">
                      <div className="font-bold text-lg">{testimonials[currentTestimonial].author}</div>
                      <div className="text-sky-100">{testimonials[currentTestimonial].role}</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? "bg-emerald-400" : "bg-white/30"}`} onClick={() => setCurrentTestimonial(index)} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <EspecificacionesTecnicasEbook />

        <CarouselFlyers flyers={flyersSquareGroup4} itemType="square" />

        {/* Pricing & Final CTA */}
        <section className="py-20 bg-gradient-to-r from-teal-600 via-sky-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Aprovecha la oferta ahora</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 mb-12 ring-1 ring-white/15 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-10 items-center text-left">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Lo que incluye</h3>
                    <div className="grid gap-4">
                      <div className="flex items-center"><CheckCircleIcon /><span className="text-lg ml-3">Piezas ilimitadas</span></div>
                      <div className="flex items-center"><CheckCircleIcon /><span className="text-lg ml-3">Actualizaciones Mensuales</span></div>
                      <div className="flex items-center"><CheckCircleIcon /><span className="text-lg ml-3">Tutoriales y hacks exclusivos</span></div>
                      <div className="flex items-center"><CheckCircleIcon /><span className="text-lg ml-3">Consejos de Venta</span></div>
                      <div className="flex items-center"><CheckCircleIcon /><span className="text-lg ml-3">Soporte prioritario</span></div>
                      <div className="flex items-center"><CheckCircleIcon /><span className="text-lg ml-3">Úsalo en las cuentas que desees</span></div>
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-5xl md:text-6xl font-black mb-3">
                      <CountryPriceText prices={priceMap} />
                      <span className="ml-1 align-baseline text-base md:text-xl font-semibold opacity-70">/mes</span>
                    </div>
                    <div className="text-base md:text-lg text-white/90 mb-2"><span className="line-through/80 line-through mr-2">$80</span>antes</div>
                    <div className="text-base md:text-lg text-white/90 mb-8">precio promocional por oferta</div>
                    <button type="button" onClick={handleComprar} className="inline-flex items-center justify-center w-full md:w-auto rounded-full bg-white text-gray-900 hover:bg-gray-100 font-bold text-lg md:text-xl px-10 py-5 shadow-2xl transition-all duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-white/70">
                      <RocketIcon />
                      <span className="ml-3">Comprar ahora</span>
                    </button>
                    <p className="text-sm text-white/80 mt-4">Cancela cuando quieras • Sin compromisos</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <span className="inline-flex items-center rounded-full bg-white/90 text-gray-900 text-base md:text-lg px-4 py-2 font-medium ring-1 ring-white/60"><UsersIcon /><span className="ml-2">+1,200 usuarios activos</span></span>
                <span className="inline-flex items-center rounded-full bg-white/90 text-gray-900 text-base md:text-lg px-4 py-2 font-medium ring-1 ring-white/60"><StarIcon /><span className="ml-2">4.9/5 estrellas</span></span>
              </div>
            </div>
          </div>
        </section>

        {/* Fixed CTA Buttons */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <button type="button" onClick={handleComprar} className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white font-bold px-8 py-4 rounded-full shadow-2xl animate-pulse">
            Comprar por <CountryPriceText prices={priceMap} />
            <span className="text-sm align-top">/mes</span>
          </button>
        </div>
      </div>
    </>
  );
}
