/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const subToGame = /* GraphQL */ `
  subscription SubToGame($id: ID!) {
    subToGame(id: $id) {
      id
      gameOpen
      ownerID
      guestID
      guestUserName
      ownerGameState
      guestGameState
      ownerReady
      guestReady
      gameTurn
      winner
      createdAt
      updatedAt
      owner
    }
  }
`;
export const subToGameDelete = /* GraphQL */ `
  subscription SubToGameDelete($id: ID!) {
    subToGameDelete(id: $id) {
      id
      gameOpen
      ownerID
      guestID
      guestUserName
      ownerGameState
      guestGameState
      ownerReady
      guestReady
      gameTurn
      winner
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
      id
      gameOpen
      ownerID
      guestID
      guestUserName
      ownerGameState
      guestGameState
      ownerReady
      guestReady
      gameTurn
      winner
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
      id
      gameOpen
      ownerID
      guestID
      guestUserName
      ownerGameState
      guestGameState
      ownerReady
      guestReady
      gameTurn
      winner
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
      id
      gameOpen
      ownerID
      guestID
      guestUserName
      ownerGameState
      guestGameState
      ownerReady
      guestReady
      gameTurn
      winner
      createdAt
      updatedAt
      owner
    }
  }
`;
