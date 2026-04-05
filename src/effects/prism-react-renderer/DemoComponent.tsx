"use client";

import { Highlight, themes } from "prism-react-renderer";

const sampleCode = `import { useState } from "react";

function Counter({ initial = 0 }) {
  const [count, setCount] = useState(initial);

  return (
    <div className="flex items-center gap-4">
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <span className="text-2xl font-bold">{count}</span>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  );
}

export default Counter;`;

export default function PrismReactRendererDemo() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-[#050510] rounded-2xl p-6">
      <div className="w-full max-w-lg rounded-xl overflow-hidden border border-white/10 shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
          <span className="ml-2 text-white/40 text-xs font-mono">Counter.tsx</span>
        </div>
        <Highlight theme={themes.nightOwl} code={sampleCode} language="tsx">
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre
              style={{ ...style, margin: 0, padding: "16px", fontSize: "13px", lineHeight: "1.6" }}
              className="overflow-x-auto"
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="inline-block w-8 text-right mr-4 text-white/20 select-none text-xs">
                    {i + 1}
                  </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}
