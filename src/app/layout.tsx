import './globals.css';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

import { Lexend } from 'next/font/google';

import type { Metadata } from 'next';

const lexend = Lexend({ weight: 'variable' });

export const metadata: Metadata = {
  title: 'Joshua Levine',
  description:
    'Welcome to my personal portfolio, poke around, get to know me a little bit and feel free to reach out if you have any questions!'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${lexend.className} flex min-h-screen flex-col antialiased`}>
        <Header />
        <main className='mx-auto w-full max-w-7xl p-5 pt-24'>{children}</main>
        <div className='flex-1' />
        <Footer />
      </body>
    </html>
  );
}
