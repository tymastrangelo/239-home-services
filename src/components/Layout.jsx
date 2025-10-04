import React, { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
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
      <main className="flex-grow">
        {/* The Outlet component renders the current route's component */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;