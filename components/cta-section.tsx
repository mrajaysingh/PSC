'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-16">
      <div className="container">
        <motion.div 
          className="bg-gradient-to-r from-primary/90 to-primary/70 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-primary-foreground relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Background Shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full -translate-x-1/3 translate-y-1/3 mix-blend-overlay"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Start Your Learning Journey Today</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-primary-foreground/90">
              Join thousands of students who have already transformed their careers with our expert-led courses. Register now and take the first step toward a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link href="/courses" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto group">
                  Explore Courses
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/register" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}