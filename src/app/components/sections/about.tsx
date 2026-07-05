'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { sendGAEvent } from '@next/third-parties/google';

import { ArrowUpRight, BookOpen, Briefcase, Code2, Zap } from 'lucide-react';
import { motion, useInView } from 'motion/react';

import { CalendlyModal } from '@/components/calendly-modal';

import { BOOK_A_CALL } from '@/lib/constant';

const facts = [
  {
    icon: Briefcase,
    label: 'Experience',
    value: '4+ years shipping for startups & teams',
  },
  {
    icon: Code2,
    label: 'Core stack',
    value: 'React · Next.js · TypeScript · Tailwind',
  },
  {
    icon: Zap,
    label: 'Response time',
    value: 'Usually within a few hours',
  },
  {
    icon: BookOpen,
    label: 'Currently learning',
    value: 'Go, for backend systems',
  },
];

export default function About() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full snap-start px-4 py-20 md:px-10 md:py-32"
    >
      {/* Header */}
      <div className="mb-12 flex flex-col items-center gap-4 text-center md:mb-16">
        <span className="font-family-inter text-xs font-medium tracking-[0.3em] text-[#2C3333]/50 uppercase">
          [ ABOUT ]
        </span>
        <h2 className="text-footer-background max-w-3xl text-3xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
          The person{' '}
          <span className="font-family-instrument font-normal italic">
            behind
          </span>{' '}
          the pixels.
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-14 lg:gap-20">
        {/* Left — photo + story */}
        <motion.div
          className="flex flex-col items-center gap-8 md:items-start"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="relative w-fit">
            <motion.div
              className="rotating-gradient-border relative h-[280px] w-[240px] overflow-hidden rounded-full border-4 border-white bg-gray-100 md:h-[340px] md:w-[300px]"
              whileHover={{
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 },
              }}
            >
              <Image
                src="/assets/profile.jpg"
                fill
                alt="Jeremiah Okon, frontend developer specializing in React and Next.js"
                className="object-cover"
                sizes="(max-width: 768px) 240px, 300px"
                priority
              />
            </motion.div>
            <motion.div
              className="font-family-alegreya absolute -top-3 -right-4 w-fit rounded-full bg-white p-3 text-sm leading-[100%] tracking-tighter whitespace-nowrap shadow-md md:p-4 md:text-xl"
              style={{ transform: 'rotate(-5deg)' }}
              whileHover={{ scale: 1.1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Jeremiah Okon👋🏿
            </motion.div>
          </div>

          {/* Story — three beats */}
          <div className="font-family-inter flex flex-col gap-5 text-base leading-relaxed text-[#2C3333]/80 md:text-lg">
            <p>
              <strong className="font-semibold text-[#2C3333]">
                I&apos;m Jeremiah, a frontend developer who treats websites like
                products, not pages.
              </strong>{' '}
              For 4+ years I&apos;ve helped startups and growing teams ship with
              React and Next.js.
            </p>
            <p>
              <strong className="font-semibold text-[#2C3333]">
                What I obsess over:
              </strong>{' '}
              the details most builds skip. Fast loads, smooth motion, and
              interfaces that feel intentional on every device.
            </p>
            <p>
              <strong className="font-semibold text-[#2C3333]">
                What that means for you:
              </strong>{' '}
              a site visitors trust in the first three seconds, and one that
              turns more of them into customers.
            </p>
          </div>
        </motion.div>

        {/* Right — quick facts + CTA */}
        <motion.div
          className="flex flex-col gap-4 self-center"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {facts.map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="flex items-center gap-4 rounded-2xl border border-[#2C3333]/10 bg-[#2C3333]/[0.03] p-5 backdrop-blur-sm transition-colors duration-500 hover:border-[#7BB6DD]/40 hover:bg-[#2C3333]/[0.06] md:p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2C3333]/[0.05]">
                <Icon className="h-5 w-5 text-[#2C3333]/70" strokeWidth={1.5} />
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="font-family-inter text-xs font-medium tracking-[0.2em] text-[#2C3333]/40 uppercase">
                  {label}
                </span>
                <span className="text-base font-semibold text-[#2C3333] md:text-lg">
                  {value}
                </span>
              </div>
            </motion.div>
          ))}

          <motion.button
            type="button"
            variants={itemVariants}
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
            className="group font-family-inter mt-2 flex items-center justify-center gap-2 rounded-full bg-[#2C3333] px-8 py-4 text-sm font-medium tracking-wide text-white uppercase transition-colors duration-300 hover:bg-[#2C3333]/90"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Ask Me Anything
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>
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
