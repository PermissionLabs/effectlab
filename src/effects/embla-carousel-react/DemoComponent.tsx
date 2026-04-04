"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  { label: "Slide 1", color: "#3b82f6" },
  { label: "Slide 2", color: "#8b5cf6" },
  { label: "Slide 3", color: "#ec4899" },
  { label: "Slide 4", color: "#10b981" },
  { label: "Slide 5", color: "#f59e0b" },
];

export default function EmblaCarouselReactDemo() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4 p-6">
      <div className="w-full max-w-sm overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {slides.map(({ label, color }) => (
            <div
              key={label}
              className="flex-[0_0_100%] min-w-0 flex items-center justify-center h-48 rounded-xl select-none"
              style={{ backgroundColor: `${color}20` }}
            >
              <span
                className="text-xl font-bold"
                style={{ color }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3">
        <button
          onClick={scrollPrev}
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm transition-all border border-white/10 active:scale-95"
        >
          Prev
        </button>
        <button
          onClick={scrollNext}
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm transition-all border border-white/10 active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  );
}
