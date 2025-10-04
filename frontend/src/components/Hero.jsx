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

            {/* Right side - Large Circular Video Clips */}
            <div className="relative flex flex-col space-y-8">
              {/* Top row - Two large circular videos */}
              <div className="flex justify-center space-x-8">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl relative group cursor-pointer">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="https://videos.pexels.com/video-files/3196034/3196034-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="h-6 w-6 text-purple-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-sm mb-1">Executive Strategy</h3>
                    <p className="text-xs text-white/80">Leadership discussion</p>
                  </div>
                </div>

                <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl relative group cursor-pointer">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="https://videos.pexels.com/video-files/4226861/4226861-uhd_2560_1440_24fps.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="h-6 w-6 text-purple-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-sm mb-1">Talent Acquisition</h3>
                    <p className="text-xs text-white/80">Corporate interview</p>
                  </div>
                </div>
              </div>

              {/* Bottom row - Two large circular videos */}
              <div className="flex justify-center space-x-8">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl relative group cursor-pointer">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="https://videos.pexels.com/video-files/5725953/5725953-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="h-6 w-6 text-purple-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-sm mb-1">Business Growth</h3>
                    <p className="text-xs text-white/80">Executive presentation</p>
                  </div>
                </div>

                <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl relative group cursor-pointer">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="h-6 w-6 text-purple-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-sm mb-1">Team Leadership</h3>
                    <p className="text-xs text-white/80">Corporate training</p>
                  </div>
                </div>
              </div>

              {/* Podcast highlight card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">The Executive Edge Podcast</h4>
                    <p className="text-gray-600 text-sm">Weekly corporate insights</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  Join Mohammed Javed Shaikh and industry experts discussing talent acquisition strategies and executive leadership.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Watch Latest Episode
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;