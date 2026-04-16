import { ScrollReveal, SectionHeader } from "../../../../../components/branding";
import type { InternshipProcessData } from "../InternshipPrograms.data";

export default function InternshipProcess({ data }: { data: InternshipProcessData }) {
  return (
    <section className="w-full bg-surface/40 py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <SectionHeader title={data.title} subtitle={data.subtitle} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {data.steps.map((step, idx) => (
            <ScrollReveal key={step.no} delay={idx * 0.05}>
              <div className="relative h-full rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-hover">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-border bg-bg font-bold text-brand">
                    {step.no}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-[rgb(var(--color-accent-purple))]/30 to-transparent" />
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-heading">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
