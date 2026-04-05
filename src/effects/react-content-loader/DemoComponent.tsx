"use client";

import ContentLoader from "react-content-loader";

export default function ReactContentLoaderDemo() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-8">
      <div className="flex flex-col gap-6 w-full max-w-sm">
        {/* Card skeleton */}
        <div className="rounded-xl bg-white/5 border border-white/10 p-4">
          <ContentLoader
            speed={2}
            width="100%"
            height={180}
            viewBox="0 0 340 180"
            backgroundColor="#1a1a2e"
            foregroundColor="#2a2a4a"
          >
            {/* Image placeholder */}
            <rect x="0" y="0" rx="8" ry="8" width="340" height="90" />
            {/* Title line */}
            <rect x="0" y="108" rx="4" ry="4" width="220" height="14" />
            {/* Description lines */}
            <rect x="0" y="132" rx="3" ry="3" width="340" height="10" />
            <rect x="0" y="150" rx="3" ry="3" width="280" height="10" />
            <rect x="0" y="168" rx="3" ry="3" width="180" height="10" />
          </ContentLoader>
        </div>

        {/* Profile skeleton */}
        <div className="rounded-xl bg-white/5 border border-white/10 p-4">
          <ContentLoader
            speed={2}
            width="100%"
            height={60}
            viewBox="0 0 340 60"
            backgroundColor="#1a1a2e"
            foregroundColor="#2a2a4a"
          >
            {/* Avatar */}
            <circle cx="30" cy="30" r="24" />
            {/* Name */}
            <rect x="68" y="12" rx="4" ry="4" width="140" height="14" />
            {/* Subtitle */}
            <rect x="68" y="36" rx="3" ry="3" width="200" height="10" />
          </ContentLoader>
        </div>
      </div>
    </div>
  );
}
