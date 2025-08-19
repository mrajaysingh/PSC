'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Lock, CheckCircle, XCircle, Clock, ShieldOff } from 'lucide-react';

interface AdminCodeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function AdminCodeDialog({ isOpen, onClose, onSuccess }: AdminCodeDialogProps) {
  const [adminCode, setAdminCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isAlreadyDisabled, setIsAlreadyDisabled] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

  const ADMIN_CODE = 'ADMINDISABLE00351';

  useEffect(() => {
    if (isOpen) {
      checkProtectionStatus();
    }
  }, [isOpen]);

  const checkProtectionStatus = () => {
    try {
      const stored = localStorage.getItem('devtools_protection_disabled');
      if (stored) {
        const data = JSON.parse(stored);
        const now = Date.now();
        
        if (data.expiresAt && now < data.expiresAt) {
          setIsAlreadyDisabled(true);
          const remaining = Math.max(0, data.expiresAt - now);
          setTimeRemaining(remaining);
        } else {
          setIsAlreadyDisabled(false);
          setTimeRemaining(null);
          localStorage.removeItem('devtools_protection_disabled');
        }
      } else {
        setIsAlreadyDisabled(false);
        setTimeRemaining(null);
      }
    } catch (error) {
      setIsAlreadyDisabled(false);
      setTimeRemaining(null);
    }
  };

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    if (adminCode === ADMIN_CODE) {
      setSuccess(true);
      // Store the disable state in localStorage with timestamp
      const disableData = {
        disabled: true,
        timestamp: Date.now(),
        expiresAt: Date.now() + (30 * 60 * 1000) // 30 minutes
      };
      localStorage.setItem('devtools_protection_disabled', JSON.stringify(disableData));
      
      setTimeout(() => {
        onSuccess();
        onClose();
        setSuccess(false);
        setAdminCode('');
      }, 1500);
    } else {
      setError('Invalid admin code. Please try again.');
    }
    
    setIsLoading(false);
  };

  const handleReEnable = () => {
    localStorage.removeItem('devtools_protection_disabled');
    setIsAlreadyDisabled(false);
    setTimeRemaining(null);
    onClose();
    window.location.reload();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setAdminCode('');
      setError('');
      setSuccess(false);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Admin Access Required
          </DialogTitle>
          <DialogDescription>
            {isAlreadyDisabled 
              ? 'Developer tools protection is currently disabled.'
              : 'Enter the admin code to temporarily disable developer tools protection.'
            }
          </DialogDescription>
        </DialogHeader>

        {isAlreadyDisabled ? (
          <div className="space-y-4">
            <Alert className="border-green-200 bg-green-50 text-green-800">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                Protection is currently disabled.
                {timeRemaining !== null && (
                  <div className="flex items-center gap-2 mt-2">
                    <Clock className="h-4 w-4" />
                    <span className="font-mono">Time remaining: {formatTime(timeRemaining)}</span>
                  </div>
                )}
              </AlertDescription>
            </Alert>

            <div className="flex gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Close
              </Button>
              <Button
                type="button"
                variant="destructive"
                onClick={handleReEnable}
                className="flex-1"
              >
                <ShieldOff className="mr-2 h-4 w-4" />
                Re-enable Protection
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="adminCode" className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Admin Code
              </Label>
              <Input
                id="adminCode"
                type="password"
                placeholder="Enter admin code..."
                value={adminCode}
                onChange={(e) => setAdminCode(e.target.value)}
                onKeyDown={handleKeyDown}
                className="font-mono"
                disabled={isLoading || success}
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="border-green-200 bg-green-50 text-green-800">
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  Admin code accepted! Developer tools protection will be disabled for 30 minutes.
                </AlertDescription>
              </Alert>
            )}

            <div className="flex gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isLoading || success}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!adminCode.trim() || isLoading || success}
                className="flex-1"
              >
                {isLoading ? 'Verifying...' : success ? 'Success!' : 'Verify Code'}
              </Button>
            </div>
          </form>
        )}

        <div className="text-xs text-muted-foreground text-center pt-2 border-t">
          {isAlreadyDisabled 
            ? 'Protection will be re-enabled when the timer expires or when you refresh the page.'
            : 'Protection will be re-enabled after 30 minutes or when you refresh the page.'
          }
        </div>
      </DialogContent>
    </Dialog>
  );
}
