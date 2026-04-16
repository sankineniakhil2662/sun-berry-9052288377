import { Sparkles } from "lucide-react";
import { ScrollReveal, SectionHeader } from "../../../../../components/branding";
import type { InternshipBenefitsData } from "../InternshipPrograms.data";

export default function InternshipBenefits({ data }: { data: InternshipBenefitsData }) {
  return (
    <section className="w-full bg-bg py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <SectionHeader title={data.title} subtitle={data.subtitle} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-hover">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-[rgb(var(--color-accent-purple))]/10 blur-3xl transition group-hover:bg-[rgb(var(--color-accent-purple))]/20"
                />
                <div className="relative flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-cyan))] text-white shadow-card">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-heading">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-body">{item.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
