'use client';

import { useEffect, useState } from 'react';
import { sendGAEvent } from '@next/third-parties/google';

import { Calendar } from 'lucide-react';
import { motion } from 'motion/react';

import { CalendlyModal } from '@/components/calendly-modal';

import { BOOK_A_CALL } from '@/lib/constant';

import { ScrollButton } from '@/ui/scroll-button';

export default function Hero() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

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
        className="relative flex w-full flex-col items-center justify-center gap-6 pb-6 md:flex-row md:items-end md:justify-between md:pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        {/* CTA Button - Left side on desktop */}
        <motion.button
          onClick={() => {
            sendGAEvent({
              event: 'book_call_click',
              value: 'Book a Free Call',
              button_location: 'hero',
              event_category: 'conversion',
              event_label: 'cta_button',
            });
            setIsCalendlyOpen(true);
          }}
          className="bg-footer-background group relative overflow-hidden rounded-full px-10 py-5 text-white shadow-2xl transition-all duration-300 hover:shadow-[0_0_60px_rgba(123,182,221,0.4)] md:px-12 md:py-6"
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#7BB6DD] via-[#5BA4D1] to-[#7BB6DD]"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% 100%',
            }}
          />

          <span className="relative z-10 flex items-center gap-3 text-xl font-black tracking-wide uppercase md:text-2xl">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Calendar className="h-7 w-7 md:h-8 md:w-8" />
            </motion.div>
            Book a Free Call
          </span>

          {/* Ripple effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white/50"
            initial={{ scale: 0, opacity: 0.5 }}
            whileHover={{
              scale: 2,
              opacity: 0,
              transition: { duration: 0.6 },
            }}
          />
        </motion.button>

        {/* Scroll indicator - Right side */}
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

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        url={BOOK_A_CALL}
        title="Let's Chat - Book Your Free Call"
      />
    </section>
  );
}
