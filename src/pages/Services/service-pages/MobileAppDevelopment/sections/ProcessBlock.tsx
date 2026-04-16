import { ScrollReveal, SectionHeader } from "../../../../../components/branding";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type ProcessData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: ProcessStep[];
};

export default function ProcessBlock({ data }: { data: ProcessData }) {
  return (
    <section className="w-full bg-bg py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow={data.eyebrow}
          title={<span className="whitespace-pre-line">{data.title}</span>}
          subtitle={data.subtitle}
        />

        <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.steps.map((step, idx) => (
            <ScrollReveal key={step.number} delay={idx * 0.05}>
              <div className="relative h-full rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-hover">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-border bg-bg font-bold text-brand">
                    {step.number}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-[rgb(var(--color-accent-purple))]/30 to-transparent" />
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight text-heading">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
