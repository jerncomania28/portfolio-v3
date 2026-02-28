'use client';

import { motion } from 'motion/react';

import { useCountUp, useReducedMotion } from '@/lib/hooks';

const stats = [
  { target: 35, suffix: '%', label: 'Conversion Increase' },
  { target: 50, suffix: '%', label: 'Faster Interactions' },
  { target: 98, suffix: '', label: 'Core Web Vitals' },
  { target: 4, suffix: '+', label: 'Years Experience' },
];

function StatItem({
  target,
  suffix,
  label,
  index,
}: {
  target: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const { count, ref } = useCountUp(target, prefersReducedMotion ? 0 : 2000);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-2 text-center"
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <span
        className="leading-none font-bold text-[#2C3333]"
        style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
      >
        {prefersReducedMotion ? target : count}
        {suffix}
      </span>
      <span className="font-family-inter text-xs font-medium tracking-[0.2em] text-[#2C3333]/40 uppercase md:text-sm">
        {label}
      </span>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative w-full snap-start px-4 py-20 md:px-10 md:py-32">
      {/* Top gradient divider */}
      <div className="mx-auto mb-16 h-px max-w-5xl bg-gradient-to-r from-transparent via-[#7BB6DD]/30 to-transparent" />

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
        {stats.map((stat, index) => (
          <StatItem key={stat.label} {...stat} index={index} />
        ))}
      </div>

      {/* Bottom gradient divider */}
      <div className="mx-auto mt-16 h-px max-w-5xl bg-gradient-to-r from-transparent via-[#7BB6DD]/30 to-transparent" />
    </section>
  );
}
