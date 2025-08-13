import { months } from "../logics/utils";
import { fields, colors } from "../logics/data.js";
const Header = ({year, month, myResources}) => {

  let resources = [];
  Object.keys(myResources).map(res => {
    resources.push(
    <div key={res} className="resource" >
     {/*  <span className="res-name">{fields[res].icon}</span> */}
      <span style={{backgroundColor: colors[res].main, color: colors[res].opp}} 
            className="res-value">{myResources[res]}
      </span>
    </div>);
  })

  return (
  <div className='top'>
    <span id='game-title'>World DominOtion</span>
    <span id='date'>{months[month] + ' ' + year}</span>
    <div className="my-resources">
      {resources}
    </div>
  </div>
  );
}

export default Header;
