import React from "react";
import { UIUX_CAPABILITIES } from "../uiux.data";

// ✅ Import your PNG icons (based on your folder screenshot)
import userCentric from "../../../../../assets/services/uiux/UserCentricimage.png";
import intuitiveDesign from "../../../../../assets/services/uiux/IntuitiveDesign.png";
import flawlessPerformance from "../../../../../assets/services/uiux/FlawlessPerformance.png";
import researchTesting from "../../../../../assets/services/uiux/Research&UsabilityTesting.png";
import designSystem from "../../../../../assets/services/uiux/DesignSystemImplementation.png";
import responsiveDesign from "../../../../../assets/services/uiux/ResponsiveDesign.png";

const ICONS: Record<string, string> = {
  strategy: userCentric,
  design: intuitiveDesign,
  performance: flawlessPerformance,
  testing: researchTesting,
  system: designSystem,
  responsive: responsiveDesign,
};

const ICON_TILE: Record<string, string> = {
  strategy: "bg-[rgb(255,120,100)/0.18] text-[rgb(255,120,100)]",
  design: "bg-[rgb(var(--color-accent-cyan))/0.18] text-[rgb(var(--color-accent-cyan))]",
  performance: "bg-[rgb(59,130,246)/0.18] text-[rgb(59,130,246)]",
  testing: "bg-[rgb(255,120,100)/0.18] text-[rgb(255,120,100)]",
  system: "bg-[rgb(var(--color-accent-cyan))/0.18] text-[rgb(var(--color-accent-cyan))]",
  responsive: "bg-[rgb(59,130,246)/0.18] text-[rgb(59,130,246)]",
};

const UIUXCapabilities = () => {
  return (
    <section className="relative bg-bg">
      {/* Subtle section wash (like your screenshot background) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-8 h-80 w-80 rounded-full bg-[rgb(var(--color-accent-cyan)/0.06)] blur-3xl" />
        <div className="absolute right-10 -top-10 h-80 w-80 rounded-full bg-[rgb(var(--color-accent-purple)/0.05)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-350 px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            WHAT WE DO
          </p>
          <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
            UI/UX capabilities that scale with your product
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted">
            A strong experience is built with strategy, clarity, and consistency. Here’s what we focus on.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {UIUX_CAPABILITIES.map((item) => {
            const iconSrc = ICONS[item.icon];
            const tileClass = ICON_TILE[item.icon] ?? "bg-[rgb(var(--color-brand))/0.12]";

            return (
              <div
                key={item.title}
                className="
                  rounded-(--radius-card)
                  border border-border
                  bg-surface
                  px-8 py-10
                  shadow-card
                  transition-all
                  hover:-translate-y-1
                  hover:shadow-hover
                "
              >
                {/* Icon tile (blended) */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${tileClass}`}>
                    <img
                      src={iconSrc}
                      alt={item.title}
                      className="h-100 w-100 object-contain"
                      draggable={false}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-center text-xl font-semibold text-heading">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mx-auto mt-4 max-w-[34ch] text-center text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UIUXCapabilities;
