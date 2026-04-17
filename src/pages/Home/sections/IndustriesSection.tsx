import IndustryCard from "../../../components/IndustryCard";
import { INDUSTRIES } from "../../Industries/industries.data";
import { ScrollReveal, SectionHeader } from "../../../components/branding";

type IndustryAccent = "brand" | "navy" | "purple" | undefined;

type IndustryItem = {
  key?: string;
  slug?: string;
  title: string;
  label: string;
  description: string;
  features: readonly string[] | string[];
  moreCount?: number;
  ctaLabel: string;
  href?: string;
  iconSrc?: string;
  accent?: "brand" | "navy" | "purple" | "pruple";
};

const industries = INDUSTRIES as readonly IndustryItem[];

const getIndustryKey = (item: IndustryItem) => {
  if (item.key) return item.key;
  if (item.slug) return item.slug;
  return item.title;
};

const getIndustryHref = (item: IndustryItem) => {
  if (item.href) return item.href;
  if (item.slug) return `/industries/${item.slug}`;
  return "/industries";
};

const getIndustryMoreCount = (item: IndustryItem) => {
  return typeof item.moreCount === "number" ? item.moreCount : 0;
};

const getIndustryIconSrc = (item: IndustryItem) => {
  return typeof item.iconSrc === "string" ? item.iconSrc : undefined;
};

const getIndustryAccent = (item: IndustryItem): IndustryAccent => {
  if (item.accent === "pruple") return "purple";
  if (item.accent === "brand") return "brand";
  if (item.accent === "navy") return "navy";
  if (item.accent === "purple") return "purple";
  return undefined;
};

const IndustriesSection = () => {
  return (
    <section className="bg-bg py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeader
          eyebrow="Industries"
          title={
            <>
              Tailored expertise for{" "}
              <span className="bg-linear-to-r from-[rgb(var(--color-accent-purple))] via-[rgb(var(--color-accent-magenta))] to-[rgb(var(--color-accent-cyan))] bg-clip-text text-transparent">
                complex domains
              </span>
            </>
          }
          subtitle="We understand the compliance, data, and operational needs of your sector."
          align="center"
          maxWidth="max-w-3xl"
        />

        <div className="mt-12 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, index) => (
            <ScrollReveal
              key={getIndustryKey(item)}
              delay={index * 0.04}
              className="w-full max-w-full"
            >
              <IndustryCard
                title={item.title}
                label={item.label}
                description={item.description}
                features={[...item.features]}
                moreCount={getIndustryMoreCount(item)}
                ctaLabel={item.ctaLabel}
                href={getIndustryHref(item)}
                iconSrc={getIndustryIconSrc(item)}
                accent={getIndustryAccent(item)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;