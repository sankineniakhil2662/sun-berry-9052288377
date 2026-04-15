import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { TECHNOLOGIES } from "../data/technologies";

type Tech = (typeof TECHNOLOGIES)[number];

type Group = {
  title: string;
  items: Tech[];
};

function groupByCategory(list: Tech[]) {
  const map = new Map<string, Group>();

  for (const tech of list) {
    const key = tech.categoryKey;
    const existing = map.get(key);

    if (existing) {
      existing.items.push(tech);
      continue;
    }

    map.set(key, { title: tech.categoryLabel, items: [tech] });
  }

  return Array.from(map.values());
}

export default function TechnologyGrid() {
  const groups = useMemo(() => groupByCategory(TECHNOLOGIES), []);

  // Flatten for global step numbering (like the screenshot 1..N)
  const flat = useMemo(() => groups.flatMap((g) => g.items), [groups]);
  const indexMap = useMemo(() => {
    const m = new Map<string, number>();
    flat.forEach((t, i) => m.set(t.slug, i + 1));
    return m;
  }, [flat]);

  return (
    <section className="relative overflow-hidden bg-[#062a64]">
      {/* Background (gradient + dots) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-90" />
        <div className="techgrid-dots absolute inset-0 opacity-60" />
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">
            <span className="h-2 w-2 rounded-full bg-[rgb(var(--color-accent-purple))]" />
            E-Learning
          </span>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Explore{" "}
            <span className="text-[rgb(var(--color-accent-magenta))]">
              Technologies
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            Pick a track and deep-dive into concepts, roadmaps, and practice.
            Built for structured learning and faster growth.
          </p>
        </div>

        {/* Groups */}
        <div className="mt-12 space-y-12">
          {groups.map((group) => (
            <div key={group.title}>
              {/* Category title */}
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg font-semibold text-white">
                  {group.title}
                </h2>

                <div className="hidden sm:block h-px flex-1 bg-white/10" />
              </div>

              {/* Cards */}
              <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {group.items.map((t) => {
                  const stepNo = indexMap.get(t.slug) ?? 1;
                  const firstLetter = t.label.charAt(0).toUpperCase();

                  return (
                    <Link
                      key={t.slug}
                      to={`/services/e-learning/${t.slug}`}
                      className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card transition hover:bg-white/10 hover:shadow-hover"
                    >
                      {/* Step number badge */}
                      <span className="absolute -top-3 left-6 inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-white/10 bg-[rgb(var(--color-accent-purple))] px-2 text-xs font-bold text-white shadow-card">
                        {stepNo}
                      </span>

                      {/* Icon block */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white">
                          <span className="text-xl font-extrabold">
                            {firstLetter}
                          </span>
                        </div>

                        <ArrowRight className="h-5 w-5 text-white/60 transition group-hover:translate-x-0.5 group-hover:text-white" />
                      </div>

                      {/* Text */}
                      <div className="mt-5">
                        <p className="text-base font-semibold text-white">
                          {t.label}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-white/70">
                          Learn fundamentals → build projects → become job-ready.
                        </p>

                        {/* Tiny accent bar (like screenshot underline vibe) */}
                        <div className="mt-5 h-1.5 w-full rounded-full bg-white/10">
                          <div className="h-1.5 w-2/3 rounded-full bg-[rgb(var(--color-accent-magenta))] transition-all group-hover:w-full" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Local CSS for dotted grid (clean + consistent) */}
      <style>{`
        .techgrid-dots {
          background-image: radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px);
          background-size: 22px 22px;
          background-position: 0 0;
        }
      `}</style>
    </section>
  );
}