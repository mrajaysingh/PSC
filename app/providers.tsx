'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { BackToTop } from '@/components/ui/back-to-top';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
      <Toaster />
      <BackToTop />
    </ThemeProvider>
  );
}