import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

type InfoItemProps = {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
};

function InfoItem({ icon, label, value }: InfoItemProps) {
  return (
    <div className="flex items-start gap-6">
      {/* Icon tile */}
      <div className="relative">
        <div className="absolute -inset-1 rounded-2xl bg-[rgb(var(--color-accent-purple))]/25 blur-lg" />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-card">
          <span className="text-white">{icon}</span>
        </div>
      </div>

      {/* Text */}
      <div className="min-w-0">
        <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
          {label}
        </p>
        <div className="mt-2 text-base font-semibold text-white/90 sm:text-lg">
          {value}
        </div>
      </div>
    </div>
  );
}

export default function ContactInfo() {
  return (
    <section className="relative overflow-hidden rounded-card bg-[#062a64] p-10 text-white shadow-card">
      {/* soft corner blobs (like screenshot corners) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[rgb(var(--color-accent-purple))]/20 blur-3xl" />
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[rgb(var(--color-accent-cyan))]/12 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[rgb(var(--color-accent-magenta))]/12 blur-3xl" />

        {/* subtle vignette */}
        <div className="absolute inset-0 bg-linear-to-b from-white/0 via-white/0 to-black/10" />
      </div>

      <div className="relative">
        {/* Title + underline bar */}
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Contact Info
        </h2>
        <div className="mt-4 h-2 w-28 rounded-full bg-[rgb(var(--color-accent-cyan))] shadow-card" />

        <p className="mt-6 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
          Reach out anytime — we’ll respond quickly and help you move forward.
        </p>

        <div className="mt-12 space-y-10">
          <InfoItem
            icon={<Phone className="h-5 w-5" />}
            label="CALL US / WHATSAPP"
            value={
              <a
                href="tel:16197526234"
                className="text-[rgb(var(--color-accent-cyan))] transition hover:text-white"
              >
                16197526234
              </a>
            }
          />

          <InfoItem
            icon={<Clock className="h-5 w-5" />}
            label="TIMINGS"
            value={<span className="text-white/85">Mon–Fri: 09:30–18:00</span>}
          />

          <InfoItem
            icon={<MapPin className="h-5 w-5" />}
            label="OFFICE"
            value={
              <span className="text-white/85">
                9105 OSTERVILLE DR
                <br/>
                ROSVILLE, CA 95747
              </span>
            }
          />

          <InfoItem
            icon={<Mail className="h-5 w-5" />}
            label="EMAIL"
            value={
              <a
                href="mailto:admin@sunberryitsolutions.com"
                className="text-[rgb(var(--color-accent-cyan))] transition hover:text-white"
              >
                admin@sunberryitsolutions.com
              </a>
            }
          />
        </div>
      </div>
    </section>
  );
}