import './globals.css';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Providers } from './providers';
import { Preloader } from '@/components/preloader';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'PSC Classes - Complete Learning Management System',
  description: 'A comprehensive education center for computer courses, spoken English, and professional development',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: {
    icon: [
      {
        url: '/logo.png',
        href: '/logo.png',
        sizes: '64x64',
        type: 'image/png',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" sizes="64x64" type="image/png" />
      </head>
      <body className={cn('min-h-screen bg-background font-sans antialiased overflow-x-hidden', fontSans.variable)}>
        <Providers>
          <Preloader />
          {children}
        </Providers>
      </body>
    </html>
  );
}