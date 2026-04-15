import agricultureHeroImg from "../../assets/industries/farming.png";
import drConsultationHeroImg from "../../assets/industries/dr_consultation.png";
import fintechHeroImg from "../../assets/industries/fintech.png";
import groceryDeliveryHeroImg from "../../assets/industries/Grocery.png";
import iotHeroImg from "../../assets/industries/IOT.png";
import logisticHeroImg from "../../assets/industries/Logistic.png";
import onDemandHeroImg from "../../assets/industries/on_demand.png";
import securityHeroImg from "../../assets/industries/Security.png";
import blockchainHeroImg from "../../assets/industries/Block_chain.png";
import eCommerceHeroImg from "../../assets/industries/E-Commerce.png";
import foodDeliveryHeroImg from "../../assets/industries/Food.png";
import healthcareHeroImg from "../../assets/industries/Health.png";
import laundryHeroImg from "../../assets/industries/laundry.png";
import mediaHeroImg from "../../assets/industries/Media.png";
import realestateheroImg from "../../assets/industries/real_estate.png";
import socialMediaHeroImg from "../../assets/industries/social.png"
import crmDeveHeroImg from "../../assets/industries/crm.png";
import educationHeroImg from "../../assets/industries/education.png";
import gpsTrackingHeroImg from"../../assets/industries/gps.png";
import hotelBookingHeroImg from "../../assets/industries/hotel.png";
import liveStreamingHeroImg from "../../assets/industries/live-streaming.png";
import newAppHeroImg from "../../assets/industries/news.png";
import saasHeroImg from "../../assets/industries/saas.png";
import taxiHeroImg from "../../assets/industries/taxbooking.png";



export type IndustrySectionKey =
  | "overview"
  | "methodology"
  | "welcome"
  | "workWithUs"
  | "startWorkWithUs"
  | "company"
  | "benefits"
  | "whyChoose";

export type IndustrySection = {
  key: IndustrySectionKey;
  eyebrow?: string; // small label
  title: string; // section heading
  description?: string; // paragraph
  points?: string[]; // bullets
};

export type IndustryPageData = {
  slug: string; // must match your route + dropdown link
  label: string; // small uppercase label
  title: string; // big title
  subtitle?: string; // optional small line
  heroPoints?: string[]; // quick bullets in hero
  accent?: "brand" | "purple" | "navy";
  sections: IndustrySection[];
  heroImage: {
    src: string;
    alt: string;
  };
};


export const INDUSTRIES_DATA: Record<string, IndustryPageData> = {
  "agriculture-farming": {
    slug: "agriculture-farming",
    label: "AGRICULTURE & FARMING",
    title: "Agriculture & Farming",
    subtitle:
      "Smart, scalable agri-tech platforms built for modern farming operations.",
    accent: "brand",
    heroPoints: [
      "Crop Monitoring & Soil Health Analysis",
      "Weather Forecasting & Alerts",
      "Smart Irrigation & Resource Optimization",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Revolutionize Agriculture with Smart Digital Solutions",
        description:
          "At TYL Tech, we are driven by a vision to revolutionize the agricultural ecosystem through smart, innovative technology. As a trusted Agriculture & Farming App Development Company, we deliver cutting-edge agriculture app development services that empower farmers, agribusinesses, and startups to boost productivity and operational efficiency.",
        points: [
          "Intelligent crop monitoring and farm analytics",
          "Data-driven resource planning for water, fertilizers, and labor",
          "High-performance mobile and web platforms built to scale",
        ],
      },
      {
        key: "methodology",
        eyebrow: "Our Methodology",
        title: "A Proven Delivery Process — From Concept to Deployment",
        description:
          "TYL Tech is a leading Agriculture & Farming App Development Company in Hyderabad, specializing in crafting engaging, high-performance mobile and web applications. We focus on enhancing user experiences through thoughtful design, robust development, and innovative technology.",
        points: [
          "Discovery and requirement mapping with clear milestones",
          "UI/UX prototypes aligned to your real workflows",
          "Agile development with continuous QA and performance checks",
          "Secure deployment and post-launch optimization",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome to Our Company",
        title: "Empowering Farmers with Innovative Agri-Tech",
        description:
          "Welcome to TYL Tech, where technology and innovation come together to cultivate a smarter, more sustainable farming ecosystem. We build intelligent, secure, and scalable platforms that simplify farm management, enhance productivity, and support data-driven decision-making.",
        points: [
          "Smart irrigation, equipment tracking, and resource planning",
          "Farm dashboards for real-time insights and reporting",
          "Custom mobile and web apps tailored to your business model",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "Custom Agriculture Apps That Modernize Farming Operations",
        description:
          "We build next-generation agriculture software solutions that help farmers, agribusinesses, and startups adopt smarter, more efficient farming practices—using AI, IoT, and cloud integrations.",
        points: [
          "AI/IoT-powered insights for precision agriculture",
          "Secure, scalable architecture built for real-world usage",
          "Systems designed for reliability, speed, and usability",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Let’s Turn Your Agri-Tech Vision into Reality",
        description:
          "We begin by understanding your goals and challenges, then craft a solution that improves efficiency, decision-making, and results—turning traditional farming into a modern, data-driven experience.",
        points: [
          "Farm management platforms and precision agriculture systems",
          "Smart irrigation apps and real-time analytics",
          "Future-ready builds that grow with your operations",
        ],
      },
      {
        key: "company",
        eyebrow: "Agriculture & Farming App Development Company",
        title: "High-Performance Agri-Tech Platforms Built to Scale",
        description:
          "TYL Tech builds smart, scalable, and innovative digital solutions for agriculture and agribusiness. From precision farming and crop monitoring to weather forecasting and farm management platforms—our systems are designed for long-term growth.",
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "Benefits of Agriculture & Farming Apps",
        points: [
          "Enhanced Efficiency through automation and digitized workflows",
          "Real-Time Insights with IoT-enabled monitoring",
          "Improved Resource Management for water, fertilizers, and labor",
          "Data-Driven Decisions using analytics and forecasting",
          "Increased Profitability by reducing waste and operational costs",
          "Sustainability & Innovation for long-term resilience",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech?",
        title: "A Trusted Partner for Modern Agriculture Software",
        points: [
          "Strict NDAs ensuring full confidentiality",
          "Cost-effective development with premium build quality",
          "Experienced Agri-Tech developers and scalable architecture",
          "Agile delivery with transparent progress and milestones",
          "Secure, high-performance systems built for reliability",
          "Ongoing post-launch support and maintenance",
        ],
      },
    ],
    heroImage: {
      src: agricultureHeroImg,
      alt: "Agriculture digital platform mockup",
    },
  },
  "dr-consultation": {
    slug: "dr-consultation",
    label: "DR. CONSULTATION",
    title: "Dr. Consultation",
    subtitle:
      "Secure, scalable doctor appointment and teleconsultation platforms built for modern healthcare.",
    accent: "purple",
    heroPoints: [
      "Doctor Appointment Scheduling",
      "Teleconsultations & Video Calls",
      "EHR Support & Secure Data Handling",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Smart, Secure Doctor Appointment & Consultation Apps",
        description:
          "TYL Tech is a leading Doctor Appointment App Development Company, delivering smart, secure, and user-friendly healthcare app solutions. We help hospitals, clinics, and healthcare startups simplify patient appointment booking, manage real-time doctor schedules, and enable seamless teleconsultations through feature-rich mobile applications for both Android and iOS platforms.",
        points: [
          "Real-time appointment booking and schedule management",
          "Teleconsultations built for smooth patient experiences",
          "Secure data handling with scalable architecture",
        ],
      },
      {
        key: "methodology",
        eyebrow: "Our Methodology",
        title: "A Proven Delivery Process — From Concept to Deployment",
        description:
          "TYL Tech is a leading Doctor Consultation App Development Company in Hyderabad, specializing in creating and enhancing exceptional user experiences through the design and development of innovative mobile and web applications. We build intuitive, secure, and high-performance digital solutions that connect patients and healthcare providers seamlessly.",
        points: [
          "Requirements discovery aligned to clinical workflows",
          "UI/UX design optimized for patients and providers",
          "Agile development with QA, security, and performance checks",
          "Reliable deployment and continuous optimization post-launch",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome to Our Company",
        title: "Trusted Partner in Doctor Appointment App Development",
        description:
          "At TYL Tech, our expert team delivers fully customized healthcare applications powered by advanced features such as real-time appointment scheduling, telemedicine integration, automated reminders, and Electronic Health Record (EHR) support.",
        points: [
          "Telemedicine integration with reminders and notifications",
          "EHR support with secure access controls",
          "Scalable, compliant builds for clinics and hospitals",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "Work With a Trusted Doctor Appointment App Development Team",
        description:
          "At TYL Tech, we collaborate with healthcare professionals, innovative startups, and medical institutions to deliver secure, user-friendly, and scalable healthcare solutions that make a real impact.",
        points: [
          "Modern patient-first UI/UX with smooth booking flows",
          "Reliable backend systems built for real-world healthcare usage",
          "Custom features for your brand, services, and operations",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Build Your Doctor Appointment App with Confidence",
        description:
          "Start your journey with TYL Tech to transform your healthcare vision into a powerful digital solution. Whether you’re launching a new platform or upgrading an existing one, we ensure a smooth, secure, and scalable development process.",
        points: [
          "Real-time scheduling, video consultations, and patient tools",
          "Clean UI with provider-friendly dashboards and controls",
          "End-to-end support from ideation to launch and beyond",
        ],
      },
      {
        key: "company",
        eyebrow: "Doctor Appointment App Development Company",
        title: "HIPAA-Compliant, Feature-Rich Healthcare Platforms",
        description:
          "Our expert team integrates EHR management, in-app payments, real-time notifications, and secure data handling to enhance convenience and operational efficiency. Every solution we build is HIPAA-compliant, scalable, and fully customized—ensuring reliability, performance, and long-term growth.",
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "Benefits of Doctor Consultation & Appointment Apps",
        points: [
          "Faster appointment booking and reduced wait times",
          "Better patient engagement through reminders and follow-ups",
          "Improved schedule efficiency for doctors and clinics",
          "Secure digital records and compliant data handling",
          "Teleconsultations that expand healthcare access",
          "Analytics and reporting to improve service quality",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech?",
        title: "Reliable, Secure Healthcare App Development Partner",
        points: [
          "Deep expertise in healthcare app development and workflows",
          "Security-first builds with compliance-focused architecture",
          "End-to-end delivery: ideation, UI/UX, development, deployment, scaling",
          "Consistent Android & iOS experience across devices",
          "Ongoing support, upgrades, and optimization post-launch",
          "Healthcare-focused digital marketing support for reach and adoption",
        ],
      },
    ],
    heroImage: {
      src: drConsultationHeroImg,
      alt: "Doctor consultation app mockup",
    },
  },
  "fintech": {
    slug: "fintech",
    label: "FINTECH",
    title: "Fintech",
    subtitle:
      "Secure, compliant, and scalable digital finance platforms built for trust and long-term growth.",
    accent: "navy",
    heroPoints: [
      "Payments & Wallet Solutions",
      "Security, Encryption & Compliance",
      "Real-Time Transactions & Insights",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Build the Future of Digital Finance with Confidence",
        description:
          "TYL Tech is a trusted Fintech App Development Company dedicated to shaping the future of digital finance. We build secure, feature-rich, and user-centric fintech applications that enable businesses to deliver seamless, reliable, and modern financial services.",
        points: [
          "Secure, user-first fintech experiences built for trust",
          "Compliance-ready systems engineered for reliability",
          "Scalable products aligned to your business objectives",
        ],
      },
      {
        key: "methodology",
        eyebrow: "Our Methodology",
        title: "A Proven Delivery Process — From Concept to Deployment",
        description:
          "TYL Tech is a leading Fintech App Development Company in Hyderabad, specializing in enhancing user experiences through innovative mobile and web applications. We collaborate closely to turn ideas into impactful digital products and support successful launch and growth in the fintech ecosystem.",
        points: [
          "Discovery and product strategy aligned to fintech regulations",
          "UX flows that reduce friction and increase conversion",
          "Agile delivery with continuous QA, security, and performance checks",
          "Launch support and long-term optimization for scale",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome to Our Company",
        title: "Transforming Financial Services into Digital Experiences",
        description:
          "As a leading Fintech App Development Company, TYL Tech builds secure, intuitive, and future-ready digital financial solutions. From mobile banking platforms to wallets and investment tools, our solutions are engineered for performance, trust, and scalability.",
        points: [
          "Regulatory-aligned architecture and best practices",
          "Cross-platform experiences with smooth, fast workflows",
          "Built for performance, transparency, and reliability",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "Let’s Build the Future of Digital Finance Together",
        description:
          "We work as your strategic partner—from strategy and design to development and deployment—delivering fintech products that meet high standards of security, performance, and compliance.",
        points: [
          "Security-first engineering across the entire platform",
          "Clean UI/UX that increases engagement and retention",
          "Systems designed to scale as your users grow",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Let’s Build Smarter Financial Solutions",
        description:
          "Partner with TYL Tech to transform financial ideas into powerful, innovative digital solutions. Our fintech app development services help startups and enterprises launch smarter, operate securely, and scale without limits.",
        points: [
          "Product planning aligned to your monetization and compliance needs",
          "Secure builds with performance-focused architecture",
          "Future-ready solutions positioned for long-term growth",
        ],
      },
      {
        key: "company",
        eyebrow: "Fintech App Development Company",
        title: "Custom Fintech Platforms Built for Trust and Scale",
        description:
          "TYL Tech delivers end-to-end fintech app development—from strategy and UI/UX to deployment and long-term support. We build mobile banking, wallets, payment gateways, lending, and investment platforms that simplify operations and elevate engagement.",
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "Benefits of Fintech Applications",
        points: [
          "Security & Compliance with encryption and fraud controls",
          "Seamless User Experience for higher satisfaction and retention",
          "Real-Time Transactions with instant updates and insights",
          "Operational Efficiency through smart automation",
          "Scalable Architecture built for growing users and features",
          "Increased Revenue Opportunities via digital channels and cross-sell",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech?",
        title: "Reliable Fintech Delivery with a Security-First Mindset",
        points: [
          "Strict NDA policies to protect your idea and data",
          "Custom-built solutions aligned to your business model",
          "Experienced fintech developers focused on security and performance",
          "Agile development for fast, flexible delivery",
          "Feature-rich apps designed for long-term scalability",
          "Ongoing post-launch support, upgrades, and maintenance",
        ],
      },
    ],
      heroImage: {
        src: fintechHeroImg,
        alt: "Fintech app mockup",
      },
  },
  "grocery-delivery": {
    slug: "grocery-delivery",
    label: "GROCERY DELIVERY",
    title: "Grocery Delivery",
    subtitle:
      "Reliable, scalable grocery apps built for fast ordering, smooth deliveries, and modern retail growth.",
    accent: "brand",
    heroPoints: [
      "Smart Product Catalogs & Search Filters",
      "Real-Time Order Tracking & Delivery Updates",
      "Secure Payments & Loyalty-Driven Engagement",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Build a Future-Ready Grocery Delivery Platform",
        description:
          "At TYL Tech, we take pride in being a trusted Grocery App Development Company dedicated to helping businesses succeed in the digital age. With a strong focus on innovation, user-centric design, and scalable technology, we build grocery delivery applications that are reliable, efficient, and perfectly aligned with your business goals. Whether you’re launching a new grocery startup or enhancing an existing platform, TYL Tech is here to transform your grocery app idea into a powerful, future-ready digital solution.",
        points: [
          "User-first grocery shopping experiences that increase retention",
          "Scalable architecture built for growth and peak traffic",
          "Transparent communication and long-term partnership mindset",
        ],
      },
      {
        key: "methodology",
        eyebrow: "Our Methodology",
        title: "A Proven Delivery Process — From Concept to Deployment",
        description:
          "TYL Tech is a leading Grocery Delivery App Development company in Hyderabad, specialising in crafting high-performance mobile and web applications that deliver exceptional user experiences. We collaborate closely with startups, entrepreneurs, and established organisations to transform ideas into powerful products and promote them to achieve measurable success.",
        points: [
          "Discovery, roadmap, and feature prioritization aligned to business goals",
          "UI/UX design with clear journeys for browse → cart → checkout → delivery",
          "Agile development with testing, QA, and performance validation",
          "Launch support, analytics setup, and continuous optimization",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome to Our Company",
        title: "Driving Growth Through Custom Grocery Apps",
        description:
          "Welcome to TYL Tech—where technology meets convenience. We design and develop custom grocery applications tailored to your unique business goals. From intuitive shopping apps to fully integrated grocery delivery ecosystems, our solutions are scalable, secure, and performance-driven—built to deliver a smooth shopping experience across iOS and Android.",
        points: [
          "Smart catalogs, advanced search, and filtering for fast discovery",
          "Multiple payment gateways with secure transaction handling",
          "Real-time order tracking designed for better customer trust",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "Building Smart Grocery Apps for Modern Retail Needs",
        description:
          "Partner with a team that understands modern grocery operations and consumer expectations. We build custom grocery shopping apps and intelligent delivery management systems that make ordering fast, simple, and convenient—while improving backend efficiency for retailers.",
        points: [
          "Personalized browsing, smart recommendations, and loyalty features",
          "Delivery management systems that improve speed and reliability",
          "Cross-platform builds using React Native / Flutter for faster go-live",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Let’s Build the Future of Online Grocery Apps Together",
        description:
          "If you’re ready to step into the digital grocery space, our experienced team helps you launch with confidence and clarity. We design custom grocery app solutions that align with your brand, support operational workflows, and evolve as your business grows.",
        points: [
          "From MVP to full-scale on-demand grocery delivery ecosystems",
          "Inventory, orders, delivery, and customer engagement in one flow",
          "Scalable foundation built for expansion and new features",
        ],
      },
      {
        key: "company",
        eyebrow: "Grocery App Development Company",
        title: "Custom Grocery Apps Designed for Scale, Speed, and Retention",
        description:
          "TYL Tech delivers robust grocery delivery applications that combine modern UI/UX with reliable performance. From shopping experiences to delivery operations, we build secure, scalable solutions tailored to your market, audience, and growth plan.",
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "Benefits of Grocery Delivery Apps",
        points: [
          "Faster ordering through smart catalogs, search, and filters",
          "Improved customer retention with loyalty programs and offers",
          "Real-time visibility using live order tracking and notifications",
          "Operational efficiency through automation of routine workflows",
          "Multiple payment integrations for smoother checkout conversions",
          "Scalable systems ready for traffic spikes and new locations",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech?",
        title: "A Strong Technology Partner for Grocery Growth",
        points: [
          "Industry-focused expertise in retail and e-commerce workflows",
          "Fully customized solutions aligned with your business model",
          "End-to-end delivery: strategy → UI/UX → development → launch → support",
          "High-performance cross-platform apps for Android and iOS",
          "Secure architecture and long-term maintenance support",
          "Agile execution with transparent communication and milestones",
        ],
      },
    ],
    heroImage: {
      src: groceryDeliveryHeroImg,
      alt: "Grocery delivery app mockup",
    },
  },
  "iot-development": {
    slug: "iot-development",
    label: "IOT DEVELOPMENT",
    title: "IoT Development",
    subtitle:
      "Smart, connected systems built for real-time insights, automation, and scalable digital transformation.",
    accent: "navy",
    heroPoints: [
      "Device Integration & Real-Time Monitoring",
      "Secure Cloud Connectivity & Data Pipelines",
      "Dashboards, Analytics & Operational Automation",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Build Smart Connected Products with IoT",
        description:
          "TYL Tech delivers reliable and innovative IoT software development services. We help businesses build smart, connected solutions tailored to their goals and operational needs. Our expert team creates scalable, secure, and high-performance IoT applications that enhance efficiency, enable real-time insights, and accelerate digital transformation across industries.",
        points: [
          "Secure, scalable IoT systems built for real-world environments",
          "Real-time data visibility for faster decision-making",
          "Future-ready platforms designed for long-term growth",
        ],
      },
      {
        key: "methodology",
        eyebrow: "Our Methodology",
        title: "A Proven Process — From Concept to Deployment",
        description:
          "TYL Tech is a leading IoT development company in Hyderabad, specializing in designing and developing innovative mobile and web applications that elevate user experience and drive digital engagement. We work closely with startups, enterprises, and organizations to conceptualize, build, and promote smart, connected products.",
        points: [
          "Discovery + architecture planning for device, cloud, and data layers",
          "Prototype and validation to reduce risk before scale",
          "Agile development with security, performance, and reliability checks",
          "Deployment + monitoring setup with post-launch support",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome to Our Company",
        title: "Your Trusted IoT Development Company",
        description:
          "Welcome to TYL Tech. We specialize in building smart, connected solutions that empower businesses in an intelligent digital world. With strong expertise in device integration, data connectivity, and scalable platforms, we deliver end-to-end IoT development—from strategy and prototyping to deployment and ongoing support.",
        points: [
          "Device connectivity, data ingestion, and platform scalability",
          "Secure systems aligned to business objectives and compliance needs",
          "Solutions for consumer apps and industrial automation",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "Partner With a Leading IoT Product Development Team",
        description:
          "At TYL Tech, we combine deep technical expertise with a forward-thinking approach to help businesses stay ahead. We deliver results-driven IoT solutions that connect devices, people, and processes—unlocking new opportunities for innovation and operational excellence.",
        points: [
          "End-to-end IoT software development tailored to your product vision",
          "Smart connectivity that improves efficiency and reduces manual overhead",
          "Real-time data + analytics for measurable business outcomes",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Let’s Build Smarter Solutions Together",
        description:
          "We collaborate with organizations of all sizes to deliver tailored IoT solutions that create real, measurable impact. From concept and design to development, integration, and deployment—our team manages every stage with precision, transparency, and care.",
        points: [
          "Custom IoT development aligned to your unique challenges",
          "Flexible, scalable builds designed to evolve with your business",
          "Reliable delivery with clear milestones and long-term support",
        ],
      },
      {
        key: "company",
        eyebrow: "IoT Development Services",
        title: "End-to-End IoT Services for Connected Business Ecosystems",
        description:
          "TYL Tech provides custom IoT development services that transform traditional systems into intelligent, data-driven solutions. We design reliable and scalable platforms that connect devices, process real-time data, and improve operational efficiency—across industrial automation, smart home solutions, and remote monitoring systems.",
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "Benefits of IoT Development",
        points: [
          "Real-time data access for faster, smarter decisions",
          "Increased automation and operational efficiency",
          "Enhanced customer experience through intelligent services",
          "Cost optimization using predictive maintenance and monitoring",
          "Scalability and flexibility to grow alongside your business",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech?",
        title: "A Reliable IoT Partner for Secure, Scalable Innovation",
        points: [
          "Secure, high-performance IoT apps aligned with business goals",
          "Future-ready architecture designed to work across platforms and devices",
          "Transparent process with agile delivery and clear milestones",
          "Custom IoT development tailored to your exact requirements",
          "Dedicated support for deployment, monitoring, and continuous improvement",
        ],
      },
    ],
    heroImage: {
      src: iotHeroImg,
      alt: "IoT application mockup",
    },
  },
  "logistic": {
    slug: "logistic",
    label: "LOGISTICS",
    title: "Logistics",
    subtitle:
      "Future-ready logistics platforms that improve visibility, control, and efficiency across supply chain operations.",
    accent: "brand",
    heroPoints: [
      "Real-Time Vehicle & Shipment Tracking",
      "Route Optimization & Fleet Management",
      "Warehouse Automation & Analytics",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Cutting-Edge Logistics Software for Smarter Operations",
        description:
          "TYL Tech delivers scalable, secure, and user-friendly logistics software solutions designed for modern transportation and supply chain operations. Our platforms streamline workflows, enable real-time tracking, and boost overall efficiency—helping businesses operate with greater agility and control.",
        points: [
          "Scalable logistics systems built for growth",
          "Real-time tracking + operational visibility",
          "Mobile-first experiences with reliable performance",
        ],
      },
      {
        key: "methodology",
        eyebrow: "Our Methodology",
        title: "A Proven Delivery Process — From Concept to Deployment",
        description:
          "TYL Tech is a leading logistics app development company in Hyderabad, focused on building high-quality mobile and web applications that enhance user experience and drive digital efficiency. We collaborate closely with startups, enterprises, and organizations to conceptualize, build, and promote innovative logistics solutions.",
        points: [
          "Discovery workshops and clear project milestones",
          "UI/UX + architecture aligned to real logistics workflows",
          "Agile development with continuous QA and performance checks",
          "Secure deployment, monitoring, and iterative optimization",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome to Our Company",
        title: "Your Trusted Logistics App Development Company",
        description:
          "TYL Tech builds powerful logistics technology solutions packed with smart features like real-time vehicle tracking, route optimization, delivery scheduling, driver management, geo-fencing, automated alerts, and actionable analytics—designed to simplify complex logistics workflows.",
        points: [
          "Fleet, warehouse, courier, and last-mile delivery platforms",
          "GPS + Cloud + IoT + AI-ready integrations",
          "Secure, scalable systems built for real-world usage",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "Smart Supply Chain Solutions That Deliver Real Results",
        description:
          "Partner with TYL Tech to build custom logistics software that improves efficiency, real-time visibility, and overall operational performance. We integrate seamlessly with your existing systems while delivering measurable outcomes and long-term value.",
        points: [
          "Fleet management, route planning, shipment tracking",
          "Warehouse automation and workflow optimization",
          "Real-time insights for faster, data-driven decisions",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Launch Smarter Logistics Solutions with Confidence",
        description:
          "We help you overcome operational challenges with end-to-end logistics software development—covering strategy, design, development, deployment, and ongoing support. Every solution is secure, scalable, and user-friendly.",
        points: [
          "Custom mobile + web applications built to scale",
          "Advanced analytics dashboards and automated alerts",
          "Future-ready architecture using modern tech stacks",
        ],
      },
      {
        key: "company",
        eyebrow: "Logistics Software Development Company",
        title: "Custom Logistics Apps Are No Longer Optional",
        description:
          "In today’s fast-paced digital landscape, logistics businesses need smart technology to automate workflows, reduce delays, and improve delivery efficiency. TYL Tech builds high-performance solutions—from real-time delivery tracking and warehouse systems to complete end-to-end logistics platforms—engineered for long-term growth.",
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "Benefits of Logistics App Development",
        points: [
          "Real-Time Tracking with GPS-enabled live monitoring",
          "Improved Operational Efficiency through automation",
          "Faster Decision-Making using analytics and live data",
          "Streamlined Communication between drivers and dispatch",
          "Reduced Costs via optimized routes and better planning",
          "Better Customer Experience with live ETAs and updates",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech?",
        title: "A Reliable Partner for Logistics Digital Transformation",
        points: [
          "Industry-specific expertise in supply chain operations",
          "Custom-built solutions aligned with your business model",
          "Full-cycle delivery: design → dev → QA → deploy → support",
          "Scalable & secure architecture built for growth",
          "Long-term maintenance and continuous enhancements",
        ],
      },
    ],
    heroImage: {
      src: logisticHeroImg,
      alt: "Logistics app mockup",
    },
  },
  "on-demand": {
    slug: "on-demand",
    label: "ON-DEMAND",
    title: "On-Demand",
    subtitle:
      "Fast, reliable, and scalable on-demand platforms built to deliver seamless experiences—anytime, anywhere.",
    accent: "navy",
    heroPoints: [
      "Custom On-Demand App Development",
      "User-Centric Design & Performance",
      "Built to Scale with Your Growth",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Turn Bold Ideas into High-Impact On-Demand Apps",
        description:
          "TYL Tech is a results-driven On-Demand App Development Company focused on building custom applications that enable businesses to deliver fast, reliable, and engaging experiences. We bridge innovation and execution with smart, growth-ready solutions designed for real-world performance.",
        points: [
          "Delivery, booking, logistics, and service platforms",
          "Scalable architecture with modern app stacks",
          "Product thinking + execution for measurable outcomes",
        ],
      },
      {
        key: "methodology",
        eyebrow: "Our Methodology",
        title: "From Strategy to Launch — Built for Speed and Reliability",
        description:
          "TYL Tech is a leading On-Demand App Development Company in Hyderabad, specializing in enhancing user experiences through innovative mobile and web application design and development. We collaborate closely to build and strategically position your product for maximum reach and success.",
        points: [
          "Discovery + roadmap aligned to business goals",
          "UI/UX that improves conversion and retention",
          "Agile delivery with continuous iteration and QA",
          "Launch support + optimization for long-term growth",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome to Our Company",
        title: "Empowering Businesses with On-Demand App Solutions",
        description:
          "We build scalable, user-centric, and high-performance apps that help brands connect instantly with customers. Our solutions are fully custom, feature-rich, and designed to scale effortlessly as your business grows.",
        points: [
          "Instant ordering/booking experiences",
          "Reliable performance with modern infrastructure",
          "Custom workflows based on your business model",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "Let’s Build the Future of On-Demand Experiences Together",
        description:
          "Collaboration with TYL Tech is seamless, transparent, and results-driven. From concept to launch, we deliver high-performing, scalable, and engaging apps built to compete in the on-demand economy.",
        points: [
          "Clear communication + milestone-based execution",
          "Feature planning for real operational needs",
          "Performance-first builds for fast experiences",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Your On-Demand App Journey Begins Here",
        description:
          "We deliver end-to-end On-Demand App Development Services to help startups and enterprises launch faster, innovate smarter, and scale with confidence.",
        points: [
          "End-to-end development from idea to launch",
          "Custom solutions aligned to business outcomes",
          "Future-ready builds for growth and scale",
        ],
      },
      {
        key: "company",
        eyebrow: "On-Demand App Development Company",
        title: "Custom On-Demand Apps Built to Perform and Scale",
        description:
          "TYL Tech builds intelligent apps that streamline operations, enhance customer engagement, and accelerate business growth—across industries like ride-sharing, food delivery, healthcare, logistics, and home services.",
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "Benefits of On-Demand Apps",
        points: [
          "Instant Accessibility for users anytime, anywhere",
          "Seamless User Experience that increases retention",
          "Real-Time Tracking for trust and transparency",
          "Enhanced Business Efficiency via automation",
          "Revenue Growth through better conversions and reach",
          "Scalability designed for long-term expansion",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech?",
        title: "A Trusted Partner for On-Demand Product Success",
        points: [
          "Strict NDAs ensuring full confidentiality",
          "Affordable, custom-built solutions for your model",
          "Expert on-demand developers + modern tech stacks",
          "Agile delivery for fast and flexible execution",
          "Feature-rich, scalable architecture built for growth",
          "Ongoing technical support and maintenance",
        ],
      },
    ],
    heroImage: {
      src: onDemandHeroImg,
      alt: "On-demand app mockup",
    },
  },
  "security-management": {
    slug: "security-management",
    label: "SECURITY MANAGEMENT",
    title: "Security Management",
    subtitle:
      "Modern security guard management platforms with real-time visibility, patrol tracking, and incident reporting—built for performance and scale.",
    accent: "purple",
    heroPoints: [
      "Real-Time Guard Tracking & Patrol Verification",
      "Incident Reporting + Alerts + Role-Based Access",
      "Secure Cloud Backend Built to Scale",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Digitize Security Operations with Smart, Mobile-First Solutions",
        description:
          "TYL Tech builds reliable and intelligent security guard apps that help security agencies, property managers, and facility owners manage patrols, monitor activity, and streamline daily operations with real-time tracking and reporting.",
        points: [
          "GPS-enabled guard tracking and patrol workflows",
          "Incident reporting with photo/video support",
          "Operational visibility for teams of any size",
        ],
      },
      {
        key: "methodology",
        eyebrow: "Our Methodology",
        title: "A Proven Delivery Process — From Concept to Deployment",
        description:
          "TYL Tech is a leading Security Management App Development Company in Hyderabad, focused on delivering exceptional user experiences through innovative mobile and web application design and development. We build intelligent, secure, and user-friendly solutions that strengthen security operations.",
        points: [
          "Workflow discovery + compliance-first planning",
          "UI/UX designed for guards, supervisors, and clients",
          "Secure backend architecture + scalable cloud infra",
          "Continuous QA, performance tuning, and support",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome to Our Company",
        title: "Enhancing Safety with Custom Security Apps",
        description:
          "We develop powerful security applications tailored for security agencies, residential communities, corporate offices, and facility management firms. From patrol tracking and incident reporting to GPS monitoring and live communication—your system stays in control.",
        points: [
          "Shift scheduling, emergency alerts, and dashboards",
          "Role-based access control + end-to-end encryption",
          "Scalable backend for high-volume operations",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "Smart Security Guard Apps for Modern Safety Needs",
        description:
          "TYL Tech combines modern technologies with industry expertise to deliver guard patrol apps and security management platforms built for usability, reliability, and real-time decision-making.",
        points: [
          "Live guard tracking + tour check-ins",
          "Cloud reporting + analytics for supervisors",
          "Multi-device compatibility for field operations",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Launch Your Security Guard App with Confidence",
        description:
          "We begin by understanding your workflows and compliance needs, then deliver a tailored solution with powerful features like GPS patrols, panic alerts, shift automation, and detailed incident logs.",
        points: [
          "Cross-platform mobile apps for iOS & Android",
          "Secure cloud backend with admin panel controls",
          "Intuitive UI/UX for fast adoption and efficiency",
        ],
      },
      {
        key: "company",
        eyebrow: "Security Guard App Development Company",
        title: "A Digital Command Center for Security Operations",
        description:
          "Whether you need a GPS guard tracking app, patrol verification system, multi-location platform, or client portal—TYL Tech builds scalable security solutions designed for performance, security, and growth.",
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "Benefits of Security Management Apps",
        points: [
          "Increased Accountability with real-time monitoring",
          "Faster Response with panic alerts and live visibility",
          "Reduced Manual Work using automation and reporting",
          "Improved Compliance through audit-ready activity logs",
          "Better Client Trust via transparent reporting dashboards",
          "Scalable Operations for multi-location deployments",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech?",
        title: "Secure, Scalable Builds Aligned to Your Workflow",
        points: [
          "Strict NDAs to protect business logic and data",
          "Affordable, enterprise-grade development quality",
          "Expertise in GPS tracking, patrol check-ins, reporting",
          "Growth-ready architecture with role-based access",
          "Clean, user-friendly UI for guards and admins",
          "Post-launch support + continuous optimization",
        ],
      },
    ],
    heroImage: {
      src: securityHeroImg,
      alt: "Security management app mockup",
    },
  },
  "blockchain-development": {
    slug: "blockchain-development",
    label: "BLOCKCHAIN DEVELOPMENT",
    title: "Blockchain Development",
    subtitle:
      "Secure, transparent, and scalable blockchain solutions for smart contracts, DApps, and digital assets.",
    accent: "purple",
    heroPoints: [
      "Smart Contracts & Automation",
      "DApps & Tokenization",
      "Secure Transactions & Transparency",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Transform Businesses with Next-Gen Blockchain Innovation",
        description:
          "At TYL Tech, we deliver secure, transparent, and scalable blockchain solutions powered by advanced technologies. Our blockchain developers build decentralized applications that enhance trust, automate workflows, and improve efficiency across industries.",
        points: [
          "Decentralized apps (DApps) built for performance and trust",
          "Smart contracts to automate workflows and reduce intermediaries",
          "Secure digital assets and transaction systems aligned to your goals",
        ],
      },
      {
        key: "methodology",
        eyebrow: "Our Methodology",
        title: "A Proven Delivery Process — From Concept to Deployment",
        description:
          "TYL Tech is a leading Blockchain Development Company in Hyderabad, focused on building user-centric blockchain products that deliver measurable business value. We collaborate closely with founders and teams to conceptualize, build, and promote blockchain-powered solutions.",
        points: [
          "Discovery + architecture planning aligned to business outcomes",
          "Prototype + UI/UX built around real user flows",
          "Agile development with testing, security reviews, and audits",
          "Deployment + optimization with long-term support",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome to Our Company",
        title: "Secure, Future-Ready Blockchain Solutions That Build Digital Trust",
        description:
          "We streamline operations, enhance transparency, and strengthen data security through decentralized systems. Our expertise spans smart contracts, tokenization, and enterprise blockchain integrations—built to be scalable and reliable.",
        points: [
          "Enterprise-grade blockchain integration and secure data flows",
          "Tokenization, NFTs, and decentralized ecosystems",
          "Crypto wallets and trading solutions engineered for security",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "Build Blockchain Products That Create Real-World Impact",
        description:
          "We help enterprises, startups, and fintech innovators design and build blockchain platforms that redefine digital transactions and data integrity—focusing on usability, scalability, and trust.",
        points: [
          "DApps, DeFi, NFT marketplaces, and custom token platforms",
          "Security-first builds with strong focus on reliability",
          "Systems designed to scale with users and transaction volume",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Let’s Turn Your Blockchain Vision into Reality",
        description:
          "We start by understanding your goals, then design blockchain solutions engineered for measurable impact. Whether it’s a wallet, marketplace, or automated transaction system—every feature is built for performance, scalability, and trust.",
        points: [
          "Custom crypto wallet, token platform, or NFT marketplace builds",
          "Smart contract development focused on security and automation",
          "Future-ready architecture built to evolve with your roadmap",
        ],
      },
      {
        key: "company",
        eyebrow: "Blockchain Development Services",
        title: "Secure, Scalable Blockchain Ecosystems Built for Growth",
        description:
          "TYL Tech delivers end-to-end blockchain development—from DApps and crypto wallets to smart contracts and NFT marketplaces—designed for security, performance, and long-term reliability.",
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "Benefits of Blockchain Development Solutions",
        points: [
          "Enhanced Security with tamper-proof data and encrypted transactions",
          "Transparency & Trust through verifiable transaction trails",
          "Automation via smart contracts to remove intermediaries",
          "Cost Efficiency through decentralized operations",
          "Scalability & Performance for high-volume transaction loads",
          "Innovation & Digital Transformation across multiple industries",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech?",
        title: "A Trusted Blockchain Partner Focused on Security and Reliability",
        points: [
          "Strict NDAs to ensure complete confidentiality",
          "Cost-effective delivery without compromising quality",
          "Experienced blockchain developers and modern best practices",
          "Agile and transparent process aligned with your business goals",
          "Scalable and secure architectures built for long-term growth",
          "Post-launch support and maintenance for smooth operations",
        ],
      },
    ],
    heroImage: {
      src: blockchainHeroImg,
      alt: "Blockchain application mockup",
    },
  },
  "e-commerce": {
    slug: "e-commerce",
    label: "E-COMMERCE APP & WEB",
    title: "E-Commerce",
    subtitle:
      "Fast, secure, and scalable e-commerce apps and platforms built to boost conversions and growth.",
    accent: "brand",
    heroPoints: [
      "Secure Payments & Inventory Management",
      "Multi-Vendor & Marketplace Builds",
      "Performance-Optimized Mobile Commerce",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Build High-Performance E-Commerce Apps That Convert",
        description:
          "TYL Tech builds secure, scalable, and user-friendly e-commerce applications tailored to your business goals. From payment gateways and inventory management to AI-powered recommendations—our solutions improve shopping experiences and drive measurable growth.",
        points: [
          "Secure checkout with payment gateway integrations",
          "Real-time inventory + order management workflows",
          "Optimized navigation and performance for higher conversions",
        ],
      },
      {
        key: "methodology",
        eyebrow: "Our Methodology",
        title: "A Proven Process — Built for Speed, Quality, and Scale",
        description:
          "As a leading E-Commerce App & Web Development Company in Hyderabad, we combine UI/UX, engineering, and scalable architecture to deliver platforms that work reliably under real-world traffic and growth.",
        points: [
          "Discovery + user journey mapping for smooth purchase flows",
          "UI/UX design focused on speed, trust, and conversion",
          "Agile dev with QA, performance testing, and analytics setup",
          "Launch + post-launch improvements and maintenance",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome to Our Company",
        title: "Powering Digital Commerce with Scalable, User-Centric Solutions",
        description:
          "Whether you’re a startup or an established retail brand, we build e-commerce apps that enhance shopping journeys, increase loyalty, and scale with your product catalog and orders.",
        points: [
          "Android + iOS e-commerce apps using modern frameworks",
          "Product listings, inventory tracking, payments, notifications",
          "Customer support integrations and retention-focused features",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "E-Commerce Apps Designed for Engagement and Growth",
        description:
          "We deliver fast, reliable, cross-platform e-commerce apps and platforms—built to reflect your brand, keep customers engaged, and support long-term growth.",
        points: [
          "B2C stores, B2B portals, and multi-vendor marketplaces",
          "Secure transactions and scalable backend infrastructure",
          "Personalized shopping features to boost retention",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Launch Your E-Commerce Platform with Confidence",
        description:
          "We design and build conversion-friendly platforms with secure payments, inventory systems, push notifications, and scalable infrastructure—plus ongoing support to stay competitive.",
        points: [
          "End-to-end product build: design → development → deployment",
          "Scalable architecture for users, products, and order spikes",
          "Post-launch enhancements, maintenance, and optimization",
        ],
      },
      {
        key: "company",
        eyebrow: "E-Commerce Development Company",
        title: "A Full-Service E-Commerce Partner for Modern Businesses",
        description:
          "TYL Tech builds robust e-commerce platforms that stand out in competitive markets—combining modern design, strong performance, and growth-focused strategy.",
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "Benefits of E-Commerce Apps",
        points: [
          "Enhanced Accessibility with 24/7 shopping on mobile devices",
          "Improved User Experience with faster checkout and navigation",
          "Increased Engagement via push notifications and loyalty programs",
          "Boost in Sales through seamless mobile transactions",
          "Valuable Data Insights for smarter marketing decisions",
          "Reduced Operational Costs via automation and smarter inventory",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech?",
        title: "Reliable, Secure, and Conversion-Focused E-Commerce Builds",
        points: [
          "Strict NDAs to protect your privacy and business logic",
          "Cost-effective, high-quality delivery",
          "Strong UI/UX + engineering collaboration",
          "Scalable performance under high user loads",
          "Fast development aligned with your requirements",
          "Ongoing support and continuous improvements",
        ],
      },
    ],
    heroImage: {
      src: eCommerceHeroImg,
      alt: "E-commerce app mockup",
    },
  },
  "food-delivery": {
    slug: "food-delivery",
    label: "FOOD DELIVERY",
    title: "Food Delivery",
    subtitle:
      "Custom food delivery apps with real-time tracking, secure payments, and scalable multi-restaurant platforms.",
    accent: "navy",
    heroPoints: [
      "Real-Time GPS Tracking & ETA",
      "Secure Payments & Order Management",
      "Multi-Restaurant & Delivery Partner Panels",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Food Delivery Apps Built for Speed, Scale, and Satisfaction",
        description:
          "TYL Tech builds robust, scalable, and user-friendly food delivery apps for restaurants, cloud kitchens, and food startups. We create custom solutions that simplify ordering, enable real-time tracking, and support secure payments—built to scale with your growth.",
        points: [
          "Swiggy/Zomato-style marketplace or single-brand restaurant apps",
          "Engaging UI/UX for customers, delivery partners, and admins",
          "Scalable backend designed for high order volumes",
        ],
      },
      {
        key: "methodology",
        eyebrow: "Our Methodology",
        title: "A Proven Delivery Process — Designed for Competitive Markets",
        description:
          "We build intuitive, high-performing food delivery solutions with an agile approach that keeps quality and delivery speed balanced—so you can launch faster and iterate confidently.",
        points: [
          "Audience + workflow mapping for ordering and delivery flows",
          "UI/UX + system design focused on speed and reliability",
          "Agile development with QA, performance testing, and security checks",
          "Launch + continuous optimization with support",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome to Our Company",
        title: "Smart App Solutions for Food Delivery Success",
        description:
          "We build food delivery ecosystems that streamline operations and boost customer engagement. Whether you run a single outlet or a multi-vendor platform, we deliver scalable, secure, and user-friendly systems.",
        points: [
          "Real-time order tracking and delivery partner management",
          "Restaurant listings, smart search, and filters",
          "Secure in-app payments and scalable infrastructure",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "Custom Food Delivery Apps That Help Brands Stand Out",
        description:
          "We develop fast, secure, and scalable food delivery apps using modern technologies—built around your unique business model, growth goals, and operational workflow.",
        points: [
          "Custom features aligned with restaurant, cloud kitchen, or aggregator needs",
          "Secure payment integrations and smooth checkout UX",
          "Operational panels to manage orders, users, and commissions",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Launch Your Food Delivery App with Confidence",
        description:
          "We follow a results-driven approach—starting with your business model and building feature-rich platforms that increase repeat orders and support long-term growth.",
        points: [
          "Cross-platform development (iOS & Android)",
          "GPS tracking, ETA, notifications, and delivery workflow tools",
          "Cloud-ready backend for performance and scalability",
        ],
      },
      {
        key: "company",
        eyebrow: "Food Delivery App Development Company",
        title: "End-to-End Food Delivery Ecosystems Built for Growth",
        description:
          "TYL Tech delivers complete food delivery solutions—from customer ordering to delivery partner workflows and admin dashboards—built with performance, security, and scale in mind.",
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "Benefits of Food Delivery Apps",
        points: [
          "Faster ordering and better customer convenience",
          "Real-time delivery tracking and transparent updates",
          "Secure payments and smoother checkout experiences",
          "Higher retention through loyalty and notifications",
          "Operational efficiency for restaurants and delivery teams",
          "Scalable systems to handle growth and peak demand",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech?",
        title: "A Food-Tech Partner Focused on Performance and Results",
        points: [
          "Strict NDAs to protect your app idea and data",
          "Affordable builds without compromising quality",
          "Dedicated developers experienced in food delivery ecosystems",
          "Custom architecture aligned with your business model",
          "Fast, agile delivery with on-time launch focus",
          "Continuous support, upgrades, and optimization post-launch",
        ],
      },
    ],
    heroImage: {
      src: foodDeliveryHeroImg,
      alt: "Food delivery app mockup",
    },
  },
  "healthcare-fitness": {
    slug: "healthcare-fitness",
    label: "HEALTHCARE & FITNESS",
    title: "Healthcare & Fitness",
    subtitle:
      "Secure, scalable health-tech and fitness platforms designed for engagement and real outcomes.",
    accent: "brand",
    heroPoints: [
      "Activity Tracking & Personalized Plans",
      "Secure Data Handling & Compliance-Ready Builds",
      "Scalable Platforms for Hospitals & Wellness Brands",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Transform Healthcare & Fitness Through Smart Digital Solutions",
        description:
          "At TYL Tech, we build intelligent, secure, and scalable healthcare and fitness applications that empower healthcare professionals, hospitals, wellness brands, and startups to deliver exceptional user experiences. Our fitness app solutions inspire users to stay active, track progress, and achieve wellness goals with research-driven, performance-focused builds.",
        points: [
          "Secure, scalable apps built for Android & iOS",
          "Engaging fitness experiences that boost retention",
          "Future-ready architecture focused on reliability and growth",
        ],
      },
      {
        key: "methodology",
        eyebrow: "Our Methodology",
        title: "A Proven Delivery Process — From Concept to Deployment",
        description:
          "TYL Tech specializes in creating exceptional user experiences through innovative mobile and web application development. We collaborate closely with healthcare providers, fitness brands, startups, and organizations to conceptualize, design, and promote impactful digital products.",
        points: [
          "Discovery workshops aligned to user needs & workflows",
          "UI/UX design for clarity, accessibility, and engagement",
          "Agile development with testing, performance, and security checks",
          "Deployment, scaling, and continuous optimization support",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome to Our Company",
        title: "Transforming Healthcare & Fitness with Smart App Solutions",
        description:
          "Welcome to TYL Tech, where innovation and technology come together to build a healthier, smarter future. We deliver secure, scalable, and user-friendly applications that simplify healthcare management, improve accessibility, and enhance engagement across wellness journeys.",
        points: [
          "Healthcare management experiences that improve accessibility",
          "Fitness journeys powered by intuitive tracking and insights",
          "Tailored builds aligned with your business goals and brand",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "We Build Digital Health Experiences That Empower Lives",
        description:
          "We transform visionary ideas into powerful, user-centric mobile applications that enhance patient care, streamline healthcare operations, and encourage healthier lifestyles. Leveraging AI, IoT, and cloud integration, we build fast, secure, and scalable products.",
        points: [
          "Telemedicine, wellness, and fitness tracking solutions",
          "Enterprise-grade healthcare systems with secure foundations",
          "Performance-driven builds optimized for real-world usage",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Let’s Turn Your Health-Tech Vision into Reality",
        description:
          "Our process starts by understanding your goals, users, and long-term vision. Whether you’re planning a telemedicine platform, fitness tracking app, or a comprehensive healthcare system, we design features that align with your objectives and deliver real value.",
        points: [
          "Strategic planning based on your users and outcomes",
          "Patient-centric and engagement-focused feature design",
          "Secure, scalable builds ready for growth and adoption",
        ],
      },
      {
        key: "company",
        eyebrow: "Healthcare & Fitness App Development Company",
        title: "High-Performance Platforms for Health and Wellness",
        description:
          "TYL Tech specializes in building high-performance digital solutions for healthcare and wellness. From telemedicine and remote patient monitoring to fitness tracking and wellness management platforms, we transform your vision into intelligent digital products that promote healthier, more connected communities.",
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "Benefits of Healthcare & Fitness Apps",
        points: [
          "Enhanced Accessibility across mobile and wearable devices",
          "Improved User Experience with real-time tracking and personalization",
          "Increased Engagement through reminders, progress analytics, and communication",
          "Data-Driven Insights for smarter decisions and continuous improvement",
          "Streamlined Operations via automation and workflow optimization",
          "Improved Health Outcomes through intelligent, habit-forming features",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech?",
        title: "A Trusted Partner for Digital Health Innovation",
        points: [
          "Strict NDAs to ensure complete confidentiality",
          "Cost-effective builds with premium quality and scalability",
          "Expert health & fitness developers dedicated to your success",
          "Agile delivery aligned with your business goals and timelines",
          "Secure, compliant, high-performance architectures",
          "Ongoing support, optimization, and maintenance post-launch",
        ],
      },
    ],
      heroImage: {
        src: healthcareHeroImg,
        alt: "Healthcare and fitness app mockup",
      },
  },
  "laundry": {
    slug: "laundry",
    label: "LAUNDRY APP DEVELOPMENT",
    title: "Laundry",
    subtitle:
      "Modern on-demand laundry platforms built for seamless bookings, tracking, and scalable operations.",
    accent: "brand",
    heroPoints: [
      "Pickup Scheduling & Delivery Tracking",
      "Secure Payments & Automated Notifications",
      "Scalable Cross-Platform Apps (iOS & Android)",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Future-Ready Laundry Apps Built for Growth",
        description:
          "TYL Tech delivers custom-built laundry app solutions that automate operations, improve convenience, and help laundry businesses scale faster. We streamline every stage—from pickup scheduling to delivery tracking and payment processing—through secure, reliable, high-performance applications.",
        points: [
          "End-to-end laundry workflow digitization",
          "Real-time tracking and status updates",
          "High-performance systems built to scale with demand",
        ],
      },
      {
        key: "methodology",
        eyebrow: "Our Methodology",
        title: "A Proven Delivery Process — From Concept to Deployment",
        description:
          "We build intuitive, visually engaging, performance-driven laundry app solutions by collaborating closely with entrepreneurs, startups, and enterprises—aligning product strategy with business goals and scalable execution.",
        points: [
          "Business discovery + operational workflow mapping",
          "UI/UX that reduces friction for customers and staff",
          "Agile delivery with testing, performance, and security checks",
          "Post-launch improvements and scaling support",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome to Our Company",
        title: "Empowering Laundry Businesses with Smart App Solutions",
        description:
          "Our laundry app development services go beyond basic scheduling. We design solutions that boost operational efficiency, attract more customers, and support long-term growth—tailored to your unique service model.",
        points: [
          "Effortless order placement with flexible scheduling",
          "Real-time pickup and delivery tracking",
          "Secure payments, notifications, loyalty programs, and support",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "We Develop Exceptional Laundry Apps for Your Business",
        description:
          "Using modern frameworks like React Native and Flutter, we build cross-platform laundry apps that run seamlessly on both Android and iOS. Our solutions cover everything from booking to billing to delivery operations—helping you improve service quality and efficiency.",
        points: [
          "Route optimization, billing automation, and push notifications",
          "Customer feedback systems and service history",
          "Secure architecture that protects user and payment data",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Top Laundry App Development Company for On-Demand Experiences",
        description:
          "We work closely with you to deliver a seamless, high-performing laundry platform—aligned to your business model and built for scale. From consultation and UI/UX to deployment and ongoing support, we keep your product future-ready and competitive.",
        points: [
          "Custom builds for single outlets, chains, and marketplaces",
          "Scalable, reliable systems designed for long-term operations",
          "End-to-end support from planning to maintenance",
        ],
      },
      {
        key: "company",
        eyebrow: "Laundry App Development Company",
        title: "On-Demand Laundry Apps That Improve Efficiency and Retention",
        description:
          "TYL Tech builds user-friendly on-demand laundry solutions with order scheduling, tracking, secure payments, and delivery management—helping you increase satisfaction and repeat usage while optimizing internal operations.",
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "Benefits of Laundry Apps",
        points: [
          "Enhanced Accessibility with anytime pickup and delivery scheduling",
          "Improved User Experience via clean UI, fast ordering, and personalization",
          "Increased Engagement through notifications, offers, and loyalty programs",
          "Boost in Sales with streamlined booking and targeted promotions",
          "Scalable & Secure Architecture for safe growth and performance",
          "Valuable Data Insights to improve services and marketing conversions",
          "Reduced Operational Costs through automation and smarter scheduling",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech?",
        title: "A Trusted Technology Partner for Laundry Businesses",
        points: [
          "Strict NDA for complete privacy",
          "Cost-effective, scalable development with premium build quality",
          "Dedicated team experienced in on-demand service apps",
          "Rapid, agile development aligned with your business goals",
          "Flawless performance under heavy user loads",
          "Quick response times and ongoing post-launch support",
        ],
      },
    ],
    heroImage: {
      src: laundryHeroImg,
      alt: "Laundry app mockup",
    },
  },
  "media-entertainment": {
    slug: "media-entertainment",
    label: "MEDIA & ENTERTAINMENT",
    title: "Media & Entertainment",
    subtitle:
      "Streaming and interactive media platforms built for performance, engagement, and scale.",
    accent: "purple",
    heroPoints: [
      "Smooth Streaming & Fast Performance at Scale",
      "Interactive Experiences that Boost Engagement",
      "Cross-Platform Delivery with Growth-Ready Architecture",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Where Storytelling Meets High-Performance Technology",
        description:
          "TYL Tech builds media applications that are intuitive, visually captivating, and optimized for smooth performance. Whether you’re launching streaming, music, OTT, or interactive entertainment, we create products that keep users engaged and returning.",
        points: [
          "Fast, interactive experiences designed for retention",
          "Scalable architecture for growing audiences",
          "Premium UI/UX for immersive digital storytelling",
        ],
      },
      {
        key: "methodology",
        eyebrow: "Our Methodology",
        title: "A Proven Delivery Process — From Concept to Deployment",
        description:
          "We help businesses expand their reach by collaborating closely to conceptualize, design, develop, and promote engaging digital media products—built on cutting-edge technology and seamless performance.",
        points: [
          "Discovery aligned to content goals and audience behavior",
          "UI/UX design for clear navigation and high engagement",
          "Performance-first development with streaming optimization readiness",
          "Deployment planning + ongoing improvements for long-term stability",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome to Our Company",
        title: "Entertainment Meets Innovative Digital Experiences",
        description:
          "We specialize in Media & Entertainment App Development to help brands deliver smooth, engaging, and unforgettable experiences. From streaming and OTT to interactive media products, we build intuitive, fast, and scalable solutions.",
        points: [
          "Solutions tailored to your content and distribution goals",
          "Visually compelling interfaces built for modern audiences",
          "Reliable foundations designed for long-term value",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "Let’s Create Engaging Entertainment Experiences Together",
        description:
          "We manage everything from concept and design to development, deployment, and optimization—ensuring strong engagement, smooth performance, and a seamless user experience that helps your brand stand out.",
        points: [
          "End-to-end collaboration from ideation to launch",
          "Engagement-driven experiences with scalability in mind",
          "Ongoing optimization for evolving content and audiences",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Turn Your Entertainment Idea Into a Scalable Digital Product",
        description:
          "We start by understanding your vision, content type, target audience, and experience goals—then craft a clear plan aligned with your timeline and growth strategy to bring your platform to life.",
        points: [
          "Clear roadmap aligned with your audience and timeline",
          "Strategic builds for streaming, OTT, music, and interactive media",
          "Future-ready foundations designed to scale with demand",
        ],
      },
      {
        key: "company",
        eyebrow: "Media & Entertainment App Development Company",
        title: "High-Performance Platforms Built for Streaming and Engagement",
        description:
          "TYL Tech delivers high-performance platforms for media brands—covering UI design, backend development, streaming optimization, and post-launch support. We build custom solutions for video, music, OTT, live streaming, and interactive experiences aligned to your brand identity.",
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "Benefits of Entertainment & Streaming Apps",
        points: [
          "Immersive User Experience with intuitive interactions",
          "High-Performance Streaming with smooth playback and stability",
          "Real-Time Engagement features like notifications and personalization",
          "Cross-Platform Availability across mobile, web, and more",
          "Scalability for Growing Audiences with flexible infrastructure",
          "Secure Content Protection with enterprise-grade safeguards",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech?",
        title: "A Trusted Partner for Media Platform Development",
        points: [
          "Creative + technical execution focused on engagement",
          "Scalable architecture designed for audience growth",
          "Performance-first builds for smooth media delivery",
          "Transparent collaboration and clear delivery plans",
          "Post-launch support to evolve with your content strategy",
          "Premium UI/UX to keep users watching and listening longer",
        ],
      },
    ],
    heroImage: {
      src: mediaHeroImg,
      alt: "Media and entertainment app mockup",
    },
  },
  "real-estate-marketplace": {
    slug: "real-estate-marketplace",
    label: "REAL ESTATE MARKETPLACE",
    title: "Real Estate Marketplace",
    subtitle:
      "Smart property platforms built to streamline listings, leads, and transactions with scalable performance.",
    accent: "navy",
    heroPoints: [
      "Advanced Property Listings & Search",
      "Virtual Tours, Bookings & Lead Management",
      "Secure, Scalable Marketplace Architecture",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Build Smarter Real Estate Experiences with Future-Ready Platforms",
        description:
          "TYL Tech delivers reliable real estate app development services that help property businesses build smart, user-friendly platforms tailored to operations and client engagement. We focus on scalable, secure, high-performing applications that streamline workflows, enhance customer experience, and support measurable growth in today’s digital real estate landscape.",
        points: [
          "User-friendly experiences for buyers, sellers, and agents",
          "High-performance apps designed for large listings and traffic",
          "Secure systems that support long-term platform growth",
        ],
      },
      {
        key: "methodology",
        eyebrow: "Our Methodology",
        title: "A Proven Delivery Approach — From Concept to Launch",
        description:
          "TYL Tech is a leading Real Estate Marketplace development company in Hyderabad, specializing in enhancing user experiences through modern mobile and web applications. We collaborate closely to conceptualize, develop, and promote real estate platforms that connect you with the right audience and accelerate adoption.",
        points: [
          "Discovery workshops and roadmap planning",
          "UI/UX design focused on conversion and usability",
          "Agile development with QA, performance, and security checks",
          "Launch support with monitoring and continuous improvements",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome to Our Company",
        title: "Powering the Future of Real Estate Apps",
        description:
          "We build custom real estate applications that streamline property listings, client communication, virtual tours, and transaction workflows. From startups to established enterprises, we help transform ideas into smart, scalable platforms that stand out in a competitive market.",
        points: [
          "Custom mobile + web apps tailored to your model",
          "Virtual tours, communication tools, and lead workflows",
          "Performance-driven builds that support long-term growth",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "Partner With Experts in Real Estate App Development",
        description:
          "Work with a team that understands the real estate ecosystem and builds apps that simplify operations and boost engagement. We craft innovative solutions including listing platforms, advanced filters, CRM workflows, payments, and AI-driven recommendations — built for scale and reliability.",
        points: [
          "Property listing apps, portals, and marketplace builds",
          "CRM, maps, booking, and payment integrations",
          "Scalable architecture for large databases and high traffic",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Let’s Transform Real Estate With Technology",
        description:
          "We begin by understanding your business goals, users, and workflows — then build an intuitive platform aligned to your brand. From advanced search and virtual tours to bookings and CRM automation, we deliver real estate solutions that are growth-ready and future-proof.",
        points: [
          "Tailored platform strategy and feature planning",
          "Conversion-focused UI/UX and seamless user journeys",
          "Flexible builds that evolve with market needs",
        ],
      },
      {
        key: "company",
        eyebrow: "Real Estate App Development Company",
        title: "Real Estate Apps That Drive Leads, Engagement, and Trust",
        description:
          "In a mobile-first world, real estate apps are essential for connecting buyers, sellers, and agents through a single digital experience. We build high-performance platforms — from simple listing apps to advanced marketplaces with CRM, maps, booking, analytics, and transaction workflows — designed to generate leads and streamline operations.",
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "Benefits of Real Estate Marketplace Apps",
        points: [
          "Convenience for users to browse, schedule visits, and connect anytime",
          "Improved lead generation through filters, alerts, and saved searches",
          "Enhanced brand presence with a custom, trusted platform",
          "Operational efficiency via automated inquiries, bookings, and follow-ups",
          "Real-time updates with instant notifications for listings and price changes",
          "Actionable insights from analytics on user behavior and listing performance",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech?",
        title: "A Growth-Focused Partner for Real Estate Digital Transformation",
        points: [
          "Real-estate domain understanding across listings, leads, and workflows",
          "Custom development aligned to your business model and audience",
          "Full-cycle delivery: design, development, QA, launch, and support",
          "Scalable architecture designed to handle traffic and data growth",
          "Reliable post-launch maintenance to keep your platform secure and modern",
          "Strict NDA, cost-effective builds, and fast delivery with clear timelines",
        ],
      },
    ],
    heroImage: {
      src: realestateheroImg,
      alt: "Real estate marketplace app mockup",
    },
  },
  "social-media": {
    slug: "social-media",
    label: "SOCIAL MEDIA",
    title: "Social Media",
    subtitle:
      "Feature-rich social platforms built for engagement, scalability, and secure real-time experiences.",
    accent: "purple",
    heroPoints: [
      "Real-Time Chat, Feeds & Notifications",
      "Media Sharing & Community Features",
      "Scalable, Secure Backend Architecture",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Build Dynamic Social Platforms That Engage and Grow Communities",
        description:
          "TYL Tech is a leading social media app development company dedicated to building scalable, engaging platforms that connect communities and boost user interaction. Beyond development, we also support growth through strategic social media marketing services to help your platform attract and retain users.",
        points: [
          "Engagement-first experiences built for retention",
          "Scalable systems for growing audiences and content",
          "Performance + security designed for real-time usage",
        ],
      },
      {
        key: "methodology",
        eyebrow: "Our Methodology",
        title: "A Proven Process — From Product Vision to Launch and Growth",
        description:
          "We specialize in creating innovative and engaging social media applications across mobile and web. Our team blends modern technologies, creative design, and product thinking to build platforms that are intuitive, feature-rich, and built to scale.",
        points: [
          "Feature planning around your audience and engagement loops",
          "UI/UX design for speed, clarity, and discovery",
          "Agile sprints with QA, performance testing, and security reviews",
          "Launch support with iteration, scaling, and optimization",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome to Our Company",
        title: "Smart Social Media App Development for Growing Brands",
        description:
          "We turn ideas into powerful social platforms with modern features like real-time chat, media sharing, push notifications, and analytics. Our builds focus on performance, security, and a seamless experience that helps your brand grow and thrive in the digital space.",
        points: [
          "Modern UX for feeds, profiles, and content creation",
          "Secure authentication and reliable messaging",
          "Cross-platform builds for iOS, Android, and web",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "Leading the Future of Social Media App Development",
        description:
          "We build meaningful digital experiences — not just apps. Whether you’re launching a new network, a niche community, or upgrading an existing platform, we deliver full-cycle development from idea to launch and beyond, with secure and growth-ready architecture.",
        points: [
          "Custom feature development: feeds, chat, communities, and creator tools",
          "Secure backend systems with scalable data and media handling",
          "Future-ready builds designed to evolve with your roadmap",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Empowering Connections with Social Networking App Development",
        description:
          "We help you plan, design, and build your social media vision with a focus on engagement, performance, and scale. From robust backend architecture to intuitive UI/UX, we deliver platforms that are secure, scalable, and ready to compete.",
        points: [
          "Roadmap + MVP planning with growth milestones",
          "Design system-driven UI for consistent, premium UX",
          "Launch strategy support with analytics and optimization",
        ],
      },
      {
        key: "company",
        eyebrow: "Social Media App Development Company",
        title: "Create the Next Big Social Platform with a Growth-Ready Foundation",
        description:
          "Social networking apps reshape how people connect and share. We build scalable, secure, feature-rich platforms for photo sharing, short video, niche communities, and enterprise communication — tailored to your business goals and designed to scale efficiently.",
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "Benefits of Social Media Apps",
        points: [
          "Higher engagement through real-time interactions and notifications",
          "Stronger communities with groups, events, and creator-friendly tools",
          "Faster growth with scalable architecture that supports rising traffic",
          "Better retention through personalization and smart content discovery",
          "Improved trust with secure auth, privacy controls, and encrypted data flows",
          "Monetization readiness with analytics, ads, and creator features",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech?",
        title: "A Reliable Partner for Secure, Scalable Social Experiences",
        points: [
          "End-to-end delivery: design, development, deployment, and maintenance",
          "Security-first approach with GDPR-style best practices and encryption",
          "Cross-platform expertise: React Native, Flutter, native, and hybrid",
          "Scalable backend architecture built for real-time and media-heavy usage",
          "Custom features: chat, feeds, notifications, live streaming, analytics",
          "Growth support via digital marketing and platform optimization",
        ],
      },
    ],
    heroImage: {
      src: socialMediaHeroImg,
      alt: "Social media app mockup",
    },
  },
  "crm-development": {
    slug: "crm-development",
    label: "CRM DEVELOPMENT",
    title: "CRM Development",
    subtitle:
      "Powerful CRM platforms that streamline operations, strengthen customer relationships, and accelerate sales growth.",
    accent: "brand",
    heroPoints: [
      "Centralized Customer Data & Interaction History",
      "Sales Pipeline Visibility & Lead Management",
      "Automation + Reporting for Data-Driven Decisions",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Smarter CRM Solutions Built for Real Business Growth",
        description:
          "TYL Tech is a leading CRM software development company focused on building powerful, user-friendly CRM solutions for businesses of all sizes. From fast-growing startups to established enterprises, our CRM solutions for small and mid-scale businesses are designed to streamline operations, strengthen customer relationships, and accelerate sales growth.",
        points: [
          "User-friendly CRM tailored to your workflows",
          "Automation + CRM marketing capabilities for better engagement",
          "Scalable platforms that integrate with existing systems",
        ],
      },
      {
        key: "methodology",
        eyebrow: "Our Methodology",
        title: "A Proven Delivery Process — From Concept to Deployment",
        description:
          "TYL Tech is a leading CRM development company in Hyderabad, specializing in building high-impact CRM solutions and intuitive mobile and web applications. We focus on creating seamless user experiences through thoughtful design and robust engineering.",
        points: [
          "Requirement discovery with measurable milestones",
          "UI/UX aligned to sales, support, and marketing workflows",
          "Agile builds with continuous QA and performance checks",
          "Secure deployment with post-launch optimization",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome to Our Company",
        title: "Manage Customers Efficiently with a Modern CRM",
        description:
          "At TYL Tech, we are a trusted CRM software development company focused on building intelligent, scalable, and business-ready CRM solutions. Our goal is to help organizations strengthen customer relationships, streamline operations, and improve productivity through well-designed CRM platforms.",
        points: [
          "Flexible CRM for small and mid-sized businesses",
          "Lead tracking, campaign automation, and segmentation",
          "Reliable foundation that evolves into a growth engine",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "We Build CRM Platforms That Empower Your Teams",
        description:
          "We develop modern CRM systems that simplify sales and support workflows while integrating smoothly with your marketing strategy. From startups to growing enterprises, our CRM platforms are flexible, easy to use, and fully customizable to fit your operational needs.",
        points: [
          "Custom modules built around your process",
          "Clean UI/UX to improve adoption across teams",
          "Security and scalability for long-term usage",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Let’s Build CRM for Small Business Success Together",
        description:
          "Partner with TYL Tech to build intelligent, scalable, custom CRM solutions that support real business growth. We design platforms that improve visibility across sales, marketing, and customer engagement—built to perform today and scale confidently for tomorrow.",
        points: [
          "Sales + support + marketing in one platform",
          "Data-driven campaigns and personalized journeys",
          "Future-ready architecture built to scale",
        ],
      },
      {
        key: "company",
        eyebrow: "CRM Software Development Company",
        title: "A Business-Ready CRM That Fits Your Operations",
        description:
          "TYL Tech specializes in building powerful, user-friendly, and scalable CRM solutions tailored to your business needs. Whether you need a custom CRM for a small business or an advanced CRM management system for large-scale operations, we deliver high-performance solutions that boost efficiency and strengthen long-term customer relationships.",
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "Benefits of CRM Software",
        points: [
          "Centralized customer data with complete interaction history",
          "Clear sales pipeline visibility and smarter lead management",
          "Workflow and task automation that reduces manual effort",
          "Personalized marketing through segmentation and insights",
          "Faster, more consistent customer support and response times",
          "Real-time reporting and dashboards for better decisions",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech?",
        title: "A Trusted Partner for Scalable CRM Success",
        points: [
          "CRM aligned with real-world workflows and goals",
          "Scalable, secure, and usable platform architecture",
          "Strong UI/UX with high team adoption",
          "Modern tech stack with seamless integrations",
          "Long-term support, enhancements, and optimization",
        ],
      },
    ],
    heroImage: {
      src: crmDeveHeroImg,
      alt: "CRM app mockup",
    },
  },
  "education": {
    slug: "education",
    label: "EDUCATION",
    title: "Education",
    subtitle:
      "Custom eLearning platforms, LMS solutions, and interactive learning tools built for modern institutions.",
    accent: "purple",
    heroPoints: [
      "Custom eLearning Platforms & LMS",
      "Virtual Classrooms & Interactive Learning",
      "Analytics, Tracking, and Scalable Delivery",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Overview",
        title: "Transform Learning Experiences Through Smart Technology",
        description:
          "At TYL Tech, we build intuitive, scalable, and engaging digital learning solutions for schools, universities, training institutes, and corporate learning platforms. We develop custom eLearning platforms, LMS solutions, virtual classrooms, and interactive learning tools designed to make education more accessible, efficient, and future-ready.",
        points: [
          "Learner-first experiences with educator-friendly tools",
          "Scalable delivery across mobile and web",
          "Secure systems built for long-term growth",
        ],
      },
      {
        key: "methodology",
        eyebrow: "Our Methodology",
        title: "A Proven Delivery Process — From Concept to Deployment",
        description:
          "TYL Tech is a leading education app development company in Hyderabad, specializing in designing and developing high-quality mobile and web applications with a strong focus on user experience. We collaborate closely to conceptualize, build, and scale digital products that deliver measurable impact.",
        points: [
          "Discovery aligned to curriculum, roles, and outcomes",
          "UI/UX for learners, instructors, and administrators",
          "Agile development with testing and performance checks",
          "Deployment, analytics setup, and continuous improvement",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome to Our Company",
        title: "Empowering Education Through Digital Innovation",
        description:
          "We build scalable, interactive, and user-friendly eLearning platforms that make education more accessible, engaging, and effective for both learners and institutions. With expertise in LMS app development and custom eLearning solutions, we create robust platforms with intuitive navigation, personalized learning paths, and real-time performance tracking.",
        points: [
          "Personalized learning paths and progress tracking",
          "Interactive content, quizzes, and collaboration",
          "Built to scale smoothly as your audience grows",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "Partner With Experts in Digital Learning Transformation",
        description:
          "We take a structured approach—from understanding your educational model to designing seamless learning experiences and developing reliable, scalable functionality. Every solution is tailored to improve learning outcomes, simplify instruction, and support efficient content delivery across modern learning environments.",
        points: [
          "Outcome-driven product strategy and planning",
          "Reliable delivery systems for content and live sessions",
          "Secure architecture for institutional needs",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Build the Future of Learning, Together",
        description:
          "Start working with TYL Tech to transform your education model into an interactive, technology-driven experience. We deliver thoughtful design, secure architecture, and scalable functionality—supporting growth at every stage.",
        points: [
          "Custom LMS and eLearning builds aligned to your model",
          "Accessible, intuitive experience for every user type",
          "Future-ready platform that evolves with your institution",
        ],
      },
      {
        key: "company",
        eyebrow: "Education App Development Company",
        title: "Custom eLearning and LMS Platforms Built to Scale",
        description:
          "As a leading education app development company, TYL Tech transforms learning concepts into innovative, scalable, and user-centric digital platforms. From strategy and UI/UX to development, integration, deployment, and ongoing support—we deliver seamless learning experiences across devices.",
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "Benefits of Education & eLearning Apps",
        points: [
          "Interactive learning with multimedia, quizzes, and gamification",
          "Personalized learning paths based on pace and performance",
          "Anytime, anywhere access across mobile and web",
          "Real-time analytics, tracking, and performance reporting",
          "Automated course, attendance, grading, and scheduling management",
          "Scalable and secure architecture for high traffic and growth",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech?",
        title: "A Reliable Partner for Future-Ready Learning Platforms",
        points: [
          "Strict NDA and confidentiality for content and IP",
          "Custom solutions aligned to your teaching model",
          "Expert LMS/eLearning developers focused on quality",
          "Agile execution with flexible delivery timelines",
          "Post-launch support and long-term maintenance",
        ],
      },
    ],
    heroImage: {
      src: educationHeroImg,
      alt: "Education app mockup",
    },
  },
  "gps-tracking": {
    slug: "gps-tracking",
    label: "GPS VEHICLE TRACKING",
    title: "GPS Tracking Devices",
    subtitle:
      "Real-time vehicle monitoring and fleet insights built with reliable GPS + IoT systems.",
    accent: "navy",
    heroPoints: [
      "Live Tracking + Historical Route Analysis",
      "Fleet Visibility, Safety, and Control",
      "GIS Mapping + Advanced Monitoring Options",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "About Our Company",
        title: "GPS Vehicle Tracking System in Hyderabad",
        description:
          "At TYL Tech, we specialize in GPS vehicle tracking systems in Hyderabad, delivering advanced solutions that enhance fleet management, improve safety, and boost operational efficiency. Our cutting-edge tracking services provide real-time monitoring and precise control—helping businesses operate smarter and stay ahead.",
        points: [
          "Real-time tracking with high-precision location insights",
          "Fleet safety and operational visibility",
          "Smart reporting for better decision-making",
        ],
      },
      {
        key: "methodology",
        eyebrow: "What is GPS Vehicle Tracking?",
        title: "Real-Time Monitoring Powered by Satellite Signals",
        description:
          "GPS Vehicle Tracking enables real-time monitoring of a vehicle’s location and movement using satellite signals. TYL Tech systems support live tracking, historical route analysis, and detailed reporting—ensuring accurate insights, enhanced security, and efficient fleet management.",
        points: [
          "Live tracking + route history analytics",
          "Detailed reporting for operations and compliance",
          "Improved security and control for businesses",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "Build Smart Tracking Systems Tailored to Your Fleet",
        description:
          "At TYL Tech, we design state-of-the-art GPS tracking systems tailored for businesses of all sizes. By integrating advanced IoT and geolocation technologies, we deliver high-precision tracking with unmatched reliability—ensuring seamless monitoring and complete control of your vehicles.",
        points: [
          "Custom solutions for fleet size and use-cases",
          "Reliable IoT + geolocation integrations",
          "Operational insights that reduce risk and cost",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Working With Us",
        title: "Leading GPS Tracking Service Providers",
        description:
          "Start with TYL Tech to implement future-ready tracking that improves control, visibility, and fleet efficiency. We align technology with your operational goals to deliver measurable outcomes.",
        points: [
          "Fast rollout with clear operational alignment",
          "Scalable setup for expanding fleets",
          "Support for ongoing optimization and upgrades",
        ],
      },
      {
        key: "company",
        eyebrow: "GIS & Advanced Monitoring",
        title: "GIS Mapping and Aerial Monitoring Options",
        description:
          "TYL Tech also provides GIS mapping services to visualize fleet locations and optimize routes with customized mapping solutions. For advanced surveillance and remote visibility, we offer real-time aerial monitoring with drones integrated with GPS technology to deliver high-resolution live feeds across large or hard-to-reach areas.",
      },
      {
        key: "whyChoose",
        eyebrow: "Collaboration With",
        title: "Professional Partnerships That Deliver Excellence",
        description:
          "Our partnership approach guarantees top-tier products and services, supported by combined expertise and reputation. Count on TYL Tech to deliver innovative solutions that meet and exceed expectations.",
      },
    ],
    heroImage: {
      src: gpsTrackingHeroImg,
      alt: "GPS tracking app mockup",
    },
  },
  "hotel-booking": {
    slug: "hotel-booking",
    label: "HOTEL BOOKING",
    title: "Hotel Booking App & Website",
    subtitle:
      "Custom hotel booking apps and websites for seamless search, reservations, payments, and guest management.",
    accent: "navy",
    heroPoints: [
      "Real-Time Availability + Secure Payments",
      "Direct Bookings + PMS/Booking Engine Integrations",
      "Scalable Mobile + Web Platforms for Hospitality",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Hotel Booking App & Website",
        title: "Hotel Booking Apps Built for Speed, Convenience, and Growth",
        description:
          "TYL Tech is a leading hotel booking app development company, delivering custom, user-friendly applications for seamless hotel search, booking, and guest management. Our solutions help businesses of all sizes stay competitive in the hospitality industry by providing secure, scalable, and efficient platforms tailored to your unique requirements.",
        points: [
          "User-friendly booking journeys that reduce drop-offs",
          "Secure and scalable architecture for peak traffic",
          "Guest management tools to improve service efficiency",
        ],
      },
      {
        key: "methodology",
        eyebrow: "A Proven Methodology",
        title: "From Strategy to Deployment With Clear Delivery Milestones",
        description:
          "TYL Tech is a leading hotel booking app and website development company in Hyderabad, specializing in designing and developing mobile and web applications that enhance user experience. We help businesses expand their reach and connect with the right audience by collaborating closely with organizations to conceptualize, develop, and promote digital products tailored to their goals.",
        points: [
          "Discovery + planning aligned to your property goals",
          "UI/UX + development focused on conversion",
          "Testing + launch support for reliable releases",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome To Our Company",
        title: "Simplifying Hospitality with Hotel Booking App Development",
        description:
          "Welcome to TYL Tech—your trusted partner for custom hotel booking app development services. We build user-centric, high-performance hotel reservation apps that combine convenience for guests with powerful management tools for hotel owners. From real-time availability and secure payment gateways to multi-language support, GPS-based search, in-app chat, and push notifications, we customize every app to match your brand and business objectives. Whether you’re building a standalone app or integrating with your existing PMS, we have the expertise to bring your vision to life.",
        points: [
          "Android + iOS apps with modern cross-platform tech",
          "Guest-first UX with smart discovery and booking flow",
          "PMS + travel API integrations when needed",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "Exceptional Hotel Booking Apps That Engage Guests",
        description:
          "TYL Tech develops innovative, user-friendly, and feature-rich hotel booking apps for the hospitality industry. Leveraging frameworks like React Native and Flutter, we build cross-platform apps that enhance online presence, attract more customers, and deliver a seamless digital experience—from reservations and digital check-ins to payments, loyalty programs, notifications, and personalized offers.",
        points: [
          "Cross-platform apps optimized for performance",
          "Guest engagement via offers, loyalty, and messaging",
          "Operational tools that reduce manual work",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Build Your Hotel Booking App with Confidence",
        description:
          "We begin by understanding your hotel’s unique goals—whether boutique or multi-location. Our process prioritizes customer convenience and operational efficiency with real-time availability, integrated payments, dynamic pricing, and personalization. We also provide ongoing support, updates, and integrations with third-party travel APIs and booking engines to keep your platform competitive.",
        points: [
          "Clear feature roadmap aligned to occupancy goals",
          "Scalable foundation for growth and seasonal spikes",
          "Ongoing maintenance + feature upgrades post-launch",
        ],
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "Why Hotel Booking Apps Drive Better Bookings",
        description:
          "Hotel booking apps improve guest convenience while giving you better control over reservations, engagement, and operations.",
        points: [
          "Enhanced accessibility with anytime bookings",
          "Better UX with quick booking and personalization",
          "Higher engagement via notifications and loyalty",
          "Increased bookings through streamlined flow + offers",
          "Data insights to improve marketing and operations",
          "Reduced operational costs via automation",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech?",
        title: "Secure, Scalable Hospitality Platforms With Long-Term Support",
        description:
          "TYL Tech follows strict NDAs, delivers cost-effective solutions, and provides a dedicated expert team. We build reliable, user-friendly platforms optimized for high user loads, with ongoing support and custom solutions aligned to your brand and business objectives.",
        points: [
          "Strict NDA + privacy-first development",
          "Performance-ready architecture for high traffic",
          "Dedicated support and continuous optimization",
        ],
      },
    ],
    heroImage: {
      src: hotelBookingHeroImg,
      alt: "Hotel booking app mockup",
    },
  },
  "live-streaming": {
    slug: "live-streaming",
    label: "LIVE STREAMING",
    title: "Live Streaming App",
    subtitle:
      "OTT, live, and on-demand streaming platforms built for smooth playback, security, and scale.",
    accent: "navy",
    heroPoints: [
      "Adaptive Streaming + CDN + Cloud Architecture",
      "DRM + Secure Content Delivery + Monetization",
      "Analytics + Recommendations + Multi-Device Support",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Live Streaming App",
        title: "Build Video Streaming Platforms Like OTT Leaders",
        description:
          "TYL Tech helps turn your vision into a secure, scalable streaming app. We specialize in live streaming platforms, OTT applications, and on-demand video solutions built for performance and growth—covering platform architecture, development, launch, and post-release optimization.",
        points: [
          "Smooth playback with modern streaming architecture",
          "Scalable systems for growing audiences",
          "End-to-end delivery from concept to launch",
        ],
      },
      {
        key: "methodology",
        eyebrow: "A Proven Methodology",
        title: "High-Performance Streaming Apps With UX-First Engineering",
        description:
          "TYL Tech is a leading live streaming app development company in Hyderabad, designing high-performance mobile and web applications with a strong focus on user experience. We collaborate with organizations to conceptualize, build, and scale live streaming platforms that support engagement, growth, and long-term success.",
        points: [
          "Product discovery + platform blueprinting",
          "Secure streaming pipeline + robust backend",
          "Testing for scale + rollout planning",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome To Our Company",
        title: "Deliver Smarter Experiences with Video Streaming Apps",
        description:
          "We build seamless, high-performance platforms for live streaming, on-demand video, and full-scale OTT solutions. Our work includes intuitive UI/UX, adaptive bitrate streaming, DRM integration, multi-device compatibility, and robust backend systems capable of supporting large audiences.",
        points: [
          "Adaptive bitrate streaming for smooth playback",
          "DRM + secure delivery to protect content",
          "Cloud-based content management + scalability",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "Powerful Streaming Apps for Modern Viewers",
        description:
          "We deliver custom OTT platforms, live streaming applications, and on-demand video solutions using modern stacks. Our systems manage authentication, subscriptions, content libraries, analytics, and monetization models (ads, pay-per-view). We can also add AI-powered recommendations, real-time chat, and multi-language support.",
        points: [
          "Subscriptions, ads, pay-per-view monetization support",
          "Analytics to measure content + user engagement",
          "Features that improve retention and discovery",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Launch Your Video Streaming App with Confidence",
        description:
          "We begin with your audience and monetization strategy, then define the right feature set—adaptive streaming, real-time analytics, DRM protection, in-app purchases, and more—to ensure your platform is built for performance, scalability, and long-term success.",
        points: [
          "Consultative approach aligned to business goals",
          "Scalable infrastructure built for growth",
          "Post-launch optimization and upgrades",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech?",
        title: "Secure, Scalable Streaming With Ongoing Support",
        description:
          "We prioritize confidentiality with strict NDAs, deliver cost-effective development, and build cloud-native architectures for speed and scale. Our UX-focused design and secure streaming pipeline help you launch a platform that performs reliably and grows confidently.",
        points: [
          "NDA + IP protection throughout delivery",
          "Cloud-native scale for thousands to millions of users",
          "Maintenance, monitoring, and feature enhancements",
        ],
      },
    ],
    heroImage: {
      src: liveStreamingHeroImg,
      alt: "Live streaming app mockup",
    },
  },
  "news-app": {
    slug: "news-app",
    label: "NEWS",
    title: "News App",
    subtitle:
      "Fast, scalable news and magazine apps with real-time updates, personalization, and monetization.",
    accent: "navy",
    heroPoints: [
      "Real-Time Updates + Push Notifications",
      "Personalized Feeds + Offline Reading + Multimedia",
      "Subscriptions, Ads, Paywalls + Analytics",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "News App",
        title: "Modern News Apps Built for Speed, Engagement, and Scale",
        description:
          "TYL Tech specializes in building powerful, user-centric news applications for digital publishers, media startups, and established news brands. We create secure, scalable, visually compelling apps that drive engagement and expand readership across devices.",
        points: [
          "High-performance content delivery across devices",
          "Reader-first UX that boosts session time",
          "Scalable systems built for growth",
        ],
      },
      {
        key: "methodology",
        eyebrow: "A Proven Methodology",
        title: "Performance-Driven News Platforms With Strong UI/UX",
        description:
          "TYL Tech is a leading News App Development Company in Hyderabad, building intuitive, scalable, and engaging news applications. We collaborate with publishers and organizations to conceptualize, design, and promote digital products that drive readership and long-term growth.",
        points: [
          "Clear information architecture for fast discovery",
          "Secure backend + scalable feed delivery",
          "Launch-ready builds with stability testing",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome To Our Company",
        title: "News & Magazine Apps That Amplify Storytelling",
        description:
          "TYL Tech builds intelligent, high-performance apps for newspapers and magazines with features like push notifications, offline reading, dynamic layouts, multimedia support, and personalized content feeds—tailored to your brand identity and audience behavior.",
        points: [
          "Personalized feeds and category-based discovery",
          "Offline reading for uninterrupted experience",
          "Rich multimedia: text, images, video, audio",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "Build High-Impact News Apps With Monetization Options",
        description:
          "We develop scalable, secure news and magazine apps using modern technologies. Our solutions include real-time updates, recommendations, discussions, and monetization models like subscriptions, ads, and premium content—designed for growth and retention.",
        points: [
          "Monetize via ads, subscriptions, or paywalls",
          "Boost retention with alerts and smart feeds",
          "Scalable architecture for large readership",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Custom News Apps and Aggregators Built Around Your Strategy",
        description:
          "Start with TYL Tech to build feature-rich platforms for real-time news delivery. We also build news feed aggregator apps to unify content sources into a single, organized feed—tailored to your audience preferences and content strategy.",
        points: [
          "Custom UX aligned to your editorial approach",
          "Secure, future-ready backend systems",
          "Long-term support to evolve features over time",
        ],
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "What You Gain With a Modern News App",
        description:
          "A well-built news app improves speed, relevance, and business outcomes while delivering a better reader experience.",
        points: [
          "Breaking news in real time",
          "Personalization based on interests and behavior",
          "Offline access for continuous reading",
          "Flexible monetization (subscriptions/ads/paywalls)",
          "Higher engagement via notifications and rich content",
        ],
      },
    ],
    heroImage : {
      src: newAppHeroImg,
      alt: "News app mockup",
    },
  },
  "saas-paas": {
    slug: "saas-paas",
    label: "SAAS & PAAS",
    title: "SaaS & PaaS",
    subtitle:
      "Cloud products built to scale—secure, manageable platforms with transparent delivery and long-term support.",
    accent: "navy",
    heroPoints: [
      "Multi-Tenant SaaS + Enterprise-Grade Security",
      "Fast Time-to-Market + Cloud Deployment",
      "Scalable Architecture + Ongoing Enhancements",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "SaaS And PaaS",
        title: "Build Cloud Platforms That Are Simple, Stable, and Scalable",
        description:
          "TYL Tech delivers SaaS and PaaS development services that help businesses create reliable cloud platforms without unnecessary complexity. We design systems that are easy to manage, flexible to scale, and secure by design—backed by transparent processes and meaningful collaboration.",
        points: [
          "Cloud platforms designed for real business needs",
          "Secure-by-design architecture",
          "Systems that scale without rework",
        ],
      },
      {
        key: "methodology",
        eyebrow: "A Proven Methodology",
        title: "High-Performance SaaS/PaaS Platforms With UX-First Delivery",
        description:
          "TYL Tech is a leading SaaS and PaaS development company in Hyderabad, designing and developing mobile and web applications that deliver exceptional user experiences. We collaborate with organizations to build and scale cloud-based solutions that drive growth and efficiency.",
        points: [
          "Architecture planning for performance and scale",
          "Iterative delivery with predictable milestones",
          "Quality assurance focused on reliability",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome To Our Company",
        title: "Transforming Ideas into Scalable Cloud Platforms",
        description:
          "TYL Tech helps businesses build secure, flexible, and future-ready SaaS and PaaS platforms. Whether launching a new cloud product or modernizing an existing system, we tailor every platform to your goals and ensure it’s ready to evolve as your business grows.",
        points: [
          "Modern SaaS products and robust PaaS environments",
          "Intuitive UX paired with thoughtful architecture",
          "Tailored platforms aligned to your roadmap",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "Cloud Solutions Built With Clarity, Trust, and Collaboration",
        description:
          "We combine technical expertise and strategic planning to build SaaS and PaaS platforms that are reliable, scalable, and genuinely useful. Our approach emphasizes transparent communication, thoughtful solutions, and alignment with your business goals.",
        points: [
          "Collaborative execution with clear communication",
          "Scalable systems designed for long-term sustainability",
          "Delivery focused on measurable outcomes",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Bring Your Cloud Vision to Life With a Clear Plan",
        description:
          "We start by understanding your goals, users, and platform role. Then we craft an actionable plan that outlines design, build, delivery, and support—ensuring every step aligns with your objectives and long-term growth.",
        points: [
          "Discovery workshops to define scope and priorities",
          "Cloud deployment and operational readiness",
          "Post-launch support and continuous improvement",
        ],
      },
      {
        key: "benefits",
        eyebrow: "Benefits",
        title: "Why SaaS & PaaS Platforms Create Strong Business Leverage",
        description:
          "Well-designed cloud platforms help you scale, reduce costs, and ship faster while maintaining consistent user experiences.",
        points: [
          "Flexible scalability as your user base grows",
          "Reduced infrastructure costs with on-demand resources",
          "Faster time to market with rapid iteration",
          "Centralized data and management",
          "Consistent user experience across regions and devices",
          "Built for long-term growth and evolution",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech Solutions?",
        title: "Secure Architectures and Continuous Support for Lasting Success",
        description:
          "TYL Tech delivers tailored architectures, an expert development team, transparent communication, secure enterprise-grade infrastructure, and continuous improvement beyond deployment to ensure lasting performance and scalability.",
        points: [
          "Multi-tenant setups with robust security",
          "Predictable delivery with transparent collaboration",
          "Ongoing enhancements and maintenance",
        ],
      },
    ],
    heroImage: {
      src: saasHeroImg,
      alt: "SaaS and PaaS app mockup",
    },
  },
  "taxi-booking": {
    slug: "taxi-booking",
    label: "TAXI BOOKING",
    title: "Taxi Booking App",
    subtitle:
      "Ride-hailing and taxi booking platforms with real-time tracking, payments, driver tools, and admin control.",
    accent: "navy",
    heroPoints: [
      "Real-Time GPS Tracking + ETA + Navigation",
      "Secure Payments + Driver/Rider Panels + Admin Dashboard",
      "Scalable Backend + Analytics + Fleet Management",
    ],
    sections: [
      {
        key: "overview",
        eyebrow: "Taxi Booking App",
        title: "High-Performing Taxi Booking Apps Built for Modern Mobility",
        description:
          "TYL Tech specializes in taxi booking app development, delivering high-performing, scalable solutions for businesses in the transportation industry. We provide end-to-end services from concept to launch, whether you need a robust taxi services app or a fully customized ride-hailing platform.",
        points: [
          "End-to-end development from idea to launch",
          "Scalable solutions for startups and enterprises",
          "Reliable systems designed for daily operations",
        ],
      },
      {
        key: "methodology",
        eyebrow: "A Proven Methodology",
        title: "Intuitive, Scalable Platforms Built for Growth",
        description:
          "TYL Tech is a leading taxi booking app development company in Hyderabad, specializing in designing and developing mobile and web applications that deliver exceptional user experiences. We collaborate closely to conceptualize, build, and promote innovative taxi booking solutions.",
        points: [
          "Clear planning for rider, driver, and admin flows",
          "Robust QA for real-time features and payments",
          "Launch-ready architecture for scale",
        ],
      },
      {
        key: "welcome",
        eyebrow: "Welcome To Our Company",
        title: "Powering Taxi Services with Smart App Solutions",
        description:
          "We deliver innovative, scalable taxi booking platforms that connect riders and drivers in real time. Our solutions include GPS tracking, automated fare estimation, in-app payments, live ride monitoring, and intuitive dashboards—built with clean UI/UX design for competitive mobility markets.",
        points: [
          "GPS tracking + live ride monitoring",
          "Fare estimation and flexible pricing",
          "Driver and rider dashboards for smooth UX",
        ],
      },
      {
        key: "workWithUs",
        eyebrow: "Work With Us",
        title: "Best-in-Class Taxi Apps with Smart Features",
        description:
          "TYL Tech builds smart, scalable platforms that solve real mobility problems. Whether launching a new taxi app or enhancing an existing system, we integrate real-time tracking, secure payments, and efficient fleet management to help you stay ahead.",
        points: [
          "Fleet management + operational visibility",
          "Secure payments with modern integrations",
          "Optimized UX for retention and repeat rides",
        ],
      },
      {
        key: "startWorkWithUs",
        eyebrow: "Start Work With Us",
        title: "Let’s Build Your Next-Gen Taxi Booking App Together",
        description:
          "We help refine your idea into a market-ready taxi platform with real-time tracking, payments, driver management, ratings, and support. Our approach aligns technology with your business goals—so you can launch fast and scale confidently.",
        points: [
          "Market-ready feature set for riders and drivers",
          "Scalable cloud backend for growth",
          "Post-launch support and upgrades",
        ],
      },
      {
        key: "keyFeatures",
        eyebrow: "Key Features",
        title: "Core Features for a Competitive Taxi Booking Platform",
        description:
          "Every taxi booking app we build focuses on user-first design and reliable real-time functionality.",
        points: [
          "Rider & Driver Login Panels",
          "Real-Time GPS Tracking & Navigation",
          "Fare Estimation & Dynamic Pricing",
          "Multiple Payment Gateways (UPI, cards, wallets)",
          "In-App Chat & Push Notifications",
          "Booking History & Trip Management",
          "Admin Dashboard for Business Control",
          "Ratings, Reviews & Customer Support",
        ],
      },
      {
        key: "whyChoose",
        eyebrow: "Why Choose TYL Tech",
        title: "Mobility Expertise + Scalable Delivery + Long-Term Support",
        description:
          "Clients choose TYL Tech for flexible development, dedicated UI/UX and backend teams, custom scalable solutions, and post-launch support. We build taxi platforms that are reliable, high-performing, and ready to evolve with your market.",
        points: [
          "Custom solutions tailored to your business model",
          "Reliable architecture built for real-time operations",
          "Continuous upgrades and maintenance support",
        ],
      },
    ],
    heroImage: {
      src: taxiHeroImg,
      alt: "Taxi booking app mockup"
      
    },
  }
};
