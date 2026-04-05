"use client";

import { Virtuoso } from "react-virtuoso";

const users = [
  { name: "Alice", color: "text-violet-400", bg: "bg-violet-500/20" },
  { name: "Bob", color: "text-emerald-400", bg: "bg-emerald-500/20" },
  { name: "Charlie", color: "text-amber-400", bg: "bg-amber-500/20" },
  { name: "Diana", color: "text-rose-400", bg: "bg-rose-500/20" },
  { name: "Eve", color: "text-cyan-400", bg: "bg-cyan-500/20" },
];

const messages = [
  "Hey, how's the project going?",
  "Almost done with the new feature!",
  "Nice! Can you push the changes today?",
  "Sure, just finishing up the tests.",
  "Great work everyone!",
  "Should we deploy to staging first?",
  "Yes, let's test there before prod.",
  "I found a small bug in the auth flow.",
  "Can you create an issue for it?",
  "Done! I'll fix it after lunch.",
  "The design review is at 3pm.",
  "I'll prepare the slides now.",
  "Don't forget the accessibility audit.",
  "Already on it.",
  "Let's ship it!",
];

export default function ReactVirtuosoDemo() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6">
      <p className="text-white/40 text-xs uppercase tracking-widest mb-4">
        Chat messages (virtualized)
      </p>
      <div className="w-full max-w-sm rounded-xl border border-white/10 overflow-hidden">
        <Virtuoso
          style={{ height: 320 }}
          totalCount={200}
          itemContent={(index) => {
            const user = users[index % users.length];
            const msg = messages[index % messages.length];
            const isMe = index % 5 === 0;
            return (
              <div
                className={`flex gap-3 px-4 py-2 ${
                  isMe ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${user.bg} ${user.color} shrink-0`}
                >
                  {user.name[0]}
                </div>
                <div
                  className={`max-w-[75%] rounded-lg px-3 py-2 text-xs ${
                    isMe
                      ? "bg-violet-500/20 text-violet-200"
                      : "bg-white/5 text-white/70"
                  }`}
                >
                  {!isMe && (
                    <p className={`text-[10px] font-semibold mb-0.5 ${user.color}`}>
                      {user.name}
                    </p>
                  )}
                  <p>{msg}</p>
                </div>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}
