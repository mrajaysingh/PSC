import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ShieldAlert } from 'lucide-react';
import Link from 'next/link';

export default function DevToolsBlockedPage() {
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
            <p className="text-lg text-muted-foreground mb-8">
              Developer tools are not permitted on this website. Please close developer tools to continue browsing.
            </p>
            <Link href="/">
              <Button size="lg" variant="default">
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 