export const usage = {
  install: "bun add @stianlarsen/react-light-beam",
  tsx: `"use client";

import dynamic from "next/dynamic";

// Use next/dynamic to avoid SSR issues with this component
const LightBeamInner = dynamic(() => import("./LightBeamInner"), { ssr: false });

export default function LightBeamExample() {
  return <LightBeamInner />;
}

// --- LightBeamInner.tsx ---
// "use client";
// import { LightBeam } from "@stianlarsen/react-light-beam";
//
// export default function LightBeamInner() {
//   return (
//     <div className="relative w-full h-96 bg-black overflow-hidden">
//       <LightBeam
//         colorDarkmode="hsl(210, 100%, 60%)"
//         fullWidth={0.8}
//       />
//       <div className="relative z-10 flex items-center justify-center h-full">
//         <h1 className="text-white text-3xl font-bold">Your Content</h1>
//       </div>
//     </div>
//   );
// }`,
};
