import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Accent = "purple" | "magenta" | "cyan" | "purple-magenta" | "purple-cyan";

const tileBg: Record<Accent, string> = {
  purple: "bg-[rgb(var(--color-accent-purple))]/10",
  magenta: "bg-[rgb(var(--color-accent-magenta))]/10",
  cyan: "bg-[rgb(var(--color-accent-cyan))]/10",
  "purple-magenta":
    "bg-gradient-to-br from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-magenta))]",
  "purple-cyan":
    "bg-gradient-to-br from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-cyan))]",
};

const iconColor: Record<Accent, string> = {
  purple: "text-[rgb(var(--color-accent-purple))]",
  magenta: "text-[rgb(var(--color-accent-magenta))]",
  cyan: "text-[rgb(var(--color-accent-cyan))]",
  "purple-magenta": "text-white",
  "purple-cyan": "text-white",
};

const sweep: Record<Accent, string> = {
  purple: "from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-magenta))]",
  magenta: "from-[rgb(var(--color-accent-magenta))] to-[rgb(var(--color-accent-purple))]",
  cyan: "from-[rgb(var(--color-accent-cyan))] to-[rgb(var(--color-accent-purple))]",
  "purple-magenta": "from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-magenta))]",
  "purple-cyan": "from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-cyan))]",
};

type Props = {
  icon?: LucideIcon;
  number?: string;
  title: string;
  description?: string;
  bullets?: string[];
  accent?: Accent;
};

export default function FeatureCard({
  icon: Icon,
  number,
  title,
  description,
  bullets,
  accent = "purple-magenta",
}: Props) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-hover sm:p-7">
      {(Icon || number) && (
        <div className="flex items-center justify-between">
          {Icon ? (
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${tileBg[accent]} ${
                accent.includes("-") ? "shadow-card" : ""
              }`}
            >
              <Icon className={`h-6 w-6 ${iconColor[accent]}`} />
            </div>
          ) : (
            <span />
          )}
          {number ? (
            <span className="text-sm font-semibold tracking-widest text-muted">{number}</span>
          ) : null}
        </div>
      )}

      <h3 className="mt-5 text-lg font-semibold tracking-tight text-heading">{title}</h3>

      {description ? (
        <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
      ) : null}

      {bullets && bullets.length > 0 ? (
        <ul className="mt-4 space-y-2.5">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm leading-6 text-body">
              <Check className="mt-0.5 h-4 w-4 flex-none text-[rgb(var(--color-accent-purple))]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div
        className={`absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${sweep[accent]} transition-transform duration-300 group-hover:scale-x-100`}
      />
    </article>
  );
}
