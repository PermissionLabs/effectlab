export const usage = {
  install: "bun add next-themes",
  tsx: `"use client";

import { ThemeProvider, useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-3 rounded-xl border border-gray-700 hover:bg-gray-800 transition-colors"
    >
      {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
    </button>
  );
}

// Wrap your app layout with ThemeProvider:
// <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//   <App />
// </ThemeProvider>

export default function ThemeExample() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="flex items-center justify-center p-8">
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}`,
};
