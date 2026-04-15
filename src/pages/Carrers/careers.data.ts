export type CareerType = "Full-time" | "Part-time" | "Contract" | "Internship";
export type CareerMode = "Onsite" | "Remote" | "Hybrid";

export type CareerPost = {
  id: string;
  slug: string;
  title: string;
  department: string; // used for left filter
  type: CareerType;
  mode: CareerMode;
  location: string;
  experience: string;
  postedOn: string; // ISO date: "2026-02-01"
  shortDescription: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
};

export const CAREER_POSTS: CareerPost[] = [
  {
    id: "C-001",
    slug: "frontend-react-developer",
    title: "Frontend Developer (React)",
    department: "Engineering",
    type: "Full-time",
    mode: "Hybrid",
    location: "Hyderabad, India",
    experience: "2–5 years",
    postedOn: "2026-02-01",
    shortDescription:
      "Build premium UI experiences using React + TypeScript. You’ll work closely with design and backend teams to ship polished web features.",
    responsibilities: [
      "Develop responsive UI with React + TypeScript",
      "Implement reusable components aligned to the design system",
      "Collaborate with backend engineers for API integration",
      "Optimize performance and accessibility",
    ],
    requirements: [
      "Strong React fundamentals (hooks, composition)",
      "Comfortable with TypeScript and component-driven UI",
      "Good CSS/Tailwind understanding and responsive design",
      "Experience working with REST APIs",
    ],
    niceToHave: ["Framer Motion animations", "React Router", "Testing (RTL/Jest)"],
  },
  {
    id: "C-002",
    slug: "react-native-developer",
    title: "React Native Developer",
    department: "Engineering",
    type: "Full-time",
    mode: "Onsite",
    location: "Hyderabad, India",
    experience: "2–6 years",
    postedOn: "2026-02-08",
    shortDescription:
      "Ship high-quality mobile apps for iOS and Android. Work on performance, UI polish, and app release workflows.",
    responsibilities: [
      "Build and maintain React Native apps (iOS/Android)",
      "Integrate APIs and manage state cleanly",
      "Handle builds and releases (Play Console / App Store)",
      "Ensure high performance and crash-free sessions",
    ],
    requirements: [
      "Strong React Native experience (CLI preferred)",
      "Solid debugging skills and performance awareness",
      "Experience with native build pipelines",
      "Good understanding of mobile UX patterns",
    ],
    niceToHave: ["Firebase", "Push notifications", "Deep linking"],
  },
  {
    id: "C-003",
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    type: "Contract",
    mode: "Remote",
    location: "Remote",
    experience: "2–5 years",
    postedOn: "2026-02-12",
    shortDescription:
      "Design clean, modern interfaces and consistent flows. You’ll create Figma wireframes, components, and prototypes for web & mobile.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity UI",
      "Build reusable components in a design system",
      "Collaborate with dev team for pixel-perfect handoff",
      "Improve UX through user flows and iteration",
    ],
    requirements: [
      "Strong portfolio (web & mobile preferred)",
      "Comfortable with Figma and component systems",
      "Good typography, spacing, and layout discipline",
      "Ability to explain decisions clearly",
    ],
    niceToHave: ["Motion/interaction design", "Basic HTML/CSS knowledge"],
  },
  {
    id: "C-004",
    slug: "digital-marketing-executive",
    title: "Digital Marketing Executive",
    department: "Marketing",
    type: "Full-time",
    mode: "Hybrid",
    location: "Hyderabad, India",
    experience: "1–4 years",
    postedOn: "2026-02-18",
    shortDescription:
      "Plan and execute campaigns for lead generation and brand growth. Work on SEO, content, performance marketing, and analytics.",
    responsibilities: [
      "Run and optimize paid campaigns (Google/Meta)",
      "SEO optimization and content coordination",
      "Track performance and report insights",
      "Improve conversion across landing pages",
    ],
    requirements: [
      "Hands-on campaign experience",
      "Good understanding of SEO and analytics",
      "Strong communication and reporting",
      "Basic design/content sense",
    ],
    niceToHave: ["GA4", "Tag Manager", "Email marketing tools"],
  },
  {
    id: "C-005",
    slug: "business-development-associate",
    title: "Business Development Associate",
    department: "Sales",
    type: "Full-time",
    mode: "Onsite",
    location: "Hyderabad, India",
    experience: "0–3 years",
    postedOn: "2026-02-22",
    shortDescription:
      "Work on outreach, proposals, and client communication. You’ll help generate leads and support project closures with the delivery team.",
    responsibilities: [
      "Prospect and qualify leads",
      "Create proposals and coordinate with internal teams",
      "Maintain CRM updates and follow-ups",
      "Support client calls and discovery sessions",
    ],
    requirements: [
      "Strong communication and negotiation basics",
      "Comfortable with documents and structured follow-ups",
      "Good attitude and consistency",
      "Willing to learn quickly",
    ],
    niceToHave: ["Any CRM exposure", "Basic understanding of software services"],
  },
];

export const CAREER_DEPARTMENTS = ["All", "Engineering", "Design", "Marketing", "Sales"] as const;

export const getCareerBySlug = (slug: string) =>
  CAREER_POSTS.find((p) => p.slug === slug);

export const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
};