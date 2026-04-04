"use client";

import { Command } from "cmdk";
import { useState } from "react";

const items = {
  Projects: [
    { label: "Search Projects...", icon: "📁" },
    { label: "Create New Project", icon: "➕" },
    { label: "Recent Projects", icon: "🕐" },
  ],
  General: [
    { label: "Toggle Theme", icon: "🌗" },
    { label: "Open Settings", icon: "⚙️" },
    { label: "View Changelog", icon: "📋" },
  ],
  Account: [
    { label: "Profile Settings", icon: "👤" },
    { label: "Team Management", icon: "👥" },
    { label: "Billing & Plans", icon: "💳" },
    { label: "Sign Out", icon: "🚪" },
  ],
};

export default function CmdkDemo() {
  const [value, setValue] = useState("");

  return (
    <div className="flex items-center justify-center w-full h-full p-6">
      <Command
        value={value}
        onValueChange={setValue}
        className="w-full max-w-md rounded-xl border border-white/10 bg-[#0a0a1a] shadow-2xl overflow-hidden"
      >
        <Command.Input
          placeholder="Type a command or search..."
          className="w-full px-4 py-3 bg-transparent text-white text-sm outline-none border-b border-white/10 placeholder:text-white/30"
        />
        <Command.List className="max-h-[280px] overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-white/30 text-sm">
            No results found.
          </Command.Empty>

          {Object.entries(items).map(([group, groupItems]) => (
            <Command.Group
              key={group}
              heading={group}
              className="[&_[cmdk-group-heading]]:text-white/40 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider"
            >
              {groupItems.map((item) => (
                <Command.Item
                  key={item.label}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 text-sm cursor-pointer transition-colors data-[selected=true]:bg-white/10 data-[selected=true]:text-white"
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </Command.Item>
              ))}
            </Command.Group>
          ))}
        </Command.List>
      </Command>
    </div>
  );
}
