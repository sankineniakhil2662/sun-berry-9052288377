export type OracleFusionHeroData = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export const ORACLE_FUSION_HERO: OracleFusionHeroData = {
  eyebrow: "Oracle Fusion Cloud Applications",
  titleLead: "Techno-Functional Services for",
  titleAccent: "Oracle Fusion Cloud",
  subtitle:
    "We deliver end-to-end Oracle Fusion Cloud services — blending functional consulting, technical development, and managed services to help you adopt, optimize, and scale with confidence.",
  primaryCta: { label: "Free Consultation", href: "/contact" },
  secondaryCta: { label: "Explore modules", href: "#modules" },
};

export type OracleFusionOverviewData = {
  overviewTitle: string;
  overview: string[];
  missionTitle: string;
  mission: string[];
};

export const ORACLE_FUSION_OVERVIEW: OracleFusionOverviewData = {
  overviewTitle: "Company Overview",
  overview: [
    "We are a specialized software solutions company delivering end-to-end Oracle Fusion Cloud services.",
    "Our expertise spans functional consulting, technical development, and managed services.",
    "We help organizations adopt, optimize, and scale Oracle Cloud applications efficiently.",
  ],
  missionTitle: "Our Mission",
  mission: [
    "To empower businesses with scalable, efficient, and future-ready Oracle Cloud solutions.",
    "To deliver high-quality techno-functional services that drive measurable business value.",
  ],
};

export type OracleFusionCoreServicesData = {
  title: string;
  subtitle: string;
  items: Array<{
    no: string;
    iconKey: "impl" | "support" | "integrate" | "migrate";
    title: string;
    bullets: string[];
  }>;
};

export const ORACLE_FUSION_CORE_SERVICES: OracleFusionCoreServicesData = {
  title: "Our Core Services",
  subtitle: "Full-lifecycle Oracle Fusion Cloud services delivered by certified specialists.",
  items: [
    {
      no: "01",
      iconKey: "impl",
      title: "Implementation Services",
      bullets: [
        "Complete lifecycle implementation — requirements, design, configuration, testing, and deployment.",
        "Agile and structured methodologies that ensure successful project delivery.",
      ],
    },
    {
      no: "02",
      iconKey: "support",
      title: "Support & Maintenance",
      bullets: [
        "24/7 production support with SLA-based delivery.",
        "Issue resolution, system monitoring, and continuous improvements.",
      ],
    },
    {
      no: "03",
      iconKey: "integrate",
      title: "Integrations",
      bullets: [
        "Integrations with third-party and legacy systems via Oracle Integration Cloud (OIC), REST, and SOAP APIs.",
        "Real-time and batch integration solutions.",
      ],
    },
    {
      no: "04",
      iconKey: "migrate",
      title: "Data Migration",
      bullets: [
        "Secure and accurate migration using FBDI, HDL, and other Oracle tools.",
        "Data validation and reconciliation processes.",
      ],
    },
  ],
};

export type OracleFusionModulesData = {
  title: string;
  subtitle: string;
  items: Array<{
    code: string;
    iconKey: "hcm" | "scm" | "erp" | "cx";
    title: string;
    bullets: string[];
  }>;
};

export const ORACLE_FUSION_MODULES: OracleFusionModulesData = {
  title: "Oracle Fusion Modules Coverage",
  subtitle: "Deep expertise across the Oracle Fusion application suite.",
  items: [
    {
      code: "HCM",
      iconKey: "hcm",
      title: "Human Capital Management",
      bullets: [
        "Core HR, Payroll, Absence Management",
        "Talent Management & Recruitment",
        "Performance & Compensation",
      ],
    },
    {
      code: "SCM",
      iconKey: "scm",
      title: "Supply Chain Management",
      bullets: [
        "Procurement & Sourcing",
        "Inventory & Order Management",
        "Logistics & Product Management",
      ],
    },
    {
      code: "ERP",
      iconKey: "erp",
      title: "Financials",
      bullets: [
        "General Ledger & Financial Reporting",
        "Accounts Payable & Receivable",
        "Fixed Assets & Cash Management",
      ],
    },
    {
      code: "CX / EPM",
      iconKey: "cx",
      title: "Customer Experience & EPM",
      bullets: [
        "Sales, Service, Marketing Automation",
        "Planning, Budgeting, and Consolidation",
      ],
    },
  ],
};

export type OracleFusionExpertiseData = {
  title: string;
  subtitle: string;
  technical: { title: string; items: string[] };
  functional: { title: string; items: string[] };
};

export const ORACLE_FUSION_EXPERTISE: OracleFusionExpertiseData = {
  title: "Techno-Functional Expertise",
  subtitle: "One team, two disciplines — engineering meets business process.",
  technical: {
    title: "Technical Expertise",
    items: [
      "Oracle Integration Cloud (OIC)",
      "BI Publisher (BIP) & OTBI Reporting",
      "Fast Formulas & Custom Extensions",
      "Visual Builder Cloud Service (VBCS)",
      "REST & SOAP API Development",
      "Data Migration Tools (HDL, FBDI)",
    ],
  },
  functional: {
    title: "Functional Expertise",
    items: [
      "Business Process Mapping & Optimization",
      "Module Configuration & Setup",
      "System Integration Testing (SIT)",
      "User Acceptance Testing (UAT)",
      "User Training & Documentation",
    ],
  },
};

export type OracleFusionWhyData = {
  title: string;
  subtitle: string;
  items: Array<{
    iconKey: "end2end" | "team" | "method" | "cost" | "flexible" | "client";
    title: string;
    desc: string;
  }>;
};

export const ORACLE_FUSION_WHY: OracleFusionWhyData = {
  title: "Why Choose Us",
  subtitle: "The advantages that make us a trusted Oracle Fusion partner.",
  items: [
    { iconKey: "end2end", title: "End-to-End Oracle Fusion Expertise", desc: "Functional, technical, and managed services under one roof." },
    { iconKey: "team", title: "Strong Techno-Functional Team", desc: "Certified consultants across every Fusion module." },
    { iconKey: "method", title: "Proven Delivery Methodology", desc: "Agile frameworks with clear milestones and reporting." },
    { iconKey: "cost", title: "Cost-Effective Solutions", desc: "Optimized onshore/offshore engagement for maximum value." },
    { iconKey: "flexible", title: "Flexible Engagement Models", desc: "Dedicated, project-based, on-demand, or managed." },
    { iconKey: "client", title: "Client-Centric Approach", desc: "Deep listening, clear communication, measurable outcomes." },
  ],
};

export type OracleFusionIndustriesData = {
  title: string;
  subtitle: string;
  items: Array<{ iconKey: string; label: string }>;
};

export const ORACLE_FUSION_INDUSTRIES: OracleFusionIndustriesData = {
  title: "Industries Served",
  subtitle: "Fusion expertise across regulated, distribution, and consumer-driven sectors.",
  items: [
    { iconKey: "it", label: "IT & Software" },
    { iconKey: "mfg", label: "Manufacturing" },
    { iconKey: "retail", label: "Retail" },
    { iconKey: "health", label: "Healthcare" },
    { iconKey: "finance", label: "Finance" },
    { iconKey: "logistics", label: "Logistics" },
  ],
};

export type OracleFusionEngagementData = {
  title: string;
  subtitle: string;
  items: Array<{ iconKey: string; title: string; desc: string }>;
};

export const ORACLE_FUSION_ENGAGEMENT: OracleFusionEngagementData = {
  title: "Engagement Models",
  subtitle: "Right-sized collaboration for every stage of your Fusion journey.",
  items: [
    { iconKey: "dedicated", title: "Dedicated Resource Model", desc: "Embedded consultants who extend your team." },
    { iconKey: "project", title: "Project-Based Delivery", desc: "Fixed-scope implementations with clear deliverables." },
    { iconKey: "ondemand", title: "On-Demand Support", desc: "Rapid help on specific issues, features, or enhancements." },
    { iconKey: "managed", title: "Managed Services", desc: "SLA-backed AMS for ongoing operations and evolution." },
  ],
};

export type OracleFusionCtaData = {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export const ORACLE_FUSION_CTA: OracleFusionCtaData = {
  title: "Let's transform your Oracle Fusion environment.",
  description:
    "Reach out for a free consultation and discover how we can help you implement, optimize, and scale Oracle Fusion Cloud.",
  primary: { label: "Contact Us", href: "/contact" },
  secondary: { label: "Get a Quote", href: "/quote" },
};
