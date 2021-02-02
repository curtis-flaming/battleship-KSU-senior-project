import React from "react";
import EnemyGrid from "./EnemyGrid";
import PlayerGrid from "./PlayerGrid";

const GridPanel = ({
  playerBoardState,
  enemyBoardState,
  //   playerTypes,
  dropHandler,
  isPlayerTurn,
  onShootClickHandler,
  bothPlayersReady,
  gameWinnerUserName,
  dragEnterHandler,
  dragLeaveHandler
}) => {
  return (
    <div className="grid-panel">
      {!gameWinnerUserName ? (
        <>
          <PlayerGrid
            isPlayerTurn={isPlayerTurn}
            dropHandler={dropHandler}
            playerBoardState={playerBoardState}
            dragEnterHandler={dragEnterHandler}
            dragLeaveHandler={dragLeaveHandler}
          />
          <EnemyGrid
            isPlayerTurn={isPlayerTurn}
            enemyBoardState={enemyBoardState}
            onShootClickHandler={onShootClickHandler}
            bothPlayersReady={bothPlayersReady}
          />
        </>
      ) : (
        <div>{gameWinnerUserName} has won the game!!!</div>
      )}
    </div>
  );
};

export default GridPanel;
