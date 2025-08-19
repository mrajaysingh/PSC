'use client';

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Shield, ShieldOff, Clock } from 'lucide-react';

export function ProtectionStatus() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

  useEffect(() => {
    const checkStatus = () => {
      try {
        const stored = localStorage.getItem('devtools_protection_disabled');
        if (stored) {
          const data = JSON.parse(stored);
          const now = Date.now();
          
          if (data.expiresAt && now < data.expiresAt) {
            setIsDisabled(true);
            const remaining = Math.max(0, data.expiresAt - now);
            setTimeRemaining(remaining);
          } else {
            setIsDisabled(false);
            setTimeRemaining(null);
            localStorage.removeItem('devtools_protection_disabled');
          }
        } else {
          setIsDisabled(false);
          setTimeRemaining(null);
        }
      } catch (error) {
        setIsDisabled(false);
        setTimeRemaining(null);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isDisabled) {
    return null;
  }

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Badge 
        variant="destructive" 
        className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600"
      >
        <ShieldOff className="h-3 w-3" />
        <span>Protection Disabled</span>
        {timeRemaining !== null && (
          <>
            <Clock className="h-3 w-3" />
            <span className="font-mono">{formatTime(timeRemaining)}</span>
          </>
        )}
      </Badge>
    </div>
  );
}
