
import { v4 as uuid } from "uuid";
import OpenGameItem from "./OpenGameItem";
import React, { useEffect, useState } from "react";


const OpenGamesList = ({ userID, userName, setGameID, openGames }) => {


  const renderGames =
    openGames &&
    openGames.map((game) => (
      <OpenGameItem
        userID={userID}
        userName={userName}
        key={uuid()}
        setGameID={setGameID}
        {...game}
      />
    ));

  return <div className="game-list">{renderGames}</div>;
};

export default OpenGamesList;
