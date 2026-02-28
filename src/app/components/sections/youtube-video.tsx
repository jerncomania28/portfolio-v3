'use client';

import { motion } from 'motion/react';

import { useReducedMotion } from '@/lib/hooks';

export default function YouTubeVideo() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex w-full snap-start flex-col items-center gap-8 px-4 py-20 md:gap-12 md:px-10 md:py-32">
      {/* Eyebrow + Heading */}
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="font-family-inter text-xs font-medium tracking-[0.3em] text-[#2C3333]/50 uppercase">
          [ MEET JEREMIAH ]
        </span>
        <h2 className="text-footer-background max-w-3xl text-3xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
          See how I work before you hire me.
        </h2>
      </div>

      {/* Video Card */}
      <div className="relative w-full max-w-6xl">
        {/* Gradient halo */}
        <div className="absolute inset-0 -z-10 scale-110 rounded-[20px] bg-[radial-gradient(circle,_#7BB6DD33_0%,_transparent_70%)] blur-[100px]" />

        <motion.div
          className="relative overflow-hidden rounded-[20px] border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-sm md:p-3"
          initial={
            prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }
          }
          whileInView={
            prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }
          }
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-[14px]">
            <iframe
              src="https://www.youtube.com/embed/tN3F0NwmBc8?rel=0"
              title="Jeremiah Okon - How I Work"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Subline */}
      <motion.p
        className="font-family-inter text-sm font-medium tracking-[0.2em] text-[#2C3333]/40 uppercase"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        4+ years. Real teams. Real results.
      </motion.p>
    </section>
  );
}
