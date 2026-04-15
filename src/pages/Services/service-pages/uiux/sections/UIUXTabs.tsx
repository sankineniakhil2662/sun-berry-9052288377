import React, { useMemo, useState } from "react";
import { UIUX_TABS } from "../uiux.data";

const UIUXTabs = () => {
  const [active, setActive] = useState(UIUX_TABS[0].key);

  const current = useMemo(
    () => UIUX_TABS.find((t) => t.key === active) ?? UIUX_TABS[0],
    [active]
  );

  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-350 px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            DEEP DIVE
          </p>
          <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
            Explore our UI/UX strengths
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted">
            Switch topics without clutter—same layout pattern as the reference design.
          </p>
        </div>

        {/* Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {UIUX_TABS.map((t) => {
            const isActive = t.key === active;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActive(t.key)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${isActive
                  ? "border-brand bg-brand text-white shadow-hover"
                  : "border-border bg-surface text-body hover:border-brand hover:text-brand"
                  }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-heading">{current.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{current.desc}</p>

            <div className="mt-6 space-y-3">
              {current.points.map((p, idx) => (
                <div
                  key={p}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-4 shadow-card"
                >
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[rgb(var(--color-brand)/0.12)] text-sm font-semibold text-brand">
                    {idx + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-body">{p}</p>
                </div>
              ))}
            </div>
          </div>

            <div className="relative h-100 w-full overflow-hidden rounded-2xl border border-border bg-bg">
              <img
                key={current.key}
                src={current.image?.src}
                alt={current.image?.alt ?? current.title}
                className="h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>

        </div>
      </div>
    </section>
  );
};

export default UIUXTabs;
