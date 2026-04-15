import { ArrowRight } from "lucide-react";
import type { InternshipProgramsData } from "../InternshipPrograms.data";

type TrackCardProps = {
  title: string;
  items: string[];
};

const TECH_TRACKS: TrackCardProps[] = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"] },
  { title: "Backend", items: ["Node.js", "Java / Spring", ".NET", "REST APIs", "Databases", "Auth"] },
  { title: "Full-Stack", items: ["React + Node", "API Integration", "DB Design", "Deployment Basics"] },
  { title: "Mobile", items: ["React Native", "Android (Kotlin)", "iOS (Swift)", "Firebase"] },
  { title: "UI/UX", items: ["Wireframes", "Prototyping", "Design Systems", "Usability Testing"] },
  { title: "QA / Testing", items: ["Test Cases", "Bug Reporting", "Regression", "Automation Basics"] },
];

const BUSINESS_TRACKS: TrackCardProps[] = [
  { title: "BDA / BDE", items: ["Lead Gen", "Cold Outreach", "Pitching", "CRM Updates"] },
  { title: "Marketing", items: ["Social Media", "Content", "SEO Basics", "Campaign Support"] },
  { title: "Admin / Ops", items: ["Documentation", "Coordination", "Process Support", "Reporting"] },
  { title: "HR", items: ["Screening", "Scheduling", "Onboarding Support", "Records"] },
  { title: "Finance", items: ["Invoices", "Expense Tracking", "MIS Support", "Reconciliation Basics"] },
];

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-body">
      {label}
    </span>
  );
}

function TrackCard({ title, items }: TrackCardProps) {
  return (
    <div className="rounded-card border border-border bg-surface p-5 shadow-card">
      <p className="text-sm font-semibold text-heading">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((x) => (
          <Pill key={x} label={x} />
        ))}
      </div>
    </div>
  );
}

export default function InternshipHero({ data }: { data: InternshipProgramsData }) {
  // ✅ fallback so it never crashes
  const ctaHref = data?.cta?.href ?? "/contact";
  const ctaLabel = data?.cta?.label ?? "Apply Now";

  return (
    <section className="w-full bg-bg py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
            Internship Programs
          </h1>

          <p className="mt-5 text-base font-semibold text-heading sm:text-lg">
            We help you find the <span className="text-brand">right internship track</span> for your career.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Structured learning, mentorship, and real project exposure—so you can build industry-ready skills.
          </p>

          <div className="mt-10">
            <a
              href={ctaHref}
              className="group inline-flex items-stretch overflow-hidden rounded-xl border border-border bg-surface shadow-card transition hover:shadow-hover"
            >
              <span className="flex items-center justify-center bg-brand px-5">
                <ArrowRight className="h-5 w-5 text-white transition group-hover:translate-x-0.5" />
              </span>

              <span className="flex items-center px-6 py-4 text-sm font-semibold text-heading sm:text-base">
                {ctaLabel}
              </span>
            </a>
          </div>
        </div>

        {/* Tracks */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Internship Tracks
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-heading">Technology Internships</h2>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {TECH_TRACKS.map((t) => (
                <TrackCard key={t.title} title={t.title} items={t.items} />
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Career Tracks
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-heading">
              Business, Sales & Operations
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {BUSINESS_TRACKS.map((t) => (
                <TrackCard key={t.title} title={t.title} items={t.items} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-card border border-border bg-surface p-6 shadow-card">
          <p className="text-sm font-semibold text-heading">What you’ll get</p>
          <p className="mt-2 text-sm leading-relaxed text-body">
            Track selection, weekly tasks, project reviews, interview prep, and a clear portfolio roadmap.
          </p>
        </div>
      </div>
    </section>
  );
}