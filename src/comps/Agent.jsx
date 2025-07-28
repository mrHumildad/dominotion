import React from 'react';
import Face from './Die3D/Face';
import './Agent.css'
const Agent = ({agent, agentClick}) => {
  return (
    <div className='agent' id={agent.id} onClick={() => agentClick(agent)}>
        <Face value={agent.ideologyValue} type='ideology' id={agent.id} name={agent.ideology} />
        <Face value={agent.fieldValue} type='field' id={agent.id} name={agent.field} />
    </div>
  );
}

export default Agent;
