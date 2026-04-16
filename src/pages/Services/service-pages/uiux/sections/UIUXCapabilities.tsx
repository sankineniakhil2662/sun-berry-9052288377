import { ScrollReveal, SectionHeader } from "../../../../../components/branding";
import { UIUX_CAPABILITIES } from "../uiux.data";

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

const UIUXCapabilities = () => {
  return (
    <section className="w-full bg-bg py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="What we do"
          title="UI/UX capabilities that scale with your product"
          subtitle="A strong experience is built with strategy, clarity, and consistency. Here's what we focus on."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {UIUX_CAPABILITIES.map((item, idx) => {
            const iconSrc = ICONS[item.icon];
            return (
              <ScrollReveal key={item.title} delay={idx * 0.05}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-hover">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-[rgb(var(--color-accent-purple))]/10 blur-3xl transition group-hover:bg-[rgb(var(--color-accent-purple))]/20"
                  />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-magenta))] shadow-card">
                    <img
                      src={iconSrc}
                      alt=""
                      className="h-7 w-7 object-contain"
                      draggable={false}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="relative mt-6 text-lg font-semibold tracking-tight text-heading">
                    {item.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-6 text-body">{item.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UIUXCapabilities;
