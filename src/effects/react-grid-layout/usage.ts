export const usage = {
  install: "bun add react-grid-layout",
  tsx: `"use client";

import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

const layouts = {
  lg: [
    { i: "a", x: 0, y: 0, w: 2, h: 2 },
    { i: "b", x: 2, y: 0, w: 2, h: 2 },
    { i: "c", x: 0, y: 2, w: 2, h: 2 },
    { i: "d", x: 2, y: 2, w: 2, h: 2 },
  ],
};

export default function DashboardGrid() {
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768 }}
      cols={{ lg: 4, md: 3, sm: 2 }}
      rowHeight={100}
    >
      <div key="a" className="bg-white/5 rounded-xl p-4">Card A</div>
      <div key="b" className="bg-white/5 rounded-xl p-4">Card B</div>
      <div key="c" className="bg-white/5 rounded-xl p-4">Card C</div>
      <div key="d" className="bg-white/5 rounded-xl p-4">Card D</div>
    </ResponsiveGridLayout>
  );
}`,
};
