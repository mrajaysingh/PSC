import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { RootLayoutClient } from '@/components/root-layout-client';
import { ProtectionWrapper } from '@/components/protection-wrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PSC Classes',
  description: 'PSC Classes - Your Gateway to Success',
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