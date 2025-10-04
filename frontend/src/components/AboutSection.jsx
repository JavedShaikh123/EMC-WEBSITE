import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: '3k', label: 'executives' },
    { number: '244', label: 'clients' },
    { number: '113', label: 'countries' },
    { number: '51', label: 'languages' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              To <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">find the best solutions</span>, find the right partner.
            </h2>
            
            <div className="max-w-2xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              At EMC, we know it takes expertise to drive transformation – not to mention collaboration. 
              Especially when you're looking to address specific challenges now and to grow into the future. 
              As a leading executive management consulting partner, we combine the best people, processes 
              and strategies to do precisely that for you and your business.
            </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-purple-600 hover:text-purple-700 px-8 py-4 text-lg font-semibold transition-all duration-300 group"
            >
              All resources
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;