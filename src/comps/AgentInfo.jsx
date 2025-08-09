import { AgentDescription } from "../logics/agents";
import PollinationImage from "./PollinationImage";
const AgentInfo = ({agent }) => {
  console.log('agent info; ', agent)
  return (
    <div className="agent-info">
      <div className="agent-data">
        <div className="agent-info-name">{agent.name.toUpperCase()}</div>
          <span className="agent-info-ideology">{agent.ideologyAdj + ' ' + agent.subIdeology.name + ' [' + agent.ideology.toUpperCase() + ']' }</span>
          <span className="agent-info-job">{agent.job + ' [' + agent.field.toUpperCase() + ']'}</span>
           <div className="agent-info-curiosity">{agent.curiosity}</div>
      </div>
      <div className="agent-image-container">
        <img  className="agent-info-img" src={agent.imgUrl} alt="" />
      </div>
    </div>
  );
}

export default AgentInfo;
