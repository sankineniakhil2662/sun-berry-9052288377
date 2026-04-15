import React from "react";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type ProcessData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: ProcessStep[];
};

export default function ProcessBlock({data}:{data:ProcessData}){
  return(
    <section className="bg-brand/5">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {/* Header */}
        <div className="mx-auto max-w-3xl  text-center">
          <p className="text-lg font-semibold tracking-wide text-brand">
            {data.eyebrow}
          </p>

          <h2 className="mt-3 whitespace-pre-line text-3xl font-semibold leading-tight text-heading sm:text-4xl">
            {data.title}
          </h2>

          {/* <div className="mx-auto mt-3 h-0.5 w-14 rounged bg-brand"/> */}

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {data.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.steps.map((step)=>(
            <div 
            key={step.number}
            className="rounded-2xl border border-brand/40 bg-surface p-6 shadow-card"
            >
              <p className="text-5xl font-bold leading-none text-brand">
                {step.number}
              </p>

              <h3 className="mt-3 text-lg font-semibold text-heading sm:text-xl">
                {step.title}
              </h3>

              <p className="mt-2 text-md leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}