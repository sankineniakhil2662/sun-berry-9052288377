import ProcessTimeline from "../../../components/process/ProcessTimeline";
import { ScrollReveal, SectionHeader } from "../../../components/branding";

const OurProcessSection = () => {
  return (
    <section className="w-full bg-surface/40 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Our Process"
          title={
            <>
              A transparent path{" "}
              <span className="bg-gradient-to-r from-[rgb(var(--color-accent-purple))] via-[rgb(var(--color-accent-magenta))] to-[rgb(var(--color-accent-cyan))] bg-clip-text text-transparent">
                from concept to launch
              </span>
            </>
          }
          subtitle="Clear stages keep stakeholders aligned and ensure delivery stays on track."
          align="center"
          maxWidth="max-w-3xl"
        />

        <ScrollReveal delay={0.1}>
          <div className="mt-12">
            <ProcessTimeline />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default OurProcessSection;
