import type { Cell } from "../types/game";
import {
  checkWinner,
  isDraw,
} from "../utils/gameEngine";

function getEmptyCells(board: Cell[]) {
  return board
    .map((cell, index) =>
      cell === null ? index : null
    )
    .filter(
      (index): index is number =>
        index !== null
    );
}

function randomMove(board: Cell[]) {
  const available = getEmptyCells(board);

  if (available.length === 0) {
    return -1;
  }

  return available[
    Math.floor(Math.random() * available.length)
  ];
}

function minimax(
  board: Cell[],
  depth: number,
  maximizing: boolean
): number {
  const result = checkWinner(board);

  if (result.winner === "O") {
    return 10 - depth;
  }

  if (result.winner === "X") {
    return depth - 10;
  }

  if (isDraw(board)) {
    return 0;
  }

  const available = getEmptyCells(board);

  if (maximizing) {
    let bestScore = -Infinity;

    for (const index of available) {
      board[index] = "O";

      const score = minimax(
        board,
        depth + 1,
        false
      );

      board[index] = null;

      bestScore = Math.max(
        bestScore,
        score
      );
    }

    return bestScore;
  }

  let bestScore = Infinity;

  for (const index of available) {
    board[index] = "X";

    const score = minimax(
      board,
      depth + 1,
      true
    );

    board[index] = null;

    bestScore = Math.min(
      bestScore,
      score
    );
  }

  return bestScore;
}

function bestMove(board: Cell[]) {
  const available = getEmptyCells(board);

  let bestScore = -Infinity;
  let move = available[0] ?? -1;

  for (const index of available) {
    board[index] = "O";

    const score = minimax(
      board,
      0,
      false
    );

    board[index] = null;

    if (score > bestScore) {
      bestScore = score;
      move = index;
    }
  }

  return move;
}

export function getAIMove(
  board: Cell[],
  difficulty: string
): number {
  if (difficulty === "easy") {
    return randomMove(board);
  }

  if (difficulty === "medium") {
    // Occasionally make a random move
    // to keep the game less predictable.
    if (Math.random() < 0.4) {
      return randomMove(board);
    }

    return bestMove(board);
  }

  return bestMove([...board]);
}