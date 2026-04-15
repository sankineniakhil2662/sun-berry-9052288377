
import type { LucideIcon } from "lucide-react";

import {
  Smartphone,
  Apple,
  Tablet,
  Code2,
  AppWindow,
  LayoutGrid,
  Layers,
  Flame,
  Atom,
  PenTool,
  Briefcase, 
  Box, 
} from "lucide-react";

export type CapabilityItem = {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  accent?: "brand" | "cyan" | "magenta" | "purple";
};

export type ExpertiseCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const mobileAppDevData = {
  hero: {
    eyebrow: "What We Do?",
    title: "Mobile App\nDevelopment Company in\nIndia",
    subtitle: "At TYL Tech, we provide a full range of mobile app development services.",
    description:
      "Our mobile app developers can build everything from bespoke Android and iOS apps to cross-platform applications. We focus on smooth performance, modern interfaces, and a great user experience.",
    ctaLabel: "Learn More",
    experienceLabel: "16+ Years Experience",
    imageAlt: "Mobile app development illustration",
  },

  capabilities: {
    eyebrow: "Mobile App Development Services",
    title: "End-to-end Mobile\nApp Development\nServices in India",
    subtitle:
      "We deliver a complete range of mobile app development services—each designed to match your business needs.",
    items: [
      {
        title: "Android App",
        subtitle: "Development",
        description:
          "Build robust Android apps with modern UI, optimized performance, and scalable architecture.",
        icon: Smartphone,
        accent: "brand",
      },
      {
        title: "iOS App",
        subtitle: "Development",
        description:
          "Craft polished iOS apps that feel native, meet App Store standards, and perform smoothly.",
        icon: Apple,
        accent: "brand",
      },
      {
        title: "iPad App",
        subtitle: "Development",
        description:
          "Deliver tablet experiences with adaptive layouts, productivity-first flows, and strong usability.",
        icon: Tablet,
        accent: "brand",
      },
      {
        title: "Custom Software",
        subtitle: "Development",
        description:
          "Tailored app solutions with clean engineering, transparent process, and reliable delivery.",
        icon: Code2,
        accent: "brand",
      },
      {
        title: "Ionic App",
        subtitle: "Development",
        description:
          "Cross-platform delivery with Ionic—fast builds, consistent UI, and pragmatic performance.",
        icon: AppWindow,
        accent: "brand",
      },
      {
        title: "Native App",
        subtitle: "Development",
        description:
          "High-performance native apps optimized for platform behaviors, animations, and device APIs.",
        icon: LayoutGrid,
        accent: "pubrandrple",
      },
      {
        title: "Hybrid App",
        subtitle: "Development",
        description:
          "Build flexible hybrid apps for faster time-to-market and multi-device support with confidence.",
        icon: Layers,
        accent: "brand",
      },
      {
        title: "Flutter App",
        subtitle: "Development",
        description:
          "Beautiful, fast Flutter apps with smooth UI, strong performance, and stable architecture.",
        icon: Flame,
        accent: "brand",
      },
      {
        title: "React Native App",
        subtitle: "Development",
        description:
          "Ship cross-platform apps with React Native—shared codebase, native feel, scalable builds.",
        icon: Atom,
        accent: "brand",
      },
      {
        title: "Mobile App",
        subtitle: "Design",
        description:
          "UX-focused mobile design—from flows to polished UI—built to be development-ready.",
        icon: PenTool,
        accent: "brand",
      },
    ] satisfies CapabilityItem[],
  },

  process: {
    eyebrow: "App Development Process",
    title: "High-Graded Process of\nMobile Application\nDevelopment",
    subtitle:
      "Our industry-graded development workflow allows us to create apps swiftly and efficiently.",
    steps: [
      {
        number: "01",
        title: "App ideation",
        description:
          "We study and investigate your idea, do market research, develop a solution, model the business, estimate features, assign team members, and suggest technology.",
      },
      {
        number: "02",
        title: "App design",
        description:
          "Our team creates smooth user experiences and arranges user requirements and engineering, data modelling, UX research, design, brand identity creation, and UI design.",
      },
      {
        number: "03",
        title: "API development",
        description:
          "We design, develop, secure, and document APIs, plus implement scalability and recovery mechanisms for all users of your app.",
      },
      {
        number: "04",
        title: "App development",
        description:
          "We work on the prototype by selecting the technology, configuring environments, defining the architecture, developing the solution, and fully testing the code.",
      },
      {
        number: "05",
        title: "App testing",
        description:
          "Our testing guarantees the best possible quality through functional, load, performance, compatibility, and security tests.",
      },
      {
        number: "06",
        title: "Release",
        description:
          "We carry out quality assurance, set up infrastructure, monitor performance, and release the app to the App Store and Play Store.",
      },
      {
        number: "07",
        title: "Maintenance",
        description:
          "After release, we continuously improve the app by implementing new features, managing updates, maintaining stability, and providing ongoing support.",
      },
    ],
  },

  why: {
    eyebrow: "WHY TYL TECH?",
    title: "Why TYL Tech for Mobile\nApplication Development?",
    description:
      "We help businesses build powerful and user-friendly mobile applications. Our engineers design dependable solutions that maximise product growth and align tightly with your business goals.",
    points: [
      "Experts at creating native and cross-platform apps",
      "Market-leading innovation through state-of-the-art integrations",
      "Creating unique features and solutions that stand out",
      "High standard of coding by professional developers",
      "Dedicated team for after-sales support and maintenance",
      "Cloud-based deployments and integrations",
    ],
    imageAlt: "Mobile application development illustration",
  },

  expertise: {
    eyebrow: "Our Expertise",
    title: "Highly Experienced Mobile\nApp Development Team",
    subtitle:
      "We bring together skilled developers, designers, and managers—selected based on your needs—to deliver high-quality mobile applications.",
    cards: [
      {
        title: "App Developers",
        description:
          "Senior software engineers and architects with broad experience across modern mobile stacks.",
        icon: Smartphone,
      },
      {
        title: "UI/UX Designers",
        description:
          "Experts in UI/UX, interaction design, and design systems to craft clean and usable experiences.",
        icon: Code2,
      },
      {
        title: "Project Managers",
        description:
          "Digital and technical managers proficient in agile planning, delivery, and stakeholder alignment.",
        icon: Briefcase,
      },
      {
        title: "Product Managers",
        description:
          "Product leaders who shape features and roadmaps with experience across multiple domains.",
        icon: Box,
      },
    ] satisfies ExpertiseCard[],
  },

  
};
