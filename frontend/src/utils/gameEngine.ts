import type { Cell, Player } from "../types/game";

export const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function checkWinner(board: Cell[]) {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;

    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return {
        winner: board[a] as Player,
        combination,
      };
    }
  }

  return {
    winner: null,
    combination: [],
  };
}

export function isDraw(board: Cell[]) {
  return (
    board.every((cell) => cell !== null) &&
    checkWinner(board).winner === null
  );
}

export function getNextPlayer(player: Player): Player {
  return player === "X" ? "O" : "X";
}