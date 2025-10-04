import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Toaster } from './ui/toaster';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;