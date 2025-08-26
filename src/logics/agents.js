import { v4 as uuidv4 } from 'uuid';
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

  // Helper functions for sessionStorage (you can place these outside the main function)
  const saveBlobToSessionStorage = (blob, key) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          sessionStorage.setItem(key, reader.result);
          resolve();
        } catch (e) {
          reject(e);
        }
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(blob);
    });
  };

  const getBlobFromSessionStorage = (key) => {
    const dataUrl = sessionStorage.getItem(key);
    if (!dataUrl) {
      return null;
    }
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  };

  for (let i = 0; i < n; i++) {
    const area = Object.keys(worldAreas)[Math.floor(Math.random() * Object.keys(worldAreas).length)];
    const nationality = 'us';
    const gender = Math.random() < 0.5 ? 0 : 1;
    const name = fullName(nationality, gender);

    const ideologyName = getRandomElement(ideologiesList);
    let ideologyLevel = Math.floor(Math.random() * 6);
    const ideologyData = ideologies[ideologyName];
    const subIdeology = ideologyData.subIdeologies[Math.floor(Math.random() * ideologyData.subIdeologies.length)];
    const ideologyAdj = ideologyData.adjectives[ideologyLevel];
    const fieldName = getRandomElement(fieldsList);
    const fieldData = fields[fieldName];
    const subField = fieldData.subFields[Math.floor(Math.random() * fieldData.subFields.length)];
    let jobLevel = Math.floor(Math.random() * 6);
    const job = subField.jobs[jobLevel];
    let status = "Neutral";
    const race = getRandomElement(['white', 'black', 'asian', 'hispanic', 'middle-eastern', 'indian']);
    const age = Math.floor(Math.random() * (100 - 18 + 1)) + 18;

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

    const imgUrl = agentImageURL(newagent);
    newagent.imgUrl = imgUrl; // Temporary, will be replaced with blob URL
    const curiosityUrl = agentCuriosityURL(newagent);
    const storageKey = `agent-image-${newagent.id}`; // Create a unique key for sessionStorage

    // Use Pollinations to fetch the curiosity text
    try {
      const res = await fetch(curiosityUrl);
      newagent.curiosity = await res.text();
    } catch {
      newagent.curiosity = 'No curiosity available.';
    }

    // Check sessionStorage for the image first
    const storedImageBlob = getBlobFromSessionStorage(storageKey);
    if (storedImageBlob) {
      newagent.image = URL.createObjectURL(storedImageBlob);
    } else {
      // If not in sessionStorage, fetch the image and store it
      try {
        // 1. Fetch the image from the URL returned by agentImageURL
        const response = await fetch(imgUrl);
        // 2. Get the blob from the response
        const imageBlob = await response.blob();
        // 3. Save the blob to sessionStorage
        await saveBlobToSessionStorage(imageBlob, storageKey);
        // 4. Create a URL for the blob and assign it
        newagent.image = URL.createObjectURL(imageBlob);
      } catch {
        newagent.image = 'https://via.placeholder.com/400';
      }
    }
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
