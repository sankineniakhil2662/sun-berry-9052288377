import type { AISolutionsCtaData } from "../ai-solutions.data";

export default function AISolutionsCta({ data }: { data: AISolutionsCtaData }) {
  return (
    <section className="w-full bg-bg py-20">
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[rgb(var(--color-accent-purple))] via-[rgb(var(--color-accent-magenta))] to-[rgb(var(--color-accent-purple))] p-10 text-center shadow-card sm:p-14">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[rgb(var(--color-accent-cyan))]/30 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              {data.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
              {data.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={data.primary.href}
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-[rgb(var(--color-accent-purple))] shadow-card transition hover:shadow-hover"
              >
                {data.primary.label}
              </a>
              <a
                href={data.secondary.href}
                className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/20"
              >
                {data.secondary.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
