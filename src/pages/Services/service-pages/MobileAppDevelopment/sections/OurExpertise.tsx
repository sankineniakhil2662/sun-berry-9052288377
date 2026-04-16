import type { ExpertiseCard } from "../data";
import {
  FeatureCard,
  GradientCta,
  ScrollReveal,
  SectionHeader,
} from "../../../../../components/branding";

type ExpertiseData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cards: ExpertiseCard[];
};

export default function OurExpertise({ data }: { data: ExpertiseData }) {
  return (
    <>
      <section className="w-full bg-bg py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <SectionHeader
            eyebrow={data.eyebrow}
            title={<span className="whitespace-pre-line">{data.title}</span>}
            subtitle={data.subtitle}
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.cards.map((c, idx) => (
              <ScrollReveal key={c.title} delay={idx * 0.05}>
                <FeatureCard
                  icon={c.icon}
                  title={c.title}
                  description={c.description}
                  accent="purple-magenta"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GradientCta
        title="Build your next mobile app with us."
        description="Native, cross-platform, or hybrid — our team delivers polished, production-grade apps at every scale."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "Get a Quote", href: "/quote" }}
      />
    </>
  );
}
