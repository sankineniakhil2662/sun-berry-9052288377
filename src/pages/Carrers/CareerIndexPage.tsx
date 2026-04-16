import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "../../components/branding";
import { CAREER_POSTS, CAREER_DEPARTMENTS, formatDate, type CareerPost } from "./careers.data";

type SortKey = "oldest" | "newest";

const PAGE_SIZE = 4;

const pillBase =
  "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-muted";

const dot = (className: string) => <span className={`h-2 w-2 rounded-full ${className}`} />;

function StatPill({ label, dotClass }: { label: string; dotClass: string }) {
  return (
    <div className={pillBase}>
      {dot(dotClass)}
      <span>{label}</span>
    </div>
  );
}

function JobCard({ post }: { post: CareerPost }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-0.5 hover:border-[rgb(var(--color-accent-purple))]/40 hover:shadow-hover">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-[rgb(var(--color-accent-purple))]/10 blur-3xl transition group-hover:bg-[rgb(var(--color-accent-purple))]/20"
      />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold text-heading sm:text-xl">
            {post.title}
          </h3>
          <p className="mt-1 text-sm text-muted">
            {post.department} • {post.location}
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3 py-1 text-xs font-semibold text-muted">
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--color-accent-purple))]" />
          {post.mode}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-body">{post.shortDescription}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-border bg-bg px-3 py-1 text-xs font-semibold text-muted">
          {post.type}
        </span>
        <span className="rounded-full border border-border bg-bg px-3 py-1 text-xs font-semibold text-muted">
          {post.experience}
        </span>
        <span className="rounded-full border border-border bg-bg px-3 py-1 text-xs font-semibold text-muted">
          Posted {formatDate(post.postedOn)}
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <Link
          to={`/careers/${post.slug}`}
          className="text-sm font-semibold text-[rgb(var(--color-accent-purple))] underline underline-offset-4"
        >
          View Details
        </Link>

        <Link
          to={`/careers/${post.slug}`}
          className="rounded-button bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-brandHover"
        >
          Apply Now →
        </Link>
      </div>
    </article>
  );
}

export default function CareerIndexPage() {
  const [department, setDepartment] = useState<(typeof CAREER_DEPARTMENTS)[number]>("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("oldest");
  const [page, setPage] = useState(1);

  const posts = useMemo(() => {
    const q = query.trim().toLowerCase();

    const filtered = CAREER_POSTS.filter((p) => {
      const deptOk = department === "All" ? true : p.department === department;
      if (!deptOk) return false;

      if (!q) return true;
      const hay = `${p.title} ${p.department} ${p.location} ${p.type} ${p.mode}`.toLowerCase();
      return hay.includes(q);
    });

    const sorted = [...filtered].sort((a, b) => {
      const da = new Date(a.postedOn).getTime();
      const db = new Date(b.postedOn).getTime();
      return sort === "oldest" ? da - db : db - da;
    });

    return sorted;
  }, [department, query, sort]);

  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);

  const pageItems = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return posts.slice(start, start + PAGE_SIZE);
  }, [posts, safePage]);

  // reset page when filters change
  React.useEffect(() => {
    setPage(1);
  }, [department, query, sort]);

  const openPositions = posts.length;

  return (
    <main className="bg-bg">
      {/* HERO */}
      <section className="relative w-full overflow-hidden border-b border-border">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-[rgb(var(--color-accent-purple))]/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[rgb(var(--color-accent-magenta))]/15 blur-3xl" />
          <div className="absolute top-1/3 right-1/3 h-64 w-64 rounded-full bg-[rgb(var(--color-accent-cyan))]/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--color-accent-magenta))]" />
              Careers
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-heading sm:text-5xl lg:text-6xl">
              Join Our{" "}
              <span className="bg-gradient-to-r from-[rgb(var(--color-accent-purple))] via-[rgb(var(--color-accent-magenta))] to-[rgb(var(--color-accent-cyan))] bg-clip-text text-transparent">
                Amazing Team
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
              Build the future with us. We&apos;re looking for passionate individuals to join our growing
              team and create innovative solutions together.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <StatPill
                label={`${openPositions} Open Positions`}
                dotClass={openPositions > 0 ? "bg-emerald-500" : "bg-border"}
              />
              <StatPill label="Remote & Hybrid" dotClass="bg-[rgb(var(--color-accent-cyan))]" />
              <StatPill label="Great Benefits" dotClass="bg-[rgb(var(--color-accent-purple))]" />
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[320px_1fr]">
          {/* LEFT FILTER */}
          <aside className="rounded-card border border-border bg-surface p-6 shadow-card">
            <h2 className="text-lg font-semibold text-heading">Filter by Job Title</h2>

            <div className="mt-5 space-y-2">
              {CAREER_DEPARTMENTS.map((d) => {
                const active = d === department;
                return (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDepartment(d)}
                    className={[
                      "flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition",
                      active
                        ? "border-[rgb(var(--color-accent-purple))] bg-[rgb(var(--color-accent-purple))] text-white shadow-card"
                        : "border-border bg-bg text-heading hover:border-[rgb(var(--color-accent-purple))]",
                    ].join(" ")}
                  >
                    <span>{d}</span>
                    <span className={active ? "text-white/80" : "text-muted"}>
                      {d === "All" ? CAREER_POSTS.length : CAREER_POSTS.filter((p) => p.department === d).length}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-bg p-5 text-center">
              <p className="text-3xl font-extrabold text-[rgb(var(--color-accent-magenta))]">
                {openPositions}
              </p>
              <p className="mt-1 text-sm text-muted">open positions</p>
            </div>
          </aside>

          {/* RIGHT LIST */}
          <div>
            {/* toolbar */}
            <div className="rounded-card border border-border bg-surface p-4 shadow-card">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="rounded-2xl border border-border bg-bg px-4 py-3">
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search by role, skills, or keywords..."
                      className="w-full bg-transparent text-sm text-heading placeholder:text-muted focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 md:justify-end">
                  <div className="text-sm text-muted">
                    Page {safePage} of {totalPages} • {posts.length} roles
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted">Sort by:</span>
                    <select
                      value={sort}
                      onChange={(e) => setSort(e.target.value as SortKey)}
                      className="rounded-2xl border border-border bg-bg px-4 py-2 text-sm font-semibold text-heading focus:outline-none"
                    >
                      <option value="oldest">Oldest</option>
                      <option value="newest">Newest</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* list */}
            <div className="mt-6 space-y-6">
              {pageItems.length === 0 ? (
                <div className="rounded-card border border-border bg-surface p-10 text-center shadow-card">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-bg">
                    <span className="text-2xl">💼</span>
                  </div>
                  <p className="mt-4 text-sm font-semibold text-heading">
                    We currently don&apos;t have active openings.
                  </p>
                  <p className="mx-auto mt-2 max-w-md text-sm text-muted">
                    Please check back soon or contact our team for upcoming opportunities.
                  </p>

                  <div className="mt-6 flex items-center justify-center gap-3">
                    <Link
                      to="/contact"
                      className="rounded-button bg-brand px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brandHover"
                    >
                      Contact Us
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setDepartment("All");
                        setQuery("");
                      }}
                      className="rounded-button border border-border bg-bg px-6 py-3 text-sm font-semibold text-heading transition hover:bg-surface"
                    >
                      Reset Filters
                    </button>
                  </div>
                </div>
              ) : (
                pageItems.map((p, idx) => (
                  <ScrollReveal key={p.id} delay={idx * 0.05}>
                    <JobCard post={p} />
                  </ScrollReveal>
                ))
              )}
            </div>

            {/* pagination */}
            {posts.length > PAGE_SIZE ? (
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-card border border-border bg-surface p-4 shadow-card">
                <button
                  type="button"
                  onClick={() => setPage((v) => Math.max(1, v - 1))}
                  disabled={safePage === 1}
                  className="rounded-2xl border border-border bg-bg px-4 py-2 text-sm font-semibold text-heading transition hover:bg-surface disabled:opacity-50"
                >
                  ← Prev
                </button>

                <div className="text-sm font-semibold text-muted">
                  {safePage} / {totalPages}
                </div>

                <button
                  type="button"
                  onClick={() => setPage((v) => Math.min(totalPages, v + 1))}
                  disabled={safePage === totalPages}
                  className="rounded-2xl border border-border bg-bg px-4 py-2 text-sm font-semibold text-heading transition hover:bg-surface disabled:opacity-50"
                >
                  Next →
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}