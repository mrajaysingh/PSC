'use client';

import { ThemeProvider } from "@/components/theme-provider";
import { useState, useEffect } from "react";
import { WarningModal } from "@/components/ui/warning-modal";
import { Providers } from '@/app/providers';
import { Preloader } from '@/components/preloader';
import { Toaster } from '@/components/ui/toaster';
import { FloatingAdminButton } from '@/components/floating-admin-button';
import { ProtectionStatus } from '@/components/protection-status';

interface RootLayoutClientProps {
  children: React.ReactNode;
}

export function RootLayoutClient({ children }: RootLayoutClientProps) {
  const [showWarning, setShowWarning] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if user has already acknowledged in this session
    const hasAcknowledged = window?.sessionStorage?.getItem('warningAcknowledged');
    if (!hasAcknowledged) {
      setShowWarning(true);
    }
  }, []);

  const handleAcknowledge = () => {
    // Store acknowledgment in session storage (cleared when browser closes)
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('warningAcknowledged', 'true');
    }
    setShowWarning(false);
  };

  if (!isMounted) {
    return (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Providers>
          <Preloader />
          {children}
          <FloatingAdminButton />
          <ProtectionStatus />
          <Toaster />
        </Providers>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Providers>
        <Preloader />
        {children}
        <FloatingAdminButton />
        <ProtectionStatus />
        <WarningModal isOpen={showWarning} onAcknowledge={handleAcknowledge} />
        <Toaster />
      </Providers>
    </ThemeProvider>
  );
} 