import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import Button from '../components/ui/Button';
import pricingHeroImage from '../assets/marco-hero.jpg';

const pricingPlans = [
  {
    name: 'Basic Watch',
    price: 'Starting at $75 per visit',
    frequency: 'per visit',
  description: 'Ideal for regular monthly piece of mind',
    features: [
      'Monthly interior/exterior checks',
      'Report with photos',
      'Basic Systems Check',
    ],
    popular: false,
  },
  {
    name: 'Premium Watch',
    price: 'Starting at $50 per visit',
    frequency: 'per visit',
    description: 'Our most popular plan for comprehensive, twice monthly service. Featuring multi visit discount.',
    features: [
      'Twice monthly interior/exterior checks',
      'Detailed report with photos',
      'Full systems check',
      'Vendor management Access',
      'Vehicle Starting',
      'Priority Services',
    ],
    popular: true,
  },
  {
    name: 'Custom Watch',
    price: 'Custom Quote',
    frequency: 'tailored to your needs',
    description: 'Customized plans for extended absences',
    features: [
      'Custom quote tailored to your needs',
    ],
    popular: false,
  },
];

const PricingCard = ({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`relative border rounded-xl p-8 flex flex-col h-full ${plan.popular ? 'border-brand-accent bg-gray-50' : 'border-gray-200 bg-white'}`}
  >
    {plan.popular && (
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold text-brand-primary mb-2">{plan.name}</h3>
    <p className="text-gray-500 mb-6">{plan.description}</p>
    <div className="mb-6">
      <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
      <span className="text-gray-500 ml-1">{plan.frequency}</span>
    </div>
    <ul className="space-y-4 text-gray-600 mb-8 flex-grow">
      {plan.features.map((feature, i) => (
        <li key={i} className="flex items-start">
          <FaCheckCircle className="text-brand-accent mr-3 mt-1 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button to="/#contact" variant={plan.popular ? 'accent' : 'primary'} className="w-full justify-center">
      {plan.price === 'Custom Quote' ? 'Request a Quote' : 'Choose Plan'}
    </Button>
  </motion.div>
);

const PricingPage = () => {
  return (
    <div className="bg-white">
      <section className="relative py-20 md:py-32 bg-cover bg-center text-white" style={{ backgroundImage: `url(${pricingHeroImage})` }}>
        <div className="absolute inset-0 bg-brand-primary bg-opacity-70"></div>
        <div className="relative mx-auto max-w-screen-xl px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold font-serif">Transparent Pricing</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Find the perfect plan to protect your home and give you piece of mind.</motion.p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-6 lg:px-8 grid lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => <PricingCard key={index} plan={plan} index={index} />)}
        </div>
      </section>
    </div>
  );
};

export default PricingPage;