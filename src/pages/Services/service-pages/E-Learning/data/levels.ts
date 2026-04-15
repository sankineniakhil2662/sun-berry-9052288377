import type { ELearningLevel } from "../types/eLearning.types";

export const LEVELS: { key: ELearningLevel; label: string; helper: string }[] = [
  { key: "basic", label: "Basic", helper: "Fundamentals + core concepts" },
  { key: "intermediate", label: "Intermediate", helper: "Real-world patterns + depth" },
  { key: "advanced", label: "Advanced", helper: "System-level + tricky interview topics" }
];
