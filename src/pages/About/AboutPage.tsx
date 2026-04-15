
import React from "react";
import AboutHero from "../../components/about/AboutHero";
import CompanyOverview from "../../components/about/CompanyOverview";
import CoreValuesSection from "../../components/about/CoreValueSection";
import AboutSection from "../../components/about/AboutSection";
import AboutFeatures from "../../components/about/AboutFeatures";

// import aboutHeroImg from "../../assets/images/aboutHeroImg.png"; // Adjust the path as needed

import aboutHeroImg from '../../assets/tyl1.png'; // Adjust the path as needed

 


const About = () => {
  return (
    <>
      <AboutHero
        titleTop="Building Technology That"
        titleAccent="Actually Works"
        description="We create software solutions that solve real business problems and help companies grow faster, work smarter, and serve their customers better."
        tags={[
          { label: "Trusted", dotClass: "bg-emerald-500" },
          { label: "24/7 Support", dotClass: "bg-indigo-500" },
          { label: "Premium", dotClass: "bg-violet-500" },
        ]}
        primary={{ label: "Our Services", href: "/services" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
        stats={[
          { value: "15+ Industries", label: "Tailored solutions that fit." },
          { value: "24/7 Support", label: "Always-on technical coverage." },
        ]}
        mockupImageSrc={aboutHeroImg}
        floatingBadges={[
          {
            title: "Live Support",
            subtitle: "Online Now",
            dotClass: "bg-emerald-500",
            className: "left-6 top-16",
          },
          {
            title: "24/7 Available",
            subtitle: "Always Online",
            dotClass: "bg-indigo-500",
            className: "right-6 top-10",
          },
        ]}
      />
      <AboutSection/>
      <CompanyOverview />
      <CoreValuesSection />
      <AboutFeatures/>
      
    </>
  );
};

export default About;