import IndustryCard from "../../../components/IndustryCard";
import { INDUSTRIES } from "../../Industries/industries.data";

const IndustriesSection = () => {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            Industries
          </p>
          <div className="mt-2 flex items-center justify-center">
            <h2 className="mt-3 text-3xl font-semibold text-[rgb(var(--color-accent-magenta))] sm:text-4xl">
              Tailored expertise for{" "}
              <span className="text-heading">
                complex domains
              </span>
            </h2>
          </div>

          <p className="mt-3 text-base text-body">
            We understand the compliance, data, and operational needs of your sector.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((i) => (
            <IndustryCard
              key={i.key}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

