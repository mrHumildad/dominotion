import { useState } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// ... (imports and useState)

export default function TestZoom() {
  const [transform, setTransform] = useState({
    scale: 1,
    positionX: 0, // Adjusted
    positionY: 0, // Adjusted
  });

  const gridSize = 40;
  const tiles = [];
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      tiles.push(
        <div
          key={`${row}-${col}`}
          style={{
            width: 60,
            height: 60,
            background: (row + col) % 2 === 0 ? "#bde" : "#fff",
            border: "1px solid #888",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
          }}
        >
          {row},{col}
        </div>
      );
    }
  }

  return (
    <div style={{ height: "65vh", overflow: "hidden" }}>
      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
        limitToBounds={false}
      >
        <TransformComponent>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${gridSize}, 60px)`,
              gridTemplateRows: `repeat(${gridSize}, 60px)`,
              background: "#eee",
              width: gridSize * 60,
              height: "auto", // Changed to auto to prevent double scrolling
            }}
          >
            {tiles}
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}