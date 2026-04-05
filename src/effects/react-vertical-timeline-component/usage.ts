export const usage = {
  install: "bun add react-vertical-timeline-component",
  tsx: `"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function TimelineExample() {
  return (
    <VerticalTimeline lineColor="#e5e7eb">
      <VerticalTimelineElement
        contentStyle={{ background: "#f3f4f6", boxShadow: "none" }}
        date="2024 Q1"
        iconStyle={{ background: "#8b5cf6", color: "#fff" }}
      >
        <h3 className="font-semibold">Project Launch</h3>
        <p className="text-sm text-gray-600">Initial release.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: "#f3f4f6", boxShadow: "none" }}
        date="2024 Q2"
        iconStyle={{ background: "#3b82f6", color: "#fff" }}
      >
        <h3 className="font-semibold">Feature Update</h3>
        <p className="text-sm text-gray-600">Major improvements.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}`,
};
