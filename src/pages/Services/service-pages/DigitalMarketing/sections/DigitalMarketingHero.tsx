import { Megaphone } from "lucide-react";
import { GradientHero } from "../../../../../components/branding";
import type { DigitalMarketingHeroData } from "../digitalmarketing.data";

export default function DigitalMarketingHero({ data }: { data: DigitalMarketingHeroData }) {
  return (
    <GradientHero
      eyebrow={data.eyebrow}
      eyebrowIcon={Megaphone}
      titleLead={data.titleLead}
      titleAccent={data.titleAccent}
      subtitle={data.subtitle}
      primaryCta={data.primary}
      secondaryCta={data.secondary}
    />
  );
}
