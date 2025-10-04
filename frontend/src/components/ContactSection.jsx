import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from '../hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    phone: '',
    company: '',
    jobTitle: '',
    industry: '',
    interest: '',
    message: '',
    newsletter: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const industries = [
    'Technology',
    'Healthcare',
    'Financial Services',
    'Manufacturing',
    'Retail',
    'Energy',
    'Telecommunications',
    'Aerospace',
    'Automotive',
    'Pharmaceuticals',
    'Real Estate',
    'Media & Entertainment',
    'Education',
    'Government',
    'Non-profit',
    'Other'
  ];
  
  const interests = [
    'Strategic Consulting Services',
    'Digital Transformation',
    'Leadership Development',
    'Operational Excellence',
    'Change Management',
    'Business Model Innovation',
    'Career Opportunities',
    'Partnership Opportunities',
    'Speaking Engagements',
    'Other'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Get backend URL from environment
      const backendUrl = process.env.REACT_APP_BACKEND_URL || window.location.origin;
      console.log('Submitting to:', `${backendUrl}/api/contact`);
      console.log('Form data:', formData);
      
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "An EMC-US representative will contact you promptly.",
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          country: '',
          phone: '',
          company: '',
          jobTitle: '',
          industry: '',
          interest: '',
          message: '',
          newsletter: false
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Form */}
            <div>
              <Card className="border-0 bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Let's be partners
                    </h2>
                    <p className="text-gray-600 text-lg">
                      Please complete the form and an EMC-US representative will contact you promptly. 
                      See how we can help move your business strategy forward.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-gray-700 font-semibold">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-gray-700 font-semibold">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-gray-700 font-semibold">Email *</Label>
                        <Input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone *</Label>
                        <Input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Company and Job Title */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company" className="text-gray-700 font-semibold">Company Name *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="jobTitle" className="text-gray-700 font-semibold">Job Title *</Label>
                        <Input
                          id="jobTitle"
                          value={formData.jobTitle}
                          onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                          className="mt-2 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Industry and Interest */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="industry" className="text-gray-700 font-semibold">Industry *</Label>
                        <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                          <SelectTrigger className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map((industry) => (
                              <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="interest" className="text-gray-700 font-semibold">Your Interest *</Label>
                        <Select value={formData.interest} onValueChange={(value) => handleInputChange('interest', value)}>
                          <SelectTrigger className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                            <SelectValue placeholder="Select interest" />
                          </SelectTrigger>
                          <SelectContent>
                            {interests.map((interest) => (
                              <SelectItem key={interest} value={interest}>{interest}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-semibold">Tell us more about your request *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        rows={4}
                        placeholder="Please provide details about how we can help you..."
                        required
                      />
                    </div>
                    
                    {/* Newsletter checkbox */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="newsletter"
                        checked={formData.newsletter}
                        onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <Label htmlFor="newsletter" className="text-sm text-gray-600">
                        Would you like to be updated on EMC-US news, events and thought leadership?
                      </Label>
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300"
                    >
                      {isSubmitting ? 'Sending...' : 'Contact Us'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Right side - Image and contact info */}
            <div className="text-white">
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1750768145390-f0ad18d3e65b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxleGVjdXRpdmUlMjBtYW5hZ2VtZW50JTIwY29uc3VsdGluZ3xlbnwwfHx8fDE3NTk1NjMyODd8MA&ixlib=rb-4.1.0&q=85"
                  alt="EMC-US representative"
                  className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-white/80">javed@emcindia.in</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-white/80">+1 856 762 0564 (US)</p>
                    <p className="text-white/80">+91 9223308247 (India)</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Headquarters</p>
                    <p className="text-white/80">525 Route 73 North STE 104</p>
                    <p className="text-white/80">Marlton, New Jersey 08053, USA</p>
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

export default ContactSection;