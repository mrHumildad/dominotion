import { useState } from 'react'
import {worldMapMatrix} from './logics/worldMapMatrix.js'
import { TransformWrapper,TransformComponent} from "react-zoom-pan-pinch";
import { generateRandomAgents } from './logics/agents.js';
import Agent from './comps/Agent.jsx';
import './App.css'

const tileTypes = {
  'w': 'water',
  'l': 'land',
}

function App() {
  const [matrix, setMatrix] = useState(worldMapMatrix);
  const [selectedCell, setSelectedCell] = useState(null);
  const [counter, setCounter] = useState(0);
  const [agentsPool, setAgentsPool] = useState(generateRandomAgents(counter,3));
  /* const [hoveredCell, setHoveredCell] = useState(null) */
  const tiles = matrix.map((row, rowIndex) => {
    return row.map((cell, colIndex) => {
      /* const cellValue = matrix[] */
      const cellType = tileTypes[cell];
      const isSelected = selectedCell && selectedCell.row === rowIndex && selectedCell.col === colIndex
      /* const isHovered = hoveredCell && hoveredCell.row === rowIndex && hoveredCell.col === colIndex */
      return (
        <div
          key={`${rowIndex}-${colIndex}`}
          id={`${rowIndex}-${colIndex}`}
          className={`tile ${cellType} ${isSelected ? 'selected' : ''} `}
          onClick={() => setSelectedCell({ row: rowIndex, col: colIndex })}
          /* onMouseEnter={() => setHoveredCell({ row: rowIndex, col: colIndex })}
          onMouseLeave={() => setHoveredCell(null)} */
        >
        </div>
      )
    })
  })
  return (
    <div id='App'>
      <span id='game-title'>World DominOtion</span>
      <div id='worldMap'>
      <TransformWrapper
      initialScale={1}
      initialPositionX={200}
      initialPositionY={100}
      >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          <TransformComponent>
            <div className="world-map" style={{ display: 'grid', gridTemplateColumns: `repeat(${matrix[0].length}, 1fr)` }}>
        {tiles}
      </div>
          </TransformComponent>
        </>
      )}
      </TransformWrapper>
      </div>
      <div id='agents-pool'>
        {agentsPool.map((agent, index) => (
          <Agent key={index} agent={agent} />
        ))}
      </div>
    </div>
     
  )
}

export default App

      