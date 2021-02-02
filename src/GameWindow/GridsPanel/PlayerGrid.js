import React from "react";
import Cell from "./Cell";

const PlayerGrid = ({ playerBoardState, dropHandler, isPlayerTurn}) => {

  const renderGrid = playerBoardState.map((row) =>
    row.map((cell) => (
      <Cell
        key={JSON.stringify(cell.id)}
        dropHandler={dropHandler}
        {...cell}
      />
    ))
  );

     
  if (isPlayerTurn) {
    var style = { boxShadow: "0px 0px 0px 5px #fe9158" };
  }

  return (
    <div style={style} className="grid">
      {renderGrid}
    </div>
  );
};

export default PlayerGrid;
