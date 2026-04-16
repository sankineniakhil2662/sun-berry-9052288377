import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Priya Mason",
    rating: 5,
    text: "Working with Sunberry was seamless. Their design support and frontend development were spot on.",
  },
  {
    name: "Ankit Verma",
    rating: 5,
    text: "Our online store launched in record time. Sales have grown steadily ever since.",
  },
  {
    name: "Meena Raghav",
    rating: 5,
    text: "Great team to collaborate with. Sunberry helped us hit a critical deadline with excellent support.",
  },
  {
    name: "Ravi Sharma",
    rating: 5,
    text: "Their commitment to delivery and innovative solutions transformed our financial workflows.",
  },
];

const CARD_WIDTH = 320;


const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransition(true);
      setIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index >= testimonials.length) {
      setTimeout(() => {
        setTransition(false);
        setIndex(0);
      }, 700);
    }
  }, [index]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full bg-bg py-20 overflow-hidden">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            Testimonials
          </p>
          <div className="mt-2 flex items-center justify-center">
            <h2 className="mt-3 text-3xl font-semibold text-heading sm:text-4xl">
              Trusted by {" "}
              <span className="text-[rgb(var(--color-accent-magenta))]">
                growing teams
              </span>
            </h2>
          </div>
          <p className="mt-3 text-base text-body">
            What our clients say about working with Sunberry.
          </p>
        </div>
      </div>

      <div
        className="mx-auto mt-12 overflow-hidden"
        style={{ maxWidth: cardsToShow * (CARD_WIDTH + 24) - 24 }}
      >
        <div
          className={`flex gap-6 ${transition
              ? "transition-transform duration-700 ease-[cubic-bezier(0.4,0,0,2,1)]"
              : ""
            }`}
          style={{
            transform: `translateX(-${index * (CARD_WIDTH + 24)}px)`,
          }}
        >
          {[...testimonials, testimonials[0], testimonials[1]].map((item, i) => (
            <div
              key={i}
              className="w-80 shrink-0 rounded-card border border-border bg-surface p-6 shadow-card"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
                  </svg>
                </div>


                <div>
                  <h3 className="text-sm font-semibold text-heading">{item.name}</h3>
                  <div className="flex">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="text-brand text-base">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>


              <p className="text-body text-sm leading-relaxed relative pl-4">
                <span className="text-brand font-bold text-3xl absolute left-0 -top-2">
                  “
                </span>
                {item.text}
                <span className="text-brand font-bold text-3xl ml-1">
                  ”
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
