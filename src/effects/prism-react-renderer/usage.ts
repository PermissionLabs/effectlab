export const usage = {
  install: "bun add prism-react-renderer",
  tsx: `"use client";

import { Highlight, themes } from "prism-react-renderer";

const code = \`function greet(name: string) {
  return \\\`Hello, \\\${name}!\\\`;
}\`;

export default function CodeBlock() {
  return (
    <Highlight theme={themes.nightOwl} code={code} language="tsx">
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre style={{ ...style, padding: "16px", borderRadius: "8px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}`,
};
