import React from "react";
import { motion } from "framer-motion";

/**
 * Standard page wrapper component for consistent layout across the app
 * Provides: consistent margins, padding, max-width, and fade-in animations
 */
const PageWrapper = ({ 
  children, 
  className = "",
  maxWidth = "max-w-7xl",
  padding = "px-4 sm:px-6 lg:px-8 py-8 sm:py-12",
  animate = true,
  background = "bg-[var(--color-bg-secondary)]"
}) => {
  const content = (
    <div className={`min-h-screen ${background} transition-colors duration-300`}>
      <div className={`${maxWidth} mx-auto ${padding} ${className}`}>
        {children}
      </div>
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default PageWrapper;
