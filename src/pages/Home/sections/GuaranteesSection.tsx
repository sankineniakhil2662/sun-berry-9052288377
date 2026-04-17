import { Guarantees } from "../../../data/Guarantees";
import GuaranteesCard from "../../../components/Guarantees/GuaranteesCard";
import { ScrollReveal, SectionHeader } from "../../../components/branding";

const GuaranteesSection = () => {
  return (
    <section className="bg-bg py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Our Promise"
          title={
            <>
              Confident delivery,{" "}
              <span className="bg-linear-to-r from-[rgb(var(--color-accent-purple))] via-[rgb(var(--color-accent-magenta))] to-[rgb(var(--color-accent-cyan))] bg-clip-text text-transparent">
                every step of the way
              </span>
            </>
          }
          subtitle="We pair structured execution with thoughtful strategy so your teams stay focused on growth."
          align="center"
          maxWidth="max-w-3xl"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Guarantees.map((g, idx) => (
            <ScrollReveal key={g.id} delay={idx * 0.05}>
              <GuaranteesCard {...g} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
