import React, { useEffect, useState } from "react";
import "./GameWindow.css";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { getGame } from "../graphql/queries";
import awsconfig from "../aws-exports";
import { subToGame } from "../graphql/subscriptions";
import PlayerPanel from "./PlayerPanel/PlayerPanel";
import { boatSelects, HORIZONTAL, lengthMap, VERTICAL } from "./utils";
import GridPanel from "./GridsPanel/GridPanel";
import EnemyPanel from "./PlayerPanel/EnemyPanel";
import { updateGame } from "../graphql/mutations";
Amplify.configure(awsconfig);

const GameWindow = ({ gameID, userID, userName }) => {
  const [boatSelections, setBoatSelections] = useState(boatSelects);
  const [selectedBoat, setSelectedBoat] = useState(null);
  const [boatOrientation, toggleBoatOrientation] = useState(HORIZONTAL);
  const [ownerGameState, setOwnerGameState] = useState(null);
  const [guestGameState, setGuestGameState] = useState(null);
  const [playerTypes, setPlayerTypes] = useState(null);
  const [playersReadyStatus, setPlayersReadyStatus] = useState({
    owner: null,
    guest: null,
  });
  const [bothPlayersReady, setBothPlayersReady] = useState(false);
  const [gameTurn, setGameTurn] = useState(null);
  const [enemyID, setEnemyID] = useState(null);
  const [enemyUserName, setEnemyUserName] = useState(null);
  const [boatHitTracker, setBoatHitTracker] = useState({
    carrier: 5,
    battleship: 4,
    destroyer: 3,
    sub: 3,
    tug: 2,
  });
  const [gameWinnerUserName, setGameWinnerUserName] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null)

  const setGameWinnerUpdate = async () => {
    await API.graphql(
      graphqlOperation(updateGame, {
        input: {
          id: gameID,
          winner: userName,
        },
      })
    )
      .then((res) => {
        console.log(res);
        console.log(`game won by ${userName}`);
      })
      .catch((err) => console.log(err));
  };

  const checkForWin = (tempHitTracker) => {
    for (let boat in tempHitTracker) {
      if (tempHitTracker[boat] !== 0) return false;
    }
    return true;
  };

  const makeHitOnBoat = (boat) => {
    var tempHitTracker = { ...boatHitTracker };
    tempHitTracker = { ...tempHitTracker, [boat]: tempHitTracker[boat] - 1 };
    console.log("hits");
    console.log(tempHitTracker);
    setBoatHitTracker(tempHitTracker);
    if (checkForWin(tempHitTracker)) {
      setGameWinnerUpdate();
    }
  };

  const setPlayerBoardState = (state) => {
    if (playerTypes.playerValue === "owner") {
      setOwnerGameState(state);
    } else {
      setGuestGameState(state);
    }
  };

  const getPlayerBoardState = () => {
    if (playerTypes.playerValue === "owner") {
      return ownerGameState;
    } else {
      return guestGameState;
    }
  };

  const getEnemyBoardState = () => {
    if (playerTypes.playerValue === "owner") {
      return guestGameState;
    } else {
      return ownerGameState;
    }
  };

  const getGameOnID = async () => {
    await API.graphql(graphqlOperation(getGame, { id: gameID }))
      .then((res) => {
        console.log(`getting game ${gameID}`);
        console.log(res);
        setOwnerGameState(JSON.parse(res.data.getGame.ownerGameState));
        setGuestGameState(JSON.parse(res.data.getGame.guestGameState));
        setGameTurn(res.data.getGame.gameTurn);
        setGameWinnerUserName(res.data.getGame.winner);
        setPlayersReadyStatus({
          owner: res.data.getGame.ownerReady,
          guest: res.data.getGame.guestReady,
        });

        if (userID === res.data.getGame.ownerID) {
          setPlayerTypes({ playerValue: "owner", enemyValue: "guest" });
          setEnemyID(res.data.getGame.guestID);
          setEnemyUserName(res.data.getGame.guestUserName);
        } else {
          setPlayerTypes({ playerValue: "guest", enemyValue: "owner" });
          setEnemyID(res.data.getGame.ownerID);
          setEnemyUserName(res.data.getGame.owner);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getGameOnID();

    console.log("creating game sub");
    var gameSub = API.graphql(
      graphqlOperation(subToGame, { id: gameID })
    ).subscribe({
      next: (data) => {
        const res = data.value.data.subToGame;
        if (res.ownerReady) setOwnerGameState(JSON.parse(res.ownerGameState));
        if (res.guestReady) setGuestGameState(JSON.parse(res.guestGameState));
        setPlayersReadyStatus({
          owner: res.ownerReady,
          guest: res.guestReady,
        });
        setBothPlayersReady(res.ownerReady && res.guestReady);
        if (userID === res.ownerID) {
          setEnemyID(res.guestID);
          setEnemyUserName(res.guestUserName);
        }
        if (userID === res.guestID) {
          setEnemyID(res.ownerID);
          setEnemyUserName(res.owner);
        }
        setGameTurn(res.gameTurn);
        setGameWinnerUserName(res.winner);
      },
    });

    return function () {
      gameSub.unsubscribe();
    };
  }, []);

  const checkValidDrop = (index, length) => {
    const playerBoard = getPlayerBoardState();
    try {
      if (boatOrientation === HORIZONTAL) {
        for (let i = 0; i < length; i++) {
          if (playerBoard[index.i][index.j + i].boat !== null) {
            return false;
          }
        }
      } else {
        for (let i = 0; i < length; i++) {
          if (playerBoard[index.i + i][index.j].boat !== null) {
            return false;
          }
        }
      }
    } catch (err) {
      console.log(err);
      console.log("invalid");
      return false;
    }
    return true;
  };

  const dropHandler = (index) => {
    var tempDropGrid = getPlayerBoardState().map((row) =>
      row.map((cell) => {
        return { ...cell };
      })
    );

    const length = lengthMap[selectedBoat];
    if (checkValidDrop(index, length)) {
      if (boatOrientation === HORIZONTAL) {
        for (let i = 0; i < length; i++) {
          tempDropGrid[index.i][index.j + i].boat = selectedBoat;
          tempDropGrid[index.i][index.j + i].orientation = boatOrientation;
          if (i === 0) tempDropGrid[index.i][index.j + i].piece = "start";
          else if (i === length - 1)
            tempDropGrid[index.i][index.j + i].piece = "end";
        }
      } else {
        for (let i = 0; i < length; i++) {
          tempDropGrid[index.i + i][index.j].boat = selectedBoat;
          tempDropGrid[index.i + i][index.j].orientation = boatOrientation;
          if (i === 0) tempDropGrid[index.i + i][index.j].piece = "top";
          else if (i === length - 1)
            tempDropGrid[index.i + i][index.j].piece = "bottom";
        }
      }
      setBoatSelections({ ...boatSelections, [selectedBoat]: false });
      setPlayerBoardState(tempDropGrid);
    }
  };

  const dragEnterHandler = (index) => {
      
      console.log(`enter ${JSON.stringify(index)}`);
        setHoverIndex(index)
        var length = lengthMap[selectedBoat];
      var tempDragGrid = [...getPlayerBoardState()].map((row) =>
        row.map((cell) => {
          return { ...cell };
        })
      );

      if (boatOrientation === HORIZONTAL) {
        for (let i = 0; i < length; i++) {
          try {
            tempDragGrid[index.i][index.j + i].hover = "hover";
          } catch (e) {}
        }
      }

      setPlayerBoardState(tempDragGrid);
     
      
   
  };

  const dragLeaveHandler = (index) => {
    console.log(`leave ${JSON.stringify(index)}`);
    var length = lengthMap[selectedBoat];
    var tempDragLeaveGrid = [...getPlayerBoardState()].map((row) =>
      row.map((cell) => {
        return { ...cell };
      })
    );

    if (boatOrientation === HORIZONTAL) {
      for (let i = 0; i < length; i++) {
        try {
          tempDragLeaveGrid[index.i][index.j + i].hover = null;
        } catch (e) {}
      }
    }
    setHoverIndex(null)
    setPlayerBoardState(tempDragLeaveGrid);
  };

  const setSelectedBoatHandler = async (boat) => {
    setSelectedBoat(boat);
  };

  const toggleBoatOrientationHadler = () => {
    if (boatOrientation === HORIZONTAL) {
      toggleBoatOrientation(VERTICAL);
    } else {
      toggleBoatOrientation(HORIZONTAL);
    }
  };

  const readyClickHandler = async () => {
    if (playerTypes.playerValue === "owner")
      var userInput = {
        ownerReady: true,
        ownerGameState: JSON.stringify(ownerGameState),
      };
    else
      var userInput = {
        guestReady: true,
        guestGameState: JSON.stringify(guestGameState),
      };

    await API.graphql(
      graphqlOperation(updateGame, {
        input: {
          id: gameID,
          ...userInput,
        },
      })
    )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const onShootClickHandler = async (index) => {
    var tempShootGrid = [...getEnemyBoardState()].map((row) =>
      row.map((cell) => {
        return { ...cell };
      })
    );
    if (tempShootGrid[index.i][index.j].boat !== null) {
      tempShootGrid[index.i][index.j].hit = "hit";
      makeHitOnBoat(tempShootGrid[index.i][index.j].boat);
    } else {
      tempShootGrid[index.i][index.j].hit = "miss";
    }

    if (playerTypes.playerValue === "owner")
      var playerInput = {
        guestGameState: JSON.stringify(tempShootGrid),
      };
    else
      var playerInput = {
        ownerGameState: JSON.stringify(tempShootGrid),
      };

    await API.graphql(
      graphqlOperation(updateGame, {
        input: {
          id: gameID,
          gameTurn: enemyID,
          ...playerInput,
        },
      })
    )
      .then((res) => {
        console.log(res);
        // setEnemyBoardState(tempShootGrid);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="game-window">
      <PlayerPanel
        toggleBoatOrientation={toggleBoatOrientationHadler}
        setSelectedBoatHandler={setSelectedBoatHandler}
        boatOrientation={boatOrientation}
        boatSelections={boatSelections}
        readyClick={readyClickHandler}
        gameID={gameID}
        userName={userName}
        playersReadyStatus={playersReadyStatus[playerTypes?.playerValue]}
        isTurn={gameTurn === userID}
      />
      {ownerGameState && guestGameState && playerTypes ? (
        <GridPanel
          playerBoardState={getPlayerBoardState()}
          enemyBoardState={getEnemyBoardState()}
          playerTypes={playerTypes}
          dropHandler={dropHandler}
          isPlayerTurn={userID === gameTurn}
          onShootClickHandler={onShootClickHandler}
          bothPlayersReady={bothPlayersReady}
          gameWinnerUserName={gameWinnerUserName}
          dragEnterHandler={dragEnterHandler}
          dragLeaveHandler={dragLeaveHandler}
        />
      ) : (
        <div>loading grids...</div>
      )}
      <EnemyPanel
        enemyReadyStatus={playersReadyStatus[playerTypes?.enemyValue]}
        enemyUserName={enemyUserName}
      />
    </div>
  );
};

export default GameWindow;
