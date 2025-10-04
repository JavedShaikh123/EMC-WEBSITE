import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ArrowRight, ShoppingCart, Smartphone, Users, TrendingUp, Package, Store } from 'lucide-react';

const RetailPage = () => {
  const challenges = [
    {
      icon: ShoppingCart,
      title: "Omnichannel Experience",
      description: "Create seamless customer experiences across all channels and touchpoints"
    },
    {
      icon: Smartphone,
      title: "Digital Commerce",
      description: "Transform traditional retail with innovative digital commerce solutions"
    },
    {
      icon: Users,
      title: "Customer Engagement",
      description: "Build deeper customer relationships and drive loyalty through personalization"
    },
    {
      icon: TrendingUp,
      title: "Market Competition",
      description: "Stay competitive in rapidly evolving retail landscapes and consumer preferences"
    },
    {
      icon: Package,
      title: "Supply Chain Efficiency",
      description: "Optimize inventory management and fulfillment operations"
    },
    {
      icon: Store,
      title: "Store Operations",
      description: "Enhance in-store experiences and operational efficiency"
    }
  ];

  const solutions = [
    {
      title: "Digital Transformation",
      description: "Transform retail operations with comprehensive digital strategies that enhance customer experiences and drive growth.",
      features: ["E-commerce platforms", "Mobile optimization", "Digital payments", "Customer analytics"]
    },
    {
      title: "Customer Experience Strategy",
      description: "Design exceptional customer experiences that build loyalty and drive business growth across all channels.",
      features: ["Journey mapping", "Personalization", "Loyalty programs", "Service optimization"]
    },
    {
      title: "Retail Operations Excellence",
      description: "Optimize retail operations for maximum efficiency, profitability, and customer satisfaction.",
      features: ["Inventory optimization", "Store operations", "Workforce planning", "Performance metrics"]
    }
  ];

  const caseStudies = [
    {
      title: "Omnichannel Retail Transformation",
      industry: "Retail",
      challenge: "Integrate online and offline customer experiences",
      result: "65% increase in customer satisfaction, 40% sales growth",
      image: "https://images.pexels.com/photos/5990271/pexels-photo-5990271.jpeg"
    },
    {
      title: "Digital Commerce Platform",
      industry: "Fashion Retail",
      challenge: "Launch comprehensive e-commerce platform",
      result: "300% online revenue growth, 50% new customer acquisition",
      image: "https://images.pexels.com/photos/8353821/pexels-photo-8353821.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Retail
              </span>{" "}
              Consulting
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Transform retail experiences and drive growth with strategic consulting that 
              optimizes operations, enhances customer engagement, and delivers exceptional omnichannel experiences.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Retail Industry Challenges
              </h2>
              <p className="text-lg text-gray-600">
                Strategic solutions for modern retail challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-900">
                        {challenge.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {challenge.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Retail Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive consulting services for retail companies
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <CardContent className="p-8">
                    <h3 className="font-bold text-xl mb-4 text-gray-900">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-lg text-gray-600">
                Transforming retail experiences and driving growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-gray-900">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Result:</strong> {study.result}
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                    >
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Retail Strategy?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Connect with our retail experts to enhance customer experiences and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Download Brochure
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RetailPage;