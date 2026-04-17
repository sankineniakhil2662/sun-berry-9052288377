import ProcessTimeline from "../../../components/process/ProcessTimeline";
import { SectionHeader } from "../../../components/branding";

const OurProcessSection = () => {
  return (
    <section className="w-full bg-surface/40 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Our Process"
          title={
            <>
              A transparent path{" "}
              <span className="bg-linear-to-r from-[rgb(var(--color-accent-purple))] via-[rgb(var(--color-accent-magenta))] to-[rgb(var(--color-accent-cyan))] bg-clip-text text-transparent">
                from concept to launch
              </span>
            </>
          }
          subtitle="Clear stages keep stakeholders aligned and ensure delivery stays on track."
          align="center"
          maxWidth="max-w-3xl"
        />

        <div className="mt-12">
          <ProcessTimeline />
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;