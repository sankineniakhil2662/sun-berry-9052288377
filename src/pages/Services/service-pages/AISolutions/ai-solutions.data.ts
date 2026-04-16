export type AISolutionsHeroData = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export const AI_SOLUTIONS_HERO: AISolutionsHeroData = {
  eyebrow: "AI Solutions",
  titleLead: "Transform Your Business with",
  titleAccent: "End-to-End AI Solutions",
  subtitle:
    "We design, build, and deploy intelligent AI systems — from custom chatbots and voice assistants to enterprise-grade automation and AI agents.",
  primaryCta: { label: "Get in touch", href: "/contact" },
  secondaryCta: { label: "Explore curriculum", href: "#curriculum" },
};

export type AISolutionsAboutData = {
  eyebrow: string;
  title: string;
  body: string;
  stats: Array<{ value: string; label: string }>;
};

export const AI_SOLUTIONS_ABOUT: AISolutionsAboutData = {
  eyebrow: "About Us",
  title: "An AI-first technology company built for real-world business outcomes.",
  body: "We help businesses unlock the power of Artificial Intelligence — from strategy and design through engineering, integration, and ongoing operations. Every solution we deliver is scalable, production-grade, and tailored to how your business actually works.",
  stats: [
    { value: "End-to-End", label: "Strategy → Deployment" },
    { value: "AI-First", label: "Purpose built approach" },
    { value: "Scalable", label: "Enterprise ready" },
  ],
};

export type AISolutionsServicesData = {
  title: string;
  subtitle: string;
  items: Array<{
    no: string;
    iconKey: "ai-business" | "ai-products" | "ai-training";
    title: string;
    items: string[];
  }>;
};

export const AI_SOLUTIONS_SERVICES: AISolutionsServicesData = {
  title: "Our Services",
  subtitle: "Three pillars powering modern AI transformation.",
  items: [
    {
      no: "01",
      iconKey: "ai-business",
      title: "AI Solutions for Businesses",
      items: [
        "AI Strategy & Consulting",
        "Process Automation",
        "Predictive Analytics",
        "NLP Solutions",
        "Computer Vision",
        "Business Intelligence",
      ],
    },
    {
      no: "02",
      iconKey: "ai-products",
      title: "AI Products & Integrations",
      items: [
        "Custom Chatbots",
        "Voice Assistants",
        "AI Agents",
        "CRM & ERP Integrations",
        "API-based deployments",
      ],
    },
    {
      no: "03",
      iconKey: "ai-training",
      title: "AI Training & Upskilling",
      items: [
        "Beginner to Advanced AI Programs",
        "Corporate Training",
        "Hands-on Projects",
        "Certifications",
      ],
    },
  ],
};

export type AISolutionsProcessData = {
  title: string;
  subtitle: string;
  steps: Array<{ no: string; title: string; desc: string }>;
};

export const AI_SOLUTIONS_PROCESS: AISolutionsProcessData = {
  title: "Our Process",
  subtitle: "A proven six-step path from idea to production.",
  steps: [
    { no: "01", title: "Discovery & Consultation", desc: "We map your workflows, data sources, and business goals." },
    { no: "02", title: "AI Strategy Design", desc: "We define the architecture, models, and measurable outcomes." },
    { no: "03", title: "Development", desc: "We build production-grade AI systems with clean, tested code." },
    { no: "04", title: "Integration", desc: "We wire AI into your apps, CRMs, and data pipelines." },
    { no: "05", title: "Testing & Optimization", desc: "We benchmark, tune, and ship models that perform in the real world." },
    { no: "06", title: "Maintenance & Scaling", desc: "We monitor, retrain, and scale as your business grows." },
  ],
};

export type AISolutionsWhyData = {
  title: string;
  subtitle: string;
  items: Array<{
    iconKey: "end-to-end" | "custom" | "industry" | "scalable" | "support";
    title: string;
    desc: string;
  }>;
};

export const AI_SOLUTIONS_WHY: AISolutionsWhyData = {
  title: "Why Choose Us",
  subtitle: "The qualities that make our AI solutions stand out.",
  items: [
    { iconKey: "end-to-end", title: "End-to-End Expertise", desc: "Strategy, engineering, and ops under one roof." },
    { iconKey: "custom", title: "Custom Solutions", desc: "Tailored to your domain, data, and users." },
    { iconKey: "industry", title: "Industry Focus", desc: "Proven patterns across regulated and consumer industries." },
    { iconKey: "scalable", title: "Scalable Systems", desc: "Built to grow with your user base and data volume." },
    { iconKey: "support", title: "Continuous Support", desc: "Ongoing monitoring, retraining, and improvement." },
  ],
};

export type AISolutionsCurriculumData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  modules: string[];
  highlights: Array<{ iconKey: string; title: string; desc: string }>;
};

export const AI_SOLUTIONS_CURRICULUM: AISolutionsCurriculumData = {
  eyebrow: "AI Training Curriculum",
  title: "From Python foundations to production-grade AI.",
  subtitle: "A structured, hands-on path designed for learners, engineers, and teams.",
  modules: [
    "Python Programming Foundations",
    "Mathematics for AI",
    "Data Analysis & Visualization",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Generative AI",
    "AI Agents & Automation",
    "AI Product Development",
    "Deployment & MLOps",
    "Real-world Projects",
    "Career Preparation",
  ],
  highlights: [
    { iconKey: "hands-on", title: "Hands-on Training", desc: "Build real systems, not toy demos." },
    { iconKey: "live", title: "Live Projects", desc: "Ship code to production-grade deployments." },
    { iconKey: "mentor", title: "Industry Mentorship", desc: "Learn from active practitioners." },
    { iconKey: "cert", title: "Certification", desc: "Industry-recognized credentials." },
    { iconKey: "placement", title: "Placement Support", desc: "Interview prep and company introductions." },
  ],
};

export type AISolutionsToolsData = {
  title: string;
  subtitle: string;
  tools: string[];
};

export const AI_SOLUTIONS_TOOLS: AISolutionsToolsData = {
  title: "Tools & Technologies",
  subtitle: "A battle-tested stack spanning research, product, and deployment.",
  tools: [
    "Python",
    "TensorFlow",
    "PyTorch",
    "OpenAI APIs",
    "LangChain",
    "Hugging Face",
    "Docker",
    "Cloud",
  ],
};

export type AISolutionsCareersData = {
  title: string;
  subtitle: string;
  roles: Array<{ title: string; desc: string }>;
};

export const AI_SOLUTIONS_CAREERS: AISolutionsCareersData = {
  title: "Career Opportunities",
  subtitle: "Launch or accelerate your AI career.",
  roles: [
    { title: "AI Engineer", desc: "Build and deploy AI systems end to end." },
    { title: "Data Scientist", desc: "Turn data into models, insight, and decisions." },
    { title: "ML Engineer", desc: "Ship reliable machine learning to production." },
    { title: "AI Product Developer", desc: "Bridge AI capabilities with product experiences." },
  ],
};

export type AISolutionsCtaData = {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export const AI_SOLUTIONS_CTA: AISolutionsCtaData = {
  title: "Ready to build with AI?",
  description:
    "Whether you need an AI solution, a team of experts, or a future-ready training program — we're ready when you are.",
  primary: { label: "Contact Us", href: "/contact" },
  secondary: { label: "Get a Quote", href: "/quote" },
};
