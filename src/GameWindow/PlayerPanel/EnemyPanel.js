import React from "react";

const EnemyPanel = ({ enemyReadyStatus, enemyUserName }) => {

    var style;
    if(enemyReadyStatus){
      style = {boxShadow: '5px 5px 0px 2px #7fbb8f'}
    }else if(enemyReadyStatus === false){
      style = {boxShadow: '5px 5px 0px 2px #fe4a49'}
    }

return <div className="player-panel" style={style}>{enemyUserName}</div>;
};

export default EnemyPanel;
