import { v4 as uuidv4 } from 'uuid';
import { agentImageURL, agentCuriosityURL } from './pollination_IA.js';
import { ideologies, fields, worldAreas, colors } from "./data.js";
import { firstName, lastName, fullName } from 'full-name-generator';


function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Helper function to convert a Blob to a Base64 string
const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

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
      status,
    };
    
    // Asynchronously fetch and store the curiosity text
    const curiosityUrl = agentCuriosityURL(newagent);
    try {
      const res = await fetch(curiosityUrl);
      newagent.curiosity = await res.text();
    } catch {
      newagent.curiosity = 'No curiosity available.';
    }

    // Asynchronously fetch the image and convert to Base64
    const imageUrl = agentImageURL(newagent);
    try {
      const imgRes = await fetch(imageUrl);
      const imgBlob = await imgRes.blob();
      newagent.imgUrl = await blobToBase64(imgBlob);
    } catch {
      newagent.imgUrl = 'No image available.';
    }

    agents.push(newagent);
  }

  console.log(agents);
  return agents;
}

export const AgentDescription = (agent) => {
  return agent.ideologyAdj + 
  ' ' + agent.subIdeology.name + 
  ' ' + agent.job + 
  ' from ' + agent.area;
}

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
