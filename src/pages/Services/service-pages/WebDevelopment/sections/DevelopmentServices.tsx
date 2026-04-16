import type { LucideIcon } from "lucide-react";
import { FeatureCard, ScrollReveal, SectionHeader } from "../../../../../components/branding";

type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ServicesData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
  imageSrc: string;
};

export default function DevelopmentServices({ data }: { data: ServicesData }) {
  return (
    <section id="services" className="w-full bg-surface/40 py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow={data.eyebrow}
          title={<span className="whitespace-pre-line">{data.title}</span>}
          subtitle={data.subtitle}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 0.05}>
              <FeatureCard
                icon={item.icon}
                title={item.title}
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
