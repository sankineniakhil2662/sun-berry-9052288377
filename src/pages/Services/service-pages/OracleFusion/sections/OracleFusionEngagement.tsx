import { UserRound, FolderKanban, Zap, Shield } from "lucide-react";
import type { OracleFusionEngagementData } from "../oracle-fusion.data";

function EngagementIcon({ k }: { k: string }) {
  const cls = "h-6 w-6 text-white";
  if (k === "dedicated") return <UserRound className={cls} />;
  if (k === "project") return <FolderKanban className={cls} />;
  if (k === "ondemand") return <Zap className={cls} />;
  return <Shield className={cls} />;
}

export default function OracleFusionEngagement({ data }: { data: OracleFusionEngagementData }) {
  return (
    <section className="w-full bg-surface/40 py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{data.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((it) => (
            <article
              key={it.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-cyan))]">
                <EngagementIcon k={it.iconKey} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-heading">{it.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{it.desc}</p>

              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-cyan))] transition-transform duration-300 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
