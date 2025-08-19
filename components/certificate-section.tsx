'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle, QrCode } from 'lucide-react';
import Image from 'next/image';

export function CertificateSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 text-center"
        >
          Digital Certificate of Completion
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Certificate Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[1.414/1] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://res.cloudinary.com/dwos0fnlt/image/upload/v1747483803/Completion-Certificate.webp"
                alt="PSC Classes Digital Certificate"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:pl-6"
          >
            <p className="text-muted-foreground text-lg mb-8">
              Upon successful completion of your course, receive a verified digital certificate that showcases your achievement and validates your expertise.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Professional Recognition</h3>
                  <p className="text-muted-foreground">
                    Our certificates are recognized by industry professionals and demonstrate your commitment to skill development.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <QrCode className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Verifiable Authenticity</h3>
                  <p className="text-muted-foreground">
                    Each certificate includes a unique QR code and verification link to prove its authenticity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Instant Digital Access</h3>
                  <p className="text-muted-foreground">
                    Get immediate access to your digital certificate upon course completion, perfect for sharing on LinkedIn or your portfolio.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 