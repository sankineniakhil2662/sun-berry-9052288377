import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type Cta = { label: string; href: string };
type Accent = "purple-magenta-cyan" | "purple-cyan" | "magenta-cyan" | "purple-magenta";

const gradientFor = (a: Accent) => {
  if (a === "purple-cyan")
    return "from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-cyan))]";
  if (a === "magenta-cyan")
    return "from-[rgb(var(--color-accent-magenta))] to-[rgb(var(--color-accent-cyan))]";
  if (a === "purple-magenta")
    return "from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-magenta))]";
  return "from-[rgb(var(--color-accent-purple))] via-[rgb(var(--color-accent-magenta))] to-[rgb(var(--color-accent-cyan))]";
};

type Props = {
  eyebrow: string;
  eyebrowIcon?: LucideIcon;
  titleLead?: string;
  titleAccent: string;
  titleTail?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  accent?: Accent;
};

export default function GradientHero({
  eyebrow,
  eyebrowIcon: Icon,
  titleLead,
  titleAccent,
  titleTail,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  accent = "purple-magenta-cyan",
}: Props) {
  return (
    <section className="relative w-full overflow-hidden pt-20 pb-24 sm:pt-24 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-[rgb(var(--color-accent-purple))]/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[rgb(var(--color-accent-magenta))]/15 blur-3xl" />
        <div className="absolute top-1/3 right-1/3 h-64 w-64 rounded-full bg-[rgb(var(--color-accent-cyan))]/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted backdrop-blur">
            {Icon ? (
              <Icon className="h-3.5 w-3.5 text-[rgb(var(--color-accent-magenta))]" />
            ) : (
              <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--color-accent-magenta))]" />
            )}
            {eyebrow}
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-heading sm:text-5xl lg:text-6xl">
            {titleLead ? <>{titleLead} </> : null}
            <span className={`bg-gradient-to-r ${gradientFor(accent)} bg-clip-text text-transparent`}>
              {titleAccent}
            </span>
            {titleTail ? <> {titleTail}</> : null}
          </h1>

          {subtitle ? (
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{subtitle}</p>
          ) : null}
          {description ? (
            <p className="mt-4 max-w-3xl text-base leading-7 text-body">{description}</p>
          ) : null}

          {primaryCta || secondaryCta ? (
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {primaryCta ? (
                <a
                  href={primaryCta.href}
                  className="group inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-card transition hover:shadow-hover"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              ) : null}
              {secondaryCta ? (
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold uppercase tracking-wide text-heading transition hover:border-[rgb(var(--color-accent-purple))] hover:text-[rgb(var(--color-accent-purple))]"
                >
                  {secondaryCta.label}
                </a>
              ) : null}
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
