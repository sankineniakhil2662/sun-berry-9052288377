
import React from "react";

type PartnerCard = {
  number: string;
  title: string;
  description: string;
};

type PreferredPartnerData = {
  eyebrow: string;
  title: string;
  description: string;
  cards: PartnerCard[];
};

export default function PreferredPartner({ data }: { data: PreferredPartnerData }) {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg font-medium tracking-wide text-brand">
            {data.eyebrow}
          </p>

          <h2 className="mt-3 whitespace-pre-line text-3xl font-semibold leading-tight text-heading sm:text-4xl">
            {data.title}
          </h2>

          <div className="mt-4 flex items-center justify-center">
            <span className="h-1 w-16 rounded-full bg-brand" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {data.description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.cards.map((card) => (
            <div
              key={card.number}
              className="
                h-full overflow-hidden rounded-2xl
                border border-brand/30
                bg-brand/5
                shadow-card
                transition
                hover:-translate-y-1 hover:shadow-hover
              "
            >
              <div className="p-7">
                <p className="text-4xl font-bold text-brand">{card.number}</p>

                <h3 className="mt-4 text-lg font-semibold text-heading">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
