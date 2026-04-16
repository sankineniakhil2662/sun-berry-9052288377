import type { LucideIcon } from "lucide-react";

import {
  Monitor,
  Globe,
  PanelsTopLeft,
  Blocks,
  ShoppingCart,
  FileText,
  ShieldCheck,
  Palette,
} from "lucide-react";

type WebDevServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const webDevelopmentData = {
  hero: {
    eyebrow: "What We Do?",
    title: "Creating High-Performing\nWebsites for Organizational\nGrowth",
    subtitle:
      "We offer full-spectrum Website Development services employing the latest technology innovations.",
    description:
      "We can deliver multiple project types such as customer-facing web apps, internal management portals, and e-commerce platforms. Our approach focuses on great-looking websites with a smooth and transparent development process.",
    ctaLabel: "Learn More",
    
    imageAlt: "Web development illustration",
    
  },

    services: {
    eyebrow: "Website Development Services",
    title: "Our Full-Range of Website\nDevelopment Services",
    subtitle:
      "We help businesses realise their full potential by showing them how to stand out from the crowd with the help of our world-class Website Development Services.",
    items: [
      {
        title: "Website Development",
        description:
          "Make potential customers visit your site on any device of their choice with a website that displays and functions flawlessly, which enhances UX, engagement, and search ranking.",
        icon: Monitor,
      },
      {
        title: "WordPress Development",
        description:
          "As a premier WordPress web site development company, we develop responsive, feature-laden, and interesting WordPress themes that are customised to your specific business needs.",
        icon: Globe,
      },
      {
        title: "Custom CMS Development",
        description:
          "We offer open-source CMS development services and different solutions such as WordPress, Joomla, Drupal, and Magento to help you manage your website content.",
        icon: PanelsTopLeft,
      },
      {
        title: "Magento Web Development",
        description:
          "Take full control of your website development and workflow with Magento features and settings, allowing you to scale up your ecommerce website and get the most out of online sales.",
        icon: Blocks,
      },
      {
        title: "Ecommerce Web Development",
        description:
          "We uplift your online business with unique eCommerce solutions that blend aesthetics and functionality to create exceptional shopping experiences that users enjoy.",
        icon: ShoppingCart,
      },
      {
        title: "Content Management System",
        description:
          "Enable your business with a user-friendly CMS that facilitates content management, updates, and optimisation by boosting efficiency and responsiveness.",
        icon: FileText,
      },

      {
        title: "Website Security Audits",
        description:
          "Keep your website completely safe and visible on search engines with our professional security audit. It helps to keep your valuable assets secure while increasing your Google ranking.",
        icon: ShieldCheck,
      },
      {
        title: "Website Design and Redesign",
        description:
          "Engage our team of web designers, who will create an advanced and stunning website to boost the engagement of your customer base and establish a rich brand identity.",
        icon: Palette,
      },
    ] satisfies WebDevServiceItem[],
  },

  whyChooseUs: {
    eyebrow: "Why choose us?",
    title: "Get Ready-Made Website\nDevelopment Solutions",
    description:
      "We always test, update, and fine-tune our Website Development Services. The developers of our team are also devoted to a lifelong learning process, which will eventually come in handy as you will be able to use the latest technologies and innovations. Each step does the trick and ensures the seamlessness and efficiency of your entire process, from ideation to implementation and support.",
    imageAlt: "Website development illustration",
    imageSrc: "/assets/services/web-development/why-choose-us.png",
    points: [
      "Precisely tailored to your requirements",
      "Easy-to-navigate and visually stunning",
      "Responsive UI and UX design",
      "Industry-standard security and scalability",
      "Professional-quality and engaging features",
      "Ongoing maintenance and support",
    ],
  },
  preferredPartner: {
    eyebrow: "why choose us?",
    title: "Why Sunberry is the\nPreferred Web Development\nPartner?",
    description:
      "At Sunberry, we apply the most advanced agile methodology to create attractive websites that inspire and refresh your audience’s mind and present your brand identity. Our Website Development Company in India puts quality first so your website will be rendered perfectly and will have the same functionality in any device and screen size.",
    cards: [
      {
        number: "01",
        title: "User-Centric Approach",
        description:
          "Sunberry carefully analyse each stage of the user journey and work closely with clients to provide custom solutions based on brand objectives and deliver a holistic experience.",
      },
      {
        number: "02",
        title: "Seasoned Developers",
        description:
          "Our experienced Website Development Company team guarantees high-performance websites with beautiful visuals that are supported by outstanding technologies and a solid portfolio.",
      },
      {
        number: "03",
        title: "Complete Transparency",
        description:
          "Sunberry start with transparency from project kickoff through delivery, including client feedback incorporation to deliver beyond expectations.",
      },
      {
        number: "04",
        title: "Quality Assurance",
        description:
          "Sunberry is committed to complying with industry standards so that we can run tests extensively to guarantee that the product runs smoothly and without any glitches.",
      },
      {
        number: "05",
        title: "100% Customer Satisfaction",
        description:
          "We are able to deliver all projects regardless of their size and become an integral part of your business, enabling your website to match your brand identity.",
      },
      {
        number: "06",
        title: "Future Proof",
        description:
          "Sunberry is a flexible Website Development Company in India, that adapts to your business needs, using the latest scalable technologies to meet the challenges and opportunities ahead.",
      },
    ],
  },
};
