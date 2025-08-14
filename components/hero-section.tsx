'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, BookOpen, AlignCenterVertical as Certificate, GraduationCap, Users } from 'lucide-react';
import { AnimatedHeading } from '@/components/animated-heading';
import { Counter } from '@/components/ui/counter';
import { useRef, useState, useEffect } from 'react';

export function HeroSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setKey(prev => prev + 1), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative pt-20 sm:pt-28 lg:pt-36 pb-10 sm:pb-14 lg:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 dark:from-primary/10 dark:to-primary/5" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Community Card - Will show first on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative max-w-lg mx-auto lg:mx-0 lg:ml-auto px-4 sm:px-0 order-first lg:order-last"
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
                <div className="w-full block">
                  <Link href="/courses">
                    <Button className="w-full">Explore Courses</Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section - Will show second on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left order-last lg:order-first"
          >
            <AnimatedHeading />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 px-4 sm:px-0"
            >
              Join PSC Classes' comprehensive learning programs designed to build skills, boost careers, and deliver tangible results.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start px-4 sm:px-0"
            >
              <div className="w-full sm:w-auto">
                <Link href="/courses">
                  <Button size="lg" className="w-full sm:w-auto group">
                    Explore Courses
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="w-full sm:w-auto">
                <Link href="/about">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Explore Campus
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0"
            >
              <div className="flex flex-col items-center text-center p-3 bg-background rounded-lg shadow-sm">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary mb-2" />
                <span className="text-lg sm:text-xl md:text-2xl font-bold">
                  <Counter key={`courses-${key}`} end={50} suffix="+" />
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground">Courses</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-background rounded-lg shadow-sm">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary mb-2" />
                <span className="text-lg sm:text-xl md:text-2xl font-bold">
                  <Counter key={`students-${key}`} end={10000} suffix="+" />
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground">Students</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-background rounded-lg shadow-sm">
                <Certificate className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary mb-2" />
                <span className="text-lg sm:text-xl md:text-2xl font-bold">
                  <Counter key={`success-${key}`} end={99} suffix="%" />
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground">Success Rate</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-background rounded-lg shadow-sm">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary mb-2" />
                <span className="text-lg sm:text-xl md:text-2xl font-bold">
                  <Counter key={`years-${key}`} end={8} suffix="+" />
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground">Years</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}