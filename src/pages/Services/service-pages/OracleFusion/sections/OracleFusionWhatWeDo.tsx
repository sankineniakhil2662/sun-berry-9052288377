import { Rocket, LifeBuoy, PlugZap, DatabaseZap, Check } from "lucide-react";
import type { OracleFusionCoreServicesData } from "../oracle-fusion.data";

function ServiceIcon({ k }: { k: "impl" | "support" | "integrate" | "migrate" }) {
  const cls = "h-6 w-6 text-white";
  if (k === "impl") return <Rocket className={cls} />;
  if (k === "support") return <LifeBuoy className={cls} />;
  if (k === "integrate") return <PlugZap className={cls} />;
  return <DatabaseZap className={cls} />;
}

export default function OracleFusionWhatWeDo({ data }: { data: OracleFusionCoreServicesData }) {
  return (
    <section className="w-full bg-bg py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{data.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item) => (
            <article
              key={item.no}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-hover"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-cyan))] shadow-card">
                  <ServiceIcon k={item.iconKey} />
                </div>
                <span className="text-sm font-semibold tracking-widest text-muted">{item.no}</span>
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-heading">
                {item.title}
              </h3>

              <ul className="mt-4 space-y-2.5">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm leading-6 text-body">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-[rgb(var(--color-accent-purple))]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-cyan))] transition-transform duration-300 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
