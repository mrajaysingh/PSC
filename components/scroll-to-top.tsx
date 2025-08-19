'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScroll } from '@/hooks/useScroll';

export function ScrollToTop() {
  const { showScrollTop, scrollToTop } = useScroll();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: showScrollTop ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8"
    >
      <Button
        variant="outline"
        size="icon"
        className="rounded-full shadow-lg"
        onClick={scrollToTop}
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </motion.div>
  );
} 