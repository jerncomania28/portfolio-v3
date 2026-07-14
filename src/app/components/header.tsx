'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sendGAEvent } from '@next/third-parties/google';

import { SlashIcon, X } from 'lucide-react';
import { AnimatePresence, m } from 'motion/react';

import { EMAIL } from '@/lib/constant';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/ui/breadcrumb';
import { Button } from '@/ui/button';
import { LocalTimeClock } from '@/ui/local-time-clock';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  // On the home page these are in-page anchors we scroll to smoothly. On any
  // other route (e.g. /extract-audio) there is nothing to scroll to, so the
  // links point at `/#id` and we let the browser navigate home instead.
  const hashHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    setIsMobileMenuOpen(false);
    sendGAEvent({
      event: 'nav_click',
      value: id,
      click_location: 'header',
      event_category: 'engagement',
      event_label: 'nav_link',
    });
    if (!isHome) return; // let the anchor navigate to `/#id`
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'tools', label: 'Tools' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'content', label: 'Content' },
    { id: 'contact', label: 'Contact' },
  ];

  // Desktop keeps the nav compact so the header doesn't crowd the hero:
  // core links always show, secondary ones only on wide screens, and the
  // full list lives in the mobile menu (the JO logo anchors to #home).
  const desktopLinks: { id: string; label: string; wideOnly?: boolean }[] = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services', wideOnly: true },
    { id: 'work', label: 'Work' },
    { id: 'tools', label: 'Tools' },
    { id: 'reviews', label: 'Reviews', wideOnly: true },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="relative z-50 flex w-full items-center justify-between px-4 py-4 md:items-start md:px-10 md:pt-10 md:pb-5">
        <m.a
          href={hashHref('home')}
          onClick={(e) => handleNavClick(e, 'home')}
          className="group relative cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-family-playfair text-footer-background text-3xl leading-[100%] font-black tracking-tight italic md:text-4xl">
            JO
          </span>
          <m.div
            className="border-footer-background absolute -inset-2 rounded-full border-2 opacity-0 group-hover:opacity-100"
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </m.a>
        <div className="flex flex-col items-center justify-center gap-3">
          <LocalTimeClock />
          <Link
            href={`mailto:${EMAIL}`}
            target="_blank"
            className="text-footer-background hidden text-xl leading-[100%] font-medium -tracking-[1%] md:inline-block"
            onClick={() => {
              sendGAEvent({
                event: 'email_click',
                value: EMAIL,
                click_location: 'header',
                event_category: 'engagement',
                event_label: 'contact_email',
              });
            }}
          >
            {EMAIL}
          </Link>
        </div>

        <Breadcrumb className="hidden md:inline-block">
          <BreadcrumbList className="text-base leading-[100%] font-normal -tracking-[2%] text-[#666666B2] lg:text-lg">
            {desktopLinks.map((link, index) => (
              <div
                key={link.id}
                className={
                  link.wideOnly
                    ? 'hidden items-center xl:flex'
                    : 'flex items-center'
                }
              >
                <BreadcrumbItem>
                  <BreadcrumbLink
                    asChild
                    className="active:text-footer-background hover:text-footer-background cursor-pointer transition-colors"
                  >
                    <a
                      href={hashHref(link.id)}
                      onClick={(e) => handleNavClick(e, link.id)}
                    >
                      {link.label}
                    </a>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index < desktopLinks.length - 1 && (
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
          <m.div
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

            <m.nav
              className="flex flex-col items-center gap-5"
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
                <m.a
                  key={link.id}
                  href={hashHref(link.id)}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-4xl font-bold tracking-tighter text-white transition-colors hover:text-gray-300"
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
                </m.a>
              ))}
            </m.nav>

            <m.div
              className="absolute bottom-8 text-sm text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Tap anywhere to navigate
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
