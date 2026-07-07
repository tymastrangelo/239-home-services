import React, { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  // This effect handles scrolling for anchor links and scrolls to top on new page loads.
  useLayoutEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // "contact"
      // Use a timeout to ensure the element is rendered before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Header />
      {/* Keyed by pathname so each page mounts with a clean fade */}
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="flex-grow"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </>
  );
};

export default Layout;
