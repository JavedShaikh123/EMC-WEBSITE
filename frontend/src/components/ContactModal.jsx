import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, Globe, X } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Contact EMC
            </span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-6">
          {/* Mohammed Javed Shaikh Profile */}
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
              EMC
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Mohammed Javed Shaikh
            </h3>
            <p className="text-purple-600 font-semibold">
              Executive Management Consultant
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <a href="mailto:javed@emc-us.com" className="text-purple-600 hover:text-purple-700 transition-colors">
                  javed@emc-us.com
                </a>
                <br />
                <a href="mailto:javed@emcindia.in" className="text-purple-500 hover:text-purple-600 transition-colors text-sm">
                  javed@emcindia.in
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <a href="tel:+18567620564" className="text-purple-600 hover:text-purple-700 transition-colors block">
                  +1 856 762 0564 (US)
                </a>
                <a href="tel:+919223308247" className="text-purple-600 hover:text-purple-700 transition-colors">
                  +91 9223308247 (India)
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Address</p>
                <p className="text-gray-700 text-sm">
                  525 Route 73 North STE 104<br />
                  Five Greentree Centre<br />
                  Marlton, New Jersey 08053, USA
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Website</p>
                <a href="https://www.emc-us.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 transition-colors">
                  www.emc-us.com
                </a>
              </div>
            </div>
          </div>

          {/* Global Presence */}
          <div className="mt-6 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
            <h4 className="font-bold text-gray-900 mb-3 text-center">Global Presence</h4>
            <div className="flex justify-center gap-3">
              <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs font-semibold">
                🇮🇳 INDIA
              </span>
              <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs font-semibold">
                🇺🇸 USA
              </span>
              <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs font-semibold">
                🌍 MIDDLE EAST
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <Button 
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              onClick={() => window.location.href = 'mailto:javed@emc-us.com'}
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
              onClick={() => window.location.href = 'tel:+18567620564'}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;