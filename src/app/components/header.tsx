'use client';

import { useState } from 'react';
import Link from 'next/link';

import { SlashIcon, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/ui/breadcrumb';
import { Button } from '@/ui/button';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
  ];

  return (
    <>
      <header className="relative z-50 flex w-full items-center justify-between px-4 py-4 md:items-start md:px-10 md:pt-10 md:pb-5">
        <motion.a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="group relative cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-family-playfair text-footer-background text-3xl leading-[100%] font-black tracking-tight italic md:text-4xl">
            JO
          </span>
          <motion.div
            className="border-footer-background absolute -inset-2 rounded-full border-2 opacity-0 group-hover:opacity-100"
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
        <div className="flex flex-col items-center justify-center gap-3">
          <span className="text-xl leading-[100%] font-normal -tracking-[2%] text-[#666666B2]">
            Ilorin, Nigeria ❤️
          </span>
          <Link
            href="mailto:okonjeremiahprogs@gmail.com"
            target="_blank"
            className="text-footer-background hidden text-xl leading-[100%] font-medium -tracking-[1%] md:inline-block"
          >
            okonjeremiahprogs@gmail.com
          </Link>
        </div>

        <Breadcrumb className="hidden md:inline-block">
          <BreadcrumbList className="text-xl leading-[100%] font-normal -tracking-[2%] text-[#666666B2]">
            {navLinks.map((link, index) => (
              <div key={link.id} className="flex items-center">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    asChild
                    className="active:text-footer-background hover:text-footer-background cursor-pointer transition-colors"
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                    >
                      {link.label}
                    </a>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index < navLinks.length - 1 && (
                  <BreadcrumbSeparator>
                    <SlashIcon className="text-footer-background" />
                  </BreadcrumbSeparator>
                )}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        <Button
          variant="link"
          className="text-footer-background inline-block px-0 py-0 text-xl leading-[100%] font-normal -tracking-[2%] md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          Menu
        </Button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="bg-footer-background fixed inset-0 z-[100] flex flex-col items-center justify-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="ghost"
              className="absolute top-4 right-4 text-white hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-8 w-8" />
            </Button>

            <motion.nav
              className="flex flex-col items-center gap-8"
              initial="hidden"
              animate="visible"
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
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-6xl font-bold tracking-tighter text-white transition-colors hover:text-gray-300"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1] as const,
                      },
                    },
                  }}
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>

            <motion.div
              className="absolute bottom-8 text-sm text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Tap anywhere to navigate
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
