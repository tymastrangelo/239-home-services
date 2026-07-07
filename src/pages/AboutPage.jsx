import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import { fadeUp, fadeUpDelayed } from "../lib/motion";

import aboutHeroImage from "../assets/naples-hero.jpg";
import aboutContentImage from "../assets/about-us-image.jpg";

const values = [
  {
    title: "Integrity",
    description: "We treat every property as if it were our own. Here, you're not just a client, you're a neighbor.",
  },
  {
    title: "Communication",
    description: "A photo report after every visit, a reply within 24 hours, and a direct line to the people actually watching your home.",
  },
  {
    title: "Community",
    description: "Locally owned and operated, with family ties to Marco Island dating back to the 1970s.",
  },
];

const AboutPage = () => (
  <div className="bg-white">
    <PageHero
      image={aboutHeroImage}
      eyebrow="About us"
      title="Rooted in the heart of Marco Island"
    >
      239 Home Services was founded on trust, reliability, and peace of mind. Locally owned and operated by full-time residents who truly understand Florida living.
    </PageHero>

    {/* Story */}
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div {...fadeUp} className="relative">
          <div className="absolute -bottom-4 -left-4 w-full h-full border border-brass/50 rounded-sm" aria-hidden="true"></div>
          <img
            src={aboutContentImage}
            alt="Walking a client through a Southwest Florida home"
            className="relative w-full h-full object-cover rounded-sm shadow-xl aspect-[4/3]"
          />
        </motion.div>
        <motion.div {...fadeUpDelayed(0.15)}>
          <p className="eyebrow text-brass mb-4">Our story</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6">
            The personalized service only a true local can provide
          </h2>
          <p className="text-ink/70 leading-relaxed mb-4">
            With family ties to the community dating back to the 1970s, we bring a deep appreciation for Florida's unique lifestyle and the people who call it home.
          </p>
          <p className="text-ink/70 leading-relaxed mb-4">
            Our team combines decades of experience across real estate, property management, the merchant marines, and the automotive industry. That diverse skill set means every detail of your property is handled with care, precision, and reliability, whether it's maintaining the house, keeping your cars running, checking your boats, or simply offering trusted local guidance.
          </p>
          <p className="text-ink/70 leading-relaxed">
            At the core of our business is a commitment to integrity, communication, and community. And when we say locally owned and operated, we mean it literally: we walk your property, write your reports, and answer your calls ourselves.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 lg:py-28 bg-sand">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.p {...fadeUp} className="eyebrow text-brass mb-12">What we stand on</motion.p>
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {values.map((value, i) => (
            <motion.div key={value.title} {...fadeUpDelayed(i * 0.1)} className="border-t border-ink/15 pt-6">
              <h3 className="font-display text-2xl mb-3">{value.title}</h3>
              <p className="text-ink/65 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CtaBand />
  </div>
);

export default AboutPage;
