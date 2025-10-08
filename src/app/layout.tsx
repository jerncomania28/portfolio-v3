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
      <body className={`${neueMontreal.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
