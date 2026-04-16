import type { AISolutionsToolsData } from "../ai-solutions.data";

export default function AISolutionsTools({ data }: { data: AISolutionsToolsData }) {
  return (
    <section className="w-full bg-bg py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{data.subtitle}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {data.tools.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-2 text-sm font-medium text-heading shadow-card transition hover:-translate-y-0.5 hover:border-[rgb(var(--color-accent-purple))] hover:text-[rgb(var(--color-accent-purple))]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
