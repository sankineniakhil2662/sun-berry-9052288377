

export type ELearningIntroData = {
  eyebrow: string;
  body: string[];
  cta: {
    label: string;
    href: string;
  };
};

export const E_LEARNING_INTRO: ELearningIntroData = {
  eyebrow: "E-LEARNING DEVELOPMENT",
  body: [
    "E-Learning Development involves designing and delivering engaging digital learning experiences that blend multimedia elements such as videos, animations, simulations, and interactive activities.",
    "This process focuses on creating accessible, responsive, and customized content tailored to specific learning goals and audience needs.",
    "By leveraging modern authoring tools and platforms, e-learning development ensures efficient knowledge delivery, enhances learner engagement, and supports skill development in a variety of settings, from corporate training to academic education.",
  ],
  cta: {
    label: "SCHEDULE APPOINTMENT",
    href: "/contact",
  },
};
