import type { Technology } from "../types/eLearning.types";
import { getCountsFromQuestions } from "./questions";

type TechnologyMeta = Omit<Technology, "counts">;

const TECHNOLOGY_META: TechnologyMeta[] = [
  // 🧑‍💻 Programming Languages (Core)
  { slug: "python", label: "Python", categoryKey: "programming", categoryLabel: "🧑‍💻 Programming Languages (Core)" },
  { slug: "java", label: "Java", categoryKey: "programming", categoryLabel: "🧑‍💻 Programming Languages (Core)" },
  { slug: "javascript", label: "JavaScript", categoryKey: "programming", categoryLabel: "🧑‍💻 Programming Languages (Core)" },
  { slug: "typescript", label: "TypeScript", categoryKey: "programming", categoryLabel: "🧑‍💻 Programming Languages (Core)" },
  { slug: "c", label: "C", categoryKey: "programming", categoryLabel: "🧑‍💻 Programming Languages (Core)" },
  { slug: "cpp", label: "C++", categoryKey: "programming", categoryLabel: "🧑‍💻 Programming Languages (Core)" },
  { slug: "csharp", label: "C#", categoryKey: "programming", categoryLabel: "🧑‍💻 Programming Languages (Core)" },
  { slug: "go", label: "Go (Golang)", categoryKey: "programming", categoryLabel: "🧑‍💻 Programming Languages (Core)" },
  { slug: "rust", label: "Rust", categoryKey: "programming", categoryLabel: "🧑‍💻 Programming Languages (Core)" },
  { slug: "kotlin", label: "Kotlin", categoryKey: "programming", categoryLabel: "🧑‍💻 Programming Languages (Core)" },

  // 🌐 Frontend Technologies
  { slug: "html5", label: "HTML5", categoryKey: "frontend", categoryLabel: "🌐 Frontend Technologies" },
  { slug: "css3", label: "CSS3", categoryKey: "frontend", categoryLabel: "🌐 Frontend Technologies" },
  { slug: "react", label: "React", categoryKey: "frontend", categoryLabel: "🌐 Frontend Technologies" },
  { slug: "angular", label: "Angular", categoryKey: "frontend", categoryLabel: "🌐 Frontend Technologies" },
  { slug: "vue", label: "Vue.js", categoryKey: "frontend", categoryLabel: "🌐 Frontend Technologies" },
  { slug: "nextjs", label: "Next.js", categoryKey: "frontend", categoryLabel: "🌐 Frontend Technologies" },
  { slug: "tailwind", label: "Tailwind CSS", categoryKey: "frontend", categoryLabel: "🌐 Frontend Technologies" },
  { slug: "bootstrap", label: "Bootstrap", categoryKey: "frontend", categoryLabel: "🌐 Frontend Technologies" },
  { slug: "sass", label: "SASS / SCSS", categoryKey: "frontend", categoryLabel: "🌐 Frontend Technologies" },
  { slug: "a11y", label: "Web Accessibility (a11y)", categoryKey: "frontend", categoryLabel: "🌐 Frontend Technologies" },

  // 📱 Mobile App Development
  { slug: "react-native", label: "React Native", categoryKey: "mobile", categoryLabel: "📱 Mobile App Development" },
  { slug: "flutter", label: "Flutter", categoryKey: "mobile", categoryLabel: "📱 Mobile App Development" },
  { slug: "android", label: "Android (Java / Kotlin)", categoryKey: "mobile", categoryLabel: "📱 Mobile App Development" },
  { slug: "ios", label: "iOS (Swift)", categoryKey: "mobile", categoryLabel: "📱 Mobile App Development" },
  { slug: "expo", label: "Expo", categoryKey: "mobile", categoryLabel: "📱 Mobile App Development" },
  { slug: "ionic", label: "Ionic", categoryKey: "mobile", categoryLabel: "📱 Mobile App Development" },

  // 🧠 Backend & Server-Side
  { slug: "nodejs", label: "Node.js", categoryKey: "backend", categoryLabel: "🧠 Backend & Server-Side" },
  { slug: "express", label: "Express.js", categoryKey: "backend", categoryLabel: "🧠 Backend & Server-Side" },
  { slug: "nestjs", label: "NestJS", categoryKey: "backend", categoryLabel: "🧠 Backend & Server-Side" },
  { slug: "spring-boot", label: "Spring Boot", categoryKey: "backend", categoryLabel: "🧠 Backend & Server-Side" },
  { slug: "django", label: "Django", categoryKey: "backend", categoryLabel: "🧠 Backend & Server-Side" },
  { slug: "flask", label: "Flask", categoryKey: "backend", categoryLabel: "🧠 Backend & Server-Side" },
  { slug: "fastapi", label: "FastAPI", categoryKey: "backend", categoryLabel: "🧠 Backend & Server-Side" },
  { slug: "dotnet-core", label: ".NET Core", categoryKey: "backend", categoryLabel: "🧠 Backend & Server-Side" },

  // ☁️ Cloud & DevOps
  { slug: "aws", label: "AWS", categoryKey: "cloud", categoryLabel: "☁️ Cloud & DevOps (VERY IMPORTANT)" },
  { slug: "azure", label: "Microsoft Azure", categoryKey: "cloud", categoryLabel: "☁️ Cloud & DevOps (VERY IMPORTANT)" },
  { slug: "gcp", label: "Google Cloud Platform (GCP)", categoryKey: "cloud", categoryLabel: "☁️ Cloud & DevOps (VERY IMPORTANT)" },
  { slug: "docker", label: "Docker", categoryKey: "cloud", categoryLabel: "☁️ Cloud & DevOps (VERY IMPORTANT)" },
  { slug: "kubernetes", label: "Kubernetes", categoryKey: "cloud", categoryLabel: "☁️ Cloud & DevOps (VERY IMPORTANT)" },
  { slug: "cicd", label: "CI/CD (GitHub Actions / Jenkins)", categoryKey: "cloud", categoryLabel: "☁️ Cloud & DevOps (VERY IMPORTANT)" },

  // 🗄️ Databases
  { slug: "mysql", label: "MySQL", categoryKey: "database", categoryLabel: "🗄️ Databases" },
  { slug: "postgresql", label: "PostgreSQL", categoryKey: "database", categoryLabel: "🗄️ Databases" },
  { slug: "mongodb", label: "MongoDB", categoryKey: "database", categoryLabel: "🗄️ Databases" },
  { slug: "redis", label: "Redis", categoryKey: "database", categoryLabel: "🗄️ Databases" },

  // 🤖 Data, AI & Emerging Tech
  { slug: "machine-learning", label: "Machine Learning", categoryKey: "data-ai", categoryLabel: "🤖 Data, AI & Emerging Tech" },
  { slug: "data-analytics", label: "Data Analytics", categoryKey: "data-ai", categoryLabel: "🤖 Data, AI & Emerging Tech" },
  { slug: "artificial-intelligence", label: "Artificial Intelligence", categoryKey: "data-ai", categoryLabel: "🤖 Data, AI & Emerging Tech" },
  { slug: "blockchain", label: "Blockchain", categoryKey: "data-ai", categoryLabel: "🤖 Data, AI & Emerging Tech" },
  { slug: "iot", label: "Internet of Things (IoT)", categoryKey: "data-ai", categoryLabel: "🤖 Data, AI & Emerging Tech" },
  { slug: "cyber-security", label: "Cyber Security", categoryKey: "data-ai", categoryLabel: "🤖 Data, AI & Emerging Tech" },

  // 🔥 Interview-Focused
  { slug: "salesforce", label: "Salesforce / CRM", categoryKey: "bonus", categoryLabel: "🔥 Interview-Focused" },
  { slug: "powerbi-tableau", label: "Power BI / Tableau", categoryKey: "bonus", categoryLabel: "🔥 Interview-Focused" },
  { slug: "system-design", label: "System Design", categoryKey: "bonus", categoryLabel: "🔥 Interview-Focused" },
  { slug: "dsa", label: "DSA (Data Structures & Algorithms)", categoryKey: "bonus", categoryLabel: "🔥 Interview-Focused" },
  { slug: "prompt-engineering", label: "Prompt Engineering", categoryKey: "bonus", categoryLabel: "🔥 Interview-Focused" }
];
export const TECHNOLOGIES: Technology[] = TECHNOLOGY_META.map((t) => ({
  ...t,
  counts: getCountsFromQuestions(t.slug)
}));
export function getTechnologyBySlug(slug: string) {
  return TECHNOLOGIES.find((t) => t.slug === slug);
}
