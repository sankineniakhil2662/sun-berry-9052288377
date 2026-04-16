import { Users, Boxes, Landmark, Megaphone, Dot } from "lucide-react";
import type { OracleFusionModulesData } from "../oracle-fusion.data";

function ModuleIcon({ k }: { k: "hcm" | "scm" | "erp" | "cx" }) {
  const cls = "h-5 w-5 text-white";
  if (k === "hcm") return <Users className={cls} />;
  if (k === "scm") return <Boxes className={cls} />;
  if (k === "erp") return <Landmark className={cls} />;
  return <Megaphone className={cls} />;
}

export default function OracleFusionModules({ data }: { data: OracleFusionModulesData }) {
  return (
    <section id="modules" className="w-full bg-surface/40 py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{data.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((m) => (
            <article
              key={m.code}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-hover"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-cyan))]">
                  <ModuleIcon k={m.iconKey} />
                </div>
                <span className="rounded-md border border-border bg-bg px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted">
                  {m.code}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-heading">{m.title}</h3>

              <div className="mt-4 h-px bg-border" />

              <ul className="mt-4 space-y-2">
                {m.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-1.5 text-sm leading-6 text-body">
                    <Dot className="mt-0.5 h-4 w-4 flex-none text-[rgb(var(--color-accent-purple))]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
