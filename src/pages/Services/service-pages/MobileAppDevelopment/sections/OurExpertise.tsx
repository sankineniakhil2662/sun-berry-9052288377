
import React, { useEffect, useRef, useState } from "react";
import type { ExpertiseCard } from "../data";

type ExpertiseData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cards: ExpertiseCard[];
};

const useInViewOnce = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
};

export default function OurExpertise({ data }: { data: ExpertiseData }) {
  const { ref, inView } = useInViewOnce({ threshold: 0.18 });

  return (
    <section className="bg-bg">
      <div
        ref={ref}
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
      >
        {/* Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <p className="text-lg font-semibold tracking-wide text-brand">
            {data.eyebrow}
          </p>

          <h2 className="mt-3 whitespace-pre-line text-3xl font-semibold leading-tight text-heading sm:text-4xl">
            {data.title}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {data.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {data.cards.map((card, i) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className={`rounded-2xl bg-brand p-6 text-white shadow-card transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                } hover:-translate-y-2 hover:shadow-hover`}
                style={{ transitionDelay: `${140 + i * 90}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon box */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-tight sm:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
