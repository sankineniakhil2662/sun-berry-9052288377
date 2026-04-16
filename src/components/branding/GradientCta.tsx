import ScrollReveal from "./ScrollReveal";

type Cta = { label: string; href: string };
type Accent = "purple-magenta" | "purple-cyan";

const gradientFor = (a: Accent) => {
  if (a === "purple-cyan")
    return "from-[rgb(var(--color-accent-purple))] via-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-cyan))]";
  return "from-[rgb(var(--color-accent-purple))] via-[rgb(var(--color-accent-magenta))] to-[rgb(var(--color-accent-purple))]";
};

const accentOnHover = (a: Accent) =>
  a === "purple-cyan"
    ? "bg-[rgb(var(--color-accent-magenta))]/30"
    : "bg-[rgb(var(--color-accent-cyan))]/30";

type Props = {
  title: string;
  description?: string;
  primary: Cta;
  secondary?: Cta;
  accent?: Accent;
};

export default function GradientCta({
  title,
  description,
  primary,
  secondary,
  accent = "purple-magenta",
}: Props) {
  return (
    <section className="w-full bg-bg py-20">
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-10">
        <ScrollReveal>
          <div
            className={`relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${gradientFor(
              accent
            )} p-10 text-center shadow-card sm:p-14`}
          >
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
              <div className={`absolute -right-24 -bottom-24 h-72 w-72 rounded-full ${accentOnHover(accent)} blur-3xl`} />
            </div>

            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
              {description ? (
                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
                  {description}
                </p>
              ) : null}

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={primary.href}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-[rgb(var(--color-accent-purple))] shadow-card transition hover:shadow-hover"
                >
                  {primary.label}
                </a>
                {secondary ? (
                  <a
                    href={secondary.href}
                    className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/20"
                  >
                    {secondary.label}
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
