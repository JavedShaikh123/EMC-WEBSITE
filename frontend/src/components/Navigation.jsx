import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import ContactModal from './ContactModal';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  const navigationItems = [
    {
      name: 'Solutions',
      items: [
        { name: 'Strategic Planning', href: '/solutions/strategic-planning' },
        { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
        { name: 'Leadership Development', href: '/solutions/leadership-development' },
        { name: 'Operational Excellence', href: '/solutions/operational-excellence' },
        { name: 'Change Management', href: '/solutions/change-management' },
        { name: 'Business Innovation', href: '/solutions/business-innovation' }
      ]
    },
    {
      name: 'Industries',
      items: [
        { name: 'Technology', href: '/industries/technology' },
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'Financial Services', href: '/industries/financial-services' },
        { name: 'Manufacturing', href: '/industries/manufacturing' },
        { name: 'Energy', href: '/industries/energy' },
        { name: 'Retail', href: '/industries/retail' }
      ]
    },
    {
      name: 'Resources',
      items: [
        { name: 'Case Studies', href: '/resources/case-studies' },
        { name: 'White Papers', href: '/resources/white-papers' },
        { name: 'Webinars', href: '/resources/webinars' },
        { name: 'Podcast', href: '/resources/podcast' },
        { name: 'Blog', href: '/resources/blog' }
      ]
    },
    {
      name: 'About',
      items: [
        { name: 'Our Story', href: '/about/our-story' },
        { name: 'Our Team', href: '/about/our-team' },
        { name: 'Careers', href: '/about/careers' },
        { name: 'News & Press', href: '/about/news-press' }
      ]
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                EMC
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 py-2">
                  <span>{item.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {/* Dropdown */}
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-4">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-6 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              className="hidden md:flex bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full px-6"
              onClick={() => setIsContactModalOpen(true)}
            >
              Contact us
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button 
                    className="flex items-center justify-between w-full text-left font-medium text-gray-700 hover:text-purple-600 transition-colors"
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  >
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="mt-2 pl-4 space-y-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block py-2 text-gray-600 hover:text-purple-600 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full"
                  onClick={() => {
                    setIsContactModalOpen(true);
                    setIsOpen(false);
                  }}
                >
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;