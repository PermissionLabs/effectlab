export const usage = {
  install: "bun add embla-carousel-react",
  tsx: `"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];

export default function CarouselExample() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((label) => (
            <div
              key={label}
              className="flex-[0_0_100%] min-w-0 flex items-center justify-center h-48 bg-gray-100 rounded-xl"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <button onClick={scrollPrev}>Prev</button>
        <button onClick={scrollNext}>Next</button>
      </div>
    </div>
  );
}`,
};
