'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface HeroSlide {
  src: string;
  alt: string;
  label: string;
}

const INTERVAL = 5000; // 5 seconds per slide

export default function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      {/* All images stacked, crossfade via opacity */}
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
          priority={i === 0}
          sizes="100vw"
        />
      ))}

      {/* Category indicator dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.label}
            onClick={() => setCurrent(i)}
            className="group flex items-center gap-2"
            aria-label={`${slide.label} anzeigen`}
          >
            <span
              className={`block h-1 rounded-full transition-all duration-500 ${
                i === current
                  ? 'w-8 bg-white'
                  : 'w-3 bg-white/40 group-hover:bg-white/60'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Current category label */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10">
        <span className="text-white/50 text-xs font-medium tracking-widest uppercase transition-opacity duration-500">
          {slides[current]?.label}
        </span>
      </div>
    </>
  );
}
