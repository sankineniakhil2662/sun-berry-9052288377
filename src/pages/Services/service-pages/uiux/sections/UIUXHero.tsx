import React from "react";
import { UIUX_HERO } from "../uiux.data";
import heroBg from "../../../../../assets/services/uiux/uiux-hero.png";

const UIUXHero = () => {
  return (
    <section
      className="relative overflow-hidden bg-bg"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "min(660px, 55vw)", // ✅ KEY FIX (no zoom, crisp)
      }}
    >
      {/* ✅ Blend layer (this creates the exact reference look) */}
      <div className="pointer-events-none absolute inset-0">
        {/* Strong left fade so text is always readable */}
        <div className="absolute inset-0 bg-linear-to-r from-[rgb(var(--color-bg))] via-[rgb(var(--color-bg)/0.92)] to-transparent" />

        {/* Soft ambient color (very subtle, not blurry) */}
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[rgb(var(--color-accent-cyan)/0.08)] blur-3xl" />
        <div className="absolute left-40 top-20 h-72 w-72 rounded-full bg-[rgb(var(--color-accent-purple)/0.06)] blur-3xl" />

        {/* Bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[rgb(var(--color-bg))] to-transparent" />
      </div>

      <div className="mx-auto max-w-350 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* LEFT: TEXT */}
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-muted">
              {UIUX_HERO.eyebrow}
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-heading sm:text-5xl">
              Design experiences{" "}
              <span className="text-brand">people love</span> to use.
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-body">
              {UIUX_HERO.subtitle}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              {UIUX_HERO.body}
            </p>
          </div>

          {/* RIGHT spacer – keeps layout identical to reference */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default UIUXHero;
