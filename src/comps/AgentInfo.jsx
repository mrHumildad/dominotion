import { AgentDescription } from "../logics/agents";
import PollinationImage from "./PollinationImage";
const AgentInfo = ({agent }) => {
  console.log('agent info; ', agent)
  return (
    <div className="agent-info">
      <div className="agent-info-text">
        <span>{agent.name}</span>
        <p>{AgentDescription(agent)}</p>
        <p>{agent.curiosity}</p>
      </div>
      <img  className="agent-info-img" src={agent.imgUrl} width="400" alt="" />
      {/* <PollinationImage agent={agent} handleAgentImageUpdate={handleAgentImageUpdate}/> */}
    </div>
  );
}

export default AgentInfo;
