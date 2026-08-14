import { RotateCcw } from "lucide-react";
import type { Player } from "../../types/game";

interface GameHeaderProps {
  currentPlayer: Player;
  onRestart: () => void;
}

export default function GameHeader({
  currentPlayer,
  onRestart,
}: GameHeaderProps) {
  return (
    <div className="mb-8 flex w-full max-w-[520px] items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-white/40">
          Current Turn
        </p>

        <div className="mt-2 flex items-center gap-3">
          <span
            className={
              currentPlayer === "X"
                ? "text-3xl font-black text-violet-300"
                : "text-3xl font-black text-cyan-300"
            }
          >
            {currentPlayer}
          </span>

          <span className="text-sm text-white/40">
            to move
          </span>
        </div>
      </div>

      <button
        onClick={onRestart}
        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
      >
        <RotateCcw size={16} />
        Restart
      </button>
    </div>
  );
}