import React from "react";
import awsconfig from "../aws-exports";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { updateGame } from "../graphql/mutations";
Amplify.configure(awsconfig);
const OpenGameItem = ({ userID, userName, owner, id, setGameID, unSub}) => {
  const joinGameClick = async () => {
    await API.graphql(
      graphqlOperation(updateGame, {
        input: {
          id,
          guestUserName: userName,
          guestID: userID,
          gameOpen: false,
        },
      })
    )
      .then((res) => {
        // unSub()
        console.log(`joining game ${id}`);
        console.log(res);
        setGameID(res.data.updateGame.id)
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="game-item">
      <button className="button" onClick={() => joinGameClick()}>
        JOIN GAME
      </button>
      <div>{owner}</div>
    </div>
  );
};

export default OpenGameItem;
