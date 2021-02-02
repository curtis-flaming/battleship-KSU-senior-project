import "./LobbyWindow.css";
import React, { useEffect, useState } from "react";
import OpenGamesList from "./OpenGamesList";
import CreateGame from "./CreateGame";
import awsconfig from "../aws-exports";
import { listGames } from "../graphql/queries";
import {
  onCreateGame,
  onDeleteGame,
  onUpdateGame,
} from "../graphql/subscriptions";
import Amplify, { API, graphqlOperation } from "aws-amplify";
Amplify.configure(awsconfig);

const LobbyWindow = ({ userID, userName, setGameID }) => {
  const [openGames, setOpenGames] = useState(null);

  const getOpenGames = async () => {
    await API.graphql(
      graphqlOperation(listGames, {
        filter: { gameOpen: { eq: true } },
      })
    )
      .then((res) => {
        console.log(res);
        console.log("listing games");
        setOpenGames(res.data.listGames.items);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getOpenGames();

    const gameCreateSub = API.graphql(graphqlOperation(onCreateGame)).subscribe(
      {
        next: (res) => {
          console.log(res);
          console.log("get open games sub");
          getOpenGames();
        },
      }
    );

    const gameUpdateSub = API.graphql(graphqlOperation(onUpdateGame)).subscribe(
      {
        next: (res) => {
          console.log(res);
          console.log("update games sub");
          getOpenGames();
        },
      }
    );

    const gameDeleteSub = API.graphql(graphqlOperation(onDeleteGame)).subscribe(
      {
        next: (res) => {
          console.log(res);
          console.log("game delete sub");
          getOpenGames();
        },
      }
    );

    return function cleanup() {
      gameCreateSub.unsubscribe();
      gameUpdateSub.unsubscribe();
      gameDeleteSub.unsubscribe();
    };
  }, []);

  return (
    <div className="lobby-window">
      <CreateGame
        userID={userID}
        userName={userName}
        setGameID={setGameID}
      />
      <OpenGamesList
        userID={userID}
        userName={userName}
        setGameID={setGameID}
        openGames={openGames}
      />
    </div>
  );
};

export default LobbyWindow;
