import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaKey, FaClipboardList, FaExclamationTriangle, FaCar, FaBoxOpen } from "react-icons/fa";
import servicesHeroImage from "../assets/marco-hero.jpg"; // You can use a different image if available

const services = [
  {
    icon: <FaHome className="text-4xl text-brand-accent" />,
    title: "Comprehensive Home Watch",
    description: "Our core service involves scheduled, in-person visits to your property. We conduct a thorough interior and exterior inspection, checking for signs of water damage, pests, forced entry, and system malfunctions. You receive a detailed report with photos after every visit."
  },
  {
    icon: <FaKey className="text-4xl text-brand-accent" />,
    title: "Keyholder & Access Services",
    description: "As your registered keyholder, we provide secure and reliable access for vendors, contractors, deliveries, or guests. We eliminate the need to hide keys or grant unsecured access, ensuring your property remains safe while necessary work or arrivals are managed professionally."
  },
  {
    icon: <FaClipboardList className="text-4xl text-brand-accent" />,
    title: "Vendor Management",
    description: "Leverage our local network of trusted professionals. We can coordinate and oversee service providers for you, including pool maintenance, landscapers, pest control, and cleaners. We ensure quality work is completed on time and to your standards."
  },
  {
    icon: <FaExclamationTriangle className="text-4xl text-brand-accent" />,
    title: "Storm & Emergency Preparation",
    description: "Off season preparation: As part of our closing services option, we pre-prep your home in the off season for any potential storms. Post-storm, we provide assessments to check for damage and coordinate any necessary emergency repairs, protecting your investment when it matters most."
  },
  {
    icon: <FaCar className="text-4xl text-brand-accent" />,
    title: "Vehicle Care & Starting",
    description: "Prevent dead batteries and flat-spotted tires. Our service includes starting and running your vehicles and ensuring they are ready for your return. We can also arrange for professional detailing or servicing."
  },
  {
    icon: <FaBoxOpen className="text-4xl text-brand-accent" />,
    title: "Package & Mail Management",
    description: "Don't let mail pile up. We collect your mail, packages, and newspapers, bringing them inside to keep your home looking occupied and secure. We can also forward important items upon request."
  }
];

// Concierge and Return sections will be rendered below the main list in a separate block

const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative py-20 md:py-32 bg-cover bg-center text-white" style={{ backgroundImage: `url(${servicesHeroImage})` }}>
        <div className="absolute inset-0 bg-brand-primary bg-opacity-70"></div>
        <div className="relative mx-auto max-w-screen-xl px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold font-serif">
            Our Services
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            A complete suite of services to protect and maintain your home.
          </motion.p>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-screen-xl px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start gap-6 bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-3 transition-all duration-300">
              <div className="mt-1">{service.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-2">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-brand-primary mb-4">Concierge Services</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">Our expansive available concierge services include, but are not limited to: Seasonal opening and closing of your property, boat relocation, pick up and drop off service to local FBO airports, assistance with shipping vehicles between properties. Leave your place as is and we’ll close it up for you. There isn’t much we can’t or won’t do.</p>

          <h3 className="text-2xl font-bold text-brand-primary mb-4">Preparing for Your Return</h3>
          <p className="text-gray-600 leading-relaxed">We make it like you never left with our opening services. Everything from property cleaning, pressure washing, vehicle preparation and detailing, placing outdoor furniture, ensuring storm shutters are removed, grocery shopping and more!</p>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;