'use client';

import {
  Code2,
  Globe,
  Layers,
  LayoutDashboard,
  MonitorSmartphone,
  Rocket,
  ShoppingCart,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';

import { useReducedMotion } from '@/lib/hooks';

const services = [
  {
    icon: Code2,
    name: 'React & Next.js Development',
    description:
      'High-performance web applications built with React and Next.js for speed, SEO, and scalability.',
    span: 'md:col-span-3',
  },
  {
    icon: ShoppingCart,
    name: 'E-commerce Solutions',
    description:
      'Custom online stores with seamless checkout, payment integration, and inventory management.',
    span: 'md:col-span-3',
  },
  {
    icon: Rocket,
    name: 'SaaS Interfaces',
    description:
      'Intuitive dashboards and user interfaces for software-as-a-service products that convert.',
    span: 'md:col-span-2',
  },
  {
    icon: MonitorSmartphone,
    name: 'Responsive Design',
    description:
      'Pixel-perfect layouts that look incredible on every device, from mobile to ultrawide.',
    span: 'md:col-span-2',
  },
  {
    icon: Zap,
    name: 'Performance Optimization',
    description:
      'Speed up your existing site with Core Web Vitals tuning and bundle optimization.',
    span: 'md:col-span-2',
  },
  {
    icon: LayoutDashboard,
    name: 'Landing Pages',
    description:
      'High-converting landing pages with motion design that captures attention and drives action.',
    span: 'md:col-span-2',
  },
  {
    icon: Layers,
    name: 'Component Libraries',
    description:
      'Reusable, accessible UI component systems built with design tokens and documentation.',
    span: 'md:col-span-2',
  },
  {
    icon: Globe,
    name: 'API Integration',
    description:
      'Connecting your frontend to any backend, third-party service, or headless CMS.',
    span: 'md:col-span-2',
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
    <section className="relative w-full snap-start px-4 py-20 md:px-10 md:py-32">
      {/* Header */}
      <div className="mb-12 flex flex-col items-center gap-4 text-center md:mb-16">
        <span className="font-family-inter text-xs font-medium tracking-[0.3em] text-[#2C3333]/50 uppercase">
          [ SERVICES ]
        </span>
        <h2 className="text-footer-background max-w-3xl text-3xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
          Whatever stage you&apos;re at — I&apos;ve built it.
        </h2>
      </div>

      {/* Bento Grid */}
      <motion.div
        className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-6 md:gap-5"
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
              className={`group relative overflow-hidden rounded-2xl border border-[#2C3333]/8 bg-[#2C3333]/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#7BB6DD]/30 hover:bg-[#2C3333]/[0.06] md:p-8 ${service.span}`}
              variants={prefersReducedMotion ? undefined : itemVariants}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7BB6DD]/0 to-[#5BA4D1]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />

              <div className="relative z-10 flex flex-col gap-4">
                <div>
                  <Icon
                    className="h-6 w-6 text-[#2C3333]/60 transition-colors duration-300 group-hover:text-[#7BB6DD]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-footer-background text-lg font-bold md:text-xl">
                  {service.name}
                </h3>
                <p className="font-family-inter text-sm leading-relaxed text-[#2C3333]/60 md:text-base">
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
