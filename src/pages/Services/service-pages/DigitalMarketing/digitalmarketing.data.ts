export type DigitalMarketingHeroData = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  subtitle: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export const DIGITAL_MARKETING_HERO: DigitalMarketingHeroData = {
  eyebrow: "Digital Marketing",
  titleLead: "Grow your brand with",
  titleAccent: "data-driven digital marketing",
  subtitle:
    "From SEO and paid media to social, content, and analytics — we build end-to-end marketing programs that turn attention into measurable pipeline.",
  primary: { label: "Contact Us", href: "/contact" },
  secondary: { label: "Our Services", href: "#services" },
};

export type DigitalMarketingOverviewData = {
  title: string;
  description: string;
  whyTitle: string;
  whyDescription: string;
  points: string[];
};

export const DIGITAL_MARKETING_OVERVIEW: DigitalMarketingOverviewData = {
  title: "Overview of Digital Marketing",
  description:
    "Every brand needs a strong online presence. A digital marketing partner helps you create strategies that lead to measurable results — consistent growth, reach, and ROI.",
  whyTitle: "Why Partner with a Digital Marketing Company?",
  whyDescription:
    "We offer end-to-end solutions tailored to your industry. From SEO to social, our strategies are data-driven and result-oriented.",
  points: [
    "Brand visibility across multiple platforms.",
    "Cost-effective advertising solutions.",
    "Increased website traffic and lead generation.",
    "Better ROI through targeted strategies.",
    "Long-term digital growth with measurable results.",
  ],
};

export type DigitalMarketingServicesData = {
  title: string;
  subtitle: string;
  items: Array<{
    no: string;
    iconKey: "seo" | "ppc" | "social" | "content" | "email" | "analytics";
    title: string;
    desc: string;
  }>;
};

export const DIGITAL_MARKETING_SERVICES: DigitalMarketingServicesData = {
  title: "Our Digital Marketing Services",
  subtitle: "A full-stack marketing engine built to scale your brand.",
  items: [
    { no: "01", iconKey: "seo", title: "Search Engine Optimization", desc: "Technical SEO, content, and authority building to rank for the queries your buyers actually use." },
    { no: "02", iconKey: "ppc", title: "Paid Media & PPC", desc: "Google, Meta, LinkedIn, and programmatic campaigns optimized for CPA, ROAS, and pipeline." },
    { no: "03", iconKey: "social", title: "Social Media Marketing", desc: "Organic and paid social programs that build community and convert across every platform." },
    { no: "04", iconKey: "content", title: "Content Marketing", desc: "Editorial, video, and long-form assets designed for discovery, trust, and conversion." },
    { no: "05", iconKey: "email", title: "Email & Marketing Automation", desc: "Lifecycle flows, nurture sequences, and automations that turn lists into revenue." },
    { no: "06", iconKey: "analytics", title: "Analytics & CRO", desc: "Attribution, dashboards, and A/B testing so every dollar is measured and optimized." },
  ],
};

export type DigitalMarketingProcessData = {
  title: string;
  subtitle: string;
  steps: Array<{ no: string; title: string; desc: string }>;
};

export const DIGITAL_MARKETING_PROCESS: DigitalMarketingProcessData = {
  title: "Our Process",
  subtitle: "A proven five-step path to predictable growth.",
  steps: [
    { no: "01", title: "Audit & Discovery", desc: "We analyze your funnel, audience, and competitors to find the fastest wins." },
    { no: "02", title: "Strategy & Planning", desc: "We build a channel mix, KPI plan, and 90-day roadmap tailored to your goals." },
    { no: "03", title: "Campaign Execution", desc: "We launch campaigns across SEO, paid, social, and content — fast and disciplined." },
    { no: "04", title: "Measure & Optimize", desc: "Dashboards, experiments, and attribution drive continuous improvement." },
    { no: "05", title: "Scale", desc: "Double down on what's working and expand into new channels and markets." },
  ],
};

export type DigitalMarketingCtaData = {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export const DIGITAL_MARKETING_CTA: DigitalMarketingCtaData = {
  title: "Ready to grow?",
  description:
    "Let's build a marketing engine that turns your brand into a predictable revenue channel.",
  primary: { label: "Contact Us", href: "/contact" },
  secondary: { label: "Get a Quote", href: "/quote" },
};
