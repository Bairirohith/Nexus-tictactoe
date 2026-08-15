export type Difficulty =
  | "easy"
  | "medium"
  | "impossible";

export interface DifficultyConfig {
  id: Difficulty;
  name: string;
  description: string;
  icon: string;
}

export const DIFFICULTIES: DifficultyConfig[] = [
  {
    id: "easy",
    name: "Easy",
    description: "A relaxed match for beginners.",
    icon: "🌱",
  },
  {
    id: "medium",
    name: "Medium",
    description: "The AI thinks before it moves.",
    icon: "⚡",
  },
  {
    id: "impossible",
    name: "Impossible",
    description: "Perfect play. Can you survive?",
    icon: "🧠",
  },
];