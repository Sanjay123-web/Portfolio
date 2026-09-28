/**
 * ============================================================
 * SectionWrapper - Reusable section container with scroll
 * reveal animation and consistent spacing
 * ============================================================
 */
import { motion } from 'framer-motion';

export default function SectionWrapper({
  id,
  children,
  className = '',
  containerClass = '',
}) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 overflow-hidden ${className}`}
    >
      <div className={`container-custom relative z-10 ${containerClass}`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
