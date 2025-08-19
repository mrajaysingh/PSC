'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ShieldAlert, Shield, Lock } from 'lucide-react';
import Link from 'next/link';
import { AdminCodeDialog } from '@/components/admin-code-dialog';
import { useRouter } from 'next/navigation';

export default function DevToolsBlockedPage() {
  const [showAdminDialog, setShowAdminDialog] = useState(false);
  const router = useRouter();

  const handleAdminSuccess = () => {
    // Redirect back to the previous page or home
    router.push('/');
  };

  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-muted/50">
        <div className="container max-w-2xl text-center px-4">
          <div className="bg-background rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <ShieldAlert className="h-16 w-16 text-destructive" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-destructive">Access Denied</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Developer tools are not permitted on this website. Please close developer tools to continue browsing.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Need Admin Access?</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  If you're an administrator and need to temporarily disable this protection, you can use the admin code.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowAdminDialog(true)}
                  className="flex items-center gap-2"
                >
                  <Lock className="h-4 w-4" />
                  Enter Admin Code
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" variant="default">
                  Return to Homepage
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.reload()}
              >
                Refresh Page
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      <AdminCodeDialog
        isOpen={showAdminDialog}
        onClose={() => setShowAdminDialog(false)}
        onSuccess={handleAdminSuccess}
      />
    </>
  );
} 