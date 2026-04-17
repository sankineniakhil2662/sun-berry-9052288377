import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type IndustryAccent = "brand" | "navy" | "purple" | undefined;

type IndustryCardProps = {
  title: string;
  label: string;
  description: string;
  features: string[];
  moreCount?: number;
  ctaLabel: string;
  href: string;
  iconSrc?: string;
  accent?: IndustryAccent;
};

const accentMap: Record<Exclude<IndustryAccent, undefined>, string> = {
  brand: "bg-[rgb(var(--color-accent-purple))]",
  navy: "bg-[#062a64]",
  purple: "bg-[rgb(var(--color-accent-purple))]",
};

const accentDotMap: Record<Exclude<IndustryAccent, undefined>, string> = {
  brand: "bg-[rgb(var(--color-accent-purple))]",
  navy: "bg-[#062a64]",
  purple: "bg-[rgb(var(--color-accent-purple))]",
};

const IndustryCard = ({
  title,
  label,
  description,
  features,
  moreCount = 0,
  ctaLabel,
  href,
  iconSrc,
  accent = "brand",
}: IndustryCardProps) => {
  const accentClass = accentMap[accent] ?? accentMap.brand;
  const dotClass = accentDotMap[accent] ?? accentDotMap.brand;

  return (
    <article className="relative h-full w-full overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="pointer-events-none absolute left-0 top-0 h-20 w-24 rounded-br-[28px] bg-slate-100" />

      <div className="relative flex h-full flex-col p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-xl font-semibold text-white shadow-md sm:h-16 sm:w-16 ${accentClass}`}
          >
            {iconSrc ? (
              <img
                src={iconSrc}
                alt={title}
                className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                loading="lazy"
                draggable={false}
              />
            ) : (
              title.charAt(0)
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="min-w-0 wrap-break-word text-[clamp(1.75rem,7vw,2.5rem)] font-semibold leading-tight tracking-tight text-heading sm:text-4xl">
              {title}
            </h3>

            <p className="mt-2 max-w-full wrap-break-word text-xs font-semibold uppercase tracking-[0.12em] text-muted sm:text-sm sm:tracking-[0.18em]">
              {label}
            </p>
          </div>
        </div>

        <p className="mt-8 text-base leading-8 text-body sm:text-lg">
          {description}
        </p>

        <ul className="mt-8 space-y-5">
          {features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-4">
              <span className={`mt-2 h-3 w-3 shrink-0 rounded-full ${dotClass}`} />
              <span className="text-base font-semibold leading-8 text-heading sm:text-lg">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {moreCount > 0 ? (
          <p className="mt-6 text-base text-body sm:text-lg">
            <span className="font-semibold text-[rgb(var(--color-accent-magenta))]">
              +{moreCount}
            </span>{" "}
            more features
          </p>
        ) : null}

        <div className="mt-auto flex justify-end pt-8">
          <Link
            to={href}
            aria-label={ctaLabel}
            className={`inline-flex h-12 w-12 items-center justify-center rounded-full text-white transition-transform duration-300 hover:scale-105 ${accentClass}`}
          >
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default IndustryCard;