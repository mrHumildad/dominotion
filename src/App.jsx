import { useState } from 'react'
import {worldMapMatrix} from './logics/worldMapMatrix.js'
import { TransformWrapper,TransformComponent} from "react-zoom-pan-pinch";
import { generateRandomAgents } from './logics/agents.js';
import { findAreaByChar } from './logics/utils.js';
import {colors, desatColors, worldAreas} from './logics/data.js';
import { AgentDescription } from './logics/agents.js';
import { getPossibleRotations, tileBorders, tile2Agent} from './logics/matrix_utils.js';
import Agent from './comps/Agent.jsx';
import './App.css'
import './comps/Die3D/bigDie.css'
import './comps/Die3D/Die3D.css'
import Face from './comps/Die3D/Face.jsx';


function App() {
  const [matrix, setMatrix] = useState(worldMapMatrix);
  const [week, setWeek] = useState(0);
  const [phase, setPhase] = useState('INIT');
  const [selectedCell, setSelectedCell] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [deployableArea, setDeployableArea] = useState(null);
  const [agentsPool, setAgentsPool] = useState(() => generateRandomAgents(3));
  const [myAgents, setMyAgents] = useState([]);
  const [deployedAgent, setDeployedAgent] = useState({
    ideology: {col: null, row: null},
    field: {col: null, row: null},
    rotation: null
  });
  console.log('myAgents', myAgents, deployableArea, selectedAgent, deployedAgent)
  //myAgents.map(agent => console.log(agent.fieldCell, agent.ideologyCell))
  //console.log('pool', agentsPool)
  const travelClick = () => {
    setDeployedAgent({
      ideology: {col: null, row: null},
      field: {col: null, row: null},
      rotation: 0
    })
    setSelectedAgent(null)
    if (phase === 'TRAVEL') {
      setPhase('INIT');
      return;
    }
    setPhase('TRAVEL')
  }
  const cellClick = ({row, col}) => {
    console.log('row', row, 'col', col)
    console.log(tile2Agent({row, col}, myAgents))

    if (matrix[row][col] === ' ') return;
    //  click to cell to travel agent
    if (phase === 'TRAVEL' && !selectedAgent) {
      const agentToSelect = tile2Agent({row, col}, myAgents); // Get the agent here
      if(agentToSelect) { // Check if an agent was found
        console.log('selected agent', agentToSelect); // Use the local variable here
        let traveler = myAgents.find(agent => agent.id === agentToSelect.agent.id) // Use agentToSelect
        traveler.fieldCell = {row: null, col: null}
        traveler.ideologyCell = {row: null, col: null}
        console.log(traveler);
        setSelectedAgent(traveler); // Set the state
        setMyAgents([...myAgents.filter(agent => agent.id !== traveler.id), traveler])
      }
    }
    // click todeploy agent
    if (deployedAgent && deployedAgent.field.row === row && deployedAgent.field.col === col) {
      let myNewAgent = {...selectedAgent, ideologyCell: deployedAgent.ideology, fieldCell: deployedAgent.field}
      console.log('my new agent', myNewAgent)
      setMyAgents([...myAgents.filter(a => a.id !== myNewAgent.id), myNewAgent])
      setAgentsPool(agentsPool.filter(agent => agent.id !== myNewAgent.id))
      setDeployedAgent({
        ideology: {col: null, row: null},
        field: {col: null, row: null},
        rotation: 0
      })
      setSelectedAgent(null)
      return
    };
    // click to rotate agent
    if (deployedAgent && deployedAgent.ideology.row === row && deployedAgent.ideology.col === col) {
      const char = phase === 'TRAVEL' ? '*' : deployableArea.char
      const rotations = getPossibleRotations({ideo: deployedAgent.ideology, matrix, myAgents, char})
      //console.log(rotations)
      const next = rotations[deployedAgent.rotation + 1]
      setDeployedAgent(
        {
          ideology: deployedAgent.ideology,
          field: next ? next : rotations[0],
          rotation: next ? deployedAgent.rotation + 1 : 0
        }
      )
      return;
    }
    // try to deploy on cellfrom pool or travel 
    if (selectedAgent) {
      console.log('deploying agent', matrix[row][col], deployableArea.char)
      if (matrix[row][col] !== deployableArea.char) return;
      const char = phase === 'TRAVEL' ? '*' : deployableArea.char
      const rotations = getPossibleRotations({ideo: {row, col, rotation: 0}, matrix, myAgents, char})
      //console.log(rotations)
      if (rotations.length === 0) return;
      setDeployedAgent({ideology: {row, col}, field: rotations[0] })
    }
    setSelectedCell({row, col})
  }
  const agentClick = (agent) => {
    //console.log(agent)
    setSelectedAgent(agent)
    setDeployedAgent({
      ideology: {col: null, row: null},
      field: {col: null, row: null},
      rotation: 0
      })
    setDeployableArea(worldAreas[agent.area])
  };
  const pool = agentsPool.map(agent => <Agent key={agent.id} agent={agent} agentClick={agentClick}/>)
  const tiles = matrix.map((row, rowIndex) => {
    const deployablechar = deployableArea ? deployableArea.char : null;
    return row.map((cell, colIndex) => {
      const isSelected = selectedCell && selectedCell.row === rowIndex && selectedCell.col === colIndex;
      const isDeployable = cell === deployablechar;
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
     // console.log(cell)
      if (cell === ' ')
        return (
          <div
            className='tile water'
            key={`${rowIndex}-${colIndex}`}
            id={`${rowIndex}-${colIndex}`}
            onClick={() => cellClick({ row: rowIndex, col: colIndex })}
          ></div>
        );

      const area = findAreaByChar(cell);
     // console.log(colors, cell)
     // console.log(colors, [area.sides[5].ideology])
      const cellCol = isDeployable ? colors[area.sides[5].ideology].main : colors[area.sides[5].ideology].des;
      const cellBorders = tileBorders({row: rowIndex, col: colIndex}, myAgents, currentMyAgent, matrix);
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
              value={selectedAgent.ideologyValue}
              type='ideology'
              id={selectedAgent.id}
              name={selectedAgent.ideology}
            />
          )}
          {isDeployedField && (
            <Face value={selectedAgent.fieldValue} type='field' id={selectedAgent.id} name={selectedAgent.field} />
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
  console.log(selectedAgent)
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
        <div className='rigth-panel'>
        {phase === 'INIT' && pool}
        {(phase === 'TRAVEL' && selectedAgent) && <Agent agent={selectedAgent} agentClick={agentClick} />}
      </div>
      <div className='left-panel'>
        <div className='butts'>
          <button onClick={() => setAgentsPool([...agentsPool, ...generateRandomAgents(1)])}>NEW AGENT</button>
          <button onClick={() => setAgentsPool(generateRandomAgents(3))}>REROLL ALL</button>
          <button onClick={travelClick}>Travel</button>
        </div>
      </div>
      </div>
      <div className='selected-agent'>
        {/* {selectedAgent && <span>{selectedAgent.name + " - " +  selectedAgent.title}</span>} */}
        {selectedAgent && <span>{AgentDescription(selectedAgent)}</span>}
      </div>
    </div>
  )
}

export default App

      