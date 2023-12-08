// Bubble.jsx
import React from "react";

const Bubble = ({ top, left, size, color }) => {
  const bubbleStyle = {
    position: "absolute",
    top,
    left,
    width: `${size}px`,
    height: `${size}px`,
    background: color || "#EF6360",
    borderRadius: "50%",
    zIndex: -.5, // Render bubbles in the background
  };

  return <div style={bubbleStyle}></div>;
};

export default Bubble;
