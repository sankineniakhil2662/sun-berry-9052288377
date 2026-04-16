import { Layers, Wand2, Factory, Gauge, LifeBuoy } from "lucide-react";
import type { AISolutionsWhyData } from "../ai-solutions.data";

function WhyIcon({ k }: { k: string }) {
  const cls = "h-6 w-6 text-[rgb(var(--color-accent-purple))]";
  if (k === "end-to-end") return <Layers className={cls} />;
  if (k === "custom") return <Wand2 className={cls} />;
  if (k === "industry") return <Factory className={cls} />;
  if (k === "scalable") return <Gauge className={cls} />;
  return <LifeBuoy className={cls} />;
}

export default function AISolutionsWhyChoose({ data }: { data: AISolutionsWhyData }) {
  return (
    <section className="w-full bg-bg py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{data.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {data.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-hover"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgb(var(--color-accent-purple))]/10">
                <WhyIcon k={item.iconKey} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-heading">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
