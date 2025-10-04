import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Content */}
      <div className="flex items-center justify-center min-h-screen px-4 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text Content */}
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Executive Management Consultant
                </span>
              </h1>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Your Talent Acquisition Partner
                </span>
              </h2>
              
              <p className="text-xl text-gray-700 mb-8 max-w-2xl">
                Connecting leading companies with highly skilled professionals across technology, 
                healthcare, finance, and more. We combine industry expertise with deep understanding 
                of client needs.
              </p>
              
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

            {/* Right side - Beautiful Executive Headshot */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBleGVjdXRpdmUlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NTk2MDc1NzJ8MA&ixlib=rb-4.1.0&q=85"
                    alt="Beautiful Female Executive"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <Play className="h-6 w-6 text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;