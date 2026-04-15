import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Gamepad2, Sparkles, Zap } from "lucide-react";
import type { GamingDevelopmentData } from "../gamingdevelopment.data";

const ease = [0.2, 0.8, 0.2, 1] as const;

export default function GamingHero({ data }: { data: GamingDevelopmentData }) {
  const shots = useMemo(() => data.screenshots ?? [], [data.screenshots]);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!shots.length || paused) return;
    const id = window.setInterval(() => {
      setActive((p) => (p + 1) % shots.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, [shots.length, paused]);

  const current = shots[active];

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#050816] py-16 sm:py-20">
      {/* GAME BACKDROP (local theme only) */}
      <div className="pointer-events-none absolute inset-0">
        {/* Deep gradients */}
        <div className="absolute inset-0 bg-linear-to-b from-[#070A1A] via-[#050816] to-[#040615]" />

        {/* Neon blobs */}
        <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-[rgb(var(--color-accent-purple))]/25 blur-3xl" />
        <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-[rgb(var(--color-accent-cyan))]/18 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[rgb(var(--color-accent-magenta))]/18 blur-3xl" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-25">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
        </div>

        {/* Floating particles (very subtle) */}
        <motion.div
          aria-hidden="true"
          className="absolute left-10 top-24 h-2 w-2 rounded-full bg-white/30"
          animate={{ y: [0, -14, 0], opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute right-16 top-40 h-3 w-3 rounded-full bg-white/20"
          animate={{ y: [0, 18, 0], opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute left-1/2 bottom-24 h-2 w-2 rounded-full bg-white/25"
          animate={{ y: [0, -12, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/70">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                <Gamepad2 className="h-4 w-4 text-white/80" />
              </span>
              Game Studio Mode
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              <span className="text-[rgb(var(--color-accent-purple))]">Game</span>{" "}
              <span className="text-[rgb(var(--color-accent-magenta))]">
                Development
              </span>{" "}
              <span className="text-white">Services</span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
              We build addictive mobile games and interactive experiences — from
              rapid prototypes to polished releases. Clean visuals, smooth
              performance, and scalable architecture.
            </p>

            {/* Neon feature chips */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <FeatureChip
                icon={<Zap className="h-5 w-5 text-[rgb(var(--color-accent-cyan))]" />}
                title="Fast Prototyping"
                desc="Playable builds quickly"
              />
              <FeatureChip
                icon={<Sparkles className="h-5 w-5 text-[rgb(var(--color-accent-magenta))]" />}
                title="Polished Visuals"
                desc="Premium UI + VFX feel"
              />
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href={data.cta.href}
                className="group inline-flex items-stretch overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-card transition hover:bg-white/10"
              >
                <span className="flex items-center justify-center bg-[rgb(var(--color-accent-purple))] px-5">
                  <ArrowRight className="h-5 w-5 text-white transition group-hover:translate-x-0.5" />
                </span>
                <span className="flex items-center px-6 py-4 text-sm font-semibold text-white sm:text-base">
                  {data.cta.label}
                </span>
              </a>
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-white/50">
                Portrait previews • Auto-rotating • Hover to pause
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Portrait phone preview */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease }}
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative mx-auto w-full max-w-sm lg:max-w-[400px]">
              {/* Phone outer glow */}
              <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[rgb(var(--color-accent-purple))]/10 blur-2xl" />

              {/* Phone frame */}
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0B1022] p-3 shadow-card">
                {/* Top bar */}
                <div className="flex items-center justify-between px-2 pb-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
                    <span className="h-2 w-2 rounded-full bg-[rgb(var(--color-accent-cyan))]" />
                    Live Gameplay
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                  </div>
                </div>

                {/* Screen (portrait) */}
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black">
                  {/* 9:16 portrait area */}
                  <div className="aspect-[9/16] w-full">
                    <AnimatePresence mode="wait">
                      {current ? (
                        <motion.img
                          key={current.src}
                          src={current.src}
                          alt={current.alt}
                          className="h-full w-full object-contain"
                          initial={{ opacity: 0, y: 18, scale: 1.02 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -14, scale: 1.01 }}
                          transition={{ duration: 0.55, ease }}
                          loading="lazy"
                          draggable={false}
                        />
                      ) : (
                        <motion.div
                          key="empty"
                          className="flex h-full w-full items-center justify-center px-6 text-center text-sm text-white/60"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          Add portrait screenshots in <b className="mx-1 text-white">/public/games</b>
                          to preview here.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Scanlines (subtle game feel) */}
                  <div className="pointer-events-none absolute inset-0 opacity-20">
                    <div className="h-full w-full bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:1px_6px]" />
                  </div>

                  {/* Corner neon */}
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-[rgb(var(--color-accent-cyan))]/18 blur-2xl" />
                    <div className="absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-[rgb(var(--color-accent-magenta))]/16 blur-2xl" />
                  </div>
                </div>

                {/* Thumbnail rail */}
                {shots.length ? (
                  <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                    {shots.map((s, i) => {
                      const isActive = i === active;
                      return (
                        <button
                          key={s.src}
                          type="button"
                          onClick={() => setActive(i)}
                          className={[
                            "relative shrink-0 overflow-hidden rounded-xl border transition",
                            isActive
                              ? "border-[rgb(var(--color-accent-purple))] shadow-hover"
                              : "border-white/10 hover:border-[rgb(var(--color-accent-purple))]",
                          ].join(" ")}
                          aria-label={`Show screenshot ${i + 1}`}
                        >
                          <img
                            src={s.src}
                            alt={s.alt}
                            className="h-14 w-12 object-cover"
                            loading="lazy"
                            draggable={false}
                          />
                          {isActive ? (
                            <span className="pointer-events-none absolute inset-0 ring-2 ring-[rgb(var(--color-accent-magenta))]/30" />
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                ) : null}
              </div>

              {/* Floating neon orbs */}
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 top-20 hidden h-12 w-12 rounded-full bg-[rgb(var(--color-accent-purple))]/25 lg:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -left-6 bottom-24 hidden h-16 w-16 rounded-full bg-[rgb(var(--color-accent-cyan))]/18 lg:block"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureChip({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-card border border-white/10 bg-white/5 px-4 py-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-xs text-white/60">{desc}</p>
      </div>
    </div>
  );
}