import React, { useEffect, useState } from "react";
import GameWindow from "./GameWindow/GameWindow";
import LobbyWindow from "./LobbyWindow/LobbyWindow";
import "./TempStyle.css";

const WindowContainer = ({
  userID,
  userName,
  setGameID,
  gameID,
  isGameOwner,
  isGameGuest,
}) => {
  return (
    <div className="app-container">
      {gameID ? (
        <GameWindow
          gameID={gameID}
          userID={userID}
          userName={userName}
          isGameOwner={isGameOwner}
          isGameGuest={isGameGuest}
        />
      ) : (
        <LobbyWindow
          userID={userID}
          userName={userName}
          setGameID={setGameID}
        />
      )}
    </div>
  );
};

export default WindowContainer;
