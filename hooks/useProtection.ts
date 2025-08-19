'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function useProtection() {
  const router = useRouter();
  const [isProtectionDisabled, setIsProtectionDisabled] = useState(false);

  useEffect(() => {
    // Check if protection is disabled via admin code
    const checkProtectionStatus = () => {
      try {
        const stored = localStorage.getItem('devtools_protection_disabled');
        if (stored) {
          const data = JSON.parse(stored);
          const now = Date.now();
          
          // Check if the disable period has expired
          if (data.expiresAt && now > data.expiresAt) {
            localStorage.removeItem('devtools_protection_disabled');
            setIsProtectionDisabled(false);
            return false;
          }
          
          setIsProtectionDisabled(data.disabled);
          return data.disabled;
        }
        return false;
      } catch (error) {
        console.error('Error checking protection status:', error);
        return false;
      }
    };

    // Initial check
    const isDisabled = checkProtectionStatus();
    
    if (isDisabled) {
      return; // Don't apply protection if disabled
    }

    // Disable right click
    const disableRightClick = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', disableRightClick);

    // Disable key combinations
    const disableKeys = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
      
      // Admin code shortcut: Ctrl+Shift+A
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        // Trigger admin dialog by dispatching a custom event
        window.dispatchEvent(new CustomEvent('openAdminDialog'));
      }
    };
    document.addEventListener('keydown', disableKeys);

    // Detect DevTools
    const detectDevTools = () => {
      // Check protection status again in case it was disabled
      if (checkProtectionStatus()) {
        return;
      }

      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      if (widthThreshold || heightThreshold) {
        router.push('/devtools-blocked');
      }
    };

    const devToolsInterval = setInterval(detectDevTools, 1000);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableKeys);
      clearInterval(devToolsInterval);
    };
  }, [router]);

  return { isProtectionDisabled };
} 