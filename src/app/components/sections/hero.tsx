'use client';

import { useEffect } from 'react';

import { motion } from 'motion/react';

import { ScrollButton } from '@/ui/scroll-button';

export default function Hero() {
  // Ensure page starts at top on load to prevent auto-scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const text = 'Your website could work better—if I developed it.';
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full snap-start flex-col justify-between px-4 py-8 md:px-10 md:py-12"
    >
      <div className="relative flex w-full flex-1 items-center justify-center">
        <motion.h1
          className="text-footer-background text-[75px] leading-[100%] font-bold tracking-tighter md:text-[110px] lg:text-[140px] xl:text-[170px] 2xl:text-[200px]"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="mr-2 inline-block sm:mr-3 md:mr-4 lg:mr-5"
              variants={child}
              style={{ perspective: '1000px' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      <motion.div
        className="relative flex w-full items-center justify-center pb-6 md:items-end md:justify-end md:pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-5">
          <motion.span
            className="text-footer-background text-base leading-[100%] font-medium md:text-lg"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Scroll to be saved
          </motion.span>
          <ScrollButton />
        </div>
      </motion.div>
    </section>
  );
}
