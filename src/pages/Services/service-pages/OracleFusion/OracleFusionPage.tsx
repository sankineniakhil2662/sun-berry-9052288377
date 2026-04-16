import OracleFusionIntro from "./sections/OracleFusionIntro";
import OracleFusionOverview from "./sections/OracleFusionOverview";
import OracleFusionWhatWeDo from "./sections/OracleFusionWhatWeDo";
import OracleFusionModules from "./sections/OracleFusionModules";
import OracleFusionExpertise from "./sections/OracleFusionExpertise";
import OracleFusionWhyChoose from "./sections/OracleFusionWhyChoose";
import OracleFusionIndustries from "./sections/OracleFusionIndustries";
import OracleFusionEngagement from "./sections/OracleFusionEngagement";
import OracleFusionCta from "./sections/OracleFusionCta";

import {
  ORACLE_FUSION_HERO,
  ORACLE_FUSION_OVERVIEW,
  ORACLE_FUSION_CORE_SERVICES,
  ORACLE_FUSION_MODULES,
  ORACLE_FUSION_EXPERTISE,
  ORACLE_FUSION_WHY,
  ORACLE_FUSION_INDUSTRIES,
  ORACLE_FUSION_ENGAGEMENT,
  ORACLE_FUSION_CTA,
} from "./oracle-fusion.data";

export default function OracleFusionPage() {
  return (
    <main className="bg-bg">
      <OracleFusionIntro data={ORACLE_FUSION_HERO} />
      <OracleFusionOverview data={ORACLE_FUSION_OVERVIEW} />
      <OracleFusionWhatWeDo data={ORACLE_FUSION_CORE_SERVICES} />
      <OracleFusionModules data={ORACLE_FUSION_MODULES} />
      <OracleFusionExpertise data={ORACLE_FUSION_EXPERTISE} />
      <OracleFusionWhyChoose data={ORACLE_FUSION_WHY} />
      <OracleFusionIndustries data={ORACLE_FUSION_INDUSTRIES} />
      <OracleFusionEngagement data={ORACLE_FUSION_ENGAGEMENT} />
      <OracleFusionCta data={ORACLE_FUSION_CTA} />
    </main>
  );
}
