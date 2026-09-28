/**
 * ============================================================
 * ThemeToggle - Dark/Light mode toggle button
 * ============================================================
 */
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.3 }}
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full glass flex items-center justify-center
                 hover:scale-110 transition-transform duration-300 group"
      aria-label="Toggle theme"
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-amber-400 group-hover:rotate-180 transition-transform duration-500" />
      ) : (
        <Moon className="w-5 h-5 text-violet-400 group-hover:-rotate-12 transition-transform duration-500" />
      )}
    </motion.button>
  );
}
