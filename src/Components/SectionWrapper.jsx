import React from "react";
import { motion } from "framer-motion";

/**
 * Section wrapper for consistent spacing and animations
 */
const SectionWrapper = ({ 
  children, 
  className = "",
  id = "",
  spacing = "py-0"  // No vertical padding - controlled by parent Home container
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`${spacing} ${className}`}
    >
      <div className="w-11/12 mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

/**
 * Section header component for consistent titles
 */
export const SectionHeader = ({ 
  title, 
  subtitle, 
  align = "center",
  className = "" 
}) => {
  const alignClass = align === "center" ? "text-center" : align === "left" ? "text-left" : "text-right";
  
  return (
    <div className={`mb-8 sm:mb-12 ${alignClass} ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionWrapper;
