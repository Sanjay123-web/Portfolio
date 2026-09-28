/**
 * ============================================================
 * LoadingScreen - Premium page loading animation
 * ============================================================
 */
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="loader-container"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold gradient-text"
        >
          RM.
        </motion.div>

        {/* Loading Ring */}
        <div className="relative">
          <div className="loader-ring" />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: '3px solid transparent',
              borderBottomColor: '#3b82f6',
              animation: 'spin 1.2s linear infinite reverse',
              width: '50px',
              height: '50px',
            }}
          />
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-sm text-slate-500 tracking-widest uppercase"
        >
          Loading
        </motion.p>
      </div>
    </motion.div>
  );
}
