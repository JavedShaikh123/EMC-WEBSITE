import React from 'react';
import { Card, CardContent } from './ui/card';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const LeadershipSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-gray-600">
              Driving excellence across three continents
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-50 shadow-xl rounded-3xl overflow-hidden">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Profile Image */}
                  <div className="text-center lg:text-left">
                    <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                      MJS
                    </div>
                  </div>
                  
                  {/* Profile Information */}
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      Mohammed Javed Shaikh
                    </h3>
                    <p className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold mb-6">
                      Executive Management Consultant
                    </p>
                    
                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                      Leading executive management consulting across India, USA, and Middle East, 
                      Mohammed Javed Shaikh brings decades of experience in driving business transformation 
                      and strategic excellence for organizations worldwide.
                    </p>
                    
                    {/* Contact Information */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <Mail className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Email</p>
                          <a href="mailto:javed@emcindia.in" className="text-purple-600 hover:text-purple-700 transition-colors">
                            javed@emcindia.in
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <Phone className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Phone</p>
                          <div className="space-y-1">
                            <p className="text-purple-600">+1 856 762 0564 (US)</p>
                            <p className="text-purple-600">+91 9223308247 (India)</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Address</p>
                          <p className="text-gray-700">
                            525 Route 73 North STE 104<br />
                            Five Greentree Centre<br />
                            Marlton, New Jersey 08053, USA
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <Globe className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Websites</p>
                          <div className="space-y-1">
                            <a href="https://www.emcindia.in" target="_blank" rel="noopener noreferrer" className="block text-purple-600 hover:text-purple-700 transition-colors">
                              www.emcindia.in
                            </a>
                            <a href="https://www.emc-us.com" target="_blank" rel="noopener noreferrer" className="block text-purple-600 hover:text-purple-700 transition-colors">
                              www.emc-us.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Global Presence */}
                    <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg">
                      <h4 className="font-bold text-gray-900 mb-3">Global Presence</h4>
                      <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold">
                          🇮🇳 INDIA
                        </span>
                        <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold">
                          🇺🇸 USA
                        </span>
                        <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-semibold">
                          🌍 MIDDLE EAST
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;