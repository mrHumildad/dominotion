import { useEffect, useState } from 'react';
import { usePollinationsImage } from '@pollinations/react';
import { worldAreas, colors } from '../logics/data';

function useAgentPollinationImage(agent, shouldGenerate) {
  const area = worldAreas[agent.area];
  const color = colors[area.sides[5].ideology].main;
  const style = 'cgi prerendered';
  const sex = agent.gender === 0 ? 'male' : 'female';
  const prompt = `A ${style} image of a ${sex}  ${agent.ideologyAdj} ${agent.subIdeology.name} ${agent.job} from ${agent.area}, ${area.description} The image should reflect the agent's ideology and job, showcasing their unique characteristics and environment. main color of background should be ${color}`;
  const [imgUrl, setImgUrl] = useState(null);


  // Only call Pollinations if user clicks and not already generated
  const imageUrl = usePollinationsImage(
    shouldGenerate && !imgUrl ? prompt : null,
    {
      width: 400,
      height: 400,
      seed: 42,
      model: 'turbo',
      nologo: true,
      enhance: false
    }
  );

  // When a new imageUrl is generated, store it in localStorage
  useEffect(() => {
    if (imageUrl && !imgUrl && !imageUrl.includes('/null')) {
      //localStorage.setItem(`agent_avatar_url_${agent.id}`, imageUrl);
      setImgUrl(imageUrl);
    }
  }, [imageUrl, imgUrl, agent.id]);

  return imgUrl;
}

export default useAgentPollinationImage;