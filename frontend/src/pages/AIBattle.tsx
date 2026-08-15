import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Brain,
  RotateCcw,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";

import GameBoard from "../components/game/GameBoard";
import {
  checkWinner,
  isDraw,
} from "../utils/gameEngine";
import {
  DIFFICULTIES,
  type Difficulty,
} from "../ai/difficulty";
import { getAIMove } from "../ai/aiEngine";
import type { Cell } from "../types/game";

const EMPTY_BOARD: Cell[] =
  Array(9).fill(null);

export default function AIBattle() {
  const [difficulty, setDifficulty] =
    useState<Difficulty>("medium");

  const [board, setBoard] =
    useState<Cell[]>(EMPTY_BOARD);

  const [playerTurn, setPlayerTurn] =
    useState(true);

  const [winner, setWinner] =
    useState<Cell>(null);

  const [winningCombination, setWinningCombination] =
    useState<number[]>([]);

  const [draw, setDraw] =
    useState(false);

  const [thinking, setThinking] =
    useState(false);

  function restart() {
    setBoard([...EMPTY_BOARD]);
    setPlayerTurn(true);
    setWinner(null);
    setWinningCombination([]);
    setDraw(false);
    setThinking(false);
  }

  function handlePlayerMove(index: number) {
    if (
      !playerTurn ||
      thinking ||
      board[index] ||
      winner ||
      draw
    ) {
      return;
    }

    const updatedBoard = [...board];

    updatedBoard[index] = "X";

    const result =
      checkWinner(updatedBoard);

    if (result.winner) {
      setBoard(updatedBoard);
      setWinner(result.winner);
      setWinningCombination(
        result.combination
      );
      return;
    }

    if (isDraw(updatedBoard)) {
      setBoard(updatedBoard);
      setDraw(true);
      return;
    }

    setBoard(updatedBoard);
    setPlayerTurn(false);
    setThinking(true);
  }

  useEffect(() => {
    if (
      playerTurn ||
      winner ||
      draw
    ) {
      return;
    }

    const timer = setTimeout(() => {
      const move = getAIMove(
        [...board],
        difficulty
      );

      if (move === -1) {
        setThinking(false);
        return;
      }

      const updatedBoard = [...board];

      updatedBoard[move] = "O";

      const result =
        checkWinner(updatedBoard);

      setBoard(updatedBoard);

      if (result.winner) {
        setWinner(result.winner);
        setWinningCombination(
          result.combination
        );
        setThinking(false);
        return;
      }

      if (isDraw(updatedBoard)) {
        setDraw(true);
        setThinking(false);
        return;
      }

      setPlayerTurn(true);
      setThinking(false);
    }, 650);

    return () => clearTimeout(timer);
  }, [
    board,
    playerTurn,
    winner,
    draw,
    difficulty,
  ]);

  return (
    <main className="min-h-screen px-6 pb-20 pt-28">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to NEXUS
            </Link>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <Brain size={24} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-violet-300">
                  NEXUS AI
                </p>

                <h1 className="text-4xl font-black sm:text-5xl">
                  AI Battle
                </h1>
              </div>
            </div>
          </div>

          <button
            onClick={restart}
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            <RotateCcw size={16} />
            New Match
          </button>
        </div>

        {/* Difficulty */}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white/70">
            <Sparkles size={15} />
            Select difficulty
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {DIFFICULTIES.map((level) => (
              <button
                key={level.id}
                onClick={() => {
                  setDifficulty(level.id);
                  restart();
                }}
                className={`rounded-2xl border p-5 text-left transition ${
                  difficulty === level.id
                    ? "border-violet-400/40 bg-violet-500/10"
                    : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                }`}
              >
                <div className="text-2xl">
                  {level.icon}
                </div>

                <div className="mt-3 font-bold">
                  {level.name}
                </div>

                <p className="mt-1 text-sm leading-5 text-white/40">
                  {level.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Game */}
        <div className="flex flex-col items-center">

          {/* Player cards */}
          <div className="mb-8 grid w-full max-w-[520px] grid-cols-2 gap-3">

            <PlayerCard
              name="YOU"
              symbol="X"
              active={playerTurn}
            />

            <PlayerCard
              name="NEXUS AI"
              symbol="O"
              active={!playerTurn}
            />

          </div>

          <GameBoard
            board={board}
            winningCombination={
              winningCombination
            }
            onCellClick={
              handlePlayerMove
            }
          />

          {/* Status */}
          <div className="mt-8 min-h-12 text-center">

            {thinking && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="flex items-center justify-center gap-2 text-sm text-violet-300"
              >
                <Brain size={16} />
                NEXUS is thinking...
              </motion.div>
            )}

            {winner === "X" && (
              <Result
                icon={<Trophy size={22} />}
                title="YOU WON"
                text="You outplayed the NEXUS AI."
              />
            )}

            {winner === "O" && (
              <Result
                icon={<Brain size={22} />}
                title="AI WINS"
                text="The NEXUS AI found the winning path."
              />
            )}

            {draw && (
              <Result
                icon={<Sparkles size={22} />}
                title="DRAW"
                text="Neither player could claim the board."
              />
            )}

            {!winner &&
              !draw &&
              !thinking && (
                <p className="text-sm text-white/30">
                  Your move — place X on the board.
                </p>
              )}
          </div>

          {(winner || draw) && (
            <button
              onClick={restart}
              className="mt-6 flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-black transition hover:scale-105"
            >
              <RotateCcw size={17} />
              Rematch
            </button>
          )}

        </div>
      </div>
    </main>
  );
}

function PlayerCard({
  name,
  symbol,
  active,
}: {
  name: string;
  symbol: string;
  active: boolean;
}) {
  return (
    <motion.div
      animate={{
        scale: active ? 1.02 : 1,
      }}
      className={`rounded-2xl border p-4 transition ${
        active
          ? "border-violet-400/30 bg-violet-500/10"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[10px] tracking-[0.2em] text-white/30">
            {name}
          </div>

          <div className="mt-1 text-sm font-semibold">
            {active
              ? "YOUR TURN"
              : "WAITING"}
          </div>
        </div>

        <div
          className={`text-3xl font-black ${
            symbol === "X"
              ? "text-violet-300"
              : "text-cyan-300"
          }`}
        >
          {symbol}
        </div>
      </div>
    </motion.div>
  );
}

function Result({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className="text-center"
    >
      <div className="flex items-center justify-center gap-2 text-lg font-black text-white">
        {icon}
        {title}
      </div>

      <p className="mt-1 text-sm text-white/40">
        {text}
      </p>
    </motion.div>
  );
}