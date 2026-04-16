import {
  Layers,
  Users,
  Workflow,
  CircleDollarSign,
  Waypoints,
  Handshake,
} from "lucide-react";
import type { OracleFusionWhyData } from "../oracle-fusion.data";

function WhyIcon({ k }: { k: string }) {
  const cls = "h-6 w-6 text-[rgb(var(--color-accent-purple))]";
  if (k === "end2end") return <Layers className={cls} />;
  if (k === "team") return <Users className={cls} />;
  if (k === "method") return <Workflow className={cls} />;
  if (k === "cost") return <CircleDollarSign className={cls} />;
  if (k === "flexible") return <Waypoints className={cls} />;
  return <Handshake className={cls} />;
}

export default function OracleFusionWhyChoose({ data }: { data: OracleFusionWhyData }) {
  return (
    <section className="w-full bg-surface/40 py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{data.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
