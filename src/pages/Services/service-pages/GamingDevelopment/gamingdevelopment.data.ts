import img1 from "../../../../assets/services/game/game-1.png";
import img2 from "../../../../assets/services/game/game-2.png";
import img3 from "../../../../assets/services/game/game-3.png";
import img4 from "../../../../assets/services/game/game-4.png";
import img5 from "../../../../assets/services/game/game-5.png";
import img6 from "../../../../assets/services/game/game-6.png";
import img7 from "../../../../assets/services/game/game-7.png";
import img8 from "../../../../assets/services/game/game-8.png";

export type GamingDevelopmentData = {
  title: string;
  description: string;
  cta: { label: string; href: string };
  screenshots: { src: string; alt: string }[];
};

export const GAMING_HERO: GamingDevelopmentData = {
  title: "Our Game Try Your Luck",
  description:
    "We are a trusted game development company delivering full-cycle and co-development solutions. From global studios to publishers and enterprises, we craft immersive, high-quality gaming experiences across platforms.",
  cta: { label: "Contact Us", href: "/contact" },
  screenshots: [
    { src: img1, alt: "Gameplay screenshot 1" },
    { src: img2, alt: "Gameplay screenshot 2" },
    { src: img3, alt: "Gameplay screenshot 3" },
    { src: img4, alt: "Gameplay screenshot 4" },
    { src: img5, alt: "Gameplay screenshot 5" },
    { src: img6, alt: "Gameplay screenshot 6" },
    { src: img7, alt: "Gameplay screenshot 7" },
    { src: img8, alt: "Gameplay screenshot 8" },
  ],
};

export type GamingOverviewData = {
  title: string;
  description: string;
  whyTitle: string;
  whyDescription: string;
  points: string[];
};

export const GAMING_OVERVIEW: GamingOverviewData = {
  title: "Immersive games crafted for every platform",
  description:
    "From rapid prototypes to polished launches, we build games that hook players and scale gracefully. Our multi-disciplinary team covers design, art, engineering, and live-ops so you can ship with confidence.",
  whyTitle: "Why studios partner with us",
  whyDescription:
    "We pair creative direction with production-grade engineering. Every project is tracked against player metrics, performance budgets, and platform certifications.",
  points: [
    "Full-cycle and co-development engagements",
    "Unity and Unreal expertise across mobile, PC, and console",
    "Premium 2D/3D art, VFX, and sound design",
    "Live-ops, backend, and monetization built in",
    "Certified for iOS, Android, Steam, and console stores",
  ],
};

export type GamingServiceItem = {
  no: string;
  iconKey: "mobile" | "console" | "ar" | "multiplayer" | "art" | "liveops";
  title: string;
  desc: string;
};

export type GamingServicesData = {
  title: string;
  subtitle: string;
  items: GamingServiceItem[];
};

export const GAMING_SERVICES: GamingServicesData = {
  title: "Game development services",
  subtitle:
    "Full-cycle production — from concept pitches to live operations — tailored to your genre, audience, and platform mix.",
  items: [
    {
      no: "01",
      iconKey: "mobile",
      title: "Mobile game development",
      desc: "Casual, hyper-casual, mid-core, and RPG titles engineered for retention, smooth performance, and platform-optimized monetization.",
    },
    {
      no: "02",
      iconKey: "console",
      title: "PC & console games",
      desc: "High-fidelity Unity and Unreal builds for Steam, PlayStation, Xbox, and Nintendo Switch with certification support.",
    },
    {
      no: "03",
      iconKey: "ar",
      title: "AR / VR experiences",
      desc: "Immersive worlds for Meta Quest, Apple Vision Pro, and WebXR — from brand activations to enterprise training simulators.",
    },
    {
      no: "04",
      iconKey: "multiplayer",
      title: "Multiplayer & backend",
      desc: "Realtime netcode, matchmaking, leaderboards, and scalable game servers powered by modern cloud infrastructure.",
    },
    {
      no: "05",
      iconKey: "art",
      title: "Game art & animation",
      desc: "2D illustration, 3D modeling, rigging, VFX, and cinematic animation that define signature visual identity.",
    },
    {
      no: "06",
      iconKey: "liveops",
      title: "Live-ops & analytics",
      desc: "Event pipelines, A/B testing, economy tuning, and player segmentation to grow LTV post-launch.",
    },
  ],
};

export type GamingProcessStep = {
  no: string;
  title: string;
  desc: string;
};

export type GamingProcessData = {
  title: string;
  subtitle: string;
  steps: GamingProcessStep[];
};

export const GAMING_PROCESS: GamingProcessData = {
  title: "Our production pipeline",
  subtitle:
    "A transparent, milestone-driven workflow that keeps creative ambition and delivery discipline in balance.",
  steps: [
    { no: "01", title: "Concept & pitch", desc: "Genre research, mechanics, and visual pillars." },
    { no: "02", title: "Prototype", desc: "Playable vertical slice to validate the core loop." },
    { no: "03", title: "Production", desc: "Feature build-out with weekly playable milestones." },
    { no: "04", title: "Polish & QA", desc: "Certification, balance tuning, and device testing." },
    { no: "05", title: "Launch & live-ops", desc: "Store ops, content updates, and community support." },
  ],
};

export type GamingWhyItem = { title: string; desc: string };

export type GamingWhyData = {
  title: string;
  subtitle: string;
  items: GamingWhyItem[];
};

export const GAMING_WHY: GamingWhyData = {
  title: "Why choose us",
  subtitle:
    "Studios and publishers choose us for our creative range, technical depth, and transparent production process.",
  items: [
    {
      title: "Proven track record",
      desc: "Shipped titles across mobile, PC, and console with millions of combined downloads.",
    },
    {
      title: "Cross-platform engineers",
      desc: "Unity, Unreal, and proprietary engine experts working shoulder-to-shoulder.",
    },
    {
      title: "Art-first production",
      desc: "In-house art directors and animators set a high visual bar from day one.",
    },
    {
      title: "Performance obsessed",
      desc: "Frame-time budgets, memory targets, and thermals tracked throughout the build.",
    },
    {
      title: "Flexible engagement",
      desc: "Full-cycle, co-dev, staff augmentation, or pure art/engineering pods.",
    },
    {
      title: "Scalable live-ops",
      desc: "Server infrastructure, content pipelines, and analytics tuned for growth.",
    },
  ],
};

export type GamingCtaData = {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export const GAMING_CTA: GamingCtaData = {
  title: "Ready to build your next hit game?",
  description:
    "Tell us about your vision — we'll share a production plan, timeline, and talent roster tailored to your goals.",
  primary: { label: "Start a project", href: "/contact" },
  secondary: { label: "Explore services", href: "#services" },
};
