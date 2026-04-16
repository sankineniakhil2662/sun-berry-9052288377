import { Sparkles } from "lucide-react";
import { GradientHero } from "../../../../../components/branding";
import type { AISolutionsHeroData } from "../ai-solutions.data";

export default function AISolutionsIntro({ data }: { data: AISolutionsHeroData }) {
  return (
    <GradientHero
      eyebrow={data.eyebrow}
      eyebrowIcon={Sparkles}
      titleLead={data.titleLead}
      titleAccent={data.titleAccent}
      subtitle={data.subtitle}
      primaryCta={data.primaryCta}
      secondaryCta={data.secondaryCta}
    />
  );
}
