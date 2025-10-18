'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Separator } from '@radix-ui/react-separator';
import { motion, useInView, useMotionValue, useSpring } from 'motion/react';

interface Project {
  id: number;
  name: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Hypetag',
    image: '/assets/webp/hypetag.webp',
    link: 'https://hypetag.com/',
  },
  {
    id: 2,
    name: 'Bitsin Travels and Tours',
    image: '/assets/webp/bitsin.webp',
    link: 'https://www.bitsintravelsandtours.com/',
  },
  {
    id: 3,
    name: 'Gaming Website',
    image: '/assets/webp/centryos-gaming-website.webp',
    link: 'https://gaming.centryos.xyz/',
  },
  {
    id: 4,
    name: 'Torrista',
    image: '/assets/webp/torrista-v2.webp',
    link: 'https://torrista.com.ng/',
  },
  {
    id: 5,
    name: 'Medicovestor',
    image: '/assets/webp/medIcovestor.webp',
    link: 'https://medicovestor.com/',
  },
  {
    id: 6,
    name: 'CentryOS Landing Page',
    image: '/assets/webp/centryos-landing-page.webp',
    link: 'https://centryos.xyz/',
  },
];

export default function RecentWorks() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const ref = useRef(null);
  const projectRefs = useRef<{ [key: number]: HTMLAnchorElement | null }>({});
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth, natural movement
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const imageX = useSpring(mouseX, springConfig);
  const imageY = useSpring(mouseY, springConfig);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement>,
    projectId: number
  ) => {
    const projectElement = projectRefs.current[projectId];
    if (!projectElement) return;

    const rect = projectElement.getBoundingClientRect();

    // Get mouse position relative to the project element
    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;

    // Constrain the image to stay within the project area with some padding
    const padding = 100; // pixels of wiggle room
    const clampedX = Math.max(
      -padding,
      Math.min(rect.width + padding, relativeX)
    );
    const clampedY = Math.max(
      -padding,
      Math.min(rect.height + padding, relativeY)
    );

    // Set position as absolute coordinates (viewport-based)
    mouseX.set(rect.left + clampedX);
    mouseY.set(rect.top + clampedY);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="work"
      ref={ref}
      className="relative flex min-h-[85vh] w-full snap-start flex-col gap-10 py-8"
    >
      {/* Header */}
      <motion.div
        className="relative flex w-full flex-col gap-2 px-4 md:px-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-footer-background text-[60px] leading-[100%] font-bold tracking-tighter">
          Recent Works
        </h2>
        <p className="text-footer-background text-[18px] leading-[100%] font-medium">
          Look around, you&apos;ll want one.
        </p>
      </motion.div>

      <Separator
        orientation="horizontal"
        className="relative h-px w-full bg-[#C6C6C6]"
      />

      {/* Projects List */}
      <motion.div
        className="relative my-6 flex w-full flex-col gap-4 px-4 md:my-12 md:gap-10 md:px-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Link
              ref={(el) => {
                projectRefs.current[project.id] = el;
              }}
              href={project.link as string}
              target="_blank"
              className="group relative flex items-center gap-4 py-4 transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onMouseMove={(e) => handleMouseMove(e, project.id)}
            >
              {/* Project Name */}
              <motion.h3
                className={`text-[50px] leading-[100%] font-bold tracking-tight transition-all duration-300 md:text-[80px] lg:text-[100px] ${
                  hoveredProject === project.id
                    ? 'text-footer-background'
                    : 'text-footer-background/40'
                }`}
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {project.name}
              </motion.h3>

              {/* Arrow Icon - Always diagonal (pointing up-right), visible on hover */}
              {hoveredProject === project.id && (
                <motion.svg
                  initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: 'easeOut' as const }}
                  className="h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </motion.svg>
              )}
            </Link>
          </motion.div>
        ))}

        {/* Cursor-Following Image Preview - Desktop Only */}
        {hoveredProject !== null && (
          <motion.div
            className="pointer-events-none fixed z-50 hidden md:block"
            style={{
              left: imageX,
              top: imageY,
              x: '-50%',
              y: '-50%',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ opacity: { duration: 0.2 } }}
          >
            <div className="relative h-[400px] w-[800px] overflow-hidden rounded-md bg-white shadow-2xl">
              {projects
                .filter((p) => p.id === hoveredProject)
                .map((project) => (
                  <Image
                    key={project.id}
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                    quality={95}
                    priority
                  />
                ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
