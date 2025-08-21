"use client";

import React from "react";
import Image from "next/image";

export interface Flyer {
  id: number;
  category: string;
  image: string;
}

type FlyerType = "square" | "vertical" | "horizontal";

interface CarouselFlyersProps {
  flyers: Flyer[];
  itemType: FlyerType; // 'square' | 'vertical' | 'horizontal'
  autoplayMs?: number; // opcional (default 2600)
}

export default function CarouselFlyers({
  flyers,
  itemType,
  autoplayMs = 2600,
}: CarouselFlyersProps) {
  // 1) Limita a 10 ítems y crea clones para loop infinito
  const base = React.useMemo(() => flyers.slice(0, 10), [flyers]);
  const CLONES = 2; // clones a cada lado
  const slides = React.useMemo(() => {
    if (base.length === 0) return [];
    const head = base.slice(-CLONES);
    const tail = base.slice(0, CLONES);
    return [...head, ...base, ...tail];
  }, [base]);

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const itemRefs = React.useRef<Array<HTMLDivElement | null>>([]);
  const currentIndexRef = React.useRef<number>(CLONES);
  const [ready, setReady] = React.useState(false);
  const [paused, setPaused] = React.useState(false);

  // Helpers de tamaños/aspecto para mostrar varias por vista (responsive)
  const aspectClass =
    itemType === "vertical"
      ? "aspect-[2/3]"
      : itemType === "horizontal"
      ? "aspect-[16/9]"
      : "aspect-square";

  // Ancho por slide (muestra 1.2 en móvil, 2 en sm, 3 en md, 4 en lg, 5 en xl aprox)
  const basisClass =
    "basis-[72%] sm:basis-[50%] md:basis-[33%] lg:basis-[25%] xl:basis-[20%]";

  // === CENTRADO ===
  const getCenterLeft = (c: HTMLDivElement, el: HTMLDivElement) =>
    el.offsetLeft - (c.clientWidth - el.clientWidth) / 2;

  // 2) Posiciona en el primer ítem real (evita ver los clones al inicio) y centrado
  React.useEffect(() => {
    const c = containerRef.current;
    const el = itemRefs.current[currentIndexRef.current];
    if (!c || !el) return;
    c.scrollTo({ left: getCenterLeft(c, el), behavior: "auto" });
    const t = setTimeout(() => setReady(true), 50);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  // 3) Ir a un índice con centrado (smooth/instant)
  const scrollToIndex = React.useCallback((index: number, smooth = true) => {
    const c = containerRef.current;
    const el = itemRefs.current[index];
    if (!c || !el) return;
    c.scrollTo({
      left: getCenterLeft(c, el),
      behavior: smooth ? "smooth" : "auto",
    });
    currentIndexRef.current = index;
  }, []);

  // 4) Normaliza índice cuando entras a clones (teletransporta sin animación)
  const normalizeIfCloned = React.useCallback(() => {
    const total = slides.length;
    const baseLen = base.length;
    const clones = CLONES;
    let idx = currentIndexRef.current;
    if (idx >= total - clones) {
      idx = idx - baseLen;
      scrollToIndex(idx, false);
    } else if (idx < clones) {
      idx = idx + baseLen;
      scrollToIndex(idx, false);
    }
  }, [base.length, slides.length, scrollToIndex]);

  // 5) Detecta el slide más centrado al finalizar scroll
  const handleScrollEnd = React.useCallback(() => {
    const c = containerRef.current;
    if (!c) return;

    const viewportCenter = c.scrollLeft + c.clientWidth / 2;
    let nearest = currentIndexRef.current;
    let nearestDist = Number.POSITIVE_INFINITY;

    for (let i = 0; i < itemRefs.current.length; i++) {
      const el = itemRefs.current[i];
      if (!el) continue;
      const elCenter = el.offsetLeft + el.clientWidth / 2;
      const d = Math.abs(elCenter - viewportCenter);
      if (d < nearestDist) {
        nearestDist = d;
        nearest = i;
      }
    }
    currentIndexRef.current = nearest;
    normalizeIfCloned();
  }, [normalizeIfCloned]);

  // 6) Autoplay: siguiente slide cada X ms (pausa en hover/interacción)
  React.useEffect(() => {
    if (!ready || paused || base.length <= 1) return;
    const id = setInterval(() => {
      scrollToIndex(currentIndexRef.current + 1, true);
    }, autoplayMs);
    return () => clearInterval(id);
  }, [ready, paused, base.length, autoplayMs, scrollToIndex]);

  // Debounce “scroll end” (soporte amplio sin usar onscrollend experimental)
  React.useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    let t: any = null;
    const onScroll = () => {
      if (t) clearTimeout(t);
      t = setTimeout(handleScrollEnd, 120);
    };
    c.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      c.removeEventListener("scroll", onScroll);
      if (t) clearTimeout(t);
    };
  }, [handleScrollEnd]);

  // Controles manuales
  const prev = () => scrollToIndex(currentIndexRef.current - 1, true);
  const next = () => scrollToIndex(currentIndexRef.current + 1, true);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Track con scroll-snap para tacto/ratón */}
      <div
        ref={containerRef}
        className="
          group
          relative w-full overflow-x-auto scroll-smooth
          snap-x snap-mandatory
          flex gap-4 sm:gap-5 md:gap-6
          pb-8 pt-3
          [-ms-overflow-style:none] [scrollbar-width:none]
        "
        style={{
          WebkitOverflowScrolling: "touch",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        {slides.map((f, i) => (
          <div
            key={`${f.id}-${i}`}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className={`
              ${basisClass} shrink-0 snap-center
              ${aspectClass} relative rounded-2xl overflow-hidden
              bg-neutral-800/40 ring-1 ring-white/10 shadow-2xl
              transition-transform duration-300 hover:scale-[1.03]
            `}
            role="group"
            aria-label={`Flyer ${f.category}`}
            draggable={false}
          >
            <Image
              src={f.image}
              alt={`Flyer ${f.category}`}
              fill
              sizes="(max-width: 640px) 72vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
              className="object-cover select-none"
              draggable={false}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Botones prev/next (accesibles, ocultos en móviles muy pequeños) */}
      <button
        aria-label="Anterior"
        onClick={prev}
        className="
          hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2
          h-10 w-10 items-center justify-center rounded-full
          bg-white/80 hover:bg-white shadow-lg ring-1 ring-black/10
          transition active:scale-95
        "
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5">
          <path
            d="M15 6l-6 6 6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>
      <button
        aria-label="Siguiente"
        onClick={next}
        className="
          hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2
          h-10 w-10 items-center justify-center rounded-full
          bg-white/80 hover:bg-white shadow-lg ring-1 ring-black/10
          transition active:scale-95
        "
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5">
          <path
            d="M9 6l6 6-6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>
    </div>
  );
}
