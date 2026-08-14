import { motion } from "framer-motion";
import type { Cell } from "../../types/game";

interface GameCellProps {
  value: Cell;
  index: number;
  onClick: () => void;
  winning: boolean;
}

export default function GameCell({
  value,
  index,
  onClick,
  winning,
}: GameCellProps) {
  return (
    <motion.button
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      whileHover={!value ? { scale: 1.04 } : {}}
      whileTap={{ scale: 0.94 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
      onClick={onClick}
      disabled={Boolean(value)}
      className={`
        relative aspect-square rounded-2xl
        border border-white/10
        bg-white/[0.035]
        text-5xl font-black
        backdrop-blur-xl
        transition-all
        sm:text-6xl
        ${
          winning
            ? "border-violet-400/60 bg-violet-500/20 shadow-[0_0_35px_rgba(139,92,246,0.35)]"
            : "hover:border-white/20 hover:bg-white/[0.06]"
        }
      `}
      aria-label={`Cell ${index + 1}`}
    >
      {value && (
        <motion.span
          initial={{ scale: 0, rotate: value === "X" ? -20 : 20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
          className={
            value === "X"
              ? "text-violet-300"
              : "text-cyan-300"
          }
        >
          {value}
        </motion.span>
      )}
    </motion.button>
  );
}