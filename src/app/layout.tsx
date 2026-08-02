import './globals.css';

import AmbientBackground from '@/components/background/AmbientBackground';
import BackgroundProvider from '@/components/background/BackgroundContext';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import WebcamBackground from '@/components/ui/WebcamBackground';

import { Bricolage_Grotesque, Lexend } from 'next/font/google';
import { SITE_CONFIG } from '@/utils/siteConfig';
import { ViewTransitions } from 'next-view-transitions';

import type { Metadata } from 'next';

const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend' });
const bricolage = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricolage' });

export const metadata: Metadata = {
  description:
    'Welcome to my personal portfolio, poke around, get to know me a little bit and feel free to reach out if you have any questions!',
  metadataBase: new URL(SITE_CONFIG.url),
  title: 'Joshua Levine',
  verification: {
    google: 'aq6hqjPSa8IEyhU-KQiLBe8vucj8S2aI_wLb1CsXaPM'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <body className={`${lexend.variable} ${bricolage.variable} flex min-h-screen flex-col font-body antialiased`}>
          <BackgroundProvider>
            <AmbientBackground />
            <WebcamBackground />
            <Header />
            <main className='mx-auto w-full max-w-7xl p-5 pt-24'>{children}</main>
            <div className='flex-1' />
            <Footer />
          </BackgroundProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
