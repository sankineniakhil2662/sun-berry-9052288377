
import React from "react";
import type { CapabilityItem } from "../data";

type CapabilitiesData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: CapabilityItem[];
};

const accentClass = (accent?: CapabilityItem["accent"]) => {
  switch (accent) {
    case "cyan":
      return "text-accent-cyan";
    case "magenta":
      return "text-accent-magenta";
    case "purple":
      return "text-accent-purple";
    case "brand":
    default:
      return "text-brand";
  }
};

export default function Capabilities({ data }: { data: CapabilitiesData }) {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg font-semibold tracking-wide text-brand">
            {data.eyebrow}
          </p>

          <h2 className="mt-3 whitespace-pre-line text-3xl font-semibold leading-tight text-heading sm:text-4xl">
            {data.title}
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {data.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={`${item.title}-${item.subtitle}`}
                className="rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:shadow-hover"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-bg">
                    <Icon className={`h-5 w-5 ${accentClass(item.accent)}`} />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-tight text-heading">
                      {item.title}{" "}
                      <span className="text-muted">{item.subtitle}</span>
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
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
