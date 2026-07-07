// Shared framer-motion presets: one quiet reveal used everywhere
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const fadeUpDelayed = (delay = 0) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay },
});
