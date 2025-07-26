import { useState } from 'react'
import {worldMapMatrix} from './logics/worldMapMatrix.js'
import { TransformWrapper,TransformComponent} from "react-zoom-pan-pinch";
import { generateRandomAgents } from './logics/agents.js';
import Agent from './comps/Agent.jsx';
import './App.css'
import './comps/Die3D/bigDie.css'
import './comps/Die3D/Die3D.css'


const tileTypes = {
  'w': 'water',
  'l': 'land',
}

function App() {
  const [matrix, setMatrix] = useState(worldMapMatrix);
  const [selectedCell, setSelectedCell] = useState(null);
  const [counter, setCounter] = useState(0);
  const [selectedPool, setSelectedPool] = useState(null);
  const [agentsPool, setAgentsPool] = useState(() =>generateRandomAgents(counter,3));
  const cellClick = ({row, col}) => {
    if (matrix[row][col] === 'w') return
    setSelectedCell({row, col}) 
  }
  const agentClick = (agent) => {
    console.log(agent)
    setSelectedPool(agent)
  }
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
          onClick={() => cellClick({ row: rowIndex, col: colIndex })}
          /* onMouseEnter={() => setHoveredCell({ row: rowIndex, col: colIndex })}
          onMouseLeave={() => setHoveredCell(null)} */
        >{cell}
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
      <div className='bottom'>
        <div className='agents-pool'>
        {agentsPool.map((agent, index) => (
          <Agent key={index} agent={agent} agentClick={agentClick}/>
        ))}
      </div>
      <div className='side-panel'></div>
      </div>
      <div className='selected-agent'>
        {selectedPool && <span>{selectedPool.name + " - " +  selectedPool.title}</span>}
      </div>
    </div>
     
  )
}

export default App

      