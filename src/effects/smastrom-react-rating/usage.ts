export const usage = {
  install: "bun add @smastrom/react-rating",
  tsx: `"use client";

import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const purpleStyle = {
  itemShapes: (
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  ),
  activeFillColor: "#8b5cf6",
  inactiveFillColor: "#1e1b4b",
};

export default function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <Rating
        style={{ maxWidth: 240 }}
        value={rating}
        onChange={setRating}
        itemStyles={purpleStyle}
      />
      <p className="text-sm text-white/60">
        You rated: {rating} / 5
      </p>
    </div>
  );
}`,
};
