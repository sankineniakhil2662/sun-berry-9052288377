import { GraduationCap } from "lucide-react";
import { GradientHero } from "../../../../../components/branding";
import type { InternshipHeroData } from "../InternshipPrograms.data";

export default function InternshipHero({ data }: { data: InternshipHeroData }) {
  return (
    <GradientHero
      eyebrow={data.eyebrow}
      eyebrowIcon={GraduationCap}
      titleLead={data.titleLead}
      titleAccent={data.titleAccent}
      titleTail={data.titleTail}
      subtitle={data.subtitle}
      primaryCta={data.primary}
      secondaryCta={data.secondary}
      accent="purple-cyan"
    />
  );
}
