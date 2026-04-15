
import React from "react";
import { mobileAppDevData } from "./data";
import Hero from "./sections/Hero";
import Capabilities from "./sections/Capabilities";
import ProcessBlock from "./sections/ProcessBlock";
import WhyChooseUs from "./sections/WhyChooseUs";
import OurExpertise from "./sections/OurExpertise";



export default function MobileAppDevelopmentPage() {
  return (
    <main className="bg-bg">
      <Hero data={mobileAppDevData.hero} />
      <Capabilities data={mobileAppDevData.capabilities} />
      <ProcessBlock data={mobileAppDevData.process}/>
      <WhyChooseUs data={mobileAppDevData.why} />
      <OurExpertise data={mobileAppDevData.expertise} />
    </main>
  );
}
