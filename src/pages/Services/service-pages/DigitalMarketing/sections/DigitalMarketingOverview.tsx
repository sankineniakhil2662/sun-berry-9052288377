import type { DigitalMarketingData } from "../digitalmarketing.data";
import Overviewpic from "../../../../../assets/services/DigitalMarketing/Overviewpic.jpeg"

type DigitalMarketingOverviewProps = {
  data: DigitalMarketingData;
};

export default function DigitalMarketingOverview({
  data,
}: DigitalMarketingOverviewProps) {
  const {
    title,
    description,
    whyTitle,
    whyDescription,
    benefitsLabel,
    points,
    imageAlt,
  } = data.overview;

  return (
    <section className="w-full bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top: Overview text + image */}
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold leading-tight text-heading sm:text-4xl">
              {title}
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-body sm:text-base">
              {description}
            </p>

            <div className="mt-10 border-t border-border" />
          </div>

          <div className="mx-auto max-w-lg overflow-hidden rounded-2xl border border-boder bg-surface ">
            <div className="max-h-120">
              <img
                src={Overviewpic}
                alt={imageAlt}
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom: Why + benefits */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold leading-tight text-heading sm:text-3xl">
            {whyTitle}
          </h3>

          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-body sm:text-base">
            {whyDescription}
          </p>

          <p className="mt-8 text-sm font-semibold text-heading sm:text-base">
            {benefitsLabel}
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-body sm:text-base">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
