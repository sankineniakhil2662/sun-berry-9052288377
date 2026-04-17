import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import logo from "../../assets/SLOGO .png";

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Youtube", href: "https://youtube.com", icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#062a64] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[rgb(var(--color-accent-purple))]/14 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[rgb(var(--color-accent-cyan))]/12 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[rgb(var(--color-accent-magenta))]/12 blur-3xl" />

        <div className="absolute inset-0 opacity-15">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-size-[72px_72px]" />
        </div>

        <svg
          className="absolute bottom-10 left-0 h-28 w-[140%] opacity-20"
          viewBox="0 0 1440 220"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 120 C 180 40, 360 200, 540 120 C 720 40, 900 200, 1080 120 C 1260 40, 1350 160, 1440 120"
            stroke="white"
            strokeWidth="3"
          />
          <path
            d="M0 160 C 220 70, 380 240, 600 160 C 820 80, 980 240, 1200 160 C 1320 120, 1380 180, 1440 160"
            stroke="white"
            strokeWidth="2"
            opacity="0.7"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Sunberry"
                className="h-12 w-auto rounded-xl bg-white/5 p-2"
                draggable={false}
              />
              <div>
                <p className="text-xl font-semibold leading-tight">SUNBERRY</p>
                <p className="text-sm text-white/70">IT SOLUTIONS LLC</p>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
              Transforming businesses through innovative technology solutions and
              digital excellence.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white/90 transition hover:bg-white/20"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold">Quick Links</p>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold">Contact</p>

            <div className="mt-5 space-y-4 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <MapPin className="h-5 w-5 text-white/90" />
                </span>
                <p className="leading-relaxed">
                  SUNBERRY IT SOLUTIONS LLC
                  <br />
                  9105 OSTERVILLE DR
                  <br/>
                  ROSVILLE, CA 95747
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Mail className="h-5 w-5 text-white/90" />
                </span>
                <a
                  href="mailto:admin@sunberryitsolutions.com"
                  className="transition hover:text-white"
                >
                  admin@sunberryitsolutions.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Phone className="h-5 w-5 text-white/90" />
                </span>
                <a
                  href="tel:+16197526234"
                  className="transition hover:text-white"
                >
                  16197526234
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold">Stay Updated</p>
            <p className="mt-5 text-sm leading-relaxed text-white/75">
              Subscribe to our newsletter for product updates, tech insights,
              and new launches.
            </p>

            <form
              className="mt-6 space-y-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-[rgb(var(--color-accent-purple))]"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/25"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-3 text-xs text-white/55">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-white/65 sm:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Sunberry. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <button
              type="button"
              className="transition hover:text-white"
              onClick={() => {}}
            >
              Cookie Settings
            </button>

            <Link to="/contact" className="transition hover:text-white">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}