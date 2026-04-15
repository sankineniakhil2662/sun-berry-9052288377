import React from "react";
import { motion } from "framer-motion";

import CenterImg from "../../assets/slogo.png";
import exp from "../../assets/exp.jpg";
import innovative from "../../assets/innovative.jpg";
import client from "../../assets/client.jpg";
import pricing from "../../assets/pricing.jpg";
import timely from "../../assets/timely.jpg";
import support from "../../assets/support.jpg";

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

function OrbitCenterImage({ src, alt }: { src: string; alt: string }) {
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
    <div className="relative mx-auto w-56 md:w-64 lg:w-[360px]">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--color-accent-purple))]/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--color-accent-magenta))]/10 blur-3xl" />
      </div>

      <div className="relative aspect-square">
        {/* rings */}
        <div className="absolute inset-0 rounded-full border border-dashed border-[rgb(var(--color-accent-purple))]/30" />
        <div className="absolute inset-[10%] rounded-full border border-dashed border-[rgb(var(--color-accent-magenta))]/25" />
        <div className="absolute inset-[20%] rounded-full border border-dashed border-[rgb(var(--color-accent-cyan))]/25" />

        {/* rotating dots */}
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

        {/* center image card */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-border bg-surface/90 shadow-card backdrop-blur sm:h-24 sm:w-24 lg:h-36 lg:w-36">
            <div className="absolute inset-0 rounded-full border border-[rgb(var(--color-accent-purple))]/25" />
            <img
              src={src}
              alt={alt}
              className="h-14 w-14 object-contain sm:h-28 sm:w-28 lg:h-20 lg:w-20"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const AboutFeatures = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mb-10 px-4 text-center">
        <h2 className="text-3xl font-semibold text-green-700 md:text-4xl">About Us</h2>
        <p className="mt-2 text-base text-gray-800 md:text-lg">
          Empowering businesses through innovative IT solutions and services.
        </p>
      </div>

      <div className="grid items-center gap-10 px-4 md:px-12 lg:grid-cols-3 lg:px-20">
        {/* LEFT */}
        <div className="space-y-8">
          {[
            {
              img: exp,
              title: "Experience",
              text:
                "Years of proven success in delivering enterprise-grade IT services across industries including healthcare, finance and logistics.",
            },
            {
              img: innovative,
              title: "Our Solutions",
              text:
                "From cloud integration to custom software development, we offer scalable and secure solutions tailored to your goals.",
            },
            {
              img: client,
              title: "Agile Approach",
              text:
                "Our iterative and client-focused methodology ensures faster deployment and measurable business outcomes.",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
              <img src={item.img} alt="" className="w-8 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 md:text-xl">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-800 md:text-base">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER (Orbit animation instead of plain image) */}
        <div className="flex justify-center">
          <OrbitCenterImage src={CenterImg} alt="About Illustration" />
        </div>

        {/* RIGHT */}
        <div className="space-y-8">
          {[
            {
              img: pricing,
              title: "Transparent Pricing",
              text:
                "Flexible and clear pricing models that suit startups to enterprises without compromising quality or scope.",
            },
            {
              img: timely,
              title: "On-Time Delivery",
              text:
                "We value your time. Our agile teams ensure project milestones are met without delays or compromise in quality.",
            },
            {
              img: support,
              title: "24/7 Support",
              text:
                "Our technical team is always available to support your infrastructure, apps, and ongoing tech needs anytime, anywhere.",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <img src={item.img} alt="" className="w-8 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 md:text-xl">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-800 md:text-base">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;