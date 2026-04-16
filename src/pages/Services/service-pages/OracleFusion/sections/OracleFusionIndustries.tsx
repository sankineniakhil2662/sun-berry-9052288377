import {
  Cpu,
  Factory,
  ShoppingBag,
  HeartPulse,
  Landmark,
  Truck,
} from "lucide-react";
import type { OracleFusionIndustriesData } from "../oracle-fusion.data";

function IndustryIcon({ k }: { k: string }) {
  const cls = "h-7 w-7 text-[rgb(var(--color-accent-purple))]";
  if (k === "it") return <Cpu className={cls} />;
  if (k === "mfg") return <Factory className={cls} />;
  if (k === "retail") return <ShoppingBag className={cls} />;
  if (k === "health") return <HeartPulse className={cls} />;
  if (k === "finance") return <Landmark className={cls} />;
  return <Truck className={cls} />;
}

export default function OracleFusionIndustries({ data }: { data: OracleFusionIndustriesData }) {
  return (
    <section className="w-full bg-bg py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{data.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {data.items.map((it) => (
            <div
              key={it.label}
              className="group flex flex-col items-center rounded-2xl border border-border bg-surface p-6 text-center shadow-card transition hover:-translate-y-0.5 hover:border-[rgb(var(--color-accent-purple))] hover:shadow-hover"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[rgb(var(--color-accent-purple))]/10 transition group-hover:bg-[rgb(var(--color-accent-purple))]/15">
                <IndustryIcon k={it.iconKey} />
              </div>
              <p className="mt-4 text-sm font-semibold text-heading">{it.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
