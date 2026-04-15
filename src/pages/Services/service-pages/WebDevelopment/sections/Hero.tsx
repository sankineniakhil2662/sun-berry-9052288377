
import React from "react";
import { Link } from "react-router-dom";
import Heropic from "../../../../../assets/services/webdevelopment/Heropic.png";


type HeroData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  imageAlt: string;
};

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-12 bg-brand" />
              <p className="text-sm font-medium tracking-wide text-brand">
                {data.eyebrow}
              </p>
            </div>

            <h1 className="mt-4 whitespace-pre-line text-3xl font-semibold leading-tight text-heading sm:text-4xl">
              {data.title}
            </h1>

            <p className="mt-5 text-base font-medium leading-relaxed text-heading/80 sm:text-lg">
              {data.subtitle}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {data.description}
            </p>

            {/* CTA (Link -> /about) */}
            <div className="mt-7">
              <Link
                to="/about"
                className="
                  inline-flex items-center justify-center
                  rounded-full bg-brand px-7 py-3
                  text-sm font-semibold text-white
                  shadow-card
                  transition
                  hover:shadow-hover
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2
                  active:scale-95
                "
                aria-label="Learn more about TYL Tech on About page"
              >
                {data.ctaLabel}
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="justify-self-center lg:justify-self-end">
            <div className="w-full max-w-xl">
              <div className="mt-4 overflow-hidden rounded-2xl shadow-card ">
                <div >
                  <img
                    src={Heropic}
                    alt={data.imageAlt}
                    className="mx-auto block w-full max-w-lg"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /Right */}
        </div>
      </div>
    </section>
  );
}
