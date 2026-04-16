import type { DataAnalyticsServicesData } from "../data-analytics.data";
import { FeatureCard, ScrollReveal, SectionHeader } from "../../../../../components/branding";

export default function DataAnalyticsWhatWeDo({ data }: { data: DataAnalyticsServicesData }) {
  return (
    <section id="what-we-do" className="w-full bg-surface/40 py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <SectionHeader
          title={data.title}
          subtitle={data.intro.join(" ")}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item, idx) => (
            <ScrollReveal key={item.no} delay={idx * 0.05}>
              <FeatureCard
                number={item.no}
                title={item.title}
                description={item.desc}
                accent="purple-magenta"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
