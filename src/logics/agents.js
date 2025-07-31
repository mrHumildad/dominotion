import { v4 as uuidv4 } from 'uuid';

import { ideologies, fields, worldAreas } from "./data.js";
import { firstName, lastName, fullName } from 'full-name-generator';


function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateRandomAgents( n) {
  const ideologiesList = Object.keys(ideologies);
  const fieldsList = Object.keys(fields);
  const agents = [];

  for (let i = 0; i < n; i++) {

    const region = Object.keys(worldAreas)[Math.floor(Math.random() * Object.keys(worldAreas).length)];
    const nationality = 'us';//getRandomElement(worldAreas[region].nationalities); 
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
    //console.log(subField)
    let jobLevel = Math.floor(Math.random() * 6); // 0-5
    const job = subField.jobs[jobLevel];
    // Check region's dice sides for matches
    //const regionDice = worldAreas[region].sides;
    let status = "Neutral";

    /* for (const side of regionDice) {
      if (
        (side.ideology === ideologyName && side.side === ideologyLevel + 1) ||
        (side.field === fieldName && side.side === jobLevel + 1)
      ) {
        status = "Aligned";
        break;
      }
    } */

    agents.push({
      id: uuidv4(),
      name,
      region,
      gender,

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
      status
    });
  }

  console.log(agents);
  return agents;
}

export const AgentDescription = (agent) => {
  console.log(agent)
  return agent.name + 
  agent.subIdeology.icon + 
  agent.subField.icon +
  ' ' + agent.ideologyAdj + 
  ' ' + agent.subIdeology.name + 
  ' ' + agent.job + 
  ' from ' + agent.region;
}
//generateRandomAgents();

