import { ideologies, fieldsOfDominance, worldAreas } from "./data.js";
import { firstName, lastName, fullName } from 'full-name-generator';


function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateRandomAgents(counter, n = 1) {
  const ideologiesList = Object.keys(ideologies);
  const fieldsList = Object.values(fieldsOfDominance);
  const agents = [];

  for (let i = 0; i < n; i++) {
    const region = Object.keys(worldAreas)[Math.floor(Math.random() * Object.keys(worldAreas).length)];
    const nationality = 'us';//getRandomElement(worldAreas[region].nationalities);
    const gender = Math.random() < 0.5 ? 0 : 1;
    const name = fullName(nationality, gender);
    const ideologyName = getRandomElement(ideologiesList);
    const ideologyLevel = Math.floor(Math.random() * 6); // 0-5
    const ideologyData = ideologies[ideologyName];

    const fieldIndex = Math.floor(Math.random() * 6); // 0–5
    const fieldData = fieldsList[fieldIndex];
    const jobLevel = Math.floor(Math.random() * 6); // 0-5

    // Check region's dice sides for matches
    const regionDice = worldAreas[region].sides;
    let status = "Neutral";

    for (const side of regionDice) {
      if (
        (side.ideology === ideologyName && side.side === ideologyLevel + 1) ||
        (side.field === fieldData.field && side.side === jobLevel + 1)
      ) {
        status = "Aligned";
        break;
      }
    }

    agents.push({
      name,
      region,
      ideology: ideologyName,
      id: counter + 1,
      //ideologyAdjective: ideologyData.adjectives[ideologyLevel],
      field: fieldData.field,
      //job: fieldData.jobs[jobLevel],
      title: `${ideologyData.adjectives[ideologyLevel]} ${fieldData.jobs[jobLevel]}`,
  //description: ideologyData.description,
      status
    });
    counter++;
  }

  console.table(agents);
  return agents;
}


//generateRandomAgents();

