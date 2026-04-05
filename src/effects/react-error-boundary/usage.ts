export const usage = {
  install: "bun add react-error-boundary",
  tsx: `"use client";

import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div role="alert" className="p-4 bg-red-100 rounded-lg">
      <p className="text-red-800 font-bold">Something went wrong:</p>
      <pre className="text-red-600 text-sm">{error.message}</pre>
      <button onClick={resetErrorBoundary} className="mt-2 px-3 py-1 bg-red-500 text-white rounded">
        Try again
      </button>
    </div>
  );
}

function MyComponent() {
  // This component may throw an error
  return <div>Content that might fail</div>;
}

export default function Example() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => { /* reset app state */ }}
    >
      <MyComponent />
    </ErrorBoundary>
  );
}`,
};
