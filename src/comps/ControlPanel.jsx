import { colors, worldAreas } from "../logics/data";
import Agent from "./Agent";
import AgentInfo from "./AgentInfo.jsx";
const ControlPanel = ({
  phase,
  agentsPool,
  selectedAgent,
  showBigImg,
  agentClick,
  handleImageClick,
  travelClick,
}) => {
  const panelStyle = {
    color: selectedAgent ? colors[worldAreas[selectedAgent.area].sides[5].ideology].opp : '#333',
    backgroundColor: selectedAgent ? colors[worldAreas[selectedAgent.area].sides[5].ideology].main : '#333',     
  }  
  const pool = agentsPool.map(agent => <Agent key={agent.id} agent={agent} agentClick={agentClick} selectedAgent={selectedAgent}/>)


  return (
    <div className='panels'>
        <div className='rigth-panel'>
        { (phase === 'INIT' || phase === 'INITDEPLOY') && pool }
        {(phase === 'TRAVEL' && selectedAgent) && <Agent agent={selectedAgent} agentClick={agentClick} />}
      </div>
      <div className='left-panel' /* style={panelStyle} */>
        {selectedAgent && <AgentInfo agent={selectedAgent} handleImageClick={handleImageClick} showBigImg={showBigImg} panelStyle={panelStyle}/>}
        {/* <div className='butts'>
          <button onClick={() => setAgentsPool([...agentsPool, ...generateRandomAgents(1)])}>NEW AGENT</button>
          <button onClick={() => setAgentsPool(generateRandomAgents(3))}>REROLL ALL</button>
          <button onClick={travelClick}>Travel</button>
          <button onClick={spawn2rnd}>Spawn</button>
        </div> */}
      </div>
    </div>
  );
}

export default ControlPanel;
