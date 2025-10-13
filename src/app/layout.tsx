import localFont from 'next/font/local';

import type { Metadata } from 'next';

import Footer from '@/components/footer';
import Header from '@/components/header';

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

export const metadata: Metadata = {
  title: 'Jeremiah Okon',
  description: 'Jeremiah Okon',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueMontreal.variable} ${alegreyaSans.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
