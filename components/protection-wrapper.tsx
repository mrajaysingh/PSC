'use client';

import { useProtection } from '@/hooks/useProtection';

export function ProtectionWrapper({ children }: { children: React.ReactNode }) {
  const { isProtectionDisabled } = useProtection();
  
  return <>{children}</>;
} 