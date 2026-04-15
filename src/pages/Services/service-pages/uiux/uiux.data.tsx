import dataVizImg from "../../../../assets/services/uiux/data.png";
import userResearchImg from "../../../../assets/services/uiux/user.png";
import intelligentDesignImg from "../../../../assets/services/uiux/intelligent.png";
import uxAuditImg from "../../../../assets/services/uiux/audit.png";

export type UIUXCard = {
  title: string;
  desc: string;
  icon: "strategy" | "design" | "performance" | "testing" | "system" | "responsive";
};

export type UIUXStepIcon =
  | "research"
  | "architecture"
  | "wireframes"
  | "prototype"
  | "iterate"
  | "handoff"
  | "system";

export type UIUXStep = {
  title: string;
  desc: string;
  icon: UIUXStepIcon;
};

export type UIUXTabKey = "dataViz" | "userResearch" | "intelligentDesign" | "uxAudit";

export type UIUXTab = {
  key: string;
  label: string;
  title: string;
  desc: string;
  points: string[];
  image?: {
    src: string;
    alt?: string;
  };
};


export type UIUXStat = {
  value: string;
  title: string;
  desc: string;
  source: string;
};

export const UIUX_HERO = {
  eyebrow: "UI/UX DESIGN",
  title: "Design experiences people love to use.",
  subtitle:
    "We craft user-focused interfaces that feel intuitive, look premium, and drive measurable business outcomes.",
  body:
    "From discovery to wireframes, prototypes, and final UI systems—our process keeps clarity, consistency, and conversion at the center.",
};

export const UIUX_CAPABILITIES: UIUXCard[] = [
  {
    icon: "strategy",
    title: "User-Centric Strategy",
    desc: "Align product goals with user needs using research-led UX planning and clear experience mapping.",
  },
  {
    icon: "design",
    title: "Intuitive Interface Design",
    desc: "Clean layouts, smart hierarchy, and modern visuals that make complex flows feel simple.",
  },
  {
    icon: "performance",
    title: "Flawless Experience",
    desc: "UX patterns that reduce friction, improve engagement, and support fast, consistent interactions.",
  },
  {
    icon: "testing",
    title: "Research & Usability Testing",
    desc: "Validate assumptions early with usability checks, feedback loops, and data-informed improvements.",
  },
  {
    icon: "system",
    title: "Design System Implementation",
    desc: "Reusable components, tokens, and guidelines to keep UI consistent and scalable across pages.",
  },
  {
    icon: "responsive",
    title: "Responsive Multi-Platform Design",
    desc: "Designs that adapt smoothly across web, mobile, and different screen sizes without breaking the UX.",
  },
];

export const UX_PROCESS: UIUXStep[] = [
  {
    icon: "research",
    title: "UX Discovery & Research",
    desc: "Understand users, goals, and constraints through discovery sessions and research inputs.",
  },
  {
    icon: "architecture",
    title: "Information Architecture",
    desc: "Structure content and flows to make navigation intuitive and tasks easy to complete.",
  },
  {
    icon: "wireframes",
    title: "Sketching & Wireframes",
    desc: "Rapidly explore layouts and interactions before polishing visuals.",
  },
  {
    icon: "prototype",
    title: "Interactive Prototypes",
    desc: "Clickable prototypes to test experiences early and get stakeholder alignment.",
  },
  {
    icon: "iterate",
    title: "Iteration & Refinement",
    desc: "Improve based on feedback, usability findings, and clarity enhancements.",
  },
  {
    icon: "handoff",
    title: "Developer Handoff",
    desc: "Clear specs and UI patterns to help build accurately and faster.",
  },
];

export const UI_PROCESS: UIUXStep[] = [
  {
    icon: "research",
    title: "Visual Direction & References",
    desc: "Set a visual style that matches brand and product personality.",
  },
  {
    icon: "wireframes",
    title: "High-Fidelity Screens",
    desc: "Design pixel-perfect screens with strong hierarchy, spacing, and readability.",
  },
  {
    icon: "prototype",
    title: "Motion & Micro-Interactions",
    desc: "Plan UI behaviors like hover, transitions, and feedback moments.",
  },
  {
    icon: "system",
    title: "UI Guidelines & Components",
    desc: "Build reusable UI components to keep the design consistent across the product.",
  },
  {
    icon: "iterate",
    title: "Accessibility & Polish",
    desc: "Ensure contrast, focus states, and visual clarity for a wider audience.",
  },
  {
    icon: "handoff",
    title: "Design-to-Dev Alignment",
    desc: "Deliver assets and guidelines to keep implementation aligned with design intent.",
  },
];

export const UIUX_BENEFITS = {
  title: "Benefits of our UI/UX design services",
  desc:
    "We recognize the pivotal role that UI UX design services play in shaping digital experiences. Our UI UX web design company offers a multitude of benefits to businesses seeking to grow their online presence and drive success. Here's why partnering with us can be advantageous:.",
  items: [
    {
      title: "Enhanced User Satisfaction",
      desc: "By prioritizing user needs and preferences,our UI/UX design solutions ensure a seamless and enjoyable experience for your audience, leading to increased user satisfaction and loyalty.",
    },
    {
      title: "Improved Conversion Rates",
      desc: "Well-crafted user interfaces and intuitive user experiences have been shown to significantly boost conversion rates, translating into tangible business growth and success.  ",
    },
    {
      title: "Increased Customer Engagement",
      desc: "Our UX and UI design services are tailored to captivate and engage users, encouraging longer interactions with your digital platforms and strengthening brand engagement.",
    },
    {
      title: "Streamlined Development Process",
      desc: "Our structured Ul/UX design process, guided by established standards and best practices, streamlines the development cycle, reducing time to market and overall project costs.",
    },
    {
      title: "Data-Driven Decision Making",
      desc: "Our UI/UX services are informed by thorough research and analysis, providing valuable insights into user behavior and preferences, enabling data-driven design decisions that drive success.",
    },
    {
      title: "Scalability and Adaptability",
      desc: "Our designs are scalable and adaptable, ensuring seamless performance across various devices and platforms, accommodating the evolving needs of your business and audience.",
    },
    {
      title: "Brand Consistency",
      desc: "We ensure that the designs that are delivered adhere to your brand guidelines, ensuring consistency across all touchpoints, reinforcing brand identity, and fostering brand recognition and trust.",
    },
    {
      title: "Cost-Efficiency",
      desc: "By identifying and addressing usability issues early in the design process, our UI/UX design services help minimize the need for costly redesigns and revisions later on, saving both time and resources.",
    },
    {
      title: "Continuous Improvement",
      desc: "We believe in continuous improvement and refinement. Through ongoing analysis, testing, and iteration, we ensure that your Ul/UX design remains optimized and aligned with evolving user needs and market trends.",
    },
  ],
};

export const UIUX_WHY = {
  title: "Why choose us?",
  desc:
    "We combine clean visual design with practical UX thinking—so your product looks great and performs even better.",
  items: [
    {
      title: "Customized Processes",
      desc: "Our UI UX designers approach every project with flexible processes in order to find the best course of action.",
    },
    {
      title: "Cross-platform Expertise",
      desc: "Expertise in designing experiences across platforms, and devices.",
    },
    {
      title: "Faster Time-to-market",
      desc: "Compartmentalized roadmap for efficient design and development.",
    },
    {
      title: "Ease of Management",
      desc: "Accountability & Ownership of execution with low supervision.",
    },
  ],
};

export const UIUX_TABS: UIUXTab[] = [
  {
    key: "userResearch",
    label: "User Research",
    title: "Design backed by real user behavior.",
    desc:
      "We validate direction early—reducing assumptions and building experiences that match real user needs.",
    points: [
      "Discovery workshops and goal mapping",
      "User flows and journey mapping",
      "Usability review checkpoints",
      "Feedback-driven iteration",
    ],
    image: {
      src: userResearchImg,
      alt: "User research workflow and journey mapping",
    },
  },
  {
    key: "dataViz",
    label: "Data Visualization",
    title: "Dashboards that communicate clearly.",
    desc:
      "We design data-heavy screens with clarity-first hierarchy—so users can understand insights quickly without confusion.",
    points: [
      "Strong visual hierarchy for KPIs",
      "Readable charts and meaningful patterns",
      "Filters and drill-down flows that feel natural",
      "Consistency across dashboard modules",
    ],
    image: {
      src: dataVizImg,
      alt: "UI/UX data visualization dashboard mockup",
    },
  },
  
  {
    key: "intelligentDesign",
    label: "Intelligent Design",
    title: "Design that feels effortless.",
    desc:
      "We simplify complex journeys through thoughtful interactions, clarity, and strong information structure.",
    points: [
      "Simplified navigation and task flows",
      "Micro-interactions for better feedback",
      "Component reuse for consistency",
      "Accessibility-first clarity",
    ],
    image: {
      src: intelligentDesignImg,
      alt: "Intelligent UI component design system",
    },
  },
  {
    key: "uxAudit",
    label: "UX Audit",
    title: "Identify friction and fix it.",
    desc:
      "We evaluate your existing UI/UX to find bottlenecks, inconsistencies, and conversion blockers—then recommend improvements.",
    points: [
      "Heuristic evaluation & UI review",
      "Flow analysis and friction points",
      "Quick-win improvements list",
      "Design system alignment suggestions",
    ],
    image: {
      src: uxAuditImg,
      alt: "UX audit and evaluation process",
    },
  },
];


export const UIUX_ADVANTAGES = {
  title: "Advantages of a great experience",
  desc:
    "Experience quality is often the difference between a one-time visitor and a long-term user.",
  items: [
    { title: "Higher Engagement", desc: "Users spend more time when the experience feels smooth." },
    { title: "Better Conversion", desc: "Clear flows reduce drop-offs and improve actions." },
    { title: "Reduced Support", desc: "Intuitive UI means fewer user questions and tickets." },
    { title: "Stronger Trust", desc: "Polished UI increases credibility and confidence." },
    { title: "Faster Learning", desc: "Users understand features quickly with better guidance." },
    { title: "Retention Growth", desc: "Great UX encourages repeat usage and loyalty." },
  ],
};

export const UIUX_STATS: UIUXStat[] = [
 
  {
    value: "89%",
    title: "Users switch after bad UX",
    desc: "Users are far more likely to abandon a product if the experience feels confusing, slow, or frustrating.",
    source: "UX industry research",
  },
  {
    value: "400%",
    title: "Higher conversion with better UX",
    desc: "Prioritizing user experience has been shown to significantly increase conversion rates.",
    source: "Forrester",
  },
  {
    value: "93%",
    title: "Trust is influenced by design",
    desc: "Visual clarity and intuitive design strongly impact how trustworthy a brand feels to users.",
    source: "Salesforce",
  },
  {
    value: "61%",
    title: "Mobile users expect speed",
    desc: "Most users are unlikely to return to a mobile site that is slow or difficult to use.",
    source: "Google",
  },
  {
    value: "1%",
    title: "Lower cost when issues are fixed early",
    desc: "Fixing usability issues during the design stage costs significantly less than fixing them after development.",
    source: "IBM",
  },
  {
    value: "76%",
    title: "Consistency improves usability",
    desc: "Consistent UI patterns help users understand interfaces faster and reduce errors.",
    source: "Design system insights",
  },
];


