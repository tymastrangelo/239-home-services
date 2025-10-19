import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <footer className="bg-brand-primary text-white">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left items-start">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-2">239 Home Services</h3>
            <p className="text-blue-100 max-w-xs mx-auto md:mx-0">Your trusted partner in home watch and concierge services.</p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="text-blue-100 hover:text-brand-accent transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-center justify-center md:justify-start gap-2"><FaPhone /><a href="tel:+2392930683" className="hover:text-brand-accent">(239) 293-0683</a></li>
              <li className="flex items-center justify-center md:justify-start gap-2"><FaEnvelope /><a href="mailto:contact@239homeservices.com" className="hover:text-brand-accent">contact@239homeservices.com</a></li>
            </ul>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <a href="#" aria-label="Facebook" className="text-2xl text-blue-100 hover:text-brand-accent"><FaFacebook /></a>
              <a href="#" aria-label="Instagram" className="text-2xl text-blue-100 hover:text-brand-accent"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn" className="text-2xl text-blue-100 hover:text-brand-accent"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-500/40 text-center text-blue-100 text-sm">
          <p>&copy; {new Date().getFullYear()} 239 Home Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;