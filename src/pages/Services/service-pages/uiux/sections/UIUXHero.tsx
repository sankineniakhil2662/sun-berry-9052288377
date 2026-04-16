import { motion } from "framer-motion";
import { Palette, ArrowRight } from "lucide-react";
import { UIUX_HERO } from "../uiux.data";
import heroBg from "../../../../../assets/services/uiux/uiux-hero.png";

const ease = [0.22, 1, 0.36, 1] as const;

const UIUXHero = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-bg"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "min(660px, 55vw)",
      }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--color-bg))] via-[rgb(var(--color-bg)/0.92)] to-transparent" />
        <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-[rgb(var(--color-accent-purple))]/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-80 w-80 rounded-full bg-[rgb(var(--color-accent-magenta))]/10 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-64 w-64 rounded-full bg-[rgb(var(--color-accent-cyan))]/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgb(var(--color-bg))] to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted backdrop-blur">
            <Palette className="h-3.5 w-3.5 text-[rgb(var(--color-accent-magenta))]" />
            {UIUX_HERO.eyebrow}
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-heading sm:text-5xl lg:text-6xl">
            Design experiences{" "}
            <span className="bg-gradient-to-r from-[rgb(var(--color-accent-purple))] via-[rgb(var(--color-accent-magenta))] to-[rgb(var(--color-accent-cyan))] bg-clip-text text-transparent">
              people love
            </span>{" "}
            to use.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{UIUX_HERO.subtitle}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-body">{UIUX_HERO.body}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-card transition hover:shadow-hover"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold uppercase tracking-wide text-heading transition hover:border-[rgb(var(--color-accent-purple))] hover:text-[rgb(var(--color-accent-purple))]"
            >
              See our process
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UIUXHero;
