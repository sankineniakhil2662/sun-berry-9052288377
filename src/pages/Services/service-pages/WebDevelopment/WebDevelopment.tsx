
import React from "react";
import { webDevelopmentData } from "./data";
import Hero from "./sections/Hero";
import DevelopmentServices from "./sections/DevelopmentServices";
import WhyChooseUs from "./sections/WhyChooseUs";
import PreferredPartner from "./sections/PreferredPartner";

export default function WebDevelopmentPage() {
  return (
    <main className="bg-bg">
      <Hero data={webDevelopmentData.hero} />
      <DevelopmentServices data={webDevelopmentData.services} />
      <WhyChooseUs data={webDevelopmentData.whyChooseUs} />
      <PreferredPartner data={webDevelopmentData.preferredPartner} />
    </main>
  );
}
