// Preloader.jsx — introductory shutter screen with water-fill text animation
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    // Dismiss preloader after 2200ms
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex items-center justify-center select-none overflow-hidden"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Brand Name Typography Container */}
          <motion.div
            className="relative text-5xl md:text-7xl font-black tracking-tighter"
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Background faint text copy (with bottom padding for descenders) */}
            <div className="text-red-900/30 leading-normal pb-4 md:pb-6">
              {personalInfo.brandName}.
            </div>

            {/* Foreground white text with upward water-fill clip-path animation */}
            <motion.div
              className="absolute inset-0 text-white leading-normal pb-4 md:pb-6"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: isFilled ? 'none' : 'inset(0% 0 -25% 0)' }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}
              onAnimationComplete={() => setIsFilled(true)}
            >
              {personalInfo.brandName}
              <span className="text-black">.</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

