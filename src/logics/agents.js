import { v4 as uuidv4 } from 'uuid';
import useAgentPollinationImage from '../hooks/useAgentPollinationImage.js';
import { usePollinationsImage, usePollinationsText } from '@pollinations/react';
import { agentImageURL, agentCuriosityURL } from './pollination_IA.js';
import { ideologies, fields, worldAreas, colors } from "./data.js";
import { firstName, lastName, fullName } from 'full-name-generator';


function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


export async function generateRandomAgents(n) {
  const ideologiesList = Object.keys(ideologies);
  const fieldsList = Object.keys(fields);
  const agents = [];

  for (let i = 0; i < n; i++) {/* area */

    const area = Object.keys(worldAreas)[Math.floor(Math.random() * Object.keys(worldAreas).length)];
    const nationality = 'us';//getRandomElement(worldAreas[area].nationalities); 
    const gender = Math.random() < 0.5 ? 0 : 1;
    const name = fullName(nationality, gender);

    const ideologyName = getRandomElement(ideologiesList);
    //console.log(ideologiesList, ideologyName)
    let ideologyLevel = Math.floor(Math.random() * 6); // 0-5
    const ideologyData = ideologies[ideologyName];
    const subIdeology = ideologyData.subIdeologies[Math.floor(Math.random() * ideologyData.subIdeologies.length)];
    const ideologyAdj = ideologyData.adjectives[ideologyLevel];
    const fieldName = getRandomElement(fieldsList); // 0–5
    const fieldData = fields[fieldName];
    const subField = fieldData.subFields[Math.floor(Math.random() * fieldData.subFields.length)];
    let jobLevel = Math.floor(Math.random() * 6); // 0-5
    const job = subField.jobs[jobLevel];
    let status = "Neutral";
    const race = getRandomElement(['white', 'black', 'asian', 'hispanic', 'middle-eastern', 'indian']);
    const age = Math.floor(Math.random() * (100 - 18 + 1)) + 18; // Random age between 18 and 60

    let newagent = {
      id: uuidv4(),
      name,
      area,
      gender,
      race,
      age,
      
      ideology: ideologyName,
      ideologyValue: ideologyLevel + 1,
      subIdeology,
      ideologyAdj,
      
      field: fieldName,
      fieldValue: jobLevel + 1,
      subField,
      job,
      
      fieldCell: null,
      ideologyCell: null,
      //personality: ideologyData.adjectives[ideologyLevel],
      //job: fieldData.jobs[jobLevel],
      //title: `${ideologyData.adjectives[ideologyLevel]} ${fieldData.jobs[jobLevel]}`,
      status,
    };
    newagent.imgUrl = agentImageURL(newagent);

    const curiosityUrl = agentCuriosityURL(newagent);
    newagent.curiosityUrl = curiosityUrl;
    // Use Pollinations to fetch the curiosity text`;
try {
  const res = await fetch(curiosityUrl);
  newagent.curiosity = await res.text();
} catch {
  newagent.curiosity = 'No curiosity available.';
}
    /* newagent.imgUrl = usePollinationsImage(agentImageURL(newagent), {
      width: 400,
      height: 400,
      seed: 42,
      model: 'turbo',
      nologo: true,
      enhance: false
    }); */
    agents.push(newagent);
  }

  console.log(agents);
  return agents;
}

export const AgentDescription = (agent) => {
  //console.log(agent)
  return agent.ideologyAdj + 
  ' ' + agent.subIdeology.name + 
  ' ' + agent.job + 
  ' from ' + agent.area;
}
//generateRandomAgents();

export const agenstConnection = (agent1, agent2, type1, type2) => {
  const sameType = type1 === type2;
  const value1 = agent1[type1 + 'Value'];
  const value2 = agent2[type2 + 'Value'];
  const sameValue = value1 === value2;
  let connection = {
    sameType,
    sameValue,
  }
  if (sameType) {
    if (type1 === 'field') {
      connection.sameField = agent1.field === agent2.field;
      connection.sameSubField = agent1.subField === agent2.subField;
    }
    if (type1 === 'ideology') {
      connection.sameIdeology = agent1.ideology === agent2.ideology;
      connection.sameSubIdeology = agent1.subIdeology === agent2.subIdeology;
    }
  }
  console.log('connection', agent1.name, agent2.name, connection);
  return connection;
}
/*   export const calcConnection = (connection) => {

} */
