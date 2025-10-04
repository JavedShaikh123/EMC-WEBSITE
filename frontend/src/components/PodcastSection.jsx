import React from 'react';
import { Button } from './ui/button';
import { Play, ArrowRight } from 'lucide-react';

const PodcastSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-orange-400 font-semibold text-lg">'The Executive Edge' podcast</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Take the journey to
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              business excellence 2030
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            New episodes! Explore the evolving landscape of executive leadership and how to navigate the strategic trends shaping tomorrow's business world.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Listen now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;