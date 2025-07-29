import { useState } from 'react'
import {worldMapMatrix} from './logics/worldMapMatrix.js'
import { TransformWrapper,TransformComponent} from "react-zoom-pan-pinch";
import { generateRandomAgents } from './logics/agents.js';
import { findAreaByChar } from './logics/utils.js';
import {colors, worldAreas} from './logics/data.js'
import { getPossibleRotations, tileBorders, tile2Agent} from './logics/matrix_utils.js';
import Agent from './comps/Agent.jsx';
import './App.css'
import './comps/Die3D/bigDie.css'
import './comps/Die3D/Die3D.css'
import Face from './comps/Die3D/Face.jsx';


function App() {
  const [matrix, setMatrix] = useState(worldMapMatrix);
  const [selectedCell, setSelectedCell] = useState(null);
  const [selectedPool, setSelectedPool] = useState(null);
  const [agentsPool, setAgentsPool] = useState(() => generateRandomAgents(3));
  const [myAgents, setMyAgents] = useState([]);
  const [deployedAgent, setDeployedAgent] = useState({
    ideology: {col: null, row: null},
    field: {col: null, row: null},
    rotation: null
  });
  //myAgents.map(agent => console.log(agent.fieldCell, agent.ideologyCell))
  //console.log('pool', agentsPool)
  const cellClick = ({row, col}) => {
    console.log('row', row, 'col', col)
    console.log(tile2Agent({row, col}, myAgents))
    if (matrix[row][col] === 'w') return;
    if (deployedAgent && deployedAgent.field.row === row && deployedAgent.field.col === col) {
      let myNewAgent = {...selectedPool, ideologyCell: deployedAgent.ideology, fieldCell: deployedAgent.field}
      console.log('my new agent', myNewAgent)
      setMyAgents([...myAgents, myNewAgent])
      setAgentsPool(agentsPool.filter(agent => agent.id !== myNewAgent.id))
      setDeployedAgent({
        ideology: {col: null, row: null},
        field: {col: null, row: null},
        rotation: null
      })
      setSelectedPool(null)
      return
    };
    if (deployedAgent && deployedAgent.ideology.row === row && deployedAgent.ideology.col === col) {
      const rotations = getPossibleRotations({ideo: deployedAgent.ideology, matrix, myAgents})
      //console.log(rotations)
      const next = rotations[deployedAgent.rotation + 1]
      setDeployedAgent(
        {
          ideology: deployedAgent.ideology,
          field: next ? next : rotations[0],
          rotation:next ? deployedAgent.rotation + 1 : 0
        }
      )
      return;
    }
    if (selectedPool) {
      const rotations = getPossibleRotations({ideo: {row, col}, matrix, myAgents})
      //console.log(rotations)
      setDeployedAgent({ideology: {row, col}, field: rotations[0] })
    }
    setSelectedCell({row, col})
  }
  const agentClick = (agent) => {
    //console.log(agent)
    setSelectedPool(agent)
  }
const tiles = matrix.map((row, rowIndex) => {
    return row.map((cell, colIndex) => {
      const isSelected = selectedCell && selectedCell.row === rowIndex && selectedCell.col === colIndex;

      // Find if any of 'myAgents' has its ideology or field at the current cell
      const currentMyAgent = myAgents.find(
        (agent) =>
          (agent.ideologyCell.row === rowIndex && agent.ideologyCell.col === colIndex) ||
          (agent.fieldCell.row === rowIndex && agent.fieldCell.col === colIndex)
      );

      const isDeployedIdeology =
        deployedAgent && deployedAgent.ideology.row === rowIndex && deployedAgent.ideology.col === colIndex;
      const isDeployedField =
        deployedAgent && deployedAgent.field.row === rowIndex && deployedAgent.field.col === colIndex;

      if (cell === 'w')
        return (
          <div
            className='tile water'
            key={`${rowIndex}-${colIndex}`}
            id={`${rowIndex}-${colIndex}`}
            onClick={() => cellClick({ row: rowIndex, col: colIndex })}
          ></div>
        );

      const area = findAreaByChar(cell);
      const cellCol = colors.ideologies[area.sides[5].ideology];
      const cellBorders = tileBorders({row: rowIndex, col: colIndex}, matrix, myAgents, currentMyAgent);
      return (
        <div
          key={`${rowIndex}-${colIndex}`}
          id={`${rowIndex}-${colIndex}`}
          style={{ 
            backgroundColor: cellCol,
            borderTopColor: cellBorders.top,
            borderRightColor: cellBorders.right,
            borderBottomColor: cellBorders.bottom,
            borderLeftColor: cellBorders.left
          }}
          className={`tile ${isSelected ? 'selected' : ''}`}
          onClick={() => cellClick({ row: rowIndex, col: colIndex })}
        >
          {/* Render deployed agent's ideology or field */}
          {isDeployedIdeology && (
            <Face
              value={selectedPool.ideologyValue}
              type='ideology'
              id={selectedPool.id}
              name={selectedPool.ideology}
            />
          )}
          {isDeployedField && (
            <Face value={selectedPool.fieldValue} type='field' id={selectedPool.id} name={selectedPool.field} />
          )}

          {/* Render myAgent's ideology or field if present at this cell */}
          {currentMyAgent && currentMyAgent.ideologyCell.row === rowIndex && currentMyAgent.ideologyCell.col === colIndex && (
            <Face
              value={currentMyAgent.ideologyValue}
              type='ideology'
              id={currentMyAgent.id}
              name={currentMyAgent.ideology}
            />
          )}
          {currentMyAgent && currentMyAgent.fieldCell.row === rowIndex && currentMyAgent.fieldCell.col === colIndex && (
            <Face
              value={currentMyAgent.fieldValue}
              type='field'
              id={currentMyAgent.id}
              name={currentMyAgent.field}
              /* borders={{top: tileBorders({row: rowIndex, col: colIndex}, matrix, myAgents, currentMyAgent)}} */
            />
          )}
        </div>
      );
    });
  });
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
          <Agent key={agent.id} agent={agent} agentClick={agentClick}/>
        ))}
      </div>
      <div className='side-panel'>
        <div className='butts'>
          <button onClick={() => setAgentsPool([...agentsPool, ...generateRandomAgents(1)])}>NEW AGENT</button>
          <button onClick={() => setAgentsPool(generateRandomAgents(3))}>REROLL ALL</button>
        </div>
      </div>
      </div>
      <div className='selected-agent'>
        {selectedPool && <span>{selectedPool.name + " - " +  selectedPool.title}</span>}
      </div>
    </div>
     
  )
}

export default App

      