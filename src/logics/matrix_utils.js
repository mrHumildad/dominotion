import { colors, worldAreas } from "./data"

export const findAreaByChar = (char, worldAreas) => {
    if (char === 'w') return null;
    return Object.values(worldAreas).find(area => area.char === char);
};

const directions = {
  top: (tile, n) => ({ row: tile.row - n, col: tile.col }),
  bottom: (tile, n) => ({ row: tile.row + n, col: tile.col }),
  left: (tile, n) => ({ row: tile.row, col: tile.col - n }),
  right: (tile, n) => ({ row: tile.row, col: tile.col + n }),
  topleft: (tile, n) => ({ row: tile.row - n, col: tile.col - n }),
  topright: (tile, n) => ({ row: tile.row - n, col: tile.col + n }),
  bottomleft: (tile, n) => ({ row: tile.row + n, col: tile.col - n }),
  bottomright: (tile, n) => ({ row: tile.row + n, col: tile.col + n }),
};

export const cell2char = (matrix, cell) => {
  /* console.log(cell, matrix)
  console.log(matrix[cell.col])
  console.log(matrix[cell.col][cell.row]) */
  
  return matrix[cell.row][cell.col]
}

export const getPossibleRotations = ({ideology, matrix, agents, char}) => {
  //console.log(ideology)
  let rotations = []

  if (cell2char(matrix, directions.bottom(ideology, 1)) === char && !tile2Agent(directions.bottom(ideology, 1), agents)) {
    rotations.push({...directions.bottom(ideology, 1), rotation: 'bottom'})
  }
  if (cell2char(matrix, directions.right(ideology, 1)) === char && !tile2Agent(directions.right(ideology, 1), agents)) {
    rotations.push({...directions.right(ideology, 1), rotation: 'right'})
  }
  if (cell2char(matrix, directions.top(ideology, 1)) === char && !tile2Agent(directions.top(ideology, 1), agents)) {
    rotations.push({...directions.top(ideology, 1), rotation: 'top'})
  }
  if (cell2char(matrix, directions.left(ideology, 1)) === char && !tile2Agent(directions.left(ideology, 1), agents)) {
    rotations.push({...directions.left(ideology, 1), rotation: 'left'})
  }
  return rotations ;
/* 
  let candidates = []
  if (row + 1 < colLenght && isUpperCase(matrix[row + 1][col]) && !myAgents.find(agent => agent.fieldCell.row === row + 1 && agent.fieldCell.col === col) && !myAgents.find(agent => agent.ideologyCell.row === row + 1 && agent.ideologyCell.col === col)) 
    if (matrix[row + 1][col] === char)
      candidates.push({ row: row + 1, col })
  
  if (col + 1 < rowLenght && isUpperCase(matrix[row][col + 1]) && !myAgents.find(agent => agent.fieldCell.row === row && agent.fieldCell.col === col + 1) && !myAgents.find(agent => agent.ideologyCell.row === row && agent.ideologyCell.col === col + 1)) 
    if (matrix[row][col + 1] === char)
      candidates.push({ row, col: col + 1 })
  
  if (row - 1 >= 0 && isUpperCase(matrix[row - 1][col]) && !myAgents.find(agent => agent.fieldCell.row === row - 1 && agent.fieldCell.col === col) && !myAgents.find(agent => agent.ideologyCell.row === row - 1 && agent.ideologyCell.col === col))
    if(matrix[row - 1][col] === char)
      candidates.push({ row: row - 1, col })
  
  if (col - 1 >= 0 && isUpperCase(matrix[row][col - 1]) && !myAgents.find(agent => agent.fieldCell.row === row && agent.fieldCell.col === col - 1) && !myAgents.find(agent => agent.ideologyCell.row === row && agent.ideologyCell.col === col - 1)) 
    if(matrix[row][col - 1] === char)
      candidates.push({ row, col: col - 1 })

  return candidates */
}

export const tile2Agent = (tile, myAgents) => {
  const agentField = myAgents.find(agent => agent.fieldCell.row === tile.row && agent.fieldCell.col === tile.col)
  const agentIdeo = myAgents.find(agent => agent.ideologyCell.row === tile.row && agent.ideologyCell.col === tile.col)
  if (!agentField && !agentIdeo) return null;
  if (agentField) return {agent: agentField, type: 'field'}
  if (agentIdeo) return {agent: agentIdeo, type: 'ideology'}
  return null
}

const defaultBorders = {
  top: 'black',
  right: 'black',
  bottom: 'black',
  left: 'black'
}

export const tileBorders = (tile, myAgents, currentAgent, matrix) => {
  let borders = { ...defaultBorders }; // Use spread to create a new object, not modify the original defaultBorders
  const areaChar = matrix[tile.row][tile.col];
  const area = findAreaByChar(areaChar, worldAreas);
  const ideology = areaChar === ' ' ? null : area.sides[5].ideology;
  const borderColor = ideology ? colors[ideology].main : 'black'; // Default to black if no color found
  const checkAreaBorder = (char, coord, borderDirection, matrix) => {
    if (matrix[coord.row][coord.col] === char /* || matrix[coord.row][coord.col] === char */) {
      borders[borderDirection] = 'black';
    } else {
      //console.log(matrix[coord.row][coord.col], char)
      borders[borderDirection] = borderColor;
    }
  }

  if (!currentAgent) {
    checkAreaBorder(areaChar, directions.top(tile, 1), 'top', matrix)
    checkAreaBorder(areaChar, directions.left(tile, 1), 'left', matrix)
    checkAreaBorder(areaChar, directions.bottom(tile, 1), 'bottom', matrix)
    checkAreaBorder(areaChar, directions.right(tile, 1), 'right', matrix)
    return borders;
  }

  // Helper function to check and set border
  const checkNeighbor = (neighborTileCoords, borderDirection) => {
    const neighborAgent = tile2Agent(neighborTileCoords, myAgents);
    //console.log(neighborAgent)
    if (!neighborAgent) {
      borders[borderDirection] = 'red';
      return
    } else if (neighborAgent.agent.id === currentAgent.id /* && 
        (borderDirection === 'top' || borderDirection === 'left') */) {
      const tileType =  neighborAgent.type === 'field' ? 'ideology' : 'field';  
      borders[borderDirection] = colors[currentAgent[tileType]].main;
      return
    } else {
      borders[borderDirection] = 'green'
      return
    }
    /* if ( neighborAgent[0] || neighborAgent[1]) {
      // If there's an agent in the neighbor cell
      if ( neighborAgent[0].id == currentAgent.id ) {
        borders[borderDirection] = colors[neighborAgent[0].ideology];       // If it's the SAME agent
      } else if ( neighborAgent[1].id == currentAgent.id) {
        borders[borderDirection] = colors[neighborAgent[1].field];
      } else {
        borders[borderDirection] = 'green';
      }
      
    } else {
      // If there's NO agent in the neighbor cell
      borders[borderDirection] = 'red';
    } */
  };

  // Check all four neighbors
  checkNeighbor(directions.top(tile, 1), 'top');
  checkNeighbor(directions.right(tile, 1), 'right');
  checkNeighbor(directions.bottom(tile, 1), 'bottom');
  checkNeighbor(directions.left(tile, 1), 'left');

  return borders;
};

export const getRndSpawn = (matrix, agents, char) => {
  const areaCells = getAreaCells(char, matrix)
  //console.log(areaCells.length, areaCells[0])
  const rotableCells = areaCells.filter(cell => {
    //console.log(cell)
    return !agents.some(agent =>
      (agent.fieldCell.row === cell.row && agent.fieldCell.col === cell.col) ||
      (agent.ideologyCell.row === cell.row && agent.ideologyCell.col === cell.col)
    ) && getPossibleRotations({ ideology: { row: cell.row, col: cell.col }, matrix, agents: agents, char }).length > 0;
  })
  if (rotableCells.length === 0) throw new Error("No valid spawn found");
  const cell = rotableCells.sort(() => Math.random() - 0.5)[0]; // Shuffle and take the first one
  const rotations = getPossibleRotations({ ideology: { row: cell.row, col: cell.col }, matrix, agents: agents, char });
  const field = rotations.sort(() => Math.random() - 0.5)[0];
  return {
    ideology : cell,
    field: field
  }
} 

export const getAreaCells = (char, matrix) => {
  const cells = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === char) {
        cells.push({ row, col });
      }
    }
  }
  return cells;
}

export const logAreas = (matrix) => {
  const areas = {};
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const char = matrix[row][col];
      if (!areas[char]) {
        areas[char] = [];
      }
      areas[char].push({ row, col });
    }
  }
  for (const char in areas) {
    console.log(`Area ${char}:`, areas[char].length);
  }
  console.log(areas);
  return areas;
}

