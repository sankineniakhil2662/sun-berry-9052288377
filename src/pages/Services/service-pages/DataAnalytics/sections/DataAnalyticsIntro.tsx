import { BarChart3 } from "lucide-react";
import { GradientHero } from "../../../../../components/branding";
import type { DataAnalyticsIntroData } from "../data-analytics.data";

export default function DataAnalyticsIntro({ data }: { data: DataAnalyticsIntroData }) {
  return (
    <GradientHero
      eyebrow="Data Analytics"
      eyebrowIcon={BarChart3}
      titleLead="Turn raw data into"
      titleAccent="actionable insights"
      subtitle={data.heroSubtitle}
      primaryCta={{ label: "Contact Us", href: "/contact" }}
      secondaryCta={{ label: "Our Services", href: "#what-we-do" }}
    />
  );
}
