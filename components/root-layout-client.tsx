'use client';

import { ThemeProvider } from "@/components/theme-provider";
import { useState, useEffect } from "react";
import { WarningModal } from "@/components/ui/warning-modal";
import { Providers } from '@/app/providers';
import { Preloader } from '@/components/preloader';

interface RootLayoutClientProps {
  children: React.ReactNode;
}

export function RootLayoutClient({ children }: RootLayoutClientProps) {
  const [showWarning, setShowWarning] = useState(true);

  useEffect(() => {
    // Check if user has already acknowledged in this session
    const hasAcknowledged = sessionStorage.getItem('warningAcknowledged');
    if (hasAcknowledged) {
      setShowWarning(false);
    }
  }, []);

  const handleAcknowledge = () => {
    // Store acknowledgment in session storage (cleared when browser closes)
    sessionStorage.setItem('warningAcknowledged', 'true');
    setShowWarning(false);
  };

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
        <WarningModal isOpen={showWarning} onAcknowledge={handleAcknowledge} />
      </Providers>
    </ThemeProvider>
  );
} 