import IndustryCard from "../../../components/IndustryCard";
import { INDUSTRIES } from "../../Industries/industries.data";
import { ScrollReveal, SectionHeader } from "../../../components/branding";

const IndustriesSection = () => {
  return (
    <section className="bg-bg py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Industries"
          title={
            <>
              Tailored expertise for{" "}
              <span className="bg-gradient-to-r from-[rgb(var(--color-accent-purple))] via-[rgb(var(--color-accent-magenta))] to-[rgb(var(--color-accent-cyan))] bg-clip-text text-transparent">
                complex domains
              </span>
            </>
          }
          subtitle="We understand the compliance, data, and operational needs of your sector."
          align="center"
          maxWidth="max-w-3xl"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((i, idx) => (
            <ScrollReveal key={i.key} delay={idx * 0.04}>
              <IndustryCard
                title={i.title}
                label={i.label}
                description={i.description}
                features={i.features}
                moreCount={i.moreCount}
                ctaLabel={i.ctaLabel}
                href={i.href}
                iconSrc={i.iconSrc}
                accent={i.accent}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

