import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type HeroTag = { label: string; dotClass?: string };
type HeroStat = { value: string; label: string };
type HeroAction = { label: string; href: string };

type FloatingBadge = {
  title: string;
  subtitle: string;
  dotClass?: string;
  className: string;
};

type AboutHeroProps = {
  brandPill?: string;
  titleTop: string;
  titleAccent: string;
  description: string;
  tags: HeroTag[];
  primary: HeroAction;
  secondary: HeroAction;
  stats: HeroStat[];
  mockupImageSrc: string;
  mockupAlt?: string;
  floatingBadges: FloatingBadge[];
};

const ease = "easeInOut";

const isExternalHref = (href: string) => /^https?:\/\//i.test(href);

const AboutHero: React.FC<AboutHeroProps> = ({
  brandPill = "About TYLTech",
  titleTop,
  titleAccent,
  description,
  tags,
  primary,
  secondary,
  stats,
  mockupImageSrc,
  mockupAlt = "About hero mockup",
  floatingBadges,
}) => {
  return (
    <section className="relative overflow-hidden bg-bg">
      {/* subtle background accents (matches your theme) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[rgb(var(--color-accent-purple))]/10 blur-3xl" />
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[rgb(var(--color-accent-magenta))]/10 blur-3xl" />
        <div className="absolute right-24 bottom-8 h-56 w-56 rounded-full bg-[rgb(var(--color-accent-cyan))]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-2xl"
          >
            {/* Pill */}
            <span className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-1 text-xs font-medium uppercase tracking-widest text-muted">
              {brandPill}
            </span>

            {/* Title (same style as your main hero) */}
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              <span className="text-[rgb(var(--color-accent-purple))]">{titleTop}</span>{" "}
              <span className="text-[rgb(var(--color-accent-magenta))]">{titleAccent}</span>
            </h1>

            {/* Description */}
            <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">{description}</p>

            {/* Tags as small chips (same vibe) */}
            {tags?.length > 0 ? (
              <div className="mt-5 flex flex-wrap items-center gap-3">
                {tags.map((t) => (
                  <div
                    key={t.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted"
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        t.dotClass ?? "bg-[rgb(var(--color-accent-purple))]"
                      }`}
                    />
                    <span>{t.label}</span>
                  </div>
                ))}
              </div>
            ) : null}

            {/* Actions (same button styles as your main hero) */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {isExternalHref(primary.href) ? (
                <a
                  href={primary.href}
                  className="rounded-button bg-brand px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brandHover"
                >
                  {primary.label}
                </a>
              ) : (
                <Link
                  to={primary.href}
                  className="rounded-button bg-brand px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brandHover"
                >
                  {primary.label}
                </Link>
              )}

              {isExternalHref(secondary.href) ? (
                <a
                  href={secondary.href}
                  className="rounded-button border border-border bg-surface px-6 py-3 text-sm font-semibold text-heading transition hover:border-brand hover:text-brand"
                >
                  {secondary.label}
                </a>
              ) : (
                <Link
                  to={secondary.href}
                  className="rounded-button border border-border bg-surface px-6 py-3 text-sm font-semibold text-heading transition hover:border-brand hover:text-brand"
                >
                  {secondary.label}
                </Link>
              )}
            </div>

            {/* Stats (same card style as your main hero) */}
            {stats?.length > 0 ? (
              <div className="mt-10 grid grid-cols-2 gap-6 sm:max-w-md">
                {stats.slice(0, 2).map((s) => (
                  <div key={s.label} className="rounded-card border border-border bg-surface px-4 py-3">
                    <p className="text-sm font-semibold text-heading">{s.value}</p>
                    <p className="mt-1 text-xs text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </motion.div>

          {/* RIGHT */}
          <div className="relative">
            {/* floating badges */}
            {floatingBadges?.map((b) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.65, ease, delay: 0.22 }}
                className={`absolute z-20 hidden select-none rounded-card border border-border bg-surface/90 px-4 py-3 shadow-card backdrop-blur lg:block ${b.className}`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-1 h-3 w-3 rounded-full ${
                      b.dotClass ?? "bg-[rgb(var(--color-accent-purple))]"
                    } ring-4 ring-bg`}
                  />
                  <div>
                    <div className="text-sm font-semibold text-heading">{b.title}</div>
                    <div className="text-xs font-medium text-muted">{b.subtitle}</div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* mockup card */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.12 }}
              className="relative mx-auto max-w-xl"
            >
              <div className="rounded-3xl border border-border bg-surface/80 p-4 shadow-card backdrop-blur">
                <div className="overflow-hidden rounded-2xl bg-bg">
                  <img src={mockupImageSrc} alt={mockupAlt} className="h-auto w-full object-cover" />
                </div>

                {/* mini row */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-4 py-2 text-xs font-semibold text-muted">
                    <span className="h-2 w-2 rounded-full bg-[rgb(var(--color-accent-purple))]" />
                    Interactive
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[rgb(var(--color-accent-purple))]" />
                    <span className="h-2 w-2 rounded-full bg-border" />
                    <span className="h-2 w-2 rounded-full bg-border" />
                  </div>
                </div>
              </div>

              {/* subtle orbit dots */}
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 top-10 hidden h-5 w-5 rounded-full bg-[rgb(var(--color-accent-purple))]/25 lg:block"
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
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
