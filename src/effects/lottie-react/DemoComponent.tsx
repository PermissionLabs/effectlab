"use client";

import Lottie from "lottie-react";

// Inline animation data: a simple morphing geometric animation
const geometricAnimation = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 120,
  w: 400,
  h: 400,
  nm: "Geometric Morph",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] }, t: 0, s: [0] },
            { t: 120, s: [360] },
          ],
        },
        p: { a: 0, k: [200, 200, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] }, o: { x: [0.6, 0.6, 0.6], y: [0, 0, 0] }, t: 0, s: [100, 100, 100] },
            { i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] }, o: { x: [0.6, 0.6, 0.6], y: [0, 0, 0] }, t: 60, s: [120, 120, 100] },
            { t: 120, s: [100, 100, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: "el",
          d: 1,
          s: { a: 0, k: [120, 120] },
          p: { a: 0, k: [0, 0] },
          nm: "Ellipse",
        },
        {
          ty: "st",
          c: { a: 0, k: [0.545, 0.361, 0.965, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 3 },
          lc: 2,
          lj: 2,
          nm: "Stroke",
        },
        {
          ty: "fl",
          c: {
            a: 1,
            k: [
              { i: { x: [0.4, 0.4, 0.4, 0.4], y: [1, 1, 1, 1] }, o: { x: [0.6, 0.6, 0.6, 0.6], y: [0, 0, 0, 0] }, t: 0, s: [0.545, 0.361, 0.965, 0.3] },
              { i: { x: [0.4, 0.4, 0.4, 0.4], y: [1, 1, 1, 1] }, o: { x: [0.6, 0.6, 0.6, 0.6], y: [0, 0, 0, 0] }, t: 60, s: [0.388, 0.4, 0.945, 0.5] },
              { t: 120, s: [0.545, 0.361, 0.965, 0.3] },
            ],
          },
          o: { a: 0, k: 100 },
          r: 1,
          nm: "Fill",
        },
      ],
      ip: 0,
      op: 120,
      st: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Square",
      sr: 1,
      ks: {
        o: { a: 0, k: 80 },
        r: {
          a: 1,
          k: [
            { i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] }, t: 0, s: [45] },
            { i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] }, t: 60, s: [0] },
            { t: 120, s: [45] },
          ],
        },
        p: { a: 0, k: [200, 200, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] }, o: { x: [0.6, 0.6, 0.6], y: [0, 0, 0] }, t: 0, s: [80, 80, 100] },
            { i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] }, o: { x: [0.6, 0.6, 0.6], y: [0, 0, 0] }, t: 60, s: [110, 110, 100] },
            { t: 120, s: [80, 80, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: "rc",
          d: 1,
          s: { a: 0, k: [100, 100] },
          p: { a: 0, k: [0, 0] },
          r: { a: 0, k: 12 },
          nm: "Rectangle",
        },
        {
          ty: "st",
          c: { a: 0, k: [0.388, 0.4, 0.945, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 2 },
          lc: 2,
          lj: 2,
          nm: "Stroke",
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.388, 0.4, 0.945, 0.15] },
          o: { a: 0, k: 100 },
          r: 1,
          nm: "Fill",
        },
      ],
      ip: 0,
      op: 120,
      st: 0,
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Triangle",
      sr: 1,
      ks: {
        o: { a: 0, k: 60 },
        r: {
          a: 1,
          k: [
            { i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] }, t: 0, s: [0] },
            { t: 120, s: [-360] },
          ],
        },
        p: { a: 0, k: [200, 200, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [60, 60, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: "sr",
          sy: 1,
          d: 1,
          pt: { a: 0, k: 3 },
          p: { a: 0, k: [0, 0] },
          r: { a: 0, k: 0 },
          ir: { a: 0, k: 30 },
          or: { a: 0, k: 60 },
          nm: "Polystar",
        },
        {
          ty: "st",
          c: { a: 0, k: [0.776, 0.631, 1, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 2 },
          lc: 2,
          lj: 2,
          nm: "Stroke",
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.776, 0.631, 1, 0.1] },
          o: { a: 0, k: 100 },
          r: 1,
          nm: "Fill",
        },
      ],
      ip: 0,
      op: 120,
      st: 0,
    },
  ],
};

export default function LottieReactDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4 p-6">
      <div className="w-full max-w-xs aspect-square rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
        <Lottie
          animationData={geometricAnimation}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <p className="text-white/40 text-xs font-mono">Lottie Animation (inline JSON)</p>
    </div>
  );
}
