import React from "react";
import { createEnemyBoard } from "../utils";
import EnemyCell from "./EnemyCell";

const EnemyGrid = ({ isPlayerTurn ,enemyBoardState, onShootClickHandler,  bothPlayersReady}) => {
  const renderGrid = enemyBoardState.map((row) =>
    row.map((cell) => (
      <EnemyCell
        key={JSON.stringify(cell.id)}
        {...cell}
        isPlayerTurn={isPlayerTurn}
        onShootClickHandler={onShootClickHandler}
        bothPlayersReady={bothPlayersReady}
      />
    ))
  );

      if(!isPlayerTurn){
        var style = {boxShadow: "0px 0px 0px 5px #fe9158" }
      }

  return <div style={style} className="grid">{renderGrid}</div>;
};

export default EnemyGrid;
