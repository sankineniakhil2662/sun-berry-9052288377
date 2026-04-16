import { Search, CircleDollarSign, Waypoints, Monitor } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { DataAnalyticsWhyData } from "../data-analytics.data";
import { ScrollReveal, SectionHeader } from "../../../../../components/branding";

const iconFor = (title: string): LucideIcon => {
  if (title === "Comprehensive") return Search;
  if (title === "Cost-Effective") return CircleDollarSign;
  if (title === "Flexible") return Waypoints;
  return Monitor;
};

export default function DataAnalyticsWhyChoose({ data }: { data: DataAnalyticsWhyData }) {
  return (
    <section className="w-full bg-bg py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <SectionHeader title={data.title} subtitle={data.intro.join(" ")} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item, idx) => {
            const Icon = iconFor(item.title);
            return (
              <ScrollReveal key={item.title} delay={idx * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-hover">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgb(var(--color-accent-purple))]/10">
                    <Icon className="h-6 w-6 text-[rgb(var(--color-accent-purple))]" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-heading">{item.title}</h3>
                  <div className="mt-3 space-y-2">
                    {item.desc.map((d) => (
                      <p key={d} className="text-sm leading-6 text-muted">
                        {d}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
