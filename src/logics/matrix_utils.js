import { colors } from "./data"
import { isUpperCase } from "./utils"

export const getNeigh = (tile, matrix) => {
  const rowLenght = matrix[0].length
  const colLenght = matrix.length
  const row = tile.row
  const col = tile.col
  const neigh = []
  if (row - 1 >= 0) neigh.push({ row: row - 1, col })
  if (row + 1 < colLenght) neigh.push({ row: row + 1, col })
  if (col - 1 >= 0) neigh.push(matrix[row][col - 1])
  if (col + 1 < rowLenght) neigh.push()
  return neigh
}

export const getPossibleRotations = ({ideo, matrix, myAgents, char}) => {
  //console.log(myAgents)
  const rowLenght = matrix[0].length
  const colLenght = matrix.length
  const row = ideo.row
  const col = ideo.col
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

  return candidates
}

const top = (tile) => { return { row: tile.row - 1, col: tile.col } }
const down = (tile) => { return { row: tile.row + 1, col: tile.col } }
const left = (tile) => { return { row: tile.row, col: tile.col - 1 } }
const right = (tile) => { return { row: tile.row, col: tile.col + 1 } }

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
  const checkAreaBorder = (char, coord, borderDirection, matrix) => {
    
    if (matrix[coord.row][coord.col] === char) {
      borders[borderDirection] = 'black';
    } else {
      //console.log(matrix[coord.row][coord.col], char)
      borders[borderDirection] = 'white';
    }
  }

  if (!currentAgent) {
    checkAreaBorder(areaChar, top(tile), 'top', matrix)
    checkAreaBorder(areaChar, left(tile), 'left', matrix)
    checkAreaBorder(areaChar, down(tile), 'bottom', matrix)
    checkAreaBorder(areaChar, right(tile), 'right', matrix)
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
      borders[borderDirection] = 'trasparent'//colors[currentAgent[neighborAgent.type]].main;
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
  checkNeighbor(top(tile), 'top');
  checkNeighbor(right(tile), 'right');
  checkNeighbor(down(tile), 'bottom');
  checkNeighbor(left(tile), 'left');

  return borders;
};

