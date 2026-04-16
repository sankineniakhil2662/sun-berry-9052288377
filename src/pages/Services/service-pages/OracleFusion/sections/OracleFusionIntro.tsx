import { Cloud } from "lucide-react";
import { GradientHero } from "../../../../../components/branding";
import type { OracleFusionHeroData } from "../oracle-fusion.data";

export default function OracleFusionIntro({ data }: { data: OracleFusionHeroData }) {
  return (
    <GradientHero
      eyebrow={data.eyebrow}
      eyebrowIcon={Cloud}
      titleLead={data.titleLead}
      titleAccent={data.titleAccent}
      subtitle={data.subtitle}
      primaryCta={data.primaryCta}
      secondaryCta={data.secondaryCta}
      accent="purple-cyan"
    />
  );
}
