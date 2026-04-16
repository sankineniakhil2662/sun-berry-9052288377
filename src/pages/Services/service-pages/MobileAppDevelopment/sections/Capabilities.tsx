import type { CapabilityItem } from "../data";
import { FeatureCard, ScrollReveal, SectionHeader } from "../../../../../components/branding";

type CapabilitiesData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: CapabilityItem[];
};

export default function Capabilities({ data }: { data: CapabilitiesData }) {
  return (
    <section id="capabilities" className="w-full bg-surface/40 py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow={data.eyebrow}
          title={<span className="whitespace-pre-line">{data.title}</span>}
          subtitle={data.subtitle}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {data.items.map((item, idx) => (
            <ScrollReveal key={`${item.title}-${item.subtitle}`} delay={idx * 0.04}>
              <FeatureCard
                icon={item.icon}
                title={`${item.title} ${item.subtitle}`}
                description={item.description}
                accent="purple-magenta"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
