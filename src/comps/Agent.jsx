import React from 'react';

const Agent = ({agent}) => {
  return (
    <div className='agent' id={agent.id}>
      <span className='agent-name'>{agent.name}</span>
    </div>
  );
}

export default Agent;
