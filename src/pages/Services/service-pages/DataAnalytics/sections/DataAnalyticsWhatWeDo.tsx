import type { DataAnalyticsServicesData } from "../data-analytics.data";

export default function DataAnalyticsWhatWeDo({
  data,
}: {
  data: DataAnalyticsServicesData;
}) {
  return (
    <section className="w-full bg-bg pt-4 pb-10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-5xl">
          <h2 className="text-4xl font-semibold tracking-tight text-brand sm:text-5xl">
            {data.title}
          </h2>

          <div className="mt-6 space-y-6">
            {data.intro.map((p) => (
              <p key={p} className="text-base italic leading-7 text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-12">
          {data.items.map((item) => (
            <article
              key={item.no}
              className="rounded-2xl border border-border bg-surface p-8 shadow-card"
            >
              <p className="text-5xl font-semibold tracking-tight text-brand">
                {item.no}
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-heading">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
