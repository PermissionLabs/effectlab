export const usage = {
  install: "bun add react-joyride",
  tsx: `"use client";

import { useState } from "react";
import Joyride, { type Step } from "react-joyride";

const steps: Step[] = [
  {
    target: ".step-welcome",
    content: "Welcome! This is your dashboard.",
    placement: "bottom",
  },
  {
    target: ".step-create",
    content: "Click here to create a new item.",
    placement: "left",
  },
];

export default function JoyrideExample() {
  const [run, setRun] = useState(false);

  return (
    <div>
      <Joyride
        steps={steps}
        run={run}
        continuous
        showSkipButton
        showProgress
        styles={{
          options: {
            primaryColor: "#8b5cf6",
            zIndex: 1000,
          },
        }}
        callback={(data) => {
          if (data.status === "finished" || data.status === "skipped") {
            setRun(false);
          }
        }}
      />

      <nav className="step-welcome p-4 bg-gray-900">
        <span>My App</span>
      </nav>

      <main className="p-8">
        <button
          className="step-create px-4 py-2 bg-violet-600 text-white rounded"
          onClick={() => {}}
        >
          + New Item
        </button>

        <button
          onClick={() => setRun(true)}
          className="ml-4 px-4 py-2 border border-violet-500 text-violet-400 rounded"
        >
          Start Tour
        </button>
      </main>
    </div>
  );
}`,
};
