'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import notFoundAnimation from "@/public/animations/404-animation.json";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 dark:opacity-20 opacity-10">
        <div className="absolute inset-0 bg-grid-black/[0.2] dark:bg-grid-white/[0.2] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Floating circles */}
        <motion.div
          className="absolute h-32 w-32 rounded-full bg-primary/20 blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            top: "20%",
            left: "20%",
          }}
        />
        <motion.div
          className="absolute h-40 w-40 rounded-full bg-secondary/20 blur-xl"
          animate={{
            x: [0, -70, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            top: "50%",
            right: "20%",
          }}
        />
      </motion.div>

      <div className="relative z-10 text-center px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Animation Side */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md mx-auto"
            >
              <Lottie
                animationData={notFoundAnimation}
                loop={true}
                className="w-full h-[300px] lg:h-[400px]"
              />
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
                404
              </h1> */}
              <h2 className="text-3xl font-semibold mb-4">
                Page Not Found
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Oops! The page you're looking for seems to have wandered off. 
                Don't worry though, you can always head back to safety!
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => router.back()}
                  size="lg"
                  className="px-8"
                >
                  Go Back
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 