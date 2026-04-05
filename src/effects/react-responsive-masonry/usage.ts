export const usage = {
  install: "bun add react-responsive-masonry",
  tsx: `"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const items = [
  { height: 150, title: "Card A" },
  { height: 220, title: "Card B" },
  { height: 130, title: "Card C" },
  { height: 190, title: "Card D" },
  { height: 160, title: "Card E" },
  { height: 200, title: "Card F" },
];

export default function MasonryExample() {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="12px">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-xl bg-white/5 border border-white/10 p-4"
            style={{ height: item.height }}
          >
            <h3 className="text-white font-medium">{item.title}</h3>
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}`,
};
