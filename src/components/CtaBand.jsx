import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { fadeUp } from '../lib/motion';

// Closing call-to-action band shared by inner pages
const CtaBand = ({
  title = 'Leave for the season with nothing to worry about.',
  body = 'Tell us about your property and we’ll put together a plan. The consultation is free.',
}) => (
  <section className="bg-ink text-white">
    <div className="mx-auto max-w-content px-6 lg:px-8 py-20 lg:py-24">
      <motion.div {...fadeUp} className="max-w-3xl">
        <p className="eyebrow text-brass mb-4">Get started</p>
        <h2 className="font-display text-3xl md:text-4xl mb-5">{title}</h2>
        <p className="text-mist text-lg leading-relaxed mb-8">{body}</p>
        <Button to="/#contact" variant="accent" size="lg">Request a consultation</Button>
      </motion.div>
    </div>
  </section>
);

export default CtaBand;
