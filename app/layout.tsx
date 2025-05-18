import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { RootLayoutClient } from '@/components/root-layout-client';
import { ProtectionWrapper } from '@/components/protection-wrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PSC Classes | Future Begins Here',
  description: 'PSC Classes - Your Gateway to Success. Join us for expert-led courses in Computer Science, Programming, English Speaking, and more. Transform your future with quality education.',
  keywords: 'PSC Classes, computer courses, programming, English speaking, education, professional training, skill development',
  authors: [{ name: 'PSC Classes' }],
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any' },
      { url: '/logo.png', sizes: '32x32' },
      { url: '/logo.png', sizes: '16x16' },
    ],
    apple: [
      { url: '/logo.png' }
    ],
    shortcut: ['/logo.png'],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pscclasses.com',
    siteName: 'PSC Classes',
    title: 'PSC Classes | Future Begins Here',
    description: 'PSC Classes - Your Gateway to Success. Join us for expert-led courses in Computer Science, Programming, English Speaking, and more. Transform your future with quality education.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'PSC Classes Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PSC Classes | Future Begins Here',
    description: 'PSC Classes - Your Gateway to Success. Join us for expert-led courses in Computer Science, Programming, English Speaking, and more. Transform your future with quality education.',
    images: ['/logo.png'],
    creator: '@pscclasses',
    site: '@pscclasses',
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ProtectionWrapper>
          <RootLayoutClient>
            {children}
          </RootLayoutClient>
        </ProtectionWrapper>
      </body>
    </html>
  );
}