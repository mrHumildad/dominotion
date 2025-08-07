import { AgentDescription } from "../logics/agents";
import PollinationImage from "./PollinationImage";
const AgentInfo = ({agent }) => {
  console.log('agent info; ', agent)
  return (
    <div className="agent-info">
      <div className="a">
        <div className="agent-info-text">
        <span className="agent-info-name">{agent.name.toUpperCase()}</span>
        <span className="agent-info-ideology">{agent.ideologyAdj + ' ' + agent.subIdeology.name + ' [' + agent.ideology + ']' }</span>
        <spam className="agent-info-job">{agent.job + ' [' + agent.field + ']'}</spam>

        </div>
        <span className="agent-info-curiosity">{agent.curiosity}</span>
      </div>
      <div className="agent-image-container">
        <img  className="agent-info-img" src={agent.imgUrl} alt="" />
      </div>
    </div>
  );
}

export default AgentInfo;
