import UIUXHero from "./sections/UIUXHero";
import UIUXCapabilities from "./sections/UIUXCapabilities";
import UIUXProcessBlock from "./sections/UIUXProcessBlock";
import UIUXBenefits from "./sections/UIUXBenefits";
import UIUXWhyChooseUs from "./sections/UIUXWhyChooseUs";
import UIUXTabs from "./sections/UIUXTabs";
import UIUXAdvantages from "./sections/UIUXAdvantages";
import UIUXStats from "./sections/UIUXStats";
import { GradientCta } from "../../../../components/branding";

const UIUXDesignPage = () => {
  return (
    <main className="bg-bg text-body">
      <UIUXHero />
      <UIUXCapabilities />
      <UIUXProcessBlock variant="both" />
      <UIUXBenefits />
      <UIUXWhyChooseUs />
      <UIUXTabs />
      <UIUXAdvantages />
      <UIUXStats />
      <GradientCta
        title="Let's design something users remember"
        description="Share your product goals — we'll return a UX plan, design direction, and measurable milestones."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "See our process", href: "#process" }}
      />
    </main>
  );
};

export default UIUXDesignPage;
