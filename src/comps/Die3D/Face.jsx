import Pip from './Pip';
import { colors } from '../../logics/data';
const pipMap = {
  1: ['five'],
  2: ['one', 'nine'],
  3: ['one', 'five', 'nine'],
  4: ['one', 'three', 'seven', 'nine'],
  5: ['one', 'three', 'five', 'seven', 'nine'],
  6: ['one', 'three', 'four', 'six', 'seven', 'nine'],
  7: ['one', 'two', 'three', 'five', 'seven', 'eight', 'nine'],
  8: ['one', 'two', 'three', 'four', 'six', 'seven', 'eight', 'nine'],
  9: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
}

const defaultBorders = {
  top: 'black',
  right: 'black',
  bottom: 'black',
  left: 'black'
}

const Face = ({value, type, id, name, borders = defaultBorders}) => {
  //console.log(value, type, id, name)
  const totalPips = value;
  const pipsPattern = pipMap[totalPips];
  const pips = pipsPattern.map((pip, index) => {
      return (
        <Pip
          style={{ gridArea: pip, backgroundColor: colors[name].opp }}
          key={index}
          pip={pip}
          type={type}
        />
      );
    });
  let classes ='Face '
  //console.log(colors, name, value, type, id)
  const color = colors[name].main
  return (
    <div className={classes} style={{backgroundColor: color}} id={id + type} /* style={{
      borderTopColor: borders.top,
    }} */>
      {pips}
    </div>
  );
};

export default Face;