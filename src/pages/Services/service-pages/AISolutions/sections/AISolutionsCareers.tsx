import { ArrowUpRight } from "lucide-react";
import type { AISolutionsCareersData } from "../ai-solutions.data";

export default function AISolutionsCareers({ data }: { data: AISolutionsCareersData }) {
  return (
    <section className="w-full bg-surface/40 py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{data.subtitle}</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.roles.map((r) => (
            <article
              key={r.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-hover"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tight text-heading">{r.title}</h3>
                <ArrowUpRight className="h-4 w-4 flex-none text-muted transition group-hover:text-[rgb(var(--color-accent-purple))]" />
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">{r.desc}</p>
              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-magenta))] transition-transform duration-300 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
