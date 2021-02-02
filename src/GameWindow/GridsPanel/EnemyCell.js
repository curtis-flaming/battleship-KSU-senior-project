import React from "react";

const EnemyCell = ({ id, hit, isPlayerTurn, onShootClickHandler, bothPlayersReady }) => {
  if (isPlayerTurn && hit !== 'hit' && hit !== 'miss' && bothPlayersReady) {
    var onClick = (index) => {
      onShootClickHandler(index);
    };
  } else {
    var onClick = () => {
      console.log("not valid");
    };
  }

  var innerValue;
  if (hit === "miss") {
    innerValue = <div className="miss">X</div>;
  } else if (hit === "hit") {
    innerValue = <div className="hit"></div>;
  } else {
    innerValue = null;
  }

  return (
    <div className="enemy-cell" onClick={() => onClick(id)}>
      {innerValue}
    </div>
  );
};

export default EnemyCell;
