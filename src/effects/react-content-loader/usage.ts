export const usage = {
  install: "bun add react-content-loader",
  tsx: `"use client";

import ContentLoader from "react-content-loader";

export default function SkeletonExample() {
  return (
    <div className="w-full max-w-sm p-4 rounded-xl bg-gray-100">
      <ContentLoader
        speed={2}
        width="100%"
        height={160}
        viewBox="0 0 340 160"
        backgroundColor="#e5e7eb"
        foregroundColor="#f3f4f6"
      >
        {/* Image placeholder */}
        <rect x="0" y="0" rx="8" ry="8" width="340" height="80" />
        {/* Title */}
        <rect x="0" y="96" rx="4" ry="4" width="200" height="14" />
        {/* Text lines */}
        <rect x="0" y="120" rx="3" ry="3" width="340" height="10" />
        <rect x="0" y="140" rx="3" ry="3" width="260" height="10" />
      </ContentLoader>
    </div>
  );
}`,
};
