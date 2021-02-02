import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
//---------------
import Amplify, { API, Auth, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import awsconfig from "./aws-exports.js";
import { getGame, listGames } from "./graphql/queries.js";
import {subToGameDelete} from "./graphql/subscriptions";
import WindowContainer from "./WindowContainer";

Amplify.configure(awsconfig);
//----------
const App = () => {
  const [userName, setUserName] = useState(null);
  const [userID, setUserID] = useState(null);
  const [gameID, setGameID] = useState(null);
  const [isGameOwner, setIsGameOwner] = useState(false);
  const [isGameGuest, setIsGameGuest] = useState(false);
  const [checkedForGames, setCheckedForGames] = useState(false);

  const checkForGameGuest = async (userID) => {
    await API.graphql(
      graphqlOperation(listGames, {
        filter: { guestID: { eq: userID } },
      })
    )
      .then((res) => {
        console.log("checking for guest game");
        console.log(userID);
        console.log(res.data);
        if (res.data.listGames.items[0]?.guestID === userID) {
          setGameID(res.data.listGames.items[0]?.id);
          setIsGameGuest(true);
        } else {
          setCheckedForGames(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const checkForGame = async (userID) => {
    console.log(userID);
    await API.graphql(
      graphqlOperation(listGames, {
        filter: { ownerID: { eq: userID } },
      })
    )
      .then((res) => {
        console.log("checking for owned game");
        console.log(res.data);
        if (res.data.listGames.items[0]?.ownerID === userID) {
          setGameID(res.data.listGames.items[0]?.id);
          setIsGameOwner(true);
        } else {
          checkForGameGuest(userID);
        }
      })
      .catch((err) => console.log(err));
  };

  const getUserInfo = () => {
    Auth.currentUserInfo()
      .then((data) => {
        setUserID(data.attributes.sub);
        setUserName(data.username);
        checkForGame(data.attributes.sub);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserInfo();

    if (gameID !== null) {
      var gameDeleteSub = API.graphql(
        graphqlOperation(subToGameDelete, { id: gameID })
      ).subscribe({
        next: (data) => {
          console.log("deleted game");
          console.log(data);
          setGameID(null)
        },
      });
    }
  }, [gameID]);

  const setGameIDHandler = (id) => {
    setGameID(id);
  };

  return (
    <div className="app">
      <h1 className="title">PewPewBoats</h1>
      <div className="sign-out">
        <AmplifySignOut />
      </div>
      {userID && (isGameOwner || isGameGuest || checkedForGames) ? (
        <WindowContainer
          userID={userID}
          userName={userName}
          gameID={gameID}
          setGameID={setGameIDHandler}
          isGameOwner={isGameOwner}
          isGameGuest={isGameGuest}
        />
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default withAuthenticator(App);