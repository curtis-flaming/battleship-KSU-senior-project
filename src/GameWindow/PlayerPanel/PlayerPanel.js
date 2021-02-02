import React, { useState } from "react";
import BoatSelectPanel from "./BoatSelectPanel";
import LeaveGame from "./LeaveGame";

const PlayerPanel = ({
  toggleBoatOrientation,
  setSelectedBoatHandler,
  boatOrientation,
  boatSelections,
  readyClick,
  userName,
  gameID,
  playersReadyStatus,
}) => {
  const [ctrlToggle, setCtrlToggle] = useState(true);
  const onDragHandler = (e) => {
    if (e.ctrlKey && ctrlToggle) {
      toggleBoatOrientation();
      setCtrlToggle(false);
    }
    if (!e.ctrlKey) setCtrlToggle(true);
  };

  var style;
  if (playersReadyStatus) {
    style = { boxShadow: "-5px 5px 0px 2px #7fbb8f" };
  } else if (playersReadyStatus === false) {
    style = { boxShadow: "-5px 5px 0px 2px #fe4a49" };
  }
  


  return (
    <div className="player-panel" style={style}>
      <div>{userName}</div>
      <LeaveGame gameID={gameID}/>
      {playersReadyStatus ? null : (
        <BoatSelectPanel
          onDragHandler={onDragHandler}
          setSelectedBoatHandler={setSelectedBoatHandler}
          boatSelections={boatSelections}
          readyClick={readyClick}
          boatOrientation={boatOrientation}
        />
      )}
      
    </div>
  );
};

export default PlayerPanel;
