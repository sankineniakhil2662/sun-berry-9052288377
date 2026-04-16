import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, FileText, Sparkles } from "lucide-react";
import { ScrollReveal, SectionHeader } from "../../components/branding";

const SERVICES = [
  "Web Development",
  "Mobile App Development",
  "UI / UX Design",
  "Digital Marketing",
  "Data Analytics",
  "AI Solutions",
  "Oracle Fusion Services",
  "Game Development",
  "E-Learning",
  "Internship Programs",
];

const BUDGETS = ["< $5k", "$5k – $15k", "$15k – $50k", "$50k – $150k", "$150k+"];
const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "6+ months", "Flexible"];

const PROCESS = [
  { no: "01", title: "Share details", desc: "Submit your project requirements." },
  { no: "02", title: "Discovery call", desc: "We'll reach out within 1 business day." },
  { no: "03", title: "Tailored proposal", desc: "Receive a detailed plan and quote." },
  { no: "04", title: "Kickoff", desc: "Sign off and start with your dedicated team." },
];

const BENEFITS = [
  "No-obligation, free consultation",
  "Response within 1 business day",
  "Fixed-scope or milestone-based pricing",
  "NDAs available on request",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-bg">
      <section className="relative w-full overflow-hidden pt-20 pb-16 sm:pt-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-[rgb(var(--color-accent-purple))]/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[rgb(var(--color-accent-magenta))]/15 blur-3xl" />
          <div className="absolute top-1/3 right-1/3 h-64 w-64 rounded-full bg-[rgb(var(--color-accent-cyan))]/10 blur-3xl" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted backdrop-blur">
              <FileText className="h-3.5 w-3.5 text-[rgb(var(--color-accent-magenta))]" />
              Request a Quote
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-heading sm:text-5xl lg:text-6xl">
              Let's scope your{" "}
              <span className="bg-gradient-to-r from-[rgb(var(--color-accent-purple))] via-[rgb(var(--color-accent-magenta))] to-[rgb(var(--color-accent-cyan))] bg-clip-text text-transparent">
                next big project
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Share your goals and timeline — we'll reply with a tailored proposal, realistic estimate,
              and a clear path to delivery within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full pb-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_360px] lg:px-10">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-card sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full bg-[rgb(var(--color-accent-purple))]/10 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-[rgb(var(--color-accent-magenta))]/10 blur-3xl"
              />

              {submitted ? (
                <div className="relative flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-magenta))] text-white shadow-card">
                    <Check className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold tracking-tight text-heading">
                    Thanks, {form.name || "there"} — we got your request.
                  </h2>
                  <p className="mt-3 max-w-lg text-base leading-7 text-muted">
                    Our team will reach out within 1 business day with next steps and a tailored proposal.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" required>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        className={fieldInputCls}
                      />
                    </Field>
                    <Field label="Work email" required>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className={fieldInputCls}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Company">
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className={fieldInputCls}
                      />
                    </Field>
                    <Field label="Phone (optional)">
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 555 000 1234"
                        className={fieldInputCls}
                      />
                    </Field>
                  </div>

                  <Field label="Service of interest" required>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className={fieldInputCls}
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Estimated budget">
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className={fieldInputCls}
                      >
                        <option value="">Select a range</option>
                        {BUDGETS.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Timeline">
                      <select
                        name="timeline"
                        value={form.timeline}
                        onChange={handleChange}
                        className={fieldInputCls}
                      >
                        <option value="">Select a timeline</option>
                        {TIMELINES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Tell us about your project" required>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Goals, audience, key features, references…"
                      className={`${fieldInputCls} resize-none`}
                    />
                  </Field>

                  <div className="mt-2 flex items-center justify-between gap-4">
                    <p className="text-xs text-muted">
                      We respect your privacy. Your details stay with our team.
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-card transition hover:shadow-hover"
                    >
                      Send request
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.1}>
            <aside className="space-y-6">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-card">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-8 -right-8 h-36 w-36 rounded-full bg-[rgb(var(--color-accent-cyan))]/10 blur-3xl"
                />
                <div className="relative flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-magenta))] text-white shadow-card">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-heading">
                    What you get
                  </h3>
                </div>
                <ul className="relative mt-5 space-y-3.5">
                  {BENEFITS.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gradient-to-br from-[rgb(var(--color-accent-purple))] to-[rgb(var(--color-accent-cyan))] text-white">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm leading-6 text-body">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-surface p-6 shadow-card">
                <h3 className="text-lg font-semibold tracking-tight text-heading">Prefer email?</h3>
                <p className="mt-2 text-sm leading-6 text-body">
                  Reach our team directly — we reply within one business day.
                </p>
                <a
                  href="mailto:hello@tyl-tech.com"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--color-accent-purple))] hover:underline"
                >
                  hello@tyl-tech.com
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      <section className="w-full bg-surface/40 py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <SectionHeader
            eyebrow="What happens next"
            title="A simple, transparent path"
            subtitle="From your first message to project kickoff, every step is structured for speed and clarity."
            align="center"
            maxWidth="max-w-2xl"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, idx) => (
              <ScrollReveal key={step.no} delay={idx * 0.05}>
                <div className="relative h-full rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-hover">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-border bg-bg font-bold text-brand">
                      {step.no}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-[rgb(var(--color-accent-magenta))]/30 to-transparent" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold tracking-tight text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const fieldInputCls =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-heading placeholder:text-muted/70 transition focus:border-[rgb(var(--color-accent-purple))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-accent-purple))]/20";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
        {label}
        {required ? <span className="ml-1 text-[rgb(var(--color-accent-magenta))]">*</span> : null}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
