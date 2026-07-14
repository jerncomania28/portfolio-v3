'use client';

import { useEffect, useState } from 'react';
import { sendGAEvent } from '@next/third-parties/google';

import { Calendar } from 'lucide-react';
import { m, useMotionValue, useSpring } from 'motion/react';

import { CalendlyModal } from '@/components/calendly-modal';

import { BOOK_A_CALL, UPWORK_PROFILE_URL } from '@/lib/constant';
import { useReducedMotion } from '@/lib/hooks';

import { ScrollButton } from '@/ui/scroll-button';

function UpworkIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703 2.707 2.707 0 0 1-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.551 2.551 0 0 1-2.547 2.548 2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 3 2.443 5.489 5.443 5.489a5.505 5.505 0 0 0 5.446-5.489v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.45-5.439-5.45z" />
    </svg>
  );
}

export default function Hero() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
  const orbX = useSpring(mouseX, springConfig);
  const orbY = useSpring(mouseY, springConfig);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, prefersReducedMotion]);

  const text = 'Your website could work better—if I developed it.';
  const words = text.split(' ');

  return (
    <section
      id="home"
      className="grain-overlay relative flex min-h-screen w-full snap-start flex-col justify-between overflow-hidden px-4 py-8 md:min-h-[calc(100dvh-6rem)] md:px-10 md:py-12"
    >
      {/* Cursor-following gradient orb */}
      {!prefersReducedMotion && (
        <m.div
          className="pointer-events-none fixed z-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
          style={{
            left: orbX,
            top: orbY,
            x: '-50%',
            y: '-50%',
            background:
              'radial-gradient(circle, #7BB6DD 0%, #a855f7 50%, transparent 70%)',
          }}
        />
      )}

      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center gap-6 md:gap-8">
        <p className="font-family-inter text-center text-xs font-medium tracking-[0.3em] text-[#2C3333]/60 uppercase md:text-sm">
          Jeremiah Okon — Frontend Developer · React &amp; Next.js Expert
        </p>

        <m.a
          href={UPWORK_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            sendGAEvent({
              event: 'upwork_click',
              value: 'Hire me on Upwork',
              click_location: 'hero',
              event_category: 'engagement',
              event_label: 'hero_upwork_badge',
            });
          }}
          className="inline-flex items-center gap-2.5 rounded-full border border-[#14A800]/25 bg-[#14A800]/10 px-4 py-2 text-sm font-semibold text-[#14A800] shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#14A800]/50 hover:bg-[#14A800]/15 hover:shadow-[0_0_30px_rgba(20,168,0,0.25)] md:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
          aria-label="View my Upwork profile"
        >
          <UpworkIcon className="h-5 w-5 md:h-[1.4rem] md:w-[1.4rem]" />
          <span>Hire me on Upwork</span>
        </m.a>
        <h1 className="text-footer-background text-[clamp(4.5rem,12vw,12.5rem)] leading-[100%] font-bold tracking-tighter">
          {words.map((word, index) => (
            <span
              key={index}
              className="mr-2 inline-block sm:mr-3 md:mr-4 lg:mr-5"
            >
              {word}
            </span>
          ))}
        </h1>
      </div>

      <m.div
        className="relative z-10 flex w-full flex-col items-center justify-center gap-6 pb-6 md:flex-row md:items-end md:justify-between md:pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        {/* CTA */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
            <m.button
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
              whileHover={
                prefersReducedMotion ? undefined : { scale: 1.05, y: -4 }
              }
              whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              {/* Animated gradient background */}
              <m.div
                className="absolute inset-0 bg-gradient-to-r from-[#7BB6DD] via-[#5BA4D1] to-[#7BB6DD]"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }
                }
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
                <m.div
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, -5, 0],
                        }
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Calendar className="h-7 w-7 md:h-8 md:w-8" />
                </m.div>
                Book a Free Call
              </span>

              {/* Ripple effect on hover */}
              <m.div
                className="absolute inset-0 rounded-full bg-white/50"
                initial={{ scale: 0, opacity: 0.5 }}
                whileHover={{
                  scale: 2,
                  opacity: 0,
                  transition: { duration: 0.6 },
                }}
              />
            </m.button>
          </div>
        </div>

        {/* Scroll indicator - Right side */}
        <div className="hidden flex-col items-center gap-3 md:flex md:flex-row md:gap-5">
          <m.span
            className="text-footer-background text-base leading-[100%] font-medium md:text-lg"
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: [0.5, 1, 0.5],
                  }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Scroll to be saved
          </m.span>
          <ScrollButton />
        </div>
      </m.div>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        url={BOOK_A_CALL}
        title="Let's Chat - Book Your Free Call"
      />
    </section>
  );
}
