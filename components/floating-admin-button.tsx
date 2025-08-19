'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Lock } from 'lucide-react';
import { AdminCodeDialog } from '@/components/admin-code-dialog';

export function FloatingAdminButton() {
  const [showAdminDialog, setShowAdminDialog] = useState(false);

  useEffect(() => {
    // Listen for the keyboard shortcut event
    const handleAdminShortcut = () => {
      setShowAdminDialog(true);
    };

    window.addEventListener('openAdminDialog', handleAdminShortcut);

    return () => {
      window.removeEventListener('openAdminDialog', handleAdminShortcut);
    };
  }, []);

  const handleAdminSuccess = () => {
    // Show a success message or refresh the page
    window.location.reload();
  };

  return (
    <>
      <div className="fixed bottom-4 left-4 z-50">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setShowAdminDialog(true)}
          className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 shadow-lg"
          title="Admin Access (Ctrl+Shift+A)"
        >
          <Shield className="h-4 w-4" />
          <span className="hidden sm:inline">Admin</span>
        </Button>
      </div>

      <AdminCodeDialog
        isOpen={showAdminDialog}
        onClose={() => setShowAdminDialog(false)}
        onSuccess={handleAdminSuccess}
      />
    </>
  );
}
