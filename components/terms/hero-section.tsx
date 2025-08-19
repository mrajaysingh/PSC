'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="pt-32 pb-16 bg-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Terms & Conditions
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Last updated: March 2024
          </motion.p>
        </div>
      </div>
    </section>
  );
} 