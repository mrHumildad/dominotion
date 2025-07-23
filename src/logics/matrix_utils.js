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