import { Link, useParams } from "react-router-dom";
import { getTechnologyBySlug } from "../data/technologies";
import type { ELearningLevel } from "../types/eLearning.types";

const isValidLevel = (lvl: string): lvl is ELearningLevel =>
  lvl === "basic" || lvl === "intermediate" || lvl === "advanced";

export default function LevelPage() {
  const { techSlug, level } = useParams();

  const tech = techSlug ? getTechnologyBySlug(techSlug) : undefined;
  const lvl = level && isValidLevel(level) ? level : undefined;

  if (!tech || !lvl) {
    return (
      <main className="bg-bg">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-2xl font-semibold text-text">Page not found</h1>
          <p className="mt-2 text-muted">Invalid technology or level.</p>
          <Link className="mt-6 inline-block text-sm text-text underline" to="/services/e-learning">
            Back to E-Learning
          </Link>
        </div>
      </main>
    );
  }

  const total = tech.counts[lvl];
  const levelLabel = lvl.charAt(0).toUpperCase() + lvl.slice(1);

  return (
    <main className="bg-bg">
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <Link className="text-sm text-muted underline" to={`/services/e-learning/${tech.slug}`}>
            ← Back to {tech.label}
          </Link>

          <h1 className="mt-3 text-3xl font-semibold text-text">
            {tech.label} — {levelLabel}
          </h1>
          <p className="mt-2 text-muted">{total} questions</p>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <p className="text-sm text-muted">Next step</p>
            <p className="mt-2 text-text">
              Here you will render your questions list (from file, DB, or API).
            </p>

            <div className="mt-4 space-y-2 text-sm text-muted">
              <p>• Q1: Placeholder question</p>
              <p>• Q2: Placeholder question</p>
              <p>• Q3: Placeholder question</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
