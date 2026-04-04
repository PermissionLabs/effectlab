"use client";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// CSS is imported via globals.css or layout — import here causes build script issues

export default function ReactLoadingSkeletonDemo() {
  return (
    <div className="flex items-center justify-center w-full h-full p-6">
      <SkeletonTheme baseColor="#1a1a2e" highlightColor="#2a2a4a">
        <div className="w-full max-w-sm space-y-5">
          {/* Card 1: User profile card */}
          <div className="rounded-xl bg-white/5 border border-white/10 p-5">
            <div className="flex items-center gap-4 mb-4">
              <Skeleton circle width={48} height={48} />
              <div className="flex-1">
                <Skeleton width="60%" height={16} />
                <Skeleton width="40%" height={12} style={{ marginTop: 6 }} />
              </div>
            </div>
            <Skeleton count={3} height={12} style={{ marginBottom: 6 }} />
            <div className="flex gap-3 mt-4">
              <Skeleton width={80} height={32} borderRadius={8} />
              <Skeleton width={80} height={32} borderRadius={8} />
            </div>
          </div>

          {/* Card 2: Media card */}
          <div className="rounded-xl bg-white/5 border border-white/10 p-5">
            <Skeleton height={120} borderRadius={8} />
            <Skeleton width="75%" height={18} style={{ marginTop: 12 }} />
            <Skeleton count={2} height={12} style={{ marginTop: 6 }} />
          </div>

          {/* Card 3: Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"
              >
                <Skeleton width={40} height={28} style={{ margin: "0 auto" }} />
                <Skeleton width="70%" height={10} style={{ margin: "6px auto 0" }} />
              </div>
            ))}
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
}
