export const usage = {
  install: "bun add react-tooltip",
  tsx: `import { Tooltip } from "react-tooltip";

export default function Example() {
  return (
    <>
      <button data-tooltip-id="my-tip" data-tooltip-content="Hello!">
        Hover me
      </button>
      <Tooltip id="my-tip" place="top" />
    </>
  );
}`,
};
