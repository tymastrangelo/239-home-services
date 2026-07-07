import React from 'react';
import { motion } from 'framer-motion';
import {
  LuHouse, LuKeyRound, LuWrench, LuUmbrella,
  LuCarFront, LuMailbox, LuConciergeBell, LuSparkles,
} from 'react-icons/lu';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { fadeUpDelayed } from '../lib/motion';
import servicesHeroImage from '../assets/canal-homes.jpg';

const serviceGroups = [
  {
    heading: 'The core: watching your home',
    services: [
      {
        icon: LuHouse,
        title: 'Comprehensive Home Watch',
        description: 'Scheduled, in-person visits to your property. We conduct a thorough interior and exterior inspection, checking for signs of water damage, pests, forced entry, and system malfunctions. You receive a detailed report with photos after every visit.',
      },
      {
        icon: LuKeyRound,
        title: 'Keyholder & Access Services',
        description: 'As your registered keyholder, we provide secure and reliable access for vendors, contractors, deliveries, or guests. No hidden keys and no unsecured access. Necessary work and arrivals are managed professionally.',
      },
      {
        icon: LuWrench,
        title: 'Vendor Management',
        description: 'Leverage our local network of trusted professionals. We coordinate and oversee pool maintenance, landscapers, pest control, and cleaners, making sure quality work is completed on time and to your standards.',
      },
      {
        icon: LuUmbrella,
        title: 'Storm & Emergency Preparation',
        description: 'As part of our closing services, we pre-prep your home in the off-season for potential storms. Post-storm, we assess for damage and coordinate any necessary emergency repairs, protecting your investment when it matters most.',
      },
    ],
  },
  {
    heading: 'Beyond the watch: concierge & seasonal',
    services: [
      {
        icon: LuCarFront,
        title: 'Vehicle Care & Starting',
        description: 'Prevent dead batteries and flat-spotted tires. We start and run your vehicles and make sure they are ready for your return. We can also arrange professional detailing or servicing.',
      },
      {
        icon: LuMailbox,
        title: 'Package & Mail Management',
        description: "Don't let mail pile up. We collect your mail, packages, and newspapers, bringing them inside to keep your home looking occupied and secure. Important items can be forwarded on request.",
      },
      {
        icon: LuConciergeBell,
        title: 'Concierge Services',
        description: 'Seasonal opening and closing, boat relocation, pick-up and drop-off at local FBOs, assistance shipping vehicles between properties, and nearly any task that keeps your property cared for.',
      },
      {
        icon: LuSparkles,
        title: 'Preparing for Your Return',
        description: 'We make it like you never left: property cleaning, pressure washing, vehicle prep and detailing, placing outdoor furniture, removing storm shutters, grocery shopping, and more.',
      },
    ],
  },
];

const ServicesPage = () => (
  <div className="bg-white">
    <PageHero
      image={servicesHeroImage}
      eyebrow="Services"
      title="Everything an empty home needs, handled"
    >
      From scheduled inspections to storm prep to stocking the fridge before you land. One local team, one point of contact.
    </PageHero>

    {serviceGroups.map((group, groupIndex) => (
      <section key={group.heading} className={`py-16 lg:py-24 ${groupIndex % 2 ? 'bg-sand' : 'bg-white'}`}>
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <motion.h2 {...fadeUpDelayed(0)} className="font-display text-2xl md:text-3xl mb-12">
            {group.heading}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-x-14 gap-y-12">
            {group.services.map((service, i) => (
              <motion.div key={service.title} {...fadeUpDelayed(i * 0.08)} className="flex items-start gap-5">
                <span className="flex items-center justify-center w-12 h-12 rounded-sm bg-ink text-brass shrink-0">
                  <service.icon className="w-6 h-6" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-xl mb-2.5">{service.title}</h3>
                  <p className="text-ink/65 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    ))}

    <CtaBand
      title="Don't see it on the list? Ask."
      body="If it keeps your property cared for, it's probably something we do. Tell us what you need and we'll build it into your plan."
    />
  </div>
);

export default ServicesPage;
