export type Player = "X" | "O";

export type Cell = Player | null;

export type GameStatus =
  | "playing"
  | "won"
  | "draw";

export interface GameState {
  board: Cell[];
  currentPlayer: Player;
  winner: Player | null;
  winningCombination: number[];
  status: GameStatus;
}