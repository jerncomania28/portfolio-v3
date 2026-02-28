'use client';

import { useReducedMotion } from '@/lib/hooks';

const testimonials = [
  {
    quote:
      'Jeremiah delivered beyond our expectations. The site is fast, beautiful, and our conversion rate jumped immediately.',
    name: '[Client Name]',
    company: '[Company]',
    initial: 'C',
  },
  {
    quote:
      'Working with Jeremiah was seamless. He understood our vision from day one and translated it into a flawless product.',
    name: '[Client Name]',
    company: '[Company]',
    initial: 'A',
  },
  {
    quote:
      'The attention to detail in the animations and micro-interactions made our brand stand out from every competitor.',
    name: '[Client Name]',
    company: '[Company]',
    initial: 'M',
  },
  {
    quote:
      'Our page speed went from 45 to 98. Jeremiah knows performance optimization like nobody else we have worked with.',
    name: '[Client Name]',
    company: '[Company]',
    initial: 'R',
  },
  {
    quote:
      'He built our entire SaaS dashboard in record time. Clean code, great communication, and zero bugs in production.',
    name: '[Client Name]',
    company: '[Company]',
    initial: 'J',
  },
  {
    quote:
      'Jeremiah is the rare developer who cares about design as much as code. Highly recommend for any frontend project.',
    name: '[Client Name]',
    company: '[Company]',
    initial: 'T',
  },
];

function TestimonialCard({
  quote,
  name,
  company,
  initial,
}: (typeof testimonials)[0]) {
  return (
    <div className="flex w-[320px] flex-shrink-0 flex-col gap-5 rounded-2xl border border-[#2C3333]/8 bg-white/60 p-6 backdrop-blur-sm md:w-[380px] md:p-8">
      <p className="font-family-inter text-sm leading-relaxed text-[#2C3333]/70 md:text-base">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2C3333]/10 text-sm font-bold text-[#2C3333]">
          {initial}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-[#2C3333]">{name}</span>
          <span className="font-family-inter text-xs text-[#2C3333]/40">
            {company}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="relative w-full snap-start overflow-hidden py-20 md:py-32">
      {/* Header */}
      <div className="mb-12 flex flex-col items-center gap-4 px-4 text-center md:mb-16 md:px-10">
        <span className="font-family-inter text-xs font-medium tracking-[0.3em] text-[#2C3333]/50 uppercase">
          [ KIND WORDS ]
        </span>
        <h2 className="text-footer-background text-3xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
          What clients say.
        </h2>
      </div>

      {/* Scrolling Cards */}
      <div
        className={`group flex gap-5 ${
          prefersReducedMotion
            ? 'flex-wrap justify-center px-4'
            : 'animate-testimonial-scroll hover:[animation-play-state:paused]'
        }`}
        style={prefersReducedMotion ? undefined : { width: 'max-content' }}
      >
        {(prefersReducedMotion ? testimonials : doubled).map(
          (testimonial, i) => (
            <TestimonialCard
              key={`${testimonial.initial}-${i}`}
              {...testimonial}
            />
          )
        )}
      </div>
    </section>
  );
}
