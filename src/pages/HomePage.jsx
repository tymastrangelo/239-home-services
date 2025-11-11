import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { FaArrowRight, FaHome, FaKey, FaClipboardList, FaCheckCircle, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { CONTACT, tel } from "../config/contact";

// Placeholder for a beautiful local image
import heroImage from "../assets/marco-hero.jpg";
// The logo file lives at src/assets/logo/logo-1920x1080.png
import aboutImage from "../assets/logo/logo-1920x1080.png";

const HeroSection = () => {
  return (
    <section
      className="relative text-white bg-cover bg-center flex items-center min-h-screen"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-brand-primary bg-opacity-50"></div>

      <div
        className="relative w-full mx-auto max-w-screen-xl px-6 lg:px-8 flex flex-col items-center text-center -mt-16"
        // A negative top margin pulls the content up to visually center it in the viewport, accounting for the header's height.
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif leading-tight mb-4 max-w-4xl"
        >
          Trusted home watch, property management & concierge services for peace of mind
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 max-w-3xl"
        >
          Serving Marco Island and South Naples, we are your eyes and ears when you are away, ensuring your piece of paradise is secure and cared for.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            to="/#contact"
            size="lg"
            variant="accent"
            className="flex items-center group"
          >
            Request a Consultation
            <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const HomeAboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img src={aboutImage} alt="A well-maintained home in Naples, Florida" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary font-serif mb-6">
              <span className="block font-extrabold">Your investment is our priority.</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              As full time residents of Southwest Florida, we understand the unique needs of property owners in Marco Island and South Naples. You worked hard and put in the time to have a place here. It’s time for you to relax and enjoy your time both here and away. We take care of the big stuff and the small stuff with an array of available services.
            </p>
            <Button to="/about" size="lg" variant="primary" className="flex items-center group">
              Learn More About Us
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  // Show a summary of top services on the homepage
  const topServices = [
    {
      icon: <FaHome className="text-3xl text-brand-accent" />,
      title: "Comprehensive Home Watch",
          description: "Scheduled interior and exterior checks with detailed reports after every visit."
    },
    {
      icon: <FaKey className="text-3xl text-brand-accent" />,
      title: "Keyholder Services",
      description: "Secure and reliable keyholding for vendor access, emergencies, or guest arrivals."
    },
    {
      icon: <FaClipboardList className="text-3xl text-brand-accent" />,
      title: "Vendor Management",
      description: "We coordinate and oversee service providers like pool maintenance, landscapers, and pest control."
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8 text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-brand-primary font-serif mb-4">
          Our Services
        </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
              We offer a comprehensive suite of services designed to give you complete piece of mind.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {topServices.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-3 transition-all duration-300 text-left">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.7 }} className="flex justify-center">
          <Button to="/services" size="lg" variant="primary" className="flex items-center group">
            View All Services
            <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const popularPlan = {
    name: 'Premium Watch',
    price: 'Starting at $50',
    frequency: 'per visit',
    description: 'Our most popular plan for comprehensive weekly oversight.',
    features: [
      'Weekly interior/exterior checks',
      'Detailed digital report with photos',
      'Full systems check (HVAC, plumbing)',
      'Vendor management access',
    ],
    popular: true,
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-brand-primary font-serif mb-4">
            Find Your Perfect Plan
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-gray-600 text-lg max-w-3xl mx-auto">
            We offer straightforward pricing to fit your needs, ensuring your home is always protected.
          </motion.p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.7 }} className="lg:col-span-1 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">Transparent & Flexible</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every home is unique. We start with our standard plans and can create a custom package tailored to your specific property and requirements. Contact us for a personalized consultation.
            </p>
            <Button to="/pricing" size="lg" variant="primary" className="flex items-center group mx-auto lg:mx-0">
              View All Pricing Plans
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.7 }} className="lg:col-span-2 relative border-2 border-brand-accent bg-white rounded-xl p-8 shadow-2xl">
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
            <h3 className="text-2xl font-bold text-brand-primary mb-2">{popularPlan.name}</h3>
            <p className="text-gray-500 mb-6">{popularPlan.description}</p>
            <div className="text-4xl font-bold text-gray-800 mb-6">{popularPlan.price} <span className="text-lg font-normal text-gray-500">{popularPlan.frequency}</span></div>
            <ul className="space-y-4 text-gray-600 mb-8 text-left max-w-md mx-auto">
              {popularPlan.features.map((feature, i) => ( <li key={i} className="flex items-start"><FaCheckCircle className="text-brand-accent mr-3 mt-1 flex-shrink-0" /><span>{feature}</span></li> ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to n8n webhook
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

        setSubmitSuccess('Thanks — your message was sent. We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } catch (err) {
        console.error('Contact form submit error', err);
        setSubmitError('There was a problem sending your message. Please try again later.');
      } finally {
        setSubmitting(false);
      }
    })();
  };

  const inputStyles = "w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-colors duration-300 outline-none";

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-brand-primary font-serif mb-4">
            Get In Touch
          </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-gray-600 text-lg max-w-3xl mx-auto">
            Ready to secure your piece of mind? Contact us today for a free, no-obligation consultation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left Column: Contact Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.7 }} className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Fill out the form and our team will get back to you within 24 hours. For immediate assistance, please call us.
            </p>
            <ul className="space-y-6 text-gray-700">
              {CONTACT.phones.map(p => (
                <li key={p.raw} className="flex items-center gap-4">
                  <FaPhone className="text-brand-accent text-xl" />
                  <a href={tel(p.raw)} aria-label={`Call ${p.display}`} className="hover:text-brand-accent transition-colors">{p.display}</a>
                </li>
              ))}
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-brand-accent text-xl" />
                <a href="mailto:info@239homeservices.com" className="hover:text-brand-accent transition-colors">info@239homeservices.com</a>
              </li>
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-brand-accent text-xl" />
                <span>Naples & Marco Island, FL</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.7 }} className="lg:col-span-3 bg-gray-50 p-8 rounded-xl shadow-lg">
            {submitSuccess && (
              <div className="rounded-md bg-green-50 p-4 mb-4">
                <p className="text-green-800">{submitSuccess}</p>
              </div>
            )}
            {submitError && (
              <div className="rounded-md bg-red-50 p-4 mb-4">
                <p className="text-red-800">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input type="text" name="name" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className={inputStyles} />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" name="email" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className={inputStyles} />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone (Optional)</label>
                <input type="tel" name="phone" id="phone" placeholder="Your Phone (Optional)" value={formData.phone} onChange={handleChange} className={inputStyles} />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea name="message" id="message" placeholder="How can we help?" value={formData.message} onChange={handleChange} required rows="5" className={inputStyles}></textarea>
              </div>
              <div>
                <Button type="submit" variant="accent" size="lg" className="w-full justify-center" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <HomeAboutSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;