import React from 'react';
import { motion } from 'framer-motion';
import { LuCheck } from 'react-icons/lu';
import Button from '../components/ui/Button';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { fadeUp, fadeUpDelayed } from '../lib/motion';
import pricingHeroImage from '../assets/dusk-beach.jpg';

const pricingPlans = [
  {
    name: 'Basic Watch',
    price: '$75',
    priceNote: 'per visit · one visit a month',
    monthly: 'about $75 a month',
    description: 'Monthly peace of mind for the off-season.',
    features: [
      'Monthly interior & exterior checks',
      'Photo report after every visit',
      'Basic systems check',
    ],
    popular: false,
  },
  {
    name: 'Premium Watch',
    price: '$50',
    priceNote: 'per visit · two visits a month',
    monthly: 'about $100 a month · best per-visit rate',
    description: 'Our most popular plan: comprehensive, twice-monthly oversight.',
    features: [
      'Twice-monthly interior & exterior checks',
      'Detailed photo report after every visit',
      'Full systems check',
      'Vendor management access',
      'Vehicle starting',
      'Priority service',
    ],
    popular: true,
  },
  {
    name: 'Custom Watch',
    price: "Let's talk",
    priceNote: 'quoted at your free walk-through',
    monthly: null,
    description: 'Tailored plans for extended absences and unique properties.',
    features: [
      'Visit cadence built around your season',
      'Any combination of our services',
      'Concierge & seasonal add-ons',
    ],
    popular: false,
  },
];

const PricingCard = ({ plan, index }) => (
  <motion.div
    {...fadeUpDelayed(index * 0.1)}
    className={`relative rounded-sm p-8 flex flex-col h-full ${
      plan.popular
        ? 'bg-ink text-white shadow-xl lg:-my-4 lg:py-12'
        : 'bg-white text-ink border border-ink/10'
    }`}
  >
    {plan.popular && (
      <span className="absolute top-0 right-8 -translate-y-1/2 bg-brass text-ink-deep font-mono text-xs tracking-[0.15em] font-medium px-4 py-1.5 rounded-sm uppercase">
        Most popular
      </span>
    )}
    <h3 className="font-display text-2xl mb-2">{plan.name}</h3>
    <p className={`mb-6 ${plan.popular ? 'text-mist' : 'text-ink/60'}`}>{plan.description}</p>
    <p className="mb-8">
      <span className="font-display text-4xl md:text-5xl">{plan.price}</span>
      <span className={`block mt-2 font-mono text-xs tracking-wider ${plan.popular ? 'text-mist' : 'text-ink/50'}`}>{plan.priceNote}</span>
      {plan.monthly && (
        <span className={`block mt-1.5 text-sm font-semibold ${plan.popular ? 'text-brass' : 'text-ink/70'}`}>{plan.monthly}</span>
      )}
    </p>
    <ul className={`space-y-3.5 mb-10 flex-grow ${plan.popular ? 'text-white/90' : 'text-ink/75'}`}>
      {plan.features.map((feature) => (
        <li key={feature} className="flex items-start gap-3">
          <span className={`flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5 ${plan.popular ? 'bg-palm/30 text-white' : 'bg-palm/10 text-palm'}`}>
            <LuCheck className="w-3 h-3" strokeWidth={3} />
          </span>
          {feature}
        </li>
      ))}
    </ul>
    <Button
      to="/#contact"
      variant={plan.popular ? 'accent' : 'outline'}
      className="w-full"
    >
      {plan.monthly ? 'Get started' : 'Request a quote'}
    </Button>
  </motion.div>
);

const PricingPage = () => (
  <div className="bg-white">
    <PageHero
      image={pricingHeroImage}
      eyebrow="Pricing"
      title="Simple per-visit pricing, no surprises"
    >
      Start with a plan, then shape it to your property and your season. Every plan includes a photo report after every visit.
    </PageHero>

    <section className="py-20 lg:py-28 bg-sand">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => <PricingCard key={plan.name} plan={plan} index={index} />)}
        </div>
        <motion.p {...fadeUp} className="mt-12 text-center text-ink/60 max-w-2xl mx-auto">
          The more often we visit, the lower your per-visit rate. That's why Premium costs less per visit than Basic. Rates shown are starting prices, and we'll confirm exact pricing for your property at the free walk-through, before you commit to anything.
        </motion.p>
      </div>
    </section>

    <CtaBand
      title="Not sure which plan fits?"
      body="Tell us about your home and how long you're away, and we'll recommend the right cadence and quote it upfront."
    />
  </div>
);

export default PricingPage;
