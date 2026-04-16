import React from "react";
import { motion, type Variants } from "framer-motion";

import logo from "../../../assets/slogo.png";
import exp from "../../../assets/exp.jpg";
import innovative from "../../../assets/innovative.jpg";
import client from "../../../assets/client.jpg";
import pricing from "../../../assets/pricing.jpg";
import timely from "../../../assets/timely.jpg";
import support from "../../../assets/support.jpg";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

type OrbitDot = {
  size: "xs" | "sm" | "md";
  tone: "purple" | "magenta" | "cyan";
  top: string;
  left: string;
  opacity?: number;
};

const dotSizeClass: Record<OrbitDot["size"], string> = {
  xs: "h-2 w-2",
  sm: "h-3 w-3",
  md: "h-4 w-4",
};

const dotToneClass: Record<OrbitDot["tone"], string> = {
  purple: "bg-[rgb(var(--color-accent-purple))]",
  magenta: "bg-[rgb(var(--color-accent-magenta))]",
  cyan: "bg-[rgb(var(--color-accent-cyan))]",
};

function OrbitLogo() {
  const ring1: OrbitDot[] = [
    { size: "sm", tone: "purple", top: "12%", left: "70%", opacity: 0.9 },
    { size: "xs", tone: "magenta", top: "52%", left: "94%", opacity: 0.75 },
    { size: "sm", tone: "cyan", top: "84%", left: "40%", opacity: 0.85 },
    { size: "xs", tone: "purple", top: "44%", left: "6%", opacity: 0.7 },
  ];

  const ring2: OrbitDot[] = [
    { size: "md", tone: "magenta", top: "18%", left: "22%", opacity: 0.85 },
    { size: "xs", tone: "cyan", top: "10%", left: "52%", opacity: 0.65 },
    { size: "sm", tone: "purple", top: "74%", left: "80%", opacity: 0.8 },
    { size: "xs", tone: "magenta", top: "86%", left: "50%", opacity: 0.7 },
  ];

  const ring3: OrbitDot[] = [
    { size: "sm", tone: "cyan", top: "16%", left: "82%", opacity: 0.75 },
    { size: "xs", tone: "purple", top: "50%", left: "98%", opacity: 0.6 },
    { size: "sm", tone: "magenta", top: "88%", left: "20%", opacity: 0.8 },
    { size: "xs", tone: "cyan", top: "46%", left: "2%", opacity: 0.6 },
  ];

  return (
    <div className="relative mx-auto w-[300px] sm:w-[360px] lg:w-[420px]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--color-accent-purple))]/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--color-accent-magenta))]/10 blur-3xl" />
      </div>

      <div className="relative aspect-square">
        <div className="absolute inset-0 rounded-full border border-dashed border-[rgb(var(--color-accent-purple))]/30" />
        <div className="absolute inset-[10%] rounded-full border border-dashed border-[rgb(var(--color-accent-magenta))]/25" />
        <div className="absolute inset-[20%] rounded-full border border-dashed border-[rgb(var(--color-accent-cyan))]/25" />

        <motion.div
          aria-hidden="true"
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          {ring1.map((d, i) => (
            <span
              key={`r1-${i}`}
              className={`absolute rounded-full ${dotSizeClass[d.size]} ${dotToneClass[d.tone]}`}
              style={{ top: d.top, left: d.left, opacity: d.opacity ?? 0.8 }}
            />
          ))}
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="absolute inset-[10%]"
          animate={{ rotate: -360 }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        >
          {ring2.map((d, i) => (
            <span
              key={`r2-${i}`}
              className={`absolute rounded-full ${dotSizeClass[d.size]} ${dotToneClass[d.tone]}`}
              style={{ top: d.top, left: d.left, opacity: d.opacity ?? 0.75 }}
            />
          ))}
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="absolute inset-[20%]"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          {ring3.map((d, i) => (
            <span
              key={`r3-${i}`}
              className={`absolute rounded-full ${dotSizeClass[d.size]} ${dotToneClass[d.tone]}`}
              style={{ top: d.top, left: d.left, opacity: d.opacity ?? 0.7 }}
            />
          ))}
        </motion.div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-border bg-surface/90 shadow-card backdrop-blur">
            <div className="absolute inset-0 rounded-full border border-[rgb(var(--color-accent-purple))]/30" />

            <img
              src={logo}
              alt="Sunberry"
              className="h-16 w-auto object-contain"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const WhyChooseUsSection = () => {
  const leftItems = [
    {
      img: exp,
      title: "Extensive Experience",
      text: "Our team brings years of industry experience, ensuring every project is handled with professionalism and strong technical expertise.",
    },
    {
      img: innovative,
      title: "Innovative Solutions",
      text: "We deliver modern solutions tailored to your business needs, helping you stay ahead in a competitive market.",
    },
    {
      img: client,
      title: "Client-Centric Approach",
      text: "We prioritize your goals and collaborate closely to deliver measurable outcomes with clear communication.",
    },
  ];

  const rightItems = [
    {
      img: pricing,
      title: "Competitive Pricing",
      text: "Cost-effective solutions without compromising quality—focused on long-term value and ROI.",
    },
    {
      img: timely,
      title: "Timely Delivery",
      text: "We deliver on schedule with predictable execution and strong attention to detail.",
    },
    {
      img: support,
      title: "Reliable Support",
      text: "Dedicated support for ongoing stability, improvements, and smooth operations post-launch.",
    },
  ];

  return (
    <section className="w-full bg-surface py-12 md:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <motion.header
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="text-center"
        >
          <motion.h2
            variants={itemUp}
            className="text-3xl font-semibold text-heading sm:text-4xl"
          >
            Why{" "}
            <span className="text-[rgb(var(--color-accent-magenta))]">
              Choose Us
            </span>
          </motion.h2>

          <motion.p
            variants={itemUp}
            className="mt-3 text-base text-muted md:text-lg"
          >
            Empowering your business with trusted solutions and proven expertise.
          </motion.p>
        </motion.header>

        <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="space-y-8"
          >
            {leftItems.map((it) => (
              <motion.article
                key={it.title}
                variants={itemUp}
                className="flex items-start gap-4 lg:flex-row-reverse lg:text-right"
              >
                <img
                  src={it.img}
                  className="w-8 shrink-0"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-semibold text-[rgb(var(--color-accent-purple))] md:text-xl">
                    {it.title}
                  </h3>
                  <p className="mt-1 text-sm text-body md:text-base">
                    {it.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex justify-center"
          >
            <OrbitLogo />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="space-y-8"
          >
            {rightItems.map((it) => (
              <motion.article
                key={it.title}
                variants={itemUp}
                className="flex items-start gap-4"
              >
                <img
                  src={it.img}
                  className="w-8 shrink-0"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-semibold text-[rgb(var(--color-accent-purple))] md:text-xl">
                    {it.title}
                  </h3>
                  <p className="mt-1 text-sm text-body md:text-base">
                    {it.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;