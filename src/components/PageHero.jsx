import React from 'react';
import { motion } from 'framer-motion';

// Shared header for inner pages: photo, ink scrim, mono eyebrow, display title
const PageHero = ({ image, eyebrow, title, children }) => (
  <section className="relative bg-ink text-white overflow-hidden">
    <img src={image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/95 via-ink-deep/80 to-ink-deep/50"></div>
    <div className="relative mx-auto max-w-content px-6 lg:px-8 py-24 md:py-32">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="eyebrow text-brass mb-4"
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-4xl md:text-5xl lg:text-6xl max-w-3xl"
      >
        {title}
      </motion.h1>
      {children && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-mist max-w-2xl leading-relaxed"
        >
          {children}
        </motion.div>
      )}
    </div>
  </section>
);

export default PageHero;
