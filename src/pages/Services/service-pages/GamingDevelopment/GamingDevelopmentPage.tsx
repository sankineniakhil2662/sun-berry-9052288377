import GamingHero from "./sections/GamingDevelopmentHero";
import { GAMING_HERO } from "./gamingdevelopment.data";

export default function GamingDevelopmentPage() {
  return (
    <main className="bg-bg">
      <GamingHero data={GAMING_HERO} />
    </main>
  );
}
