import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import PodcastSection from './components/PodcastSection';
import AboutSection from './components/AboutSection';
import ResourcesSection from './components/ResourcesSection';
import SolutionsSection from './components/SolutionsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

// Industry Pages
import TechnologyPage from './pages/Industries/TechnologyPage';
import HealthcarePage from './pages/Industries/HealthcarePage';
import FinancialServicesPage from './pages/Industries/FinancialServicesPage';
import ManufacturingPage from './pages/Industries/ManufacturingPage';
import EnergyPage from './pages/Industries/EnergyPage';
import RetailPage from './pages/Industries/RetailPage';

import './App.css';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PodcastSection />
      <AboutSection />
      <ResourcesSection />
      <SolutionsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/industries/technology" element={<Layout><TechnologyPage /></Layout>} />
          <Route path="/industries/healthcare" element={<Layout><HealthcarePage /></Layout>} />
          <Route path="/industries/financial-services" element={<Layout><FinancialServicesPage /></Layout>} />
          <Route path="/industries/manufacturing" element={<Layout><ManufacturingPage /></Layout>} />
          <Route path="/industries/energy" element={<Layout><EnergyPage /></Layout>} />
          <Route path="/industries/retail" element={<Layout><RetailPage /></Layout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;