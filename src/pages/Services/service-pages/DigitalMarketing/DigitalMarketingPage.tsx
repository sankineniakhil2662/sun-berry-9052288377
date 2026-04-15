import DigitalMarketingHero from "./sections/DigitalMarketingHero";
import DigitalMarketingOverview from "./sections/DigitalMarketingOverview";
import { DIGITAL_MARKETING_HERO } from "./digitalmarketing.data";

export default function DigitalMarketingPage() {
  return (
    <main className="bg-bg">
      <DigitalMarketingHero data={DIGITAL_MARKETING_HERO} />
      <DigitalMarketingOverview data={DIGITAL_MARKETING_HERO} />
    </main>
  );
}
