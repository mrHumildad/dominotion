import { grid } from "./grid.js";
import { worldMapMatrix } from "../logics/worldMapMatrix.js";
const sliceMatrixFirstRow = (matrix) => {
  return matrix.shift()
}
const sliceMatrixFirstCol = (matrix) => {
  return matrix.map(row => row.shift())
}
const sliceMatrixLastRow = (matrix) => {
  return matrix.pop()
}
const sliceMatrixLastCol = (matrix) => {
  return matrix.map(row => row.pop())
} 

const result = sliceMatrixLastCol(worldMapMatrix)
console.log(result)

