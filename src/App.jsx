import { useState, useEffect } from 'react';
import { worldMapMatrix } from './logics/worldMapMatrix.js';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { generateRandomAgents } from './logics/agents.js';
import { months } from './logics/utils.js';
import { fields, colors, worldAreas } from './logics/data.js';
import { getPossibleRotations, tile2Agent, getRndSpawn } from './logics/matrix_utils.js';
import WorldMap from './comps/WorldMap.jsx'; // Assuming you create this
import ControlPanel from './comps/ControlPanel.jsx'; // Assuming you create this

import './App.css';

const tutorials = {
  INIT: 'SELECCIONA UN AGENTEPARA VER SU INFO Y EVIDENCIAR SU AREA DE ORIGEN',
  INITDEPLOY: 'HAZ CLICK EN EL AREA DE ORIGEN DEL AGENTE PARA DESPLEGARLO',
  TRAVEL: 'HAZ CLICK EN UN AGENTE PARA VIAJAR A SU AREA DE ORIGEN',
};

const conf = {
  poolSize: 3,
  startingAgents: 5,
  startingYear: 2030,
};
const resetDeployed = {
  ideology: { col: null, row: null },
  field: { col: null, row: null },
  rotation: null,
};

const initialResources = Object.values(fields).reduce((acc, field) => {
    acc[field.resource] = 0;
    return acc;
  }, {});

// Custom hook to handle all game state and logic
const useGameLogic = () => {
  const [matrix, setMatrix] = useState(worldMapMatrix);
  const [year, setYear] = useState(conf.startingYear);
  const [month, setMonth] = useState(0);
  const [phase, setPhase] = useState('INIT');
  const [selectedCell, setSelectedCell] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [deployableArea, setDeployableArea] = useState(null);
  const [agentsPool, setAgentsPool] = useState([]);
  const [showBigImg, setShowBigImg] = useState(false);
  const [myAgents, setMyAgents] = useState([]);
  const [myResources, setMyResources] = useState(initialResources);
  const [deployedAgent, setDeployedAgent] = useState(resetDeployed);
  useEffect(() => {
    generateRandomAgents(conf.poolSize).then(setAgentsPool);
  }, []);
  const spawn2rnd = () => {
      if (!selectedAgent) return ;
      const cells = getRndSpawn(matrix, myAgents, deployableArea.char);
      console.log(cells)
      let myNewAgent = {...selectedAgent, ideologyCell: cells.ideology, fieldCell: cells.field}
        console.log('my new agent', myNewAgent)
        setMyAgents([...myAgents.filter(a => a.id !== myNewAgent.id), myNewAgent])
        //setAgentsPool(agentsPool.filter(agent => agent.id !== myNewAgent.id))
        generateRandomAgents(conf.poolSize).then(setAgentsPool);
        setDeployedAgent({
          ideology: {col: null, row: null},
          field: {col: null, row: null},
          rotation: 0
        })
        setSelectedAgent(null)
        return
    }
  // All your handler functions would go here
  const handleImageClick = () => {
    setShowBigImg(!showBigImg)
  };
  const travelClick = () => {
    setDeployedAgent(resetDeployed);
    setSelectedAgent(null);
    setPhase(phase === 'TRAVEL' ? 'INIT' : 'TRAVEL');
  };
  const agentClick = (agent) => {
    if (selectedAgent && selectedAgent.id === agent.id) {
      setSelectedAgent(null);
      setDeployedAgent(resetDeployed);
      setDeployableArea(null);
      setPhase('INIT');
      return;
    }
    setSelectedAgent(agent);
    setDeployedAgent(resetDeployed);
    setDeployableArea(worldAreas[agent.area]);
    setPhase('INITDEPLOY');
  };
  const cellClick = ({row, col}) => {
      console.log('row', row, 'col', col)
      console.log(tile2Agent({row, col}, myAgents))
  
      if (matrix[row][col] === ' ') return;
  
      if (phase === 'INITDEPLOY') {
        if (matrix[row][col] !== deployableArea.char) return;
        spawn2rnd();
        if (myAgents.length >= conf.startingAgents) {
          setPhase('TRAVEL');
          setSelectedAgent(null);
          setDeployedAgent({
            ideology: {col: null, row: null},
            field: {col: null, row: null},
            rotation: 0
          })
          return;
        }
        setPhase('INIT');
        return ;
      }
  
  
      //  click to cell to travel agent
      if (phase === 'TRAVEL' && !selectedAgent) {
        const agentToSelect = tile2Agent({row, col}, myAgents); // Get the agent here
        if(agentToSelect) { // Check if an agent was found
          //console.log('selected agent', agentToSelect); // Use the local variable here
          let traveler = myAgents.find(agent => agent.id === agentToSelect.agent.id) // Use agentToSelect
          traveler.fieldCell = {row: null, col: null}
          traveler.ideologyCell = {row: null, col: null}
          //console.log(traveler);
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
        const rotations = getPossibleRotations({ideology: deployedAgent.ideology, matrix, myAgents, char})
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
        const rotations = getPossibleRotations({ideology: {row, col, rotation: 0}, matrix, myAgents, char})
        //console.log(rotations)
        if (rotations.length === 0) return;
        setDeployedAgent({ideology: {row, col}, field: rotations[0] })
      }
      setSelectedCell({row, col})
    }
  
  // Return all state and functions needed by the components
  return {
    matrix,
    year,
    month,
    phase,
    selectedAgent,
    deployableArea,
    agentsPool,
    myAgents,
    deployedAgent,
    showBigImg,
    handleImageClick,
    travelClick,
    agentClick,
    cellClick,
  };
};

const App =() => {
  const {
    matrix,
    year,
    month,
    phase,
    selectedAgent,
    deployableArea,
    agentsPool,
    myAgents,
    deployedAgent,
    showBigImg,
    handleImageClick,
    travelClick,
    agentClick,
    cellClick,
  } = useGameLogic();

  return (
    <div id='App'>
      <div className='top'>
        <span id='game-title'>World DominOtion</span>
        <span id='date'>{months[month] + ' ' + year}</span>
        <span id='phase'>Phase: {phase}</span>
      </div>
      <div>
        <TransformWrapper>
          <TransformComponent>
            <WorldMap
              matrix={matrix}
              myAgents={myAgents}
              selectedAgent={selectedAgent}
              deployedAgent={deployedAgent}
              deployableArea={deployableArea}
              cellClick={cellClick}
            />
          </TransformComponent>
        </TransformWrapper>
      </div>
      <div className='panels'>
        <ControlPanel
          phase={phase}
          agentsPool={agentsPool}
          selectedAgent={selectedAgent}
          showBigImg={showBigImg}
          agentClick={agentClick}
          handleImageClick={handleImageClick}
          travelClick={travelClick}
        />
      </div>
      {<div id='bottom'>{tutorials[phase]}</div>}
    </div>
  );
}

export default App;