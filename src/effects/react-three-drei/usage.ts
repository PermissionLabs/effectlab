export const usage = {
  install: "bun add @react-three/fiber @react-three/drei three",
  tsx: `"use client";

import { Canvas } from "@react-three/fiber";
import { Stars, Float, MeshDistortMaterial } from "@react-three/drei";

function FloatingOrb() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh scale={1.8}>
        <icosahedronGeometry args={[1, 16]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          emissive="#4c1d95"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
          distort={0.4}
          speed={3}
        />
      </mesh>
    </Float>
  );
}

// IMPORTANT: Use next/dynamic with { ssr: false } to wrap this component
// in Next.js to prevent SSR errors with Three.js
export default function DreiScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ width: "100%", height: "400px", background: "#050510" }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
      <Stars radius={80} depth={60} count={2000} factor={5} fade speed={1.5} />
      <FloatingOrb />
    </Canvas>
  );
}`,
};
