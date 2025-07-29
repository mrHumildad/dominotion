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

export const getPossibleRotations = ({ideo, matrix, myAgents}) => {
  //console.log(myAgents)
  const rowLenght = matrix[0].length
  const colLenght = matrix.length
  const row = ideo.row
  const col = ideo.col
  let candidates = []
  if (row + 1 < colLenght && isUpperCase(matrix[row + 1][col]) && !myAgents.find(agent => agent.fieldCell.row === row + 1 && agent.fieldCell.col === col) && !myAgents.find(agent => agent.ideologyCell.row === row + 1 && agent.ideologyCell.col === col)) 
    candidates.push({ row: row + 1, col })
  if (col + 1 < rowLenght && isUpperCase(matrix[row][col + 1]) && !myAgents.find(agent => agent.fieldCell.row === row && agent.fieldCell.col === col + 1) && !myAgents.find(agent => agent.ideologyCell.row === row && agent.ideologyCell.col === col + 1)) 
    candidates.push({ row, col: col + 1 })
  if (row - 1 >= 0 && isUpperCase(matrix[row - 1][col]) && !myAgents.find(agent => agent.fieldCell.row === row - 1 && agent.fieldCell.col === col) && !myAgents.find(agent => agent.ideologyCell.row === row - 1 && agent.ideologyCell.col === col))
    candidates.push({ row: row - 1, col })
  if (col - 1 >= 0 && isUpperCase(matrix[row][col - 1]) && !myAgents.find(agent => agent.fieldCell.row === row && agent.fieldCell.col === col - 1) && !myAgents.find(agent => agent.ideologyCell.row === row && agent.ideologyCell.col === col - 1)) 
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
  return agentField || agentIdeo
}

const defaultBorders = {
  top: 'black',
  right: 'black',
  bottom: 'black',
  left: 'black'
}

export const tileBorders = (tile, matrix, myAgents, currentAgent) => {
  let borders = { ...defaultBorders }; // Use spread to create a new object, not modify the original defaultBorders

  if (!currentAgent) {
    return borders;
  }

  // Helper function to check and set border
  const checkNeighbor = (neighborTileCoords, borderDirection) => {
    const neighborAgent = tile2Agent(neighborTileCoords, myAgents);
    if (neighborAgent) {
      // If there's an agent in the neighbor cell
      if (neighborAgent.id !== currentAgent.id) {
        // And it's a DIFFERENT agent
        borders[borderDirection] = 'white';
      }
      // If it's the SAME agent, we do nothing, default border applies (or whatever was set before)
    } else {
      // If there's NO agent in the neighbor cell
      borders[borderDirection] = 'red';
    }
  };

  // Check all four neighbors
  checkNeighbor(top(tile), 'top');
  checkNeighbor(right(tile), 'right');
  checkNeighbor(down(tile), 'bottom');
  checkNeighbor(left(tile), 'left');

  return borders;
};

