import { ideologies, fieldsOfDominance, worldAreas } from "./data.js";
import { firstName, lastName, fullName } from 'full-name-generator';


function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateRandomAgents(counter, n = 1) {
  const ideologiesList = Object.keys(ideologies);
  const fieldsList = Object.keys(fieldsOfDominance);
 //console.log(fieldsList)
  const agents = [];

  for (let i = 0; i < n; i++) {
    const region = Object.keys(worldAreas)[Math.floor(Math.random() * Object.keys(worldAreas).length)];
    const nationality = 'us';//getRandomElement(worldAreas[region].nationalities);
    const gender = Math.random() < 0.5 ? 0 : 1;
    const name = fullName(nationality, gender);
    const ideologyName = getRandomElement(ideologiesList);
    let ideologyLevel = Math.floor(Math.random() * 6); // 0-5
    const ideologyData = ideologies[ideologyName];

    const fieldName = getRandomElement(fieldsList); // 0–5
    const fieldData = fieldsOfDominance[fieldName];
    //console.log(fieldData)
    let jobLevel = Math.floor(Math.random() * 6); // 0-5

    // Check region's dice sides for matches
    const regionDice = worldAreas[region].sides;
    let status = "Neutral";

    for (const side of regionDice) {
      if (
        (side.ideology === ideologyName && side.side === ideologyLevel + 1) ||
        (side.field === fieldName && side.side === jobLevel + 1)
      ) {
        status = "Aligned";
        break;
      }
    }

    agents.push({
      id: counter + 1,
      name,
      region,
      ideologyCell: null,
      fieldCell: null,
      ideology: ideologyName,
      field: fieldName,
      ideologyValue: ideologyLevel + 1,
      fieldValue: jobLevel + 1,
      personality: ideologyData.adjectives[ideologyLevel],
      job: fieldData.jobs[jobLevel],
      title: `${ideologyData.adjectives[ideologyLevel]} ${fieldData.jobs[jobLevel]}`,
      status
    });
    counter++;
  }

  console.table(agents);
  return agents;
}


//generateRandomAgents();

