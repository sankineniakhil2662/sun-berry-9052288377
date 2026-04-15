import React from "react";
import { UIUX_WHY } from "../uiux.data";
import whyImg from "../../../../../assets/services/uiux/WhyImg.png";

const UIUXWhyChooseUs: React.FC = () => {
  return (
    <section className="w-full bg-[#062a64] py-14 sm:py-18">
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="mx-auto text-balance text-[30px] sm:text-[40px] lg:text-[48px] font-extrabold tracking-[-0.02em] leading-[1.1] text-white">
            {UIUX_WHY.title}
          </h2>

          <p className="mx-auto mt-3 sm:mt-4 max-w-245 text-pretty text-[14px] sm:text-[16px] lg:text-[17px] leading-[1.6] text-white/80">
            {UIUX_WHY.desc}
          </p>
        </div>

        {/* Layout */}
        <div className="mt-10 grid items-center gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-14">
          
          <div className="flex justify-center lg:justify-start">
              <img
                src={whyImg}
                alt="Why choose us illustration"
                className="relative h-auto w-full rounded-2xl"
                loading="lazy"
                draggable={false}
              />
           
          </div>

          {/* RIGHT: Points (aligned like reference) */}
          <div className="flex flex-col justify-center gap-10">
            {UIUX_WHY.items.map((item, index) => (
            <div
              key={item.title}
              className="grid grid-cols-[44px_1fr] items-start gap-5"
            >
              {/* Number badge */}
              <div className="flex justify-center">
                <div
                  className="
                    mt-0.5
                    flex h-11 w-11 items-center justify-center
                    rounded-full
                    bg-white/10
                    ring-1 ring-white/20
                    text-[15px] font-semibold text-white
                  "
                >
                  {index + 1}
                </div>
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h3 className="text-[22px] font-extrabold leading-[1.15] text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] leading-[1.75] text-white/80">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIUXWhyChooseUs;
