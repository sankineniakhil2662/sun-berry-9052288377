import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  INDUSTRIES_DATA,
  type IndustryPageData,
  type IndustrySection,
} from "./industriesSection.data";

const ease = [0.2, 0.8, 0.2, 1] as const;

const accentTokens = (accent?: IndustryPageData["accent"]) => {
  switch (accent) {
    case "navy":
      return {
        pill: "bg-white/10 text-white",
        border: "border-white/10",
        glow: "bg-white/10",
        btn: "bg-[#062a64] hover:opacity-90",
        dot: "bg-[#062a64]",
        ring: "ring-[#062a64]/20",
        soft: "bg-[#062a64]/5",
        highlight: "text-[rgb(var(--color-accent-magenta))]",
      };
    case "purple":
      return {
        pill: "bg-white/10 text-white",
        border: "border-white/10",
        glow: "bg-white/10",
        btn: "bg-[rgb(var(--color-accent-purple))] hover:opacity-90",
        dot: "bg-[rgb(var(--color-accent-purple))]",
        ring: "ring-[rgb(var(--color-accent-purple))]/20",
        soft: "bg-[rgb(var(--color-accent-purple))]/5",
        highlight: "text-[rgb(var(--color-accent-magenta))]",
      };
    case "brand":
    default:
      return {
        pill: "bg-white/10 text-white",
        border: "border-white/10",
        glow: "bg-white/10",
        btn: "bg-brand hover:bg-brandHover",
        dot: "bg-brand",
        ring: "ring-brand/20",
        soft: "bg-brand/5",
        highlight: "text-[rgb(var(--color-accent-magenta))]",
      };
  }
};

const containerV = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const cardV = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

function SectionCard({
  a,
  section,
  index,
}: {
  a: ReturnType<typeof accentTokens>;
  section: IndustrySection;
  index: number;
}) {
  const hasPoints = Boolean(section.points?.length);
  const alignRight = index % 2 === 1;

  return (
    <motion.article
      variants={cardV}
      className={`group relative overflow-hidden rounded-card border border-border bg-surface shadow-card transition hover:shadow-hover ${alignRight ? "md:translate-y-4" : ""
        }`}
    >
      {/* decorative */}
      <div className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}>
        <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl ${a.soft}`} />
        <div className={`absolute -left-16 -bottom-16 h-56 w-56 rounded-full blur-3xl ${a.soft}`} />
      </div>

      <div className="relative p-7 md:p-8">
        {section.eyebrow ? (
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              {section.eyebrow}
            </p>

            {/* small accent chip */}
            <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-heading ring-1 ${a.ring}`}>
              <span className={`h-2 w-2 rounded-full ${a.dot}`} />
              Section
            </span>
          </div>
        ) : null}

        <h2 className="mt-3 text-2xl font-semibold text-heading md:text-3xl">
          {section.title}
        </h2>

        {section.description ? (
          <p className="mt-4 text-base leading-relaxed text-body md:text-lg">
            {section.description}
          </p>
        ) : null}

        {hasPoints ? (
          <div className="mt-7">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {section.points!.map((p) => (
                <div
                  key={p}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-bg px-4 py-4 transition group-hover:bg-surface"
                >
                  <span className="mt-1.5 flex h-5 w-5 items-center justify-center">
                    <span className={`h-3 w-3 rounded-full ${a.dot}`} />
                  </span>
                  <span className="text-sm font-semibold leading-relaxed text-heading/80 md:text-base">
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {/* subtle bottom highlight */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.article>
  );
}

export default function IndustryDetailPage() {
  const { slug } = useParams();
  const data =
    (slug ? INDUSTRIES_DATA[slug] : undefined) ??
    INDUSTRIES_DATA["agriculture-farming"];

  const a = accentTokens(data.accent);

  return (
    <main className="bg-bg">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#062a64] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-40">
            <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />
          </div>
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
          {/* Left */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest ${a.pill}`}
            >
              <span className={`h-2 w-2 rounded-full ${a.glow}`} />
              <span className="text-white/80">{data.label}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.05 }}
              className="mt-6 text-4xl font-semibold leading-tight md:text-5xl"
            >
              {data.title}
              <span className={`ml-3 ${a.highlight}`}>Solutions</span>
            </motion.h1>

            {data.subtitle ? (
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.12 }}
                className="mt-5 text-base leading-relaxed text-white/80 md:text-lg"
              >
                {data.subtitle}
              </motion.p>
            ) : null}

            {data.heroPoints?.length ? (
              <div className="mt-8 space-y-3">
                {data.heroPoints.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-white/60" />
                    <span className="text-sm font-semibold text-white/90 md:text-base">
                      {p}
                    </span>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/industries"
                className="text-sm font-semibold text-white/80 underline underline-offset-4 hover:text-white"
              >
                Back to Industries
              </Link>

              <Link
                to="/contact"
                className={`inline-flex items-center justify-center rounded-2xl px-6 py-4 text-sm font-semibold shadow-card transition ${a.btn}`}
              >
                Talk to Our Team
              </Link>
            </div>
          </div>

          {/* Right: Elegant image placeholder */}
          {/* Right: Premium Mockup Card */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.12 }}
            className="relative mx-auto max-w-xl"
          >
            <div className={`rounded-3xl border ${a.border} bg-surface/80 p-4 shadow-card backdrop-blur`}>
              <div className="overflow-hidden rounded-2xl bg-bg">
                <img
                  src={data.heroImage?.src}
                  alt={data.heroImage?.alt ?? data.title}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                  draggable={false}
                />
              </div>

              {/* mini row */}
              <div className="mt-4 flex items-center justify-between">
                <div className={`inline-flex items-center gap-2 rounded-full border border-border bg-bg px-4 py-2 text-xs font-semibold text-muted`}>
                  <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                  Interactive
                </div>

                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${a.dot}`} />
                  <span className="h-2 w-2 rounded-full bg-border" />
                  <span className="h-2 w-2 rounded-full bg-border" />
                </div>
              </div>
            </div>

            {/* subtle orbit dots */}
            <motion.div
              aria-hidden="true"
              className={`pointer-events-none absolute -right-10 top-10 hidden h-5 w-5 rounded-full ${a.soft} lg:block`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute right-10 bottom-6 hidden h-8 w-8 rounded-full bg-[rgb(var(--color-accent-cyan))]/20 lg:block"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -left-6 bottom-20 hidden h-10 w-10 rounded-full bg-[rgb(var(--color-accent-magenta))]/20 lg:block"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
            />
          </motion.div>
        </div>
      </section>

      {/* BODY (INLINE) */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* section header */}
        <div className="mb-8 md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            What you get
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-heading md:text-4xl">
            Industry-ready capabilities & delivery
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-body md:text-lg">
            This layout stays consistent across all industries. Only the JSON changes — so the UI remains premium and predictable.
          </p>
        </div>

        <motion.div
          variants={containerV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {data.sections.map((s, i) => (
            <SectionCard key={s.key} a={a} section={s} index={i} />
          ))}
        </motion.div>

        {/* bottom action row */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-card border border-border bg-surface p-6 shadow-card">
          <div>
            <p className="text-sm font-semibold text-heading">
              Want this for your business?
            </p>
            <p className="mt-1 text-sm text-body">
              Share your idea — we’ll map the best feature plan for your industry.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/industries"
              className="rounded-2xl border border-border bg-bg px-5 py-3 text-sm font-semibold text-heading transition hover:bg-surface"
            >
              View All Industries
            </Link>
            <Link
              to="/contact"
              className={`rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-card transition ${a.btn}`}
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
