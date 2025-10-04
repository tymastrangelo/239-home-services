import React from "react";
import { motion } from "framer-motion";

// You can use the same hero image or a different one for this page
import aboutHeroImage from "../assets/naples-hero.jpg"; 
import aboutContentImage from "../assets/about-us-image.jpg";

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
            Learn about our commitment to providing exceptional home watch services in Southwest Florida.
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
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary font-serif mb-6">Your Trusted Partner in Home Watch</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">239 Home Services was founded on the principles of trust, reliability, and peace of mind. As residents of Southwest Florida ourselves, we understand the unique needs of homeowners in Naples and Marco Island. Whether you're a seasonal resident or traveling for business, leaving your home unattended can be a source of stress.</p>
            <p className="text-gray-600 mb-4 leading-relaxed">Our mission is to be your eyes and ears, providing meticulous and professional home watch services. We are fully insured, and our team is dedicated to ensuring your property is safe, secure, and perfectly maintained in your absence. With 239 Home Services, you can relax, knowing your home is in capable hands.</p>
            <p className="text-gray-600 leading-relaxed">We pride ourselves on clear communication, detailed reporting, and a personalized approach for every client. We don't just watch your home; we care for it as if it were our own.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;