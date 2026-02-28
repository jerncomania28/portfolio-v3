'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';

import { motion, useInView } from 'motion/react';

import { useReducedMotion } from '@/lib/hooks';

interface Project {
  id: number;
  name: string;
  image: string;
  link?: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Hypetag',
    image: '/assets/webp/hypetag.webp',
    link: 'https://hypetag.com/',
    description:
      'A social commerce platform connecting creators and brands with seamless tag-based product discovery.',
  },
  {
    id: 2,
    name: 'Bitsin Travels and Tours',
    image: '/assets/webp/bitsin.webp',
    link: 'https://www.bitsintravelsandtours.com/',
    description:
      'Travel agency website with booking integration, tour packages, and immersive destination showcases.',
  },
  {
    id: 3,
    name: 'Gaming Website',
    image: '/assets/webp/centryos-gaming-website.webp',
    link: 'https://gaming.centryos.xyz/',
    description:
      'High-energy gaming platform with dynamic content, leaderboards, and community features.',
  },
  {
    id: 4,
    name: 'Torrista',
    image: '/assets/webp/torrista-v2.webp',
    link: 'https://torrista.com.ng/',
    description:
      'Tourism and hospitality platform showcasing local experiences with advanced search and booking flows.',
  },
  {
    id: 5,
    name: 'Medicovestor',
    image: '/assets/webp/medIcovestor.webp',
    link: 'https://medicovestor.com/',
    description:
      'Healthcare investment platform bridging medical professionals with funding opportunities.',
  },
  {
    id: 6,
    name: 'CentryOS Landing Page',
    image: '/assets/webp/centryos-landing-page.webp',
    link: 'https://centryos.xyz/',
    description:
      'Modern SaaS landing page with scroll-driven animations and conversion-optimized layout.',
  },
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      className="group relative"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      <Link
        href={project.link as string}
        target="_blank"
        className="relative flex w-full items-center justify-between px-4 py-6 md:px-10 md:py-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => {
          // On mobile, first tap expands, second tap navigates
          if (window.innerWidth < 768 && !isExpanded) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }
          sendGAEvent({
            event: 'project_click',
            value: project.name,
            project_name: project.name,
            project_url: project.link,
            event_category: 'engagement',
            event_label: 'recent_works_section',
          });
        }}
      >
        {/* Hover background */}
        <motion.div
          className="absolute inset-0 bg-[#2C3333]/[0.02]"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Left: Project name + description */}
        <div className="relative z-10 flex items-baseline gap-4 md:gap-6">
          <span className="font-family-inter text-xs font-medium text-[#2C3333]/30 md:text-sm">
            {formattedIndex}
          </span>
          <div className="flex flex-col gap-1">
            <h3 className="text-footer-background text-2xl font-bold tracking-tight transition-colors duration-300 md:text-4xl lg:text-5xl">
              {project.name}
            </h3>
            <p className="font-family-inter hidden text-sm leading-relaxed text-[#2C3333]/50 md:block md:text-base">
              {project.description}
            </p>
          </div>
        </div>

        {/* Right: Arrow */}
        <motion.div
          className="relative z-10"
          animate={
            prefersReducedMotion
              ? undefined
              : { x: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.3 }
          }
          transition={{ duration: 0.3 }}
        >
          <svg
            className="h-5 w-5 text-[#2C3333] md:h-7 md:w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </motion.div>

        {/* Desktop: Hover image preview */}
        <motion.div
          className="pointer-events-none absolute top-1/2 right-24 z-20 hidden -translate-y-1/2 md:block"
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          animate={
            isHovered
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: 30, scale: 0.95 }
          }
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative h-[280px] w-[480px] overflow-hidden rounded-lg shadow-2xl lg:h-[320px] lg:w-[560px]">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              sizes="560px"
              quality={90}
            />
          </div>
        </motion.div>
      </Link>

      {/* Mobile expanded content */}
      <motion.div
        className="overflow-hidden px-4 md:hidden"
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="pb-4">
          <div className="relative mb-3 aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <p className="font-family-inter text-sm leading-relaxed text-[#2C3333]/60">
            {project.description}
          </p>
        </div>
      </motion.div>

      {/* Bottom border with hover animation */}
      <div className="relative h-px w-full bg-[#C6C6C6]/50">
        <motion.div
          className="absolute top-0 left-0 h-full bg-[#2C3333]"
          initial={{ width: '0%' }}
          animate={{ width: isHovered ? '100%' : '0%' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function RecentWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="work"
      ref={ref}
      className="relative flex w-full snap-start flex-col py-16 md:py-24"
    >
      {/* Header */}
      <motion.div
        className="mb-6 flex flex-col gap-4 px-4 text-center md:mb-10 md:px-10 md:text-left"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
        animate={
          isInView
            ? { opacity: 1, y: 0 }
            : prefersReducedMotion
              ? undefined
              : { opacity: 0, y: 30 }
        }
        transition={{ duration: 0.6 }}
      >
        <span className="font-family-inter text-xs font-medium tracking-[0.3em] text-[#2C3333]/50 uppercase">
          [ WORK ]
        </span>
        <h2 className="text-footer-background text-4xl leading-tight font-bold tracking-tight md:text-6xl lg:text-7xl">
          Recent Works
        </h2>
        <p className="font-family-inter text-base text-[#2C3333]/50 md:text-lg">
          Look around, you&apos;ll want one.
        </p>
      </motion.div>

      {/* Top border */}
      <div className="h-px w-full bg-[#C6C6C6]/50" />

      {/* Projects Accordion */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
