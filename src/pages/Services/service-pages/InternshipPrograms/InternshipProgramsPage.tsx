import InternshipHero from "./sections/InternshipProgramsHero";
import InternshipOverview from "./sections/InternshipOverview";
import InternshipTracks from "./sections/InternshipTracks";
import InternshipProcess from "./sections/InternshipProcess";
import InternshipBenefits from "./sections/InternshipBenefits";
import { GradientCta } from "../../../../components/branding";
import {
  INTERNSHIP_HERO,
  INTERNSHIP_OVERVIEW,
  INTERNSHIP_TRACKS,
  INTERNSHIP_PROCESS,
  INTERNSHIP_BENEFITS,
  INTERNSHIP_CTA,
} from "./InternshipPrograms.data";

export default function InternshipProgramsPage() {
  return (
    <main className="bg-bg">
      <InternshipHero data={INTERNSHIP_HERO} />
      <InternshipOverview data={INTERNSHIP_OVERVIEW} />
      <InternshipTracks data={INTERNSHIP_TRACKS} />
      <InternshipProcess data={INTERNSHIP_PROCESS} />
      <InternshipBenefits data={INTERNSHIP_BENEFITS} />
      <GradientCta
        title={INTERNSHIP_CTA.title}
        description={INTERNSHIP_CTA.description}
        primary={INTERNSHIP_CTA.primary}
        secondary={INTERNSHIP_CTA.secondary}
      />
    </main>
  );
}
