import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { CONTACT, tel } from '../config/contact';
import { Link } from 'react-router-dom';
import markLight from '../assets/logo/mark-light.png';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/#contact' },
];

const Footer = () => {
  return (
    <footer className="bg-ink-deep text-mist">
      <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left items-start">
          <div>
            <p className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img src={markLight} alt="" className="h-10 w-auto" />
              <span className="font-display text-2xl text-white">
                <span className="text-brass">239</span> Home Services
              </span>
            </p>
            <p className="max-w-xs mx-auto md:mx-0 leading-relaxed">
              Your investment. Our priority. Home watch, keyholding, and concierge care for seasonal homes in Southwest Florida.
            </p>
          </div>

          <div>
            <h4 className="eyebrow text-brass mb-5">Navigate</h4>
            <ul className="space-y-3">
              {navItems.map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-brass mb-5">Contact</h4>
            <ul className="space-y-3">
              {CONTACT.phones.map(p => (
                <li key={p.raw} className="flex items-center justify-center md:justify-start gap-3">
                  <FaPhone className="text-brass" />
                  <a href={tel(p.raw)} className="hover:text-white transition-colors font-mono text-sm" aria-label={`Call ${p.display}`}>{p.display}</a>
                </li>
              ))}
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaEnvelope className="text-brass" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">{CONTACT.email}</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaMapMarkerAlt className="text-brass" />
                <span>Marco Island & South Naples, FL</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 font-mono text-xs tracking-wider">
          <p>&copy; {new Date().getFullYear()} 239 Home Services. All rights reserved.</p>
          <p className="text-mist/70">25.94° N · 81.72° W · Marco Island, Florida</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
