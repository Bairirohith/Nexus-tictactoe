import { useState } from "react";
import GameBoard from "../components/game/GameBoard";
import GameHeader from "../components/game/GameHeader";
import {
  checkWinner,
  getNextPlayer,
  isDraw,
} from "../utils/gameEngine";
import type { Cell, Player } from "../types/game";

const EMPTY_BOARD: Cell[] = Array(9).fill(null);

export default function Arena() {
  const [board, setBoard] = useState<Cell[]>(EMPTY_BOARD);
  const [currentPlayer, setCurrentPlayer] =
    useState<Player>("X");

  const [winner, setWinner] =
    useState<Player | null>(null);

  const [winningCombination, setWinningCombination] =
    useState<number[]>([]);

  const [draw, setDraw] = useState(false);

  function handleCellClick(index: number) {
    if (
      board[index] ||
      winner ||
      draw
    ) {
      return;
    }

    const updatedBoard = [...board];

    updatedBoard[index] = currentPlayer;

    setBoard(updatedBoard);

    const result = checkWinner(updatedBoard);

    if (result.winner) {
      setWinner(result.winner);
      setWinningCombination(result.combination);
      return;
    }

    if (isDraw(updatedBoard)) {
      setDraw(true);
      return;
    }

    setCurrentPlayer(
      getNextPlayer(currentPlayer)
    );
  }

  function restart() {
    setBoard(EMPTY_BOARD);
    setCurrentPlayer("X");
    setWinner(null);
    setWinningCombination([]);
    setDraw(false);
  }

  return (
    <main className="min-h-screen px-6 pb-16 pt-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center">

        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-300">
            NEXUS ARENA
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Local Battle
          </h1>

          <p className="mt-4 text-white/40">
            Two minds. One board. One winner.
          </p>
        </div>

        <GameHeader
          currentPlayer={currentPlayer}
          onRestart={restart}
        />

        <GameBoard
          board={board}
          winningCombination={winningCombination}
          onCellClick={handleCellClick}
        />

        <div className="mt-10 text-center">

          {winner && (
            <div className="text-xl font-bold text-violet-300">
              {winner} wins the arena!
            </div>
          )}

          {draw && (
            <div className="text-xl font-bold text-cyan-300">
              The arena ends in a draw.
            </div>
          )}

          {!winner && !draw && (
            <p className="text-sm text-white/30">
              Make your move.
            </p>
          )}

        </div>
      </div>
    </main>
  );
}