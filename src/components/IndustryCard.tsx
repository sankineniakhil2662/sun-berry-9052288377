import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type IndustryCardProps = {
  title: string; // "Medical"
  label: string; // "HEALTHCARE INNOVATIONS"
  description: string;
  features: string[]; // show first 3
  moreCount?: number; // "+2 more features"
  ctaLabel: string; // "Explore Medical Tech"
  href: string; // "/industries/medical"
  iconSrc?: string; // optional (top-left icon)
  accent?: "brand" | "navy" | "purple"; // for button/bg flavor
};

const ease = [0.2, 0.8, 0.2, 1] as const;

const accentStyles = (accent?: IndustryCardProps["accent"]) => {
  switch (accent) {
    case "navy":
      return {
        btn: "bg-[#062a64] hover:bg-[#062a64]/90",
        bullet: "bg-[#062a64]",
        iconBg: "bg-[#062a64]",
      };
    case "purple":
      return {
        btn: "bg-[rgb(var(--color-accent-purple))] hover:opacity-90",
        bullet: "bg-[rgb(var(--color-accent-purple))]",
        iconBg: "bg-[rgb(var(--color-accent-purple))]",
      };
    case "brand":
    default:
      return {
        btn: "bg-brand hover:bg-brandHover",
        bullet: "bg-brand",
        iconBg: "bg-brand",
      };
  }
};

const IndustryCard = ({
  title,
  label,
  description,
  features,
  moreCount,
  ctaLabel,
  href,
  iconSrc,
  accent = "brand",
}: IndustryCardProps) => {
  const a = accentStyles(accent);

  const shown = features.slice(0, 3);
  const computedMore =
    typeof moreCount === "number"
      ? moreCount
      : Math.max(features.length - shown.length, 0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease }}
      className="group relative flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface shadow-card transition hover:shadow-hover"
    >
      {/* top-left curved tint like screenshot */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-slate-200/70" />

      <div className="relative flex h-full flex-col p-8">
        {/* top row: icon + title */}
        <div className="flex items-start justify-between gap-6">
          {/* icon block (top-left) */}
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease, delay: 0.05 }}
            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${a.iconBg} shadow-card`}
          >
            {/* inner layer for premium feel */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              {iconSrc ? (
                <img
                  src={iconSrc}
                  alt=""
                  className="h-7 w-7 object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="text-xl font-bold uppercase text-white">
                  {title.charAt(0)}
                </span>
              )}
            </div>

          </motion.div>

          {/* title block (right aligned like screenshot) */}
          <div className="min-w-0 text-right">
            <h3 className="text-4xl font-semibold text-heading sm:text-5xl">
              {title}
            </h3>
            <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-muted">
              {label}
            </p>
          </div>
        </div>

        {/* description */}
        <p className="mt-8 text-lg leading-relaxed text-body">{description}</p>

        {/* features list */}
        <ul className="mt-8 space-y-6">
          {shown.map((f) => (
            <li key={f} className="flex items-start gap-4">
              <span className="mt-2 flex h-3 w-3 items-center justify-center">
                <span className={`h-3 w-3 rounded-full ${a.bullet}`} />
              </span>
              <span className="text-lg font-semibold text-heading/80">{f}</span>
            </li>
          ))}
        </ul>

        {/* more features */}
        {computedMore > 0 ? (
          <div className="mt-6">
            <span className="text-base font-semibold text-[rgb(var(--color-accent-magenta))]">
              +{computedMore}
            </span>
            <span className="text-base text-body"> more features</span>
          </div>
        ) : null}

        {/* CTA pinned to bottom */}
        <div className="relative mt-auto pt-10">
          <Link to={href} className="absolute bottom-0 right-0">
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25, ease }}
              className={`
        flex h-12 w-12 items-center justify-center
        rounded-full
        bg-[rgb(var(--color-accent-purple))]
        text-white
        shadow-card
        transition
        hover:shadow-lg
        ${a.btn}
      `}
              aria-label="Navigate"
            >
              <span aria-hidden="true" className="text-xl leading-none">
                →
              </span>
            </motion.div>
          </Link>
        </div>

      </div>

      {/* soft bottom shadow highlight */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.article>
  );
};

export default IndustryCard;
