import { ScrollReveal, SectionHeader } from "../../../../../components/branding";
import type { InternshipTrackItem, InternshipTracksData } from "../InternshipPrograms.data";

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-bg px-3 py-1 text-xs font-semibold text-body">
      {label}
    </span>
  );
}

function TrackCard({ title, items }: InternshipTrackItem) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-hover">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[rgb(var(--color-accent-purple))]/10 blur-3xl transition group-hover:bg-[rgb(var(--color-accent-purple))]/20"
      />
      <p className="relative text-base font-semibold text-heading">{title}</p>
      <div className="relative mt-3 flex flex-wrap gap-2">
        {items.map((x) => (
          <Pill key={x} label={x} />
        ))}
      </div>
    </div>
  );
}

export default function InternshipTracks({ data }: { data: InternshipTracksData }) {
  return (
    <section id="tracks" className="w-full bg-bg py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <SectionHeader title={data.title} subtitle={data.subtitle} />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-10">
          <div>
            <ScrollReveal>
              <h3 className="text-2xl font-semibold tracking-tight text-heading">{data.techTitle}</h3>
            </ScrollReveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {data.techTracks.map((t, idx) => (
                <ScrollReveal key={t.title} delay={idx * 0.04}>
                  <TrackCard title={t.title} items={t.items} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <ScrollReveal>
              <h3 className="text-2xl font-semibold tracking-tight text-heading">{data.businessTitle}</h3>
            </ScrollReveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {data.businessTracks.map((t, idx) => (
                <ScrollReveal key={t.title} delay={idx * 0.04}>
                  <TrackCard title={t.title} items={t.items} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
