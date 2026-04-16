import {
  Smartphone,
  Monitor,
  Glasses,
  Users,
  Palette,
  LineChart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FeatureCard, ScrollReveal, SectionHeader } from "../../../../../components/branding";
import type { GamingServicesData } from "../gamingdevelopment.data";

const iconFor = (k: string): LucideIcon => {
  if (k === "mobile") return Smartphone;
  if (k === "console") return Monitor;
  if (k === "ar") return Glasses;
  if (k === "multiplayer") return Users;
  if (k === "art") return Palette;
  return LineChart;
};

export default function GamingServices({ data }: { data: GamingServicesData }) {
  return (
    <section id="services" className="w-full bg-bg py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <SectionHeader title={data.title} subtitle={data.subtitle} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, idx) => (
            <ScrollReveal key={item.no} delay={idx * 0.05}>
              <FeatureCard
                icon={iconFor(item.iconKey)}
                number={item.no}
                title={item.title}
                description={item.desc}
                accent="purple-cyan"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
