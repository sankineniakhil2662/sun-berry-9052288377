import type { DataAnalyticsCtaData } from "../data-analytics.data";
import { GradientCta } from "../../../../../components/branding";

export default function DataAnalyticsCta({ data }: { data: DataAnalyticsCtaData }) {
  return (
    <GradientCta
      title={data.title}
      description={data.description}
      primary={{ label: data.button.label, href: data.button.href }}
      secondary={{ label: "Get a Quote", href: "/quote" }}
    />
  );
}
