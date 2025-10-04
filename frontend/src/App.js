import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PodcastSection from './components/PodcastSection';
import AboutSection from './components/AboutSection';
import LeadershipSection from './components/LeadershipSection';
import ResourcesSection from './components/ResourcesSection';
import SolutionsSection from './components/SolutionsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';
import './App.css';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PodcastSection />
      <AboutSection />
      <ResourcesSection />
      <SolutionsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;