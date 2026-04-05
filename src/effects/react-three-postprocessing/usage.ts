export const usage = {
  install: "bun add @react-three/postprocessing @react-three/fiber three",
  tsx: `"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";
import { useRef } from "react";
import type { Mesh } from "three";

function GlowingSphere() {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1, 16]} />
      <meshStandardMaterial
        color="#8b5cf6"
        emissive="#7c3aed"
        emissiveIntensity={2}
      />
    </mesh>
  );
}

export default function PostprocessingExample() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }} style={{ height: "100vh" }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <GlowingSphere />
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} intensity={1.5} />
        <Noise opacity={0.05} />
      </EffectComposer>
    </Canvas>
  );
}`,
};
