import {
  Search,
  Target,
  Share2,
  FileText,
  Mail,
  LineChart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FeatureCard, ScrollReveal, SectionHeader } from "../../../../../components/branding";
import type { DigitalMarketingServicesData } from "../digitalmarketing.data";

const iconFor = (k: string): LucideIcon => {
  if (k === "seo") return Search;
  if (k === "ppc") return Target;
  if (k === "social") return Share2;
  if (k === "content") return FileText;
  if (k === "email") return Mail;
  return LineChart;
};

export default function DigitalMarketingServices({ data }: { data: DigitalMarketingServicesData }) {
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
                accent="purple-magenta"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
