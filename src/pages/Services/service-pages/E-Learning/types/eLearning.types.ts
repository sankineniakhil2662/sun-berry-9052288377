export type ELearningLevel = "basic" | "intermediate" | "advanced";

export type Technology = {
  slug: string;
  label: string;
  categoryKey: string;      // "frontend"
  categoryLabel: string;    // "🌐 Frontend Technologies"
  counts: Record<ELearningLevel, number>;
};
