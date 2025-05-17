'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      // Disable scroll
      document.body.style.overflow = 'hidden';
      // Disable zoom on mobile
      document.documentElement.style.touchAction = 'none';
      
      // Disable text selection
      document.body.style.userSelect = 'none';
      document.body.style.webkitUserSelect = 'none';

      // Prevent right click
      const handleContextMenu = (e: Event) => e.preventDefault();
      document.addEventListener('contextmenu', handleContextMenu);

      // Prevent zoom keys
      const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '0')) {
          e.preventDefault();
        }
      };
      document.addEventListener('keydown', handleKeyDown);

      // Prevent zoom gesture
      const handleWheel = (e: WheelEvent) => {
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
        }
      };
      document.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        // Cleanup when component unmounts or loading ends
        document.body.style.overflow = 'unset';
        document.documentElement.style.touchAction = 'unset';
        document.body.style.userSelect = 'unset';
        document.body.style.webkitUserSelect = 'unset';
        document.removeEventListener('contextmenu', handleContextMenu);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('wheel', handleWheel);
      };
    }
  }, [isLoading]);

  useEffect(() => {
    // Simulate loading time for 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: "easeOut" }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center">
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ scale: 1 }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <motion.div
                  initial={{ opacity: 0.3, scale: 1 }}
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-1 rounded-full bg-primary blur-sm"
                />
                <div className="relative rounded-full bg-background p-4">
                  <img 
                    src="/logo.png" 
                    alt="PSC Classes Logo" 
                    className="h-16 w-16 select-none"
                    draggable="false"
                  />
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-center"
            >
              <h2 className="text-2xl font-bold text-foreground">PSC Classes</h2>
              <p className="text-sm text-muted-foreground">Loading amazing content...</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 