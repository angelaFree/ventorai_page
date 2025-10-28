"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CountryPriceText from "../flyerIaLanding/CountryPriceText";
import CarouselFlyers, { Flyer } from "../flyerIaLanding/CarouselFlyers";
import Specifications from "./Specifications";


export default function AdsAssistantAI() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentFlyer, setCurrentFlyer] = useState(0);
  const [isVariantA, setIsVariantA] = useState<boolean | null>(null);

  const heroTitles = [
    "Ads that convert every day",
    "Campaigns ready in seconds",
    "Turn traffic into customers",
    "Keep your brand always visible",
    "Daily creatives on autopilot",
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);

  // Decide the variant on the client after hydration to avoid SSR mismatches
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
  const hotmartCheckoutUrl =
    "https://pay.hotmart.com/O102414984N?off=1jhssp4y&checkoutMode=10";

  const flyersVertical: Flyer[] = [
    {
      id: 1,
      category: "General",
      image:
        "/vendecursos/carrusel_vertical_1/1.png",
    },
    {
      id: 2,
      category: "General",
      image:
        "/vendecursos/carrusel_vertical_1/2.png",
    },
    {
      id: 3,
      category: "General",
      image:
        "/vendecursos/carrusel_vertical_1/3.png",
    },
    {
      id: 4,
      category: "General",
      image:
        "/vendecursos/carrusel_vertical_1/4.png",
    },
    {
      id: 5,
      category: "General",
      image:
        "/vendecursos/carrusel_vertical_1/5.png",
    },
    {
      id: 6,
      category: "General",
      image:
        "/vendecursos/carrusel_vertical_1/6.png",
    },
    {
      id: 7,
      category: "General",
      image:
        "/vendecursos/carrusel_vertical_1/7.png",
    },
    {
      id: 8,
      category: "General",
      image:
        "/vendecursos/carrusel_vertical_1/8.png",
    },
    {
      id: 9,
      category: "General",
      image:
        "/vendecursos/carrusel_vertical_1/9.png",
    },
    {
      id: 10,
      category: "General",
      image:
        "/vendecursos/carrusel_vertical_1/10.png",
    },
    {
      id: 11,
      category: "General",
      image:
        "/vendecursos/carrusel_vertical_1/11.png",
    }
    
  ];
  const flyersSquare: Flyer[] = [
    {
      id: 1,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/1.png",
    },
    {
      id: 2,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/2.png",
    },
    {
      id: 3,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/3.png",
    },
    {
      id: 4,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/4.png",
    },
    {
      id: 5,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/5.png",
    },
    {
      id: 6,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/6.png",
    },
    {
      id: 7,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/7.png",
    },
    {
      id: 8,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/8.png",
    },
    {
      id: 9,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/9.png",
    },
    {
      id: 10,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/10.png",
    },
    {
      id: 11,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/11.png",
    },
    {
      id: 12,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/12.png",
    },
    {
      id: 13,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/13.png",
    },
    {
      id: 14,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/14.png",
    },
    {
      id: 15,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/15.png",
    },
    {
      id: 16,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/16.png",
    },
    {
      id: 17,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/17.png",
    },
    {
      id: 18,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/18.png",
    },
    {
      id: 19,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/19.png",
    },
    {
      id: 20,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/20.png",
    },
    {
      id: 21,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/21.png",
    },
    {
      id: 22,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/22.png",
    },
    {
      id: 23,
      category: "General",
      image:
        "/vendecursos/carrusel_cuadrado_1/23.png",
    }
   
  ];


  const testimonials = [
    {
      text: "Thirty minutes after buying I already had ads ready for Instagram, LinkedIn, and Facebook.",
      author: "María González",
      role: "Marketing Manager",
      rating: 5,
      avatar: "/avatar_maria.png",
    },
    {
      text: "AI Assistant Ads spots the viral trends in my niche. I lowered CPA by 60% in the first week.",
      author: "Carlos Ruiz",
      role: "E-commerce Owner",
      rating: 5,
      avatar: "/avatar_carlos.png",
    },
    {
      text: "No more generic templates or pricey designers. AI Assistant Ads is all I need for my campaigns.",
      author: "Ana Martínez",
      role: "Social Media Specialist",
      rating: 5,
      avatar: "/avatar_ana.png",
    },
  ];

  // Generic helper that splits an array into N almost even groups
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

  // --- Split flyersSquare into 2 groups ---
  const [
    flyersSquareGroup1,
    flyersSquareGroup4,
  ] = splitIntoGroups(flyersSquare, 2);

  // --- Split flyersVertical into 1 group ---
  const [
    flyersVerticalGroup1,
  ] = splitIntoGroups(flyersVertical, 1);

  // Resulting groups used by the carousels below

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);


  // Icons as SVG components
  const SparklesIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );

  const RocketIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );

  const StarIcon = ({ filled = false }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );

  const TrendingUpIcon = () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
      <polyline points="16,7 22,7 22,13" />
    </svg>
  );

  const ZapIcon = () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
    </svg>
  );

  const TargetIcon = () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22,4 12,14.01 9,11.01" />
    </svg>
  );

  const UsersIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="m22 21-3-3" />
      <path d="m16 16 3 3" />
    </svg>
  );



const handlePurchase = async () => {
  const ReactPixel = (await import("react-facebook-pixel")).default;
  ReactPixel.track("InitiateCheckout", {
    variant: isVariantA ? "full" : "reduced",
  });
  window.open(hotmartCheckoutUrl, "_blank", "noopener,noreferrer");
};



  
  const priceMap = {
    US: 4.9
  };
  return (
    <>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-cyan-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-20 text-center">
            <div className="mx-auto max-w-4xl">
              <div className="inline-flex items-center rounded-full bg-yellow-400 text-black hover:bg-yellow-300 text-lg px-6 py-2 mb-6 font-medium">
                <SparklesIcon />
                <span className="ml-2">New! AI Ad Assistant</span>
              </div>

              <div className="overflow-hidden h-32 md:h-48">
                <h1
                  className={`text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent leading-tight transition-transform duration-500 ${slideIn ? 'translate-y-0' : '-translate-y-full'}`}
                >
                  {heroTitles[titleIndex]}
                </h1>
              </div>

              <p className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-3xl mx-auto leading-relaxed">
                AI-powered ad creator. Forget Canva and expensive designers—get
                ready-to-launch creatives in seconds.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button
                  type="button"
                  onClick={handlePurchase}
                  className="inline-flex items-center justify-center rounded-full text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <RocketIcon />
                  <span className="ml-3">
                    One-time purchase of{" "}
                    <CountryPriceText prices={priceMap} />
                  </span>
                </button>

                <div className="flex items-center text-cyan-100">
                  <StarIcon filled />
                  <StarIcon filled />
                  <StarIcon filled />
                  <StarIcon filled />
                  <StarIcon filled />
                  <span className="text-sm ml-2">1,200+ active users</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CarouselFlyers flyers={flyersSquareGroup1} itemType="square" />
        {isVariantA && (
          <>
            {/* Benefits Carousel */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg shadow-sm">
                    <div className="p-8 text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <TrendingUpIcon />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Always-Up-To-Date Models
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Ventor&apos;s API syncs with live ads on Facebook Ads,
                        TikTok, and more.
                      </p>
                    </div>
                  </div>

                  <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-pink-100 to-pink-50 rounded-lg shadow-sm">
                    <div className="p-8 text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <ZapIcon />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Zero Learning Curve
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Forget pricey designers and complex tools—describe what
                        you need and get professional results.
                      </p>
                    </div>
                  </div>

                  <div className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-lg shadow-sm">
                    <div className="p-8 text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <TargetIcon />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Built for Every Industry
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Creatives for ecommerce, services, digital products, and
                        franchises—optimized for every social platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
        <CarouselFlyers flyers={flyersVerticalGroup1} itemType="vertical" />

        {/* Video Section */}
        {/* <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                AI Ads in Action
              </h2>
              <p className="text-xl text-purple-100 mb-12">
                See how to launch conversion-ready creatives in under 30
                seconds.
              </p>

              <div className="relative mx-auto max-w-sm">
                <div className="aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl relative z-10">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/QKP4AYBVMjQ?rel=0"
                    title="AI Assistant Ads in action"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 rounded-3xl opacity-30 blur-xl pointer-events-none -z-10"></div>
              </div>
            </div>
          </div>
        </section> */}

        {isVariantA && (
          <>
            {/* How It Works */}
            <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                You chat with GPT, GPT connects to Ventor&apos;s API, and Ventor
                sends the request to GPT&apos;s image engine to build your ad.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  You chat with GPT
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tell GPT exactly what your campaign needs.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  GPT connects with Ventor
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  GPT talks to Ventor&apos;s API to process your request.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Ventor delivers your ad
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ventor instructs GPT&apos;s image engine and you get your
                  flyer instantly.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <span className="inline-block rounded-full bg-white/15 text-white/90 text-sm px-4 py-1 ring-1 ring-white/20 mb-3">
                Same prompt, different outcomes
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
                Results comparison
              </h2>
              <p className="text-white/90 mb-10">
                Both images were generated with the exact same prompt.
              </p>
            </div>

            <div className="relative">
              {/* VS badge */}
              <div className="hidden md:flex absolute inset-0 pointer-events-none items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/30 text-white font-black flex items-center justify-center">
                  VS
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left column: default GPT (not recommended) */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="rounded-full bg-red-500/20 text-red-100 text-xs font-semibold px-3 py-1 ring-1 ring-red-400/30">
                      Default GPT
                    </span>
                    <span className="rounded-full bg-white/10 text-white/90 text-xs px-3 py-1 ring-1 ring-white/20">
                      Not recommended
                    </span>
                  </div>

                  <div className="relative mx-auto rounded-xl overflow-hidden ring-1 ring-white/20 shadow-2xl shadow-black/30 max-w-[420px]">
                    <Image
                      src="/vendecursos/anuncio_gpt_normal.png"
                      alt="Result with default GPT"
                      width={420}
                      height={560}
                      className="w-full h-auto object-cover"
                      priority
                    />
                    {/* Large X overlay */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 flex items-center justify-center"
                    >
                      <span className="text-red-500/70 drop-shadow-lg font-black text-8xl md:text-9xl select-none">
                        ×
                      </span>
                    </div>
                  </div>

                  {/* 2/5 stars */}
                  <div
                    className="mt-3 flex justify-center gap-1"
                    aria-label="Rating 2 out of 5"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 20 20"
                        className={`h-5 w-5 ${
                          i < 2 ? "fill-yellow-300" : "fill-white/30"
                        }`}
                      >
                        <path d="M10 15.27l-5.18 3.05 1.2-5.9L1 7.97l6-0.55L10 2l3 5.42 6 .55-5.02 4.45 1.2 5.9z" />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-2 text-gray-100/90 text-sm">
                    Generic composition · Low visual impact · No call to action
                  </p>
                </div>

                {/* Right column: AI Assistant Ads (recommended) */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="rounded-full bg-emerald-400/20 text-emerald-50 text-xs font-semibold px-3 py-1 ring-1 ring-emerald-300/30">
                      AI Assistant Ads
                    </span>
                    <span className="rounded-full bg-white/10 text-white/90 text-xs px-3 py-1 ring-1 ring-white/20">
                      Recommended
                    </span>
                  </div>

                  <div className="relative mx-auto rounded-xl overflow-hidden ring-1 ring-white/20 shadow-2xl shadow-black/30 max-w-[420px]">
                    <Image
                      src="/vendecursos/anuncio_asistant.png"
                      alt="Optimized ad with AI Assistant Ads"
                      width={420}
                      height={560}
                      className="w-full h-auto object-cover"
                      priority
                    />
                    {/* Subtle check mark */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute right-3 top-3"
                    >
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-emerald-500/80 text-white font-black">
                        ✓
                      </span>
                    </div>
                  </div>

                  {/* 5/5 stars */}
                  <div
                    className="mt-3 flex justify-center gap-1"
                    aria-label="Rating 5 out of 5"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 20 20"
                        className="h-5 w-5 fill-yellow-300"
                      >
                        <path d="M10 15.27l-5.18 3.05 1.2-5.9L1 7.97l6-0.55L10 2l3 5.42 6 .55-5.02 4.45 1.2 5.9z" />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-2 text-gray-100/90 text-sm">
                    Clear, bold typography · Sales-focused hierarchy · High
                    contrast CTA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
          </>
        )}

        {isVariantA && (
          <>
            {/* Testimonials Carousel */}
            <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-12">
                What Our Users Say
              </h2>

              <div className="relative">
                <div className="bg-white/10 border-0 backdrop-blur-sm rounded-lg shadow-sm">
                  <div className="p-12">
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <StarIcon key={i} filled />
                        )
                      )}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                      &quot;{testimonials[currentTestimonial].text}&quot;
                    </blockquote>

                    {/* Avatar + author */}
                    <div className="flex items-center justify-center">
                      <Image
                        width={64}
                        height={64}
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].author}
                        className="w-16 h-16 rounded-full mr-4 object-cover"
                      />
                      <div className="text-left">
                        <div className="font-bold text-lg">
                          {testimonials[currentTestimonial].author}
                        </div>
                        <div className="text-gray-300">
                          {testimonials[currentTestimonial].role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? "bg-orange-400"
                          : "bg-white/30"
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
          </>
        )}
        <Specifications />

        <CarouselFlyers flyers={flyersSquareGroup4} itemType="square" />
        {/* Pricing & Final CTA */}
        <section className="py-20 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Claim the offer now
              </h2>

              {/* Card principal */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 mb-12 ring-1 ring-white/15 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-10 items-center text-left">
                  {/* Incluye */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">
                      What&apos;s included
                    </h3>
                    <div className="grid gap-4">
                      <div className="flex items-center">
                        <CheckCircleIcon />
                        <span className="text-lg ml-3">Unlimited flyers</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircleIcon />
                        <span className="text-lg ml-3">
                          Monthly updates
                        </span>
                      </div>

                      <div className="flex items-center">
                        <CheckCircleIcon />
                        <span className="text-lg ml-3">
                          Exclusive tutorials and hacks
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircleIcon />
                        <span className="text-lg ml-3">
                          Sales tips
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircleIcon />
                        <span className="text-lg ml-3">
                          Priority support
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircleIcon />
                        <span className="text-lg ml-3">
                          Use it on any accounts you like
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* Panel de compra */}
                  <div className="text-center md:text-left">
                    <div className="text-5xl md:text-6xl font-black mb-3">
                      <CountryPriceText prices={priceMap} />
                    </div>

                    <div className="text-base md:text-lg text-white/90 mb-2">
                      <span className="line-through/80 line-through mr-2">
                        $80
                      </span>
                      before
                    </div>
                    <div className="text-base md:text-lg text-white/90 mb-2">
                      One-time payment, unlimited access
                    </div>
                    <div className="text-base md:text-lg text-white/90 mb-8">
                      Introductory promo price
                    </div>

                    <button
                      type="button"
                      onClick={handlePurchase}
                      className="inline-flex items-center justify-center w-full md:w-auto rounded-full bg-white text-gray-900 hover:bg-gray-100 font-bold text-lg md:text-xl px-10 py-5 shadow-2xl transition-all duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-white/70"
                    >
                      <RocketIcon />
                      <span className="ml-3">Buy now</span>
                    </button>

                    <p className="text-sm text-white/80 mt-4">
                      Lifetime access • Updates included
                    </p>
                  </div>
                </div>
              </div>

              {/* Social proof */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <span className="inline-flex items-center rounded-full bg-white/90 text-gray-900 text-base md:text-lg px-4 py-2 font-medium ring-1 ring-white/60">
                  <UsersIcon />
                  <span className="ml-2">1,200+ active users</span>
                </span>
                <span className="inline-flex items-center rounded-full bg-white/90 text-gray-900 text-base md:text-lg px-4 py-2 font-medium ring-1 ring-white/60">
                  <StarIcon />
                  <span className="ml-2">4.9/5 rating</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Fixed CTA Buttons */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <button
            type="button"
            onClick={handlePurchase}
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-full shadow-2xl animate-pulse"
          >
            One-time purchase of <CountryPriceText prices={priceMap} />
          </button>
        </div>
      </div>
    </>
  );
}
