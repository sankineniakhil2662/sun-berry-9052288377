import GamingHero from "./sections/GamingDevelopmentHero";
import GamingOverview from "./sections/GamingOverview";
import GamingServices from "./sections/GamingServices";
import GamingProcess from "./sections/GamingProcess";
import GamingWhyChoose from "./sections/GamingWhyChoose";
import { GradientCta } from "../../../../components/branding";
import {
  GAMING_HERO,
  GAMING_OVERVIEW,
  GAMING_SERVICES,
  GAMING_PROCESS,
  GAMING_WHY,
  GAMING_CTA,
} from "./gamingdevelopment.data";

export default function GamingDevelopmentPage() {
  return (
    <main className="bg-bg">
      <GamingHero data={GAMING_HERO} />
      <GamingOverview data={GAMING_OVERVIEW} />
      <GamingServices data={GAMING_SERVICES} />
      <GamingProcess data={GAMING_PROCESS} />
      <GamingWhyChoose data={GAMING_WHY} />
      <GradientCta
        title={GAMING_CTA.title}
        description={GAMING_CTA.description}
        primary={GAMING_CTA.primary}
        secondary={GAMING_CTA.secondary}
      />
    </main>
  );
}
