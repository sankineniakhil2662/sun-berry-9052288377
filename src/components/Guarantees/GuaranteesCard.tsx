import React from "react";

interface GuaranteesCardProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

const GuaranteesCard = ({
  title,
  description,
  icon,
  gradient,
}: GuaranteesCardProps) => {
  return (
    <div
      className={`
        group relative max-w-full cursor-default overflow-hidden rounded-3xl
        bg-linear-to-br ${gradient}
        shadow-lg transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-2xl
      `}
    >
      <div
        className="
          flex h-full flex-col px-6 py-5 transition-all duration-300 ease-out
          md:max-h-32 md:px-7 md:py-6 md:group-hover:max-h-56
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              rounded-2xl bg-white/60 px-3 py-1 text-2xl shadow
              transition-transform duration-300
              group-hover:-translate-y-0.5
            "
          >
            {icon}
          </div>

          <h3
            className="
              text-base font-semibold text-slate-900 transition-transform duration-300
              md:text-lg group-hover:text-brand
            "
          >
            {title}
          </h3>
        </div>

        <p
          className="
            mt-2.5 text-sm text-slate-700 transition-all duration-300
            opacity-100 translate-y-0
            md:mt-3
            md:translate-y-1 md:opacity-0
            md:group-hover:translate-y-0 md:group-hover:opacity-100
          "
        >
          {description}
        </p>
      </div>

      <div
        className="
          pointer-events-none absolute inset-0 rounded-3xl opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
          mix-blend-soft-light
        "
      />
    </div>
  );
};

export default GuaranteesCard;