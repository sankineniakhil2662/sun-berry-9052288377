import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import stepsData from "../../data/stepsData";

type Step = (typeof stepsData)[number];

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));
const pad2 = (n: number) => String(n).padStart(2, "0");

const LINE_W = "w-1"; // thickness (w-0.5 / w-1 / w-2)

export default function ProcessTimeline() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // marker refs for line fill position (desktop + mobile share same ref list)
  const markerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // last step that has entered viewport (controls line fill)
  const [lastSeenIndex, setLastSeenIndex] = useState(0);

  // active step for pulse (current entering step)
  const [activeIndex, setActiveIndex] = useState(0);

  // smooth line movement
  const fillSpring = useSpring(0, { stiffness: 90, damping: 24, mass: 0.9 });

  // move line to the lastSeen marker center
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const marker = markerRefs.current[lastSeenIndex];
    if (!wrapper || !marker) return;

    const update = () => {
      const wrapRect = wrapper.getBoundingClientRect();
      const markRect = marker.getBoundingClientRect();
      const centerY = markRect.top - wrapRect.top + markRect.height / 2;
      fillSpring.set(clamp(centerY, 0, wrapRect.height));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [lastSeenIndex, fillSpring]);

  const onEnterStep = (index: number) => {
    setActiveIndex(index);
    setLastSeenIndex((prev) => (index > prev ? index : prev));
  };

  const containerV = useMemo(
    () => ({
      hidden: { opacity: 1 },
      show: { opacity: 1, transition: { staggerChildren: 0.1
        
       } },
    }),
    []
  );

  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div ref={wrapperRef} className="relative">
          {/* ========= DESKTOP CENTER LINE ========= */}
          <div
            className={`pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 bg-border md:block ${LINE_W}`}
          />
          {/* <motion.div
            className={`pointer-events-none absolute left-1/2 top-0 hidden -translate-x-1/2 bg-[rgb(var(--color-accent-purple))] md:block ${LINE_W}`}
            style={{ height: fillSpring }}
          /> */}

          {/* ========= MOBILE LEFT LINE ========= */}
          <div className={`pointer-events-none absolute left-5 top-0 h-full bg-border md:hidden ${LINE_W}`} />
          <motion.div
            className={`pointer-events-none absolute left-5 top-0 bg-[rgb(var(--color-accent-purple))] md:hidden ${LINE_W}`}
            style={{ height: fillSpring }}
          />

          <motion.div
            variants={containerV}
            initial="hidden"
            animate="show"
            className="space-y-10 md:space-y-14"
          >
            {stepsData.map((step: Step, index: number) => {
              const isRight = index % 2 === 1;
              const isActive = index === activeIndex;

              return (
                <div key={step.id} className="relative">
                  {/* ===================== DESKTOP ===================== */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-10">
                    {/* Left card */}
                    <div>
                      {!isRight ? (
                        <RevealCard index={index} onEnter={onEnterStep}>
                          <TimelineCard step={step} big={pad2(step.id)} />
                        </RevealCard>
                      ) : (
                        <div />
                      )}
                    </div>

                    {/* Center marker */}
                    <div className="relative flex w-10 items-center justify-center">
                      <div
                        ref={(el) => {
                          markerRefs.current[index] = el;
                        }}
                        className={[
                          "relative flex h-10 w-10 items-center justify-center rounded-full border bg-surface",
                          isActive
                            ? "border-[rgb(var(--color-accent-purple))] shadow-hover"
                            : "border-border shadow-card",
                        ].join(" ")}
                      >
                        <motion.span
                          className={[
                            "h-3 w-3 rounded-full",
                            isActive ? "bg-[rgb(var(--color-accent-purple))]" : "bg-border",
                          ].join(" ")}
                          animate={isActive ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                          transition={{ duration: 1.1, repeat: isActive ? Infinity : 0 }}
                        />
                      </div>
                    </div>

                    {/* Right card */}
                    <div>
                      {isRight ? (
                        <RevealCard index={index} onEnter={onEnterStep}>
                          <TimelineCard step={step} big={pad2(step.id)} />
                        </RevealCard>
                      ) : (
                        <div />
                      )}
                    </div>
                  </div>

                  {/* ===================== MOBILE ===================== */}
                  <div className="md:hidden">
                    <div className="relative pl-14">
                      <div
                        ref={(el) => {
                          markerRefs.current[index] = el;
                        }}
                        className={[
                          "absolute left-0 top-8 flex h-10 w-10 items-center justify-center rounded-full border bg-surface",
                          isActive
                            ? "border-[rgb(var(--color-accent-purple))] shadow-hover"
                            : "border-border shadow-card",
                        ].join(" ")}
                      >
                        <motion.span
                          className={[
                            "h-3 w-3 rounded-full",
                            isActive ? "bg-[rgb(var(--color-accent-purple))]" : "bg-border",
                          ].join(" ")}
                          animate={isActive ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                          transition={{ duration: 1.1, repeat: isActive ? Infinity : 0 }}
                        />
                      </div>

                      <RevealCard index={index} onEnter={onEnterStep}>
                        <TimelineCard step={step} big={pad2(step.id)} />
                      </RevealCard>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** ✅ This is the key fix: reveal is handled by Framer Motion viewport */
function  RevealCard({
  index,
  onEnter,
  children,
}: {
  index: number;
  onEnter: (index: number) => void;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
      onViewportEnter={() => onEnter(index)}
    >
      {children}
    </motion.div>
  );
}

function TimelineCard({
  step,
  big,
}: {
  step: { title: string; description: string; image: string; label: string };
  big: string;
}) {
  return (
    <article className="rounded-card border border-border bg-surface px-6 py-6 shadow-card transition hover:shadow-hover">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <img
              src={step.image}
              alt={step.title}
              className="h-12 w-12 rounded-2xl border border-border bg-bg object-contain p-2"
              loading="lazy"
              draggable={false}
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                {step.label}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-heading sm:text-2xl">
                {step.title}
              </h3>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-body sm:text-base">
            {step.description}
          </p>
        </div>

        <p className="shrink-0 text-5xl font-extrabold leading-none text-[rgb(var(--color-accent-cyan))] sm:text-6xl">
          {big}
        </p>
      </div>

      {/* bottom accent bar */}
      <div className="mt-5 h-1.5 w-full rounded-full bg-[rgb(var(--color-accent-purple))]/20">
        <div className="h-1.5 w-3/3 rounded-full bg-[rgb(var(--color-accent-purple))]" />
      </div>
    </article>
  );
}