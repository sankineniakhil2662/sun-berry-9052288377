export type DigitalMarketingData = {
  title: string;
  cta: {
    label: string;
    href: string;
  };
};

export const DIGITAL_MARKETING_HERO: DigitalMarketingData = {
  title: "Digital Marketing Services",
  cta: {
    label: "Contact Us For More Information",
    href: "/contact",
  },

  overview: {
    title: "Overview of Digital Marketing",
    description:
      "In today’s fast-paced world, every brand needs a strong online presence. A digital marketing company helps businesses create powerful online strategies that lead to measurable results. With the right approach, your business can experience consistent digital growth and reach more customers. Choosing the right digital marketing agency means partnering with professionals who understand your industry and know how to drive results.",
    whyTitle: "Why Partner with a Digital Marketing Company?",
    whyDescription:
      "A digital marketing company offers end-to-end solutions for brands that want to succeed online. From SEO to social media management, their services are tailored to your needs. Working with professionals ensures that your marketing strategies are data-driven and result-oriented.",
    benefitsLabel: "Key benefits include:",
    points: [
      "Brand visibility across multiple platforms.",
      "Cost-effective advertising solutions.",
      "Increased website traffic and lead generation.",
      "Better ROI through targeted strategies.",
      "Long-term digital growth with measurable results.",
    ],
    imageAlt: "Digital marketing workspace illustration",
  },
};
