import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Content */}
      <div className="flex items-center justify-center min-h-screen px-4 pt-20">
        <div className="text-left max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-4 font-medium">
            Your executive management consulting partner
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Our name means excellence. We go above and beyond.
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Discover EMC
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-purple-600 hover:text-purple-700 px-8 py-4 text-lg font-semibold transition-all duration-300 group"
            >
              Explore solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;