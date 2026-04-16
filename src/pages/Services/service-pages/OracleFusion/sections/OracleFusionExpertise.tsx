import { Code2, Workflow, Check } from "lucide-react";
import type { OracleFusionExpertiseData } from "../oracle-fusion.data";

export default function OracleFusionExpertise({ data }: { data: OracleFusionExpertiseData }) {
  return (
    <section className="w-full bg-bg py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{data.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Technical */}
          <article className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-card">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgb(var(--color-accent-purple))]/10">
                <Code2 className="h-6 w-6 text-[rgb(var(--color-accent-purple))]" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-heading">
                {data.technical.title}
              </h3>
            </div>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {data.technical.items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-2.5 rounded-lg border border-border bg-bg px-3 py-2.5 text-sm text-body"
                >
                  <Check className="mt-0.5 h-4 w-4 flex-none text-[rgb(var(--color-accent-purple))]" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Functional */}
          <article className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-card">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgb(var(--color-accent-cyan))]/15">
                <Workflow className="h-6 w-6 text-[rgb(var(--color-accent-cyan))]" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-heading">
                {data.functional.title}
              </h3>
            </div>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {data.functional.items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-2.5 rounded-lg border border-border bg-bg px-3 py-2.5 text-sm text-body"
                >
                  <Check className="mt-0.5 h-4 w-4 flex-none text-[rgb(var(--color-accent-cyan))]" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
