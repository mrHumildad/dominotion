import Pip from './Pip';

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
const Face = ({value, type, id, name}) => {
  const totalPips = value;
  const pipsPattern = pipMap[totalPips];
  ///console.log('usedpips', usedPips)
  const pips = pipsPattern.map((pip, index) => {
      return (
        <Pip
          style={{ gridArea: pip }}
          key={index}
          pip={pip}
          type={type}
        />
      );
    });

  let classes ='Face ' + name
  return (
    <div className={classes} id={id + type}>
      {pips}
    </div>
  );
};

export default Face;