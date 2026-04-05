export const usage = {
  install: "bun add react-activity-calendar",
  tsx: `"use client";

import { ActivityCalendar } from "react-activity-calendar";

const sampleData = Array.from({ length: 365 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (365 - i));
  const level = Math.floor(Math.random() * 5) as 0 | 1 | 2 | 3 | 4;
  return {
    date: date.toISOString().split("T")[0],
    count: level * 3,
    level,
  };
});

const purpleTheme = {
  dark: ["#161032", "#3b1d71", "#6b21a8", "#9333ea", "#c084fc"],
};

export default function ContributionCalendar() {
  return (
    <ActivityCalendar
      data={sampleData}
      theme={purpleTheme}
      colorScheme="dark"
      blockSize={12}
      blockMargin={3}
      fontSize={12}
    />
  );
}`,
};
