import { Smartphone } from "lucide-react";
import { GradientHero } from "../../../../../components/branding";

type HeroData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  imageAlt: string;
  experienceLabel?: string;
};

export default function Hero({ data }: { data: HeroData }) {
  return (
    <GradientHero
      eyebrow={data.eyebrow}
      eyebrowIcon={Smartphone}
      titleLead="Mobile App"
      titleAccent="Development Company"
      titleTail="in India"
      subtitle={data.subtitle}
      description={data.description}
      primaryCta={{ label: data.ctaLabel, href: "#capabilities" }}
      secondaryCta={{ label: "Contact Us", href: "/contact" }}
    />
  );
}
