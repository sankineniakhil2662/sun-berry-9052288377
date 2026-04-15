// 1) Intro section types + data
export type DataAnalyticsIntroData = {
  heroTitle: string;
  heroSubtitle: string;
  whatWeDoTitle: string;
  whatWeDoBody: string[];
};

export const DATA_ANALYTICS_INTRO: DataAnalyticsIntroData = {
  heroTitle: "Data Analytics Services",
  heroSubtitle:
    "We are a team of expert data analysts who help you unlock powerful insights from your data and drive informed decisions for your business.",
  whatWeDoTitle: "What we do",
  whatWeDoBody: [
    "We offer a range of data analytics services to help you collect, process, and present your data in the form of actionable insights. Whether you need descriptive, diagnostic, predictive, or prescriptive analytics, we can help you achieve your goals.",
    "Our data analytics services include:",
  ],
};

export type DataAnalyticsServicesData = {
  title: string;
  intro: string[];
  items: Array<{
    no: string;
    title: string;
    desc: string;
  }>;
};

export const DATA_ANALYTICS_SERVICES: DataAnalyticsServicesData = {
  title: "What we do",
  intro: [
    "We offer a range of data analytics services to help you collect, process, and present your data in the form of actionable insights. Whether you need descriptive, diagnostic, predictive, or prescriptive analytics, we can help you achieve your goals.",
    "Our data analytics services include:",
  ],
  items: [
    {
      no: "01",
      title: "Data Collection",
      desc: "We help you gather data from various sources such as databases, applications, sensors, web pages, social media, and more. We use various methods and tools such as web scraping, APIs, ETL, and IoT to collect data efficiently and reliably.",
    },
    {
      no: "02",
      title: "Data Processing",
      desc: "We help you clean, transform, and enrich your data to make it ready for analysis. We use various techniques and tools such as data quality, data integration, data engineering, and data warehousing to process data effectively and securely.",
    },
    {
      no: "03",
      title: "Data Analysis",
      desc: "We help you analyze your data using various methods and tools such as statistics, machine learning, artificial intelligence, and natural language processing. We use various types of analytics such as descriptive, diagnostic, predictive, and prescriptive to generate insights that answer your business questions.",
    },
    {
      no: "04",
      title: "Data Presentation",
      desc: "We help you present your data and insights in the form of dashboards, reports, visualizations, and stories. We use various tools and platforms such as Tableau, Power BI, Cognos, and Salesforce to create engaging and interactive data presentations.",
    },
  ],
};

export type DataAnalyticsWhyData = {
  title: string;
  intro: string[];
  items: Array<{
    title: string;
    desc: string[];
  }>;
};

export const DATA_ANALYTICS_WHY: DataAnalyticsWhyData = {
  title: "Why choose us",
  intro: [
    "We are not just data analysts, we are solution partners.",
    "We care about your data and your business. We strive to provide data analytics services that are:",
  ],
  items: [
    {
      title: "Comprehensive",
      desc: [
        "We cover all aspects of data analytics from data collection to data presentation.",
        "We ensure that your data is optimally collected, processed, analyzed, and presented.",
      ],
    },
    {
      title: "Cost-Effective",
      desc: [
        "We deliver high-quality analytics solutions while keeping costs optimized.",
        "Our processes are designed to maximize value without unnecessary overhead.",
      ],
    },
    {
      title: "Flexible",
      desc: [
        "We adapt to your needs and preferences.",
        "We can work with any data source, format, volume, or domain.",
        "We can work on-premise or on-cloud, as part of your team or independently.",
      ],
    },
    {
      title: "Experienced",
      desc: [
        "We have a team of skilled and certified data analysts with experience across industries and domains.",
        "We have successfully delivered data analytics projects for clients worldwide.",
      ],
    },
  ],
};

export type DataAnalyticsCtaData = {
  title: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
};

export const DATA_ANALYTICS_CTA: DataAnalyticsCtaData = {
  title: "Ready to Start?",
  description:
    "We have a team of skilled and certified data analysts who have extensive experience in various types of data analytics across different industries and domains. We have successfully completed many data analytics projects for clients worldwide.",
  button: {
    label: "CONTACT US",
    href: "/contact",
  },
};
