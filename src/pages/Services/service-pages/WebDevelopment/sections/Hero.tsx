import { Sparkles } from "lucide-react";
import { GradientHero } from "../../../../../components/branding";

type HeroData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  imageAlt: string;
};

export default function Hero({ data }: { data: HeroData }) {
  return (
    <GradientHero
      eyebrow={data.eyebrow}
      eyebrowIcon={Sparkles}
      titleLead="Creating"
      titleAccent="High-Performing Websites"
      titleTail="for Organizational Growth"
      subtitle={data.subtitle}
      description={data.description}
      primaryCta={{ label: data.ctaLabel, href: "#services" }}
      secondaryCta={{ label: "Contact Us", href: "/contact" }}
    />
  );
}
