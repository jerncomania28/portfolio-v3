import { Instrument_Serif, Playfair_Display } from 'next/font/google';
import localFont from 'next/font/local';
import { GoogleAnalytics } from '@next/third-parties/google';

import type { Metadata } from 'next';

import Footer from '@/components/footer';
import Header from '@/components/header';
import StructuredData from '@/components/structured-data';

import { SITE_URL } from '@/lib/constant';

import './globals.css';

const neueMontreal = localFont({
  src: [
    {
      path: '../../public/fonts/NeueMontreal-Light.otf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../../public/fonts/NeueMontreal-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueMontreal-Medium.otf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/fonts/NeueMontreal-Bold.otf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-neue-montreal',
});

const alegreyaSans = localFont({
  src: [
    {
      path: '../../public/fonts/AlegreyaSans-ExtraBold.ttf',
      weight: '800',
      style: 'extra-bold',
    },
  ],
  variable: '--font-alegreya-sans',
});

const inter = localFont({
  src: [
    {
      path: '../../public/fonts/Inter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Jeremiah Okon - Frontend Developer | React & Next.js Expert',
    template: '%s | Jeremiah Okon',
  },
  description:
    'Experienced Frontend Developer specializing in React, Next.js, and TypeScript. I build fast, high-converting websites with seamless animations and interactions that keep users engaged.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Web Developer Nigeria',
    'Frontend Engineer',
    'UI/UX Developer',
    'Tailwind CSS',
    'Responsive Web Design',
    'SEO Optimization',
    'Web Performance',
    'Ilorin Developer',
    'Nigerian Developer',
    'Framer Motion',
    'Animation Developer',
    'Portfolio Website',
    'Hire Frontend Developer',
  ],
  authors: [{ name: 'Jeremiah Okon', url: SITE_URL }],
  creator: 'Jeremiah Okon',
  publisher: 'Jeremiah Okon',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jeremiah Okon - Frontend Developer | React & Next.js Expert',
    description:
      'Experienced Frontend Developer specializing in React, Next.js, and TypeScript. Creating seamless animations and engaging user interactions for high-converting websites.',
    url: SITE_URL,
    siteName: 'Jeremiah Okon Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeremiah Okon - Frontend Developer | React & Next.js Expert',
    description:
      'Experienced Frontend Developer specializing in React, Next.js, and TypeScript. Creating seamless animations and engaging user interactions.',
    creator: '@okonjeremiah4',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-0 scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${neueMontreal.variable} ${alegreyaSans.variable} ${inter.variable} ${playfairDisplay.variable} ${instrumentSerif.variable} snap-y snap-mandatory overflow-x-hidden antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />

        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      </body>
    </html>
  );
}
