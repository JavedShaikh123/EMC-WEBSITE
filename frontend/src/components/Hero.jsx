import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBtYW5hZ2VtZW50JTIwY29uc3VsdGluZ3xlbnwwfHx8fDE3NTk1NjMyODd8MA&ixlib=rb-4.1.0&q=85)'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your executive management
            <br />
            <span className="bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent">
              consulting partner
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Our name means excellence. We go above and beyond to transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Discover EMC-US
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Explore solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;