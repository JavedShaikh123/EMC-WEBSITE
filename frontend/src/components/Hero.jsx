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

            {/* Right side - Circular Video Clips */}
            <div className="relative">
              {/* Main large circular video */}
              <div className="relative mb-8">
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl relative group cursor-pointer">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1c9a9a4a4&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="h-8 w-8 text-purple-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-lg mb-1">Executive Leadership Insights</h3>
                    <p className="text-sm text-white/80">Mohammed Javed Shaikh on talent strategy</p>
                  </div>
                </div>
              </div>

              {/* Smaller circular videos positioned around */}
              <div className="absolute top-0 right-0">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl relative group cursor-pointer">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="https://player.vimeo.com/external/459879808.sd.mp4?s=7f9a1b0b0b6b7b8b9b0b1b2b3b4b5b6b7b8b9b0b&profile_id=165" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="h-4 w-4 text-purple-600 ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-0">
                <div className="w-28 h-28 rounded-full overflow-hidden shadow-xl relative group cursor-pointer">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="https://player.vimeo.com/external/427016456.sd.mp4?s=6f8b9c0c1c2c3c4c5c6c7c8c9c0c1c2c3c4c5c6c&profile_id=165" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="h-4 w-4 text-purple-600 ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 right-8">
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl relative group cursor-pointer">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="https://player.vimeo.com/external/415298717.sd.mp4?s=5e7f8g9g0g1g2g3g4g5g6g7g8g9g0g1g2g3g4g5g&profile_id=165" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="h-3 w-3 text-purple-600 ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Podcast highlight card */}
              <div className="absolute -bottom-4 right-4 bg-white rounded-2xl p-4 shadow-xl max-w-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <Play className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">The Executive Edge</h4>
                    <p className="text-gray-600 text-xs">Live discussions</p>
                  </div>
                </div>
                <p className="text-gray-700 text-xs">
                  Join our live corporate discussions on talent acquisition strategies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;