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

// About Pages
import OurStoryPage from './pages/About/OurStoryPage';
import OurTeamPage from './pages/About/OurTeamPage';
import CareersPage from './pages/About/CareersPage';
import NewsPressPage from './pages/About/NewsPressPage';

// Solutions Pages
import StrategicPlanningPage from './pages/Solutions/StrategicPlanningPage';
import DigitalTransformationPage from './pages/Solutions/DigitalTransformationPage';
import LeadershipDevelopmentPage from './pages/Solutions/LeadershipDevelopmentPage';
import OperationalExcellencePage from './pages/Solutions/OperationalExcellencePage';
import ChangeManagementPage from './pages/Solutions/ChangeManagementPage';
import BusinessInnovationPage from './pages/Solutions/BusinessInnovationPage';

// Resources Pages
import CaseStudiesPage from './pages/Resources/CaseStudiesPage';
import PodcastPage from './pages/Resources/PodcastPage';

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
          
          {/* Industry Pages */}
          <Route path="/industries/technology" element={<Layout><TechnologyPage /></Layout>} />
          <Route path="/industries/healthcare" element={<Layout><HealthcarePage /></Layout>} />
          <Route path="/industries/financial-services" element={<Layout><FinancialServicesPage /></Layout>} />
          <Route path="/industries/manufacturing" element={<Layout><ManufacturingPage /></Layout>} />
          <Route path="/industries/energy" element={<Layout><EnergyPage /></Layout>} />
          <Route path="/industries/retail" element={<Layout><RetailPage /></Layout>} />
          
          {/* About Pages */}
          <Route path="/about/our-story" element={<Layout><OurStoryPage /></Layout>} />
          <Route path="/about/our-team" element={<Layout><OurTeamPage /></Layout>} />
          <Route path="/about/careers" element={<Layout><CareersPage /></Layout>} />
          <Route path="/about/news-press" element={<Layout><NewsPressPage /></Layout>} />
          
          {/* Solutions Pages */}
          <Route path="/solutions/strategic-planning" element={<Layout><StrategicPlanningPage /></Layout>} />
          <Route path="/solutions/digital-transformation" element={<Layout><DigitalTransformationPage /></Layout>} />
          <Route path="/solutions/leadership-development" element={<Layout><LeadershipDevelopmentPage /></Layout>} />
          <Route path="/solutions/operational-excellence" element={<Layout><OperationalExcellencePage /></Layout>} />
          <Route path="/solutions/change-management" element={<Layout><ChangeManagementPage /></Layout>} />
          <Route path="/solutions/business-innovation" element={<Layout><BusinessInnovationPage /></Layout>} />
          
          {/* Resources Pages */}
          <Route path="/resources/case-studies" element={<Layout><CaseStudiesPage /></Layout>} />
          <Route path="/resources/podcast" element={<Layout><PodcastPage /></Layout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;