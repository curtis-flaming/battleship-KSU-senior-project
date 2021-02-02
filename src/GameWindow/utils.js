export const R = 10;
export const C = 10;
export const HORIZONTAL = "horizontal";
export const VERTICAL = "vertical";
export const BATTLESHIP = "battleship";
export const CARRIER = "carrier";
export const DESTROYER = "destroyer";
export const SUB = "sub";
export const TUG = "tug";
export const PLAYER1 = "player1";
export const PLAYER2 = "player2";
export const lengthMap = {
  battleship: 4,
  carrier: 5,
  destroyer: 3,
  sub: 3,
  tug: 2,
};

export const boatSelects = {
  battleship: true,
  carrier: true,
  destroyer: true,
  sub: true,
  tug: true,
};


export const createPlayerBoard = () => {
  var board = [];
  for (let i = 0; i < R; i++) {
    board[i] = [];

    for (let j = 0; j < C; j++) {
      board[i][j] = {
        id: { i, j },
        boat: null,
        piece: null,
        orientation: null,
        hover: null,
        hit: null,
      };
    }
  }
  return board;
};


export const createEnemyBoard = () => {
  var board = [];
  for (let i = 0; i < R; i++) {
    board[i] = [];

    for (let j = 0; j < C; j++) {
      board[i][j] = {
        id: { i, j },
        hit: null,
      };
    }
  }
  return board;
};
