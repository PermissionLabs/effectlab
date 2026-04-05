"use client";

import { useState } from "react";
import { Rating } from "@smastrom/react-rating";

const purpleStyle = {
  itemShapes: (
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  ),
  activeFillColor: "#8b5cf6",
  inactiveFillColor: "#1e1b4b",
};

export default function SmastromReactRatingDemo() {
  const [rating, setRating] = useState(3);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6 gap-6">
      <p className="text-white/50 text-xs uppercase tracking-widest">
        Rate your experience
      </p>

      <Rating
        style={{ maxWidth: 240 }}
        value={rating}
        onChange={setRating}
        itemStyles={purpleStyle}
      />

      <div className="flex flex-col items-center gap-1">
        <span className="text-3xl font-bold text-violet-400">{rating}.0</span>
        <span className="text-white/40 text-sm">
          {rating === 0 && "No rating yet"}
          {rating === 1 && "Poor"}
          {rating === 2 && "Fair"}
          {rating === 3 && "Good"}
          {rating === 4 && "Great"}
          {rating === 5 && "Excellent"}
        </span>
      </div>
    </div>
  );
}
