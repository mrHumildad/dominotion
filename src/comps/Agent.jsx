import React from 'react';
import Face from './Die3D/Face';
import './Agent.css'
const Agent = ({agent, agentClick, selectedAgent}) => {
  console.log('agent', agent)
  console.log('selected agent', selectedAgent)
  let opacity = 1;
  if (selectedAgent && selectedAgent.id !== agent.id) {
    opacity = 0.3;
  }
  return (
    <div className='agent' style={{opacity: opacity}} id={agent.id} onClick={() => agentClick(agent)}>
        <Face value={agent.ideologyValue} type='ideology' id={agent.id} name={agent.ideology} />
        <Face value={agent.fieldValue} type='field' id={agent.id} name={agent.field} />
    </div>
  );
}

export default Agent;
