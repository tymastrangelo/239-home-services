import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { fadeUp, fadeUpDelayed } from "../lib/motion";
import { CONTACT, tel } from "../config/contact";
import {
  LuCheck, LuCamera, LuHouse, LuKeyRound, LuWrench, LuUmbrella,
  LuThermometer, LuDroplets, LuZap, LuShieldCheck, LuBug, LuWind,
  LuWaves, LuCarFront, LuMailbox, LuArrowRight, LuPhone, LuMapPin, LuMail,
} from "react-icons/lu";

import heroImage from "../assets/marco-hero.jpg";
import canalImage from "../assets/canal-homes.jpg";
import duskBeachImage from "../assets/dusk-beach.jpg";
import duskHomeImage from "../assets/dusk-home.jpg";
import aboutImage from "../assets/about-us-image.jpg";

/* ---------------------------------- Hero --------------------------------- */

const reportRows = [
  { label: "Entry & security", value: "Secure" },
  { label: "Climate & humidity", value: "74° / 52%" },
  { label: "Water & plumbing", value: "No leaks" },
  { label: "Lanai & pool deck", value: "Clear" },
  { label: "Mail & packages", value: "Collected" },
];

const reportList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.45, delayChildren: 1.0 } },
};
const reportItem = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const VisitReportCard = () => {
  // the visitor's own local time makes the sample report feel live
  const time = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

  return (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0"
  >
    <div className="bg-white text-ink rounded-sm shadow-2xl ring-1 ring-ink/10 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-ink/10">
        <span className="font-mono text-xs tracking-[0.2em] font-medium">VISIT REPORT</span>
        <span className="font-mono text-xs text-ink/50">MARCO ISLAND · {time}</span>
      </div>
      <motion.ul variants={reportList} initial="hidden" animate="show" className="px-5 py-3">
        {reportRows.map((row) => (
          <motion.li key={row.label} variants={reportItem} className="flex items-center gap-3 py-2.5 border-b border-ink/5 last:border-0">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-palm/10 text-palm shrink-0">
              <LuCheck className="w-3.5 h-3.5" strokeWidth={3} />
            </span>
            <span className="flex-1 text-sm font-semibold">{row.label}</span>
            <span className="font-mono text-xs text-ink/50">{row.value}</span>
          </motion.li>
        ))}
        <motion.li variants={reportItem} className="my-3 rounded-sm bg-palm/10 px-4 py-3 flex items-center justify-between">
          <span className="font-mono text-xs tracking-[0.15em] font-medium text-palm">STATUS: ALL CLEAR</span>
          <span className="font-mono text-xs text-ink/50 flex items-center gap-1.5"><LuCamera className="w-3.5 h-3.5" /> 12 photos</span>
        </motion.li>
      </motion.ul>
    </div>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4, duration: 0.8 }}
      className="mt-4 font-mono text-xs tracking-wider text-white/70 text-center lg:text-right"
    >
      The report in your inbox after every visit.
    </motion.p>
  </motion.div>
  );
};

const heroSlides = [heroImage, canalImage, duskBeachImage];

const HeroSection = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
  <section className="relative bg-ink text-white overflow-hidden">
    {heroSlides.map((img, i) => (
      <img
        key={img}
        src={img}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ease-in-out ${i === slide ? 'opacity-100' : 'opacity-0'}`}
      />
    ))}
    <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/95 via-ink-deep/75 to-ink-deep/30"></div>
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-deep/80 to-transparent"></div>

    {/* header stack is 72px on mobile, 104px with the md+ utility bar; hero fills the rest of the viewport exactly */}
    <div className="relative mx-auto max-w-content px-6 lg:px-8 py-14 min-h-[calc(100svh-72px)] md:min-h-[calc(100svh-104px)] flex flex-col justify-center">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="eyebrow text-brass mb-5"
          >
            Marco Island · South Naples · Home Watch & Concierge
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-[3.6rem] leading-[1.08] mb-6"
          >
            The season ends.<br />Our watch begins.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white/85 max-w-xl leading-relaxed mb-9"
          >
            Professional home watch, keyholding, and concierge care for seasonal residences in Southwest Florida, with a timestamped photo report after every visit.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button to="/#contact" size="lg" variant="accent">
              Request a consultation <LuArrowRight />
            </Button>
            <Button to="/services" size="lg" variant="ghost">Explore services</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 pt-6 border-t border-white/20 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs tracking-[0.15em] text-white/70 uppercase"
          >
            <span>Locally owned</span>
            <span>Fully insured</span>
            <span>Full-time island residents</span>
          </motion.div>
        </div>
        <VisitReportCard />
      </div>
    </div>
  </section>
  );
};

/* ---------------------------- While you're away --------------------------- */

const facts = [
  { label: "1970s", detail: "Family ties to Marco Island" },
  { label: "Full-time", detail: "Residents, on-island year round" },
  { label: "Insured", detail: "Fully insured & accountable" },
];

const HomeAboutSection = () => (
  <section id="about" className="py-20 lg:py-28 bg-white">
    <div className="mx-auto max-w-content px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div {...fadeUp} className="relative">
          <div className="absolute -bottom-4 -left-4 w-full h-full border border-brass/50 rounded-sm" aria-hidden="true"></div>
          <img
            src={aboutImage}
            alt="A walkthrough of a Southwest Florida home"
            className="relative w-full h-full object-cover rounded-sm shadow-xl aspect-[4/3]"
          />
        </motion.div>
        <motion.div {...fadeUpDelayed(0.15)}>
          <p className="eyebrow text-brass mb-4">While you're away</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6">
            You head north. Your home stays looked after.
          </h2>
          <p className="text-ink/70 text-lg leading-relaxed mb-5">
            As full-time residents of Southwest Florida, we know what the off-season does to an empty home: the humidity, the storms, and the quiet months when small problems become expensive ones.
          </p>
          <p className="text-ink/70 text-lg leading-relaxed mb-10">
            You worked hard for your place in paradise. Enjoy your time here and away; we take care of the big stuff and the small stuff.
          </p>
          <dl className="grid grid-cols-3 gap-6 mb-10">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="font-mono text-sm tracking-wider text-brass uppercase mb-1">{f.label}</dt>
                <dd className="text-sm text-ink/60 leading-snug">{f.detail}</dd>
              </div>
            ))}
          </dl>
          <Button to="/about" size="lg" variant="outline">
            Learn more about us <LuArrowRight />
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

/* --------------------------- What every visit covers ---------------------- */

const checkpoints = [
  { icon: LuShieldCheck, label: "Entry points & security" },
  { icon: LuThermometer, label: "HVAC & humidity levels" },
  { icon: LuDroplets, label: "Plumbing & water heater" },
  { icon: LuZap, label: "Electrical & breakers" },
  { icon: LuBug, label: "Pest activity" },
  { icon: LuWind, label: "Storm readiness" },
  { icon: LuWaves, label: "Pool, lanai & exterior" },
  { icon: LuCarFront, label: "Vehicles & garage" },
  { icon: LuMailbox, label: "Mail & packages" },
];

const VisitCoverageSection = () => (
  <section className="py-20 lg:py-28 bg-ink text-white">
    <div className="mx-auto max-w-content px-6 lg:px-8">
      <motion.div {...fadeUp} className="max-w-2xl mb-14">
        <p className="eyebrow text-brass mb-4">The walkthrough</p>
        <h2 className="font-display text-3xl md:text-4xl mb-5">What every visit covers</h2>
        <p className="text-mist text-lg leading-relaxed">
          A consistent interior and exterior inspection on every visit. Checked, logged, and photographed, so nothing gets missed and nothing gets vague.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
        {checkpoints.map((point, i) => (
          <motion.div
            key={point.label}
            {...fadeUpDelayed(Math.min(i * 0.05, 0.3))}
            className="flex items-center gap-4 bg-ink px-6 py-5"
          >
            <point.icon className="w-5 h-5 text-brass shrink-0" />
            <span className="font-semibold">{point.label}</span>
          </motion.div>
        ))}
      </div>
      <motion.p {...fadeUp} className="mt-8 font-mono text-sm tracking-wider text-mist flex items-center gap-3">
        <LuCamera className="text-brass" />
        Every visit ends with a timestamped photo report in your inbox.
      </motion.p>
    </div>
  </section>
);

/* -------------------------------- Services -------------------------------- */

const topServices = [
  {
    icon: LuHouse,
    title: "Home Watch",
    description: "Our core service: scheduled interior and exterior inspections while you're away.",
  },
  {
    icon: LuKeyRound,
    title: "Keyholder & Access",
    description: "Secure, registered keyholding for vendors, deliveries, guests, and emergencies.",
  },
  {
    icon: LuWrench,
    title: "Vendor Management",
    description: "We coordinate and oversee pool care, landscaping, pest control, and repairs.",
  },
  {
    icon: LuUmbrella,
    title: "Storm & Season Prep",
    description: "Pre-storm preparation, post-storm assessment, and seasonal opening & closing.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 lg:py-28 bg-sand">
    <div className="mx-auto max-w-content px-6 lg:px-8">
      <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-6 mb-14">
        <div className="max-w-2xl">
          <p className="eyebrow text-brass mb-4">Beyond the watch</p>
          <h2 className="font-display text-3xl md:text-4xl">
            One local team for everything your home needs
          </h2>
        </div>
        <Link to="/services" className="group font-semibold text-ink hover:text-brass transition-colors flex items-center gap-2">
          All services <LuArrowRight className="transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topServices.map((service, i) => (
          <motion.div
            key={service.title}
            {...fadeUpDelayed(i * 0.08)}
            className="bg-white border border-ink/10 rounded-sm p-7 hover:border-brass/60 hover:shadow-lg transition-all duration-300"
          >
            <service.icon className="w-7 h-7 text-brass mb-5" strokeWidth={1.75} />
            <h3 className="font-display text-xl mb-3">{service.title}</h3>
            <p className="text-ink/65 leading-relaxed text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------- How it works ------------------------------ */

const steps = [
  {
    number: "01",
    title: "Walk-through & plan",
    description: "We meet at your property for a free consultation and build a custom checklist and visit schedule around your home.",
  },
  {
    number: "02",
    title: "Scheduled visits",
    description: "Weekly or twice monthly, on your schedule, we inspect inside and out, exactly to the checklist, every time.",
  },
  {
    number: "03",
    title: "Report & follow-up",
    description: "A photo report lands in your inbox after every visit. If something needs attention, we coordinate trusted local vendors and see it through.",
  },
];

const HowItWorksSection = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="mx-auto max-w-content px-6 lg:px-8">
      <motion.div {...fadeUp} className="max-w-2xl mb-14">
        <p className="eyebrow text-brass mb-4">How it works</p>
        <h2 className="font-display text-3xl md:text-4xl">Three steps to a worry-free season</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
        {steps.map((step, i) => (
          <motion.div key={step.number} {...fadeUpDelayed(i * 0.12)}>
            <p className="font-mono text-sm tracking-[0.2em] text-brass mb-4">{step.number}</p>
            <div className="border-t border-ink/15 pt-5">
              <h3 className="font-display text-2xl mb-3">{step.title}</h3>
              <p className="text-ink/65 leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* --------------------------------- Pricing -------------------------------- */

const popularPlan = {
  name: "Premium Watch",
  price: "$50",
  frequency: "per visit · two visits a month",
  features: [
    "Twice-monthly interior & exterior checks",
    "Detailed photo report after every visit",
    "Full systems check (HVAC, plumbing)",
    "Vendor management access",
    "Vehicle starting & priority service",
  ],
};

const PricingSection = () => (
  <section id="pricing" className="py-20 lg:py-28 bg-sand">
    <div className="mx-auto max-w-content px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div {...fadeUp}>
          <p className="eyebrow text-brass mb-4">Plans</p>
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Straightforward pricing, tailored to your home
          </h2>
          <p className="text-ink/70 text-lg leading-relaxed mb-8">
            Every home is different. We start with simple per-visit plans and shape a package around your property, your schedule, and how long you're away.
          </p>
          <Button to="/pricing" size="lg" variant="outline">
            View all plans <LuArrowRight />
          </Button>
        </motion.div>
        <motion.div {...fadeUpDelayed(0.15)} className="relative bg-ink text-white rounded-sm p-8 lg:p-10 shadow-xl">
          <span className="absolute top-0 right-8 -translate-y-1/2 bg-brass text-ink-deep font-mono text-xs tracking-[0.15em] font-medium px-4 py-1.5 rounded-sm uppercase">
            Most popular
          </span>
          <h3 className="font-display text-2xl mb-2">{popularPlan.name}</h3>
          <p className="mb-7">
            <span className="font-display text-5xl">{popularPlan.price}</span>
            <span className="text-mist ml-2 font-mono text-sm">starting · {popularPlan.frequency}</span>
            <span className="block mt-2 text-sm font-semibold text-brass">about $100 a month</span>
          </p>
          <ul className="space-y-3.5">
            {popularPlan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-white/90">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-palm/30 text-white shrink-0 mt-0.5">
                  <LuCheck className="w-3 h-3" strokeWidth={3} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ---------------------------------- Team ---------------------------------- */

const TeamSection = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="mx-auto max-w-content px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div {...fadeUp} className="relative order-2 lg:order-1">
          <div className="absolute -bottom-4 -left-4 w-full h-full border border-brass/50 rounded-sm" aria-hidden="true"></div>
          <img
            src={duskHomeImage}
            alt="A Southwest Florida home at dusk"
            className="relative w-full h-full object-cover rounded-sm shadow-xl aspect-[4/3]"
          />
        </motion.div>
        <motion.div {...fadeUpDelayed(0.15)} className="order-1 lg:order-2">
          <p className="eyebrow text-brass mb-4">Who's watching</p>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Neighbors, not a franchise</h2>
          <p className="text-ink/70 text-lg leading-relaxed mb-5">
            239 Home Services is locally owned and operated by full-time Marco Island residents, with family ties to the community dating back to the 1970s.
          </p>
          <p className="text-ink/70 text-lg leading-relaxed mb-8">
            Our backgrounds span real estate, property management, the merchant marines, and the automotive industry, so whether it's your house, your cars, or your boat, it's watched by someone who knows what they're looking at.
          </p>
          <Button to="/about" size="lg" variant="outline">
            Our story <LuArrowRight />
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

/* --------------------------------- Contact -------------------------------- */

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {
        setSubmitting(true);
        setSubmitError('');
        const payload = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          submittedAt: new Date().toISOString(),
          source: window.location.href
        };

        const res = await fetch('https://n8n.tymastrangelo.com/webhook/45b84bea-6bac-4c03-8894-551f7ce7a7c3', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!res.ok) {
          const text = await res.text().catch(() => '');
          throw new Error(`Request failed (${res.status}) ${text}`);
        }

        setSubmitSuccess('Thanks, your message was sent. We\'ll get back to you within 24 hours.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } catch (err) {
        console.error('Contact form submit error', err);
        setSubmitError('Your message didn\'t go through. Please try again, or call us directly.');
      } finally {
        setSubmitting(false);
      }
    })();
  };

  const inputStyles = "w-full px-4 py-3 bg-white border border-ink/20 rounded-sm focus:border-brass transition-colors duration-200 outline-none placeholder:text-ink/35";
  const labelStyles = "block font-mono text-xs tracking-[0.15em] uppercase text-ink/60 mb-2";

  return (
    <section id="contact" className="py-20 lg:py-28 bg-ink text-white">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-14 items-start">
          <motion.div {...fadeUp} className="lg:col-span-2">
            <p className="eyebrow text-brass mb-4">Contact</p>
            <h2 className="font-display text-3xl md:text-4xl mb-6">Start with a conversation</h2>
            <p className="text-mist text-lg leading-relaxed mb-10">
              Tell us about your property and your season, and we'll reply within 24 hours. Prefer the phone? Call us directly and you'll get one of us, not a call center.
            </p>
            <ul className="space-y-5">
              {CONTACT.phones.map(p => (
                <li key={p.raw} className="flex items-center gap-4">
                  <LuPhone className="text-brass text-xl shrink-0" />
                  <a href={tel(p.raw)} aria-label={`Call ${p.display}`} className="font-mono hover:text-brass transition-colors">{p.display}</a>
                </li>
              ))}
              <li className="flex items-center gap-4">
                <LuMail className="text-brass text-xl shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-brass transition-colors">{CONTACT.email}</a>
              </li>
              <li className="flex items-center gap-4">
                <LuMapPin className="text-brass text-xl shrink-0" />
                <span className="text-white/85">Marco Island & South Naples, FL</span>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeUpDelayed(0.15)} className="lg:col-span-3 bg-sand text-ink p-8 lg:p-10 rounded-sm shadow-2xl">
            {submitSuccess && (
              <div className="rounded-sm bg-palm/10 border border-palm/30 p-4 mb-6">
                <p className="text-palm font-semibold">{submitSuccess}</p>
              </div>
            )}
            {submitError && (
              <div className="rounded-sm bg-red-50 border border-red-200 p-4 mb-6">
                <p className="text-red-800">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelStyles}>Name</label>
                  <input type="text" name="name" id="name" placeholder="Your name" value={formData.name} onChange={handleChange} required className={inputStyles} />
                </div>
                <div>
                  <label htmlFor="email" className={labelStyles}>Email</label>
                  <input type="email" name="email" id="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required className={inputStyles} />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className={labelStyles}>Phone <span className="normal-case tracking-normal text-ink/40">(optional)</span></label>
                <input type="tel" name="phone" id="phone" placeholder="(239) 555-0123" value={formData.phone} onChange={handleChange} className={inputStyles} />
              </div>
              <div>
                <label htmlFor="message" className={labelStyles}>Message</label>
                <textarea name="message" id="message" placeholder="Tell us about your property and when you're away" value={formData.message} onChange={handleChange} required rows="5" className={inputStyles}></textarea>
              </div>
              <Button type="submit" variant="accent" size="lg" className="w-full" disabled={submitting}>
                {submitting ? 'Sending…' : 'Send message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ---------------------------------- Page ---------------------------------- */

const HomePage = () => (
  <div>
    <HeroSection />
    <HomeAboutSection />
    <VisitCoverageSection />
    <ServicesSection />
    <HowItWorksSection />
    <PricingSection />
    <TeamSection />
    <ContactSection />
  </div>
);

export default HomePage;
