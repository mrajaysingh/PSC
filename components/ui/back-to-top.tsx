'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-4 right-4 z-50 sm:bottom-8 sm:right-8"
        >
          <Button
            size="icon"
            className={cn(
              "h-10 w-10 rounded-full sm:h-12 sm:w-12",
              "bg-primary hover:bg-primary/90",
              "text-primary-foreground shadow-lg",
              "transition-all duration-200",
              "hover:shadow-xl hover:-translate-y-1",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            )}
            onClick={scrollToTop}
          >
            <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">Back to top</span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 