import React from "react";
import ProcessTimeline from "../../../components/process/ProcessTimeline";


const OurProcessSection = () => {
  return (
    <section className="w-full bg-surface py-20">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            Our Process
          </p>

          <div className="mt-2 flex items-center justify-center">
            <h2 className="mt-3 text-3xl font-semibold text-heading sm:text-4xl">
              A transparent path{" "}
              <span className="text-[rgb(var(--color-accent-magenta))]">
                from concept to launch
              </span>
            </h2>
          </div>

          <p className="mt-3 text-base text-body">
            Clear stages keep stakeholders aligned and ensure delivery stays on track.
          </p>
        </div>

        <div className="mt-10">
          <ProcessTimeline />
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;
