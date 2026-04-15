import DataAnalyticsIntro from "./sections/DataAnalyticsIntro";
import DataAnalyticsWhatWeDo from "./sections/DataAnalyticsWhatWeDo";
import DataAnalyticsWhyChoose from "./sections/DataAnalyticsWhyChoose";
import { DATA_ANALYTICS_WHY } from "./data-analytics.data";
import DataAnalyticsCta from "./sections/DataAnalyticsCta";
import { DATA_ANALYTICS_CTA } from "./data-analytics.data";


import {
  DATA_ANALYTICS_INTRO,
  DATA_ANALYTICS_SERVICES,
} from "./data-analytics.data";

export default function DataAnalyticsPage() {
  return (
    <main className="bg-bg">
      <DataAnalyticsIntro data={DATA_ANALYTICS_INTRO} />
      <DataAnalyticsWhatWeDo data={DATA_ANALYTICS_SERVICES} />
      <DataAnalyticsWhyChoose data={DATA_ANALYTICS_WHY} />
      <DataAnalyticsCta data={DATA_ANALYTICS_CTA} />


    </main>
  );
}
