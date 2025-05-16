'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, AlignCenterVertical as Certificate, GraduationCap, Users } from 'lucide-react';
import { AnimatedHeading } from '@/components/animated-heading';

export function HeroSection() {
  return (
    <section className="relative pt-16 sm:pt-24 lg:pt-32 pb-10 sm:pb-14 lg:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 dark:from-primary/10 dark:to-primary/5" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <AnimatedHeading />
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 px-4 sm:px-0">
              Join PSC Classes' comprehensive learning programs designed to build skills, boost careers, and deliver tangible results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start px-4 sm:px-0">
              <Link href="/courses" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto group">
                  Explore Courses
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/register" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Register Now
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0">
              <div className="flex flex-col items-center text-center p-3 bg-background rounded-lg shadow-sm">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary mb-2" />
                <span className="text-lg sm:text-xl md:text-2xl font-bold">50+</span>
                <span className="text-xs sm:text-sm text-muted-foreground">Courses</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-background rounded-lg shadow-sm">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary mb-2" />
                <span className="text-lg sm:text-xl md:text-2xl font-bold">10K+</span>
                <span className="text-xs sm:text-sm text-muted-foreground">Students</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-background rounded-lg shadow-sm">
                <Certificate className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary mb-2" />
                <span className="text-lg sm:text-xl md:text-2xl font-bold">99%</span>
                <span className="text-xs sm:text-sm text-muted-foreground">Success Rate</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-background rounded-lg shadow-sm">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary mb-2" />
                <span className="text-lg sm:text-xl md:text-2xl font-bold">8+</span>
                <span className="text-xs sm:text-sm text-muted-foreground">Years</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative max-w-lg mx-auto lg:mx-0 lg:ml-auto px-4 sm:px-0"
          >
            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-muted-foreground/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="bg-card border shadow-xl rounded-xl overflow-hidden relative z-10">
              <img 
                src="/community.png" 
                alt="PSC Classes Community" 
                className="w-full h-48 sm:h-64 md:h-80 object-cover object-center"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Join Our Learning Community</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">Get access to expert instructors, industry-relevant curriculum, and a supportive learning environment.</p>
                <Link href="/register" className="w-full block">
                  <Button className="w-full">Get Started Today</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}