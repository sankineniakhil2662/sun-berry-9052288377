import React from 'react'
import { UIUX_BENEFITS } from '../uiux.data'


const UIUXBenefits = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-16">
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <h2
            className="
              mx-auto
              text-balance
              text-[32px] sm:text-[44px] lg:text-[52px]
              font-extrabold
              tracking-[-0.02em]
              leading-[1.05] sm:leading-[1.06]
              text-slate-900
            "
          >
            {UIUX_BENEFITS.title}
          </h2>

          <p
            className="
              mx-auto mt-4 sm:mt-5
              max-w-245
              text-pretty
              text-[14px] sm:text-[16px] lg:text-[17px]
              leading-[1.55] sm:leading-[1.6]
              text-slate-600
              line-clamp-2
            "
          >
            {UIUX_BENEFITS.desc}
          </p>
        </div>

          <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {UIUX_BENEFITS.items.map((b)=>(
              <div
               key={b.title}
               className='rounded-(--radius-card) border border-border bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-hover '
               >
                <div className='h-10 w-10 rounded-xl bg-[rgb(--color-accent-purple)/0.12]'/>
                <h3 className='mt-4 text-lg font-semibold text-heading'>{b.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-muted'>{b.desc}</p>
              </div>
            ))}
          </div>
        
      </div>
    </section>
  )
}

export default UIUXBenefits
