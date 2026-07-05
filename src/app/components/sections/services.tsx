'use client';

import {
  ArrowUpRight,
  Boxes,
  Code2,
  Gauge,
  LayoutDashboard,
  Plug,
  ShoppingCart,
} from 'lucide-react';
import { motion } from 'motion/react';

import { useReducedMotion } from '@/lib/hooks';

interface Service {
  icon: typeof Code2;
  name: string;
  description: string;
  highlight?: string;
  span: string;
  feature?: boolean;
}

const services: Service[] = [
  {
    icon: Code2,
    name: 'React & Next.js Engineering',
    description:
      'Production web apps architected for speed, SEO, and scale — server components, clean state, and code that the next dev actually enjoys reading.',
    highlight: 'My core craft',
    span: 'md:col-span-4',
    feature: true,
  },
  {
    icon: LayoutDashboard,
    name: 'SaaS Dashboards & Data Viz',
    description:
      'Complex, data-dense dashboards made intuitive — real-time updates, charts, and flows that turn raw data into decisions.',
    span: 'md:col-span-2',
  },
  {
    icon: Gauge,
    name: 'Performance & Core Web Vitals',
    description:
      'Slow site? I tune bundles, rendering, and Web Vitals until it feels instant.',
    span: 'md:col-span-2',
  },
  {
    icon: Boxes,
    name: 'Design Systems & Components',
    description:
      'Reusable, accessible component libraries built on design tokens and documented for the whole team.',
    span: 'md:col-span-2',
  },
  {
    icon: ShoppingCart,
    name: 'E-commerce & Payments',
    description:
      'Storefronts with seamless checkout and payment integration that convert browsers into buyers.',
    span: 'md:col-span-2',
  },
  {
    icon: Plug,
    name: 'API & Backend Integration',
    description:
      'Wiring your frontend to any REST/GraphQL API, third-party service, or headless CMS — typed, resilient, and fast.',
    span: 'md:col-span-6',
  },
];

export default function Services() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="services"
      className="relative w-full snap-start px-4 py-20 md:px-10 md:py-32"
    >
      {/* Header */}
      <div className="mb-12 flex flex-col items-center gap-4 text-center md:mb-16">
        <span className="font-family-inter text-xs font-medium tracking-[0.3em] text-[#2C3333]/50 uppercase">
          [ SERVICES ]
        </span>
        <h2 className="text-footer-background max-w-3xl text-3xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
          Whatever stage you&apos;re at — I&apos;ve{' '}
          <span className="font-family-instrument font-normal italic">
            built
          </span>{' '}
          it.
        </h2>
      </div>

      {/* Bento Grid */}
      <motion.div
        className="mx-auto grid max-w-6xl auto-rows-fr grid-cols-1 gap-4 md:grid-cols-6 md:gap-5"
        variants={prefersReducedMotion ? undefined : containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.name}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[#2C3333]/10 bg-[#2C3333]/[0.03] p-6 backdrop-blur-sm transition-colors duration-500 hover:border-[#7BB6DD]/40 hover:bg-[#2C3333]/[0.06] md:p-8 ${service.span}`}
              variants={prefersReducedMotion ? undefined : itemVariants}
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Hover glow sweep */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7BB6DD]/0 via-[#7BB6DD]/0 to-[#5BA4D1]/0 opacity-0 transition-opacity duration-500 group-hover:from-[#7BB6DD]/[0.08] group-hover:to-[#5BA4D1]/[0.04] group-hover:opacity-100" />

              {/* Corner arrow on hover */}
              <ArrowUpRight
                className="absolute top-5 right-5 h-5 w-5 translate-x-1 -translate-y-1 text-[#7BB6DD] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 md:top-7 md:right-7"
                strokeWidth={1.5}
              />

              <div className="relative z-10 flex h-full flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2C3333]/[0.05] transition-colors duration-300 group-hover:bg-[#7BB6DD]/15">
                    <Icon
                      className="h-5 w-5 text-[#2C3333]/70 transition-colors duration-300 group-hover:text-[#5BA4D1]"
                      strokeWidth={1.5}
                    />
                  </span>
                  {service.highlight && (
                    <span className="font-family-inter rounded-full bg-[#7BB6DD]/15 px-3 py-1 text-[10px] font-medium tracking-[0.15em] text-[#5BA4D1] uppercase">
                      {service.highlight}
                    </span>
                  )}
                </div>
                <h3
                  className={`text-footer-background font-bold ${
                    service.feature
                      ? 'text-2xl md:text-3xl'
                      : 'text-lg md:text-xl'
                  }`}
                >
                  {service.name}
                </h3>
                <p
                  className={`font-family-inter leading-relaxed text-[#2C3333]/80 ${
                    service.feature ? 'text-base md:text-lg' : 'text-sm'
                  }`}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
