import { Sparkles } from "lucide-react";
import { ScrollReveal, SectionHeader } from "../../../../../components/branding";
import { UIUX_BENEFITS } from "../uiux.data";

const UIUXBenefits = () => {
  return (
    <section className="w-full bg-surface/40 py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Benefits"
          title={UIUX_BENEFITS.title}
          subtitle={UIUX_BENEFITS.desc}
          align="center"
          maxWidth="max-w-4xl"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {UIUX_BENEFITS.items.map((b, idx) => (
            <ScrollReveal key={b.title} delay={idx * 0.04}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-hover">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-[rgb(var(--color-accent-purple))]/10 blur-3xl transition group-hover:bg-[rgb(var(--color-accent-purple))]/20"
                />
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-magenta))] text-white shadow-card">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="relative mt-5 text-lg font-semibold tracking-tight text-heading">
                  {b.title}
                </h3>
                <p className="relative mt-2 text-sm leading-6 text-body">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UIUXBenefits;
