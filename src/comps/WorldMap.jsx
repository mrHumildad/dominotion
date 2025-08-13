import {tileBorders, findAreaByChar} from '../logics/matrix_utils.js';
import { colors, worldAreas } from '../logics/data';
import Face from './Die3D/Face.jsx'; // Assuming you create this component  

const WorldMap = ({
  matrix,
  selectedAgent,
  deployedAgent,
  deployableArea,
  cellClick,
  myAgents,
  areas
}) => {
    const tiles = matrix.map((row, rowIndex) => {
    const deployablechar = deployableArea ? deployableArea.char : null;
    return row.map((cell, colIndex) => {
      const isDeployable = cell === deployablechar;
      // Find if any of 'myAgents' has its ideology or field at the current cell
      const currentMyAgent = myAgents.find(
        (agent) =>
          (agent.ideologyCell.row === rowIndex && agent.ideologyCell.col === colIndex) ||
          (agent.fieldCell.row === rowIndex && agent.fieldCell.col === colIndex)
      );
      //console.log(currentMyAgent, 'currentMyAgent')
      const isDeployedIdeology =
        deployedAgent && deployedAgent.ideology.row === rowIndex && deployedAgent.ideology.col === colIndex;
      const isDeployedField =
        deployedAgent && deployedAgent.field.row === rowIndex && deployedAgent.field.col === colIndex;
     // console.log(cell)
      if (cell === ' ')
        return (
          <div
            className='tile water'
            key={`${rowIndex}-${colIndex}`}
            id={`${rowIndex}-${colIndex}`}
            onClick={() => cellClick({ row: rowIndex, col: colIndex })}
          ></div>
        );
      
      const area = findAreaByChar(cell, worldAreas); ///// worldareas no!
      const areaColor = colors[area.sides[5].ideology];
     // console.log(colors, cell)
     // console.log(colors, [area.sides[5].ideology])
      const cellCol = isDeployable ? areaColor.main : colors[area.sides[5].ideology].des;
      const cellBorders = tileBorders({row: rowIndex, col: colIndex}, myAgents, currentMyAgent, matrix);
      return (
        <div
          key={`${rowIndex}-${colIndex}`}
          id={`${rowIndex}-${colIndex}`}
          style={{ 
            backgroundColor: cellCol,
            borderTopColor: cellBorders.top,
            borderRightColor: cellBorders.right,
            borderBottomColor: cellBorders.bottom,
            borderLeftColor: cellBorders.left,
          }}
          className={`tile`}
          onClick={() => cellClick({ row: rowIndex, col: colIndex })}
        >
          {/* Render deployed agent's ideology or field */}
          {isDeployedIdeology && (
            <Face
              value={selectedAgent.ideologyValue}
              type='ideology'
              id={selectedAgent.id}
              name={selectedAgent.ideology}
            />
          )}
          {isDeployedField && (
            <Face value={selectedAgent.fieldValue} type='field' id={selectedAgent.id} name={selectedAgent.field} />
          )}

          {/* Render myAgent's ideology or field if present at this cell */}
          {currentMyAgent && currentMyAgent.ideologyCell.row === rowIndex && currentMyAgent.ideologyCell.col === colIndex && (
            <Face
              value={currentMyAgent.ideologyValue}
              type='ideology'
              id={currentMyAgent.id}
              name={currentMyAgent.ideology}
            />
          )}
          {currentMyAgent && currentMyAgent.fieldCell.row === rowIndex && currentMyAgent.fieldCell.col === colIndex && (
            <Face
              value={currentMyAgent.fieldValue}
              type='field'
              id={currentMyAgent.id}
              name={currentMyAgent.field}
              /* borders={{top: tileBorders({row: rowIndex, col: colIndex}, matrix, myAgents, currentMyAgent)}} */
            />
          )}
        </div>
      );
    });
  });
  return (
    <div id='worldMap' style={{ display: 'grid', gridTemplateColumns: `repeat(${matrix[0].length}, 1fr)` }}>
      {tiles}
    </div>
  );
}
  

export default WorldMap;
