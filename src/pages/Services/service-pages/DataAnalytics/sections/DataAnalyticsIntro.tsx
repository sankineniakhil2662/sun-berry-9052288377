import type { DataAnalyticsIntroData } from "../data-analytics.data";

export default function DataAnalyticsIntro({
  data,
}: {
  data: DataAnalyticsIntroData;
}) {
  return (
    <section className="w-full bg-bg pt-16 pb-8">

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        {/* Top block */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-tight text-brand ">
            {data.heroTitle}
          </h1>

          <p className="mt-6 text-md leading-8 text-muted">
            {data.heroSubtitle}
          </p>
        </div>

      </div>
    </section>
  );
}
