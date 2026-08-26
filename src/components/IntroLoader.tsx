import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Sparkles } from 'lucide-react';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisible(false);
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 400); // Allow exit transition
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setVisible(false);
    onComplete();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030610] text-white px-6 overflow-hidden select-none"
        >
          {/* Ambient blue background glows */}
          <div className="absolute w-96 h-96 rounded-full bg-blue-600/15 blur-[100px] animate-pulse-glow" />
          <div className="absolute w-64 h-64 rounded-full bg-cyan-500/10 blur-[80px] -top-10 -right-10" />

          {/* Center brand presentation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative z-10 text-center flex flex-col items-center"
          >
            {/* Tech Logo Icon badge */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/30 to-slate-900/90 border border-blue-500/40 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20"
            >
              <Cpu className="w-8 h-8 text-blue-400" />
            </motion.div>

            {/* Typography */}
            <motion.h1
              initial={{ opacity: 0, letterSpacing: '0.2em' }}
              animate={{ opacity: 1, letterSpacing: '0.25em' }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[0.25em] text-white uppercase font-display"
            >
              BRANTFORD
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xs sm:text-sm tracking-[0.35em] text-blue-400 font-medium uppercase mt-1.5 flex items-center gap-2"
            >
              <span className="w-4 h-[1px] bg-blue-500/60 inline-block"></span>
              WIRELESS & ELECTRONICS
              <span className="w-4 h-[1px] bg-blue-500/60 inline-block"></span>
            </motion.div>

            {/* Luxury light sweep bar */}
            <div className="relative w-48 sm:w-64 h-[2px] bg-slate-800 rounded-full mt-6 overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              />
            </div>
            
            <p className="text-[11px] text-slate-400 uppercase tracking-widest mt-4 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-blue-400" />
              Luxury Technology Showroom
            </p>
          </motion.div>

          {/* Quick skip button */}
          <button
            id="intro-skip-btn"
            onClick={handleSkip}
            className="absolute bottom-8 text-xs text-slate-400 hover:text-white uppercase tracking-widest px-4 py-2 rounded-full border border-slate-800 hover:border-slate-600 transition-colors z-20"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
