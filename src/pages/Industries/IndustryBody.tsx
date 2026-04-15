import { motion, useInView } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";

type Accent = {
  pill: string;
  dot: string;
  line: string;
  glow: string;
};

type IndustrySection = {
  key: string;
  title: string; // e.g. "WELCOME TO OUR COMPANY"
  subtitle?: string; // e.g. "Empowering Farmers with..."
  body?: string; // paragraphs
  points?: string[]; // bullet points
  imageAlt?: string;
};

type IndustryBodyProps = {
  data: {
    sections: IndustrySection[];
  };
  a: Accent;
};

const ease = [0.2, 0.8, 0.2, 1] as const;

export default function IndustryBody({ data, a }: IndustryBodyProps) {
  const [activeKey, setActiveKey] = useState<string>(data.sections[0]?.key ?? "");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Scroll-spy (no heavy libs)
  useEffect(() => {
    const onScroll = () => {
      const entries = data.sections
        .map((s) => {
          const el = sectionRefs.current[s.key];
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { key: s.key, top: rect.top, height: rect.height };
        })
        .filter(Boolean) as { key: string; top: number; height: number }[];

      // pick the one closest to top (but still visible)
      const visible = entries
        .filter((e) => e.top < 180 && e.top > -Math.max(220, e.height - 180))
        .sort((x, y) => Math.abs(x.top) - Math.abs(y.top))[0];

      if (visible?.key) setActiveKey(visible.key);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [data.sections]);

  const navItems = useMemo(
    () =>
      data.sections.map((s) => ({
        key: s.key,
        label: s.title,
      })),
    [data.sections]
  );

  const scrollTo = (key: string) => {
    const el = sectionRefs.current[key];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr] lg:gap-12">
        {/* LEFT: Sticky navigation */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-border bg-surface shadow-card">
            <div className="border-b border-border px-5 py-4">
              <p className="text-sm font-semibold text-heading">On this page</p>
              <p className="mt-1 text-xs text-muted">Jump to any section</p>
            </div>

            <div className="p-2">
              {navItems.map((it) => {
                const isActive = it.key === activeKey;
                return (
                  <button
                    key={it.key}
                    type="button"
                    onClick={() => scrollTo(it.key)}
                    className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
                      isActive ? "bg-bg" : "hover:bg-bg"
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        isActive ? a.dot : "bg-border group-hover:" + a.dot
                      }`}
                    />
                    <span
                      className={`min-w-0 text-sm font-medium transition ${
                        isActive
                          ? "text-[rgb(var(--color-accent-magenta))]"
                          : "text-body group-hover:text-heading"
                      }`}
                    >
                      {it.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Optional: quick highlight box */}
          <div className="mt-6 hidden rounded-2xl border border-border bg-surface p-5 shadow-card lg:block">
            <p className="text-sm font-semibold text-heading">Tip</p>
            <p className="mt-2 text-sm text-body">
              Keep each section concise: headline → 2–3 lines → bullets. This layout makes it feel premium.
            </p>
          </div>
        </div>

        {/* RIGHT: Timeline content */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className={`pointer-events-none absolute left-4 top-0 hidden h-full w-px ${a.line} md:block`} />

          <div className="grid grid-cols-1 gap-8">
            {data.sections.map((s, idx) => (
              <TimelineSectionCard
                key={s.key}
                a={a}
                section={s}
                index={idx}
                setRef={(el) => {
                  sectionRefs.current[s.key] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSectionCard({
  a,
  section,
  index,
  setRef,
}: {
  a: Accent;
  section: IndustrySection;
  index: number;
  setRef: (el: HTMLElement | null) => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.35, once: true });

  return (
    <div ref={(el) => { ref.current = el; setRef(el); }} className="relative">
      {/* Timeline dot */}
      <div className="absolute left-4 top-7 hidden -translate-x-1/2 md:block">
        <div className={`h-3.5 w-3.5 rounded-full ${a.dot}`} />
        <div className={`mt-2 h-10 w-px ${a.line}`} />
      </div>

      <motion.article
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.7, ease, delay: Math.min(index * 0.05, 0.2) }}
        className="group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition hover:shadow-hover"
      >
        {/* premium corner glow */}
        <div className={`pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full ${a.glow} blur-2xl opacity-70`} />

        <div className="relative grid grid-cols-1 gap-8 p-6 md:p-8 lg:grid-cols-[1fr_240px] lg:gap-10">
          {/* CONTENT */}
          <div>
            {/* pill */}
            <div className="inline-flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${a.dot}`} />
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${a.pill}`}>
                Section {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-4 text-xl font-semibold text-heading md:text-2xl">
              {section.title}
            </h3>

            {section.subtitle ? (
              <p className="mt-2 text-sm font-medium text-[rgb(var(--color-accent-magenta))]">
                {section.subtitle}
              </p>
            ) : null}

            {section.body ? (
              <p className="mt-4 text-base leading-relaxed text-body">
                {section.body}
              </p>
            ) : null}

            {section.points?.length ? (
              <ul className="mt-5 space-y-3">
                {section.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-2 flex h-2.5 w-2.5 items-center justify-center">
                      <span className={`h-2.5 w-2.5 rounded-full ${a.dot}`} />
                    </span>
                    <span className="text-sm font-medium text-body">{p}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {/* IMAGE PLACEHOLDER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-border bg-bg"
          >
            <div className="absolute inset-0 opacity-70">
              <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(217,70,239,0.25),transparent_55%)]" />
            </div>
            <div className="relative flex h-56 items-center justify-center p-6 lg:h-full">
              <div className="text-center">
                <div className={`mx-auto h-12 w-12 rounded-2xl ${a.dot}`} />
                <p className="mt-3 text-sm font-semibold text-heading">Industry Visual</p>
                <p className="mt-1 text-xs text-muted">
                  Replace with an illustration / screenshot
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* bottom hover fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </motion.article>
    </div>
  );
}
