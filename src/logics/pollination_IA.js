import { colors, worldAreas } from "./data";

 function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

 export const agentImageURL = (agent) => {
  const area = worldAreas[agent.area];
    const color = colors[area.sides[5].ideology].main;

    const randomSeed = Math.floor(Math.random() * 1000);
    const style = 'cgi prerendered';
    const sex = agent.gender === 0 ? 'male' : 'female';
    const prompt = `A ${style} image of a ${agent.age} years old ${agent.race} ${sex}  ${agent.ideologyAdj} ${agent.subIdeology.name} who works as a ${agent.job}.  
      The image should reflect the agent's ideology and job, showcasing their unique characteristics, we can infere the job by a tool or accessory, same for subIdeology. 
      In the background should be ${area.description}, it could contract with character style. main color of background should be ${color}.
      `;
    const url = 'https://pollinations.ai/p/' + encodeURIComponent(prompt) + '?seed=' + randomSeed + '&nologo=true';
  return url;
}




export const agentCuriosityURL = (agent) => {
  const randomSeed = Math.floor(Math.random() * 1000);
  const sex = agent.gender === 0 ? 'male' : 'female';
  const prompt = `Generate a short frase in spanish (give just it in "") that is always said by a ${sex} ${agent.ideologyAdj} ${agent.subIdeology.name} ${agent.job} for a character of a game. The frase should reflect the agent's ideology and job, showcasing their unique characteristics. The frase should be short, no more than 15 words.`;
  const url = 'https://text.pollinations.ai/' + encodeURIComponent(prompt) + '?seed=' + randomSeed;
  return url;
}