import { FeatureCard, ScrollReveal, SectionHeader, GradientCta } from "../../../../../components/branding";

type PartnerCard = {
  number: string;
  title: string;
  description: string;
};

type PreferredPartnerData = {
  eyebrow: string;
  title: string;
  description: string;
  cards: PartnerCard[];
};

export default function PreferredPartner({ data }: { data: PreferredPartnerData }) {
  return (
    <>
      <section className="w-full bg-surface/40 py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <SectionHeader
            eyebrow={data.eyebrow}
            title={<span className="whitespace-pre-line">{data.title}</span>}
            subtitle={data.description}
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.cards.map((c, idx) => (
              <ScrollReveal key={c.number} delay={idx * 0.05}>
                <FeatureCard
                  number={c.number}
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
        title="Ready to build your next website?"
        description="Partner with us to ship modern, scalable, high-performing sites — designed for growth."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "Get a Quote", href: "/quote" }}
      />
    </>
  );
}
