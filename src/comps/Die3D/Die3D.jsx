import './Die3D.css';
import Face from './Face';
import { pipMap } from '../../logics/die';
import Pip from './Pip';

/* const DieFace = ({face, i}) => {
  let diePips = null;
  const pipsArr = face.pips
  const totalPips = pipsArr.length;
  const pipsPattern = pipMap[totalPips];
  ///console.log('usedpips', usedPips)
  if (totalPips > 0) {
    diePips = face.pips.map((pip, index) => {
      return (
        <Pip
          style={{ gridArea: pipsPattern[index] }}
          key={index}
          pip={pip}
        />
      );
    });
  }

  const classes ='face ' + 'face--' + i 
  + ' ' +  face.material + '-color';

  return (
    <div className={classes} id={'face-' + (i + 1)}>
      {diePips}
    </div>
  );
}; */

const Die3D = ({ data, roll, isPlayer, size = '' }) => {
  const currentClass = 'show-' + roll;
  const renderedFaces = data.faces.map((face, i) => (
    <Face
      face={face}
      i={i}
      key={i}
      size={size}
    />
  ));

  return (
    <div  id={isPlayer} className={size + 'cube ' + currentClass}>
      {renderedFaces}
    </div>
  );
};

export default Die3D;