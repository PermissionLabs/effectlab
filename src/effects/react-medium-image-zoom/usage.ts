export const usage = {
  install: "bun add react-medium-image-zoom",
  css: `/* Add to your global CSS file */
@import "react-medium-image-zoom/dist/styles.css";`,
  tsx: `"use client";

import Zoom from "react-medium-image-zoom";
// Import styles in your globals.css:
// @import "react-medium-image-zoom/dist/styles.css";

export default function ImageZoomExample() {
  return (
    <div style={{ padding: "2rem" }}>
      <Zoom>
        <img
          src="/my-image.jpg"
          alt="Zoomable"
          width={400}
          height={300}
          style={{ borderRadius: 12, cursor: "zoom-in" }}
        />
      </Zoom>
      <p style={{ color: "#888", fontSize: 12, marginTop: 8 }}>
        Click the image to zoom
      </p>
    </div>
  );
}`,
};
