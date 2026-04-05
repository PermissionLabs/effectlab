export const usage = {
  install: "bun add react-hot-toast",
  tsx: `"use client";

import { Toaster, toast } from "react-hot-toast";

export default function HotToastExample() {
  return (
    <div className="p-8">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1a1a2e",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#fff",
          },
        }}
      />
      <div className="flex gap-3">
        <button onClick={() => toast.success("Saved!")}>
          Success
        </button>
        <button onClick={() => toast.error("Error!")}>
          Error
        </button>
        <button
          onClick={() =>
            toast.promise(fetch("/api/data"), {
              loading: "Loading...",
              success: "Done!",
              error: "Failed!",
            })
          }
        >
          Loading
        </button>
        <button
          onClick={() =>
            toast.custom((t) => (
              <div className="bg-gray-800 text-white px-4 py-3 rounded-lg">
                Custom toast content
                <button onClick={() => toast.dismiss(t.id)}>Close</button>
              </div>
            ))
          }
        >
          Custom
        </button>
      </div>
    </div>
  );
}`,
};
