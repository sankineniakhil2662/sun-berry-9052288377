import type { AISolutionsAboutData } from "../ai-solutions.data";

export default function AISolutionsAbout({ data }: { data: AISolutionsAboutData }) {
  return (
    <section className="w-full bg-surface/40 py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-5 lg:gap-16 lg:px-10">
        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--color-accent-magenta))]">
            {data.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
            {data.title}
          </h2>
        </div>

        <div className="lg:col-span-3">
          <p className="text-base leading-8 text-body sm:text-lg">{data.body}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {data.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-surface p-5 shadow-card"
              >
                <p className="bg-gradient-to-r from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-magenta))] bg-clip-text text-xl font-bold tracking-tight text-transparent">
                  {s.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
