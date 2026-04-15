import ServiceCard from "../../../components/ServiceCard";
import React from "react";

const ServicesSection: React.FC = () => {
  const servicesData = [
    {
      title: "Photography & Videography",
      imageSrc: "src/assets/images/services/Editing.png",
      description:
        "Professional photo and video production to strengthen brand identity and storytelling.",
    },
    {
      title: "Digital Marketing",
      imageSrc: "src/assets/images/services/Digital.png",
      description:
        "Data-driven marketing strategies to increase visibility, engagement and business growth.",
    },
    {
      title: "Internship Programs",
      imageSrc: "src/assets/images/services/Intern.png",
      description:
        "Industry-focused internship programs designed to build practical skills and experience.",
    },
    {
      title: "E-Learning Solutions",
      imageSrc: "src/assets/images/services/course.png",
      description:
        "Interactive online learning platforms delivering structured and engaging educational content.",
    },
    {
      title: "Game Development",
      imageSrc: "src/assets/images/services/games.png",
      description:
        "Design and develop immersive games with engaging gameplay and modern technologies.",
    },
    {
      title: "Mobile App Development",
      imageSrc: "src/assets/images/services/Mobile.png",
      description:
        "Build high-performance mobile applications with intuitive design and seamless user experience.",
    },
    {
      title: "Web Development",
      imageSrc: "src/assets/images/services/Web.png",
      description:
        "Develop fast, scalable and secure web solutions tailored to your business goals.",
    },
    {
      title: "UI/UX Design",
      imageSrc: "src/assets/images/services/UIUX.png",
      description:
        "Create visually engaging and user-centered designs that enhance usability and interaction.",
    },
    
    {
      title: "Data Analytics",
      imageSrc: "src/assets/images/services/analytics.png",
      description:
        "Transform raw data into actionable insights to support smarter business decisions.",
    },
  ];
  

  return (
    <section className="bg-bg py-20">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          Services
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-heading sm:text-4xl">
          Solutions designed for momentum
        </h2>

        <p className="mt-3 text-base text-body">
          Comprehensive solutions tailored to your business needs.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title}   // ✅ no index warning
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
