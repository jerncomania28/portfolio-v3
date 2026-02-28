'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { sendGAEvent } from '@next/third-parties/google';

import { motion, useInView } from 'motion/react';

import { CalendlyModal } from '@/components/calendly-modal';

import { BOOK_A_CALL } from '@/lib/constant';

export default function About() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative flex min-h-screen w-full snap-start flex-col px-4 py-16 md:px-10 md:py-24"
    >
      <motion.div
        className="relative mb-12 flex h-auto w-full items-center gap-2 overflow-hidden text-[#2C3333] md:mb-20 md:gap-4"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={scaleIn}
      >
        <h1 className="text-[120px] leading-[100%] font-bold tracking-tighter md:text-[220px] lg:text-[320px] xl:text-[420px] 2xl:text-[500px]">
          Hello
        </h1>
        <div className="relative flex-shrink-0 cursor-pointer">
          <motion.div
            className="rotating-gradient-border relative h-[80px] w-[75px] overflow-hidden rounded-full border-4 border-white bg-gray-100 md:h-[240px] md:w-[220px]"
            whileHover={{
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 },
            }}
          >
            <Image
              src="/assets/profile.jpg"
              fill
              alt="profile"
              className="object-cover"
              sizes="(max-width: 768px) 80px, 240px"
              priority
            />
          </motion.div>
          <motion.div
            className="font-family-alegreya absolute -top-2 -right-3 w-fit rounded-full bg-white p-2 text-[8px] leading-[100%] tracking-tighter whitespace-nowrap shadow-md md:-top-4 md:-right-6 md:p-4 md:text-xl"
            style={{ transform: 'rotate(-5deg)' }}
            whileHover={{ scale: 1.1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Jeremiah Okon👋🏿
          </motion.div>
        </div>
      </motion.div>

      <div className="relative flex w-full flex-col items-start justify-between gap-10 text-[#2C3333] md:flex-row md:gap-0">
        <motion.p
          className="font-family-inter text-base leading-relaxed font-normal md:max-w-[508px] md:text-lg"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          Hey, I&apos;m Jeremiah — I build websites and web apps that feel as
          good as they look. For the past 4+ years, I&apos;ve been helping
          startups and growing teams bring their ideas to life with React and
          Next.js — fast-loading pages, smooth animations, and the kind of
          details that make users stick around. I genuinely love what I do, and
          I&apos;d love to help bring your next project to life too.
        </motion.p>

        <motion.div
          className="flex w-full flex-col items-center gap-6 md:w-auto md:items-end"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <span className="font-family-inter max-w-[127px] self-end text-right text-sm md:max-w-[200px] md:text-[18px]">
            Let&apos;s make your website standout.
          </span>

          <motion.span
            className="cursor-pointer py-2 font-bold uppercase underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              sendGAEvent({
                event: 'book_call_click',
                value: 'Ask Me Anything',
                button_location: 'about',
                event_category: 'conversion',
                event_label: 'ask_me_anything',
              });
              setIsCalendlyOpen(true);
            }}
          >
            Ask Me Anything
          </motion.span>
        </motion.div>
      </div>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        url={BOOK_A_CALL}
      />
    </section>
  );
}
