import React from "react";
import { UIUX_ADVANTAGES } from "../uiux.data";

const UIUXAdvantages = () => {
  return (
    <section className=" bg-[#062a64] text-white">
      <div className="mx-auto max-w-350 px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            EXPERIENCE
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            {UIUX_ADVANTAGES.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/75">
            {UIUX_ADVANTAGES.desc}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {UIUX_ADVANTAGES.items.map((a) => (
            <div
              key={a.title}
              className="rounded-(--radius-card) border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/8"
            >
              <div className="h-10 w-10 rounded-xl bg-[rgb(var(--color-accent-cyan)/0.20)]" />
              <h3 className="mt-4 text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UIUXAdvantages;
