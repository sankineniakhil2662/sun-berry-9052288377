import { services } from "../../../data/services";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Service {
  id: number;
  title: string;
  desc: string;
  imageSrc: string;
  href: string;
  ctaLabel?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

const TopServices = () => {
  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-[#062a64]
        py-16
        text-white
        after:pointer-events-none after:absolute after:inset-0
        after:bg-[radial-gradient(ellipse_at_right,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0)_55%)]
      "
    >
      {/* subtle left glow (same as footer) */}
      {/* squared grid background (same style as HeroSection) */}
      <div className="pointer-events-none absolute inset-0">
        {/* subtle square grid */}
        <div className="absolute inset-0 opacity-40">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[56px_56px]" />
        </div>
      </div>


      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--color-accent-magenta))]">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Project Execution with{" "}
            <span className="bg-linear-to-r from-[rgb(var(--color-accent-purple))] via-[rgb(var(--color-accent-magenta))] to-[rgb(var(--color-accent-cyan))] bg-clip-text text-transparent">
              Quality-First Approach
            </span>
          </h2>
          <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
            A clear, proven delivery flow that keeps teams aligned and outcomes reliable.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-14 grid gap-10 lg:grid-cols-2">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-linear-to-b from-transparent via-white/30 to-transparent lg:block" />

          {(services as Service[]).map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease, delay: index * 0.05 }}
                className={`relative flex ${isLeft ? "lg:justify-end" : "lg:justify-start"}`}
                
              >


                {/* Card */}
                <div
                  className={`group w-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--color-accent-magenta))]/40 hover:bg-white/10 hover:shadow-hover sm:p-7 lg:max-w-md ${isLeft ? "lg:mr-28" : "lg:ml-28"
                    }`}
                >
                  <div className="flex items-center gap-4">
                    {/* ONLY this round is white */}
                    <div className="flex h-30 w-30 items-center justify-center rounded-full bg-white shadow-md">
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        className="h-20 w-20 object-contain"
                        loading="lazy"
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-[rgb(var(--color-accent-magenta))]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                    {item.desc}
                  </p>

                  <div className="mt-6">
                    <Link
                      to={item.href}
                      className="
                        inline-flex w-full items-center justify-center gap-2
                        rounded-button bg-brand px-6 py-3
                        text-sm font-semibold text-white
                        shadow-card transition
                        hover:bg-brandHover
                        focus:outline-none focus:ring-2 focus:ring-white/30
                      "
                    >
                      Explore {item.title}
                      <span>→</span>
                    </Link>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopServices;
