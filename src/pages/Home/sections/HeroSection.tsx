import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import mobile from "../../../assets/images/home/mobile.png";
import web from "../../../assets/images/home/web.png";
import uiux from "../../../assets/images/home/skill.png";
import learn from "../../../assets/images/home/learn.png";
import Digital from "../../../assets/images/home/digital.png";
import Game from "../../../assets/images/home/game.png";

type CountUpProps = {
  end: number;
  duration?: number;
  suffix?: string;
};

const CountUpNumber = ({ end, duration = 1500, suffix = "" }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const increment = end / (duration / 16);

          const timer = window.setInterval(() => {
            start += increment;

            if (start >= end) {
              setCount(end);
              window.clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  );
};

const HeroSection = () => {
  const previews = useMemo(() => [mobile, web, uiux, learn, Digital, Game], []);
  const [activeIndex, setActiveIndex] = useState(0);

  const floatingBadges = [
    {
      title: "Live Support",
      subtitle: "Online Now",
      dotClass: "bg-[rgb(var(--color-accent-cyan))]",
      glowClass: "bg-[rgb(var(--color-accent-cyan))]/25",
      className: "left-4 top-6",
    },
    {
      title: "24/7 Available",
      subtitle: "Always Online",
      dotClass: "bg-[rgb(var(--color-accent-purple))]",
      glowClass: "bg-[rgb(var(--color-accent-purple))]/25",
      className: "right-4 top-10",
    },
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % previews.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [previews.length]);

  return (
    <section id="hero" className="relative overflow-hidden bg-bg pb-16 sm:pt-22">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-white via-slate-50 to-indigo-50" />

        <div className="absolute inset-0 opacity-40">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-size-[56px_56px]" />
        </div>

        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-accent-purple/20 blur-3xl" />
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-accent-magenta/20 blur-3xl" />
        <div className="absolute right-24 bottom-10 h-56 w-56 rounded-full bg-accent-cyan/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[rgb(var(--color-accent-magenta))]" />
            Digital Transformation
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-heading sm:text-5xl lg:text-6xl">
            Engineering{" "}
            <span className="bg-linear-to-r from-[rgb(var(--color-accent-purple))] via-[rgb(var(--color-accent-magenta))] to-[rgb(var(--color-accent-cyan))] bg-clip-text text-transparent">
              Digital Excellence
            </span>{" "}
            for Modern Businesses.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Sunberry delivers end-to-end technology solutions including application
            development, UI/UX design, analytics, digital marketing, and learning
            platforms—built to scale, perform, and evolve with your business.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-card transition hover:shadow-hover"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold uppercase tracking-wide text-heading transition hover:border-[rgb(var(--color-accent-purple))] hover:text-[rgb(var(--color-accent-purple))]"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:max-w-md md:grid-cols-3">
            <div className="group rounded-card border border-border bg-surface px-6 py-5 text-center shadow-card transition hover:shadow-hover">
              <p className="text-3xl font-bold text-[rgb(var(--color-accent-purple))]">
                <CountUpNumber end={50} suffix="+" />
              </p>
              <p className="mt-2 text-sm text-muted">Projects Delivered</p>
            </div>

            <div className="group rounded-card border border-border bg-surface px-6 py-5 text-center shadow-card transition hover:shadow-hover">
              <p className="text-3xl font-bold text-[rgb(var(--color-accent-magenta))]">
                <CountUpNumber end={98} suffix="%" />
              </p>
              <p className="mt-2 text-sm text-muted">Client Success Rate</p>
            </div>

            <div className="group rounded-card border border-border bg-surface px-6 py-5 text-center shadow-card transition hover:shadow-hover">
              <p className="text-3xl font-bold text-[rgb(var(--color-accent-cyan))]">
                <CountUpNumber end={10} suffix="+" />
              </p>
              <p className="mt-2 text-sm text-muted">Expert Team Members</p>
            </div>
          </div>
        </motion.div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-xl">
            {floatingBadges.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.65,
                  ease: [0.2, 0.8, 0.2, 1],
                  delay: 0.22 + index * 0.08,
                }}
                className={`absolute z-20 hidden select-none md:block ${badge.className}`}
              >
                <div className={`absolute -inset-1 rounded-2xl blur-lg opacity-70 ${badge.glowClass}`} />

                <div className="relative rounded-2xl border border-border bg-white/90 px-4 py-3 shadow-card backdrop-blur">
                  <div className="flex items-start gap-3">
                    <span className="relative mt-1 flex h-3 w-3 items-center justify-center">
                      <span
                        className={`absolute inline-flex h-5 w-5 animate-ping rounded-full ${badge.dotClass} opacity-30`}
                      />
                      <span
                        className={`relative h-3 w-3 rounded-full ${badge.dotClass} ring-4 ring-white`}
                      />
                    </span>

                    <div>
                      <div className="text-sm font-semibold text-heading">{badge.title}</div>
                      <div className="text-xs font-medium text-muted">{badge.subtitle}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.12 }}
              className="relative"
            >
              <div className="absolute -inset-2 rounded-card bg-linear-to-br from-[rgb(var(--color-accent-purple))]/25 via-[rgb(var(--color-accent-cyan))]/20 to-[rgb(var(--color-accent-magenta))]/25 blur-2xl" />

              <div className="relative rounded-card border border-border bg-white/80 p-4 shadow-card backdrop-blur">
                <div className="overflow-hidden rounded-card bg-slate-950">
                  <div
                    className="flex h-80 w-full transition-transform duration-1000 ease-in-out sm:h-96 lg:h-140"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  >
                    {previews.map((image) => (
                      <img
                        key={image}
                        src={image}
                        alt="Product preview"
                        className="h-full w-full flex-none object-cover"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-linear-to-r from-[rgb(var(--color-accent-purple))]/15 via-[rgb(var(--color-accent-cyan))]/10 to-[rgb(var(--color-accent-magenta))]/15 px-4 py-2 text-xs font-semibold text-heading shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-[rgb(var(--color-accent-purple))]" />
                    Interactive
                  </div>

                  <div className="flex items-center gap-2">
                    {previews.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={[
                          "h-2.5 rounded-full transition-all duration-300",
                          index === activeIndex
                            ? "w-7 bg-[rgb(var(--color-accent-purple))]"
                            : "w-2.5 bg-slate-300/80 hover:bg-slate-400/80",
                        ].join(" ")}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;