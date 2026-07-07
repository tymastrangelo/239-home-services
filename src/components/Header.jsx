import React, { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { CONTACT, tel } from "../config/contact";
import Button from "./ui/Button";
import markBrass from "../assets/logo/mark-brass.png";
import markLight from "../assets/logo/mark-light.png";

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
];

const Wordmark = () => (
  <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="239 Home Services home">
    <img src={markBrass} alt="" className="h-10 w-auto" />
    <span className="font-display text-2xl leading-none text-ink">
      <span className="text-brass">239</span> Home Services
    </span>
  </Link>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <>
      {/* Utility bar: not sticky, scrolls away naturally so the header never changes height */}
      <div className="hidden md:block bg-ink text-mist">
        <div className="mx-auto max-w-content px-6 lg:px-8 py-2 flex justify-between items-center font-mono text-xs tracking-wider">
          <div className="flex items-center gap-6">
            {CONTACT.phones.map((p) => (
              <a key={p.raw} href={tel(p.raw)} aria-label={`Call ${p.display}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <FaPhone className="text-brass" /> {p.display}
              </a>
            ))}
            <a href={`mailto:${CONTACT.email}`} className="hidden lg:flex items-center gap-2 hover:text-white transition-colors">
              <FaEnvelope className="text-brass" /> {CONTACT.email}
            </a>
          </div>
          <span className="uppercase">Locally owned · Fully insured</span>
        </div>
      </div>

      <header className={`sticky top-0 z-40 bg-white ${isScrolled ? 'shadow-md' : ''} transition-shadow duration-300`}>
        <nav className="mx-auto max-w-content px-6 lg:px-8 py-4 flex justify-between items-center">
          <Wordmark />
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-brass' : 'text-ink hover:text-brass'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Button to="/#contact" variant="accent" size="md">Request a consultation</Button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu" className="p-2 -mr-2">
              <FaBars className="text-2xl text-ink" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-ink-deep/95 backdrop-blur-sm z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-6">
          <span className="flex items-center gap-3">
            <img src={markLight} alt="" className="h-8 w-auto" />
            <span className="font-display text-xl text-white"><span className="text-brass">239</span> Home Services</span>
          </span>
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <FaTimes className="text-3xl text-white" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-24 space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-white font-display text-3xl hover:text-brass transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-brass font-display text-3xl hover:text-white transition-colors"
          >
            Contact
          </Link>
          <div className="pt-6 flex flex-col items-center gap-3 font-mono text-sm text-mist">
            {CONTACT.phones.map((p) => (
              <a key={p.raw} href={tel(p.raw)} className="flex items-center gap-2">
                <FaPhone className="text-brass" /> {p.display}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
