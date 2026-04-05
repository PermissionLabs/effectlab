export const usage = {
  install: "bun add yet-another-react-lightbox",
  tsx: `"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const slides = [
  { src: "/images/photo-1.jpg" },
  { src: "/images/photo-2.jpg" },
  { src: "/images/photo-3.jpg" },
];

export default function GalleryLightbox() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt=""
            className="cursor-pointer rounded-lg"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </div>
  );
}`,
};
