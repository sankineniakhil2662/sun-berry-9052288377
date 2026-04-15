import React from "react";
import { UIUX_STATS } from "../uiux.data";

const UIUXStats = () => {
  return (
    <section className="w-full bg-bg text-black">
      <div className="mx-auto max-w-350 px-10 py-16 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className="
            text-center
            text-[28px] sm:text-[38px] lg:text-[44px]
            font-extrabold
            tracking-[-0.02em]
            leading-[1.15]
          "
        >
          Why Should You Opt for UI/UX Solutions?
        </h2>

        {/* Stats Grid */}
        <div className="mt-14 grid grid-cols-1 gap-x-20 gap-y-12 lg:grid-cols-2">
          {UIUX_STATS.map((stat, index) => (
            <div key={stat.title} className="flex items-start gap-6">
              {/* Number / Icon placeholder */}
              <div
                className="
                  flex h-16 w-16 shrink-0 items-center justify-center
                  rounded-2xl
                  bg-[#0A5CFF]
                  text-black font-bold
                "
              >
                {index + 1}
              </div>

              {/* Content */}
              <div className="min-w-0">
                {/* Value */}
                <div className="text-black font-extrabold leading-none">
                  {stat.value}
                </div>

                {/* Title */}
                <h3 className="mt-2 text-black font-semibold">
                  {stat.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[15px] leading-[1.7] text-black/80"> 
                  {stat.desc}
                </p>

                {/* Source */}
                <p className="mt-1 text-[13px] text-black/60 italic">
                  — {stat.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UIUXStats;
