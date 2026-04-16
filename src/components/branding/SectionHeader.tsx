import type { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  maxWidth?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  maxWidth = "max-w-3xl",
}: Props) {
  const alignCls = align === "center" ? "mx-auto text-center" : "";
  return (
    <ScrollReveal className={`${alignCls} ${maxWidth}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--color-accent-magenta))]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`${eyebrow ? "mt-3" : ""} text-3xl font-semibold tracking-tight text-heading sm:text-4xl`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{subtitle}</p>
      ) : null}
    </ScrollReveal>
  );
}
