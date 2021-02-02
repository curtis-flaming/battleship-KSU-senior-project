import Amplify, { API, graphqlOperation } from "aws-amplify";
import React from "react";
import awsconfig from "../aws-exports";
import { createPlayerBoard} from "../GameWindow/utils";
import { createGame } from "../graphql/mutations";
Amplify.configure(awsconfig);
const CreateGame = ({ userID, userName, setGameID }) => {
  const createGameClick = async () => {
    await API.graphql(
      graphqlOperation(createGame, {
        input: {
          ownerID: userID,
          gameOpen: true,
          ownerGameState: JSON.stringify(createPlayerBoard()),
          guestGameState: JSON.stringify(createPlayerBoard()),
          gameTurn: userID,
          ownerReady: false,
          guestReady: false 
        },
      })
    ).then((res) => {
      console.log(`creating game`);
      console.log(res);
      setGameID(res.data.createGame.id)
    });
  };

  return (
    <div className='create-game'>
      <button className="button" onClick={() => createGameClick()}>
        CREATE GAME
      </button>
    </div>
  );
};

export default CreateGame;
