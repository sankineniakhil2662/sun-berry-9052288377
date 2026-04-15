import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import type { ELearningLevel } from "../types/eLearning.types";
import { getTechnologyBySlug } from "../data/technologies";
import { getLevelQuestions } from "../data/questions";
import QAAccordion from "../components/QAAccordion";


const LEVELS: { key: ELearningLevel; label: string }[] = [
    { key: "basic", label: "Basic" },
    { key: "intermediate", label: "Intermediate" },
    { key: "advanced", label: "Advanced" }
];

export default function TechnologyPage() {
    const { techSlug } = useParams();
    const tech = techSlug ? getTechnologyBySlug(techSlug) : undefined;

    const [activeLevel, setActiveLevel] = useState<ELearningLevel>("basic");

    const questions = useMemo(() => {
        if (!techSlug) return [];
        return getLevelQuestions(techSlug, activeLevel);
    }, [techSlug, activeLevel]);

    if (!tech) {
        return (
            <main className="bg-bg">
                <div className="mx-auto max-w-6xl px-4 py-12">
                    <h1 className="text-2xl font-semibold text-text">Technology not found</h1>
                    <Link className="mt-6 inline-block text-sm underline text-text" to="/services/e-learning">
                        Back
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-bg">
            <section className="border-b border-border bg-surface">
                <div className="mx-auto max-w-6xl px-4 py-10">
                    <Link className="text-sm text-muted underline" to="/services/e-learning">
                        ← Back to E-Learning
                    </Link>

                    <h1 className="mt-3 text-3xl font-semibold text-text">{tech.label}</h1>

                    {/* Tabs */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {LEVELS.map((lvl) => {
                            const isActive = activeLevel === lvl.key;

                            return (
                                <button
                                    key={lvl.key}
                                    type="button"
                                    onClick={() => setActiveLevel(lvl.key)}
                                    className={[
                                        "rounded-full border px-4 py-2 text-sm font-medium transition",
                                        isActive
                                            ? "border-border bg-bg text-text"
                                            : "border-border bg-surface text-muted hover:shadow-md"
                                    ].join(" ")}
                                >
                                    {lvl.label}
                                    <span className="ml-2 text-xs text-muted">({tech.counts[lvl.key]})</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Q&A List */}
            <section className="bg-bg">
                <div className="mx-auto max-w-6xl px-4 py-10">
                    <QAAccordion items={questions} />
                </div>
            </section>

        </main>
    );
}
