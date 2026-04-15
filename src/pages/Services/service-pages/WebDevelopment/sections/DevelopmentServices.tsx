
import React from "react";
import type { LucideIcon } from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ServicesData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
};

export default function DevelopmentServices({ data }: { data: ServicesData }) {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg font-medium tracking-wide text-brand">
            {data.eyebrow}
          </p>

          <h2 className="mt-3 whitespace-pre-line text-3xl font-semibold leading-tight text-heading sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {data.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  flex h-full min-h-72 flex-col
                  overflow-hidden rounded-2xl
                  border border-border
                  bg-brand/5
                  shadow-card
                  transition
                  hover:-translate-y-1 hover:shadow-hover
                "
              >
                {/* Content grows, bar stays at bottom */}
                <div className="flex-1 p-6">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Icon className="h-10 w-10 text-brand" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-heading">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>

                
                <div className="h-1.5 w-full bg-brand" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
