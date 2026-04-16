import {
  Hammer,
  Rocket,
  Users,
  Award,
  Briefcase,
} from "lucide-react";
import type { AISolutionsCurriculumData } from "../ai-solutions.data";

function HighlightIcon({ k }: { k: string }) {
  const cls = "h-5 w-5 text-[rgb(var(--color-accent-magenta))]";
  if (k === "hands-on") return <Hammer className={cls} />;
  if (k === "live") return <Rocket className={cls} />;
  if (k === "mentor") return <Users className={cls} />;
  if (k === "cert") return <Award className={cls} />;
  return <Briefcase className={cls} />;
}

export default function AISolutionsCurriculum({ data }: { data: AISolutionsCurriculumData }) {
  return (
    <section id="curriculum" className="w-full bg-surface/40 py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--color-accent-magenta))]">
            {data.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{data.subtitle}</p>
        </div>

        {/* Curriculum modules */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.modules.map((m, idx) => (
            <div
              key={m}
              className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-4 shadow-card transition hover:-translate-y-0.5 hover:border-[rgb(var(--color-accent-purple))] hover:shadow-hover"
            >
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-[rgb(var(--color-accent-purple))]/10 to-[rgb(var(--color-accent-magenta))]/10 text-xs font-bold text-brand">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-heading">{m}</span>
            </div>
          ))}
        </div>

        {/* Program highlights */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold tracking-tight text-heading">Program Highlights</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {data.highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-border bg-surface p-5 shadow-card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--color-accent-magenta))]/10">
                  <HighlightIcon k={h.iconKey} />
                </div>
                <h4 className="mt-4 text-sm font-semibold text-heading">{h.title}</h4>
                <p className="mt-1 text-sm leading-6 text-muted">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
