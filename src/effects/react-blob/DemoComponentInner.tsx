"use client";

import { Blob } from "react-blob";

export default function ReactBlobDemoInner() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-8 overflow-hidden">
      <div className="relative">
        {/* Outer glow blob */}
        <Blob
          size="280px"
          style={{
            background: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 30%, #a78bfa 60%, #6d28d9 100%)",
            opacity: 0.4,
            filter: "blur(30px)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            animation: "blobSpin 12s linear infinite",
          }}
        />
        {/* Main blob */}
        <Blob
          size="220px"
          style={{
            background: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 40%, #7c3aed 70%, #6d28d9 100%)",
            boxShadow: "0 0 60px rgba(139, 92, 246, 0.4), inset 0 0 40px rgba(167, 139, 250, 0.3)",
            animation: "blobSpin 8s linear infinite reverse",
          }}
        />
        <style>{`
          @keyframes blobSpin {
            from { border-radius: 28% 72% 60% 40% / 54% 34% 66% 46%; }
            25% { border-radius: 60% 40% 34% 66% / 40% 60% 40% 60%; }
            50% { border-radius: 40% 60% 66% 34% / 66% 40% 60% 40%; }
            75% { border-radius: 72% 28% 40% 60% / 34% 66% 34% 66%; }
            to { border-radius: 28% 72% 60% 40% / 54% 34% 66% 46%; }
          }
        `}</style>
      </div>
    </div>
  );
}
