export type InternshipHeroData = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  titleTail?: string;
  subtitle: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export const INTERNSHIP_HERO: InternshipHeroData = {
  eyebrow: "Internship Programs",
  titleLead: "Launch your",
  titleAccent: "career",
  titleTail: "with hands-on industry experience",
  subtitle:
    "Structured learning, 1:1 mentorship, and real project exposure — so you graduate interview-ready with a portfolio that stands out.",
  primary: { label: "Apply now", href: "/contact" },
  secondary: { label: "Explore tracks", href: "#tracks" },
};

export type InternshipOverviewData = {
  title: string;
  description: string;
  whyTitle: string;
  whyDescription: string;
  points: string[];
};

export const INTERNSHIP_OVERVIEW: InternshipOverviewData = {
  title: "A program built to make you industry-ready",
  description:
    "We blend classroom-style fundamentals with project-based learning and live client exposure. Interns ship real work, review code with senior engineers, and finish with a portfolio ready for hiring managers.",
  whyTitle: "Why interns choose us",
  whyDescription:
    "From week one, you get a personal mentor, weekly milestones, and access to production projects — not busywork. We hire from within whenever possible.",
  points: [
    "Curated tracks with industry-validated curriculum",
    "1:1 mentorship and weekly code/design reviews",
    "Real client projects and open-source contributions",
    "Interview prep: DSA, system design, and mock rounds",
    "Certification, letter of recommendation, and portfolio",
    "Pathway to full-time offers for top performers",
  ],
};

export type InternshipTrackItem = {
  title: string;
  items: string[];
};

export type InternshipTracksData = {
  title: string;
  subtitle: string;
  techTitle: string;
  techTracks: InternshipTrackItem[];
  businessTitle: string;
  businessTracks: InternshipTrackItem[];
};

export const INTERNSHIP_TRACKS: InternshipTracksData = {
  title: "Internship tracks",
  subtitle:
    "Pick a track aligned with your goals. Every track includes structured curriculum, mentorship, and a capstone project.",
  techTitle: "Technology internships",
  techTracks: [
    { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"] },
    { title: "Backend", items: ["Node.js", "Java / Spring", ".NET", "REST APIs", "Databases", "Auth"] },
    { title: "Full-stack", items: ["React + Node", "API Integration", "DB Design", "Deployment Basics"] },
    { title: "Mobile", items: ["React Native", "Android (Kotlin)", "iOS (Swift)", "Firebase"] },
    { title: "UI / UX", items: ["Wireframes", "Prototyping", "Design Systems", "Usability Testing"] },
    { title: "QA / Testing", items: ["Test Cases", "Bug Reporting", "Regression", "Automation Basics"] },
  ],
  businessTitle: "Business, sales & operations",
  businessTracks: [
    { title: "BDA / BDE", items: ["Lead Gen", "Cold Outreach", "Pitching", "CRM Updates"] },
    { title: "Marketing", items: ["Social Media", "Content", "SEO Basics", "Campaign Support"] },
    { title: "Admin / Ops", items: ["Documentation", "Coordination", "Process Support", "Reporting"] },
    { title: "HR", items: ["Screening", "Scheduling", "Onboarding Support", "Records"] },
    { title: "Finance", items: ["Invoices", "Expense Tracking", "MIS Support", "Reconciliation Basics"] },
  ],
};

export type InternshipProcessStep = {
  no: string;
  title: string;
  desc: string;
};

export type InternshipProcessData = {
  title: string;
  subtitle: string;
  steps: InternshipProcessStep[];
};

export const INTERNSHIP_PROCESS: InternshipProcessData = {
  title: "How the program runs",
  subtitle:
    "A transparent, milestone-driven journey designed to build skills and confidence week by week.",
  steps: [
    { no: "01", title: "Apply", desc: "Submit your application and preferred track." },
    { no: "02", title: "Screening", desc: "Aptitude + brief conversation with our team." },
    { no: "03", title: "Onboarding", desc: "Meet your mentor and kick off the curriculum." },
    { no: "04", title: "Build & ship", desc: "Weekly tasks, code/design reviews, and projects." },
    { no: "05", title: "Placement", desc: "Interview prep, portfolio review, and referrals." },
  ],
};

export type InternshipBenefitItem = {
  title: string;
  desc: string;
};

export type InternshipBenefitsData = {
  title: string;
  subtitle: string;
  items: InternshipBenefitItem[];
};

export const INTERNSHIP_BENEFITS: InternshipBenefitsData = {
  title: "What you'll walk away with",
  subtitle:
    "The program is designed to convert classroom knowledge into recruitable skills through structure, feedback, and real projects.",
  items: [
    { title: "Portfolio-ready projects", desc: "Case studies and code samples aligned with real roles." },
    { title: "Mentorship", desc: "Weekly 1:1 sessions with senior engineers, designers, and operators." },
    { title: "Interview prep", desc: "DSA, system design, behavioral rounds, and mock interviews." },
    { title: "Certification", desc: "Program certificate and letter of recommendation on completion." },
    { title: "Hiring pathway", desc: "Top performers get fast-tracked for full-time offers." },
    { title: "Community", desc: "Peer network, demo days, and ongoing alumni support." },
  ],
};

export type InternshipCtaData = {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export const INTERNSHIP_CTA: InternshipCtaData = {
  title: "Ready to kickstart your career?",
  description:
    "Apply to the program, pick your track, and start building real-world skills with senior mentors.",
  primary: { label: "Apply now", href: "/contact" },
  secondary: { label: "View tracks", href: "#tracks" },
};
