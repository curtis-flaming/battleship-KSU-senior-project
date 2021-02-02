import React from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../aws-exports";
import { deleteGame } from "../../graphql/mutations";

Amplify.configure(awsconfig);

const LeaveGame = ({ gameID }) => {
  const leaveGameHandler = async () => {
    await API.graphql(graphqlOperation(deleteGame, { input: { id: gameID } }))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <button className="button" onClick={() => leaveGameHandler()} >
      LEAVE GAME
    </button>
  );
};

export default LeaveGame;
