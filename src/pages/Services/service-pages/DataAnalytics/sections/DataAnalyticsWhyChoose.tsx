import {
  Search,
  CircleDollarSign,
  Waypoints,
  Monitor,
} from "lucide-react";
import type { DataAnalyticsWhyData } from "../data-analytics.data";

function Icon({ title }: { title: string }) {
  const cls = "h-9 w-9 text-brand";
  if (title === "Comprehensive") return <Search className={cls} />;
  if (title === "Cost-Effective") return <CircleDollarSign className={cls} />;
  if (title === "Flexible") return <Waypoints className={cls} />;
  return <Monitor className={cls} />;
}

export default function DataAnalyticsWhyChoose({
  data,
}: {
  data: DataAnalyticsWhyData;
}) {
  return (
    <section className="w-full bg-bg py-14">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-5xl">
          <h2 className="text-4xl font-semibold tracking-tight text-brand sm:text-5xl">
            {data.title}
          </h2>

          <div className="mt-5 space-y-3">
            {data.intro.map((p) => (
              <p key={p} className="text-base italic leading-7 text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Items */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-card"
            >
              <Icon title={item.title} />

              <h3 className="mt-4 text-xl font-semibold text-heading">
                {item.title}
              </h3>

              <div className="mt-3 space-y-2">
                {item.desc.map((d) => (
                  <p key={d} className="text-sm leading-6 text-muted">
                    {d}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
