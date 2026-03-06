"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onFinish?: () => void;
}

export default function Loader({ onFinish }: LoaderProps) {
  const [loading, setLoading] =  useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onFinish) onFinish();
    }, 3000); // Increased to 4 seconds for a slower feel

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {loading && (
        // The main container now fades out slowly
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          exit={{ opacity: 0, transition: { duration: 1.0, ease: "easeInOut" } }}
        >
          {/* Container for the circular reveal */}
          <motion.div
            initial={{ clipPath: 'circle(0% at 50% 50%)' }}
            animate={{ clipPath: 'circle(150% at 50% 50%)' }}
            transition={{ duration: 1.5, ease: "easeInOut" }} // Slower reveal
          >
            {/* The logo with its subtle pulse */}
            <motion.img
              src="/images/cubichouse.png"
              alt="Logo"
              className="h-36 w-36" // Logo is now bigger
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                scale: [1, 1.02],
                transition: {
                  opacity: { duration: 0.5, delay: 0.2 },
                  scale: {
                    duration: 1.5,
                    delay: 1.5, // Pulse starts after the slower reveal
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                },
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}