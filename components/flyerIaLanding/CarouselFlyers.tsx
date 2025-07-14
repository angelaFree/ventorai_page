import React from "react";

export interface Flyer {
  id: number;
  category: string;
  image: string;
}

type FlyerType = "square" | "vertical" | "horizontal";

interface CarouselFlyersProps {
  flyers: Flyer[];
  itemType: FlyerType; // Se pasa externamente si es 'square', 'vertical' o 'horizontal'
}

export default function CarouselFlyers({ flyers, itemType }: CarouselFlyersProps) {
  // Duplicamos el array para scroll continuo
  const loop = [...flyers, ...flyers];

  // Clase de Tailwind según el tipo de imagen recibido por props
  const sizeClass = () => {
    switch (itemType) {
      case "square":
        return "w-80 h-80";
      case "vertical":
        return "w-64 h-96";
      case "horizontal":
        return "w-96 h-64";
      default:
        return "w-80 h-80";
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-900%); }
        }
        .animate-scroll-slow {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll-slow:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative overflow-hidden pb-10 pt-4">
        <div className="flex space-x-6 animate-scroll-slow">
          {loop.map((flyer, idx) => (
            <div
              key={idx}
              className={`
                flex-shrink-0 ${sizeClass()}
                rounded-2xl overflow-hidden shadow-2xl
                transform hover:scale-105 transition-all duration-300
              `}
            >
              <img
                src={flyer.image}
                alt={`Flyer ${flyer.category}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
{/*               <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center rounded-full bg-white/90 text-gray-800 text-xs px-2.5 py-0.5 font-medium">
                  {flyer.category}
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
