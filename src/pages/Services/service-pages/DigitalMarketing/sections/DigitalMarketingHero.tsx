import { ArrowRight } from "lucide-react";
import type { DigitalMarketingData } from "../digitalmarketing.data";

export default function DigitalMarketingHero({ data }: { data: DigitalMarketingData }) {
  return (
    <section className="w-full bg-bg py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
           Making brands relevant, relatable, & result-driven.
          </h1>
          <p className="text-sm mt-4">
            Let’s create something special together.
          </p>

          <div className="mt-10">
            <a
              href={data.cta.href}
              className="group inline-flex items-stretch overflow-hidden rounded-xl border border-border bg-surface shadow-card hover:shadow-hover"
            >
              {/* Left arrow block */}
              <span className="flex items-center justify-center bg-brand px-5">
                <ArrowRight className="h-5 w-5 text-white transition group-hover:translate-x-0.5" />
              </span>

              {/* Text block */}
              <span className="flex items-center px-6 py-4 text-sm font-semibold text-heading sm:text-base">
                {data.cta.label}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
