import React from "react";
import webWhy from "../../../../../assets/services/webdevelopment/webWhy.png";

type WhyChooseUsData = {
  eyebrow: string;
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  points: string[];
};

const CheckIcon = () => (
  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </span>
);

export default function WhyChooseUs({ data }: { data: WhyChooseUsData }) {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left image */}
          <div className="justify-self-center lg:justify-self-start">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
              <img
                src={webWhy}
                alt={data.imageAlt}
                className="block w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right content (reduced size vs image) */}
          <div className="max-w-lg">
            <p className="text-lg font-medium tracking-wide text-brand">
              {data.eyebrow}
            </p>

            <h2 className="mt-3 whitespace-pre-line text-2xl font-semibold leading-tight text-heading sm:text-3xl">
              {data.title}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-muted">
              {data.description}
            </p>

            <ul className="mt-6 space-y-3">
              {data.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5">
                    <CheckIcon />
                  </span>

                  <p className="text-sm leading-relaxed text-heading/80">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
