import { useState } from 'react'
import {worldMapMatrix} from '../logics/worldMapMatrix.js'
//import { grid } from './grid.js';
import { TransformWrapper,TransformComponent} from "react-zoom-pan-pinch";
import '../App.css'
import '../comps/Die3D/bigDie.css'
import '../comps/Die3D/Die3D.css'
import { getAreaColor, findAreaByChar } from '../logics/utils.js';
import {colors, worldAreas} from '../logics/data.js'
const tileTypes = {
  'w': 'water',
  'l': 'land',
}

function MapEditor() {
  const [matrix, setMatrix] = useState(worldMapMatrix);
  const [paint, setPaint] = useState('w');
  const paintArea = findAreaByChar(paint);
  
  const cellClick = ({row, col}) => {
    let newMatrix = [...matrix]
    newMatrix[row][col] = paint
    setMatrix(newMatrix)
    console.log(matrix)
  }
  /* const matrix2string = (matrix) => {
    return matrix.map(row => row.join('","')).join('\n')
  }
  console.log(matrix2string(matrix)) */
  const paintbuttons = Object.keys(worldAreas).map((areaName, index) => {
    const area = worldAreas[areaName]
    //console.log(area.char)
    return (
      <button key={index} 
        onClick={() => setPaint(area.char)}
        style={{backgroundColor: getAreaColor(area)}}>
          {area.char}
      </button>
    )
  })/* .push(
    <button key={worldAreas.length} onClick={() => setPaint('w')}>w</button>
  ) */
  
  const tiles = matrix.map((row, rowIndex) => {
    return row.map((cell, colIndex) => {
      if (cell === 'w') return <div className='tile water' key={`${rowIndex}-${colIndex}`} id={`${rowIndex}-${colIndex}`} onClick={() => cellClick({ row: rowIndex, col: colIndex })}></div>
      const area = findAreaByChar(cell);
      //console.log(cell, rowIndex, colIndex, area)
      const cellCol = colors.ideologies[area.sides[5].ideology]
      return (
        <div
          key={`${rowIndex}-${colIndex}`}
          id={`${rowIndex}-${colIndex}`}
          className={`tile `}
          style={{backgroundColor: cellCol}}
          onClick={() => cellClick({ row: rowIndex, col: colIndex })}>
            {cell === 'w' ? '' : ''}
        </div>
      )
    })
  })
  return (
    <div id='App'>
      <div id='worldMapEditor'>
      <TransformWrapper
      initialScale={1}
      initialPositionX={200}
      initialPositionY={100}
      >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          <TransformComponent>
            <div className="world-map" style={{ display: 'grid', gridTemplateColumns: `repeat(${matrix[0].length}, 1fr)` }}>
        {tiles}
      </div>
          </TransformComponent>
        </>
      )}
      </TransformWrapper>
      </div>
      <div className='paintbuttons'>
        <button key={worldAreas.length} onClick={() => setPaint('w')}>w</button>
        {paintbuttons}
        {/* <button onClick={() => setPaint('w')}>w</button>
        <button onClick={() => setPaint('I')}>I</button>
        <button onClick={() => setPaint('B')}>B</button>
        <button onClick={() => setPaint('M')}>M</button>
        <button onClick={() => setPaint('T')}>T</button>
        <button onClick={() => setPaint('H')}>H</button>
        <button onClick={() => setPaint('S')}>S</button> */}
      </div>
      <div>
        {paintArea ? paintArea.name : 'water'}{paintArea ? ': ' + paintArea.description : ''}
      </div>
    </div>
     
  )
}

export default MapEditor

      