import React from "react";
import aboutImg from "../../assets/tyl2.png";

const AboutSection = () => {
  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-[#062a64]
        py-20
        text-white
      "
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        {/* grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />
        </div>

        {/* glow */}
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-white/10 blur-xl" />
            <img
              src={aboutImg}
              alt="About Team"
              className="
                relative w-full rounded-3xl object-cover
                shadow-2xl
              "
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl shadow-xl md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-gradient-to-r from-[rgb(var(--color-accent-purple))]/15 via-[rgb(var(--color-accent-cyan))]/10 to-[rgb(var(--color-accent-magenta))]/15 px-4 py-2 text-white font-semibold text-heading shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[rgb(var(--color-accent-purple))]" />
              ABOUT TYL TECH
            </div>

            <h2 className="mb-6 text-3xl font-semibold leading-tight md:text-4xl">
              <span className="block text-white">
                Empowering Digital
              </span>
              <span className="block text-[rgb(var(--color-accent-magenta))]">
                Innovation
              </span>
            </h2>

            <p className="mb-4 text-white/90 leading-relaxed">
              We are a team of passionate technologists, strategists, and creative
              thinkers dedicated to building innovative IT solutions that solve
              real business challenges. From startups to enterprises, we help
              organizations accelerate their digital transformation journey.
            </p>

            <p className="mb-8 text-white/80 leading-relaxed">
              With years of experience in cloud services, app development,
              analytics, and scalable systems, we deliver secure, high-performance
              solutions designed for long-term growth.
            </p>

            {/* BULLET POINTS */}
            <ul className="space-y-4">
              {[
                "Tailored software and infrastructure solutions",
                "Agile development & rapid delivery models",
                "Trusted long-term technology partner",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#062a64] text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-white/90 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
