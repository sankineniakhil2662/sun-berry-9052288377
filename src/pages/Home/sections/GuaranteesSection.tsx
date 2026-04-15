
import { Guarantees } from "../../../data/Guarantees";
import GuaranteesCard from "../../../components/Guarantees/GuaranteesCard";

const GuaranteesSection = () => {
  return (
    <section className="bg-bg py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            Our Promise
          </p>
          <div className="mt-2 flex items-center justify-center">
          <h2 className="mt-3 text-3xl font-semibold text-[rgb(var(--color-accent-magenta))] sm:text-4xl">
            Confident delivery, 
          </h2>
          <h2 className="mt-3 text-3xl font-semibold text-heading sm:text-4xl">
            every step of the way
          </h2>
          </div>
          <p className="mt-3 text-base text-body">
            We pair structured execution with thoughtful strategy so your teams stay
            focused on growth.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {Guarantees.map((g) => (
            <GuaranteesCard key={g.id} {...g} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
