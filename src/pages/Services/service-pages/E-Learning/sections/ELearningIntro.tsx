
import type { ELearningIntroData } from "../e-learning.data";
import elearningpic from "../../../../../assets/services/e-learning/elearningpic.jpeg"

export default function ELearningIntro({ data }: { data: ELearningIntroData }) {
  return (
    <section className="w-full bg-bg py-20">
      <div className="mx-auto w-full max-w-7xl px-4  sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left: Image (background-style like screenshot) */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
            <img
              src={elearningpic}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: Content panel */}
          <div className="rounded-2xl   ">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-lg font-semibold uppercase tracking-widest text-brand">
                {data.eyebrow}
              </p>
              <div className="mt-3 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                {data.body.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={data.cta.href}
                  className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-card transition hover:bg-violet-700 hover:shadow-hover"
                >
                  {data.cta.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
