import { Building2, Target } from "lucide-react";
import type { OracleFusionOverviewData } from "../oracle-fusion.data";

export default function OracleFusionOverview({ data }: { data: OracleFusionOverviewData }) {
  return (
    <section className="w-full bg-surface/40 py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:gap-10 lg:px-10">
        <article className="rounded-3xl border border-border bg-surface p-8 shadow-card sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgb(var(--color-accent-purple))]/10">
            <Building2 className="h-6 w-6 text-[rgb(var(--color-accent-purple))]" />
          </div>
          <h2 className="mt-6 text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
            {data.overviewTitle}
          </h2>
          <div className="mt-5 space-y-3">
            {data.overview.map((p) => (
              <p key={p} className="text-base leading-7 text-body">
                {p}
              </p>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-border bg-gradient-to-br from-[rgb(var(--color-accent-purple))]/8 to-[rgb(var(--color-accent-cyan))]/8 p-8 shadow-card sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgb(var(--color-accent-cyan))]/15">
            <Target className="h-6 w-6 text-[rgb(var(--color-accent-cyan))]" />
          </div>
          <h2 className="mt-6 text-2xl font-semibold tracking-tight text-heading sm:text-3xl">
            {data.missionTitle}
          </h2>
          <div className="mt-5 space-y-3">
            {data.mission.map((p) => (
              <p key={p} className="text-base leading-7 text-body">
                {p}
              </p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
