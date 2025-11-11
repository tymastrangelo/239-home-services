import React from "react";
import { motion } from "framer-motion";

// You can use the same hero image or a different one for this page
import aboutHeroImage from "../assets/marco-hero.jpg"; 
// Use the bundled logo image for the about page content
import aboutContentImage from "../assets/logo/logo-1920x1080.png";

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative py-20 md:py-32 bg-cover bg-center text-white" style={{ backgroundImage: `url(${aboutHeroImage})` }}>
        <div className="absolute inset-0 bg-brand-primary bg-opacity-70"></div>
        <div className="relative mx-auto max-w-screen-xl px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold font-serif">
            About Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Your trusted partner in home watch and property management. 239 Home Services was founded on the principles of trust, reliability and piece of mind. Rooted in the heart of Marco Island, our company is locally owned and operated by full-time residents who truly understand Florida living.
          </motion.p>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-screen-xl px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.7 }} className="rounded-lg overflow-hidden shadow-xl">
            <img src={aboutContentImage} alt="A well-maintained home in Naples, Florida" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary font-serif mb-6">Your trusted partner in home watch and property management</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">239 home services was founded on the principles of trust, reliability and piece of mind. Rooted in the heart of Marco Island, our company is locally owned and operated by full-time residents who truly understand Florida living. With family ties to the community dating back to the 1970s, we bring a deep appreciation for Florida’s unique lifestyle and the people who call it home.</p>
            <p className="text-gray-600 mb-4 leading-relaxed">Our team combines decades of experience across real estate, property management, merchant marines, and the automotive industry. We offer a diverse skill set that ensures every detail of your property is handled with care, precision, and reliability. Whether it’s ensuring your property is maintained, keeping your cars running, checking your boats or providing trusted local guidance, we pride ourselves on delivering the personalized service only a true local can provide.</p>
            <p className="text-gray-600 leading-relaxed">At the core of our business is a commitment to integrity, communication, and community. We treat every property as if it were our own — because here, you’re not just a client, you’re a neighbor.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;