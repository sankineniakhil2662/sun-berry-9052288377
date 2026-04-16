import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

import client1 from "../../assets/images/clients/STMfinal.jpg";
import client2 from "../../assets/images/clients/aptivission.png";
import client3 from "../../assets/images/clients/discoveryou.jpeg";
import client4 from "../../assets/images/clients/araweddings.png";
import client5 from "../../assets/images/clients/componder.png";
import client6 from "../../assets/images/clients/reswap.svg";
import client7 from "../../assets/images/clients/srihari.svg";
import client8 from "../../assets/images/clients/rrglobalmigrations.jpeg";
import client9 from "../../assets/images/clients/tejaswi.png";
import client10 from "../../assets/images/clients/telanganatimes.png";
import client11 from "../../assets/images/clients/vissionss.png";

const clients = [
  { src: client1, alt: "STM" },
  { src: client2, alt: "Aptivision" },
  { src: client3, alt: "ARA Weddings" },
  { src: client4, alt: "Componder" },
  { src: client5, alt: "Discover You" },
  { src: client6, alt: "Reswap" },
  { src: client7, alt: "RR Global Migrations" },
  { src: client8, alt: "Srihari" },
  { src: client9, alt: "Tejaswi" },
  { src: client10, alt: "Telangana Times" },
  { src: client11, alt: "Vissionss" },
];

export default function ClientsSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [halfWidth, setHalfWidth] = useState(0);

  const items = useMemo(() => [...clients, ...clients], []);

  // Measure the width of HALF the duplicated track (so the loop is seamless)
  useLayoutEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => {
      // total width includes duplicated items -> half = one full set
      const total = el.scrollWidth;
      setHalfWidth(Math.floor(total / 2));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section className="relative overflow-hidden bg-bg py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-heading sm:text-4xl">
            Trusted by{" "}
            <span className="text-[rgb(var(--color-accent-purple))]">
              Innovative Companies
            </span>
          </h2>
          <p className="mt-3 text-sm text-muted sm:text-base">
            Businesses across industries rely on Sunberry to build scalable digital products and platforms.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative mt-12 overflow-hidden">
          {/* Fade edges (IMPORTANT: no from-bg) */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-linear-to-r from-[rgb(var(--color-bg))] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-linear-to-l from-[rgb(var(--color-bg))] to-transparent" />

          <motion.div
            className="flex w-max gap-10 py-2"
            ref={trackRef}
            animate={halfWidth ? { x: [0, -halfWidth] } : { x: 0 }}
            transition={{
              duration: halfWidth ? Math.max(18, halfWidth / 70) : 20, // speed stays consistent
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {items.map((c, index) => (
              <div
                key={`${c.alt}-${index}`}
                className="flex h-20 w-44 items-center justify-center rounded-card border border-border bg-surface px-6 py-4 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-hover"
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  className="h-10 w-auto object-contain opacity-90 transition duration-300 hover:opacity-100"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}