import React from "react";

/* Props type */
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
        group relative overflow-hidden
        rounded-3xl bg-linear-to-br ${gradient}
        transition-all duration-300 ease-out
        shadow-lg
        hover:shadow-2xl hover:-translate-y-2
        cursor-default
        max-w-full
      `}
    >
      {/* Inner wrapper */}
      <div
        className="
          flex flex-col h-full
          px-6 py-5
          md:px-7 md:py-6
          transition-all duration-300 ease-out
          max-h-32 group-hover:max-h-56
        "
      >
        {/* Icon + Title */}
        <div className="flex items-center gap-3">
          <div
            className="
              text-2xl
              bg-white/60 rounded-2xl px-3 py-1
              shadow
              transition-transform duration-300
              group-hover:-translate-y-0.5
            "
          >
            {icon}
          </div>

          <h3
            className="
              text-base md:text-lg font-semibold text-slate-900
              transition-transform duration-300
              group-hover:text-brand
            "
          >
            {title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="
            mt-2.5 md:mt-3
            text-sm md:text-[0.9rem] text-slate-700
            opacity-0 translate-y-1
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300
          "
        >
          {description}
        </p>
      </div>

      {/* Glow overlay */}
      <div
        className="
          pointer-events-none
          absolute inset-0 rounded-3xl
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          shadow-[0_0_35px_rgba(56,189,248,0.45)]
          mix-blend-soft-light
        "
      />
    </div>
  );
};

export default GuaranteesCard;
