export const usage = {
  install: "bun add react-wrap-balancer",
  tsx: `"use client";

import Balancer from "react-wrap-balancer";

export default function BalancedTitle() {
  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-3xl font-bold">
        <Balancer>
          This long title will be balanced across
          multiple lines for better readability
        </Balancer>
      </h1>
      <p className="mt-4 text-gray-400">
        <Balancer>
          Body text can also benefit from balancing,
          especially in narrow containers or card layouts.
        </Balancer>
      </p>
    </div>
  );
}`,
};
