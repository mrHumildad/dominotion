import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MapEditor from './mapEditor/MapEditor.jsx'
import PuterImage from '../basura/PuterImage.jsx'
import TogetherImage from '../basura/Together.jsx'
import { generateRandomAgents } from './logics/agents.js'
import { colors, worldAreas } from './logics/data.js'
import PollinationImage from './comps/PollinationImage.jsx'
/* const agent = generateRandomAgents(1)[0];
console.log(agent);
const area = worldAreas[agent.area];
console.log(area);
const color = colors[area.sides[5].ideology].main;
console.log(color);
const style = 'cgi prerendered';
const sex = agent.gender === 0 ? 'male' : 'female';
const prompt = `A ${style} image of a ${sex}  ${agent.ideologyAdj} ${agent.subIdeology.name} ${agent.job} from ${agent.area}, ${area.description} The image should reflect the agent's ideology and job, showcasing their unique characteristics and environment. main color of background should be ${color}`;
console.log(prompt) */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <TogetherImage prompt={prompt} /> */}
   {/* <PuterImage prompt={prompt} /> */}
    <App />
    {/* <MapEditor /> */}
    {/* <PollinationImage prompt={prompt} /> */}
  </StrictMode>,
)
