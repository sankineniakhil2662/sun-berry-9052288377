import React from 'react'
import Why from "../../../../../assets/services/mobileapp/Why.png";

type WhyData = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  imageAlt: string;
};

const CheckIcon = () => (
  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white">
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </span>
);

export default function WhyChooseUs({ data }: { data: WhyData }) {
  return (
    <section className="bg-bg">
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16'>
        <div className='grid items-center gap-10 lg:grid-cols-2 lg:gap-12'>
          {/* Left Image */}
          <div className='justify-self-center'>
            <div className='rounded-2xl bg-surface shadow-card'>
              <img 
               src={Why}
               alt={data.imageAlt}
               className='block w-full max-w-xl rounded-2xl object-contain'
               loading="lazy"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className='max-w-xl'>
            <p className='text-lg font-semibold tracking-wide text-brand'>
              {data.eyebrow}
            </p>

            <h2 className='mt-3 whitespace-pre-line text-3xl font-semibold leading-tight text-heading sm:text-4xl'>
              {data.title}
            </h2>

            <p className='mt-4 tesxt-sm leading-relaxed text-muted sm:text-base'>
              {data.description}
            </p>

            <div className='mt-7 space-y-4'>
              {data.points.map((text)=>(
                <div key={text} className='flex items-start gap-4'>
                  <CheckIcon/>
                  <p className='text-sm leading-relaxed text-heading/80 sm:text-base'>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}