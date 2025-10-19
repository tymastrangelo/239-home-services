import React, { useState, useEffect } from "react"; // Keep useEffect for body scroll lock
// Import logo asset so Vite can resolve it during dev (enables HMR)
import logoImg from "../assets/logo/logo-1920x1080.png";
import { FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if user scrolls more than 10px
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 shadow-md">
        <div
          className={`hidden md:block bg-gray-100 text-brand-primary text-sm transition-all duration-300 ease-in-out overflow-hidden ${
            isScrolled ? "max-h-0" : "max-h-16"
          }`}
        >
        <div className={`mx-auto max-w-screen-xl px-6 lg:px-8 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-0' : 'py-2'}`}>
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-brand-accent">
              <FaPhone /> (123) 456-7890
            </a>
            <a href="mailto:contact@239homeservices.com" className="flex items-center gap-2 hover:text-brand-accent">
              <FaEnvelope /> contact@239homeservices.com
            </a>
          </div>
          <span>
            Locally Owned & Fully Insured
          </span>
        </div>
      </div>
      <div className="bg-brand-primary">
        <nav
          className="mx-auto max-w-screen-xl px-6 lg:px-8 py-3 flex justify-between items-center"
        >
          <Link to="/" className="flex items-center gap-4">
            <span className="font-bold text-2xl text-white">239 Home Services</span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} to={item.path} 
                className="font-semibold text-white hover:text-brand-accent transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu" className="p-2 -mr-2" >
              <FaBars className="text-2xl text-white" />
            </button>
          </div>
        </nav>
      </div>
    </header>

    {/* Mobile Menu Overlay */}
    <div
      className={`fixed inset-0 bg-brand-primary/95 backdrop-blur-sm z-50 transform ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out md:hidden`}
    >
      <div className="flex justify-end p-6">
        <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
          <FaTimes className="text-3xl text-white" />
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
            className="text-white text-3xl font-semibold hover:text-brand-accent"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
    </>
  );
};

export default Header;