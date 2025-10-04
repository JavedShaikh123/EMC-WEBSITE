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

            {/* Right side - 5 Circular Video Clips */}
            <div className="grid grid-cols-2 gap-8">
              {/* Video 1 - Corporate Executive Presentation */}
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl relative group cursor-pointer">
                <iframe
                  className="w-full h-full object-cover scale-150"
                  src="https://www.youtube.com/embed/TQMbvJNRpLE?autoplay=1&mute=1&loop=1&playlist=TQMbvJNRpLE&controls=0&showinfo=0&rel=0&modestbranding=1"
                  title="Executive Presentation"
                  frameBorder="0"
                  allow="autoplay; muted"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="h-6 w-6 text-purple-600 ml-1" />
                  </div>
                </div>
              </div>

              {/* Video 2 - Business Discussion */}
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl relative group cursor-pointer">
                <iframe
                  className="w-full h-full object-cover scale-150"
                  src="https://www.youtube.com/embed/yIdWcWlyNOY?autoplay=1&mute=1&loop=1&playlist=yIdWcWlyNOY&controls=0&showinfo=0&rel=0&modestbranding=1"
                  title="Business Discussion"
                  frameBorder="0"
                  allow="autoplay; muted"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="h-6 w-6 text-purple-600 ml-1" />
                  </div>
                </div>
              </div>

              {/* Video 3 - Leadership Talk */}
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl relative group cursor-pointer">
                <iframe
                  className="w-full h-full object-cover scale-150"
                  src="https://www.youtube.com/embed/ZCAC2zKnb34?autoplay=1&mute=1&loop=1&playlist=ZCAC2zKnb34&controls=0&showinfo=0&rel=0&modestbranding=1"
                  title="Leadership Talk"
                  frameBorder="0"
                  allow="autoplay; muted"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="h-6 w-6 text-purple-600 ml-1" />
                  </div>
                </div>
              </div>

              {/* Video 4 - Corporate Strategy */}
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl relative group cursor-pointer">
                <iframe
                  className="w-full h-full object-cover scale-150"
                  src="https://www.youtube.com/embed/fvoLmsXKkYM?autoplay=1&mute=1&loop=1&playlist=fvoLmsXKkYM&controls=0&showinfo=0&rel=0&modestbranding=1"
                  title="Corporate Strategy"
                  frameBorder="0"
                  allow="autoplay; muted"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="h-6 w-6 text-purple-600 ml-1" />
                  </div>
                </div>
              </div>

              {/* Video 5 - Center Bottom Executive Interview */}
              <div className="col-span-2 flex justify-center mt-4">
                <div className="w-56 h-56 rounded-full overflow-hidden shadow-2xl relative group cursor-pointer">
                  <iframe
                    className="w-full h-full object-cover scale-150"
                    src="https://www.youtube.com/embed/78qqGU6ki4A?autoplay=1&mute=1&loop=1&playlist=78qqGU6ki4A&controls=0&showinfo=0&rel=0&modestbranding=1"
                    title="Executive Interview"
                    frameBorder="0"
                    allow="autoplay; muted"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="h-7 w-7 text-purple-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-sm mb-1">Executive Interview</h3>
                    <p className="text-xs text-white/80">Leadership insights</p>
                  </div>
                </div>
              </div>

              {/* Podcast highlight card */}
              <div className="col-span-2 bg-white rounded-2xl p-6 shadow-xl max-w-md mx-auto mt-6">
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
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white w-full"
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