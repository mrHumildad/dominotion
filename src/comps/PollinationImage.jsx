import useAgentPollinationImage from '../hooks/useAgentPollinationImage.js';
import React, { useState, useEffect } from 'react';

function PollinationImage({ agent, handleAgentImageUpdate }) {
  const [shouldGenerate, setShouldGenerate] = useState(false);
  const imgUrl = useAgentPollinationImage(agent, shouldGenerate);

  // Only update if the agent's imgUrl is actually different
  useEffect(() => {
    if (
      imgUrl &&
      handleAgentImageUpdate &&
      agent.imgUrl !== imgUrl
    ) {
      handleAgentImageUpdate(agent.id, imgUrl);
    }
  }, [imgUrl, agent.id, agent.imgUrl, handleAgentImageUpdate]);

  return imgUrl ? (
    <img src={imgUrl} alt="Agent" width={400} height={400} />
  ) : (
    <button onClick={() => setShouldGenerate(true)}>Generate Avatar</button>
  );
}

export default PollinationImage;