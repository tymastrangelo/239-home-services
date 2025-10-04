import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      {/* All pages will be rendered within the Layout component */}
      <Route path="/" element={<Layout />}>
        {/* The index route is the default page for the parent path "/" */}
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="pricing" element={<PricingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
