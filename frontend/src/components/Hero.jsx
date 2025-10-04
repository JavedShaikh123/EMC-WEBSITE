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

            {/* Right side - Corporate Discussion Videos */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {/* Video 1 - Executive Interview */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <iframe
                    className="w-full h-64 object-cover"
                    src="https://www.youtube.com/embed/TQMbvJNRpLE"
                    title="Executive Leadership Discussion"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg">Executive Leadership Insights</h3>
                    <p className="text-sm text-white/80">Strategic discussions on talent acquisition</p>
                  </div>
                </div>

                {/* Video 2 - Corporate Strategy Discussion */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <iframe
                    className="w-full h-64 object-cover"
                    src="https://www.youtube.com/embed/yIdWcWlyNOY"
                    title="Corporate Strategy Discussion"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg">Corporate Strategy Roundtable</h3>
                    <p className="text-sm text-white/80">Expert panel on business transformation</p>
                  </div>
                </div>
              </div>

              {/* Featured Video Highlight */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">The Executive Edge Podcast</h3>
                    <p className="text-gray-600 text-sm">Weekly insights from industry leaders</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Join Mohammed Javed Shaikh and industry experts discussing the latest trends 
                  in talent acquisition and executive management consulting.
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                >
                  Watch Latest Episode
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;