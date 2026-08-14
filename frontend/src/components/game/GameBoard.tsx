import GameCell from "./GameCell";
import type { Cell } from "../../types/game";

interface GameBoardProps {
  board: Cell[];
  winningCombination: number[];
  onCellClick: (index: number) => void;
}

export default function GameBoard({
  board,
  winningCombination,
  onCellClick,
}: GameBoardProps) {
  return (
    <div className="grid w-full max-w-[520px] grid-cols-3 gap-3">
      {board.map((cell, index) => (
        <GameCell
          key={index}
          value={cell}
          index={index}
          winning={winningCombination.includes(index)}
          onClick={() => onCellClick(index)}
        />
      ))}
    </div>
  );
}