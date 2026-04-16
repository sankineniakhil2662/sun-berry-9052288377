import { Check } from "lucide-react";
import { ScrollReveal, SectionHeader } from "../../../../../components/branding";
import type { GamingOverviewData } from "../gamingdevelopment.data";

export default function GamingOverview({ data }: { data: GamingOverviewData }) {
  return (
    <section className="w-full bg-surface/40 py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <SectionHeader title={data.title} />
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-base leading-7 text-body sm:text-lg">{data.description}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h3 className="mt-8 text-xl font-semibold tracking-tight text-heading">
              {data.whyTitle}
            </h3>
            <p className="mt-3 text-base leading-7 text-body">{data.whyDescription}</p>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="left" delay={0.15}>
          <div className="relative h-full rounded-3xl border border-border bg-surface p-8 shadow-card">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-[rgb(var(--color-accent-purple))]/10 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[rgb(var(--color-accent-cyan))]/10 blur-3xl"
            />
            <h3 className="relative text-lg font-semibold text-heading">What sets us apart</h3>
            <ul className="relative mt-5 space-y-3.5">
              {data.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gradient-to-br from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-cyan))] text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-6 text-body sm:text-base">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
