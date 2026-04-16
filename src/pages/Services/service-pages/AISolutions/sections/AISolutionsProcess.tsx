import type { AISolutionsProcessData } from "../ai-solutions.data";

export default function AISolutionsProcess({ data }: { data: AISolutionsProcessData }) {
  return (
    <section className="w-full bg-surface/40 py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{data.subtitle}</p>
        </div>

        <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.steps.map((step, idx) => (
            <div
              key={step.no}
              className="relative rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-hover"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-border bg-bg font-bold text-brand">
                  {step.no}
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-[rgb(var(--color-accent-purple))]/30 to-transparent" />
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-heading">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.desc}</p>

              {idx === data.steps.length - 1 ? null : (
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-3 top-9 hidden h-0.5 w-6 bg-[rgb(var(--color-accent-purple))]/30 lg:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
