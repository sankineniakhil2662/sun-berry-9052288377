import type { DataAnalyticsCtaData } from "../data-analytics.data";

export default function DataAnalyticsCta({
  data,
}: {
  data: DataAnalyticsCtaData;
}) {
  return (
    <section className="w-full bg-bg py-16">
      <div className="mx-auto w-full max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          {data.title}
        </h2>

        <p className="mt-6 text-base italic leading-7 text-muted">
          {data.description}
        </p>

        <div className="mt-10">
          <a
            href={data.button.href}
            className="inline-flex items-center justify-center rounded-xl bg-brand px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-card hover:shadow-hover"
          >
            {data.button.label}
          </a>
        </div>
      </div>
    </section>
  );
}
