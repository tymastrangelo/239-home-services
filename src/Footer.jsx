import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const navLinks = ['About', 'Services', 'Pricing', 'Contact'];
  const socialLinks = [
    { icon: <FaFacebook />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-2">239 Home Services</h3>
            <p className="text-gray-400">Your trusted partner in home watch and concierge services.</p>
          </div>

          {/* Quick Links */}
          <div className="md:mx-auto">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(item => (
                <li key={item}>
                  <a href={item === 'About' ? '/about' : `#${item.toLowerCase()}`} className="text-gray-300 hover:text-brand-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:ml-auto">
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => ( <a key={index} href={social.href} aria-label={`Follow us on ${social.href}`} className="text-gray-300 hover:text-brand-accent text-2xl transition-colors">{social.icon}</a> ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} 239 Home Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;