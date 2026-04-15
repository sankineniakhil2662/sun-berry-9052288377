import React from "react";
import { Link, useParams } from "react-router-dom";
import { getCareerBySlug, formatDate } from "./careers.data";

export default function CareerPostPage() {
  const { slug } = useParams();
  const post = slug ? getCareerBySlug(slug) : undefined;

  if (!post) {
    return (
      <main className="bg-bg">
        <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <div className="rounded-card border border-border bg-surface p-10 text-center shadow-card">
            <p className="text-lg font-semibold text-heading">Job not found</p>
            <p className="mt-2 text-sm text-muted">The job you’re looking for doesn’t exist.</p>
            <Link
              to="/careers"
              className="mt-6 inline-flex rounded-button bg-brand px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brandHover"
            >
              Back to Careers
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-bg">
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
          <Link
            to="/careers"
            className="text-sm font-semibold text-[rgb(var(--color-accent-purple))] underline underline-offset-4"
          >
            ← Back to Careers
          </Link>

          <h1 className="mt-4 text-3xl font-semibold text-heading sm:text-4xl">
            {post.title}
          </h1>

          <p className="mt-2 text-sm text-muted">
            {post.department} • {post.location} • {post.mode} • {post.type} • {post.experience} • Posted{" "}
            {formatDate(post.postedOn)}
          </p>

          <div className="mt-6 rounded-card border border-border bg-bg p-6">
            <p className="text-sm leading-relaxed text-body">{post.shortDescription}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:careers@tyltech.com?subject=Application%20for%20${encodeURIComponent(
                  post.title
                )}`}
                className="rounded-button bg-brand px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brandHover"
              >
                Apply via Email →
              </a>
              <Link
                to="/contact"
                className="rounded-button border border-border bg-surface px-6 py-3 text-sm font-semibold text-heading transition hover:bg-bg"
              >
                Talk to HR
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-card border border-border bg-surface p-6 shadow-card">
            <h2 className="text-lg font-semibold text-heading">Responsibilities</h2>
            <ul className="mt-4 space-y-3">
              {post.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[rgb(var(--color-accent-purple))]" />
                  <span className="text-sm leading-relaxed text-body">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-card border border-border bg-surface p-6 shadow-card">
            <h2 className="text-lg font-semibold text-heading">Requirements</h2>
            <ul className="mt-4 space-y-3">
              {post.requirements.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[rgb(var(--color-accent-magenta))]" />
                  <span className="text-sm leading-relaxed text-body">{r}</span>
                </li>
              ))}
            </ul>

            {post.niceToHave?.length ? (
              <>
                <div className="mt-6 h-px bg-border" />
                <h3 className="mt-6 text-sm font-semibold text-heading">Nice to have</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.niceToHave.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-bg px-3 py-1 text-xs font-semibold text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}