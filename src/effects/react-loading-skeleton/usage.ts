export const usage = {
  install: "bun add react-loading-skeleton",
  tsx: `"use client";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingCard() {
  return (
    <SkeletonTheme baseColor="#1a1a2e" highlightColor="#2a2a4a">
      <div className="max-w-sm rounded-xl bg-gray-900 p-5">
        {/* Avatar + Name */}
        <div className="flex items-center gap-4 mb-4">
          <Skeleton circle width={48} height={48} />
          <div className="flex-1">
            <Skeleton width="60%" height={16} />
            <Skeleton width="40%" height={12} style={{ marginTop: 6 }} />
          </div>
        </div>

        {/* Text lines */}
        <Skeleton count={3} height={12} style={{ marginBottom: 6 }} />

        {/* Action buttons */}
        <div className="flex gap-3 mt-4">
          <Skeleton width={80} height={32} borderRadius={8} />
          <Skeleton width={80} height={32} borderRadius={8} />
        </div>
      </div>
    </SkeletonTheme>
  );
}`,
};
