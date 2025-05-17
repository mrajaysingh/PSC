'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Search, Award, CheckCircle2, XCircle } from 'lucide-react';

export default function VerifyCertificatePage() {
  const [certificateId, setCertificateId] = useState('');
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'loading' | 'valid' | 'invalid'>('idle');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setVerificationStatus('loading');
    
    // Simulate verification process
    setTimeout(() => {
      // For demo, let's consider certificates starting with "PSC" as valid
      setVerificationStatus(certificateId.startsWith('PSC') ? 'valid' : 'invalid');
    }, 1500);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-16">
        <div className="container">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Certificate Verification</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Verify the authenticity of certificates issued by PSC Classes. Enter your certificate ID below to check its validity.
            </p>
          </motion.div>

          {/* Verification Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl mx-auto mb-12"
          >
            <Card className="p-6">
              <form onSubmit={handleVerify} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="certificateId" className="block text-sm font-medium">
                    Certificate ID
                  </label>
                  <div className="relative">
                    <Input
                      id="certificateId"
                      type="text"
                      placeholder="Enter your certificate ID (e.g., PSC123456)"
                      value={certificateId}
                      onChange={(e) => setCertificateId(e.target.value)}
                      className="pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={!certificateId || verificationStatus === 'loading'}>
                  {verificationStatus === 'loading' ? 'Verifying...' : 'Verify Certificate'}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Verification Result */}
          {verificationStatus !== 'idle' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl mx-auto"
            >
              <Card className={`p-6 ${
                verificationStatus === 'valid' 
                  ? 'bg-green-500/10' 
                  : verificationStatus === 'invalid' 
                  ? 'bg-red-500/10' 
                  : ''
              }`}>
                {verificationStatus === 'loading' && (
                  <div className="flex items-center justify-center space-x-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    <p className="text-lg">Verifying certificate...</p>
                  </div>
                )}

                {verificationStatus === 'valid' && (
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full p-2 bg-green-500/20">
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-green-500 mb-2">Valid Certificate</h3>
                      <p className="text-muted-foreground">
                        This certificate has been verified as authentic and was issued by PSC Classes.
                      </p>
                    </div>
                  </div>
                )}

                {verificationStatus === 'invalid' && (
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full p-2 bg-red-500/20">
                      <XCircle className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-red-500 mb-2">Invalid Certificate</h3>
                      <p className="text-muted-foreground">
                        We could not verify this certificate. Please check the certificate ID and try again.
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          )}

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <Card className="p-6 text-center">
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Authentic Certificates</h3>
              <p className="text-sm text-muted-foreground">
                All certificates are digitally signed and securely stored.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Quick Verification</h3>
              <p className="text-sm text-muted-foreground">
                Instant verification process with real-time results.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="rounded-full bg-primary/10 p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Trusted Results</h3>
              <p className="text-sm text-muted-foreground">
                Reliable verification system backed by secure technology.
              </p>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
} 