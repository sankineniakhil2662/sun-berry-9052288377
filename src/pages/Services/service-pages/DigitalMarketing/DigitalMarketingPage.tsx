import DigitalMarketingHero from "./sections/DigitalMarketingHero";
import DigitalMarketingOverview from "./sections/DigitalMarketingOverview";
import DigitalMarketingServices from "./sections/DigitalMarketingServices";
import DigitalMarketingProcess from "./sections/DigitalMarketingProcess";
import { GradientCta } from "../../../../components/branding";
import {
  DIGITAL_MARKETING_HERO,
  DIGITAL_MARKETING_OVERVIEW,
  DIGITAL_MARKETING_SERVICES,
  DIGITAL_MARKETING_PROCESS,
  DIGITAL_MARKETING_CTA,
} from "./digitalmarketing.data";

export default function DigitalMarketingPage() {
  return (
    <main className="bg-bg">
      <DigitalMarketingHero data={DIGITAL_MARKETING_HERO} />
      <DigitalMarketingOverview data={DIGITAL_MARKETING_OVERVIEW} />
      <DigitalMarketingServices data={DIGITAL_MARKETING_SERVICES} />
      <DigitalMarketingProcess data={DIGITAL_MARKETING_PROCESS} />
      <GradientCta
        title={DIGITAL_MARKETING_CTA.title}
        description={DIGITAL_MARKETING_CTA.description}
        primary={DIGITAL_MARKETING_CTA.primary}
        secondary={DIGITAL_MARKETING_CTA.secondary}
      />
    </main>
  );
}
