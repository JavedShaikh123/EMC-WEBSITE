import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ArrowRight, Zap, Leaf, Battery, Sun, Wind, Fuel } from 'lucide-react';

const EnergyPage = () => {
  const challenges = [
    {
      icon: Sun,
      title: "Renewable Energy Transition",
      description: "Navigate the shift to sustainable energy sources and clean technologies"
    },
    {
      icon: Battery,
      title: "Energy Storage Solutions",
      description: "Implement advanced energy storage and grid management systems"
    },
    {
      icon: Zap,
      title: "Grid Modernization",
      description: "Upgrade infrastructure for smart grid capabilities and efficiency"
    },
    {
      icon: Leaf,
      title: "Sustainability Goals",
      description: "Achieve environmental targets and carbon neutrality objectives"
    },
    {
      icon: Wind,
      title: "Market Volatility",
      description: "Manage price fluctuations and regulatory changes in energy markets"
    },
    {
      icon: Fuel,
      title: "Asset Optimization",
      description: "Maximize performance and lifecycle value of energy assets"
    }
  ];

  const solutions = [
    {
      title: "Energy Transition Strategy",
      description: "Develop comprehensive strategies for transitioning to renewable energy and achieving sustainability goals.",
      features: ["Renewable integration", "Carbon reduction", "Technology roadmaps", "Investment planning"]
    },
    {
      title: "Operational Excellence",
      description: "Optimize energy operations for maximum efficiency, reliability, and cost-effectiveness.",
      features: ["Asset performance", "Maintenance optimization", "Safety improvements", "Cost reduction"]
    },
    {
      title: "Digital Energy Solutions",
      description: "Leverage digital technologies to transform energy operations and customer experiences.",
      features: ["Smart grid technologies", "IoT implementation", "Data analytics", "Digital platforms"]
    }
  ];

  const caseStudies = [
    {
      title: "Renewable Energy Portfolio Optimization",
      industry: "Energy",
      challenge: "Integrate 60% renewable energy sources",
      result: "70% renewable integration, 35% cost savings",
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Smart Grid Implementation",
      industry: "Utilities",
      challenge: "Modernize aging grid infrastructure",
      result: "40% improved reliability, 25% efficiency gains",
      image: "https://images.unsplash.com/photo-1562935345-5080389daccd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU5NTYzMjkzfDA&ixlib=rb-4.1.0&q=85"
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
                Energy
              </span>{" "}
              Consulting
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Navigate the energy transition with strategic consulting that drives sustainable growth, 
              operational excellence, and digital transformation across the energy value chain.
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

      {/* Rest of the component follows the same pattern as other industry pages */}
      {/* Challenges Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Energy Industry Challenges
              </h2>
              <p className="text-lg text-gray-600">
                Strategic solutions for energy transformation and sustainability
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
                Our Energy Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive consulting services for energy companies
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
                Driving energy transformation and sustainability
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
              Ready to Transform Your Energy Strategy?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Connect with our energy experts to navigate the transition to sustainable energy solutions.
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

export default EnergyPage;