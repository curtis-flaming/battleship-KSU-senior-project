/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
