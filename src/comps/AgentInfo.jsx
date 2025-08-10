const AgentInfo = ({agent, handleImageClick, showBigImg, panelStyle}) => {
  //console.log('agent info; ', agent)
  const isBig = showBigImg ? '-big' : '';

  return (
    <div style={panelStyle} className={"agent-info" +  isBig}>
      <div className="agent-data">
        <div className="agent-info-name">{agent.name.toUpperCase()}</div>
          <span className="agent-info-ideology">{agent.ideologyAdj + ' ' + agent.subIdeology.name + ' [' + agent.ideology.toUpperCase() + ']' }</span>
          <span className="agent-info-job">{agent.job + ' [' + agent.field.toUpperCase() + ']'}</span>
           <div className="agent-info-curiosity">{agent.curiosity}</div>
      </div>
      <div className={"agent-image-container" +  isBig} onClick={handleImageClick}>
        <img  className={"agent-info-img" +  isBig} src={agent.imgUrl} alt="" />
      </div>
    </div>
  );
}

export default AgentInfo;
